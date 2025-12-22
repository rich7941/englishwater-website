import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(path.dirname(__filename), "..");
const outputDir = path.join(projectRoot, "dist", "public");

const staticDirs = [
  "about",
  "contact",
  "help-advice",
  "locations",
  "services",
  "privacy-policy",
  "terms-and-conditions",
  "reviews",
];

const staticFiles = [
  "index.html",
  "about.html",
  "contact.html",
  "privacy-policy.html",
  "terms-and-conditions.html",
  "reviews.html",
  "sitemap.xml",
  "robots.txt",
  "llms.txt",
  "styles.css",
  "_redirects",
  "META_TITLES_DESCRIPTIONS.json",
];

const assetExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".ico", ".svg"]);

rmSync(path.join(projectRoot, "dist"), { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

function copyEntry(source, destination) {
  if (!existsSync(source)) return;
  cpSync(source, destination, { recursive: true });
}

for (const dir of staticDirs) {
  const source = path.join(projectRoot, dir);
  const destination = path.join(outputDir, dir);
  copyEntry(source, destination);
}

for (const file of staticFiles) {
  const source = path.join(projectRoot, file);
  const destination = path.join(outputDir, file);
  copyEntry(source, destination);
}

for (const entry of readdirSync(projectRoot, { withFileTypes: true })) {
  if (!entry.isFile()) continue;
  const extension = path.extname(entry.name).toLowerCase();
  if (!assetExtensions.has(extension)) continue;
  const source = path.join(projectRoot, entry.name);
  const destination = path.join(outputDir, entry.name);
  copyEntry(source, destination);
}

console.log(`Static site copied to ${outputDir}`);
