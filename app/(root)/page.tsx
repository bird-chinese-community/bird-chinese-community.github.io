import type { Metadata } from "next";
import { BrandMark } from "@/components/brand-mark";
import { LanguageList } from "@/components/language-list";
import { siteText } from "@/lib/layout.shared";
import { absoluteUrl, basePath, siteName } from "@/lib/shared";

export const metadata: Metadata = {
  title: `${siteName} ${siteText.en.byline}`,
  description: siteText.en.description,
  alternates: { canonical: absoluteUrl("/en/") },
};

/**
 * Sends the reader to the docs in the first browser language, with the same mapping as
 * `matchLocale` in lib/i18n.ts. The list stays for readers without scripts.
 */
const redirect = `(() => {
  const language = (navigator.languages[0] ?? navigator.language ?? '').toLowerCase().split('-')[0];
  location.replace('${basePath}/' + (language === 'zh' ? 'zh-cn' : 'en') + '/');
})();`;

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md grow flex-col justify-center gap-6 px-6 py-16">
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <div className="flex items-center gap-3">
        <BrandMark className="size-10" />
        <h1 className="text-h1">{siteName}</h1>
      </div>
      <LanguageList label={siteText.en.chooseLanguage} />
    </main>
  );
}
