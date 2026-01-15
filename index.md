---
layout: home

hero:
  name: BioX-markdown
  text: Markdown rendering, BioX-style
  tagline: Server-side/build-time rendering with LaTeX, syntax highlighting, and more
  actions:
    - theme: brand
      text: Get Started
      link: /package/
    - theme: alt
      text: View Demo
      link: https://biox-markdown.vercel.app/
    - theme: alt
      text: GitHub
      link: https://github.com/dr-data/BioX-markdown

features:
  - icon: 📦
    title: Package Documentation
    details: Installation, features, and usage guides for BioX-markdown
    link: /package/
  - icon: 🔧
    title: API Reference
    details: Complete API documentation with examples
    link: /api/
  - icon: 📚
    title: Tutorials
    details: Step-by-step integration guides and examples
    link: /tutorials/
  - icon: 📐
    title: LaTeX Support
    details: Beautiful mathematical equations with KaTeX
    link: /package/latex.html
  - icon: 🎨
    title: Syntax Highlighting
    details: Code highlighting with Prism.js
  - icon: ⚡
    title: Fast Rendering
    details: Server-side and build-time rendering for optimal performance
---

## Quick Start

Install BioX-markdown:

```bash
npm install @biox/markdown
# or
yarn add @biox/markdown
# or
bun add @biox/markdown
```

Basic usage:

```javascript
import { render } from '@biox/markdown'

const markdown = '# Hello World\n\nThis is **BioX** markdown!'
const html = render(markdown)
```

## Features

- 📝 **GitHub Flavored Markdown** - Full GFM support
- 📐 **LaTeX Math** - Beautiful equations with KaTeX
- 🎨 **Syntax Highlighting** - Code blocks with Prism.js
- 🔗 **Auto-linking** - Automatic URL detection
- 📊 **Tables** - Full table support
- ✅ **Task Lists** - Interactive checkboxes
- 🏷️ **Custom Components** - Extensible component system

## Resources

- [Main Package Repository](https://github.com/dr-data/BioX-markdown)
- [Demo Application](https://biox-markdown.vercel.app/)
- [Documentation](https://dr-data.github.io/BioX-markdown-docs/)
