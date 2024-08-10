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
}) => {
  let langs = LANGS.filter((l) => l.locale === currentLocale);

  if (langs.length === 0) return english;

  return { ...english, ...langs[0].json };
};

export * from "./utils";
