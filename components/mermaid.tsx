"use client";

import { useTheme } from "next-themes";
import { useEffect, useId, useState } from "react";

interface MermaidProps {
  /** The diagram source from the `mermaid` code block. */
  chart: string;
  /** The accessible name of the scroll region, set by `remarkDiagramLabels`. */
  label?: string;
}

/**
 * A Mermaid diagram from design.md: rendered in the browser in the current theme, on a card surface
 * that scrolls horizontally when the diagram is wider than the article.
 */
export function Mermaid({ chart, label }: MermaidProps) {
  if (label === undefined) throw new Error("A diagram reached the page without a label.");
  const { resolvedTheme } = useTheme();
  const id = `mermaid-${useId().replaceAll(/[^\w-]/gu, "")}`;
  const [svg, setSvg] = useState<string>();
  const [error, setError] = useState<Error>();
  useEffect(() => {
    if (resolvedTheme === undefined) return undefined;
    let current = true;
    void import("mermaid")
      .then(async ({ default: mermaid }) => {
        mermaid.initialize({
          startOnLoad: false,
          theme: resolvedTheme === "dark" ? "dark" : "neutral",
          fontFamily: "inherit",
        });
        const result = await mermaid.render(id, chart);
        if (current) setSvg(result.svg);
      })
      .catch((cause: unknown) => {
        if (current) setError(new Error(`${label} failed to render`, { cause }));
      });
    return () => {
      current = false;
    };
  }, [chart, id, label, resolvedTheme]);
  if (error !== undefined) throw error;
  return (
    <div
      className="cc-diagram not-prose"
      role="region"
      tabIndex={0}
      aria-label={label}
      aria-busy={svg === undefined}
      // The SVG comes from Mermaid with its default strict security level.
      dangerouslySetInnerHTML={svg === undefined ? undefined : { __html: svg }}
    />
  );
}
