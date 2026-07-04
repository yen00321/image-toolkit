import { tools, type ToolInfo } from "@/lib/site";

export type ToolCategoryGroupId =
  | "convert"
  | "resize"
  | "compress"
  | "edit"
  | "social-media"
  | "pdf"
  | "metadata";

export type ToolCategoryGroup = {
  id: ToolCategoryGroupId;
  name: string;
  href: string;
  description: string;
  keywords: string[];
  toolSlugs: string[];
};

export const toolCategoryGroups: ToolCategoryGroup[] = [
  {
    id: "convert",
    name: "Convert",
    href: "/tools/convert",
    description: "Change image formats such as JPG, PNG, WebP, AVIF, SVG, BMP, GIF, and ICO.",
    keywords: ["convert", "converter", "format", "jpg", "png", "webp", "avif", "svg", "bmp", "gif", "ico"],
    toolSlugs: [
      "jpg-to-png",
      "png-to-jpg",
      "image-to-webp",
      "webp-to-jpg",
      "webp-to-png",
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
      "ico-converter",
    ],
  },
  {
    id: "resize",
    name: "Resize",
    href: "/tools/resize",
    description: "Resize images by custom dimensions, canvas size, or common publishing presets.",
    keywords: ["resize", "resizer", "dimensions", "width", "height", "canvas", "thumbnail"],
    toolSlugs: ["image-resizer", "resize-canvas", "crop-image", "crop-circle-image", "youtube-thumbnail-resizer"],
  },
  {
    id: "compress",
    name: "Compress",
    href: "/tools/compress",
    description: "Reduce image file size with browser-based compression and quality controls.",
    keywords: ["compress", "compression", "optimize", "file size", "quality"],
    toolSlugs: ["image-compressor", "image-to-webp", "png-to-jpg", "jpg-to-png", "webp-to-jpg"],
  },
  {
    id: "edit",
    name: "Edit",
    href: "/tools/edit",
    description: "Crop, rotate, flip, watermark, filter, and adjust photos without installing software.",
    keywords: ["edit", "crop", "rotate", "filter", "watermark", "brightness", "contrast", "blur", "sharpen"],
    toolSlugs: [
      "crop-image",
      "rotate-image",
      "flip-image",
      "mirror-image",
      "crop-circle-image",
      "add-watermark",
      "blur-image",
      "sharpen-image",
      "brightness-adjust",
      "contrast-adjust",
      "saturation-adjust",
      "hue-adjust",
      "grayscale-filter",
      "sepia-filter",
      "invert-colors",
      "pixelate-image",
    ],
  },
  {
    id: "social-media",
    name: "Social Media",
    href: "/tools/social-media",
    description: "Prepare images for Instagram, TikTok, YouTube, Facebook, LinkedIn, X, Pinterest, and Discord.",
    keywords: ["social", "instagram", "tiktok", "youtube", "facebook", "linkedin", "twitter", "x", "pinterest", "discord"],
    toolSlugs: [
      "instagram-resizer",
      "instagram-story-resizer",
      "instagram-reel-cover",
      "instagram-profile-picture",
      "tiktok-resizer",
      "tiktok-profile-picture",
      "youtube-thumbnail-resizer",
      "youtube-banner",
      "youtube-shorts-thumbnail",
      "facebook-cover-photo",
      "facebook-profile-picture",
      "facebook-post-resizer",
      "linkedin-banner",
      "linkedin-profile-picture",
      "x-header",
      "x-profile-picture",
      "pinterest-pin-resizer",
      "discord-avatar-resizer",
    ],
  },
  {
    id: "pdf",
    name: "PDF",
    href: "/tools/pdf",
    description: "Turn PDF pages into images or combine images into a downloadable PDF.",
    keywords: ["pdf", "pdf to image", "images to pdf", "document"],
    toolSlugs: ["pdf-to-images", "images-to-pdf"],
  },
  {
    id: "metadata",
    name: "Metadata",
    href: "/tools/metadata",
    description: "Create cleaner image copies by removing embedded EXIF metadata in the browser.",
    keywords: ["metadata", "exif", "privacy", "remove exif", "strip metadata"],
    toolSlugs: ["remove-exif-metadata"],
  },
];

export const popularToolSlugs = [
  "image-resizer",
  "image-compressor",
  "jpg-to-png",
  "png-to-jpg",
  "webp-to-jpg",
  "image-to-webp",
  "crop-image",
  "youtube-thumbnail-resizer",
];

export function getToolsBySlugs(slugs: string[]) {
  return slugs.map((slug) => tools.find((tool) => tool.slug === slug)).filter(Boolean) as ToolInfo[];
}

export function getRecentlyAddedTools(limit = 8) {
  return tools.slice(-limit).reverse();
}

export function getCategoryTools(category: ToolCategoryGroup) {
  return getToolsBySlugs(category.toolSlugs);
}

export function getToolCategoryGroup(id: string) {
  return toolCategoryGroups.find((category) => category.id === id);
}

export function searchTools(query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return [];
  }

  return tools.filter((tool) => {
    const category = toolCategoryGroups.find((group) => group.toolSlugs.includes(tool.slug));
    const haystack = [
      tool.name,
      tool.shortName,
      tool.slug,
      tool.description,
      tool.category,
      category?.name,
      category?.description,
      ...(tool.keywords || []),
      ...(category?.keywords || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });
}
