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
  "heic-to-jpg": {
    explanation: [
      "HEIC to JPG helps you turn modern iPhone and iPad photos into a format that works almost everywhere. HEIC is efficient, but many upload forms, older devices, desktop apps, printers, and support portals still expect JPG. Converting to JPG is usually the safest choice when compatibility matters more than keeping every advanced HEIC feature.",
      "This tool is useful before uploading photos to job applications, school portals, real estate forms, travel documents, marketplace listings, or websites that reject HEIC files. The converted JPG is easier to preview, share, attach to email, and open on Windows, Android, and older image editors.",
      "Because browser HEIC support varies by device and operating system, the tool works when your browser can decode the selected HEIC image. If a file cannot be opened, try Safari on a newer Apple device or export the photo from your Photos app first.",
    ],
    howTo: [
      "Upload a HEIC or HEIF photo from your device.",
      "Wait for the browser preview to load.",
      "Convert the photo to JPG.",
      "Download the converted JPG file.",
      "Open the JPG to confirm the orientation, color, and visible area look correct.",
    ],
    features: [
      "Converts HEIC photos into widely compatible JPG images.",
      "Useful for upload forms that do not accept Apple photo formats.",
      "Works in the browser when HEIC decoding is supported.",
      "Creates a shareable copy while leaving the original photo unchanged.",
      "No account or design software is required.",
      "Pairs well with the image compressor when you need a smaller final JPG.",
    ],
    supportedFormats: "Input support depends on browser HEIC or HEIF decoding. Output is JPG, which is best for photos, documents, listings, and general compatibility.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Why should I convert HEIC to JPG?", answer: "JPG is accepted by far more websites, apps, printers, and older devices. Use JPG when a service rejects HEIC or when you need a simple file to share." },
      { question: "Will HEIC to JPG reduce quality?", answer: "JPG uses lossy compression, so a converted file may not be mathematically identical to the original. For normal sharing and uploads, the visual difference is usually small." },
      { question: "Why will my HEIC file not open?", answer: "Some browsers cannot decode HEIC files. If the preview fails, try a newer browser, Safari on an Apple device, or export the image from your Photos app first." },
      { question: "Does the conversion keep transparency?", answer: "JPG does not support transparency. Most HEIC photos do not need transparency, but any transparent area would be flattened." },
      { question: "Can I compress the JPG after converting?", answer: "Yes. After downloading the JPG, use the Image Compressor tool to reduce file size for email, forms, or websites." },
    ],
  },
  "heic-to-png": {
    explanation: [
      "HEIC to PNG converts Apple photo files into a lossless image format that is easier to use in design tools, documents, and workflows where JPG compression is not ideal. PNG is often chosen for screenshots, interface captures, image assets, and files that need crisp edges or repeated editing.",
      "This conversion can help when you receive HEIC files from an iPhone but need to place them into presentations, design mockups, image editing software, or systems that prefer PNG. Compared with JPG, PNG usually creates larger files, but it avoids the extra compression artifacts that can appear around text and sharp details.",
      "The tool is browser-first, so decoding depends on whether your browser supports the HEIC image you select. When supported, you can create a PNG copy without installing a desktop converter.",
    ],
    howTo: [
      "Select a HEIC or HEIF image from your device.",
      "Let the browser decode the image and show a preview.",
      "Convert the image to PNG.",
      "Download the PNG result.",
      "Use the PNG in a document, design file, or editor that does not support HEIC.",
    ],
    features: [
      "Creates PNG files from supported HEIC photos.",
      "Useful for design workflows that prefer lossless raster images.",
      "Avoids JPG compression artifacts around fine details.",
      "Keeps the original HEIC file untouched.",
      "Browser-based workflow with no account required.",
      "Good choice for screenshots, documents, and editing references.",
    ],
    supportedFormats: "Input support depends on HEIC or HEIF decoding in the browser. Output is PNG, a lossless raster format that is widely supported but can be larger than JPG.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Is PNG better than JPG for HEIC conversion?", answer: "PNG is better when you want lossless output or sharp text and edges. JPG is usually better for smaller photo files and broad compatibility." },
      { question: "Will PNG make the file larger?", answer: "Often yes. PNG is lossless, so converted photos can be much larger than JPG versions." },
      { question: "Can this convert every iPhone photo?", answer: "It works when your browser can decode the HEIC or HEIF file. Browser support is the main limitation." },
      { question: "Does PNG support transparency?", answer: "PNG supports transparency, but most HEIC camera photos are opaque, so the converted file will usually look like a normal photo." },
      { question: "Should I use HEIC to PNG for printing?", answer: "PNG can work for documents and design layouts, but JPG is often simpler for standard photo printing services." },
    ],
  },
  "avif-to-jpg": {
    explanation: [
      "AVIF to JPG converts next-generation AVIF images into a traditional photo format that is accepted by older websites, editors, CMS platforms, and devices. AVIF can produce excellent compression, but compatibility is still not universal. JPG remains the safest option when a file needs to open everywhere.",
      "Use this tool when you download an AVIF from a website, receive an AVIF from a designer, or need to upload an image to a system that only allows JPG, JPEG, or PNG. The conversion creates a practical copy for everyday sharing while keeping the original AVIF file on your device.",
      "JPG does not preserve transparency or every advanced AVIF feature. For photos, social images, thumbnails, and product pictures, it is usually the most convenient export choice.",
    ],
    howTo: [
      "Upload an AVIF image from your device.",
      "Check the preview after the browser loads the file.",
      "Convert the image to JPG.",
      "Download the JPG copy.",
      "Use the JPG in upload forms, documents, editors, or sharing workflows.",
    ],
    features: [
      "Turns AVIF images into widely accepted JPG files.",
      "Helpful when older tools cannot open AVIF.",
      "Good for photos, thumbnails, and product images.",
      "Leaves the original AVIF file unchanged.",
      "Runs in the browser when AVIF decoding is supported.",
      "Can be followed by compression or resizing for web upload limits.",
    ],
    supportedFormats: "Input is AVIF when supported by the browser. Output is JPG, a lossy but highly compatible image format for photos and general use.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Why convert AVIF to JPG?", answer: "Convert AVIF to JPG when you need maximum compatibility with upload forms, old image editors, email clients, or devices that do not support AVIF." },
      { question: "Does JPG keep AVIF transparency?", answer: "No. JPG does not support transparency. Transparent areas are flattened during conversion." },
      { question: "Will the JPG be larger than the AVIF?", answer: "It may be. AVIF is very efficient, while JPG is older and often needs a larger file size to keep similar visual quality." },
      { question: "Can every browser convert AVIF?", answer: "Most modern browsers support AVIF, but support can vary by version. Update your browser if the file does not preview." },
      { question: "What should I do after converting for a website?", answer: "Resize and compress the JPG if the website has strict pixel size or file size limits." },
    ],
  },
  "avif-to-png": {
    explanation: [
      "AVIF to PNG converts an efficient modern image into a lossless PNG file for editing, screenshots, documents, and design handoff. PNG is not always the smallest option, but it is dependable when you need crisp visual detail and broad software support.",
      "This tool is a good fit when an AVIF contains text, interface elements, logos, transparency, or artwork that should not gain JPG compression artifacts. PNG is also useful when you plan to edit the image again or place it into a document where visual edges should stay clean.",
      "The output may be larger than the original AVIF because PNG uses a different compression approach. That tradeoff is normal: AVIF is built for efficient delivery, while PNG is often chosen for reliable editing and compatibility.",
    ],
    howTo: [
      "Upload an AVIF file from your computer or phone.",
      "Review the browser preview.",
      "Convert the AVIF image to PNG.",
      "Download the PNG result.",
      "Use the PNG in a design app, document, website editor, or presentation.",
    ],
    features: [
      "Converts supported AVIF images to PNG.",
      "Better than JPG for text, UI captures, artwork, and transparency.",
      "Useful for editing and design workflows.",
      "Browser-first conversion with no sign-in.",
      "Keeps the source AVIF file unchanged.",
      "Works well before cropping, resizing, or adding watermarks.",
    ],
    supportedFormats: "Input is AVIF when the browser can decode it. Output is PNG, a lossless raster format that supports transparency and is widely used in design and document workflows.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "When should I use AVIF to PNG instead of AVIF to JPG?", answer: "Use PNG for graphics, transparency, text, screenshots, and images you plan to edit. Use JPG for normal photos when smaller file size matters." },
      { question: "Will the PNG file be larger?", answer: "Usually yes. AVIF is highly compressed, while PNG prioritizes lossless quality and compatibility." },
      { question: "Does PNG keep transparency?", answer: "PNG supports transparency, so transparent AVIF images can be exported in a format that also supports transparency when decoding allows it." },
      { question: "Can I use the PNG on a website?", answer: "Yes, but if the PNG is large, consider converting to WebP or compressing it before publishing." },
      { question: "Does this change the original AVIF?", answer: "No. The tool creates a new PNG download and does not modify your original file." },
    ],
  },
  "svg-to-png": {
    explanation: [
      "SVG to PNG turns a vector graphic into a standard raster image. SVG files are resolution-independent and ideal for icons, logos, diagrams, and illustrations, but some platforms do not accept SVG uploads. PNG is easier to use in documents, social posts, presentations, and systems that require a normal image file.",
      "Converting SVG to PNG is useful when you need a fixed pixel size. A vector can scale endlessly, but a PNG has a specific width and height that can be checked before upload. This makes it easier to prepare assets for profile images, app icons, support tickets, marketplace listings, or CMS image fields.",
      "PNG is best when you want a clean raster copy, especially for graphics with transparent backgrounds. If you need a white background and smaller photo-style file, SVG to JPG may be more suitable.",
    ],
    howTo: [
      "Upload an SVG file.",
      "Confirm that the browser preview displays the graphic correctly.",
      "Set the target size if the page provides size controls.",
      "Convert the SVG to PNG.",
      "Download the PNG and check the edges, transparency, and dimensions.",
    ],
    features: [
      "Converts vector SVG artwork into PNG images.",
      "Useful for logos, icons, charts, and illustrations.",
      "Can preserve transparent backgrounds in PNG output.",
      "Creates a fixed-size raster file for upload requirements.",
      "Works without opening a design application.",
      "Good companion to image resizing and compression tools.",
    ],
    supportedFormats: "Input is SVG. Output is PNG. SVG files that reference external fonts, remote images, or scripts may render differently depending on browser security and font availability.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Why convert SVG to PNG?", answer: "Convert SVG to PNG when a website, document editor, social platform, or upload form does not accept SVG files." },
      { question: "Will PNG stay sharp at every size?", answer: "No. PNG is raster-based. Choose a large enough export size if you need the image to look sharp on high-resolution screens." },
      { question: "Can PNG keep the SVG transparent background?", answer: "Yes. PNG supports transparency, so transparent SVG artwork can usually export with transparency intact." },
      { question: "Why does my SVG look different after conversion?", answer: "Missing fonts, external assets, unsupported SVG features, or browser security rules can change rendering. Embed fonts or outline text when exact output matters." },
      { question: "Is SVG to PNG good for logos?", answer: "Yes, especially when a service requires a raster logo upload. Keep the original SVG for editing and export PNG copies at the sizes you need." },
    ],
  },
  "svg-to-jpg": {
    explanation: [
      "SVG to JPG converts vector artwork into a familiar photo-style image with broad compatibility. JPG is accepted by many systems that do not allow SVG uploads, including some email tools, marketplaces, forms, and older content platforms. It is useful when the final image does not need transparency.",
      "Because JPG uses a solid background and lossy compression, it is best for SVG artwork that can sit on white or simple backgrounds. Logos, diagrams, charts, and illustrations can be exported as JPG when a platform specifically asks for JPEG, but PNG is usually better when crisp edges or transparency are important.",
      "This browser-based conversion creates a new JPG copy while keeping the original SVG file available for future editing. Check the result carefully if the SVG uses custom fonts, filters, or externally linked assets.",
    ],
    howTo: [
      "Upload an SVG file from your device.",
      "Review the rendered preview.",
      "Convert the SVG into a JPG image.",
      "Download the JPG output.",
      "Check the background, text, and edges before uploading it elsewhere.",
    ],
    features: [
      "Converts SVG vector graphics into JPG images.",
      "Useful for platforms that require JPG or JPEG uploads.",
      "Creates a widely compatible raster copy.",
      "Good for simple illustrations, charts, and diagrams without transparency needs.",
      "Browser-first conversion with no account required.",
      "Leaves the original editable SVG unchanged.",
    ],
    supportedFormats: "Input is SVG. Output is JPG. JPG does not support transparency, so transparent areas are flattened to a solid background.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Should I convert SVG to JPG or PNG?", answer: "Use JPG for simple compatibility and photo-style uploads. Use PNG when you need transparency, sharper edges, or lossless graphics." },
      { question: "Does JPG support transparent SVG backgrounds?", answer: "No. JPG has no transparency support, so transparent regions are flattened during export." },
      { question: "Why is text different in my JPG?", answer: "If the SVG uses a font that is not available in your browser, the browser may substitute another font during rendering." },
      { question: "Can I choose a different background color?", answer: "This version is designed for simple conversion. If you need exact background control, export as PNG first or edit the SVG in a design app." },
      { question: "Is SVG to JPG safe for official logos?", answer: "It can be, but keep a master SVG and export at the required pixel size so the JPG does not look blurry." },
    ],
  },
  "bmp-to-jpg": {
    explanation: [
      "BMP to JPG converts large bitmap images into smaller, more shareable photo files. BMP files are often uncompressed or lightly compressed, which makes them bulky for email, websites, forms, and online storage. JPG reduces file size dramatically for photos and scanned images.",
      "This tool is useful when an old scanner, Windows application, camera utility, or legacy design program exports BMP but the next step requires a modern web-friendly image. JPG is widely supported and usually the right choice for real-world photos, product shots, receipts, and visual references that do not need transparency.",
      "Since JPG is lossy, avoid using it as the only master copy for images that will be edited many times. Keep the original BMP if you may need maximum source detail later.",
    ],
    howTo: [
      "Upload a BMP image.",
      "Wait for the browser to load the preview.",
      "Convert the image to JPG.",
      "Download the smaller JPG copy.",
      "Compare the result with the original if image quality is important.",
    ],
    features: [
      "Converts bulky BMP files into common JPG images.",
      "Can greatly reduce file size for photo-like images.",
      "Useful for old Windows exports, scans, and legacy image files.",
      "Creates a compatible copy for email and web upload.",
      "Browser-based process with no sign-in.",
      "Works well before further compression or resizing.",
    ],
    supportedFormats: "Input is BMP when the browser can decode the bitmap. Output is JPG, which is best for photos and opaque images but does not support transparency.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Why are BMP files so large?", answer: "BMP commonly stores raw pixel data with little compression, so files can be much larger than JPG, PNG, or WebP versions." },
      { question: "Will BMP to JPG reduce quality?", answer: "JPG compression can reduce quality slightly, especially at low quality settings. For most photos, the size savings are worth it." },
      { question: "Should I use PNG instead of JPG?", answer: "Use PNG for diagrams, screenshots, transparency, and lossless output. Use JPG for photos and smaller file sizes." },
      { question: "Can this open every BMP file?", answer: "Most standard BMP files work, but unusual bit depths or legacy variants may depend on browser decoding support." },
      { question: "Does this change my original BMP?", answer: "No. It creates a new JPG download and leaves your source file unchanged." },
    ],
  },
  "bmp-to-png": {
    explanation: [
      "BMP to PNG converts bitmap images into a modern lossless format. PNG is usually easier to use than BMP because it is broadly supported on websites, in documents, and in design tools while preserving sharp details without JPG compression artifacts.",
      "This conversion is a good choice for screenshots, diagrams, interface captures, scanned documents, pixel art, and graphics with text. PNG may not always be as small as JPG for photos, but it keeps edges and flat colors clean, which makes it valuable for non-photo images.",
      "Use this tool when you need a cleaner, more portable replacement for a BMP file but still want lossless output. If file size is the top priority and the image is a normal photo, BMP to JPG may be better.",
    ],
    howTo: [
      "Upload a BMP image from your device.",
      "Check that the preview loads correctly.",
      "Convert the BMP to PNG.",
      "Download the PNG file.",
      "Use the PNG in documents, websites, editors, or upload forms.",
    ],
    features: [
      "Converts standard BMP images into PNG files.",
      "Keeps sharp text, edges, and flat-color graphics clean.",
      "Useful for screenshots, scans, icons, and diagrams.",
      "Lossless output compared with JPG conversion.",
      "No account or desktop converter required.",
      "Keeps the original BMP file unchanged.",
    ],
    supportedFormats: "Input is BMP when supported by the browser. Output is PNG, a lossless format that is widely supported and better suited than JPG for text and graphics.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Is BMP to PNG lossless?", answer: "PNG is a lossless output format. The result depends on how the browser decodes the original BMP, but PNG avoids adding JPG-style compression artifacts." },
      { question: "Will PNG be smaller than BMP?", answer: "Usually yes, especially for graphics with repeated colors. However, photo-like images may still be larger than JPG." },
      { question: "When is PNG better than JPG?", answer: "PNG is better for screenshots, text, icons, diagrams, and graphics that need clean edges or transparency support." },
      { question: "Can I convert PNG to WebP later?", answer: "Yes. After converting BMP to PNG, you can use Image to WebP to create a smaller web-friendly version." },
      { question: "Why would a BMP fail to preview?", answer: "Some BMP variants are uncommon. Browser support can vary for older bit depths or unusual encodings." },
    ],
  },
  "tiff-to-jpg": {
    explanation: [
      "TIFF to JPG converts high-quality TIFF files into smaller images that are easier to share, upload, and preview. TIFF is common in scanning, publishing, photography, archiving, and design workflows, but it is often too large or unsupported for everyday web use.",
      "JPG is a practical export format when you need to send a scanned page, product photo, document image, or design preview to someone who may not have professional imaging software. It is also useful for websites and forms that reject TIFF uploads because of file size or format restrictions.",
      "TIFF files can contain multiple pages, unusual color profiles, or high bit-depth data. Browser support varies, so this tool is best for straightforward TIFF images that your browser can decode.",
    ],
    howTo: [
      "Upload a TIFF or TIF image.",
      "Wait for the browser preview to appear.",
      "Convert the image to JPG.",
      "Download the JPG output.",
      "Check important details, orientation, and color before sharing or uploading.",
    ],
    features: [
      "Converts supported TIFF files into compatible JPG images.",
      "Useful for scans, photos, and document previews.",
      "Creates smaller files for email and online uploads.",
      "Avoids requiring professional image software for basic export.",
      "Browser-first workflow when TIFF decoding is available.",
      "Keeps the original TIFF file unchanged.",
    ],
    supportedFormats: "Input is TIFF or TIF when the browser can decode the file. Output is JPG. Multi-page TIFF files or specialized color formats may not be fully supported in the browser.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Why convert TIFF to JPG?", answer: "TIFF files are often large and not accepted by many websites. JPG is smaller, easier to share, and widely compatible." },
      { question: "Does this support multi-page TIFF files?", answer: "Browser support for multi-page TIFF is limited. This tool is intended for simple TIFF image files when the browser can decode them." },
      { question: "Will JPG preserve all TIFF quality?", answer: "No. JPG is lossy and may not preserve every detail, bit depth, or color property from a professional TIFF file." },
      { question: "Is TIFF to JPG good for scanned documents?", answer: "Yes, if you need a quick shareable copy. For archival storage, keep the original TIFF as the master file." },
      { question: "What if the TIFF does not load?", answer: "Try exporting the TIFF from your scanning or editing software as PNG or JPG first, especially if it uses unusual compression or color settings." },
    ],
  },
  "tiff-to-png": {
    explanation: [
      "TIFF to PNG converts TIFF or TIF images into a lossless format that is easier to use in documents, web editors, and design workflows. PNG is a good choice when you want a clean raster output without JPG compression, especially for scans, diagrams, text-heavy images, and artwork.",
      "This tool is helpful when a TIFF file is too difficult to open on another device but you still want to preserve crisp details. PNG can be larger than JPG, but it is more suitable when readability, clean edges, or future editing matter more than the smallest possible file size.",
      "TIFF is a flexible professional format, and some TIFF files contain multiple pages, layers, uncommon compression, or color data that browsers do not decode consistently. For simple supported TIFF images, the browser-based workflow is fast and convenient.",
    ],
    howTo: [
      "Upload a TIFF or TIF file.",
      "Confirm that the image preview is correct.",
      "Convert the TIFF to PNG.",
      "Download the PNG file.",
      "Use the PNG in your document, website editor, presentation, or image workflow.",
    ],
    features: [
      "Converts supported TIFF images into PNG files.",
      "Lossless output for clean edges and readable details.",
      "Good for scans, diagrams, artwork, and document images.",
      "Useful when JPG compression is not appropriate.",
      "Browser-first processing with no account.",
      "Preserves the original TIFF as a separate source file.",
    ],
    supportedFormats: "Input is TIFF or TIF when browser decoding is supported. Output is PNG. Specialized TIFF variants, very large scans, or multi-page documents may require dedicated software.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "When should I convert TIFF to PNG?", answer: "Use PNG when you want lossless output for scans, diagrams, screenshots, or images with text and sharp detail." },
      { question: "Is PNG smaller than TIFF?", answer: "Often yes, but not always. PNG compression works well for graphics and documents, while photo-like scans may still be large." },
      { question: "Does this keep all TIFF pages?", answer: "This browser tool is intended for simple image conversion. Multi-page TIFF support depends on browser decoding and may not include every page." },
      { question: "Should I choose PNG or JPG for TIFF?", answer: "Choose PNG for clean detail and editing. Choose JPG for smaller file size and simple sharing." },
      { question: "Can I resize the PNG afterward?", answer: "Yes. After converting, use Image Resizer if you need a specific pixel width or height." },
    ],
  },
  "gif-to-jpg": {
    explanation: [
      "GIF to JPG converts a GIF file into a simple still JPG image. GIF is useful for short animations, memes, stickers, and older web graphics, but many forms, marketplaces, document tools, and profile systems only accept JPG or PNG. When you only need one visible frame from a GIF, exporting a JPG copy is often the quickest solution.",
      "This tool is best for static GIF files or animated GIFs where the first frame is enough. JPG does not support animation, so the result is a still image rather than a moving file. That makes it suitable for thumbnails, preview images, reference screenshots, and upload fields that reject GIF files.",
      "Because JPG uses lossy compression and does not support transparency, it works best for photo-like GIF frames or images that can sit on a solid background. For graphics, icons, or transparent artwork, GIF to PNG may be the cleaner output choice.",
    ],
    howTo: [
      "Upload a GIF file from your device.",
      "Review the browser preview of the loaded frame.",
      "Convert the GIF frame to JPG.",
      "Download the JPG file.",
      "Check that the exported still image is the frame you want to use.",
    ],
    features: [
      "Creates a still JPG image from a GIF file.",
      "Useful for upload forms that do not accept GIF.",
      "Good for thumbnails, previews, and simple sharing.",
      "Produces a widely compatible JPG copy.",
      "Keeps the original GIF file unchanged.",
      "Works in the browser for GIF files your browser can decode.",
    ],
    supportedFormats: "Input is GIF when supported by the browser. Animated GIFs export as a still frame. Output is JPG, which does not support animation or transparency.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Will the JPG stay animated?", answer: "No. JPG is a still image format, so animated GIFs are exported as a single frame." },
      { question: "Which frame is converted from an animated GIF?", answer: "Browser canvas workflows commonly capture the displayed frame. For exact frame selection, a dedicated GIF frame extractor may be needed." },
      { question: "Why convert GIF to JPG?", answer: "Use JPG when a website, form, or app rejects GIF files and you only need a still preview image." },
      { question: "Does JPG keep GIF transparency?", answer: "No. JPG does not support transparency, so transparent areas are flattened." },
      { question: "Should I use GIF to PNG instead?", answer: "Use PNG if the GIF contains text, icons, flat colors, or transparency. Use JPG for photo-like still frames." },
    ],
  },
  "gif-to-png": {
    explanation: [
      "GIF to PNG converts a GIF into a still PNG image with lossless output. This is useful when you need a clean frame from a GIF for documents, presentations, support tickets, design references, or upload systems that prefer PNG. PNG is often a better match than JPG for graphics, icons, text, and transparent areas.",
      "Animated GIFs are not preserved as animation in PNG. Instead, the browser exports a still image from the GIF preview. This makes the tool useful for extracting a simple visual reference, but not for creating animated PNG files or editing individual GIF frames.",
      "PNG files can be larger than JPG, but the format keeps edges and flat-color details clean. If the GIF frame is a photo and file size matters more than sharp edges, GIF to JPG may be a more practical export.",
    ],
    howTo: [
      "Upload a GIF file.",
      "Let the browser render the GIF preview.",
      "Convert the visible GIF frame to PNG.",
      "Download the PNG output.",
      "Use the PNG in your document, design workflow, or upload form.",
    ],
    features: [
      "Converts GIF files into still PNG images.",
      "Better than JPG for text, icons, screenshots, and flat graphics.",
      "PNG output avoids extra JPG compression artifacts.",
      "Useful for visual references and documentation.",
      "Browser-first workflow with no account required.",
      "Leaves the original GIF unchanged.",
    ],
    supportedFormats: "Input is GIF when browser decoding is available. Animated GIFs export as a still frame. Output is PNG, a lossless raster format that supports transparency.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Can PNG be animated like GIF?", answer: "Standard PNG output from this tool is not animated. It creates a still image from the GIF preview." },
      { question: "When is GIF to PNG better than GIF to JPG?", answer: "PNG is better for graphics, text, icons, transparency, and images that need clean edges." },
      { question: "Will the PNG file be larger?", answer: "It can be. PNG is lossless, while JPG can create smaller photo-style files." },
      { question: "Can I choose a specific GIF frame?", answer: "This tool is designed for simple browser conversion. Exact frame selection may require a dedicated GIF editor." },
      { question: "Is the GIF uploaded to ImageToolkit?", answer: browserPrivacy },
    ],
  },
  "png-to-ico": {
    explanation: [
      "PNG to ICO creates an icon file from a PNG image for favicons, desktop shortcuts, Windows icons, app prototypes, and small branding assets. PNG is easy to design and export from most graphics tools, but some systems still request an ICO file because ICO can store icon-specific image data for older Windows and browser use cases.",
      "This tool is useful when you already have a square PNG logo or symbol and need an ICO version for a website project, test app, local shortcut, or software mockup. For best results, start with a clean square image with enough padding so the icon does not feel cropped at small sizes.",
      "ICO files are used differently from normal photos. Fine text, thin lines, and detailed illustrations may become unreadable when scaled down. Simple shapes, clear contrast, and centered artwork usually produce a better favicon or app icon.",
    ],
    howTo: [
      "Upload a square PNG image when possible.",
      "Preview the image and check that the symbol is centered.",
      "Convert the PNG to ICO.",
      "Download the generated ICO file.",
      "Test the icon at small sizes before using it on a website or shortcut.",
    ],
    features: [
      "Creates ICO files from PNG source images.",
      "Useful for favicons, desktop shortcuts, and app icon assets.",
      "Works best with square logos and simple symbols.",
      "Keeps your original PNG unchanged.",
      "Browser-based conversion with no sign-in.",
      "Pairs well with Image Resizer for preparing square icon input.",
    ],
    supportedFormats: "Input is PNG. Output is ICO for favicon and icon workflows. Start with a square PNG for the most predictable result.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "What is an ICO file used for?", answer: "ICO files are commonly used for Windows icons, desktop shortcuts, older favicon workflows, and some app icon requirements." },
      { question: "Should my PNG be square?", answer: "Yes. A square PNG usually creates the cleanest icon because icons are commonly displayed in square spaces." },
      { question: "Can I use a transparent PNG?", answer: "Yes. Transparent PNG artwork is often useful for icons, as long as the final shape remains visible at small sizes." },
      { question: "Why does my icon look blurry?", answer: "The source image may be too small or too detailed. Use a larger square PNG with simple artwork and clear contrast." },
      { question: "Can I make a favicon with this?", answer: "Yes. Generate an ICO file and test it in your website favicon setup." },
    ],
  },
  "jpg-to-ico": {
    explanation: [
      "JPG to ICO converts a photo or JPG graphic into an icon file. This can be useful for quick desktop shortcuts, prototypes, temporary app icons, or website experiments when the only source image you have is a JPG. The tool creates an ICO copy while leaving the original JPG untouched.",
      "JPG images are usually rectangular photos, while icons work best as square, simple, high-contrast graphics. If your JPG contains a person, product, or logo, consider cropping it to a square first so the important subject remains visible after conversion.",
      "Because JPG does not support transparency, the resulting icon will not have transparent areas unless you start from a format that supports transparency. For professional icons and favicons, PNG to ICO is often the better path.",
    ],
    howTo: [
      "Upload a JPG or JPEG image.",
      "Crop or resize the image first if it is not square.",
      "Convert the JPG to ICO.",
      "Download the generated icon file.",
      "Check the icon at small display sizes before using it.",
    ],
    features: [
      "Converts JPG images into ICO files.",
      "Useful for quick shortcut icons and favicon experiments.",
      "Works with common JPEG photos and graphics.",
      "Creates a new icon file without changing the original JPG.",
      "Browser-based workflow with no account.",
      "Can be combined with crop and resize tools for better icon framing.",
    ],
    supportedFormats: "Input is JPG or JPEG. Output is ICO. JPG does not contain transparency, so PNG is recommended when transparent icon backgrounds are important.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Can a photo become an ICO file?", answer: "Yes, but photos may not read clearly at small icon sizes. Simple centered subjects work best." },
      { question: "Should I crop the JPG first?", answer: "Usually yes. Cropping to a square helps prevent important parts of the image from being cut off or squeezed." },
      { question: "Will the ICO have transparency?", answer: "Not from a normal JPG source. JPG does not support transparency." },
      { question: "Is JPG to ICO good for professional favicons?", answer: "It can work for simple cases, but a clean PNG logo converted to ICO is usually better for branding." },
      { question: "Does this upload my JPG?", answer: browserPrivacy },
    ],
  },
  "webp-to-png": {
    explanation: [
      "WebP to PNG converts a modern web image into a lossless PNG file. WebP is excellent for website performance, but some design tools, document workflows, older editors, and upload forms still handle PNG more reliably. Converting to PNG can make the image easier to reuse outside the web.",
      "This tool is a good choice when the WebP contains transparency, text, interface elements, screenshots, icons, or artwork that should not gain JPG compression artifacts. PNG preserves clean edges and is widely accepted by image editors, presentation software, and document tools.",
      "PNG files may be larger than WebP because the formats are optimized for different goals. Use PNG when compatibility and clean raster output matter; use WebP when small website delivery files are the priority.",
    ],
    howTo: [
      "Upload a WebP image from your device.",
      "Review the browser preview.",
      "Convert the WebP file to PNG.",
      "Download the PNG result.",
      "Use the PNG in your editor, document, design project, or upload workflow.",
    ],
    features: [
      "Converts WebP images into PNG files.",
      "Useful when an app or upload form does not support WebP.",
      "Preserves clean edges for screenshots, graphics, and text.",
      "Supports transparency when the browser-decoded source contains it.",
      "Browser-first conversion with no account.",
      "Keeps the original WebP file unchanged.",
    ],
    supportedFormats: "Input is WebP. Output is PNG, a lossless raster format that supports transparency and broad editing compatibility.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Why convert WebP to PNG?", answer: "Convert WebP to PNG when you need compatibility with editors, document tools, or upload forms that do not handle WebP well." },
      { question: "Will PNG be larger than WebP?", answer: "Often yes. WebP is designed for efficient web delivery, while PNG prioritizes lossless output and compatibility." },
      { question: "Does PNG keep transparency?", answer: "PNG supports transparency, so transparent WebP images can usually export with transparency preserved." },
      { question: "Should I use WebP to JPG instead?", answer: "Use JPG for photo compatibility and smaller files. Use PNG for graphics, screenshots, text, or transparency." },
      { question: "Can I convert PNG back to WebP later?", answer: "Yes. Use Image to WebP when you need a smaller website-ready version." },
    ],
  },
  "ico-converter": {
    explanation: [
      "ICO Converter creates icon files from common image sources for favicons, desktop shortcuts, small app assets, and interface prototypes. ICO is a specialized icon format, so the best results come from images that are simple, square, and easy to recognize at very small sizes.",
      "Use this page when you want a quick icon file without opening a full design tool. A logo mark, symbol, product badge, or simplified graphic usually works better than a detailed photograph. If your source image is rectangular, crop or resize it first so the icon has balanced spacing.",
      "This browser-first converter is meant for practical icon generation and testing. For production brand systems, keep your original vector or high-resolution source files and generate icons at all required sizes through your final website or app build process.",
    ],
    howTo: [
      "Upload a PNG, JPG, or supported browser-readable image.",
      "Use a square source image for the cleanest icon output.",
      "Convert the image to ICO.",
      "Download the generated ICO file.",
      "Test the icon in the target website, shortcut, or app workflow.",
    ],
    features: [
      "Creates ICO files from common image formats.",
      "Useful for favicons, shortcuts, and simple app icon assets.",
      "Works best with square, high-contrast artwork.",
      "No account or desktop icon editor is required.",
      "Keeps the source image unchanged.",
      "Can be used after crop, resize, or PNG conversion tools.",
    ],
    supportedFormats: "Input depends on browser image decoding and commonly includes PNG and JPG. Output is ICO. For transparent icons, start from PNG rather than JPG.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "What images work best for ICO conversion?", answer: "Simple square images with strong contrast work best. Detailed photos or tiny text can become hard to recognize." },
      { question: "Can I make a favicon with the ICO Converter?", answer: "Yes. The generated ICO can be used in favicon workflows, though modern sites may also use PNG and SVG favicons." },
      { question: "Should I use PNG or JPG as the source?", answer: "Use PNG for transparent or logo-style icons. JPG can work for photo-based shortcut icons but does not support transparency." },
      { question: "Why does my icon look cropped?", answer: "The source image may not be square or may not have enough padding. Crop or resize it before converting." },
      { question: "Are icon files processed locally?", answer: browserPrivacy },
    ],
  },
  "rotate-image": {
    explanation: [
      "Rotate Image is a simple browser-based tool for fixing sideways or upside-down photos without opening a full editor. Rotation is one of the most common image cleanup tasks, especially for phone photos, scanned pages, product pictures, receipt uploads, and document snapshots that appear in the wrong orientation after being moved between devices.",
      "Use this tool when an image looks correct on your phone but turns sideways after upload, when a scanned page needs to be turned before sharing, or when a product photo needs a quick 90-degree correction. Rotating creates a new exported image, so you can keep the original file as your source.",
      "Rotation changes the pixel layout of the exported image. A 90-degree or 270-degree turn swaps width and height, while a 180-degree turn keeps the same dimensions. After rotating, preview the result before downloading so the subject, text, and edges all face the right direction.",
    ],
    howTo: [
      "Upload a JPG, PNG, or WebP image.",
      "Choose the rotation direction or angle.",
      "Preview the rotated image in the browser.",
      "Download the corrected image file.",
      "Open the result to confirm the orientation is right before uploading it elsewhere.",
    ],
    features: [
      "Rotates images left, right, or 180 degrees.",
      "Useful for phone photos, scans, receipts, and product images.",
      "Preview the corrected orientation before download.",
      "Creates a new output file while keeping the original unchanged.",
      "Browser-based workflow with no account required.",
      "Works well before cropping, resizing, or compressing images.",
    ],
    supportedFormats: "This tool works best with common browser-readable images such as JPG, PNG, and WebP. Output depends on the editor export format used by the page.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Why did my photo upload sideways?", answer: "Some cameras and phones store orientation information as metadata. When another app ignores that metadata, the photo can appear rotated." },
      { question: "Does rotating change image quality?", answer: "The exported file is redrawn through the browser. PNG output preserves exported pixels, while JPG output may use compression." },
      { question: "Will the width and height change?", answer: "A 90-degree or 270-degree rotation swaps width and height. A 180-degree rotation keeps the same dimensions." },
      { question: "Can I rotate scanned documents?", answer: "Yes. Rotation is useful for scanned pages, forms, receipts, and screenshots that need the correct reading direction." },
      { question: "Is the image uploaded to ImageToolkit?", answer: browserPrivacy },
    ],
  },
  "flip-image": {
    explanation: [
      "Flip Image lets you reverse an image horizontally or vertically in the browser. A horizontal flip swaps the left and right sides, while a vertical flip turns the top and bottom around. This is useful for correcting camera previews, preparing design references, matching composition direction, or creating a reflected version of a visual.",
      "Many phone cameras and webcam apps show mirrored previews, which can make text, logos, or objects look backwards after export. This tool helps fix that without a complex editor. It can also be used creatively for layouts, thumbnails, product comparisons, and before-and-after visuals.",
      "Flipping does not crop or stretch the image. It keeps the same pixel dimensions and creates a new exported file with the reversed orientation. If the image contains text, check the preview carefully so the final version is readable.",
    ],
    howTo: [
      "Upload an image from your device.",
      "Choose horizontal flip or vertical flip.",
      "Preview the flipped result.",
      "Download the new image file.",
      "Use crop or resize afterward if the final composition needs adjustment.",
    ],
    features: [
      "Flips images horizontally or vertically.",
      "Helpful for mirrored selfies, webcam captures, and design references.",
      "Keeps the same image dimensions after flipping.",
      "Preview the result before exporting.",
      "Browser-based editing with no sign-in.",
      "Can be combined with rotate, crop, and resize tools.",
    ],
    supportedFormats: "Flip Image supports common browser-readable formats such as JPG, PNG, and WebP. Some advanced formats depend on browser decoding support.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "What is the difference between flip and rotate?", answer: "Flip reverses the image across an axis. Rotate turns the image by an angle such as 90 or 180 degrees." },
      { question: "Will flipping stretch the image?", answer: "No. Flipping reverses the pixels while keeping the same width and height." },
      { question: "Can I fix backwards text?", answer: "Yes. A horizontal flip can correct mirrored text from selfies, webcams, or camera previews." },
      { question: "Does vertical flip turn the image upside down?", answer: "Vertical flip reverses top and bottom. It is different from a 180-degree rotation because left and right are not swapped the same way." },
      { question: "Is my file processed locally?", answer: browserPrivacy },
    ],
  },
  "mirror-image": {
    explanation: [
      "Mirror Image creates a left-to-right reflected version of a photo or graphic. It is closely related to horizontal flipping, but the purpose is often visual: matching a layout direction, creating a mirrored composition, correcting selfie previews, or preparing design material that needs to face the opposite way.",
      "This tool is useful for social thumbnails, profile photos, product shots, craft references, pattern previews, and creative edits where the subject should face a different direction. A mirrored result can also help compare visual balance when designing banners, posts, or presentation images.",
      "Mirroring keeps the same canvas size and does not resize the image. If the image includes text, brand marks, or labels, remember that mirroring will reverse them. For branded graphics, use the preview before downloading to make sure the final image still makes sense.",
    ],
    howTo: [
      "Upload the image you want to mirror.",
      "Apply the mirror effect in the browser.",
      "Check the preview for reversed text or logos.",
      "Download the mirrored image copy.",
      "Use the result in your layout, document, or social post.",
    ],
    features: [
      "Creates a horizontal mirror version of an image.",
      "Useful for selfies, product direction, and creative layout work.",
      "Keeps image dimensions unchanged.",
      "Preview before downloading the mirrored copy.",
      "No account or desktop editor needed.",
      "Original image remains unchanged.",
    ],
    supportedFormats: "Mirror Image works with common browser-readable images such as JPG, PNG, and WebP. Output is generated from the browser canvas.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Is mirror image the same as horizontal flip?", answer: "For most practical image editing, yes. Mirroring creates a left-to-right reflected version of the image." },
      { question: "Will text become backwards?", answer: "Yes. Any visible text or logos will be reversed, so preview carefully before using the final file." },
      { question: "Does mirroring reduce quality?", answer: "The result is exported as a new file from the browser. Use PNG when you want to avoid JPG compression artifacts." },
      { question: "Can I mirror a product photo?", answer: "Yes, but make sure the mirrored direction still represents the product accurately." },
      { question: "Does ImageToolkit upload the image?", answer: browserPrivacy },
    ],
  },
  "resize-canvas": {
    explanation: [
      "Resize Canvas changes the space around an image without stretching the original picture. This is different from normal image resizing: resizing the image changes the subject size, while resizing the canvas changes the surrounding frame. It is useful when you need more padding, a specific artboard size, or a better fit for social media and website layouts.",
      "Use this tool when a photo is too tightly cropped, a logo needs breathing room, a product image needs consistent margins, or an upload form asks for a fixed size but you do not want to distort the subject. Canvas resizing can add space around the image while preserving the original proportions.",
      "A larger canvas may add transparent or solid background space depending on the tool settings and export format. PNG is better when transparency matters, while JPG is better for simple photo-style exports with a solid background.",
    ],
    howTo: [
      "Upload an image from your device.",
      "Set the target canvas width and height.",
      "Choose how the original image should sit within the new canvas.",
      "Preview the added space and alignment.",
      "Download the new canvas-sized image.",
    ],
    features: [
      "Changes the canvas size without stretching the original image.",
      "Useful for padding, framing, and fixed-size layout requirements.",
      "Helps prepare images for social posts, product listings, and documents.",
      "Keeps the subject proportions intact.",
      "Can create space around logos, photos, and graphics.",
      "Browser-based editing with no account.",
    ],
    supportedFormats: "Resize Canvas works with common browser-readable image formats such as JPG, PNG, and WebP. Use PNG when transparent canvas areas are important.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "What is the difference between resize image and resize canvas?", answer: "Resize image changes the picture dimensions and can scale the subject. Resize canvas changes the frame around the subject without stretching it." },
      { question: "Can I add padding around a logo?", answer: "Yes. Increase the canvas size and keep the logo centered to create extra space around it." },
      { question: "Will the image be distorted?", answer: "No. Canvas resizing is designed to change the surrounding area while keeping the original image proportions." },
      { question: "Should I export as PNG or JPG?", answer: "Use PNG for transparency or crisp graphics. Use JPG for photo-style images with a solid background." },
      { question: "Is the canvas resize processed locally?", answer: browserPrivacy },
    ],
  },
  "crop-circle-image": {
    explanation: [
      "Crop Circle Image turns a photo into a round image with a transparent background. It is useful for profile pictures, avatars, team pages, resumes, social accounts, contact cards, community profiles, and website author images where a circular crop looks cleaner than a square image.",
      "A good circle crop depends on the subject placement. Faces, logos, and central objects should have enough space around them so important details are not cut off by the circular edge. If the original image is wide or tall, crop or resize it first for a better centered result.",
      "The output is usually best as PNG because PNG supports transparent corners outside the circle. JPG does not support transparency, so it is not ideal for a true circular image with a clean transparent background.",
    ],
    howTo: [
      "Upload a photo or graphic.",
      "Position the subject inside the circular crop area.",
      "Preview the round image and transparent corners.",
      "Download the result as a PNG when transparency is needed.",
      "Use the circle image as an avatar, profile photo, or website asset.",
    ],
    features: [
      "Creates round profile images and avatars.",
      "Exports transparent corners when using PNG output.",
      "Useful for social media, resumes, team pages, and contact cards.",
      "Helps center faces, logos, and subjects inside a circle.",
      "Browser-based editing with no account required.",
      "Works well with resize and canvas tools for final sizing.",
    ],
    supportedFormats: "Input works best with common image formats such as JPG, PNG, and WebP. PNG output is recommended for transparent corners around the circle.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Why should I download a circle crop as PNG?", answer: "PNG supports transparency, so the corners outside the circle can remain transparent." },
      { question: "Can JPG have transparent corners?", answer: "No. JPG does not support transparency. Use PNG for a real circular crop with transparent corners." },
      { question: "What images work best for circle cropping?", answer: "Centered faces, logos, and simple subjects with enough margin work best." },
      { question: "Can I use this for profile pictures?", answer: "Yes. Circle crops are commonly used for profile pictures, avatars, author photos, and team pages." },
      { question: "Is the photo uploaded to ImageToolkit?", answer: browserPrivacy },
    ],
  },
  "add-watermark": {
    explanation: [
      "Add Watermark lets you place a text watermark on an image directly in your browser. Watermarks are useful for drafts, previews, sample photos, product images, teaching materials, client proofs, and social posts where you want to show ownership, status, or usage limits before sharing the final version.",
      "A good watermark should be visible without ruining the image. Short text, moderate opacity, and careful placement usually work better than large distracting marks. For product listings or portfolio previews, keep the watermark consistent so the image still looks professional.",
      "This tool creates a new exported copy with the watermark applied. Keep your original image unmarked as the master file, especially if you may need to create clean versions, alternate sizes, or final client exports later.",
    ],
    howTo: [
      "Upload the image you want to watermark.",
      "Enter the watermark text.",
      "Adjust placement, size, color, or opacity if available.",
      "Preview the watermarked image.",
      "Download the new image copy.",
    ],
    features: [
      "Adds text watermarks to images.",
      "Useful for previews, drafts, ownership marks, and client proofs.",
      "Creates a separate watermarked output file.",
      "Keeps the original image unchanged.",
      "Browser-based workflow with no account required.",
      "Can be used before resizing or compressing final images.",
    ],
    supportedFormats: "Add Watermark works with common browser-readable image formats such as JPG, PNG, and WebP. Export format may affect transparency and compression.",
    privacyNote: browserPrivacy,
    faqs: [
      { question: "Can I remove a watermark after downloading?", answer: "The downloaded image has the watermark applied to its pixels. Keep the original clean file if you may need an unwatermarked version." },
      { question: "What should I write as a watermark?", answer: "Use a short brand name, website, copyright notice, draft label, or client preview label." },
      { question: "Where should I place a watermark?", answer: "Choose a place that is visible but does not hide important details. Corners or low-opacity centered text are common choices." },
      { question: "Does watermarking protect images completely?", answer: "No watermark is perfect protection, but it can discourage casual reuse and make preview images easier to identify." },
      { question: "Are watermarked images uploaded?", answer: browserPrivacy },
    ],
  },
};

export function getToolContent(slug: string) {
  return toolContentBySlug[slug];
}
