import { defineConfig } from 'astro/config';
import UnoCSS from "unocss/astro";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
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