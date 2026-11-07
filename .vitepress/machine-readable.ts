// Machine-readable copies of the site for AI agents, ATS parsers and crawlers.
// Everything is generated at build time from the same content/*.md files the
// pages use, so it never drifts from what humans see.
//
//   /llms.txt     short Markdown summary for LLMs (https://llmstxt.org)
//   /resume.md    full résumé as plain Markdown
//   /resume.json  résumé in the JSON Resume schema (https://jsonresume.org)
//   /robots.txt   allows all crawlers, including AI ones, and points to the sitemap

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Profile } from "./theme/types.ts";

/** Raw (markdown) résumé entry, as written in content/*.md. */
interface RawEntry {
  title: string;
  organization: string;
  website: string;
  badge?: string;
  dates?: string;
  location?: string;
  /** Graduation year; not shown on the page, only used here. */
  graduated?: string;
  details: string;
}

interface HomeFrontmatter {
  myFocus: string[];
  reachOut: string;
}

export interface SiteContent {
  profile: Profile;
  home: HomeFrontmatter;
  experience: RawEntry[];
  education: RawEntry[];
  volunteering: RawEntry[];
}

export function readContent(contentDir: string, pagesDir: string): SiteContent {
  const read = (file: string) => matter(fs.readFileSync(file, "utf-8")).data;
  const entries = (name: string): RawEntry[] => read(`${contentDir}/${name}.md`).entries ?? [];
  return {
    profile: read(`${contentDir}/profile.md`) as Profile,
    home: read(`${pagesDir}/index.md`) as HomeFrontmatter,
    experience: entries("experience"),
    education: entries("education"),
    volunteering: entries("volunteering"),
  };
}

// ---------- Markdown helpers ----------

/** Markdown → plain text for one line: links, emphasis, code, emoji spacing. */
const plain = (s: string) =>
  s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*|__/g, "")
    .replace(/(^|[\s(])_([^_]+)_(?=[\s).,;:]|$)/g, "$1$2")
    .replace(/`/g, "")
    .replace(/\s+/g, " ")
    .trim();

/** Bullet lists in a details block, grouped by the bold heading above them. */
function bulletGroups(details: string) {
  const groups: { heading: string; items: string[] }[] = [{ heading: "", items: [] }];
  for (const line of details.split("\n")) {
    const heading = line.match(/^\s*\*\*(.+?):?\*\*:?\s*$/);
    if (heading) groups.push({ heading: heading[1], items: [] });
    else if (/^\s*- /.test(line)) groups.at(-1)!.items.push(plain(line.replace(/^\s*- /, "")));
  }
  return groups.filter((g) => g.items.length);
}

/** First italic line of a details block (used as a one-line role summary). */
const summaryLine = (details: string) => details.match(/^\s*_(.+)_\s*$/m)?.[1];

const months = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
/** "Dec 2023" → "2023-12"; "Present" → undefined. */
function isoMonth(s?: string) {
  const m = s?.trim().match(/^([A-Z][a-z]{2})\w*\s+(\d{4})$/);
  if (!m) return undefined;
  return `${m[2]}-${String(months.indexOf(m[1]) + 1).padStart(2, "0")}`;
}
export const splitDates = (dates?: string) => {
  const [start, end] = (dates ?? "").split(/\s+[–-]\s+/);
  return { startDate: isoMonth(start), endDate: isoMonth(end) };
};

// ---------- Generators ----------

function facts(c: SiteContent) {
  const { profile: p } = c;
  return [
    `- Role: ${p.jobTitle} at ${p.worksFor} (full-time)`,
    `- Location: ${p.workingIn}`,
    `- Core stack: ${p.topFour.join(", ")}`,
    `- Focus: ${c.home.myFocus.join(", ")}`,
    `- Languages: ${p.languages.map((l) => `${l.name}: ${l.level}`).join(", ")}`,
    `- Open to: ${p.openToRole} roles`,
    `- Contact: ${p.email} · LinkedIn: ${p.linkedInUrl}`,
  ];
}

function llmsTxt(c: SiteContent) {
  const { profile: p } = c;
  const url = (s: string) => `${p.siteUrl}${s}`;
  const role = (e: RawEntry) =>
    `- ${e.title}${e.badge ? ` (${e.badge})` : ""}, ${e.organization}` +
    `${e.location ? `, ${e.location}` : ""}${e.dates ? ` · ${e.dates}` : ""}`;
  return [
    `# ${p.firstName} ${p.lastName}`,
    "",
    `> ${p.description}`,
    "",
    "Personal portfolio and résumé. The facts below are kept in sync with the website.",
    "",
    ...facts(c),
    "",
    "## Experience",
    "",
    ...c.experience.map(role),
    "",
    "## Education",
    "",
    ...c.education.map(
      (e) => `- ${e.title}, ${e.organization}${e.graduated ? ` (${e.graduated})` : ""}`,
    ),
    "",
    "## Résumé",
    "",
    `- [Résumé (Markdown)](${url("/resume.md")}): full résumé as plain text, best for reading`,
    `- [Résumé (JSON Resume)](${url("/resume.json")}): structured, https://jsonresume.org schema`,
    `- [Résumé (PDF)](${url(p.resumeUrl)}): printable version`,
    `- [Portfolio](${url("/")}): the human-readable website`,
    "",
    "## Optional",
    "",
    `- [Legal notice](${url("/legal-notice")})`,
    `- [Privacy policy](${url("/data-protection")})`,
    "",
  ].join("\n");
}

function resumeMd(c: SiteContent) {
  const { profile: p } = c;
  const entry = (e: RawEntry) => {
    const meta = [e.badge, e.location, e.dates ?? e.graduated].filter(Boolean).join(" · ");
    return [
      `### ${e.title} — ${e.organization}`,
      "",
      ...(meta ? [`${meta} · ${e.website}`, ""] : [e.website, ""]),
      e.details.trim(),
      "",
    ].join("\n");
  };
  return [
    `# ${p.firstName} ${p.lastName} — ${p.jobTitle}`,
    "",
    p.description,
    "",
    ...facts(c),
    "",
    "## Experience",
    "",
    ...c.experience.map(entry),
    "## Education",
    "",
    ...c.education.map(entry),
    "## Volunteering",
    "",
    ...c.volunteering.map(entry),
    "## Skills",
    "",
    p.knowsAbout.join(", "),
    "",
  ].join("\n");
}

function resumeJson(c: SiteContent) {
  const { profile: p } = c;
  const highlights = (e: RawEntry) => bulletGroups(e.details).flatMap((g) => g.items);
  return {
    $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: {
      name: `${p.firstName} ${p.lastName}`,
      label: p.jobTitle,
      email: p.email,
      url: `${p.siteUrl}/`,
      summary: p.description,
      location: { countryCode: p.countryCode },
      profiles: [{ network: "LinkedIn", url: p.linkedInUrl }],
    },
    work: c.experience.map((e) => ({
      name: e.organization,
      position: e.title + (e.badge ? ` (${e.badge})` : ""),
      url: e.website,
      location: e.location,
      ...splitDates(e.dates),
      summary: summaryLine(e.details),
      highlights: highlights(e),
    })),
    volunteer: c.volunteering.map((e) => ({
      organization: e.organization,
      position: e.title,
      url: e.website,
      highlights: highlights(e),
    })),
    education: c.education.map((e) => {
      const groups = bulletGroups(e.details);
      return {
        institution: e.organization,
        url: e.website,
        area: e.title,
        endDate: e.graduated,
        courses: groups.filter((g) => /course/i.test(g.heading)).flatMap((g) => g.items),
        highlights: groups.filter((g) => !/course/i.test(g.heading)).flatMap((g) => g.items),
      };
    }),
    awards: p.awards,
    skills: [
      { name: "Core stack", keywords: p.topFour },
      { name: "Areas", keywords: p.knowsAbout },
    ],
    languages: p.languages.map((l) => ({ language: l.name, fluency: l.level })),
    meta: { canonical: `${p.siteUrl}/resume.json`, lastModified: new Date().toISOString() },
  };
}

function robotsTxt(c: SiteContent) {
  // Everything is public; AI crawlers are named explicitly so it is clear they
  // are welcome (a missing robots.txt allows them too, but reads as unattended).
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
  ];
  return [
    "User-agent: *",
    "Allow: /",
    "",
    "# AI crawlers and assistants are welcome. A summary for LLMs is at /llms.txt",
    ...aiBots.map((bot) => `User-agent: ${bot}`),
    "Allow: /",
    "",
    `Sitemap: ${c.profile.siteUrl}/sitemap.xml`,
    "",
  ].join("\n");
}

/** Write all machine-readable files into the build output directory. */
export function writeMachineReadable(outDir: string, c: SiteContent) {
  const files: Record<string, string> = {
    "llms.txt": llmsTxt(c),
    "resume.md": resumeMd(c),
    "resume.json": JSON.stringify(resumeJson(c), null, 2) + "\n",
    "robots.txt": robotsTxt(c),
  };
  for (const [name, body] of Object.entries(files)) {
    fs.writeFileSync(path.join(outDir, name), body, "utf-8");
  }
}
