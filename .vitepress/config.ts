import fs from "node:fs";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import matter from "gray-matter";
import { defineConfig, type HeadConfig } from "vitepress";
import type { Profile, ThemeConfig } from "./theme/types.ts";

const contentDir = fileURLToPath(new URL("../content", import.meta.url));
const profile = matter(fs.readFileSync(`${contentDir}/profile.md`, "utf-8")).data as Profile;

const fullName = `${profile.firstName} ${profile.lastName}`;
const ogTitle = `${fullName} | ${profile.jobTitle}`;
const ogImage = `${profile.siteUrl}/favicon-default.png`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${profile.siteUrl}/#person`,
  name: fullName,
  jobTitle: profile.jobTitle,
  url: `${profile.siteUrl}/`,
  sameAs: [profile.linkedInUrl],
  worksFor: { "@type": "Organization", name: profile.worksFor },
  knowsAbout: profile.knowsAbout,
  address: { "@type": "PostalAddress", addressCountry: profile.countryCode },
};

const head: HeadConfig[] = [
  ["link", { rel: "icon", href: "/favicon-light.png", media: "(prefers-color-scheme: light)" }],
  ["link", { rel: "icon", href: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" }],
  ["meta", { property: "og:title", content: ogTitle }],
  ["meta", { property: "og:description", content: profile.description }],
  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:url", content: `${profile.siteUrl}/` }],
  ["meta", { property: "og:image", content: ogImage }],
  ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ["meta", { name: "twitter:title", content: ogTitle }],
  ["meta", { name: "twitter:description", content: profile.description }],
  ["meta", { name: "twitter:image", content: ogImage }],
  ["script", { type: "application/ld+json" }, JSON.stringify(personSchema)],
];

export default defineConfig<ThemeConfig>({
  srcDir: "pages",
  lang: "en",
  title: fullName,
  description: profile.description,
  cleanUrls: true,
  head,
  sitemap: { hostname: profile.siteUrl },
  themeConfig: { profile, year: new Date().getFullYear() },
  vite: {
    plugins: [tailwindcss()],
    // `@theme` (the theme folder) is built into VitePress; `@content` is ours.
    resolve: { alias: { "@content": contentDir } },
  },
});
