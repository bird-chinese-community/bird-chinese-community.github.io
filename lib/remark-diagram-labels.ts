/// <reference types="mdast-util-mdx-jsx" />
import type { Root } from "mdast";
import { visit } from "unist-util-visit";
import type { VFile } from "vfile";
import { labelText } from "./labels.ts";
import { localeOf } from "./remark-content-links.ts";

/**
 * Numbers the diagrams of a page. `remarkMdxMermaid` has turned each `mermaid` code block into a
 * `<Mermaid>` element; each diagram sits in a focusable scroll region that needs a distinct name.
 */
export function remarkDiagramLabels() {
  return (tree: Root, file: VFile) => {
    const text = labelText(localeOf(file.path), file.path);
    let count = 0;
    visit(tree, "mdxJsxFlowElement", (node) => {
      if (node.name !== "Mermaid") return;
      count += 1;
      node.attributes.push({
        type: "mdxJsxAttribute",
        name: "label",
        value: text.diagram.replace("{index}", String(count)),
      });
    });
  };
}
