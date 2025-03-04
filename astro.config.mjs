import { defineConfig } from 'astro/config';
import prism from 'rehype-prism-plus';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: { alias: { '@': '/src' } },
    plugins: [tailwindcss()],
  },
  markdown: { syntaxHighlight: false, rehypePlugins: [prism] },
  integrations: [],
  site: 'https://reddine.github.io',
});
