// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://terapiacomste.github.io',
  base: '/terapiacomste/',
  integrations: [tailwind()],
  outDir: 'dist'
});