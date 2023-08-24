import i18n from "astro-i18n"
import { defineConfig } from 'astro/config';
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    i18n(),
    UnoCSS({
      injectReset: true
    })
  ]
});