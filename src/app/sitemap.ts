import type { MetadataRoute } from "next";
import seoPagesData from "@/data/seo-pages.json";
import { business } from "@/data/content";

type SeoPage = { slug: string };
const seoPages = seoPagesData as SeoPage[];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${business.url}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...seoPages.map((p) => ({
      url: `${business.url}/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
