import { createMDX } from "fumadocs-mdx/next";
import { basePath, siteOrigin } from "./site.config.ts";

const projectRoot = import.meta.dirname;

/** @type {import('next').NextConfig} */
const config = {
  // GitHub Pages serves static files: pages, Markdown copies and the search index are built ahead of time.
  output: "export",
  // Pages are written as `<path>/index.html`: GitHub Pages serves it for `/en/` and redirects `/en` there.
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
  turbopack: { root: projectRoot },
  outputFileTracingRoot: projectRoot,
  serverExternalPackages: ["@takumi-rs/core"],
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_ORIGIN: siteOrigin,
  },
  experimental: {
    // Each language is its own root layout with its own `<html lang>`, so the 404 page needs its own document.
    globalNotFound: true,
  },
  // Type checking runs through `pnpm run check` (oxlint --type-aware --type-check).
  typescript: { ignoreBuildErrors: true },
};

export default createMDX()(config);
