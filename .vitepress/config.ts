import { fileURLToPath } from "node:url";
import { ExternalLink, FileText } from "@lucide/vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type HeadConfig } from "vitepress";
import { h } from "vue";
import { renderToString } from "vue/server-renderer";
import { readContent, writeMachineReadable } from "./machine-readable.ts";
import type { ThemeConfig } from "./theme/types.ts";

const contentDir = fileURLToPath(new URL("../content", import.meta.url));
const pagesDir = fileURLToPath(new URL("../pages", import.meta.url));
const content = readContent(contentDir, pagesDir);
const { profile } = content;

const fullName = `${profile.firstName} ${profile.lastName}`;
const homeUrl = `${profile.siteUrl}/`;
const ogTitle = `${fullName} – ${profile.jobTitle}`;
// 1200×630 share card, generated from the site's fonts and colours.
const ogImage = `${profile.siteUrl}/og-image.png`;
const ogImageAlt = `${fullName}, ${profile.jobTitle} in ${profile.workingIn}`;

// Person + WebSite (gives Google a site name) + ProfilePage, linked by @id.
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${homeUrl}#person`,
      name: fullName,
      jobTitle: profile.jobTitle,
      description: profile.description,
      url: homeUrl,
      email: `mailto:${profile.email}`,
      sameAs: [profile.linkedInUrl],
      worksFor: {
        "@type": "Organization",
        name: profile.worksFor,
        url: content.experience.find((e) => e.organization === profile.worksFor)?.website,
      },
      hasOccupation: {
        "@type": "Occupation",
        name: profile.jobTitle,
        occupationLocation: { "@type": "Country", name: profile.workingIn },
        skills: profile.knowsAbout.join(", "),
      },
      alumniOf: content.education.map((e) => ({
        "@type": "CollegeOrUniversity",
        name: e.organization,
        url: e.website,
      })),
      award: profile.awards.map((a) => `${a.title} (${a.awarder})`),
      knowsAbout: profile.knowsAbout,
      knowsLanguage: profile.languages.map((l) => l.name),
      address: { "@type": "PostalAddress", addressCountry: profile.countryCode },
      // Plain-text and structured résumés for agents and ATS parsers.
      subjectOf: [
        {
          "@type": "DigitalDocument",
          url: `${profile.siteUrl}/resume.md`,
          encodingFormat: "text/markdown",
        },
        {
          "@type": "DigitalDocument",
          url: `${profile.siteUrl}/resume.json`,
          encodingFormat: "application/json",
        },
        {
          "@type": "DigitalDocument",
          url: `${profile.siteUrl}${profile.resumeUrl}`,
          encodingFormat: "application/pdf",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${homeUrl}#website`,
      name: fullName,
      alternateName: new URL(profile.siteUrl).hostname,
      url: homeUrl,
      publisher: { "@id": `${homeUrl}#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${homeUrl}#profilepage`,
      url: homeUrl,
      name: ogTitle,
      isPartOf: { "@id": `${homeUrl}#website` },
      mainEntity: { "@id": `${homeUrl}#person` },
    },
  ],
};

const head: HeadConfig[] = [
  ["link", { rel: "icon", href: "/favicon.ico", sizes: "16x16 32x32 48x48" }],
  ["link", { rel: "icon", href: "/icon-192.png", type: "image/png", sizes: "192x192" }],
  // Browser tabs: the original ring, black on light and white on dark. The square
  // icons above are the fallback for Google, Slack, etc. that ignore `media`.
  ["link", { rel: "icon", href: "/favicon-light.png", media: "(prefers-color-scheme: light)" }],
  ["link", { rel: "icon", href: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" }],
  ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
  ["link", { rel: "manifest", href: "/site.webmanifest" }],
  // Pointers for AI agents: LLM summary and plain-text / structured résumés.
  [
    "link",
    { rel: "alternate", type: "text/markdown", href: "/llms.txt", title: "Summary for LLMs" },
  ],
  [
    "link",
    { rel: "alternate", type: "text/markdown", href: "/resume.md", title: "Résumé (Markdown)" },
  ],
  [
    "link",
    {
      rel: "alternate",
      type: "application/json",
      href: "/resume.json",
      title: "Résumé (JSON Resume)",
    },
  ],
  ["meta", { name: "theme-color", content: "#faf9f5" }],
  ["meta", { name: "author", content: fullName }],
  ["meta", { property: "og:site_name", content: fullName }],
  ["meta", { property: "og:type", content: "profile" }],
  ["meta", { property: "profile:first_name", content: profile.firstName }],
  ["meta", { property: "profile:last_name", content: profile.lastName }],
  ["meta", { property: "og:locale", content: "en_US" }],
  ["meta", { property: "og:image", content: ogImage }],
  ["meta", { property: "og:image:type", content: "image/png" }],
  ["meta", { property: "og:image:width", content: "1200" }],
  ["meta", { property: "og:image:height", content: "630" }],
  ["meta", { property: "og:image:alt", content: ogImageAlt }],
  ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ["meta", { name: "twitter:image", content: ogImage }],
  ["meta", { name: "twitter:image:alt", content: ogImageAlt }],
  ["script", { type: "application/ld+json" }, JSON.stringify(schema)],
];

/** Canonical URL for a page, matching `cleanUrls` (index.md → "/", foo.md → "/foo"). */
const pageUrl = (relativePath: string) =>
  `${profile.siteUrl}/${relativePath.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, "")}`;

// Markdown links that open a new tab (résumé details, legal pages) get the same
// Lucide icon + screen-reader text as NewTabIcon.vue, rendered once at build time.
const iconHtml = async (icon: typeof ExternalLink, label: string) =>
  `<span class="new-tab-icon">${await renderToString(h(icon, { "aria-hidden": "true" }))}` +
  `<span class="sr-only"> ${label}</span></span>`;
const newTabIcons = {
  link: await iconHtml(ExternalLink, "(opens in a new tab)"),
  pdf: await iconHtml(FileText, "(PDF, opens in a new tab)"),
};

export default defineConfig<ThemeConfig>({
  srcDir: "pages",
  lang: "en",
  title: fullName,
  description: profile.description,
  cleanUrls: true,
  markdown: {
    config(md) {
      const renderClose =
        md.renderer.rules.link_close ??
        ((tokens, i, opts, _env, self) => self.renderToken(tokens, i, opts));
      md.renderer.rules.link_close = (tokens, i, opts, env, self) => {
        // VitePress has already set target="_blank" on external links' link_open.
        let j = i - 1;
        while (j >= 0 && !(tokens[j].type === "link_open" && tokens[j].level === tokens[i].level))
          j--;
        const open = tokens[j];
        const icon =
          open?.attrGet("target") === "_blank"
            ? open.attrGet("href")?.endsWith(".pdf")
              ? newTabIcons.pdf
              : newTabIcons.link
            : "";
        return icon + renderClose(tokens, i, opts, env, self);
      };
    },
  },
  head,
  // Per-page tags: canonical URL plus share title/description that match <title>.
  transformHead({ pageData, title, description }) {
    if (pageData.isNotFound || pageData.relativePath === "404.md") {
      return [["meta", { name: "robots", content: "noindex" }]];
    }
    const url = pageUrl(pageData.relativePath);
    return [
      ["link", { rel: "canonical", href: url }],
      ["meta", { property: "og:url", content: url }],
      ["meta", { property: "og:title", content: title }],
      ["meta", { property: "og:description", content: description }],
      ["meta", { name: "twitter:title", content: title }],
      ["meta", { name: "twitter:description", content: description }],
    ];
  },
  sitemap: { hostname: profile.siteUrl },
  // llms.txt, resume.md, resume.json, robots.txt (see machine-readable.ts).
  buildEnd({ outDir }) {
    writeMachineReadable(outDir, content);
  },
  themeConfig: { profile, year: new Date().getFullYear() },
  vite: {
    plugins: [tailwindcss()],
    // `@theme` (the theme folder) is built into VitePress; `@content` is ours.
    resolve: { alias: { "@content": contentDir } },
  },
});
