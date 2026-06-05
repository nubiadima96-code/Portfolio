import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const robots = (): MetadataRoute.Robots => {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
};

export default robots;
