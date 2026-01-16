# Package Documentation

Complete documentation for the BioX-markdown package.

## Installation

```bash
npm install @bio-x/markdown
# or
yarn add @bio-x/markdown
# or
bun add @bio-x/markdown
```

## Quick Start

```javascript
import { render } from '@bio-x/markdown'

const markdown = '# Hello World\n\nThis is **BioX** markdown!'
const html = render(markdown)
console.log(html)
```

## Features

- 📝 GitHub Flavored Markdown support
- 📐 LaTeX math rendering with KaTeX
- 🎨 Syntax highlighting with Prism.js
- 🔗 Automatic URL linking
- 📊 Table support
- ✅ Task list support
- 🏷️ Custom component system

## Configuration

Learn more about configuring BioX-markdown for your needs.

::: tip
Check out the [API Reference](/api/) for detailed information about all available options.
:::

## Next Steps

- [API Reference](/api/) - Explore the complete API
- [Tutorials](/tutorials/) - Learn through examples
- [LaTeX Support](/package/latex.html) - Mathematical equations
