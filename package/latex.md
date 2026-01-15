# LaTeX Support

BioX-markdown includes full LaTeX/KaTeX support for rendering beautiful mathematical equations.

## Features

- ⚡ Fast rendering with KaTeX
- 📐 Inline and display math modes
- 🎨 Customizable styling
- 📱 Mobile-friendly rendering

## Inline Math

Use single dollar signs for inline math:

```markdown
The famous equation $E = mc^2$ shows the relationship between energy and mass.
```

**Renders as:** The famous equation $E = mc^2$ shows the relationship between energy and mass.

## Display Math

Use double dollar signs for display (block) math:

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

**Renders as:**

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## Common Examples

### Fractions

```markdown
$$
\frac{a}{b} = \frac{c}{d}
$$
```

### Summations

```markdown
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$
```

### Matrices

```markdown
$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$
```

### Greek Letters

```markdown
$\alpha, \beta, \gamma, \delta, \epsilon, \theta, \lambda, \mu, \pi, \sigma, \omega$
```

## Configuration

Enable LaTeX rendering in your code:

```javascript
import { render } from '@biox/markdown'

const markdown = `
# Mathematical Formula

The quadratic formula is:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
`

const html = render(markdown, {
  latex: {
    enabled: true,
    displayMode: true,
    throwOnError: false
  }
})
```

## Advanced Options

### Custom Macros

Define custom LaTeX macros:

```javascript
const html = render(markdown, {
  latex: {
    enabled: true,
    macros: {
      "\\R": "\\mathbb{R}",
      "\\N": "\\mathbb{N}"
    }
  }
})
```

### Trust Mode

Control which commands are allowed:

```javascript
const html = render(markdown, {
  latex: {
    enabled: true,
    trust: (context) => context.command === '\\url'
  }
})
```

## Resources

- [KaTeX Documentation](https://katex.org/docs/supported.html) - Supported functions
- [LaTeX Math Symbols](https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols) - Symbol reference
- [Demo Application](https://biox-markdown.vercel.app/) - Live examples

::: tip
See the [API Reference](/api/) for complete LaTeX configuration options.
:::
