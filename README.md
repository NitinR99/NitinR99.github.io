# nitinramesh.dev

Personal portfolio, built with [VitePress](https://vitepress.dev) using a custom Vue theme and Tailwind CSS v4.

## Develop

```sh
npm install
npm start          # dev server
npm run build      # static build → .vitepress/dist
npm run preview    # serve the build on :8080
npm run check      # typecheck + prettier check (also runs in CI)
```

## Where things live

| Path                                                             | What                                                                     |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `content/profile.md`                                             | Name, job title, links, SEO metadata (frontmatter only)                  |
| `content/experience.md`, `education.md`, `volunteering.md`       | Résumé entries as `entries:` frontmatter; `details` is markdown          |
| `content/resume.data.ts`                                         | Build-time loader that reads the three files above and renders `details` |
| `pages/index.md`                                                 | Home page copy (landing text, focus chips, "How I think", reach out)     |
| `pages/legal-notice.md`, `pages/data-protection.md`              | Plain markdown pages                                                     |
| `pages/case-studies/`                                            | Case study articles; `index.md` is the `/case-studies` overview          |
| `content/case-studies.data.ts`                                   | Build-time loader: lists the articles, newest first, with reading time   |
| `pages/public/`                                                  | Static files: favicons, share image (`og-image.png`), logos, images, PDF |
| `.vitepress/config.ts`                                           | Site config, head meta, JSON-LD                                          |
| `.vitepress/theme/`                                              | Layouts, components, `style.css` (design tokens + shared utilities)      |

### Adding a job / degree / volunteering role

Add an item to `entries:` in the matching `content/*.md` file and drop its logo in
`pages/public/logos/`. Fields: `title`, `organization`, `website`, `logo`, and optionally
`badge`, `dates`, `location`, `details` (markdown).

### Adding a case study

Add a markdown file to `pages/case-studies/` with `layout: case-study` and frontmatter
`title`, `description` (summary, also the meta description), `date` (YYYY-MM-DD, never displayed; only sets the order), `tags`,
and optionally `facts` (`label` / `value` pairs shown as "at a glance"), `cover` (banner image
in `pages/public/images/case-studies/`, 16:7 with the subject centred, since the overview crops
it to 16:9 and 4:3) and `coverAlt` (leave empty for decorative images). It appears on `/case-studies`
automatically; the newest one (by `date`) is featured at the top.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which checks, builds and publishes to GitHub Pages.
