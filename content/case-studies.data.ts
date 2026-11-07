import { createContentLoader } from "vitepress";

/** One article in pages/case-studies/, as listed on the overview page. */
export interface CaseStudy {
  url: string;
  title: string;
  /** One- or two-sentence summary; also the page's meta description. */
  description: string;
  tags: string[];
  /** Banner image path, e.g. /images/case-studies/foo.jpg. Use 16:7 with the subject centred: the overview crops it to 16:9 (featured) and 4:3 (grid). */
  cover?: string;
  /** Alt text for the cover; empty when the image is decorative. */
  coverAlt: string;
  /** Estimated minutes to read. */
  readingTime: number;
}

declare const data: CaseStudy[];
export { data };

const WORDS_PER_MINUTE = 220;

const readingTime = (src = "") => {
  const body = src.replace(/^---[\s\S]*?\n---/, "");
  return Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE));
};

// Glob is relative to srcDir (pages/). The overview page itself is skipped.
// Sorted newest first by the frontmatter `date`, which is internal: it decides the order
// (and so which article is featured) at build time and is never shipped to the browser.
export default createContentLoader("case-studies/*.md", {
  includeSrc: true,
  transform: (pages): CaseStudy[] =>
    pages
      .filter((p) => !p.url.endsWith("/case-studies/"))
      .sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date))
      .map(({ url, frontmatter: fm, src }) => ({
        url,
        title: fm.title,
        description: fm.description,
        tags: fm.tags ?? [],
        cover: fm.cover,
        coverAlt: fm.coverAlt ?? "",
        readingTime: readingTime(src),
      })),
});
