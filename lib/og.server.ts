import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { Renderer } from "takumi-js/node";
import { OG_MARK_SRC } from "./og-image";

/**
 * The font family of the preview images. The renderer has no CJK glyphs; Noto Sans SC covers the
 * Simplified Chinese and the Latin text of both languages.
 */
export const ogFontFamily = "Noto Sans SC Variable";

/** Registers every woff2 subset of the Fontsource package as one family, so each script finds glyphs. */
async function registerFont(renderer: Renderer) {
  // The bundler replaces `require.resolve` with a module id, so the files are found from the
  // package directory that runs `next build`.
  const path = join(process.cwd(), "node_modules", "@fontsource-variable", "noto-sans-sc", "files");
  const files = (await readdir(path))
    .filter((file) => file.endsWith("-wght-normal.woff2"))
    .toSorted();
  if (files.length === 0) throw new Error(`No font files in ${path}`);
  await Promise.all(
    files.map(async (file, rank) =>
      renderer.registerFont({
        name: `${ogFontFamily} ${String(rank)}`,
        data: await readFile(join(path, file)),
        subsetOf: ogFontFamily,
        subsetRank: rank,
      }),
    ),
  );
}

let shared: Promise<Renderer> | undefined;

export function ogRenderer(): Promise<Renderer> {
  shared ??= (async () => {
    const renderer = new Renderer();
    await registerFont(renderer);
    return renderer;
  })();
  return shared;
}

let mark: Promise<{ src: string; data: Buffer }> | undefined;

/** The BIRDCC mark from `public/mark.png`, read once for every preview image. */
export function ogMarkImage(): Promise<{ src: string; data: Buffer }> {
  mark ??= readFile(join(process.cwd(), "public", "mark.png")).then((data) => ({
    src: OG_MARK_SRC,
    data,
  }));
  return mark;
}
