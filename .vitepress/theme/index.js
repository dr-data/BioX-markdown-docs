/**
 * BioX Custom Theme for VitePress
 *
 * Extends the default VitePress theme with @bio-x/theme styling
 */

import DefaultTheme from 'vitepress/theme'
import './biox-theme.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Custom app enhancements can be added here
    // For example, registering global components:
    // app.component('MyComponent', MyComponent)
  }
}
