# Tutorials

Step-by-step guides for integrating BioX-markdown into your projects.

## Getting Started

### Basic Integration

Learn how to integrate BioX-markdown into your project:

```javascript
import { render } from '@biox/markdown'

// Simple markdown rendering
const markdown = `
# Welcome to BioX-markdown

This is a **bold** statement and this is *italic*.

- List item 1
- List item 2
- List item 3
`

const html = render(markdown)
document.getElementById('content').innerHTML = html
```

### With React

```jsx
import { render } from '@biox/markdown'
import { useMemo } from 'react'

function MarkdownContent({ markdown }) {
  const html = useMemo(() => render(markdown), [markdown])

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}
```

### With Next.js

```jsx
import { render } from '@biox/markdown'

export default function BlogPost({ content }) {
  const html = render(content)

  return (
    <article>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}

export async function getStaticProps() {
  const content = await fetchMarkdownContent()
  return { props: { content } }
}
```

## Advanced Topics

### LaTeX Math Rendering

Render beautiful mathematical equations:

```javascript
const markdown = `
Inline math: $E = mc^2$

Display math:
$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$
`

const html = render(markdown, {
  latex: { enabled: true }
})
```

### Custom Components

Extend BioX-markdown with custom components:

```javascript
const html = render(markdown, {
  components: {
    alert: (props) => `<div class="alert">${props.children}</div>`
  }
})
```

## Examples

Check out the [Demo Application](https://biox-markdown.vercel.app/) for live examples.

::: tip
More tutorials coming soon! Check the [API Reference](/api/) for detailed documentation.
:::

## Next Steps

- [Package Docs](/package/) - Installation and features
- [API Reference](/api/) - Complete API documentation
