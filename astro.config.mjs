import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), partytown()]
});