// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://edwinmartin1908.github.io",
  base: "/Cosmos-Coatings/",
  vite: {
    plugins: [tailwindcss()]
  },
});