import { DEFAULT_LANG, LANGS, LocaleType } from "./index";

export const showDefaultLang = false;

export function getLangFromUrl(url: URL): LocaleType {
  const [, lang] = url.pathname.split("/");
  if (LANGS.map((l) => l.locale).includes(lang)) return lang;
  return DEFAULT_LANG;
}

export function useTranslatePath(lang: LocaleType) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === DEFAULT_LANG ? path : `/${l}${path}`;
  };
}
