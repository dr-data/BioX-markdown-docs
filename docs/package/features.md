# Features

Comprehensive feature guide for BioX-markdown.

## Core Markdown Features

### GitHub Flavored Markdown
- ✅ Headers (H1-H6)
- ✅ Bold, italic, and strikethrough
- ✅ Lists (ordered and unordered)
- ✅ Links and automatic link detection
- ✅ Images and image captions
- ✅ Code blocks with language detection
- ✅ Inline code
- ✅ Blockquotes
- ✅ Task lists
- ✅ Tables
- ✅ Horizontal rules

### Advanced Markdown Features
- ✅ **Task Lists** - Support for `- [ ]` and `- [x]` syntax
- ✅ **Definition Lists** - Term and definition support
- ✅ **Footnotes** - Reference-style footnotes using `[^1]` syntax
- ✅ **Automatic Links** - URLs are automatically converted to clickable links
- ✅ **Email Autolinking** - Email addresses detected and wrapped in `mailto:` links

---

## LaTeX Math Rendering

### Inline Math
Use single dollar signs for inline equations:

```markdown
The famous equation $E = mc^2$ shows the relationship between energy and mass.
```

**Renders as:** The famous equation $E = mc^2$ shows the relationship between energy and mass.

### Display Math
Use double dollar signs for block/display equations:

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

**Renders as:**

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

### Common Examples

#### Fractions
```markdown
$\frac{a}{b} = \frac{c}{d}$
```

**Renders as:** $\frac{a}{b} = \frac{c}{d}$

#### Summations
```markdown
$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$
```

**Renders as:** $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$

#### Matrices
```markdown
$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$
```

**Renders as:**

$$
\begin{bmarkdown}
a & b \\
c & d
\end{bmarkdown}
$$

#### Greek Letters
```markdown
$\alpha, \beta, \gamma, \delta, \epsilon, \theta, \lambda, \mu, \pi, \sigma, \omega$
```

---

## Syntax Highlighting

### Supported Languages
BioX-markdown supports syntax highlighting for 100+ programming languages:

- **Web:** JavaScript, TypeScript, HTML, CSS, SCSS, PHP
- **Backend:** Python, Go, Ruby, Java, C, C++, Rust
- **Data Science:** R, Julia, MATLAB
- **DevOps:** Bash, Shell, PowerShell, Dockerfile
- **Markup:** JSON, YAML, TOML, XML, SQL
- **More:** TypeScript, Swift, Kotlin, Dart

### Code Blocks
Use triple backticks with language identifier:

```markdown
\`\`\`javascript
const greeting = 'Hello World'
console.log(greeting)
\`\`\`
```

### Inline Code
Use single backticks for inline code:

```markdown
The `render()` function converts markdown to HTML.
```

### Themes
BioX-markdown uses Prism.js with beautiful syntax themes:

- **Light Themes:**
  - `prism-tomorrow` - Clean, professional
  - `prism-coy` - Soft, easy on eyes
  - `prism-solarizedlight` - Warm color palette

- **Dark Themes:**
  - `prism-tomorrow-night` - Dark version of tomorrow
  - `prism-okaidia` - Deep dark with good contrast
  - `prism-dracula` - Classic dark theme

---

## Table of Contents (TOC) Support

BioX-markdown automatically generates table of contents from headings.

### Manual TOC
Place `<!-- toc -->` where you want TOC:

```markdown
# My Document

<!-- toc -->

## Section 1
Content here...

## Section 2
More content...
```

### Auto-Generated TOC
TOC is automatically generated for all H2-H6 headings.

---

## Automatic URL Linking

BioX-markdown automatically detects and links:

### URLs
Any plain URL is converted to a clickable link:

```markdown
Visit https://github.com/dr-data/BioX-markdown for the source code.
```

**Renders as:** Visit <a href="https://github.com/dr-data/BioX-markdown">https://github.com/dr-data/BioX-markdown</a> for the source code.

### Email Addresses
Email addresses are automatically wrapped in `mailto:` links:

```markdown
Contact support@example.com for help.
```

**Renders as:** Contact <a href="mailto:support@example.com">support@example.com</a> for help.

---

## Image Support

### Basic Images
```markdown
![Alt text](path/to/image.png)
```

### Images with Captions
```markdown
![Alt text](path/to/image.png "Image Caption")
```

### Relative Paths
Configure `filePath` option to resolve relative image paths:

```javascript
import { render } from '@biox/markdown'

const html = render(markdown, {
  filePath: '/path/to/your/markdown.md'
})
```

---

## Custom Components

BioX-markdown supports a powerful custom component system.

### Built-in Components

#### Alert Components
```markdown
::: warning
This is a warning message.

::: danger
This is a critical error!

::: info
This is informational.

::: success
Operation completed successfully!
```

#### Code Group
```markdown
:::code-group
\`\`\`javascript
const x = 1
\`\`\`

\`\`\`python
x = 1
\`\`\`
:::

```

---

## Performance

### Rendering Speed
- **Fast:** BioX-markdown renders in milliseconds for typical documents
- **Efficient:** Optimized AST traversal and transformation
- **Bundled:** Single function, no runtime dependencies

### Bundle Size
- **UMD:** ~50KB (minified with gzip)
- **ESM:** ~45KB
- **CJS:** ~48KB
- **Tree-shakeable:** Dead code elimination in production builds

---

## Browser Support

BioX-markdown works in all modern browsers:

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Node.js 18+

---

## What's Next?

- 📖 See [Installation Guide](installation.md) to get started
- 🔧 Check out [API Reference](../api/) for complete configuration options
- 📚 Read [Tutorials](../tutorials/) for integration guides
- 📐 Learn about [LaTeX Support](latex.html) for mathematical equations
