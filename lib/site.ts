export const siteConfig = {
  name: "Image Toolkit",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.imagetoolkitapp.com",
  description:
    "Free browser-based image tools for resizing, compressing, cropping, and converting images online.",
};

export type ToolCategory = "resize" | "compress" | "crop" | "convert" | "social";

export type ToolInfo = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  category: ToolCategory;
  href: string;
  faqs: Array<{ question: string; answer: string }>;
};

const commonPrivacy =
  "Images are processed locally in your browser for this MVP. The selected file is not uploaded to our server before processing.";

export const tools: ToolInfo[] = [
  {
    slug: "image-resizer",
    name: "Image Resizer",
    shortName: "Resize Image",
    description: "Resize JPG, PNG, or WebP images by entering custom width and height.",
    metaTitle: "Free Online Image Resizer | Resize Images in Browser",
    metaDescription:
      "Resize images online for free. Upload an image, enter width and height, keep aspect ratio, and download the resized file.",
    category: "resize",
    href: "/image-resizer",
    faqs: [
      {
        question: "Will resizing an image upload it to a server?",
        answer: commonPrivacy,
      },
      {
        question: "Can I keep the original aspect ratio?",
        answer: "Yes. Enable the aspect ratio option and the matching side will be calculated automatically.",
      },
      {
        question: "Which formats are supported?",
        answer: "The MVP supports JPG, PNG, and WebP input in modern browsers.",
      },
    ],
  },
  {
    slug: "image-compressor",
    name: "Image Compressor",
    shortName: "Compress Image",
    description: "Reduce image file size by adjusting output quality before downloading.",
    metaTitle: "Free Online Image Compressor | Compress JPG, PNG, WebP",
    metaDescription:
      "Compress images online in your browser. Adjust quality, compare original and compressed size, and download the optimized image.",
    category: "compress",
    href: "/image-compressor",
    faqs: [
      {
        question: "How does image compression work?",
        answer: "The tool redraws your image and exports it with a lower quality setting to reduce file size.",
      },
      {
        question: "Can I see the compressed file size?",
        answer: "Yes. The page shows the original file size and the estimated compressed size after processing.",
      },
      {
        question: "Are my images private?",
        answer: commonPrivacy,
      },
    ],
  },
  {
    slug: "crop-image",
    name: "Crop Image",
    shortName: "Crop Image",
    description: "Crop an image freely with a draggable crop box and download the result.",
    metaTitle: "Crop Image Online for Free | Browser-Based Image Cropper",
    metaDescription:
      "Crop images online with a simple draggable crop area. Upload, adjust the crop box, and download the cropped image.",
    category: "crop",
    href: "/crop-image",
    faqs: [
      {
        question: "Can I crop freely?",
        answer: "Yes. Drag and resize the crop area, then download the selected part of the image.",
      },
      {
        question: "Does cropping reduce quality?",
        answer: "Cropping keeps the selected pixels and exports a new file. JPG output quality can affect final size.",
      },
      {
        question: "Is the image uploaded?",
        answer: commonPrivacy,
      },
    ],
  },
  {
    slug: "jpg-to-png",
    name: "JPG to PNG Converter",
    shortName: "JPG to PNG",
    description: "Convert JPG images to PNG directly in your browser.",
    metaTitle: "Convert JPG to PNG Online | Free Image Converter",
    metaDescription:
      "Upload a JPG image and convert it to PNG online for free. Browser-based conversion with no server upload in the MVP.",
    category: "convert",
    href: "/jpg-to-png",
    faqs: [
      {
        question: "Can JPG become transparent after converting to PNG?",
        answer: "No. Converting format does not create transparency that was not already in the original image.",
      },
      {
        question: "Is PNG larger than JPG?",
        answer: "Often yes. PNG is lossless and can produce larger files for photos.",
      },
      {
        question: "Where is conversion processed?",
        answer: commonPrivacy,
      },
    ],
  },
  {
    slug: "png-to-jpg",
    name: "PNG to JPG Converter",
    shortName: "PNG to JPG",
    description: "Convert PNG images to JPG with a white background for transparency.",
    metaTitle: "Convert PNG to JPG Online | Free Browser Image Converter",
    metaDescription:
      "Convert PNG images to JPG online. Transparent areas are filled with white for a clean JPG output.",
    category: "convert",
    href: "/png-to-jpg",
    faqs: [
      {
        question: "What happens to transparent PNG areas?",
        answer: "JPG does not support transparency, so transparent areas are filled with white.",
      },
      {
        question: "Can JPG files be smaller?",
        answer: "Yes. JPG is usually smaller for photos and complex images.",
      },
      {
        question: "Is this browser-based?",
        answer: commonPrivacy,
      },
    ],
  },
  {
    slug: "image-to-webp",
    name: "Image to WebP Converter",
    shortName: "Image to WebP",
    description: "Convert JPG or PNG images to modern WebP format.",
    metaTitle: "Convert Image to WebP Online | JPG and PNG to WebP",
    metaDescription:
      "Create WebP images online from JPG or PNG files. Convert in your browser and download the WebP file.",
    category: "convert",
    href: "/image-to-webp",
    faqs: [
      {
        question: "Why use WebP?",
        answer: "WebP often creates smaller files while keeping good image quality, which can help web performance.",
      },
      {
        question: "Can all browsers open WebP?",
        answer: "Modern browsers support WebP. Very old browsers may not.",
      },
      {
        question: "Are images uploaded?",
        answer: commonPrivacy,
      },
    ],
  },
  {
    slug: "webp-to-jpg",
    name: "WebP to JPG Converter",
    shortName: "WebP to JPG",
    description: "Convert WebP images to widely compatible JPG files.",
    metaTitle: "Convert WebP to JPG Online | Free WebP Converter",
    metaDescription:
      "Upload a WebP image and convert it to JPG online for free. Download a compatible JPG file.",
    category: "convert",
    href: "/webp-to-jpg",
    faqs: [
      {
        question: "Why convert WebP to JPG?",
        answer: "JPG can be easier to use in older apps, forms, or services that do not accept WebP.",
      },
      {
        question: "Does JPG support transparency?",
        answer: "No. Transparent areas are filled with white.",
      },
      {
        question: "Is conversion private?",
        answer: commonPrivacy,
      },
    ],
  },
  {
    slug: "instagram-resizer",
    name: "Instagram Image Resizer",
    shortName: "Instagram Resizer",
    description: "Resize images for Instagram post, portrait, and story dimensions.",
    metaTitle: "Instagram Image Resizer | Post, Portrait, Story Sizes",
    metaDescription:
      "Resize images for Instagram online. Use presets for 1080x1080 posts, 1080x1350 portraits, and 1080x1920 stories.",
    category: "social",
    href: "/instagram-resizer",
    faqs: [
      {
        question: "Which Instagram sizes are included?",
        answer: "The page includes square post, portrait post, and story presets.",
      },
      {
        question: "Will my photo be distorted?",
        answer: "Use the fit or cover mode to avoid distortion depending on whether you prefer padding or cropping.",
      },
      {
        question: "Is this tool local?",
        answer: commonPrivacy,
      },
    ],
  },
  {
    slug: "tiktok-resizer",
    name: "TikTok Cover Resizer",
    shortName: "TikTok Resizer",
    description: "Resize images for TikTok video cover dimensions.",
    metaTitle: "TikTok Cover Resizer | Resize Image to 1080x1920",
    metaDescription:
      "Resize images for TikTok covers online. Use the 1080x1920 preset and download the result.",
    category: "social",
    href: "/tiktok-resizer",
    faqs: [
      {
        question: "What size is the TikTok preset?",
        answer: "The MVP includes a TikTok Video Cover preset at 1080x1920.",
      },
      {
        question: "Can I avoid image distortion?",
        answer: "Yes. Fit and cover modes keep the image ratio; stretch mode is available only when you want it.",
      },
      {
        question: "Will my image be uploaded?",
        answer: commonPrivacy,
      },
    ],
  },
  {
    slug: "youtube-thumbnail-resizer",
    name: "YouTube Thumbnail Resizer",
    shortName: "YouTube Thumbnail",
    description: "Resize images to YouTube thumbnail size with one preset.",
    metaTitle: "YouTube Thumbnail Resizer | Resize to 1280x720 Online",
    metaDescription:
      "Resize images to YouTube thumbnail size online. Use the 1280x720 preset and download a ready thumbnail image.",
    category: "social",
    href: "/youtube-thumbnail-resizer",
    faqs: [
      {
        question: "What is the YouTube thumbnail preset?",
        answer: "The preset is 1280x720, a common 16:9 thumbnail size.",
      },
      {
        question: "Can this prevent stretching?",
        answer: "Yes. Use fit or cover mode to keep the original image ratio.",
      },
      {
        question: "Is processing local?",
        answer: commonPrivacy,
      },
    ],
  },
];

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
