---
name: birdcc-docs-design
description: Presentation rules for the BIRDCC documentation site (docs articles, guide pages, the docs home, the language entry and the 404 page) and its link preview images. Readers are network operators and developers who read reference tables, copy commands and configuration, and compare options while they edit BIRD configuration files.
version: 2026-11-08.2
---

# BIRDCC docs design

## 1. Scope and priority

Applies to:

- Docs pages: the docs home, guide pages and reference pages under the site header.
- Standalone pages: the language entry at the site root and the 404 page.
- Link preview images of docs pages.
- The light and the dark theme.

Does not apply to: the editor extensions, terminal output of the tools, README files and the promotion site.

Priority for conflicts: facts and user requirements; accessibility; the reader's current task; Fumadocs conventions; brand expression; decoration.

## 2. Brand and readers

- [SHOULD] Ink on paper. Text, links, primary actions and the selected item use the ink token `--cc-primary`. The teal brand color `--cc-brand` appears in the mark and in the section line of link preview images. Saturated color elsewhere reports a state: warning, error or success.
- [SHOULD] Commands and configuration are content. A command or a configuration fragment that the reader copies appears in a code block with a copy button and a language tag.
- [SHOULD] Readers scan reference pages. A table carries options, defaults and values; prose before it states what the table covers in one sentence.
- [SHOULD] Readers read Chinese and English. Both languages use the same type roles and the same page structure.
- Copy tone: plain, specific and literal. State what a tool does, its defaults and its limits. One instruction for each sentence, active voice, no marketing words, no exclamation marks, no "simply", "seamless" or "powerful".

## 3. Page types and composition

### Site header

- [SHOULD] A sticky header, `--cc-header-height` (64px) high, with a hairline bottom border and the page background at 75% opacity with a backdrop blur.
- [SHOULD] Left: the mark (28px), the site name in the Card title role, a 16px hairline divider and the byline in muted 14px text. The group is one link to the docs home of the current language. Below 768px the divider and the byline are not shown; the byline stays in the accessible name of the link.
- [SHOULD] Right: the GitHub link (icon only below 640px), the language menu and the theme menu as icon buttons.
- [SHOULD] The header content and the docs layout share one 1280px frame (`--fd-layout-width`) centered in the viewport.

### Docs page (guide and reference)

- [SHOULD] Fumadocs docs layout under the site header: page tree sidebar on the left, the article in the center, the table of contents on the right. The sidebar has no title and does not collapse on desktop.
- [SHOULD] Article order: title in the H1 role, one-sentence description in muted Body text, a row with the page actions (copy Markdown, open with) above a hairline, then the body. The page ends with the contributor list and the page history when the page has commits, otherwise with the last update time.
- [SHOULD] No breadcrumb; the sidebar shows the hierarchy.
- [SHOULD] The sidebar groups pages by tool function in collapsible folders, one level deep. A folder lists its usage pages first and its reference page last. A topic with one page stays a top-level page. Pages for developers of the tools follow a separator at the end.
- [SHOULD] A guide page orders its body by the reader's steps: the command or configuration first, then its effect, then options and limits. Numbered procedures use `Steps`.
- [SHOULD] A reference page leads with the table or definition list that answers the lookup. Long explanation follows the table under its own H2.
- [SHOULD] Below 768px the sidebar becomes a drawer. A 48px bar under the site header holds the "Pages" button that opens it and the search button.

### Docs home

- [SHOULD] The docs home is a docs page, not a landing page: title, one-line description, what the tools are and how they connect (one diagram), then links to the main sections as cards in a two-column grid that collapses to one column in narrow articles.
- [SHOULD] No hero, no illustration and no call-to-action button.

### Standalone pages

- [SHOULD] One centered column, at most 448px wide, vertically centered: the mark (40px), the title in the H1 role, then the language list as one card with a hairline between rows. Each row shows the flag (20px) and the language name in the Card title role.
- [SHOULD] The 404 page states the title and one sentence in both languages; the Chinese text carries `lang="zh-CN"`.

### Link preview image

- [SHOULD] 1200 × 630, dark: a 160° gradient from `#121b1c` to `#0a0f10`. Top row: the mark (48px, 11px radius), the site name (30px, 700) and the byline (24px, muted `#a2b2b1`). The host (22px, muted) sits at the bottom left. The section line in the brand teal `#5cc6b0` (24px), the title (68px, 700, two lines at most) and the description (30px, muted, two lines at most) sit in the vertical center.
- [SHOULD] The bird of the BIRD file icon fills the lower right corner at 5% white as a background figure.

## 4. Visual rules

### Type

- [MUST] Use the system font stacks `--cc-font-sans` and `--cc-font-mono`. Pages do not load web fonts. Link preview images use Noto Sans SC because the image renderer has no system fonts.
- [SHOULD] Roles, as utilities in `app/tokens.css` (size / line height / weight / tracking):
  - H1 (`text-h1`): 30px / 1.2 / 700 / `--cc-tracking-display`. The page title.
  - Section title (`text-section-title`): 20px / 1.4 / 600 / `--cc-tracking-heading`. Article H2.
  - Card title (`text-card-title`): 16px / 1.5 / 600. Article H3, card titles, language rows.
  - Body (`text-body`): 15px / 1.6 / 400. Descriptions, callouts, tables.
  - Meta (`text-meta`): 13px / 1.4 / 400. Secondary lines.
  - Article prose: 15px / 1.75 / 400.
- [SHOULD] Latin headings use negative tracking (-0.02em display, -0.01em heading). Chinese text uses 0 tracking; `:root:lang(zh)` resets it.
- [SHOULD] Numbers use `tabular-nums` everywhere.
- [SHOULD] Emphasize with weight, not with size or color.

### Color

- [MUST] Text contrast is at least 4.5:1 against its surface; icons, focus rings and control borders at least 3:1. Checked pairs: `--cc-ink` on white 17.7:1 and on `--cc-canvas` 16.3:1; `--cc-ink-secondary` on `--cc-canvas` 7.2:1; `--cc-brand` on white 6.5:1; dark `--cc-ink-secondary` on `--cc-surface` 8.0:1; dark `--cc-brand` on `--cc-canvas` 9.3:1.
- [SHOULD] The theme follows the operating system until the reader picks one in the theme menu. Tokens switch through the `.dark` class on `html`.
- [SHOULD] Surfaces: the page is white in the light theme and `--cc-canvas` in the dark theme; cards, callouts, code blocks, diagrams and tab groups use the card surface (`--cc-canvas` light, `--cc-surface` dark); hover and selected rows use `--cc-primary-tint`.
- [SHOULD] Callouts: info and idea use the card surface with an ink icon; warning and error use a 10% tint of `--cc-warning` or `--cc-danger` with a 40% border; success uses the card surface with a `--cc-success` icon.
- [SHOULD] Article links use the body color with an ink underline.
- [SHOULD] Code blocks use the Shiki themes `github-light-default` and `github-dark-default`; their comment colors reach 4.5:1 on both card surfaces.

### Space, radius, depth

- [SHOULD] 4px spacing grid. Cards in a grid are 16px apart; card padding is 16px.
- [SHOULD] Radii: controls and code blocks `--radius` (10px); cards, callouts, diagrams, tab groups and menus `--radius-card` (14px); the mark 22% of its size; flags fully round.
- [SHOULD] Depth: surfaces use a hairline border (`--cc-hairline`) and no shadow. Menus and dialogs use `--shadow-overlay` (`--cc-shadow-float`).

### Code, tables and diagrams

- [SHOULD] Every code block names its language. BIRD configuration uses `bird2`; shell commands use `sh`; JSON configuration uses `json` or `jsonc`. A block that shows one file has a `title` with the file name.
- [SHOULD] A table fills the article width. Headers and columns whose cells are at most 16 Latin or 8 Chinese characters do not wrap; the longest column takes the remaining width. A table wider than the article scrolls inside its own area.
- [SHOULD] Option names, values, file names, commands and rule codes in prose and tables use inline code.
- [SHOULD] A diagram is a Mermaid code block. It renders in the browser on the card surface with a hairline border and 16px padding, in the `neutral` Mermaid theme in the light theme and `dark` in the dark theme, with the inherited font. A diagram wider than the article scrolls inside its own area and keeps its drawn size. Use flowcharts for structure and data flow and sequence diagrams for message order.
- [SHOULD] While a diagram renders, its area keeps at least 192px of height.

### Icons and flags

- [MUST] Interface icons come from `lucide-react`, 16px in content and 18px in icon buttons, with the default stroke width. Decorative icons have `aria-hidden`.
- [SHOULD] A top-level page or a folder in the sidebar may carry one icon from `lib/icons.tsx`; pages inside a folder have none. Card icons are muted and sit beside the title; they have no tile or colored background.
- [SHOULD] Language menus and lists show a round flag from `@sankyu/react-circle-flags` before each language name: 16px in menus, 20px in lists. The flag is decorative; the language name, written in that language, is the label.

### Controls and states

- [MUST] Every focusable element shows a 2px outline in `--ring` with a 2px offset, in both themes. Scroll regions of code blocks, tables and diagrams draw the outline inside (-2px offset).
- [MUST] Below 768px, every control has a touch target of at least 44px.
- [SHOULD] Icon buttons are ghost buttons: muted icon, accent background on hover and while their menu is open.
- [SHOULD] Menus are one popup surface; radio rows show a check at the right edge for the current choice.
- [SHOULD] Linked cards change the border to 40% ink and the background to the accent on hover.
- [MUST] Each scroll region of a code block or a diagram has a distinct accessible name: "Code 1", "Code 2: bird.conf", "Diagram 1".

### Motion

- [SHOULD] Menus use the Fumadocs popover in and out animations. Theme changes do not animate.
- [MUST] With `prefers-reduced-motion: reduce`, animations and transitions finish at once.

## 5. Available primitives

Pages use only the names below. MDX pages use the components in the table and Tailwind utilities with the listed tokens. Page-specific classes use the `cc-` prefix in `app/globals.css`; they do not change the type, borders or surfaces of the listed components.

| Role                       | Implementation                                                                                                   | Source                                                                              | Usage condition                                    | Status      |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------- | ----------- |
| Brand palette, font stacks | `--cc-*` custom properties                                                                                       | `brand/theme.css`                                                                   | Every page                                         | Implemented |
| Docs tokens, type roles    | Fumadocs tokens mapped to `--cc-*`; `text-h1`, `text-section-title`, `text-card-title`, `text-body`, `text-meta` | `app/tokens.css`                                                                    | Every page                                         | Implemented |
| Site header                | `SiteHeader`                                                                                                     | `components/site-header.tsx`                                                        | Docs pages                                         | Implemented |
| Narrow docs bar            | `DocsBar`, `NoSidebarTitle`                                                                                      | `components/docs-bar.tsx`                                                           | Docs layout slots                                  | Implemented |
| Mark                       | `BrandMark` (`public/mark.png`)                                                                                  | `components/brand-mark.tsx`                                                         | Header, standalone pages                           | Implemented |
| Language and theme menus   | `LanguageMenu`, `ThemeMenu`, `iconButton`, `menuPopup`, `menuItem`                                               | `components/language-menu.tsx`, `theme-menu.tsx`, `icon-button.ts`, `menu-popup.ts` | Site header                                        | Implemented |
| Language list              | `LanguageList`                                                                                                   | `components/language-list.tsx`                                                      | Standalone pages                                   | Implemented |
| Callout                    | `<Callout type="info \| idea \| warning \| error \| success" title?>`                                            | `components/callout.tsx`                                                            | A note, limit or warning beside the text           | Implemented |
| Cards                      | `<Cards>` with `<Card title description? href? icon?>`                                                           | `components/card.tsx`, `components/mdx.tsx`                                         | Links to sections; the docs home                   | Implemented |
| Steps                      | `<Steps>`, `<Step>`                                                                                              | `fumadocs-ui/components/steps`                                                      | Numbered procedures                                | Implemented |
| Tabs                       | `<Tabs items={[…]}>`, `<Tab value>`                                                                              | `fumadocs-ui/components/tabs`, `components/mdx.tsx`                                 | Alternatives of one step (editor, package manager) | Implemented |
| Files                      | `<Files>`, `<Folder name>`, `<File name>`                                                                        | `fumadocs-ui/components/files`                                                      | Directory layouts                                  | Implemented |
| Accordion                  | `<Accordions>`, `<Accordion title>`                                                                              | `fumadocs-ui/components/accordion`                                                  | Questions and answers                              | Implemented |
| Type table                 | `<TypeTable type={…}>`                                                                                           | `fumadocs-ui/components/type-table`                                                 | Typed options of an API                            | Implemented |
| Diagram                    | `\`\`\`mermaid`code block →`Mermaid`                                                                             | `components/mermaid.tsx`, `lib/remark-diagram-labels.ts`                            | Structure and data flow                            | Implemented |
| Code block labels          | `rehypeCodeLabels`                                                                                               | `lib/rehype-code-labels.ts`                                                         | Every code block                                   | Implemented |
| Page icons                 | `icon:` names in `iconComponents`                                                                                | `lib/icons.tsx`                                                                     | Sidebar entries, cards                             | Implemented |
| Link preview image         | `OgImage`, `ogPalette`                                                                                           | `lib/og-image.tsx`, `lib/palette.ts`                                                | One image for each docs page                       | Implemented |

Minimal usage:

```mdx
<Callout type="warning" title="Exit code">
  `birdcc lint` exits with 1 only for error-level diagnostics.
</Callout>

<Cards>
  <Card
    icon={<Terminal />}
    title="CLI"
    description="Lint and format from the command line."
    href="./cli.mdx"
  />
</Cards>
```

## 6. Copy and number formats

- [SHOULD] Titles use sentence case in English. Titles and buttons have no final period. Sentences have one.
- [SHOULD] A page description is one sentence that states what the page covers.
- [SHOULD] Defaults are stated with their unit: "16 levels", "2 MiB", "256 files". Sizes use binary units (KiB, MiB) when the tool uses them.
- [SHOULD] Versions are written as the tool prints them (`1.0.0`, BIRD 2.17). Requirements use "or newer".
- [SHOULD] Chinese text uses full-width punctuation and a space between Chinese and Latin text or numbers. Product, command, option and protocol names stay in Latin script.
- [MUST] Text states only what the tools do in the documented version. Planned behavior and comparisons with other projects are not stated as facts.

### Paragraphs and lists

These rules follow the translation and typesetting rules of the BIRD Chinese documentation project (https://bird.xmsl.dev/pages/join-us.md) and apply to both languages.

- [SHOULD] A paragraph covers one point and has at most three sentences: at most 100 characters in Chinese, at most 70 words in English. Split a longer paragraph where the subject changes, and put a blank line between the parts.
- [SHOULD] Three or more parallel items become a list when the items are clauses or when a colon introduces them. A short series of names inside a sentence stays inline.
- [SHOULD] Ordered actions become a numbered list or `Steps`; conditions and their results become a list or a table.
- [SHOULD] Sentences use the active voice and name the actor: the tool, the command, the server or the reader. Chinese sentences avoid 被.

### Chinese typesetting

- [SHOULD] Parentheses around Latin text are half-width, with a space between a parenthesis and adjacent Chinese text and no space before punctuation: `入口文件 (entry file) 由 main 指定`, `内嵌提示 (inlay hint)。` Parentheses around Chinese text are full-width without spaces: `BIRD（默认 BIRD 2）`.
- [SHOULD] The first occurrence of a translated term on a page carries the English term in parentheses: `语言服务器 (language server)`. Interface labels of VS Code and other tools keep their English label in parentheses: `格式化文档 (Format Document)`.
- [SHOULD] Headings below the page title contain Chinese. A heading that names a command, a key or a file gives a Chinese name followed by the name in parentheses: ``检查配置 (`birdcc lint`)``. Product names without a Chinese name, such as Neovim or Helix, stay as they are.
- [SHOULD] Chinese text is formal written language. It does not use 我们 or 你们, and it does not use 显然, 明显 or 不难看出.

## 7. Anti-patterns

- [SHOULD] A centered hero with a card grid as the default page structure.
- [SHOULD] Cards inside cards, or a callout inside a card.
- [SHOULD] Decorative icon tiles or colored icon backgrounds. Flags and the mark are the only round or tiled images.
- [SHOULD] Font sizes, font weights or color literals outside the primitives.
- [SHOULD] Small low-contrast text for primary information.
- [SHOULD] Pill labels for ordinary metadata.
- [SHOULD] Gradients other than the link preview background.
- [SHOULD] The brand teal on links, buttons, headings or text in pages.
- [SHOULD] Text that repeats a heading, or text that says what a page "lets you" do.
- [SHOULD] Screenshots of code or configuration in place of code blocks.
- [SHOULD] One paragraph that strings several points together: a mechanism, its limits, its options and an exception in one block of text.
- [SHOULD] A list of options or conditions written as one sentence with commas and semicolons.

## 8. Implementation and integration

- Style entry: `app/globals.css` imports Tailwind, `brand/theme.css`, `app/tokens.css` and the Fumadocs, fumadocs-extras and page-history presets, then sets the layout width, header height, focus outline and `cc-` classes.
- Fonts: system stacks only. `@fontsource-variable/noto-sans-sc` is read by the link preview renderer and is not loaded by pages.
- Theme: `RootProvider` from `fumadocs-ui/provider/next` with `next-themes` (`defaultTheme: "system"`, transitions disabled); `ThemeMenu` sets the theme. Standalone pages use `StandaloneTheme`.
- Components: Fumadocs components come from `fumadocs-ui` (`@fumadocs/base-ui`) and are not edited; MDX mappings and wrappers live in `components/mdx.tsx`.

## Glossary

| Concept                                 | Name                 |
| --------------------------------------- | -------------------- |
| BIRDCC logo image                       | mark                 |
| Bar with the mark, name and menus       | site header          |
| Bar with "Pages" and search below 768px | docs bar             |
| Teal color of the mark                  | brand (`--cc-brand`) |
| Muted surface of cards and code blocks  | card surface         |
| Image shown when a page link is shared  | link preview image   |
