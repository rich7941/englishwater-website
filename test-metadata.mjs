import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read metadata
const metaData = JSON.parse(fs.readFileSync('./META_TITLES_DESCRIPTIONS.json', 'utf-8'));

// Test results
const results = {
  passed: 0,
  failed: 0,
  errors: []
};

// Test each page
metaData.pages.forEach(page => {
  const fileName = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`;
  const filePath = path.join(__dirname, 'dist/public', fileName);
  
  if (!fs.existsSync(filePath)) {
    results.failed++;
    results.errors.push(`❌ File not found: ${fileName}`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Check for title tag
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  const foundTitle = titleMatch ? titleMatch[1] : null;
  
  // Check for meta description
  const descMatch = content.match(/<meta name="description" content="([^"]+)"/);
  const foundDesc = descMatch ? descMatch[1] : null;
  
  // Check for og:title
  const ogTitleMatch = content.match(/<meta property="og:title" content="([^"]+)"/);
  const foundOgTitle = ogTitleMatch ? ogTitleMatch[1] : null;
  
  // Verify metadata matches
  if (foundTitle === page.title && foundDesc === page.description && foundOgTitle === page.title) {
    results.passed++;
    console.log(`✅ ${page.path || '/'} - Metadata correct`);
  } else {
    results.failed++;
    console.log(`❌ ${page.path || '/'} - Metadata mismatch`);
    
    if (foundTitle !== page.title) {
      results.errors.push(`  Title mismatch: expected "${page.title}", got "${foundTitle}"`);
    }
    if (foundDesc !== page.description) {
      results.errors.push(`  Description mismatch for ${page.path}`);
    }
  }
});

console.log(`\n📊 Test Results: ${results.passed} passed, ${results.failed} failed`);
if (results.errors.length > 0) {
  console.log('\nErrors:');
  results.errors.forEach(err => console.log(err));
}
