import { defineConfig } from 'astro/config';
import UnoCSS from "unocss/astro";
import vue from "@astrojs/vue";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(), 
    UnoCSS({
      injectReset: true
    }), 
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    })
  ]
});