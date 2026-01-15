# BioX-markdown Documentation

Complete documentation for the BioX-markdown package.

## Overview

This repository contains the VitePress-based documentation site for BioX-markdown. The demo application is in a separate repository at https://github.com/dr-data/BioX-markdown.

## Quick Links

- **Full Documentation:** https://dr-data.github.io/BioX-markdown-docs/
- **Demo Application:** https://biox-markdown.vercel.app/
- **Main Package:** https://github.com/dr-data/BioX-markdown

## Development

### Prerequisites

- Bun 1.0+
- Node.js 18+

### Setup

```bash
bun install
```

### Development Server

```bash
bun run dev
```

Visit http://localhost:5173

### Build

```bash
bun run build
```

### Preview

```bash
bun run preview
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions workflow `.github/workflows/deploy.yml`.

### Structure

```
docs/
├── .vitepress/       # VitePress configuration and cache
├── api/              # API reference pages
├── package/          # Package documentation pages
├── tutorials/        # Tutorial pages
├── components/       # Custom Vue components
└── package.json       # Dependencies and scripts
```

## Documentation Sections

- 📦 [Package Docs](https://dr-data.github.io/BioX-markdown-docs/package/) - Installation, features, usage
- 🔧 [API Reference](https://dr-data.github.io/BioX-markdown-docs/api/) - Complete API documentation
- 📚 [Tutorials](https://dr-data.github.io/BioX-markdown-docs/tutorials/) - Integration guides
- 📐 [LaTeX Support](https://dr-data.github.io/BioX-markdown-docs/package/latex.html) - Mathematical equations

## License

MIT License - same as BioX-markdown main package
