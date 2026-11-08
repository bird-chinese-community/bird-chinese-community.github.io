import type { Root } from "hast";
import { visit } from "unist-util-visit";
import type { VFile } from "vfile";
import { labelText } from "./labels.ts";
import { localeOf } from "./remark-content-links.ts";

/**
 * Numbers the code blocks of a page. Each code block sits in a focusable scroll region, and the
 * regions of one page need distinct names: the number, followed by the title when the block has one.
 */
export function rehypeCodeLabels() {
  return (tree: Root, file: VFile) => {
    const text = labelText(localeOf(file.path), file.path);
    let count = 0;
    visit(tree, "element", (node) => {
      if (node.tagName !== "pre") return;
      count += 1;
      const title = node.properties["title"];
      const label =
        typeof title === "string" && title !== ""
          ? text.codeBlockTitled.replace("{index}", String(count)).replace("{title}", title)
          : text.codeBlock.replace("{index}", String(count));
      node.properties["dataLabel"] = label;
    });
  };
}
