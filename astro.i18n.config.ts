import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	defaultLangCode: "en",
	supportedLangCodes: ["da", "de", "es", "fi", "fr", "it", "ja", "ko", "nl", "pl", "pt-BR", "ru", "uk", "vi", "pt", "tr", "zh-Hans", "zh-Hant"],
	showDefaultLangCode: false,
	translations: {
		"da": "src/translations/da.json",
		"de": "src/translations/de.json",
		"en": "src/translations/en.json",
		"es": "src/translations/es.json",
		"fi": "src/translations/fi.json",
		"fr": "src/translations/fr.json",
		"it": "src/translations/it.json",
		"ja": "src/translations/ja.json",
		"ko": "src/translations/ko.json",
		"nl": "src/translations/nl.json",
		"pl": "src/translations/pl.json",
		"pt-BR": "src/translations/pt-BR.json",
		"ru": "src/translations/ru.json",
		"uk": "src/translations/uk.json",
		"vi": "src/translations/vi.json",
		"pt": "src/translations/pt.json",
		"tr": "src/translations/tr.json",
		"zh-Hans": "src/translations/zh-Hans.json",
		"zh-Hant": "src/translations/zh-Hant.json"
	},
	routeTranslations: {},
})