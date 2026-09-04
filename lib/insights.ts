import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type Article = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  author: string;
  readingTime: string;
  order: number;
  status: string;
  body: string; // markdown
};

const dir = path.join(process.cwd(), "content", "insights");

export function getArticles(): Article[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: f.replace(/\.md$/, ""),
        title: data.title,
        category: data.category,
        description: data.description,
        image: data.image,
        imageAlt: data.imageAlt,
        author: data.author ?? "Nikolytics",
        readingTime: data.readingTime ?? "",
        order: Number(data.order ?? 99),
        status: data.status ?? "published",
        body: content,
      } satisfies Article;
    })
    .sort((a, b) => a.order - b.order);
}

export function getArticle(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}

export async function renderMarkdown(markdown: string): Promise<string> {
  const out = await remark().use(html, { sanitize: false }).process(markdown);
  return String(out);
}
