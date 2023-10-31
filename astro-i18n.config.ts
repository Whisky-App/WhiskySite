import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	primaryLocale: "en",
	secondaryLocales: ["de", "es", "fi", "fr", "it", "ja","ko", "nl", "pl", "pt-BR", "ru", "uk", "vi", "pt", "zh-Hans", "zh-Hant"],
	fallbackLocale: "en",
	trailingSlash: "never",
	run: "server",
	showPrimaryLocale: false,
	translationLoadingRules: [],
	translationDirectory: {},
	translations: {},
	routes: {},
})