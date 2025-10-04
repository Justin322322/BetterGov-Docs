# BetterGov Documentation

Documentation site for the BetterGov platform built with Fumadocs and Next.js.

<!-- Test comment for CodeRabbit PR review -->

## About

BetterGov.ph is a modern platform that centralizes Philippine government services and information,
making them more accessible to citizens. This documentation provides guides, API references, and
resources for contributors and users.

## Tech Stack

- **Next.js 15.5.4** - React framework for production
- **React 19.1.1** - UI library (compatible with fumadocs-ui)
- **Fumadocs** - Documentation framework
  - fumadocs-ui 15.8.2
  - fumadocs-core 15.8.2
  - fumadocs-mdx 12.0.1
- **TypeScript 5.9.2** - Type safety
- **Tailwind CSS 4.1.13** - Styling

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Justin322322/BetterGov-Docs.git

cd bettergov-docs/docs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the documentation site.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run code linting
- `npm run format` - Format code with Prettier
- `npm run validate` - Run all validation checks
- `npm run sync-docs` - Sync documentation from BetterGov repository

## Documentation Sync

This documentation site automatically syncs with the upstream
[BetterGov repository](https://github.com/bettergovph/bettergov) to keep content up-to-date. When
the upstream repository updates their documentation files, this site will automatically receive
those updates within 12 hours and commit them directly to the main branch.

- **Automatic Sync**: GitHub Actions workflow runs every 12 hours
- **Direct Commit**: Documentation updates are automatically committed to main (no PR review)
- **Manual Sync**: Run `npm run sync-docs` to sync immediately
- **Files Synced**: README.md, docs/Meilisearch.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, TESTING.md
- **Source**: Updates come from [bettergovph/bettergov](https://github.com/bettergovph/bettergov)

For detailed sync configuration and troubleshooting, see the documentation files in the repository:

- [Sync Guide](content/docs/sync-guide.mdx)
- [Token Setup](content/docs/token-setup.mdx)

## Contributing

Contributions are welcome! Please read our contributing guidelines and feel free to submit issues
and pull requests.
