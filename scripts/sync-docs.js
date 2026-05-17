#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const BETTERGOV_REPO = 'bettergovph/bettergov';
const BETTERGOV_BRANCH = 'main';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

/**
 * Clean content for MDX compatibility
 */
function cleanForMDX(content) {
  // Replace HTML comments with JSX comments
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  
  // Remove "back to top" links
  content = content.replace(/<p align="right">\(<a href="#readme-top">back to top<\/a>\)<\/p>\s*/g, '');
  
  // Fix links to repository files - convert to external GitHub links
  const repoUrl = 'https://github.com/bettergovph/bettergov/blob/main';
  
  // Fix relative links to repository files
  content = content.replace(/\[([^\]]+)\]\(\.\/CODE_OF_CONDUCT\.md\)/g, `[$1](${repoUrl}/CODE_OF_CONDUCT.md)`);
  content = content.replace(/\[([^\]]+)\]\(\.\/CONTRIBUTING\.md\)/g, `[$1](/docs/contributing)`);
  content = content.replace(/\[([^\]]+)\]\(\.\/README\.md\)/g, `[$1](/docs)`);
  content = content.replace(/\[([^\]]+)\]\(\.\/ABOUT\.md\)/g, `[$1](/docs/about)`);
  content = content.replace(/\[([^\]]+)\]\(\.\/TESTING\.md\)/g, `[$1](/docs/contributing/testing)`);
  content = content.replace(/\[([^\]]+)\]\(\.\/\.env\.example\)/g, `[$1](${repoUrl}/.env.example)`);
  content = content.replace(/\[([^\]]+)\]\(\.\/docs\/Meilisearch\.md\)/g, `[$1](/docs/meilisearch)`);
  content = content.replace(/\[([^\]]+)\]\(docs\/Meilisearch\.md\)/g, `[$1](/docs/meilisearch)`);
  content = content.replace(/\[([^\]]+)\]\(\.\.\/CONTRIBUTING\.md\)/g, `[$1](/docs/contributing)`);
  content = content.replace(/\[([^\]]+)\]\(\.\/docs\/Meilisearch\.md(#.*?)?\)/g, `[$1](/docs/meilisearch$2)`);
  content = content.replace(/\[([^\]]+)\]\(docs\/Meilisearch\.md(#.*?)?\)/g, `[$1](/docs/meilisearch$2)`);
  content = content.replace(/https:\/\/ghrb\.waren\.build\/banner\?header=BetterGov\.ph&subheader=Building\+a\+better\+Philippines%27\+national\+website&bg=0051BA&color=fff&support=true/g, 'https://camo.githubusercontent.com/0cdaea8339ec113b16daf15a8e797c2e9cb9c80f8da2eb16536dd9cbf324a578/68747470733a2f2f676872622e776172656e2e6275696c642f62616e6e65723f6865616465723d426574746572476f762e7068267375626865616465723d4275696c64696e672b612b6265747465722b5068696c697070696e65732532372b6e6174696f6e616c2b776562736974652662673d30303531424126636f6c6f723d66666626737570706f72743d74727565');
  
  // Replace unsupported code block languages
  const languageMap = {
    'env': 'bash',
    'dotenv': 'bash',
    'shell': 'bash',
  };
  
  Object.entries(languageMap).forEach(([from, to]) => {
    const regex = new RegExp('```' + from + '\\b', 'g');
    content = content.replace(regex, '```' + to);
  });
  
  return content;
}

// Files to sync from BetterGov repository
const FILES_TO_SYNC = [
  {
    source: 'README.md',
    target: 'content/docs/getting-started.mdx',
    transform: (content) => {
      // Convert README.md to MDX format with frontmatter
      const frontmatter = `---
title: Getting Started
description: Welcome to BetterGov - Improving Philippine government websites
---

`;
      return frontmatter + cleanForMDX(content);
    }
  },
  {
    source: 'ABOUT.md',
    target: 'content/docs/about.mdx',
    transform: (content) => {
      // Convert ABOUT.md to MDX format with frontmatter
      const frontmatter = `---
title: About BetterGov
description: Learn about the BetterGov initiative and our mission to improve Philippine government websites
---

`;
      return frontmatter + cleanForMDX(content);
    }
  },
  {
    source: 'docs/Meilisearch.md',
    target: 'content/docs/meilisearch.mdx',
    transform: (content) => {
      // Add frontmatter for Meilisearch documentation
      const frontmatter = `---
title: Meilisearch Setup
description: Configure and use Meilisearch for search functionality in BetterGov
---

`;
      return frontmatter + cleanForMDX(content);
    }
  },
  {
    source: 'CONTRIBUTING.md',
    target: 'content/docs/contributing/index.mdx',
    transform: (content) => {
      // Add frontmatter for contributing guide
      const frontmatter = `---
title: Contributing
description: Learn how to contribute to the BetterGov project
---

`;
      return frontmatter + cleanForMDX(content);
    }
  },
  {
    source: 'CODE_OF_CONDUCT.md',
    target: 'content/docs/contributing/code-of-conduct.mdx',
    transform: (content) => {
      // Add frontmatter for code of conduct
      const frontmatter = `---
title: Code of Conduct
description: Our community guidelines and code of conduct
---

`;
      return frontmatter + cleanForMDX(content);
    }
  },
  {
    source: 'TESTING.md',
    target: 'content/docs/contributing/testing.mdx',
    transform: (content) => {
      // Add frontmatter for testing guide
      const frontmatter = `---
title: Testing Guide
description: Testing guidelines and setup for BetterGov
---

`;
      return frontmatter + cleanForMDX(content);
    }
  }
];

/**
 * Fetch content from GitHub API
 */
async function fetchFromGitHub(filePath) {
  return new Promise((resolve, reject) => {
    const url = GITHUB_TOKEN
      ? `https://api.github.com/repos/${BETTERGOV_REPO}/contents/${filePath}?ref=${BETTERGOV_BRANCH}`
      : `https://raw.githubusercontent.com/${BETTERGOV_REPO}/${BETTERGOV_BRANCH}/${filePath}`;
    
    const options = {
      headers: {
        'User-Agent': 'BetterGov-Docs-Sync',
        'Accept': GITHUB_TOKEN ? 'application/vnd.github.v3+json' : 'text/plain'
      }
    };

    if (GITHUB_TOKEN) {
      options.headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    https.get(url, options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          if (res.statusCode !== 200) {
            const response = GITHUB_TOKEN ? JSON.parse(data) : {};
            const message = response.message || `GitHub API returned HTTP ${res.statusCode}`;
            reject(new Error(`${message} (${filePath})`));
            return;
          }

          if (!GITHUB_TOKEN) {
            resolve(data);
            return;
          }

          const response = JSON.parse(data);
          if (response.content) {
            // Decode base64 content
            const content = Buffer.from(response.content, 'base64').toString('utf-8');
            resolve(content);
          } else {
            reject(new Error(`GitHub API response did not include file content: ${filePath}`));
          }
        } catch (error) {
          reject(new Error(`Invalid GitHub API response for ${filePath}: ${error.message}`));
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

/**
 * Sync a single file
 */
async function syncFile(fileConfig) {
  try {
    console.log(`Syncing ${fileConfig.source}...`);

    // Fetch content from BetterGov
    const content = await fetchFromGitHub(fileConfig.source);
    
    // Transform content if transform function is provided
    const transformedContent = fileConfig.transform ? fileConfig.transform(content) : content;
    
    // Ensure target directory exists
    const targetDir = path.dirname(fileConfig.target);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Write to target file
    fs.writeFileSync(fileConfig.target, transformedContent, 'utf-8');
    console.log(`SUCCESS: Synced ${fileConfig.source} → ${fileConfig.target}`);
    return true;
    
  } catch (error) {
    console.error(`ERROR: Error syncing ${fileConfig.source}:`, error.message);
    return false;
  }
}

/**
 * Main sync function
 */
async function syncDocumentation() {
  console.log('Starting documentation sync from BetterGov...');
  console.log(`Repository: ${BETTERGOV_REPO}`);
  console.log(`Branch: ${BETTERGOV_BRANCH}`);
  console.log('');

  let syncedCount = 0;
  const totalFiles = FILES_TO_SYNC.length;

  for (const fileConfig of FILES_TO_SYNC) {
    const success = await syncFile(fileConfig);
    if (success) {
      syncedCount++;
    }
    
    // Add small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('');
  console.log(`Sync Summary:`);
  console.log(`   Successfully synced: ${syncedCount}/${totalFiles} files`);
  console.log(`   Failed: ${totalFiles - syncedCount}/${totalFiles} files`);
  
  if (syncedCount > 0) {
    console.log('');
    console.log('Documentation sync completed successfully!');
  } else {
    console.log('');
    console.error('ERROR: No files were synced. Check the logs above for details.');
  }

  if (syncedCount !== totalFiles) {
    process.exitCode = 1;
  }
}

// Run the sync
if (require.main === module) {
  syncDocumentation().catch((error) => {
    console.error('ERROR: Sync failed:', error);
    process.exit(1);
  });
}

module.exports = { syncDocumentation, syncFile };
