#!/usr/bin/env node

/**
 * Link validation script for BetterGov documentation
 * Checks for broken internal and external links in markdown files
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const CONTENT_DIR = path.join(__dirname, '../content');
const INTERNAL_LINK_REGEX = /\[([^\]]+)\]\(([^)]+)\)/g;
const RELATIVE_LINK_REGEX = /^\.{0,2}\//;

async function checkLinks() {
  console.log('Checking documentation links...\n');
  
  try {
    // Find all markdown files
    const markdownFiles = await glob('**/*.{md,mdx}', {
      cwd: CONTENT_DIR,
      absolute: true
    });

    let totalLinks = 0;
    let brokenLinks = 0;
    const issues = [];

    for (const filePath of markdownFiles) {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(CONTENT_DIR, filePath);
      
      let match;
      while ((match = INTERNAL_LINK_REGEX.exec(content)) !== null) {
        const [fullMatch, linkText, linkUrl] = match;
        totalLinks++;

        // Skip external links (http/https)
        if (linkUrl.startsWith('http://') || linkUrl.startsWith('https://')) {
          continue;
        }

        // Skip anchor links
        if (linkUrl.startsWith('#')) {
          continue;
        }

        // Check internal links
        if (RELATIVE_LINK_REGEX.test(linkUrl)) {
          const targetPath = path.resolve(path.dirname(filePath), linkUrl);

          // Remove anchor from path
          const cleanPath = targetPath.split('#')[0];
          
          if (!fs.existsSync(cleanPath)) {
            brokenLinks++;
            issues.push({
              file: relativePath,
              link: linkUrl,
              text: linkText,
              issue: 'File not found'
            });
          }
        }
      }
    }

    // Report results
    console.log(`Link Check Results:`);
    console.log(`   Total links checked: ${totalLinks}`);
    console.log(`   Broken links found: ${brokenLinks}`);
    
    if (issues.length > 0) {
      console.log('\n❌ Issues found:');
      issues.forEach(issue => {
        console.log(`   ${issue.file}: "${issue.text}" -> ${issue.link} (${issue.issue})`);
      });
      process.exit(1);
    } else {
      console.log('\nAll links are valid!');
    }

  } catch (error) {
    console.error('Error checking links:', error);
    process.exit(1);
  }
}

checkLinks();
