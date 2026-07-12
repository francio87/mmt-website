import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/data/site.js';

export default defineConfig({
  site: site.url,
  output: 'static',
  build: { format: 'directory', assets: 'build-assets' },
  integrations: [sitemap()]
});
