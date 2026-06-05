export const getSiteUrl = (): string => {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return "http://localhost:3000";
};

export const siteConfig = {
  name: "Dmytro Chyzh",
  title: "Dmytro Chyzh — UI/UX Product Designer",
  description:
    "UI/UX designer and AI design engineer working at the intersection of design, product logic, and code. Product design, AI UX, mobile apps, and case studies.",
  locale: "en_US",
  language: "en",
  ogImage: "/assets/photo_2.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 1200,
  email: "dima.chyzuk@gmail.com",
  location: "Lviv, Ukraine",
  linkedIn: "https://www.linkedin.com/in/dima-chyzh-0360aa24a/",
  instagram: "https://www.instagram.com/dmytro.chyzh/",
  jobTitle: "UI/UX Product Designer",
  worksFor: "Cieden",
} as const;
