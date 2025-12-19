import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prerenderedDir = path.join(__dirname, 'prerendered');
const distDir = path.join(__dirname, 'dist/public');
const publicDir = path.join(__dirname, 'public');

// Copy all prerendered files to dist/public
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Copied: ${file}`);
    }
  });
}

// Copy public files (like _redirects)
function copyPublicFiles(src, dest) {
  if (!fs.existsSync(src)) return;
  
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Copied public file: ${file}`);
    }
  });
}

if (fs.existsSync(prerenderedDir)) {
  console.log('Copying prerendered files to dist/public...');
  copyDir(prerenderedDir, distDir);
  console.log('✅ Prerendered files copied successfully!');
}

console.log('Copying public files to dist/public...');
copyPublicFiles(publicDir, distDir);
console.log('✅ Public files copied successfully!');
