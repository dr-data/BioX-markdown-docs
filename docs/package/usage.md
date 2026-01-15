# Usage Examples

Real-world examples of using BioX-markdown in various scenarios.

## Static Site Generation

### Next.js with MDX
```javascript
import { render } from '@biox/markdown'
import fs from 'fs/promises'
import path from 'path'

export default async function Post({ params }) {
  const filePath = path.join(process.cwd(), 'content/posts', params.slug + '.md')
  const markdownContent = await fs.readFile(filePath, 'utf-8')
  
  const html = render(markdownContent)
  
  return {
    props: { html }
  }
}
```

### React App
```jsx
import { render } from '@biox/markdown'
import { useEffect, useState } from 'react'

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('# Hello World')
  const [html, setHtml] = useState('')
  
  useEffect(() => {
    const rendered = render(markdown, {
      latex: { enabled: true },
      highlight: { theme: 'prism-tomorrow' }
    })
    setHtml(rendered)
  }, [markdown])
  
  return (
    <div>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
```

## API Service

### Express Endpoint
```javascript
import express from 'express'
import { render } from '@biox/markdown'

const app = express()

app.post('/api/render', (req, res) => {
  const { markdown, options } = req.body
  
  const html = render(markdown, options)
  
  res.json({ html })
})

app.listen(3000)
```

### Fastify Endpoint
```javascript
import Fastify from 'fastify'
import { render } from '@biox/markdown'

const fastify = Fastify()

fastify.post('/api/render', async (request, reply) => {
  const { markdown, options } = request.body
  
  const html = render(markdown, options)
  
  return { html }
})

await fastify.listen({ port: 3000 })
```

## Next.js API Route

```javascript
// app/api/render/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { render } from '@biox/markdown'

export async function POST(request: NextRequest) {
  const { markdown, options } = await request.json()
  
  const html = render(markdown, options)
  
  return NextResponse.json({ html })
}
```

## Client-Side Rendering

### With TypeScript
```typescript
import { render } from '@biox/markdown'

interface RenderOptions {
  markdown: string
  latex?: {
    enabled?: boolean
    displayMode?: boolean
    throwOnError?: boolean
  }
}

function renderMarkdown(options: RenderOptions): string {
  const html = render(options.markdown, {
    latex: options.latex
  })
  
  return html
}

const result = renderMarkdown({
  markdown: '# Hello World\n\nThis is **bold** text!',
  latex: { enabled: true }
})
```

### Vue.js Component
```vue
<template>
  <div>
    <textarea v-model="markdown" @input="handleInput"></textarea>
    <div v-html="renderedHtml"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { render } from '@biox/markdown'

const markdown = ref('# Hello World')
const renderedHtml = ref('')

function handleInput() {
  renderedHtml.value = render(markdown.value)
}
</script>
```

### Svelte Component
```svelte
<script>
  import { render } from '@biox/markdown'
  
  let markdown = '# Hello World'
  let html = ''
  
  function update() {
    html = render(markdown)
  }
</script>

<textarea bind:value={markdown} on:input={update} />
<div>{@html html}</div>
```

## Server-Side Rendering

### Bun Server
```javascript
import { serve } from 'bun'
import { render } from '@biox/markdown'

const server = serve({
  port: 3000,
  async fetch(req) {
    if (req.method === 'POST') {
      const { markdown } = await req.json()
      
      const html = render(markdown)
      
      return new Response(JSON.stringify({ html }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }
  }
})

console.log('Server running on http://localhost:3000')
```

### Node.js Server
```javascript
import http from 'http'
import { render } from '@biox/markdown'

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST') {
    let body = ''
    
    req.on('data', chunk => {
      body += chunk
    })
    
    req.on('end', () => {
      const { markdown } = JSON.parse(body)
      const html = render(markdown)
      
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ html }))
    })
  }
})

server.listen(3000)
```

## Advanced Usage

### Custom Syntax Highlighting
```javascript
import { render } from '@biox/markdown'

const html = render(markdown, {
  highlight: {
    theme: 'prism-dracula',
    languages: ['javascript', 'python', 'go']
  }
})
```

### LaTeX with Custom Macros
```javascript
import { render } from '@biox/markdown'

const html = render(markdown, {
  latex: {
    enabled: true,
    displayMode: true,
    macros: {
      "\\R": "\\mathbb{R}",
      "\\N": "\\mathbb{N}",
      "\\Q": "\\mathbb{Q}"
    }
  }
})
```

### Trusted LaTeX Mode
```javascript
import { render } from '@biox/markdown'

const html = render(markdown, {
  latex: {
    enabled: true,
    trust: (context) => {
      // Only allow \\url command
      return context.command === '\\url'
    }
  }
})
```

### Custom Image Handler
```javascript
import { render } from '@biox/markdown'

const html = render(markdown, {
  handlers: {
    image: (node, context) => {
      // Custom image handling logic
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

### Remove First H1
```javascript
import { render } from '@biox/markdown'

const html = render(markdown, {
  removeTitle: true
})
```

### Image Path Handling
```javascript
import { render } from '@biox/markdown'
import path from 'path'

const html = render(markdown, {
  filePath: '/absolute/path/to/document.md',
  imagePrefix: 'https://example.com/images'
})
```

## Error Handling

### Basic Error Handling
```javascript
import { render } from '@biox/markdown'

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
import { render } from '@biox/markdown'

const html = render(markdown, {
  latex: {
    enabled: true,
    throwOnError: false  // Don't throw, just display as plain text
  }
})

// Invalid LaTeX will render as plain text, not crash
```

## Performance Optimization

### Caching Rendered HTML
```javascript
import { render } from '@biox/markdown'

const cache = new Map()

function cachedRender(markdown) {
  if (cache.has(markdown)) {
    return cache.get(markdown)
  }
  
  const html = render(markdown)
  cache.set(markdown, html)
  
  return html
}

// Usage
const html1 = cachedRender('# Document 1')
const html2 = cachedRender('# Document 1')  // Returns from cache
```

### Streaming for Large Documents
```javascript
import { render } from '@biox/markdown'

function* streamRender(markdown) {
  // Process in chunks for very large documents
  const chunks = markdown.split('\n\n\n')
  
  for (const chunk of chunks) {
    yield render(chunk)
  }
}

// Usage
for (const html of streamRender(largeMarkdown)) {
  process.stdout.write(html)
}
```

## Testing

### Unit Test Example
```javascript
import test from 'ava'
import { render } from '@biox/markdown'

test('renders basic markdown', (t) => {
  const markdown = '# Hello World'
  const html = render(markdown)
  
  t.true(html.includes('<h1>Hello World</h1>'))
})
```

### Integration Test
```javascript
import { render } from '@biox/markdown'

// Test all features
const features = [
  { name: 'LaTeX', markdown: '$E=mc^2$' },
  { name: 'Code blocks', markdown: '```javascript\nconsole.log("hi")\n```' },
  { name: 'Tables', markdown: '| A | B |\n|---|---|\n| 1 | 2 |' },
  { name: 'Links', markdown: '[Example](https://example.com)' }
]

features.forEach(({ name, markdown }) => {
  try {
    const html = render(markdown)
    console.log(`✅ ${name} passed`)
  } catch (error) {
    console.error(`❌ ${name} failed:`, error)
  }
})
```

## Best Practices

### Security
- **Sanitize Input:** Always validate user input before rendering
- **Escape HTML:** Use proper HTML escaping for user content
- **XSS Prevention:** BioX-markdown includes built-in sanitization
- **Trust Mode:** Use trust mode carefully with user-provided LaTeX

### Performance
- **Cache Results:** Store rendered HTML to avoid re-rendering
- **Debounce Input:** For real-time editors, debounce before rendering
- **Server-Side Preferred:** Render on server for better performance
- **Bundle Size:** Use tree-shaking to reduce bundle size

### Developer Experience
- **TypeScript Support:** BioX-markdown includes TypeScript definitions
- **Clear Errors:** Provide helpful error messages
- **Fallback Content:** Show original markdown if render fails
- **Progressive Enhancement:** Start with basic features, add advanced later

### Production
- **Error Boundaries:** Use error boundaries in React
- **Monitoring:** Track render times and errors
- **CDN Delivery:** Serve BioX-markdown from CDN for better performance
- **Version Pinning:** Pin specific version in package.json for stability

## What's Next?

- 🔧 Check [API Reference](../api/) for all available options
- 📖 Learn [Features](features.md) for detailed feature documentation
- 📚 Read [Tutorials](../tutorials/) for step-by-step guides
