const fs = require('fs');
const path = require('path');

// Meta data for all pages
const metaData = require('./META_TITLES_DESCRIPTIONS.json');

// Base HTML template
const baseTemplate = (title, description, url) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${description.replace(/"/g, '&quot;')}" />
    <meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />
    <meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />
    <link rel="canonical" href="${url}" />
    <title>${title}</title>
    <link rel="icon" type="image/png" href="/logo.png" />
    <link rel="apple-touch-icon" href="/logo.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;

// Create prerendered directory
const prerenderedDir = path.join(__dirname, 'prerendered');
if (!fs.existsSync(prerenderedDir)) {
    fs.mkdirSync(prerenderedDir, { recursive: true });
}

// Generate HTML files for each page
const baseUrl = 'https://englishwater.co.uk';

metaData.pages.forEach(page => {
    const fileName = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`;
    const filePath = path.join(prerenderedDir, fileName);
    const dirPath = path.dirname(filePath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    
    const html = baseTemplate(
        page.title,
        page.description,
        `${baseUrl}${page.path}`
    );
    
    fs.writeFileSync(filePath, html);
    console.log(`✓ Generated: ${fileName}`);
});

console.log(`\n✅ Pre-rendering complete! Generated ${metaData.pages.length} HTML files.`);
