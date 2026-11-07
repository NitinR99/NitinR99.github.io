/** Frontmatter of `content/profile.md`. */
export interface Profile {
  firstName: string;
  lastName: string;
  jobTitle: string;
  openToRole: string;
  email: string;
  linkedInUrl: string;
  resumeUrl: string;
  workingIn: string;
  countryCode: string;
  worksFor: string;
  topFour: string[];
  description: string;
  siteUrl: string;
  knowsAbout: string[];
  /** Spoken languages, e.g. { name: "German", code: "de" (BCP 47), level: "Intermediate (B1)" }. */
  languages: { name: string; code: string; level: string }[];
  /** JSON Resume `awards` shape; also used for the JSON-LD `award`. */
  awards: { title: string; awarder: string; summary?: string }[];
}

export interface ThemeConfig {
  profile: Profile;
  /** Build year, so server and client render the same value. */
  year: number;
}

/** Frontmatter of `pages/index.md`. */
export interface HomeFrontmatter {
  subtitle: string;
  whatIDo: { threeThings: string[]; subtitle: string };
  myFocus: string[];
  howIThink: string[];
  reachOut: string;
}
