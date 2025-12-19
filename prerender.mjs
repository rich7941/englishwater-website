import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Meta data for all pages
const metaData = JSON.parse(fs.readFileSync('./META_TITLES_DESCRIPTIONS.json', 'utf-8'));

// Static content for pages (for SEO - hidden but crawlable)
const pageContent = {
  '/': `
    <h1>England's Water Main Repair and Replacement Experts</h1>
    <p>24/7 assistance from expert water engineers across England.</p>
    <h2>What to expect from English Water – Your trusted water services expert</h2>
    <p>Here's how we'll get your house feeling like home again.</p>
    <ul>
      <li>Call us 24/7, 365, at a time that suits you.</li>
      <li>You'll get a no-obligation quote straight away.</li>
      <li>Expert engineers will arrive and carry out the work.</li>
      <li>We'll give you a 25-year guarantee.</li>
    </ul>
    <h2>English Water's Services</h2>
    <p>We offer a comprehensive range of water main services across England including lead pipe replacement, water supply pipe installations, water supply pipe repairs, water main installations, water main renewals, water main repairs, water leak detection, and impact moling.</p>
    <h2>Full Nationwide Coverage Across England</h2>
    <p>Every day, English Water assists residential and commercial customers across England with water main repairs, installations, and lead pipe replacements.</p>
    <h2>About English Water</h2>
    <p>From residential lead pipe replacement to burst water main repairs, we're here to help. We're proud to offer a 24-hour emergency response across England, using the latest technology combined with good old-fashioned expertise to solve a wide range of problems.</p>
    <h2>Why Choose English Water</h2>
    <ul>
      <li><strong>24/7 Availability</strong> - Our call center is always open to assist you with any water main services, enquiries, or emergencies—day or night.</li>
      <li><strong>Clear & Upfront Pricing</strong> - We have a transparent pricing system, provide upfront estimates, and give quotes to explain the cost of our services.</li>
      <li><strong>Trusted Across England</strong> - Customers across England have trusted us to handle their water mains services with reliability and professionalism.</li>
      <li><strong>1-Hour Response Time</strong> - We respond to your call and attend your service within the hour wherever possible.</li>
    </ul>
    <h2>Contact Us</h2>
    <p>Call us 24/7 at 0800 316 7322 or email hello@englishwater.co.uk</p>
    <p>We proudly serve London, Birmingham, Manchester, Leeds, Sheffield, Bristol, Leicester, Coventry, Bradford, Liverpool, and many more cities across England.</p>
  `,
  '/services/lead-pipe-replacement': `
    <h1>Lead Pipe Replacement Services in England</h1>
    <p>Professional lead pipe replacement services across England. Safeguard your health and enhance your property's value with our efficient, minimal-disruption solutions.</p>
    <h2>Why Replace Lead Pipes?</h2>
    <p>Lead pipes can pose serious health risks, particularly for children and pregnant women. Replacing old lead pipes with modern materials ensures safe, clean drinking water for your family.</p>
    <h2>Our Lead Pipe Replacement Process</h2>
    <p>Our expert engineers use the latest trenchless technology to replace lead pipes with minimal disruption to your property and garden.</p>
    <p>Contact English Water today at 0800 316 7322 for a free quote.</p>
  `,
  '/about': `
    <h1>About English Water</h1>
    <p>English Water is England's trusted experts in water main services. With a commitment to quality, innovation, and customer care, we deliver reliable solutions for leak detection, lead pipe replacement, water main repairs and more.</p>
    <p>We proudly serve London, Manchester, Birmingham, Leeds, and communities across England.</p>
  `,
  '/contact': `
    <h1>Contact English Water</h1>
    <p>Get in touch with English Water for expert lead pipe replacement, water supply pipe and water main repairs and other water services across England.</p>
    <p>Call us 24/7 at 0800 316 7322</p>
    <p>Email: hello@englishwater.co.uk</p>
    <p>We serve London, Manchester, Birmingham, Leeds, and beyond. Request a free quote today.</p>
  `,
  '/reviews': `
    <h1>Customer Reviews</h1>
    <p>Read customer reviews for English Water, England's trusted water services provider. Discover why businesses and homeowners choose us for reliable leak detection, lead pipe replacement, and water main solutions.</p>
  `
};

// Base HTML template with static content
const baseTemplate = (title, description, url, pagePath) => {
  const staticContent = pageContent[pagePath] || `<h1>${title}</h1><p>${description}</p>`;
  
  return `<!DOCTYPE html>
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
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>
      /* Hide static content when JS loads - it will be replaced by React */
      .seo-content { position: absolute; left: -9999px; }
    </style>
</head>
<body>
    <div id="root">
      <!-- Static SEO content - visible to crawlers, hidden when JS loads -->
      <noscript>
        <div class="seo-content-visible">
          ${staticContent}
        </div>
      </noscript>
      <div class="seo-content" aria-hidden="true">
        ${staticContent}
      </div>
    </div>
    <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;
};

// Create prerendered directory
const prerenderedDir = path.join(__dirname, 'prerendered');
if (!fs.existsSync(prerenderedDir)) {
    fs.mkdirSync(prerenderedDir, { recursive: true });
}

// Generate HTML files for each page
const baseUrl = 'https://englishwater.co.uk';

metaData.pages.forEach(page => {
    // Skip index.html - it's already generated by Vite with generic metadata
    if (page.path === '/') {
        console.log(`⏭️  Skipped: index.html (using Vite-generated version with generic metadata)`);
        return;
    }
    
    const fileName = `${page.path.slice(1)}.html`;
    const filePath = path.join(prerenderedDir, fileName);
    const dirPath = path.dirname(filePath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    
    const html = baseTemplate(
        page.title,
        page.description,
        `${baseUrl}${page.path}`,
        page.path
    );
    
    fs.writeFileSync(filePath, html);
    console.log(`✓ Generated: ${fileName}`);
});

console.log(`\n✅ Pre-rendering complete! Generated ${metaData.pages.length} HTML files.`);
