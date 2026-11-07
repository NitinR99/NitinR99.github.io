import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { createMarkdownRenderer, defineLoader, type SiteConfig } from "vitepress";

/** One item under `entries:` in experience.md, education.md or volunteering.md. */
export interface Entry {
  title: string;
  organization: string;
  website: string;
  logo: string;
  badge?: string;
  dates?: string;
  location?: string;
  /** Graduation year (education only); not shown on the page. */
  graduated?: string;
  /** Markdown in the file; HTML once loaded. */
  details: string;
}

export interface Resume {
  experience: Entry[];
  education: Entry[];
  volunteering: Entry[];
}

declare const data: Resume;
export { data };

const sections = ["experience", "education", "volunteering"] as const;

export default defineLoader({
  watch: sections.map((name) => `./${name}.md`),
  async load(files): Promise<Resume> {
    // Documented way for loaders to reach the site config:
    // https://vitepress.dev/guide/data-loading#accessing-configuration-data
    const config: SiteConfig = (globalThis as any).VITEPRESS_CONFIG;
    const md = await createMarkdownRenderer(
      config.srcDir,
      config.markdown,
      config.site.base,
      config.logger,
    );

    const load = async (name: string) => {
      const file = files.find((f) => path.basename(f) === `${name}.md`)!;
      const entries: Entry[] = matter(fs.readFileSync(file, "utf-8")).data.entries ?? [];
      return Promise.all(
        entries.map(async (entry) => ({ ...entry, details: await md.renderAsync(entry.details) })),
      );
    };

    const [experience, education, volunteering] = await Promise.all(sections.map(load));
    return { experience, education, volunteering };
  },
});
