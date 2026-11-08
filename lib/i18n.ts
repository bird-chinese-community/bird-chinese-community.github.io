import { defineI18n } from "fumadocs-core/i18n";

/**
 * English is the source language and Simplified Chinese is translated from it. A static export
 * has no server to rewrite paths without a language segment, so every path has one (`/en/…`,
 * `/zh-cn/…`). A page without a translation falls back to English.
 */
export const i18n = defineI18n({
  defaultLanguage: "en",
  languages: ["en", "zh-cn"],
  hideLocale: "never",
  parser: "dot",
});

export type Locale = (typeof i18n.languages)[number];

/** BCP 47 tags for `<html lang>`, `hreflang` and Open Graph. */
export const htmlLang = {
  en: "en",
  "zh-cn": "zh-CN",
} as const satisfies Record<Locale, string>;

/** Each language name in that language, for the language menus. */
export const languageNames = {
  en: "English",
  "zh-cn": "简体中文",
} as const satisfies Record<Locale, string>;

export function isLocale(value: string): value is Locale {
  return i18n.languages.some((language) => language === value);
}

/** The docs language for a BCP 47 tag such as `zh-Hans-CN`; every Chinese tag maps to `zh-cn`. */
export function matchLocale(tag: string): Locale {
  const [language] = tag.toLowerCase().replaceAll("_", "-").split("-");
  return language === "zh" ? "zh-cn" : "en";
}
