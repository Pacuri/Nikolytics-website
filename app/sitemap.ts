import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getArticles } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...getArticles().map((a) => ({
      url: `${site.url}/insights/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
