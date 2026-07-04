export type GuideCategory = "Optimization" | "Formats" | "Social Media" | "Web Performance" | "Basics";

export type GuideInfo = {
  slug: string;
  title: string;
  description: string;
  category: GuideCategory;
  readingTime: string;
  relatedToolSlugs: string[];
};

export const guides: GuideInfo[] = [
  {
    slug: "resize-images-without-losing-quality",
    title: "How to Resize Images Without Losing Quality",
    description:
      "Learn how image dimensions, aspect ratio, source resolution, and export format affect quality when resizing images online.",
    category: "Basics",
    readingTime: "8 min read",
    relatedToolSlugs: ["image-resizer", "resize-canvas", "crop-image"],
  },
  {
    slug: "jpg-vs-png",
    title: "JPG vs PNG: Which Image Format Should You Use?",
    description:
      "Compare JPG and PNG for photos, screenshots, transparency, file size, website use, and platform compatibility.",
    category: "Formats",
    readingTime: "7 min read",
    relatedToolSlugs: ["jpg-to-png", "png-to-jpg", "image-compressor"],
  },
  {
    slug: "png-vs-webp",
    title: "PNG vs WebP: Which Is Better for Websites?",
    description:
      "Understand when PNG is still useful and when WebP can reduce file size for faster modern websites.",
    category: "Formats",
    readingTime: "7 min read",
    relatedToolSlugs: ["image-to-webp", "webp-to-png", "png-to-jpg"],
  },
  {
    slug: "compress-images-online",
    title: "How to Compress Images Online",
    description:
      "A practical guide to reducing image file size while keeping photos, screenshots, and graphics clear enough to publish.",
    category: "Optimization",
    readingTime: "8 min read",
    relatedToolSlugs: ["image-compressor", "image-to-webp", "png-to-jpg"],
  },
  {
    slug: "best-image-formats-for-websites",
    title: "Best Image Formats for Websites",
    description:
      "Choose between JPG, PNG, WebP, SVG, AVIF, and GIF for website speed, clarity, transparency, and compatibility.",
    category: "Web Performance",
    readingTime: "9 min read",
    relatedToolSlugs: ["image-to-webp", "svg-to-png", "avif-to-jpg"],
  },
  {
    slug: "best-image-sizes-for-social-media",
    title: "Best Image Sizes for Social Media",
    description:
      "Review practical image sizes for Instagram, TikTok, YouTube, Facebook, LinkedIn, X, Pinterest, and Discord.",
    category: "Social Media",
    readingTime: "9 min read",
    relatedToolSlugs: ["instagram-resizer", "youtube-thumbnail-resizer", "facebook-cover-photo"],
  },
  {
    slug: "convert-heic-to-jpg",
    title: "How to Convert HEIC to JPG",
    description:
      "Learn why HEIC photos may need conversion and what to expect from browser-based HEIC support.",
    category: "Formats",
    readingTime: "6 min read",
    relatedToolSlugs: ["heic-to-jpg", "heic-to-png", "jpg-to-png"],
  },
  {
    slug: "reduce-image-file-size",
    title: "How to Reduce Image File Size",
    description:
      "Use resizing, compression, format conversion, metadata cleanup, and export settings to create smaller image files.",
    category: "Optimization",
    readingTime: "8 min read",
    relatedToolSlugs: ["image-compressor", "image-resizer", "remove-exif-metadata"],
  },
  {
    slug: "image-resolution-guide",
    title: "Image Resolution Guide",
    description:
      "Understand pixels, dimensions, aspect ratio, DPI myths, and how resolution affects digital image quality.",
    category: "Basics",
    readingTime: "10 min read",
    relatedToolSlugs: ["image-resizer", "resize-canvas", "youtube-thumbnail-resizer"],
  },
  {
    slug: "make-images-load-faster-on-websites",
    title: "How to Make Images Load Faster on Websites",
    description:
      "Improve website image performance with better dimensions, compression, modern formats, and practical publishing habits.",
    category: "Web Performance",
    readingTime: "9 min read",
    relatedToolSlugs: ["image-compressor", "image-to-webp", "image-resizer"],
  },
];

export const guideCategories = ["All", "Optimization", "Formats", "Social Media", "Web Performance", "Basics"] as const;
