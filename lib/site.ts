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
  keywords?: string[];
  category: ToolCategory;
  href: string;
  howTo?: string[];
  relatedSlugs?: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const commonPrivacy =
  "Images are processed locally in your browser for this MVP. The selected file is not uploaded to our server before processing.";

const formatPrivacy =
  "The conversion runs in your browser with Canvas when your browser can decode the selected format. The image is not uploaded to our server.";

const commonConvertSteps = (input: string, output: string) => [
  `Upload your ${input} image from your device.`,
  "Preview the image in the browser before exporting.",
  output === "PNG" ? "Keep transparency when the browser supports it." : "Adjust quality if the output format supports compression.",
  `Download the converted ${output} file.`,
];

function conversionFaqs(input: string, output: string) {
  return [
    {
      question: `How do I convert ${input} to ${output}?`,
      answer: `Upload a ${input} image, let the browser render it, then download the exported ${output} file.`,
    },
    {
      question: `Are ${input} files uploaded to a server?`,
      answer: formatPrivacy,
    },
    {
      question: `Why does my ${input} file not open?`,
      answer:
        "Some formats depend on browser decoding support. If your browser cannot read the file, try an updated version of Chrome, Edge, Safari, or another modern browser.",
    },
    {
      question: `Will converting to ${output} reduce quality?`,
      answer:
        output === "JPG"
          ? "JPG uses lossy compression, so very low quality settings can reduce detail. Use a higher quality value for better results."
          : "PNG is lossless for the exported pixels, though the result depends on how the browser decodes the original image.",
    },
    {
      question: "Can I use this tool on mobile?",
      answer: "Yes. The tool is responsive and works on mobile browsers that support the selected input format.",
    },
  ];
}

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
    slug: "heic-to-jpg",
    name: "HEIC to JPG Converter",
    shortName: "HEIC to JPG",
    description: "Convert HEIC photos to compatible JPG images directly in your browser when supported.",
    metaTitle: "HEIC to JPG Converter Online | Free Browser Image Tool",
    metaDescription:
      "Convert HEIC images to JPG online. Upload a HEIC photo, preview it in your browser, adjust quality, and download a JPG file.",
    keywords: ["HEIC to JPG", "convert HEIC to JPG", "HEIC converter", "online image converter"],
    category: "convert",
    href: "/heic-to-jpg",
    howTo: commonConvertSteps("HEIC", "JPG"),
    relatedSlugs: ["heic-to-png", "avif-to-jpg", "webp-to-jpg"],
    faqs: conversionFaqs("HEIC", "JPG"),
  },
  {
    slug: "heic-to-png",
    name: "HEIC to PNG Converter",
    shortName: "HEIC to PNG",
    description: "Convert HEIC photos to PNG images in the browser when your browser supports HEIC decoding.",
    metaTitle: "HEIC to PNG Converter Online | Free Image Conversion",
    metaDescription:
      "Convert HEIC images to PNG online. Browser-based HEIC to PNG conversion with no server upload in the MVP.",
    keywords: ["HEIC to PNG", "convert HEIC to PNG", "HEIC image converter", "browser image tool"],
    category: "convert",
    href: "/heic-to-png",
    howTo: commonConvertSteps("HEIC", "PNG"),
    relatedSlugs: ["heic-to-jpg", "avif-to-png", "png-to-jpg"],
    faqs: conversionFaqs("HEIC", "PNG"),
  },
  {
    slug: "avif-to-jpg",
    name: "AVIF to JPG Converter",
    shortName: "AVIF to JPG",
    description: "Convert AVIF images to widely compatible JPG files with browser-based processing.",
    metaTitle: "AVIF to JPG Converter Online | Free AVIF Image Tool",
    metaDescription:
      "Upload an AVIF image and convert it to JPG online. Preview the result, adjust quality, and download the JPG file.",
    keywords: ["AVIF to JPG", "convert AVIF to JPG", "AVIF converter", "image converter"],
    category: "convert",
    href: "/avif-to-jpg",
    howTo: commonConvertSteps("AVIF", "JPG"),
    relatedSlugs: ["avif-to-png", "heic-to-jpg", "webp-to-jpg"],
    faqs: conversionFaqs("AVIF", "JPG"),
  },
  {
    slug: "avif-to-png",
    name: "AVIF to PNG Converter",
    shortName: "AVIF to PNG",
    description: "Convert AVIF images to PNG files online while keeping browser-first image processing.",
    metaTitle: "AVIF to PNG Converter Online | Free Browser Tool",
    metaDescription:
      "Convert AVIF to PNG online for free. Upload an AVIF image, process it locally in your browser, and download PNG output.",
    keywords: ["AVIF to PNG", "convert AVIF to PNG", "AVIF image converter", "PNG converter"],
    category: "convert",
    href: "/avif-to-png",
    howTo: commonConvertSteps("AVIF", "PNG"),
    relatedSlugs: ["avif-to-jpg", "heic-to-png", "image-to-webp"],
    faqs: conversionFaqs("AVIF", "PNG"),
  },
  {
    slug: "svg-to-png",
    name: "SVG to PNG Converter",
    shortName: "SVG to PNG",
    description: "Convert SVG files to PNG images in your browser and download a raster version.",
    metaTitle: "SVG to PNG Converter Online | Free Browser SVG Tool",
    metaDescription:
      "Convert SVG to PNG online. Upload an SVG file, render it in the browser, and download a PNG image.",
    keywords: ["SVG to PNG", "convert SVG to PNG", "SVG converter", "rasterize SVG"],
    category: "convert",
    href: "/svg-to-png",
    howTo: commonConvertSteps("SVG", "PNG"),
    relatedSlugs: ["jpg-to-png", "png-to-jpg", "image-to-webp"],
    faqs: conversionFaqs("SVG", "PNG"),
  },
  {
    slug: "svg-to-jpg",
    name: "SVG to JPG Converter",
    shortName: "SVG to JPG",
    description: "Convert SVG files to JPG images online with a clean white background.",
    metaTitle: "SVG to JPG Converter Online | Free Browser SVG Tool",
    metaDescription:
      "Convert SVG to JPG online. Upload an SVG file, render it in your browser, adjust quality, and download a JPG image.",
    keywords: ["SVG to JPG", "convert SVG to JPG", "SVG converter", "rasterize SVG to JPG"],
    category: "convert",
    href: "/svg-to-jpg",
    howTo: commonConvertSteps("SVG", "JPG"),
    relatedSlugs: ["svg-to-png", "png-to-jpg", "jpg-to-png"],
    faqs: conversionFaqs("SVG", "JPG"),
  },
  {
    slug: "bmp-to-jpg",
    name: "BMP to JPG Converter",
    shortName: "BMP to JPG",
    description: "Convert BMP images to smaller JPG files directly in your browser.",
    metaTitle: "BMP to JPG Converter Online | Free Browser Image Tool",
    metaDescription:
      "Convert BMP to JPG online. Upload a BMP image, preview it locally, adjust quality, and download a JPG file.",
    keywords: ["BMP to JPG", "convert BMP to JPG", "BMP converter", "bitmap to JPG"],
    category: "convert",
    href: "/bmp-to-jpg",
    howTo: commonConvertSteps("BMP", "JPG"),
    relatedSlugs: ["bmp-to-png", "png-to-jpg", "image-compressor"],
    faqs: conversionFaqs("BMP", "JPG"),
  },
  {
    slug: "bmp-to-png",
    name: "BMP to PNG Converter",
    shortName: "BMP to PNG",
    description: "Convert BMP bitmap images to PNG files with browser-based processing.",
    metaTitle: "BMP to PNG Converter Online | Free Bitmap Image Tool",
    metaDescription:
      "Convert BMP to PNG online for free. Upload a BMP image, process it locally in the browser, and download PNG output.",
    keywords: ["BMP to PNG", "convert BMP to PNG", "BMP image converter", "bitmap to PNG"],
    category: "convert",
    href: "/bmp-to-png",
    howTo: commonConvertSteps("BMP", "PNG"),
    relatedSlugs: ["bmp-to-jpg", "jpg-to-png", "image-to-webp"],
    faqs: conversionFaqs("BMP", "PNG"),
  },
  {
    slug: "tiff-to-jpg",
    name: "TIFF to JPG Converter",
    shortName: "TIFF to JPG",
    description: "Convert TIFF images to compatible JPG files when your browser can decode the TIFF file.",
    metaTitle: "TIFF to JPG Converter Online | Free Browser Image Tool",
    metaDescription:
      "Convert TIFF to JPG online. Upload a TIFF image, preview it in your browser, adjust quality, and download JPG output.",
    keywords: ["TIFF to JPG", "convert TIFF to JPG", "TIFF converter", "TIF to JPG"],
    category: "convert",
    href: "/tiff-to-jpg",
    howTo: commonConvertSteps("TIFF", "JPG"),
    relatedSlugs: ["tiff-to-png", "bmp-to-jpg", "webp-to-jpg"],
    faqs: conversionFaqs("TIFF", "JPG"),
  },
  {
    slug: "tiff-to-png",
    name: "TIFF to PNG Converter",
    shortName: "TIFF to PNG",
    description: "Convert TIFF images to PNG files online with browser-first processing when supported.",
    metaTitle: "TIFF to PNG Converter Online | Free TIF Image Tool",
    metaDescription:
      "Convert TIFF to PNG online. Upload a TIF or TIFF image, process it locally in your browser, and download PNG output.",
    keywords: ["TIFF to PNG", "convert TIFF to PNG", "TIF to PNG", "TIFF image converter"],
    category: "convert",
    href: "/tiff-to-png",
    howTo: commonConvertSteps("TIFF", "PNG"),
    relatedSlugs: ["tiff-to-jpg", "bmp-to-png", "jpg-to-png"],
    faqs: conversionFaqs("TIFF", "PNG"),
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
