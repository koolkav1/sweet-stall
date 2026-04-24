import sharp from 'sharp';
import * as fs from 'node:fs';
import * as path from 'node:path';

const IMAGES_DIR = path.join(process.cwd(), 'images');
const OUTPUT_DIR = path.join(IMAGES_DIR, 'compressed');
const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.avif']);

async function main(): Promise<void> {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const entries = fs.readdirSync(IMAGES_DIR, { withFileTypes: true });
    const images = entries.filter(
        (e) => e.isFile() && SUPPORTED.has(path.extname(e.name).toLowerCase()),
    );

    if (images.length === 0) {
        console.log('No source images found in images/');
        return;
    }

    let compressed = 0;
    let skipped = 0;

    for (const entry of images) {
        const baseName = path.basename(entry.name, path.extname(entry.name));
        const outName = `${baseName}.webp`;
        const outPath = path.join(OUTPUT_DIR, outName);

        if (fs.existsSync(outPath)) {
            console.log(`skip  ${outName} (already exists)`);
            skipped++;
            continue;
        }

        try {
            await sharp(path.join(IMAGES_DIR, entry.name))
                .webp({ quality: 85 })
                .toFile(outPath);
            console.log(`done  ${entry.name} → ${outName}`);
            compressed++;
        } catch (err) {
            console.error(`fail  ${entry.name}: ${(err as Error).message}`);
        }
    }

    console.log(`\nCompressed: ${compressed}  Skipped: ${skipped}`);
}

main().catch((err: Error) => {
    console.error(err.message);
    process.exit(1);
});
