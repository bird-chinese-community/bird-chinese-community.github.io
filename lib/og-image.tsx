import { ogPalette } from "./palette";

export interface OgPage {
  title: string;
  description: string | undefined;
  section: string | undefined;
  siteName: string;
  byline: string;
  host: string;
}

export const ogSize = { width: 1200, height: 630 };

/** The image source of the BIRDCC mark; `ogMarkImage` in lib/og.server.ts supplies its bytes. */
export const OG_MARK_SRC = "birdcc-mark.png";

const clamp = (lines: number) =>
  ({
    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineClamp: lines,
  }) as const;

// The two shapes of the BIRD file icon (assets/favicon.svg of the BIRD2 LSP extension).
const birdShapes = [
  {
    d: "m0 0 16 2c8 0 15 1 22 3l12 2v13a239 239 0 0 1-45 3c-20 2-20 2-26 0-5-1-9 0-14 2l-4 2-3 1a244 244 0 0 1-41 12l-3 1c-3 1-3 1-5 4l1 10c1 6 0 9-3 14v7c-1 6-1 6-3 8h-9c-3 0-3 0-5-2l-3-8-6-15-3-6-1-3-3-1v-2c-3-2-7-1-11-1h-2a1970 1970 0 0 0-55 0h-3l-9 1V18l19-1 3-1c8 0 14 1 22 3l18 3a5197 5197 0 0 1 17 2c10 2 16 5 23 12h4l1-3c1-9 1-9 3-13l10-4 7-3A396 396 0 0 1-45 1c14-5 30-4 45-1Z",
    transform: "translate(206 126)",
  },
  {
    d: "M0 0a485 485 0 0 1 0 29l-8 4-4 3c-7 7-17 13-26 18-5 3-5 3-8 8l1 12 1 2c0 4 1 7 3 10v6l-4 2h-2l-3-1-4-2-3-1c-5-2-7-5-11-9-3-4-3-4-8-7l-13 2-19 4c-9 1-17 4-25 8l-24 8-2 1a928 928 0 0 1-38 11l-3-2c0-3 1-5 3-7l3-3 2-2c11-9 23-18 36-25l2-1c12-7 26-9 39-11l13-2 10-1c4-1 5-3 8-6 2-2 4-2 7-3 9 0 14-2 20-8a514 514 0 0 1 18-14C-13 0-13 0 0 0Z",
    transform: "translate(256 24)",
  },
];

/** The bird of the file icon drawn large across the lower right corner, as a quiet background figure. */
function Figure() {
  return (
    <svg
      width={520}
      height={520}
      viewBox="0 0 256 256"
      style={{ position: "absolute", right: -40, bottom: -150 }}
    >
      {birdShapes.map((shape) => (
        <path
          key={shape.transform}
          d={shape.d}
          transform={shape.transform}
          fill={ogPalette.figure}
        />
      ))}
    </svg>
  );
}

export function OgImage(page: OgPage) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundImage: `linear-gradient(160deg, ${ogPalette.background}, ${ogPalette.backgroundDeep})`,
        color: ogPalette.foreground,
      }}
    >
      <Figure />
      <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "56px 64px 0" }}>
        <img src={OG_MARK_SRC} width={48} height={48} style={{ borderRadius: 11 }} />
        <span style={{ fontSize: 30, fontWeight: 700 }}>{page.siteName}</span>
        <span style={{ fontSize: 24, color: ogPalette.muted }}>{page.byline}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
          gap: 20,
          padding: "0 64px 24px",
          maxWidth: 1000,
        }}
      >
        {page.section && (
          <span style={{ fontSize: 24, lineHeight: 1.4, color: ogPalette.brand }}>
            {page.section}
          </span>
        )}
        <span
          style={{
            ...clamp(2),
            fontSize: 68,
            lineHeight: 1.12,
            fontWeight: 700,
            textWrap: "balance",
          }}
        >
          {page.title}
        </span>
        {page.description && (
          <span
            style={{
              ...clamp(2),
              fontSize: 30,
              lineHeight: 1.5,
              color: ogPalette.muted,
              textWrap: "pretty",
            }}
          >
            {page.description}
          </span>
        )}
      </div>
      <div
        style={{ display: "flex", padding: "0 64px 56px", fontSize: 22, color: ogPalette.muted }}
      >
        {page.host}
      </div>
    </div>
  );
}
