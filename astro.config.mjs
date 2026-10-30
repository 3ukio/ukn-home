import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://aion2now.com',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
