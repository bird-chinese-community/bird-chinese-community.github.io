import { zhCN } from "@fumadocs/language/zh-cn";
import { gitChangelogTranslations } from "fumadocs-page-history/i18n";
import { uiTranslations } from "fumadocs-ui/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import historyZhCN from "../messages/history.zh-cn.json" with { type: "json" };
import en from "../messages/site.en.json" with { type: "json" };
import zhCNText from "../messages/site.zh-cn.json" with { type: "json" };
import { i18n, languageNames, type Locale } from "./i18n";

/** Fumadocs and page-history interface text. */
export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .extend(gitChangelogTranslations())
  .preset("zh-cn", zhCN())
  .preset("zh-cn", { name: "zh-CN", value: historyZhCN })
  .add(
    Object.fromEntries(
      i18n.languages.map((language) => [language, { displayName: languageNames[language] }]),
    ),
  );

type SiteText = typeof en;

/** Site shell text outside the Fumadocs translations, from `messages/site.*.json`. */
export const siteText: Record<Locale, SiteText> = {
  en,
  "zh-cn": zhCNText satisfies SiteText,
};

/** Fills `{name}` placeholders in site text. */
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replaceAll(/\{(\w+)\}/gu, (_, name: string) => {
    const value = values[name];
    if (value === undefined) throw new Error(`"${text}" needs a value for {${name}}`);
    return String(value);
  });
}

/**
 * The brand, language, theme and repository live in the site header; the sidebar keeps search and
 * the page tree. Navigation stays enabled because Fumadocs renders `slots.header` only then; below
 * 768px that slot holds `DocsBar`, which opens the page tree and search. `NoSidebarTitle` empties
 * the sidebar title.
 */
export const layoutOptions: BaseLayoutProps = {
  nav: { enabled: true },
  i18n: false,
  themeSwitch: { enabled: false },
};
