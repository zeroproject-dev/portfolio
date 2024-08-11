export * from "./utils";
import english from "@i18n/locales/english.json";
import spanish from "@i18n/locales/spanish.json";

export const LANGS = [
  { locale: "en", json: english, label: " 🇺🇸 English" },
  { locale: "es", json: spanish, label: " 🇪🇸 Español" },
];

export type LocaleType = (typeof LANGS)[number]["locale"];

export const DEFAULT_LANG: LocaleType = LANGS[0].locale;

export const getI18N = ({
  currentLocale = DEFAULT_LANG,
}: {
  currentLocale: LocaleType | undefined;
}): typeof english => {
  let langs = LANGS.filter((l) => l.locale === currentLocale);

  if (langs.length === 0) return english;

  return deepMerge(english, langs[0].json);
};

function deepMerge(target: any, source: any): any {
  const merged = { ...target };

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === "object" && source[key] !== null) {
        if (Array.isArray(source[key])) {
          merged[key] = (merged[key] || []).map((item: any, index: any) =>
            deepMerge(item, source[key][index]),
          );
        } else if (typeof merged[key] === "object" && merged[key] !== null) {
          merged[key] = deepMerge(merged[key], source[key]);
        } else {
          merged[key] = deepMerge({}, source[key]) as any;
        }
      } else {
        merged[key] = source[key];
      }
    }
  }

  return merged;
}
