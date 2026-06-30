export const siteConfig = {
  name: "Image Toolkit",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.imagetoolkitapp.com",
  description:
    "Free browser-based image tools for resizing, compressing, cropping, and converting images online.",
};

export type ToolCategory = "resize" | "compress" | "crop" | "convert" | "edit" | "social";

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

const commonEditSteps = (action: string) => [
  "Upload an image from your device.",
  `Apply the ${action} setting in the browser.`,
  "Preview the edited image before exporting.",
  "Download the finished image file.",
];

function editingFaqs(action: string) {
  return [
    {
      question: `How do I ${action.toLowerCase()} an image?`,
      answer: `Upload an image, adjust the ${action.toLowerCase()} settings, preview the result, and download the edited file.`,
    },
    {
      question: "Is my image uploaded to a server?",
      answer: commonPrivacy,
    },
    {
      question: "Can I use this tool on mobile?",
      answer: "Yes. The editor is responsive and works in modern mobile browsers.",
    },
    {
      question: "Which image formats are supported?",
      answer: "Most modern browsers support JPG, PNG, WebP, GIF still frames, and other formats they can decode.",
    },
    {
      question: "Will editing reduce image quality?",
      answer: "The tool exports a new image from Canvas. JPG output uses compression, while PNG keeps the exported pixels lossless.",
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
    slug: "gif-to-jpg",
    name: "GIF to JPG Converter",
    shortName: "GIF to JPG",
    description: "Convert GIF images to JPG files in your browser. Animated GIFs export as a still frame.",
    metaTitle: "GIF to JPG Converter Online | Free Browser Image Tool",
    metaDescription:
      "Convert GIF to JPG online. Upload a GIF image, preview it in your browser, adjust quality, and download a JPG file.",
    keywords: ["GIF to JPG", "convert GIF to JPG", "GIF converter", "animated GIF to JPG"],
    category: "convert",
    href: "/gif-to-jpg",
    howTo: commonConvertSteps("GIF", "JPG"),
    relatedSlugs: ["gif-to-png", "jpg-to-png", "image-compressor"],
    faqs: conversionFaqs("GIF", "JPG"),
  },
  {
    slug: "gif-to-png",
    name: "GIF to PNG Converter",
    shortName: "GIF to PNG",
    description: "Convert GIF images to PNG files locally in your browser. Animated GIFs export as a still frame.",
    metaTitle: "GIF to PNG Converter Online | Free Browser Tool",
    metaDescription:
      "Convert GIF to PNG online. Upload a GIF image, process it locally in your browser, and download PNG output.",
    keywords: ["GIF to PNG", "convert GIF to PNG", "GIF image converter", "animated GIF to PNG"],
    category: "convert",
    href: "/gif-to-png",
    howTo: commonConvertSteps("GIF", "PNG"),
    relatedSlugs: ["gif-to-jpg", "png-to-jpg", "image-to-webp"],
    faqs: conversionFaqs("GIF", "PNG"),
  },
  {
    slug: "png-to-ico",
    name: "PNG to ICO Converter",
    shortName: "PNG to ICO",
    description: "Convert PNG images to ICO files for favicons, app icons, and desktop shortcuts.",
    metaTitle: "PNG to ICO Converter Online | Free Favicon Tool",
    metaDescription:
      "Convert PNG to ICO online. Upload a PNG image, choose an icon size, and download a browser-generated ICO file.",
    keywords: ["PNG to ICO", "convert PNG to ICO", "favicon converter", "ICO generator"],
    category: "convert",
    href: "/png-to-ico",
    howTo: commonConvertSteps("PNG", "ICO"),
    relatedSlugs: ["jpg-to-ico", "webp-to-png", "png-to-jpg"],
    faqs: conversionFaqs("PNG", "ICO"),
  },
  {
    slug: "jpg-to-ico",
    name: "JPG to ICO Converter",
    shortName: "JPG to ICO",
    description: "Convert JPG images to ICO files with browser-based icon generation.",
    metaTitle: "JPG to ICO Converter Online | Free Icon File Tool",
    metaDescription:
      "Convert JPG to ICO online. Upload a JPG image, choose an icon size, and download a generated ICO file.",
    keywords: ["JPG to ICO", "convert JPG to ICO", "favicon maker", "ICO converter"],
    category: "convert",
    href: "/jpg-to-ico",
    howTo: commonConvertSteps("JPG", "ICO"),
    relatedSlugs: ["png-to-ico", "jpg-to-png", "image-resizer"],
    faqs: conversionFaqs("JPG", "ICO"),
  },
  {
    slug: "webp-to-png",
    name: "WebP to PNG Converter",
    shortName: "WebP to PNG",
    description: "Convert WebP images to PNG files online while keeping processing inside your browser.",
    metaTitle: "WebP to PNG Converter Online | Free Browser Image Tool",
    metaDescription:
      "Convert WebP to PNG online. Upload a WebP image, preview it locally, and download a PNG file.",
    keywords: ["WebP to PNG", "convert WebP to PNG", "WebP converter", "PNG converter"],
    category: "convert",
    href: "/webp-to-png",
    howTo: commonConvertSteps("WebP", "PNG"),
    relatedSlugs: ["webp-to-jpg", "image-to-webp", "png-to-jpg"],
    faqs: conversionFaqs("WebP", "PNG"),
  },
  {
    slug: "ico-converter",
    name: "ICO Converter",
    shortName: "ICO Converter",
    description: "Create ICO files from common image formats for favicons, desktop icons, and app assets.",
    metaTitle: "ICO Converter Online | Free Favicon and Icon Tool",
    metaDescription:
      "Create ICO files online from JPG, PNG, or WebP images. Choose an icon size and download an ICO file generated in your browser.",
    keywords: ["ICO converter", "favicon converter", "image to ICO", "icon generator"],
    category: "convert",
    href: "/ico-converter",
    howTo: commonConvertSteps("image", "ICO"),
    relatedSlugs: ["png-to-ico", "jpg-to-ico", "image-resizer"],
    faqs: conversionFaqs("image", "ICO"),
  },
  {
    slug: "pdf-to-images",
    name: "PDF to Images Converter",
    shortName: "PDF to Images",
    description: "Convert PDF pages to PNG images in your browser using local rendering.",
    metaTitle: "PDF to Images Converter Online | Free PDF to PNG Tool",
    metaDescription:
      "Convert PDF pages to PNG images online. Upload a PDF, render pages in your browser, and download each page as an image.",
    keywords: ["PDF to images", "PDF to PNG", "convert PDF pages", "PDF image converter"],
    category: "convert",
    href: "/pdf-to-images",
    howTo: [
      "Upload a PDF file from your device.",
      "Wait for the browser to render each PDF page.",
      "Preview the generated page images.",
      "Download each page as a PNG image.",
    ],
    relatedSlugs: ["images-to-pdf", "png-to-jpg", "image-compressor"],
    faqs: conversionFaqs("PDF", "PNG"),
  },
  {
    slug: "images-to-pdf",
    name: "Images to PDF Converter",
    shortName: "Images to PDF",
    description: "Combine JPG, PNG, or WebP images into a PDF file directly in your browser.",
    metaTitle: "Images to PDF Converter Online | Free Browser PDF Tool",
    metaDescription:
      "Convert images to PDF online. Upload multiple images, preview the page order, and download a generated PDF file.",
    keywords: ["images to PDF", "JPG to PDF", "PNG to PDF", "image PDF converter"],
    category: "convert",
    href: "/images-to-pdf",
    howTo: [
      "Upload one or more images from your device.",
      "Preview the image order for the PDF pages.",
      "Create the PDF locally in your browser.",
      "Download the finished PDF file.",
    ],
    relatedSlugs: ["pdf-to-images", "jpg-to-png", "image-compressor"],
    faqs: conversionFaqs("images", "PDF"),
  },
  {
    slug: "rotate-image",
    name: "Rotate Image",
    shortName: "Rotate Image",
    description: "Rotate images left, right, or 180 degrees directly in your browser.",
    metaTitle: "Rotate Image Online | Free Browser Photo Rotation Tool",
    metaDescription:
      "Rotate images online for free. Upload a photo, rotate it left, right, or 180 degrees, preview the result, and download.",
    keywords: ["rotate image", "rotate photo online", "image rotation tool", "turn image"],
    category: "edit",
    href: "/rotate-image",
    howTo: commonEditSteps("rotation"),
    relatedSlugs: ["flip-image", "mirror-image", "crop-image"],
    faqs: editingFaqs("Rotate"),
  },
  {
    slug: "flip-image",
    name: "Flip Image",
    shortName: "Flip Image",
    description: "Flip an image horizontally or vertically with browser-based editing.",
    metaTitle: "Flip Image Online | Free Horizontal and Vertical Flip Tool",
    metaDescription:
      "Flip images online in your browser. Upload an image, flip horizontally or vertically, preview, and download the result.",
    keywords: ["flip image", "flip photo", "horizontal flip", "vertical flip"],
    category: "edit",
    href: "/flip-image",
    howTo: commonEditSteps("flip"),
    relatedSlugs: ["mirror-image", "rotate-image", "crop-image"],
    faqs: editingFaqs("Flip"),
  },
  {
    slug: "mirror-image",
    name: "Mirror Image",
    shortName: "Mirror Image",
    description: "Create a mirrored version of an image by flipping it horizontally.",
    metaTitle: "Mirror Image Online | Free Browser Mirror Photo Tool",
    metaDescription:
      "Mirror an image online for free. Upload a photo, create a horizontal mirror effect, preview, and download.",
    keywords: ["mirror image", "mirror photo", "image mirror tool", "horizontal mirror"],
    category: "edit",
    href: "/mirror-image",
    howTo: commonEditSteps("mirror"),
    relatedSlugs: ["flip-image", "rotate-image", "crop-circle-image"],
    faqs: editingFaqs("Mirror"),
  },
  {
    slug: "resize-canvas",
    name: "Resize Canvas",
    shortName: "Resize Canvas",
    description: "Change the canvas size around an image without stretching the original photo.",
    metaTitle: "Resize Canvas Online | Free Image Canvas Size Tool",
    metaDescription:
      "Resize an image canvas online. Add space around a photo, set custom canvas width and height, and download the result.",
    keywords: ["resize canvas", "change canvas size", "image canvas tool", "add image padding"],
    category: "edit",
    href: "/resize-canvas",
    howTo: commonEditSteps("canvas resize"),
    relatedSlugs: ["image-resizer", "crop-image", "instagram-resizer"],
    faqs: editingFaqs("Resize canvas"),
  },
  {
    slug: "crop-circle-image",
    name: "Crop Circle Image",
    shortName: "Circle Crop",
    description: "Crop an image into a circle and download a transparent PNG result.",
    metaTitle: "Crop Circle Image Online | Free Round Photo Crop Tool",
    metaDescription:
      "Crop images into circles online. Upload a photo, preview the round crop, and download a transparent PNG.",
    keywords: ["crop circle image", "circle crop", "round image crop", "profile picture crop"],
    category: "edit",
    href: "/crop-circle-image",
    howTo: commonEditSteps("circle crop"),
    relatedSlugs: ["crop-image", "instagram-resizer", "resize-canvas"],
    faqs: editingFaqs("Crop a circle"),
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
