type TranslationModule = { default: Record<string, unknown> };
type TranslationMap = Record<string, TranslationModule>;

const translations = import.meta.glob('./common/*.json', { eager: true }) as TranslationMap;

const keyMap: Record<string, string> = {};
for (const key of Object.keys(translations)) {
  keyMap[key.toLowerCase()] = key;
}

function getTranslations(locale: string): Record<string, unknown> {
  const desired = `./common/${locale}.json`.toLowerCase();
  const key = keyMap[desired];
  return (key ? translations[key]?.default : undefined)
    ?? translations['./common/en.json']?.default
    ?? {};
}

function resolve(obj: Record<string, unknown>, key: string): string | undefined {
  const result = key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[part];
    return undefined;
  }, obj);
  return typeof result === 'string' ? result : undefined;
}

export function useTranslations(locale: string) {
  const msgs = getTranslations(locale);
  const fallback = getTranslations('en');

  return function t(key: string): string {
    return resolve(msgs, key) ?? resolve(fallback, key) ?? key;
  };
}
