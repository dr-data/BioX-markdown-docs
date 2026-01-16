# API Reference

Complete API reference for the `@bio-x/markdown` npm package.

## Installation

```bash
npm install @bio-x/markdown
# or
yarn add @bio-x/markdown
# or
bun add @bio-x/markdown
```

---

## Core Function

### `render(markdown, options?)`

The main function that converts markdown text to HTML.

**Signature:**

```typescript
function render(markdown: string, options?: RenderOptions): string
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `markdown` | `string` | Yes | The markdown content to render |
| `options` | `RenderOptions` | No | Configuration options object |

**Returns:** `string` - The rendered HTML string with built-in XSS sanitization.

**Basic Example:**

```javascript
import { render } from '@bio-x/markdown'

const markdown = '# Hello World\n\nThis is **bold** text!'
const html = render(markdown)

// Output:
// <h1>Hello World</h1>
// <p>This is <strong>bold</strong> text!</p>
```

---

## Options Reference

### Complete Options Object

```typescript
interface RenderOptions {
  latex?: LatexOptions
  highlight?: HighlightOptions
  handlers?: HandlerOptions
  removeTitle?: boolean
  filePath?: string
  imagePrefix?: string
}
```

### Options Table

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `latex` | `LatexOptions` | `{ enabled: true }` | LaTeX/KaTeX rendering configuration |
| `highlight` | `HighlightOptions` | `{}` | Syntax highlighting configuration |
| `handlers` | `HandlerOptions` | `{}` | Custom element handlers |
| `removeTitle` | `boolean` | `false` | Remove the first H1 heading from output |
| `filePath` | `string` | `null` | Source file path for resolving relative image paths |
| `imagePrefix` | `string` | `''` | Prefix to prepend to all image URLs |

---

## LaTeX Options

Configure mathematical equation rendering with KaTeX.

### `latex.enabled`

| Type | Default | Description |
|------|---------|-------------|
| `boolean` | `true` | Enable or disable LaTeX rendering |

### `latex.displayMode`

| Type | Default | Description |
|------|---------|-------------|
| `boolean` | `false` | Use display mode for block equations |

### `latex.throwOnError`

| Type | Default | Description |
|------|---------|-------------|
| `boolean` | `false` | Throw error on invalid LaTeX (if false, shows as plain text) |

### `latex.macros`

| Type | Default | Description |
|------|---------|-------------|
| `object` | `{}` | Custom LaTeX macro definitions |

### `latex.trust`

| Type | Default | Description |
|------|---------|-------------|
| `function \| boolean` | `null` | Control which LaTeX commands are allowed |

**LaTeX Example:**

```javascript
import { render } from '@bio-x/markdown'

const markdown = `
# Mathematical Formula

The quadratic formula is:

$$
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
$$

Inline math: $E = mc^2$
`

const html = render(markdown, {
  latex: {
    enabled: true,
    displayMode: true,
    throwOnError: false,
    macros: {
      "\\R": "\\mathbb{R}",
      "\\N": "\\mathbb{N}",
      "\\Q": "\\mathbb{Q}"
    }
  }
})
```

**Trust Mode Example:**

```javascript
const html = render(markdown, {
  latex: {
    enabled: true,
    trust: (context) => {
      // Only allow \url command
      return context.command === '\\url'
    }
  }
})
```

---

## Syntax Highlighting Options

Configure code block highlighting with Prism.js.

### `highlight.theme`

| Type | Default | Description |
|------|---------|-------------|
| `string` | `'prism-tomorrow'` | Prism.js theme to use |

**Available Themes:**

| Theme | Description |
|-------|-------------|
| `prism-tomorrow` | Clean, professional (default) |
| `prism-coy` | Soft, easy on eyes |
| `prism-solarizedlight` | Warm color palette |
| `prism-tomorrow-night` | Dark version of tomorrow |
| `prism-okaidia` | Deep dark with good contrast |
| `prism-dracula` | Classic dark theme |

### `highlight.languages`

| Type | Default | Description |
|------|---------|-------------|
| `string[]` | `[]` | Additional languages to load |

**Highlight Example:**

```javascript
import { render } from '@bio-x/markdown'

const markdown = `
\`\`\`javascript
const greeting = 'Hello World'
console.log(greeting)
\`\`\`
`

const html = render(markdown, {
  highlight: {
    theme: 'prism-dracula',
    languages: ['javascript', 'typescript', 'python', 'go']
  }
})
```

**Supported Languages (100+):**

- **Web:** JavaScript, TypeScript, HTML, CSS, SCSS, PHP
- **Backend:** Python, Go, Ruby, Java, C, C++, Rust
- **Data Science:** R, Julia, MATLAB
- **DevOps:** Bash, Shell, PowerShell, Dockerfile
- **Markup:** JSON, YAML, TOML, XML, SQL
- **Mobile:** Swift, Kotlin, Dart

---

## Custom Handlers

Override default rendering behavior for specific elements.

### `handlers.image`

Custom handler for image elements.

| Type | Default | Description |
|------|---------|-------------|
| `function` | `null` | Custom image rendering function |

**Custom Image Handler Example:**

```javascript
import { render } from '@bio-x/markdown'

const html = render(markdown, {
  handlers: {
    image: (node, context) => {
      const src = node.properties.src
      const alt = node.alt

      return {
        type: 'element',
        tagName: 'img',
        properties: {
          src: `https://cdn.example.com/${src}`,
          alt: alt,
          loading: 'lazy',
          decoding: 'async'
        },
        children: []
      }
    }
  }
})
```

---

## Content Options

### `removeTitle`

Remove the first H1 heading from the rendered output.

| Type | Default | Description |
|------|---------|-------------|
| `boolean` | `false` | Remove first H1 from output |

**Example:**

```javascript
import { render } from '@bio-x/markdown'

const markdown = '# Page Title\n\nContent here...'

const html = render(markdown, {
  removeTitle: true
})

// Output: <p>Content here...</p>
// (H1 is removed)
```

### `filePath`

Set the source file path for resolving relative image paths.

| Type | Default | Description |
|------|---------|-------------|
| `string` | `null` | Absolute path to source markdown file |

### `imagePrefix`

Prefix to prepend to all image URLs.

| Type | Default | Description |
|------|---------|-------------|
| `string` | `''` | URL prefix for images |

**Image Path Example:**

```javascript
import { render } from '@bio-x/markdown'

const markdown = '![Logo](./images/logo.png)'

const html = render(markdown, {
  filePath: '/path/to/document.md',
  imagePrefix: 'https://example.com/assets'
})
```

---

## TypeScript Definitions

Full TypeScript type definitions for the API:

```typescript
interface RenderOptions {
  latex?: LatexOptions
  highlight?: HighlightOptions
  handlers?: HandlerOptions
  removeTitle?: boolean
  filePath?: string
  imagePrefix?: string
}

interface LatexOptions {
  enabled?: boolean
  displayMode?: boolean
  throwOnError?: boolean
  macros?: Record<string, string>
  trust?: boolean | ((context: TrustContext) => boolean)
}

interface HighlightOptions {
  theme?: string
  languages?: string[]
}

interface HandlerOptions {
  image?: (node: ImageNode, context: RenderContext) => Element
}

interface TrustContext {
  command: string
  url?: string
  protocol?: string
}
```

---

## Supported Markdown Features

### GitHub Flavored Markdown (GFM)

| Feature | Syntax | Support |
|---------|--------|---------|
| Headers | `# H1` to `###### H6` | ✅ Full |
| Bold | `**text**` or `__text__` | ✅ Full |
| Italic | `*text*` or `_text_` | ✅ Full |
| Strikethrough | `~~text~~` | ✅ Full |
| Links | `[text](url)` | ✅ Full |
| Images | `![alt](url)` | ✅ Full |
| Code (inline) | `` `code` `` | ✅ Full |
| Code blocks | ` ```lang ` | ✅ Full |
| Blockquotes | `> quote` | ✅ Full |
| Ordered lists | `1. item` | ✅ Full |
| Unordered lists | `- item` | ✅ Full |
| Task lists | `- [ ] task` | ✅ Full |
| Tables | `\| col \|` | ✅ Full |
| Horizontal rules | `---` | ✅ Full |

### Extended Features

| Feature | Syntax | Support |
|---------|--------|---------|
| LaTeX (inline) | `$equation$` | ✅ Full |
| LaTeX (block) | `$$equation$$` | ✅ Full |
| Footnotes | `[^1]` | ✅ Full |
| Auto-linking | URLs and emails | ✅ Full |
| Definition lists | `term: definition` | ✅ Full |

---

## Error Handling

### Basic Error Handling

```javascript
import { render } from '@bio-x/markdown'

try {
  const html = render(markdown)
  console.log('Success:', html)
} catch (error) {
  console.error('Render error:', error)
  // Fallback to plain text
  return markdown
}
```

### LaTeX Error Handling

```javascript
import { render } from '@bio-x/markdown'

// Don't throw on invalid LaTeX - show as plain text
const html = render(markdown, {
  latex: {
    enabled: true,
    throwOnError: false
  }
})
```

---

## Performance

### Rendering Speed

- **Fast:** Renders in milliseconds for typical documents
- **Efficient:** Optimized AST traversal and transformation
- **Bundled:** Single function, no runtime dependencies

### Bundle Size

| Format | Size (minified + gzip) |
|--------|------------------------|
| UMD | ~50KB |
| ESM | ~45KB |
| CJS | ~48KB |

### Caching Example

```javascript
import { render } from '@bio-x/markdown'

const cache = new Map()

function cachedRender(markdown) {
  if (cache.has(markdown)) {
    return cache.get(markdown)
  }

  const html = render(markdown)
  cache.set(markdown, html)

  return html
}
```

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Node.js | 18+ |

---

## Security

BioX-markdown includes built-in XSS sanitization to protect against cross-site scripting attacks:

- HTML entities are properly escaped
- Script tags are neutralized
- Event handlers are removed
- URLs are validated

**Best Practices:**

- Always validate user input before rendering
- Use `latex.trust` carefully with user-provided content
- Consider additional sanitization for untrusted content

---

## Related Resources

- [Package Documentation](/package/) - Installation and quick start guide
- [Features Guide](/package/features.html) - Comprehensive feature documentation
- [LaTeX Support](/package/latex.html) - Mathematical equation rendering
- [Tutorials](/tutorials/) - Integration guides and examples
- [npm Package](https://www.npmjs.com/package/@bio-x/markdown) - Official npm page
- [GitHub Repository](https://github.com/dr-data/BioX-markdown) - Source code
