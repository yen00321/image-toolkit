import type { Metadata } from "next";
import { isToolIndexableForReview } from "@/lib/review-mode";
import type { ToolInfo } from "@/lib/site";
import { siteConfig } from "@/lib/site";

export function toolMetadata(tool: ToolInfo): Metadata {
  const isIndexable = isToolIndexableForReview(tool);

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    keywords: tool.keywords,
    robots: {
      index: isIndexable,
      follow: true,
    },
    alternates: {
      canonical: `${siteConfig.url}${tool.href}`,
    },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url: `${siteConfig.url}${tool.href}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: tool.metaTitle,
      description: tool.metaDescription,
    },
  };
}
