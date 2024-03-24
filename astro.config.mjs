import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import prism from 'rehype-prism-plus';

// https://astro.build/config
export default defineConfig({
  vite: { resolve: { alias: { '@': '/src' } } },
  markdown: { syntaxHighlight: false, rehypePlugins: [prism] },
  integrations: [tailwind()],
  site: 'https://reddine.github.io',
});
