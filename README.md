# bird-chinese-community.github.io

Source of the BIRDCC User Guide & Technical Reference (Developer Preview) at <https://bird-chinese-community.github.io>. The site documents the BIRD Chinese Community tools for BIRD 2 and BIRD 3 configuration files: the editor extensions, the `birdcc` CLI, the language server, the linter, the formatter and the `setup-birdcc` GitHub Action.

The site is a static export of Next.js with [Fumadocs](https://fumadocs.dev). Pages are in English and Simplified Chinese.

## Local development

Node.js 24 or newer and pnpm 11 are required.

```sh
pnpm install
pnpm dev            # http://localhost:3885
pnpm run build      # static files in out/
pnpm run check      # oxlint with type checking
pnpm run format     # oxfmt
```

The build reads the Git history of each page for the contributor list, so it runs in a clone with at least one commit.

## Layout

| Path                          | Content                                                       |
| ----------------------------- | ------------------------------------------------------------- |
| `content/docs/`               | Pages: `<name>.mdx` in English, `<name>.zh-cn.mdx` in Chinese |
| `content/docs/**/meta.json`   | Page order and section titles of the sidebar                  |
| `app/`, `components/`, `lib/` | Site shell, MDX components and the MDX pipeline               |
| `brand/theme.css`             | Brand palette and font stacks                                 |
| `design.md`                   | Presentation rules of the site                                |

A link to another page uses its source file, for example `[Lint rules](./linting/rules.mdx)`. The build rewrites it to the page URL in the language of the linking page and fails on a link to a missing file.

## Deployment

`.github/workflows/pages.yml` builds every push and pull request. A push to `main` deploys the build to GitHub Pages.

## License

[Apache License 2.0](./LICENSE). See [NOTICE](./NOTICE) for the origin of the site code.
