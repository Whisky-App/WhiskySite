import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en', 'de', 'es', 'fi', 'fr', 'it', 'ja', 'ko',
      'nl', 'pl', 'pt', 'ru', 'tr', 'uk', 'vi',
      { path: 'pt-br', codes: ['pt-BR', 'pt-br'] },
      { path: 'zh-hans', codes: ['zh-Hans', 'zh-hans'] },
      { path: 'zh-hant', codes: ['zh-Hant', 'zh-hant'] },
    ],
    routing: {
      prefixDefaultLocale: false,
      trailingSlash: 'never',
    },
    fallback: {
      de: 'en', es: 'en', fi: 'en', fr: 'en', it: 'en',
      ja: 'en', ko: 'en', nl: 'en', pl: 'en', pt: 'en',
      ru: 'en', tr: 'en', uk: 'en', vi: 'en',
      'pt-br': 'en', 'zh-hans': 'en', 'zh-hant': 'en',
    },
  },
});
