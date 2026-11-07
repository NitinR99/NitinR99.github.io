import fs from "node:fs";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import matter from "gray-matter";
import { defineConfig, type HeadConfig } from "vitepress";
import type { Profile, ThemeConfig } from "./theme/types.ts";

const contentDir = fileURLToPath(new URL("../content", import.meta.url));
const profile = matter(fs.readFileSync(`${contentDir}/profile.md`, "utf-8")).data as Profile;

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
      sameAs: [profile.linkedInUrl],
      worksFor: { "@type": "Organization", name: profile.worksFor },
      knowsAbout: profile.knowsAbout,
      address: { "@type": "PostalAddress", addressCountry: profile.countryCode },
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

export default defineConfig<ThemeConfig>({
  srcDir: "pages",
  lang: "en",
  title: fullName,
  description: profile.description,
  cleanUrls: true,
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
  themeConfig: { profile, year: new Date().getFullYear() },
  vite: {
    plugins: [tailwindcss()],
    // `@theme` (the theme folder) is built into VitePress; `@content` is ours.
    resolve: { alias: { "@content": contentDir } },
  },
});
