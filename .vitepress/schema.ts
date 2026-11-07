// Schema.org JSON-LD for the home page: Person + WebSite + ProfilePage, linked by @id.
// The Person node describes the candidate on their own terms (no JobPosting), so
// search engines, ATS parsers and AI agents can read roles, dates, the degree,
// skills and languages without scraping the page. Built from content/*.md.

import { splitDates, type SiteContent } from "./machine-readable.ts";

export function buildSchema(c: SiteContent) {
  const { profile: p } = c;
  const fullName = `${p.firstName} ${p.lastName}`;
  const homeUrl = `${p.siteUrl}/`;
  const id = (name: string) => `${homeUrl}#${name}`;
  const country = (name?: string) => (name ? { "@type": "Country", name } : undefined);

  const roles = c.experience.map((e) => ({
    roleName: e.title + (e.badge ? ` (${e.badge})` : ""),
    ...splitDates(e.dates),
    organization: {
      "@type": "Organization",
      name: e.organization,
      url: e.website,
      location: country(e.location),
    },
  }));
  // A role with no end date ("Present") is current; the rest are past employers.
  const current = roles.filter((r) => !r.endDate);
  const past = roles.filter((r) => r.endDate);

  const schools = c.education.map((e) => ({
    "@type": "CollegeOrUniversity",
    name: e.organization,
    url: e.website,
    location: country(e.location),
  }));

  const person = {
    "@type": "Person",
    "@id": id("person"),
    name: fullName,
    givenName: p.firstName,
    familyName: p.lastName,
    jobTitle: p.jobTitle,
    description: p.description,
    url: homeUrl,
    mainEntityOfPage: { "@id": id("profilepage") },
    email: `mailto:${p.email}`,
    sameAs: [p.linkedInUrl],
    address: { "@type": "PostalAddress", addressCountry: p.countryCode },
    workLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressCountry: p.countryCode },
    },
    // Schema.org Role pattern: the role wraps the organization under the same
    // property name, so start/end dates and the job title can sit alongside it.
    worksFor: current.map((r) => ({
      "@type": "EmployeeRole",
      roleName: r.roleName,
      startDate: r.startDate,
      worksFor: r.organization,
    })),
    alumniOf: [
      ...schools,
      ...past.map((r) => ({
        "@type": "OrganizationRole",
        roleName: r.roleName,
        startDate: r.startDate,
        endDate: r.endDate,
        alumniOf: r.organization,
      })),
    ],
    hasCredential: c.education.map((e, i) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: e.title,
      recognizedBy: schools[i],
      dateCreated: e.graduated,
    })),
    hasOccupation: {
      "@type": "Occupation",
      name: p.jobTitle,
      // ISCO-08 is the occupation classification used across the EU (and by ESCO).
      occupationalCategory: {
        "@type": "CategoryCode",
        codeValue: "2512",
        name: "Software developers",
        inCodeSet: "ISCO-08",
      },
      occupationLocation: country(p.workingIn),
      skills: p.knowsAbout,
    },
    knowsAbout: p.knowsAbout,
    knowsLanguage: p.languages.map((l) => ({
      "@type": "Language",
      name: l.name,
      alternateName: l.code,
      description: l.level,
    })),
    award: p.awards.map((a) => `${a.title} (${a.awarder})`),
    // Plain-text and structured résumés for agents and ATS parsers.
    subjectOf: [
      ["/resume.md", "text/markdown"],
      ["/resume.json", "application/json"],
      [p.resumeUrl, "application/pdf"],
    ].map(([path, encodingFormat]) => ({
      "@type": "DigitalDocument",
      url: `${p.siteUrl}${path}`,
      encodingFormat,
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": id("website"),
        name: fullName,
        alternateName: new URL(p.siteUrl).hostname,
        url: homeUrl,
        publisher: { "@id": id("person") },
      },
      {
        "@type": "ProfilePage",
        "@id": id("profilepage"),
        url: homeUrl,
        name: `${fullName} – ${p.jobTitle}`,
        isPartOf: { "@id": id("website") },
        mainEntity: { "@id": id("person") },
      },
    ],
  };
}
