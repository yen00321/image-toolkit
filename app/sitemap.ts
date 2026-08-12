import type { MetadataRoute } from "next";
import { guideArticles } from "@/lib/guide-articles";
import { filterToolsForReview } from "@/lib/review-mode";
import { siteConfig, tools } from "@/lib/site";
import { getCategoryTools, toolCategoryGroups } from "@/lib/tool-categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["/tools", "/sitemap", "/about", "/privacy-policy", "/terms", "/contact", "/faq", "/guides"];
  const sitemapTools = filterToolsForReview(tools);
  const sitemapCategories = toolCategoryGroups.filter((category) => getCategoryTools(category).length > 0);

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
    ...sitemapCategories.map((category) => ({
      url: `${siteConfig.url}${category.href}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...guideArticles.map((article) => ({
      url: `${siteConfig.url}/guides/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...sitemapTools.map((tool) => ({
      url: `${siteConfig.url}${tool.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
