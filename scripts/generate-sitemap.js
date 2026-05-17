#!/usr/bin/env node

/**
 * Sitemap generation script for BetterGov documentation
 * Generates sitemap.xml based on documentation structure
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const CONTENT_DIR = path.join(__dirname, '../content');
const OUTPUT_DIR = path.join(__dirname, '../public');
const BASE_URL = process.env.SITE_URL || 'https://docs.bettergov.ph';

async function generateSitemap() {
  console.log('Generating sitemap...\n');
  
  try {
    // Find all markdown files
    const markdownFiles = await glob('**/*.{md,mdx}', {
      cwd: CONTENT_DIR,
      absolute: false
    });

    const urls = [];
    
    // Add homepage
    urls.push({
      loc: BASE_URL,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '1.0'
    });

    // Process each markdown file
    for (const filePath of markdownFiles) {
      const fullPath = path.join(CONTENT_DIR, filePath);
      const stats = fs.statSync(fullPath);
      
      // Convert file path to URL
      let urlPath = filePath
        .replace(/\.(md|mdx)$/, '')
        .replace(/\/index$/, '')
        .replace(/\\/g, '/'); // Handle Windows paths
      
      // Skip if it's just 'index'
      if (urlPath === 'index') {
        continue;
      }
      
      const url = `${BASE_URL}/${urlPath}`;
      
      // Determine priority based on path depth
      const depth = urlPath.split('/').length;
      let priority = '0.8';
      if (depth === 1) priority = '0.9';
      if (depth >= 3) priority = '0.6';
      
      urls.push({
        loc: url,
        lastmod: stats.mtime.toISOString().split('T')[0],
        changefreq: 'monthly',
        priority
      });
    }

    // Generate XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Write sitemap
    const sitemapPath = path.join(OUTPUT_DIR, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    
    console.log(`Sitemap generated with ${urls.length} URLs`);
    console.log(`   Output: ${sitemapPath}`);

  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();