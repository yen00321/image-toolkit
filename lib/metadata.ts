import type { Metadata } from "next";
import type { ToolInfo } from "@/lib/site";
import { siteConfig } from "@/lib/site";

export function toolMetadata(tool: ToolInfo): Metadata {
  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}${tool.href}`,
    },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url: `${siteConfig.url}${tool.href}`,
      type: "website",
    },
  };
}
