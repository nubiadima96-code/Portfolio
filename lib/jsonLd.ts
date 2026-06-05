import type { CaseStudy } from "@/lib/data";
import { getSiteUrl, siteConfig } from "@/lib/site";

const site = () => getSiteUrl();

export const personJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.jobTitle,
  email: siteConfig.email,
  url: site(),
  image: `${site()}${siteConfig.ogImage}`,
  worksFor: {
    "@type": "Organization",
    name: siteConfig.worksFor,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lviv",
    addressCountry: "UA",
  },
  sameAs: [siteConfig.linkedIn, siteConfig.instagram],
});

export const webSiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: site(),
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  author: { "@type": "Person", name: siteConfig.name },
});

export const caseStudyJsonLd = (study: CaseStudy) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: study.title,
  headline: study.subtitle ? `${study.title} — ${study.subtitle}` : study.title,
  description: study.description,
  url: `${site()}/case-studies/${study.slug}`,
  image: study.coverImage
    ? `${site()}${study.coverImage}`
    : study.heroImage
      ? `${site()}${study.heroImage}`
      : `${site()}${siteConfig.ogImage}`,
  author: { "@type": "Person", name: siteConfig.name, url: siteConfig.linkedIn },
  inLanguage: siteConfig.language,
});
