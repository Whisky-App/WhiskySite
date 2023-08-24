import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	defaultLangCode: "en",
	supportedLangCodes: [],
	showDefaultLangCode: false,
	translations: {
		en: "src/translations/en.json"
	},
	routeTranslations: {},
})