import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";
import mdx from "@astrojs/mdx";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), svelte()],
  output: "server",
  adapter: netlify()
});