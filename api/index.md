# API Reference

Complete API reference for BioX-markdown.

## Core Functions

### `render(markdown, options)`

Renders markdown to HTML.

**Parameters:**
- `markdown` (string) - The markdown content to render
- `options` (object, optional) - Configuration options

**Returns:** `string` - The rendered HTML

**Example:**

```javascript
import { render } from '@bio-x/markdown'

const html = render('# Hello World')
// Returns: <h1>Hello World</h1>
```

## Options

### LaTeX Options

Configure LaTeX/KaTeX rendering:

```javascript
const html = render(markdown, {
  latex: {
    enabled: true,
    displayMode: true
  }
})
```

### Syntax Highlighting

Configure code syntax highlighting:

```javascript
const html = render(markdown, {
  highlight: {
    theme: 'prism-tomorrow',
    languages: ['javascript', 'python', 'bash']
  }
})
```

## Advanced Usage

Learn about advanced features and customization options.

::: warning
API documentation is under development. Check back soon for complete details.
:::

## Related

- [Package Docs](/package/) - Installation and quick start
- [Tutorials](/tutorials/) - Integration guides
