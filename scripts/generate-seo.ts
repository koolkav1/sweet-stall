import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface EnvConfig {
  [key: string]: string;
}

function readEnv(filePath: string): EnvConfig {
  const envContent = fs.readFileSync(filePath, 'utf-8');
  const env: EnvConfig = {};

  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      env[key] = valueParts.join('=');
    }
  });

  return env;
}

function readRoutes(filePath: string): string[] {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract path values from route objects
  const pathRegex = /path:\s*['"`]([^'"`]+)['"`]/g;
  const paths: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = pathRegex.exec(content)) !== null) {
    const pathValue = match[1];
    // Skip wildcard routes
    if (pathValue !== '**') {
      paths.push(pathValue);
    }
  }

  return paths;
}

function generateSitemap(domain: string, paths: string[]): string {
  // Normalize domain to ensure it ends with / and remove any trailing slashes from the end
  let normalizedDomain = domain.trim();
  if (!normalizedDomain.endsWith('/')) {
    normalizedDomain += '/';
  }

  const urls = paths.map(path => {
    const url = `${normalizedDomain}${path}`;
    return `  <url>\n    <loc>${url}</loc>\n  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function generateRobots(domain: string, routes: string[]): string {
  let normalizedDomain = domain.trim();
  if (normalizedDomain.endsWith('/')) {
    normalizedDomain = normalizedDomain.slice(0, -1);
  }

  const allowRules = routes.map(route => `Allow: /${route}`).join('\n');

  return `# Allow all crawlers
User-agent: *

# Explicitly allow all app routes
${allowRules}

# Disallow private or protected routes
Disallow: /admin/
Disallow: /dashboard/
Disallow: /login/
Disallow: /reset-password/

# Sitemap
Sitemap: ${normalizedDomain}/sitemap.xml`;
}

async function main(): Promise<void> {
  const projectRoot = path.resolve(__dirname, '..');
  const envPath = path.join(projectRoot, '.env');
  const routesPath = path.join(projectRoot, 'src/app/app.routes.ts');
  const sitemapPath = path.join(projectRoot, 'src/sitemap.xml');
  const robotsPath = path.join(projectRoot, 'src/robots.txt');

  try {
    const env = readEnv(envPath);
    const domain = env.DOMAIN;

    if (!domain) {
      console.error('Error: DOMAIN not found in .env file');
      process.exit(1);
    }

    const routes = readRoutes(routesPath);

    if (routes.length === 0) {
      console.error('Error: No routes found in app.routes.ts');
      process.exit(1);
    }

    const sitemap = generateSitemap(domain, routes);
    const robots = generateRobots(domain, routes);

    fs.writeFileSync(sitemapPath, sitemap);
    fs.writeFileSync(robotsPath, robots);

    console.log(`✓ Generated ${sitemapPath}`);
    console.log(`✓ Generated ${robotsPath}`);
    console.log(`\nDomain: ${domain}`);
    console.log(`Routes found: ${routes.length}`);
    console.log(`Routes: ${routes.join(', ')}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Error:', error);
    }
    process.exit(1);
  }
}

main();
