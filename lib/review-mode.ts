import type { ToolInfo } from "@/lib/site";

export const reviewIndexableToolSlugs = [
  "image-resizer",
  "image-compressor",
  "crop-image",
  "jpg-to-png",
  "png-to-jpg",
  "image-to-webp",
  "webp-to-jpg",
  "instagram-resizer",
  "youtube-thumbnail-resizer",
  "pdf-to-images",
  "images-to-pdf",
] as const;

const reviewIndexableSet = new Set<string>(reviewIndexableToolSlugs);

export function isAdSenseReviewMode() {
  return process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE !== "false";
}

export function isToolIndexableForReview(tool: ToolInfo) {
  return !isAdSenseReviewMode() || reviewIndexableSet.has(tool.slug);
}

export function filterToolsForReview<T extends ToolInfo>(tools: T[]) {
  return tools.filter((tool) => isToolIndexableForReview(tool));
}
