import enText from "../messages/site.en.json" with { type: "json" };
import zhCNText from "../messages/site.zh-cn.json" with { type: "json" };

interface LabelText {
  codeBlock: string;
  codeBlockTitled: string;
  diagram: string;
}

const labels: Record<string, LabelText> = { en: enText, "zh-cn": zhCNText };

/** The accessible-name templates of code blocks and diagrams in the language of a content file. */
export function labelText(locale: string, path: string): LabelText {
  const text = labels[locale];
  if (text === undefined) throw new Error(`${path}: no block labels for "${locale}"`);
  return text;
}
