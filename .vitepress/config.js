import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'BioX-markdown',
  description: 'Render Markdown to HTML, BioX-style. Server-side/build-time rendering with LaTeX, syntax highlighting, and more.',
  lang: 'en-US',
  base: '/',
  ignoreDeadLinks: true,
  appearance: true,
  themeConfig: {
    locales: {
      root: {
        label: 'English',
        lang: 'en-US'
      }
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#ec3750' }]
  ],
  markdown: {
    languages: ['javascript', 'typescript', 'bash', 'go', 'ruby', 'python']
  }
})
