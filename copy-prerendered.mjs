import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prerenderedDir = path.join(__dirname, 'prerendered');
const distDir = path.join(__dirname, 'dist/public');

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

if (fs.existsSync(prerenderedDir)) {
  console.log('Copying prerendered files to dist/public...');
  copyDir(prerenderedDir, distDir);
  console.log('✅ Prerendered files copied successfully!');
} else {
  console.log('⚠️ Prerendered directory not found');
}
