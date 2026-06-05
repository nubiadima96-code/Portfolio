import fs from "fs";
import path from "path";
import matter from "gray-matter";

const casesDirectory = path.join(process.cwd(), "content/cases");

export interface CaseFrontmatter {
  title: string;
  subtitle?: string;
  badge: string;
  badgeIcon: string;
  description: string;
  tags: { icon: string; label: string }[];
  coverImage?: string;
  coverIcon?: string;
  role?: string;
  product?: string;
}

export const getCaseBySlug = (slug: string) => {
  const filePath = path.join(casesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as CaseFrontmatter,
    content,
    slug,
  };
};

export const getAllCaseSlugs = () => {
  if (!fs.existsSync(casesDirectory)) return [];
  const files = fs.readdirSync(casesDirectory);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
};
