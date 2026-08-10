import type { ToolInfo } from "@/lib/site";

export const reviewIndexableToolSlugs = [
  "image-resizer",
  "image-compressor",
  "crop-image",
  "jpg-to-png",
  "png-to-jpg",
  "image-to-webp",
  "webp-to-jpg",
  "heic-to-jpg",
  "heic-to-png",
  "avif-to-jpg",
  "avif-to-png",
  "svg-to-png",
  "svg-to-jpg",
  "bmp-to-jpg",
  "bmp-to-png",
  "tiff-to-jpg",
  "tiff-to-png",
  "gif-to-jpg",
  "gif-to-png",
  "png-to-ico",
  "jpg-to-ico",
  "webp-to-png",
  "ico-converter",
  "instagram-resizer",
  "youtube-thumbnail-resizer",
  "pdf-to-images",
  "images-to-pdf",
  "rotate-image",
  "flip-image",
  "mirror-image",
  "resize-canvas",
  "crop-circle-image",
  "add-watermark",
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
