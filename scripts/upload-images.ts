import * as admin from 'firebase-admin';
import * as fs from 'node:fs';
import * as path from 'node:path';

const COMPRESSED_DIR = path.join(process.cwd(), 'images', 'compressed');
const SERVICE_ACCOUNT_PATH = path.join(process.cwd(), 'service-account.json');
const SERVICE_TS_PATH = path.join(process.cwd(), 'src', 'app', 'services', 'image.service.ts');

function loadEnv(): void {
    const envPath = path.join(process.cwd(), '.env');
    if (!fs.existsSync(envPath)) return;
    for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const idx = trimmed.indexOf('=');
        if (idx === -1) continue;
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim();
        if (key && !(key in process.env)) process.env[key] = val;
    }
}

function buildCredential(): admin.credential.Credential {
    if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        return admin.credential.applicationDefault();
    }
    if (fs.existsSync(SERVICE_ACCOUNT_PATH)) {
        const key = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, 'utf-8')) as admin.ServiceAccount;
        return admin.credential.cert(key);
    }
    throw new Error(
        'No Firebase credentials found.\n' +
        'Either:\n' +
        '  a) Set GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json in .env\n' +
        '  b) Place service-account.json in the project root\n' +
        '  c) Run: gcloud auth application-default login',
    );
}

function generateService(urls: string[]): string {
    const list = urls.map((u) => `        '${u}'`).join(',\n');
    return (
        `import { Injectable } from '@angular/core';\n` +
        `\n` +
        `@Injectable({ providedIn: 'root' })\n` +
        `export class ImageService {\n` +
        `    images: string[] = [\n` +
        `${list},\n` +
        `    ];\n` +
        `}\n`
    );
}

async function main(): Promise<void> {
    loadEnv();

    const bucketName = process.env['FIREBASE_STORAGE_BUCKET'] ?? 'candy-cart.firebasestorage.app';
    const maxAge = process.env['IMAGE_CACHE_MAX_AGE'] ?? '86400'; // 1 day default; 2592000 = 1 month, 31536000 = 1 year
    const cacheControl = `public, max-age=${maxAge}`;

    admin.initializeApp({ credential: buildCredential(), storageBucket: bucketName });

    const bucket = admin.storage().bucket();

    const files = fs.readdirSync(COMPRESSED_DIR).filter((f) => f.endsWith('.webp'));

    if (files.length === 0) {
        console.log('No compressed images found. Run: npm run compress-images');
        return;
    }

    const urls: string[] = [];

    for (const file of files) {
        const destination = `images/${file}`;
        const remoteFile = bucket.file(destination);

        const [exists] = await remoteFile.exists();
        if (exists) {
            console.log(`skip  ${file} (already in Storage)`);
            urls.push(remoteFile.publicUrl());
            continue;
        }

        const localPath = path.join(COMPRESSED_DIR, file);
        const [uploaded] = await bucket.upload(localPath, {
            destination,
            metadata: { contentType: 'image/webp', cacheControl },
        });
        await uploaded.makePublic();
        const url = uploaded.publicUrl();
        urls.push(url);
        console.log(`done  ${file}`);
        console.log(`      ${url}`);
    }

    fs.writeFileSync(SERVICE_TS_PATH, generateService(urls), 'utf-8');
    console.log(`\nGenerated src/app/services/image.service.ts (${urls.length} images)`);
}

main().catch((err: Error) => {
    console.error(err.message);
    process.exit(1);
});
