export type ToolContent = {
  explanation: string[];
  howTo?: string[];
  features: string[];
  supportedFormats: string;
  privacyNote: string;
  faqs: Array<{ question: string; answer: string }>;
};

const browserPrivacy =
  "ImageToolkit is designed to handle this task in your browser whenever the selected file type is supported. The image you choose is processed on your device for preview and export, and ImageToolkit does not require an account or intentionally upload the original image to an ImageToolkit server for these browser-first tools.";

export const toolContentBySlug: Record<string, ToolContent> = {
  "image-resizer": {
    explanation: [
      "Image Resizer helps you change the pixel dimensions of a JPG, PNG, or WebP image without opening a full design application. It is useful when a website, form, marketplace, profile page, or content management system asks for a specific width and height. Instead of guessing, you can upload an image, enter the dimensions you need, choose how the image should fit, and download a new resized copy.",
      "The most important choice is whether the image should keep its original aspect ratio. Keeping the ratio prevents faces, products, logos, and screenshots from looking stretched. If you need an exact canvas size, fit mode keeps the whole image visible, cover mode fills the target by cropping edges, and stretch mode is available only when exact distortion is acceptable. This makes the tool practical for website thumbnails, product images, blog graphics, profile photos, and social media preparation.",
      "A good resize workflow keeps the original file separate from the exported version. Use the original as your source, then create a new file for each destination. This prevents repeated compression damage and makes it easier to create a second size later if a platform changes its requirements.",
    ],
    howTo: [
      "Upload a JPG, PNG, or WebP image from your device.",
      "Enter the target width and height in pixels.",
      "Turn on keep aspect ratio if you want to prevent distortion.",
      "Choose fit, cover, or stretch depending on whether you prefer padding, cropping, or exact dimensions.",
      "Select the output format and quality when available.",
      "Preview the result and download the resized image as a new file.",
    ],
    features: [
      "Custom width and height controls for precise pixel dimensions.",
      "Keep-aspect-ratio option to prevent stretched images.",
      "Fit, cover, and stretch modes for different publishing requirements.",
      "JPG, PNG, and WebP export options where supported by the browser.",
      "Useful for websites, forms, thumbnails, product images, and social media graphics.",
      "Creates a new download while keeping the original image unchanged.",
    ],
    supportedFormats:
      "The resizer works best with common browser-readable formats such as JPG, PNG, and WebP. Some modern browsers may also decode AVIF, BMP, or GIF still frames, but support depends on the browser and device.",
    privacyNote: browserPrivacy,
    faqs: [
      {
        question: "How do I resize an image without stretching it?",
        answer: "Enable keep aspect ratio, then change either width or height. The matching side will be calculated so the image keeps its natural shape.",
      },
      {
        question: "What is the difference between fit and cover mode?",
        answer: "Fit keeps the whole image visible inside the target size, while cover fills the target size by cropping the edges.",
      },
      {
        question: "Can I resize images for website thumbnails?",
        answer: "Yes. Enter the thumbnail dimensions used by your layout, preview the result, and download a smaller optimized copy.",
      },
      {
        question: "Will the original image be overwritten?",
        answer: "No. The tool exports a new image file and does not change the original file stored on your device.",
      },
      {
        question: "Are resized images uploaded to ImageToolkit?",
        answer: browserPrivacy,
      },
    ],
  },
  "image-compressor": {
    explanation: [
      "Image Compressor reduces image file size by exporting a new copy with a chosen quality setting. It is useful before uploading photos to websites, online stores, forms, email, blog posts, or social media. Large images can slow pages down, fail upload limits, or make files harder to share, so compression is often part of a healthy publishing workflow.",
      "The goal is not simply to create the smallest possible file. A good compressed image should still look clean in its final context. A product photo, portrait, or portfolio image may need higher quality, while a small thumbnail or background image can usually tolerate stronger compression. The page shows original and compressed sizes so you can make a practical decision instead of guessing.",
      "For best results, resize oversized images first, then compress the resized copy. A photo that is 4000 pixels wide will often remain heavier than needed even after compression if the page only displays it at 900 pixels wide. Combining resize and compression usually gives a smaller file with fewer visible quality problems.",
    ],
    howTo: [
      "Upload the image you want to reduce.",
      "Adjust the compression quality slider.",
      "Compare the original file size with the compressed result.",
      "Preview important details such as faces, text, product edges, and gradients.",
      "Download the compressed image as a new file.",
    ],
    features: [
      "Quality slider for balancing file size and visual detail.",
      "Original and compressed file size comparison.",
      "Preview before downloading the optimized image.",
      "Useful for website performance, email attachments, upload limits, and content publishing.",
      "Browser-based processing for supported image formats.",
      "Exports a new copy so your source image remains available.",
    ],
    supportedFormats:
      "Compression works best with browser-readable image files such as JPG, PNG, and WebP. JPG and WebP are usually the most useful outputs for smaller photo files. PNG may be better for graphics or transparency when file size is less important.",
    privacyNote: browserPrivacy,
    faqs: [
      {
        question: "What quality setting should I use?",
        answer: "For many photos, 70 to 85 percent is a good starting range. Use higher quality for product photos, portraits, and detailed images.",
      },
      {
        question: "Why is my compressed image still large?",
        answer: "The image may have very large pixel dimensions. Resize it closer to the final display size before compressing.",
      },
      {
        question: "Does compression damage image quality?",
        answer: "Lower quality settings can create artifacts. Preview the result and use the smallest file that still looks acceptable.",
      },
      {
        question: "Can I use this before uploading to a website?",
        answer: "Yes. Compressing images before upload can improve page speed and reduce storage or bandwidth usage.",
      },
      {
        question: "Are compressed images uploaded to ImageToolkit?",
        answer: browserPrivacy,
      },
    ],
  },
  "crop-image": {
    explanation: [
      "Crop Image lets you select the most important part of a picture and download only that area. Cropping is useful when the subject is too small, the composition has extra background, or a platform requires a tighter frame. Instead of resizing the whole image, cropping changes what part of the image remains visible.",
      "A clean crop can make a product photo, profile image, screenshot, or blog graphic feel more focused. It can also help remove distracting edges or prepare an image for a specific layout. The draggable crop box makes the decision visible before export, so you can adjust the frame until the subject, text, or object sits in the right place.",
      "Cropping should be done before final resizing when possible. If you crop first, then resize the selected area to the target dimensions, the final result is easier to control and less likely to include unwanted empty space.",
    ],
    howTo: [
      "Upload an image from your device.",
      "Drag the crop box over the area you want to keep.",
      "Resize the crop area with the handle until the framing looks right.",
      "Check the crop preview before exporting.",
      "Download the cropped image as a new file.",
    ],
    features: [
      "Freeform crop area with drag and resize controls.",
      "Live preview of the selected crop area.",
      "Useful for profile photos, product images, screenshots, and blog graphics.",
      "Exports only the selected part of the image.",
      "Keeps the original file unchanged on your device.",
      "Works directly in modern desktop and mobile browsers.",
    ],
    supportedFormats:
      "The cropper works with common browser-readable image formats including JPG, PNG, and WebP. Other formats may work when the browser can decode them.",
    privacyNote: browserPrivacy,
    faqs: [
      {
        question: "Does cropping reduce file size?",
        answer: "Often yes, because the exported image contains fewer pixels than the original. Final size also depends on output format and quality.",
      },
      {
        question: "Can I crop a screenshot?",
        answer: "Yes. Cropping is useful for removing browser chrome, extra whitespace, or private areas from screenshots before sharing.",
      },
      {
        question: "Should I crop before resizing?",
        answer: "Usually yes. Crop the important area first, then resize it for the final layout or platform size.",
      },
      {
        question: "Will the original file change?",
        answer: "No. The crop tool exports a new file and does not overwrite the original image on your device.",
      },
      {
        question: "Is cropping handled locally?",
        answer: browserPrivacy,
      },
    ],
  },
  "jpg-to-png": {
    explanation: [
      "JPG to PNG Converter creates a PNG copy from a JPG image. This can be useful when a workflow asks for PNG, when you want a lossless-style exported copy of the rendered pixels, or when you need a format that handles screenshots and graphics more predictably. The converter keeps the original JPG separate and downloads a new PNG file.",
      "Converting JPG to PNG does not restore quality that was already lost through JPG compression. If a photo has blocky artifacts, changing the extension to PNG will preserve the current pixels but cannot recover detail. The conversion is still useful for compatibility, editing handoff, and workflows that specifically require PNG.",
      "PNG files are often larger than JPG files for photos. If your goal is smaller file size, use the compressor or WebP converter instead. If your goal is a PNG output for a form, editor, or design workflow, this converter provides a simple browser-based path.",
    ],
    howTo: [
      "Upload a JPG image from your device.",
      "Let the browser preview the uploaded image.",
      "Confirm that the image looks correct before export.",
      "Download the converted PNG file.",
    ],
    features: [
      "Converts JPG images into PNG output.",
      "Creates a new PNG copy without changing the original JPG.",
      "Useful when an app, form, or editor requires PNG.",
      "Simple browser-based workflow with no account required.",
      "Good for preparing rendered JPG pixels for further editing.",
    ],
    supportedFormats:
      "This converter accepts JPG or JPEG files that your browser can decode and exports PNG. The PNG output preserves the rendered pixels but does not add transparency that did not exist in the source image.",
    privacyNote: browserPrivacy,
    faqs: [
      {
        question: "Does JPG to PNG make the image higher quality?",
        answer: "No. PNG preserves the rendered pixels, but it cannot recover detail lost during earlier JPG compression.",
      },
      {
        question: "Will the PNG file be larger?",
        answer: "Often yes, especially for photos. PNG is usually larger than JPG for photographic images.",
      },
      {
        question: "Can converting JPG to PNG add transparency?",
        answer: "No. JPG does not contain transparency, so the converted PNG will not magically create transparent areas.",
      },
      {
        question: "When should I use PNG output?",
        answer: "Use PNG when a platform requires it, when you are preparing graphics for editing, or when lossless-style exported pixels matter more than file size.",
      },
      {
        question: "Is the JPG uploaded to ImageToolkit?",
        answer: browserPrivacy,
      },
    ],
  },
  "png-to-jpg": {
    explanation: [
      "PNG to JPG Converter creates a compatible JPG copy from a PNG image. This is useful when a website, form, marketplace, or app accepts JPG but rejects PNG, or when a PNG photo is too large and needs a more compact format. JPG is widely supported, easy to share, and usually smaller for photographic images.",
      "The main limitation is transparency. JPG does not support transparent pixels, so transparent PNG areas must become a solid color. ImageToolkit uses a clean white background for those areas, which works well for documents, forms, product photos, and many everyday uploads. If you need transparency, keep PNG or consider WebP when the destination supports it.",
      "Use this converter when compatibility matters more than transparency. For screenshots and graphics with small text, compare the output carefully because aggressive JPG compression can soften edges. For photos, JPG is often a practical and lightweight choice.",
    ],
    howTo: [
      "Upload a PNG image from your device.",
      "Preview the image and check whether it has transparent areas.",
      "Choose the JPG output quality if available.",
      "Download the converted JPG file with a white background.",
    ],
    features: [
      "Converts PNG images into widely compatible JPG output.",
      "Fills transparent areas with white for clean JPG exports.",
      "Useful for forms, uploads, emails, marketplaces, and photo sharing.",
      "Can reduce file size for photographic PNG images.",
      "Exports a new JPG copy while preserving the original PNG file.",
    ],
    supportedFormats:
      "This converter accepts browser-readable PNG files and exports JPG. Transparent PNG pixels are flattened onto a white background because JPG does not support transparency.",
    privacyNote: browserPrivacy,
    faqs: [
      {
        question: "What happens to transparent PNG areas?",
        answer: "Transparent areas are filled with white because JPG does not support transparency.",
      },
      {
        question: "Is JPG smaller than PNG?",
        answer: "For photos, JPG is usually smaller. For simple graphics or screenshots, the best format depends on the content.",
      },
      {
        question: "Can I keep transparency in JPG?",
        answer: "No. Use PNG or WebP if transparency is required by your workflow.",
      },
      {
        question: "When should I convert PNG to JPG?",
        answer: "Convert PNG to JPG when you need broad compatibility, smaller photo files, or a format accepted by upload forms.",
      },
      {
        question: "Is the PNG uploaded to ImageToolkit?",
        answer: browserPrivacy,
      },
    ],
  },
  "image-to-webp": {
    explanation: [
      "Image to WebP Converter turns JPG or PNG files into WebP, a modern image format designed for efficient web delivery. WebP can often create smaller files while keeping strong visual quality, which makes it useful for websites, blogs, product grids, landing pages, and content libraries where speed matters.",
      "WebP is especially helpful when you want to reduce page weight without changing the visible image too much. Photos, thumbnails, and repeated website images are good candidates. For transparent graphics, WebP can also support transparency in modern browsers, but you should always preview important edges and backgrounds before publishing.",
      "Keep your original JPG or PNG as the source file, then publish WebP as an optimized web copy when the destination supports it. This gives you flexibility: the source remains easy to edit or share, while the WebP version can help visitors load pages faster.",
    ],
    howTo: [
      "Upload a JPG or PNG image from your device.",
      "Preview the source image in the browser.",
      "Adjust output quality if the converter provides a quality control.",
      "Download the converted WebP file.",
      "Use the WebP copy on websites or workflows that support the format.",
    ],
    features: [
      "Converts JPG and PNG images into modern WebP output.",
      "Useful for faster website images and lighter media libraries.",
      "Can preserve transparency when the browser and output support it.",
      "Creates a separate WebP copy from the source image.",
      "Works well with image resizing and compression workflows.",
    ],
    supportedFormats:
      "This converter accepts common browser-readable source formats such as JPG and PNG, then exports WebP when the browser supports WebP encoding.",
    privacyNote: browserPrivacy,
    faqs: [
      {
        question: "Why convert images to WebP?",
        answer: "WebP often provides smaller file sizes than JPG or PNG while maintaining good visual quality for web use.",
      },
      {
        question: "Do all browsers support WebP?",
        answer: "Modern browsers support WebP, but very old browsers or some legacy systems may still require JPG or PNG.",
      },
      {
        question: "Should I delete the original JPG or PNG?",
        answer: "No. Keep the original as your source file so you can create another version later if needed.",
      },
      {
        question: "Is WebP good for SEO?",
        answer: "WebP can help page performance by reducing image size, but it should be used with clear filenames, alt text, and good page content.",
      },
      {
        question: "Is conversion handled locally?",
        answer: browserPrivacy,
      },
    ],
  },
  "webp-to-jpg": {
    explanation: [
      "WebP to JPG Converter creates a JPG copy from a WebP image. This is useful when an older app, upload form, document system, email client, or marketplace does not accept WebP. JPG remains one of the most widely supported image formats, so converting WebP to JPG can solve compatibility problems quickly.",
      "Because JPG does not support transparency, transparent areas in the WebP source need to become a solid background. For many photos and ordinary uploads this is fine, but logos, stickers, and cutout graphics may need PNG or WebP instead. Always preview the result if the image has transparent edges.",
      "Use this converter when sharing and compatibility matter more than modern web optimization. If the destination supports WebP, you may not need to convert. If it rejects WebP, JPG is usually the safest format for photos and general image uploads.",
    ],
    howTo: [
      "Upload a WebP image from your device.",
      "Preview the image in the browser.",
      "Check whether the source image uses transparency.",
      "Download the converted JPG file.",
    ],
    features: [
      "Converts WebP images into broadly compatible JPG output.",
      "Useful for older apps, forms, marketplaces, email, and document workflows.",
      "Creates a new JPG copy while keeping the WebP original unchanged.",
      "Simple browser-based conversion with no account required.",
      "Works well for photos and general image sharing.",
    ],
    supportedFormats:
      "This converter accepts WebP files that your browser can decode and exports JPG. Transparent WebP areas are flattened because JPG cannot store transparency.",
    privacyNote: browserPrivacy,
    faqs: [
      {
        question: "Why convert WebP to JPG?",
        answer: "Convert WebP to JPG when an app, form, or service does not accept WebP files.",
      },
      {
        question: "Will transparent areas stay transparent?",
        answer: "No. JPG does not support transparency, so transparent areas must become a solid background.",
      },
      {
        question: "Does JPG reduce quality?",
        answer: "JPG uses lossy compression, so very low quality settings can reduce detail. Use higher quality for important photos.",
      },
      {
        question: "Should I use JPG for website performance?",
        answer: "WebP is often better for modern websites. Use JPG when compatibility is the priority.",
      },
      {
        question: "Is the WebP image uploaded to ImageToolkit?",
        answer: browserPrivacy,
      },
    ],
  },
  "instagram-resizer": {
    explanation: [
      "Instagram Image Resizer prepares images for common Instagram publishing sizes, including square posts, portrait posts, and stories. Instagram uses different aspect ratios across feed posts, vertical content, and story layouts, so resizing without thinking about framing can crop faces, logos, product details, or text in awkward places.",
      "This page gives you practical presets so you can focus on the image itself. Use fit mode when you want the whole image visible, cover mode when you want the canvas fully filled, and stretch mode only when distortion is acceptable. For branded graphics, leave margin around text and logos so Instagram interface elements or preview crops do not hide important content.",
      "A reliable Instagram workflow starts with a clean source image and exports separate versions for each placement. One square file may work for a feed post, while a vertical story needs more height and a different composition. Creating each size intentionally gives your profile a more polished look.",
    ],
    howTo: [
      "Upload the image you want to prepare for Instagram.",
      "Choose the Instagram Post, Portrait, or Story preset.",
      "Select fit or cover mode to control whether the full image is visible or cropped.",
      "Adjust format and quality if needed.",
      "Preview the result on the page.",
      "Download the resized Instagram image.",
    ],
    features: [
      "Includes Instagram Post 1080x1080, Portrait 1080x1350, and Story 1080x1920 presets.",
      "Fit and cover modes help avoid unwanted stretching.",
      "Useful for creators, brands, stores, campaigns, and social media managers.",
      "Exports a new image file ready for Instagram upload.",
      "Works in the browser without requiring an account.",
    ],
    supportedFormats:
      "The Instagram resizer works best with JPG, PNG, and WebP files that your browser can decode. JPG is commonly used for photos, while PNG or WebP may be better for graphics depending on the final use.",
    privacyNote: browserPrivacy,
    faqs: [
      {
        question: "Which Instagram sizes are included?",
        answer: "The page includes 1080x1080 for square posts, 1080x1350 for portrait posts, and 1080x1920 for stories.",
      },
      {
        question: "How do I avoid stretching my Instagram image?",
        answer: "Use fit or cover mode instead of stretch. Fit keeps the whole image visible, while cover fills the target size by cropping edges.",
      },
      {
        question: "Should I use JPG or PNG for Instagram?",
        answer: "JPG is usually practical for photos. PNG may be better for text-heavy graphics before platform compression.",
      },
      {
        question: "Can I use this for Instagram Stories?",
        answer: "Yes. Choose the Instagram Story preset at 1080x1920.",
      },
      {
        question: "Is the image uploaded to ImageToolkit?",
        answer: browserPrivacy,
      },
    ],
  },
  "youtube-thumbnail-resizer": {
    explanation: [
      "YouTube Thumbnail Resizer prepares images for the common 1280x720 thumbnail size. A thumbnail is often the first visual signal a viewer sees, so correct dimensions and clear framing matter. If the image is stretched, cropped poorly, or too small, it can look less professional before the video is even opened.",
      "The 1280x720 preset uses a 16:9 aspect ratio, which fits standard YouTube thumbnail layouts. Use cover mode when you want the image to fill the frame and are comfortable cropping edges. Use fit mode when the whole image must remain visible, such as screenshots, title cards, or graphics with important text.",
      "For best results, keep faces, products, and title text away from the very edges. YouTube may show thumbnails at many sizes across mobile, desktop, search, suggested videos, and embeds. A clean source image with strong contrast and simple composition usually works better than a crowded design.",
    ],
    howTo: [
      "Upload the image you want to turn into a YouTube thumbnail.",
      "Use the 1280x720 preset already configured on the page.",
      "Choose fit or cover mode depending on whether you prefer full visibility or edge cropping.",
      "Preview the final thumbnail framing.",
      "Download the resized thumbnail image.",
    ],
    features: [
      "Uses the common YouTube thumbnail size of 1280x720.",
      "16:9 output suitable for video thumbnails and preview images.",
      "Fit and cover modes for controlling thumbnail composition.",
      "Useful for creators, editors, marketers, educators, and channel managers.",
      "Exports a new image without changing your original source file.",
    ],
    supportedFormats:
      "The thumbnail resizer works with common browser-readable formats such as JPG, PNG, and WebP. JPG is often a practical choice for final thumbnail uploads, while PNG can be useful for graphics-heavy source images.",
    privacyNote: browserPrivacy,
    faqs: [
      {
        question: "What size should a YouTube thumbnail be?",
        answer: "A common YouTube thumbnail size is 1280x720 pixels, which uses a 16:9 aspect ratio.",
      },
      {
        question: "Will my thumbnail be cropped?",
        answer: "Cover mode may crop edges to fill the 16:9 frame. Fit mode keeps the whole image visible.",
      },
      {
        question: "Can I use screenshots as thumbnails?",
        answer: "Yes. Upload a screenshot, choose fit or cover mode, preview the result, and download the resized image.",
      },
      {
        question: "What format should I download?",
        answer: "JPG is usually practical for thumbnails, while PNG can be useful when the image contains sharp text or graphics.",
      },
      {
        question: "Is the thumbnail processed locally?",
        answer: browserPrivacy,
      },
    ],
  },
  "pdf-to-images": {
    explanation: [
      "PDF to Images helps turn PDF pages into image files for previews, sharing, documentation, and visual workflows. This is useful when you need to show a page inside a presentation, include a document page in a tutorial, create a visual preview, or extract a page image for a website or support article.",
      "PDF rendering can be heavier than ordinary image processing because each page may contain text, graphics, embedded images, and layout instructions. Large PDF files or many pages may take longer depending on your device. For privacy and reliability, keep sensitive documents local and review exported images before sharing them publicly.",
      "Use this tool for practical page previews rather than archival conversion. If you need searchable text, editable documents, or official records, keep the original PDF. The exported images are best for display, thumbnails, screenshots, and visual references.",
    ],
    howTo: [
      "Upload a PDF file from your device.",
      "Wait for the browser to render available pages.",
      "Preview the generated page images.",
      "Download the page images you need.",
    ],
    features: [
      "Converts PDF pages into image previews.",
      "Useful for documentation, presentations, support guides, and visual references.",
      "Keeps the original PDF separate from exported images.",
      "Browser-first workflow for supported files.",
      "Helpful when a platform needs an image instead of a PDF.",
    ],
    supportedFormats:
      "This page accepts PDF files and exports rendered pages as image files. Very large PDFs, encrypted PDFs, or complex documents may depend on browser memory and PDF rendering support.",
    privacyNote: browserPrivacy,
    faqs: [
      {
        question: "Can I convert every PDF to images?",
        answer: "Most ordinary PDFs can be rendered, but encrypted, very large, or complex files may not work in every browser.",
      },
      {
        question: "Will exported images contain selectable text?",
        answer: "No. Exported images are visual copies of pages, not searchable or editable text documents.",
      },
      {
        question: "When should I use PDF to Images?",
        answer: "Use it when you need page previews, screenshots, documentation visuals, or image files for platforms that do not accept PDFs.",
      },
      {
        question: "Should I keep the original PDF?",
        answer: "Yes. Keep the original PDF if you need searchable text, official records, or future edits.",
      },
      {
        question: "Is the PDF uploaded to ImageToolkit?",
        answer: browserPrivacy,
      },
    ],
  },
  "images-to-pdf": {
    explanation: [
      "Images to PDF combines selected images into a downloadable PDF file. It is useful when you want to group screenshots, scanned pages, receipts, visual notes, product references, or design previews into one document that is easier to share or archive.",
      "A clean PDF depends on the quality and order of the source images. Before exporting, check that each image is readable, correctly rotated, and sized appropriately. Large photos can create large PDFs, so resizing or compressing images first may be useful when the final document needs to be emailed or uploaded to a form.",
      "This tool is intended for simple image-based PDFs. It does not replace a full document editor, OCR system, or official scanning workflow. Use it when a visual PDF copy is enough and you want a quick browser-based way to bundle images together.",
    ],
    howTo: [
      "Upload one or more image files from your device.",
      "Review the selected image order.",
      "Remove images you do not want in the PDF.",
      "Generate the PDF in the browser.",
      "Download the finished PDF file.",
    ],
    features: [
      "Combines multiple images into one PDF document.",
      "Useful for screenshots, receipts, scanned pages, and visual notes.",
      "Works without creating an account.",
      "Keeps original images separate from the generated PDF.",
      "Pairs well with resize and compressor tools before export.",
    ],
    supportedFormats:
      "Images to PDF works best with common browser-readable image files such as JPG, PNG, and WebP. Very large images can increase PDF size and may require more browser memory.",
    privacyNote: browserPrivacy,
    faqs: [
      {
        question: "Can I combine multiple images into one PDF?",
        answer: "Yes. Upload multiple images and generate one image-based PDF document.",
      },
      {
        question: "Why is my PDF file large?",
        answer: "Large source images create larger PDFs. Resize or compress images before combining them if file size matters.",
      },
      {
        question: "Can the PDF text be searched?",
        answer: "No. The PDF is image-based, so text inside screenshots or scanned images is not converted into searchable text.",
      },
      {
        question: "Should I resize images first?",
        answer: "If the images are very large, resizing first can make the PDF easier to email, upload, and store.",
      },
      {
        question: "Are images uploaded to ImageToolkit?",
        answer: browserPrivacy,
      },
    ],
  },
};

export function getToolContent(slug: string) {
  return toolContentBySlug[slug];
}
