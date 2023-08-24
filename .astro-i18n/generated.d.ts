type DefaultLangCode = "en"
type SupportedLangCode = "es" | "fr" | "it" | "ja" | "ko" | "nl" | "pt-BR" | "uk" | "pt" | "zh-Hans" | "zh-Hant"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/" 
type RouteParams = {"/": undefined; }
type TranslationPath = "header.discord" | "header.github" | "header.light" | "header.dark" | "splash.title" | "splash.subtitle" | "splash.latest-release" | "splash.all-releases" | "splash.icon-alt" | "wine.supercharged" | "wine.subtitle" | "marquee.growing" | "bento.setup.title" | "bento.setup.description" | "bento.setup.alt" | "bento.tools.title" | "bento.tools.description" | "bento.tools.alt" | "bento.design.title" | "bento.design.description" | "bento.design.alt" | "bento.design.list.native" | "bento.design.list.localised" | "bento.design.list.responsive" | "bento.design.list.sonoma" | "bento.integration.title" | "bento.integration.description" | "bento.integration.alt" | "bento.debugging.title" | "bento.debugging.description" | "bento.debugging.alt"
type TranslationOptions = { "header.discord": {} | undefined; "header.github": {} | undefined; "header.light": {} | undefined; "header.dark": {} | undefined; "splash.title": {} | undefined; "splash.subtitle": {} | undefined; "splash.latest-release": {} | undefined; "splash.all-releases": {} | undefined; "splash.icon-alt": {} | undefined; "wine.supercharged": {} | undefined; "wine.subtitle": {} | undefined; "marquee.growing": {} | undefined; "bento.setup.title": {} | undefined; "bento.setup.description": {} | undefined; "bento.setup.alt": {} | undefined; "bento.tools.title": {} | undefined; "bento.tools.description": {} | undefined; "bento.tools.alt": {} | undefined; "bento.design.title": {} | undefined; "bento.design.description": {} | undefined; "bento.design.alt": {} | undefined; "bento.design.list.native": {} | undefined; "bento.design.list.localised": {} | undefined; "bento.design.list.responsive": {} | undefined; "bento.design.list.sonoma": {} | undefined; "bento.integration.title": {} | undefined; "bento.integration.description": {} | undefined; "bento.integration.alt": {} | undefined; "bento.debugging.title": {} | undefined; "bento.debugging.description": {} | undefined; "bento.debugging.alt": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: Uri extends keyof RouteParams
			? undefined extends RouteParams[Uri]
				? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
				: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
