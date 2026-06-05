import type { Metadata } from "next";
import type { CaseStudy } from "@/lib/data";
import { getSiteUrl, siteConfig } from "@/lib/site";

const absoluteUrl = (path: string) => {
  const base = getSiteUrl();
  return path.startsWith("http") ? path : `${base}${path.startsWith("/") ? path : `/${path}`}`;
};

const defaultOgImages = () => [
  {
    url: absoluteUrl(siteConfig.ogImage),
    width: siteConfig.ogImageWidth,
    height: siteConfig.ogImageHeight,
    alt: siteConfig.title,
  },
];

export const rootMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.linkedIn }],
  creator: siteConfig.name,
  keywords: [
    "UI/UX designer",
    "product designer",
    "AI UX",
    "mobile app design",
    "portfolio",
    "Dmytro Chyzh",
    "Lviv",
    "Ukraine",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: defaultOgImages(),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
};

export const buildCaseStudyMetadata = (study: CaseStudy): Metadata => {
  const imagePath = study.coverImage ?? study.heroImage ?? siteConfig.ogImage;
  const imageWidth = study.coverImageWidth ?? study.heroImageWidth ?? siteConfig.ogImageWidth;
  const imageHeight = study.coverImageHeight ?? study.heroImageHeight ?? siteConfig.ogImageHeight;
  const pageTitle = study.subtitle ? `${study.title} — ${study.subtitle}` : study.title;
  const canonical = `/case-studies/${study.slug}`;

  return {
    title: pageTitle,
    description: study.description,
    openGraph: {
      type: "article",
      title: pageTitle,
      description: study.description,
      url: canonical,
      images: [
        {
          url: absoluteUrl(imagePath),
          width: imageWidth,
          height: imageHeight,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: study.description,
      images: [absoluteUrl(imagePath)],
    },
    alternates: { canonical },
  };
};
