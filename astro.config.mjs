import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://ukn-home.pages.dev',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
