import type { MetadataRoute } from "next";
import { siteConfig, tools } from "@/lib/site";
import { toolCategoryGroups } from "@/lib/tool-categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["/about", "/privacy-policy", "/terms", "/contact", "/guides"];

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...toolCategoryGroups.map((category) => ({
      url: `${siteConfig.url}${category.href}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...tools.map((tool) => ({
      url: `${siteConfig.url}${tool.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
