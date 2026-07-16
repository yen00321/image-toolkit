import { guides, type GuideInfo } from "@/lib/guides";

export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type GuideArticle = GuideInfo & {
  intro: string[];
  sections: GuideSection[];
  faqs: Array<{ question: string; answer: string }>;
};

const articleContent: Record<string, Omit<GuideArticle, keyof GuideInfo>> = {
  "resize-images-without-losing-quality": {
    intro: [
      "Resizing an image sounds simple, but quality problems usually appear when the new size does not match the source image, the aspect ratio is changed, or the export format is chosen without thinking about the final use. A sharp product photo can become soft, a profile image can look stretched, and a blog thumbnail can load slowly if the dimensions are much larger than needed.",
      "The goal is not only to change width and height. A good resize workflow keeps the subject framed correctly, avoids distortion, uses enough source pixels, and exports a file that fits the publishing context. This guide explains the practical choices that matter before you resize an image online.",
    ],
    sections: [
      {
        heading: "Start with the best source image",
        paragraphs: [
          "A resized image can only preserve detail that exists in the original file. If the source image is already small, blurry, or heavily compressed, enlarging it will not create true new detail. For website banners, product images, and thumbnails, start with the highest-quality source you have, then export a smaller copy for the final use.",
          "Downsizing is usually safer than enlarging. Reducing a 3000 pixel photo to 1200 pixels can still look clean, but increasing a 400 pixel image to 1200 pixels often makes edges and texture look soft. If you need a larger image, try to find the original camera file or design export first.",
        ],
      },
      {
        heading: "Keep the aspect ratio when possible",
        paragraphs: [
          "Aspect ratio is the relationship between width and height. A square image is 1:1, a YouTube thumbnail is commonly 16:9, and many story formats are 9:16. If you type a width and height that do not match the original ratio, the image may stretch unless the tool preserves the ratio or crops the image.",
          "Use a keep-aspect-ratio option for normal resizing. If the final platform requires an exact shape, choose a fit or cover mode. Fit keeps the whole image visible, while cover fills the target size by cropping the edges. This is usually better than stretching faces, logos, or product photos.",
        ],
      },
      {
        heading: "Choose dimensions based on where the image appears",
        paragraphs: [
          "A common mistake is uploading a huge original image when the page only displays it at a small size. If a blog card is 600 pixels wide, a 4000 pixel image wastes bandwidth. Resize close to the display size, leaving some extra resolution if the layout supports high-density screens.",
          "For social media, use the platform-specific preset when available. For websites, think about the container width, image role, and whether the same asset is used on mobile and desktop. Consistent dimensions make galleries, cards, and layouts feel more professional.",
        ],
      },
      {
        heading: "Export a new copy and compare",
        paragraphs: [
          "Never overwrite the original file while testing. Export a resized copy, open it, and check important areas such as text, faces, product edges, and logos. If the image looks soft, try a larger output size or a higher-quality source file.",
          "For photos, JPG or WebP usually works well. For screenshots, graphics, or transparent images, PNG or WebP may be better. The right format depends on whether you care more about compatibility, transparency, or file size.",
        ],
      },
    ],
    faqs: [
      { question: "Does resizing reduce image quality?", answer: "Downsizing usually keeps good quality, but enlarging a small image can make it look soft because the original does not contain enough detail." },
      { question: "How do I resize without stretching?", answer: "Keep the original aspect ratio, or use fit or cover mode when you need an exact final canvas size." },
      { question: "What size should I use for websites?", answer: "Use dimensions close to the displayed size in your layout. Avoid uploading images that are much larger than the space where they appear." },
      { question: "Should I use JPG or PNG after resizing?", answer: "Use JPG for most photos, PNG for graphics or transparency, and WebP when you want modern web-friendly compression." },
      { question: "Can I resize images in the browser?", answer: "Yes. ImageToolkit can resize browser-supported images locally and export a new copy without changing the original file." },
    ],
  },
  "jpg-vs-png": {
    intro: [
      "JPG and PNG are two of the most common image formats, but they solve different problems. Choosing the wrong one can create large files, blurry screenshots, missing transparency, or compatibility problems when uploading images to websites and apps.",
      "The simple rule is that JPG is usually best for photos, while PNG is usually best for graphics, screenshots, and transparency. The details matter, though, especially when performance, text clarity, or background removal is important.",
    ],
    sections: [
      {
        heading: "When JPG is the better choice",
        paragraphs: [
          "JPG uses lossy compression, which means it can reduce file size by discarding some visual information. This works well for photographs because small changes in texture, shadows, and color gradients are often hard to notice. A product photo, blog image, travel picture, or profile photo can often be saved as JPG at a reasonable quality setting.",
          "The main benefit of JPG is compatibility. Almost every website, app, and device can open JPG files. It is a safe choice when a form rejects newer formats or when you need to send images to someone without knowing what software they use.",
        ],
      },
      {
        heading: "When PNG is the better choice",
        paragraphs: [
          "PNG is lossless for the exported pixels and supports transparency. It is useful for logos, icons, screenshots, interface captures, diagrams, and graphics with sharp edges. Text in screenshots often stays clearer in PNG than in heavily compressed JPG.",
          "The tradeoff is file size. PNG can become large for detailed photos because it does not use the same kind of photographic compression as JPG. If you save a large camera photo as PNG, the result may be much bigger without looking meaningfully better.",
        ],
      },
      {
        heading: "Transparency and backgrounds",
        paragraphs: [
          "JPG does not support transparent pixels. If you convert a transparent PNG to JPG, the transparent area must become a solid color, often white. This is fine for many documents and forms, but it is not suitable when you need a logo or cutout to sit on different backgrounds.",
          "If transparency matters, keep PNG or use WebP when the target platform supports it. If transparency does not matter and the image is a photo, JPG is usually smaller and more compatible.",
        ],
      },
      {
        heading: "How to decide quickly",
        paragraphs: [
          "Use JPG for photos, marketplace listings, email attachments, and broad compatibility. Use PNG for screenshots, graphics, transparency, and images with text. If you are building a website, also consider WebP for a smaller modern output.",
          "When in doubt, export both versions and compare file size and visual quality. The best format is the one that looks good enough for the use case while keeping the file practical.",
        ],
      },
      {
        heading: "Common mistakes to avoid",
        paragraphs: [
          "One common mistake is converting every image to PNG because PNG sounds higher quality. That can create very large files for photos without providing a visible benefit. Another mistake is using JPG for logos or graphics that require transparency, which forces a background color and can make the asset harder to reuse.",
          "A better workflow is to decide what the image contains first. If it is a photo, test JPG or WebP. If it is a screenshot, logo, or graphic with transparent areas, start with PNG. If the image is for a website and the platform supports modern formats, compare a WebP version as well. The right decision depends on the destination, not only the file extension.",
        ],
      },
    ],
    faqs: [
      { question: "Is JPG smaller than PNG?", answer: "For photos, JPG is usually much smaller. For simple graphics, PNG may still be efficient." },
      { question: "Does PNG support transparency?", answer: "Yes. PNG supports transparent areas, while JPG does not." },
      { question: "Should screenshots be JPG or PNG?", answer: "PNG is usually better for screenshots because text and sharp interface edges remain clearer." },
      { question: "Can I convert JPG to PNG?", answer: "Yes, but converting JPG to PNG does not restore quality lost during earlier JPG compression." },
      { question: "Can I convert PNG to JPG?", answer: "Yes. Transparent areas will need to be filled with a solid background color." },
    ],
  },
  "png-vs-webp": {
    intro: [
      "PNG and WebP can both be used for web graphics, but they are built for different priorities. PNG is familiar, reliable, and excellent for transparency. WebP is newer and often creates smaller files while keeping strong visual quality.",
      "For websites, the decision usually comes down to performance and compatibility. A PNG may be the safest asset for a logo or screenshot, while a WebP version may load faster for visitors and reduce page weight.",
    ],
    sections: [
      {
        heading: "What PNG does well",
        paragraphs: [
          "PNG is widely supported and preserves sharp pixels well. It is a strong choice for screenshots, line art, interface graphics, logos, and images where transparency matters. Designers and developers often use PNG when they need predictable quality.",
          "PNG can be less efficient for large photos. A detailed image with many colors may create a file that is far larger than a JPG or WebP version. This can slow down websites, especially on mobile connections.",
        ],
      },
      {
        heading: "What WebP does well",
        paragraphs: [
          "WebP supports both lossy and lossless-style workflows, and it can support transparency. In many cases, WebP creates smaller files than PNG while still looking very close to the original. This makes it useful for website images where speed matters.",
          "Modern browsers support WebP well, but some older tools, CMS settings, or upload forms may still reject it. If the destination accepts WebP, it is often worth testing because the file size savings can be significant.",
        ],
      },
      {
        heading: "Website performance considerations",
        paragraphs: [
          "Large images are one of the most common causes of slow pages. Replacing oversized PNG files with WebP versions can reduce bandwidth and improve perceived loading speed. This is especially helpful for hero images, product grids, and repeated thumbnails.",
          "That said, do not convert blindly. For very small icons or simple graphics, the difference may be minor. For critical brand assets, check edges, transparency, and color before publishing the converted file.",
        ],
      },
      {
        heading: "Practical workflow",
        paragraphs: [
          "Keep the original PNG as your source file, then export a WebP copy for the website. Compare the visual result at the size users will actually see. If the WebP looks clean and is smaller, it is a good candidate for publishing.",
          "If a platform does not accept WebP, keep PNG for graphics or convert to JPG for photos. The best workflow is flexible: use each format where it makes sense instead of treating one format as always better.",
        ],
      },
      {
        heading: "What to check before publishing",
        paragraphs: [
          "Before replacing a PNG with WebP, check the image on the actual page where it will appear. Look at transparent edges, small text, icons, gradients, and any area where quality loss would be obvious. A file that looks fine in a preview may look different when placed on a colored background or scaled by a layout.",
          "Also consider who will use the file later. A developer may prefer WebP for production, while a designer may want to keep PNG as a reusable source. The cleanest workflow is to keep the PNG original, publish the optimized WebP where possible, and keep a fallback format available when an older system requires it.",
        ],
      },
    ],
    faqs: [
      { question: "Is WebP better than PNG?", answer: "For website performance, WebP is often smaller. PNG is still excellent for reliable transparency and sharp graphics." },
      { question: "Does WebP support transparency?", answer: "Yes. WebP can support transparency in modern browsers and tools." },
      { question: "Should I replace every PNG with WebP?", answer: "Not always. Test important graphics, logos, and screenshots before replacing them." },
      { question: "Can I convert PNG to WebP online?", answer: "Yes. ImageToolkit can convert browser-supported PNG files to WebP locally." },
      { question: "Can I convert WebP back to PNG?", answer: "Yes. This is useful when an app or workflow requires PNG instead of WebP." },
    ],
  },
  "compress-images-online": {
    intro: [
      "Image compression reduces file size so images upload faster, pages load faster, and storage is easier to manage. The challenge is keeping enough quality that the image still looks clean for its purpose.",
      "A good compression workflow balances file size, dimensions, format, and visual quality. This guide explains how to compress images online without guessing.",
    ],
    sections: [
      {
        heading: "Understand what compression changes",
        paragraphs: [
          "Compression changes how image data is stored. JPG compression removes some visual information, which can create smaller files but may cause artifacts if the quality is too low. PNG is usually lossless for pixels, but it may not be efficient for photos.",
          "WebP often gives strong results for websites because it can reduce file size while keeping good visual quality. The best compression method depends on whether the image is a photo, screenshot, graphic, or transparent asset.",
        ],
      },
      {
        heading: "Resize before compressing",
        paragraphs: [
          "Dimensions have a major impact on file size. A 4000 pixel image will usually remain large even with compression. If the image only appears at 1000 pixels wide on a website, resize it first, then compress the resized copy.",
          "This two-step workflow often produces better results than trying to heavily compress an oversized original. It also helps avoid visible artifacts because the export does not need to discard as much data.",
        ],
      },
      {
        heading: "Choose a practical quality setting",
        paragraphs: [
          "For JPG photos, a quality range around 70 to 85 percent is often a good starting point. Product photos, portraits, and detailed images may need higher quality. Background images, thumbnails, or less important visuals can often use lower settings.",
          "Always preview important details after compression. Look at faces, text, product edges, gradients, and shadows. If you see blocky artifacts or fuzzy text, increase quality or choose a different format.",
        ],
      },
      {
        heading: "Keep original files",
        paragraphs: [
          "Compression should create a new optimized copy, not replace the original. Keeping the source file lets you create future versions for other platforms or sizes without starting from an already compressed image.",
          "This is especially important for business assets. A photo used on a website today may later be needed for a banner, catalog, advertisement, or social campaign.",
        ],
      },
      {
        heading: "Compression checklist",
        paragraphs: [
          "A simple checklist helps avoid over-compression. First, resize the image to a realistic display size. Second, choose the format that fits the content. Third, export with a moderate quality setting. Fourth, compare the result with the original at normal viewing size. Finally, keep the original file in case you need another version later.",
          "This workflow is especially useful for teams that publish many images. If everyone compresses images the same way before upload, the website stays lighter and the visual quality remains consistent. It also reduces the chance of uploading huge camera files directly into a CMS or store platform.",
        ],
      },
    ],
    faqs: [
      { question: "Will compression reduce quality?", answer: "It can, especially with low JPG quality settings. The goal is to find the smallest file that still looks good." },
      { question: "What is a good JPG quality setting?", answer: "Start around 70 to 85 percent and adjust based on the preview and file size." },
      { question: "Should I resize before compressing?", answer: "Yes. Resizing oversized images first often gives better file size savings." },
      { question: "Is WebP good for compression?", answer: "Yes. WebP is often effective for website images in modern browsers." },
      { question: "Can I compress images in my browser?", answer: "Yes. ImageToolkit can compress supported images locally without requiring an account." },
    ],
  },
  "best-image-formats-for-websites": {
    intro: [
      "The best image format for a website depends on what the image contains and how it will be delivered. Photos, icons, logos, screenshots, and animations do not all need the same format.",
      "Choosing formats carefully can improve loading speed, preserve visual quality, and avoid compatibility problems. This guide gives a practical overview for common website use cases.",
    ],
    sections: [
      {
        heading: "Use JPG for photos and broad compatibility",
        paragraphs: [
          "JPG remains a practical format for photographs because it is widely supported and compresses complex images well. It is a good choice for blog photos, product photos, team portraits, and content images when transparency is not needed.",
          "Avoid saving text-heavy screenshots as low-quality JPG because edges can become fuzzy. For photos, test a quality setting that keeps the image clean while reducing file size.",
        ],
      },
      {
        heading: "Use PNG for transparency and sharp graphics",
        paragraphs: [
          "PNG is useful for logos, icons, screenshots, diagrams, and interface graphics. It supports transparency and keeps sharp edges clean. For small graphics, PNG can be simple and reliable.",
          "PNG can become too large for full-size photos. If a PNG photo is slowing down a page, try converting it to WebP or JPG depending on whether transparency is needed.",
        ],
      },
      {
        heading: "Use WebP for modern performance",
        paragraphs: [
          "WebP is often a strong default for modern website images because it can create smaller files than JPG or PNG while keeping good visual quality. It supports transparency and works well in current browsers.",
          "If your CMS or audience includes very old browsers, you may need fallback formats. For most modern sites, WebP is worth testing for product grids, hero images, and repeated thumbnails.",
        ],
      },
      {
        heading: "Use SVG for vector graphics",
        paragraphs: [
          "SVG is ideal for vector logos, simple icons, and illustrations that need to scale cleanly. Because SVG is not pixel-based in the same way as JPG or PNG, it can remain sharp at many sizes.",
          "Do not use SVG for normal photographs. For security and compatibility, also make sure SVG files come from trusted sources and are optimized before publishing.",
        ],
      },
      {
        heading: "Build a format system",
        paragraphs: [
          "A website becomes easier to maintain when image formats follow a system. For example, use WebP for most published photos, SVG for interface icons, PNG for source graphics that require transparency, and JPG when compatibility with external systems matters. This reduces random decisions and keeps performance more predictable.",
          "A format system also helps content editors. Instead of asking which format to use every time, they can follow simple rules based on the image type. The result is a faster site, cleaner media library, and fewer oversized files accumulating over time.",
        ],
      },
    ],
    faqs: [
      { question: "What is the best website image format?", answer: "WebP is often best for performance, JPG is good for photos, PNG is good for transparency, and SVG is best for vector graphics." },
      { question: "Should I use AVIF?", answer: "AVIF can be very efficient, but compatibility and workflow support vary. Test it before making it your only format." },
      { question: "Are GIFs good for websites?", answer: "GIFs are widely recognized but often large for animation. Modern video or WebP alternatives may be better." },
      { question: "Can I convert website images to WebP?", answer: "Yes. ImageToolkit includes browser-based tools for converting supported images to WebP." },
      { question: "Does image format affect SEO?", answer: "Indirectly. Smaller, well-sized images can improve page speed and user experience, which supports better website quality." },
    ],
  },
  "best-image-sizes-for-social-media": {
    intro: [
      "Social media images often fail because the shape is wrong, not because the design is bad. A banner, profile photo, story, thumbnail, and feed post all use different dimensions.",
      "Using the right size helps avoid awkward cropping, stretched images, and important text being cut off. This guide explains how to think about social media image sizes in a practical way.",
    ],
    sections: [
      {
        heading: "Start with the platform and placement",
        paragraphs: [
          "Before resizing, decide exactly where the image will be used. An Instagram square post, Instagram story, YouTube thumbnail, Facebook cover, LinkedIn banner, and Discord avatar all have different aspect ratios.",
          "A single design rarely works everywhere without adjustment. Create separate exports for each important placement instead of forcing one image into every platform.",
        ],
      },
      {
        heading: "Protect important content",
        paragraphs: [
          "Faces, logos, product names, and text should not sit too close to the edge. Many platforms crop images differently across mobile, desktop, previews, and profile displays.",
          "When using cover mode, the image fills the target size but edges may be cropped. When using fit mode, the full image remains visible but may leave padding. Choose based on the image's purpose.",
        ],
      },
      {
        heading: "Use common presets",
        paragraphs: [
          "Common presets save time. For example, YouTube thumbnails are commonly 1280x720, vertical story-style images are often 1080x1920, and square profile images are useful across many platforms.",
          "Presets are not a replacement for previewing. After exporting, open the image and confirm that text is readable and the subject remains centered.",
        ],
      },
      {
        heading: "Keep reusable source files",
        paragraphs: [
          "If you create social graphics often, keep a larger master image or design file. Export platform-specific versions from that source. This prevents quality loss from resizing an already resized image again and again.",
          "A consistent workflow also helps branding. Campaigns look more professional when profile images, covers, thumbnails, and posts follow clean dimensions.",
        ],
      },
      {
        heading: "Review before posting",
        paragraphs: [
          "After resizing, open the exported image before posting. Check whether text is readable, faces are centered, logos are not cropped, and the background still supports the design. Social platforms often show images in several contexts, such as feeds, previews, profile grids, and share cards.",
          "If an image contains important text, leave extra margin around the edges. If it contains a face or product, keep the subject away from corners where platform UI elements may appear. A few seconds of review can prevent a post from looking unfinished after upload.",
        ],
      },
    ],
    faqs: [
      { question: "What size is a YouTube thumbnail?", answer: "A common YouTube thumbnail size is 1280x720, which uses a 16:9 aspect ratio." },
      { question: "What size is an Instagram story?", answer: "A common Instagram story size is 1080x1920, a vertical 9:16 format." },
      { question: "Should profile pictures be square?", answer: "A square source is usually best because many platforms crop profile pictures into a circle." },
      { question: "How do I avoid stretching?", answer: "Use fit or cover mode instead of stretch mode when preparing social media images." },
      { question: "Can I resize social images online?", answer: "Yes. ImageToolkit includes preset tools for several major social platforms." },
    ],
  },
  "convert-heic-to-jpg": {
    intro: [
      "HEIC is common on newer iPhones because it can store high-quality photos with efficient file sizes. The problem is that not every website, form, app, or desktop workflow accepts HEIC files.",
      "Converting HEIC to JPG makes the photo easier to share and upload. The main thing to understand is that browser support for HEIC can vary, so conversion depends on whether your browser can decode the file locally.",
    ],
    sections: [
      {
        heading: "Why HEIC files cause upload problems",
        paragraphs: [
          "Many platforms still expect JPG or PNG files. If you try to upload a HEIC photo to an older system, application form, marketplace, or website builder, it may reject the file even though the image itself is valid.",
          "JPG remains the safest photo format for compatibility. Converting HEIC to JPG is often the fastest way to make an iPhone photo usable in more places.",
        ],
      },
      {
        heading: "Browser support matters",
        paragraphs: [
          "A browser-based converter must first be able to read the HEIC file. Some browsers and operating systems can preview HEIC, while others cannot. If the browser cannot decode it, a local-only web tool should show an error rather than uploading the file somewhere else.",
          "This limitation is not unique to ImageToolkit. HEIC decoding is more complex than JPG or PNG because support depends on the user's device, browser, and system codecs.",
        ],
      },
      {
        heading: "Quality and file size",
        paragraphs: [
          "When converting to JPG, the output uses JPG compression. A high quality setting keeps more detail but creates a larger file. A lower setting reduces size but may introduce artifacts, especially in skies, shadows, and fine textures.",
          "For important photos, choose a higher quality setting first. For quick form uploads where size matters, test a smaller output and make sure the image still looks acceptable.",
        ],
      },
      {
        heading: "Keep the original HEIC",
        paragraphs: [
          "The converted JPG should be treated as a copy. Keep the original HEIC file if you may need the best source later. This is helpful if you want to make another export, edit the image, or preserve the original phone photo.",
          "If the destination accepts PNG and you need a lossless-style output for rendered pixels, HEIC to PNG may also be useful. For most sharing and upload workflows, JPG is the practical choice.",
        ],
      },
      {
        heading: "Troubleshooting HEIC conversion",
        paragraphs: [
          "If a HEIC file does not open in a browser-based converter, try a different modern browser or export the photo from the original device as JPG. On some devices, changing camera settings can also save future photos in a more compatible format. This is useful if you often upload images to older websites or business systems.",
          "If conversion works but the file is too large, resize the JPG after conversion or lower the JPG quality slightly. If the image is for a form, check the form's file size limit before uploading. A compatible file is only useful if it also fits the size requirements of the destination.",
        ],
      },
    ],
    faqs: [
      { question: "Why convert HEIC to JPG?", answer: "JPG is accepted by more websites, forms, apps, and devices than HEIC." },
      { question: "Can every browser convert HEIC?", answer: "No. HEIC support depends on the browser and operating system." },
      { question: "Will JPG reduce quality?", answer: "JPG uses lossy compression, so use a higher quality setting for important photos." },
      { question: "Should I delete the HEIC original?", answer: "No. Keep the original if you may need a higher-quality source later." },
      { question: "Can I convert HEIC to PNG instead?", answer: "Yes, when your browser can decode the HEIC file and PNG output is supported." },
    ],
  },
  "reduce-image-file-size": {
    intro: [
      "Reducing image file size can make uploads faster, websites lighter, and documents easier to share. The best method is not always compression alone. Dimensions, format, metadata, and quality settings all affect final size.",
      "This guide explains a practical sequence for making image files smaller while keeping them useful for publishing, forms, email, and websites.",
    ],
    sections: [
      {
        heading: "Check dimensions first",
        paragraphs: [
          "Large pixel dimensions are one of the biggest reasons image files are heavy. A photo from a phone or camera may be several thousand pixels wide, even if it will only appear as a small card or profile image.",
          "Resize the image close to the size you actually need. This often reduces file size dramatically before any compression setting is changed.",
        ],
      },
      {
        heading: "Use the right format",
        paragraphs: [
          "Photos usually become smaller as JPG or WebP. Screenshots and graphics may need PNG or WebP to keep text and sharp edges clear. Transparent images should not be converted to JPG unless a solid background is acceptable.",
          "If a platform accepts WebP, test it. WebP can be a strong choice for modern websites because it often keeps good quality at smaller file sizes.",
        ],
      },
      {
        heading: "Adjust quality carefully",
        paragraphs: [
          "Quality settings are useful, but aggressive compression can damage the image. Lower quality may create blocky areas, fuzzy text, or rough gradients. Start with a moderate setting and compare the output.",
          "The goal is not to make the smallest possible file at any cost. The goal is to create the smallest file that still looks appropriate for the use case.",
        ],
      },
      {
        heading: "Remove unnecessary metadata",
        paragraphs: [
          "Some images contain metadata such as camera information, software names, timestamps, or location-related data. Removing metadata can slightly reduce file size and improve privacy before sharing.",
          "Metadata removal will not reduce the visible pixel dimensions, but it is a useful final cleanup step, especially for public uploads and shared documents.",
        ],
      },
      {
        heading: "Combine methods for better results",
        paragraphs: [
          "The best file size reduction usually comes from combining methods. For example, resize a large photo to the correct dimensions, convert it to WebP or JPG, choose a reasonable quality setting, and remove metadata. Each step may save some file size, and together they can make a large difference.",
          "Avoid applying the same method repeatedly to the same file. Compressing an already compressed JPG again can reduce quality quickly. Keep the original source file, then create optimized exports from that source whenever you need a different size or format.",
        ],
      },
    ],
    faqs: [
      { question: "What is the fastest way to reduce image size?", answer: "Resize oversized images first, then compress or convert to a more efficient format." },
      { question: "Does changing format reduce size?", answer: "Often yes. JPG or WebP can be smaller than PNG for photos." },
      { question: "Does metadata affect file size?", answer: "Sometimes. Removing metadata may reduce size slightly and can improve privacy." },
      { question: "Can file size be reduced without quality loss?", answer: "Some optimization is possible, but large reductions usually involve resizing, compression, or format changes." },
      { question: "Can ImageToolkit reduce image file size?", answer: "Yes. Use the compressor, resizer, WebP converter, and metadata removal tools together." },
    ],
  },
  "image-resolution-guide": {
    intro: [
      "Image resolution is often misunderstood. People use terms like pixels, DPI, dimensions, and quality as if they mean the same thing, but they affect different parts of an image workflow.",
      "For online images, pixel dimensions matter more than print DPI. Understanding this helps you resize images correctly, avoid blurry exports, and choose the right size for websites and social media.",
    ],
    sections: [
      {
        heading: "Pixels are the real digital size",
        paragraphs: [
          "A digital image is made of pixels. An image that is 1200x800 pixels has 1200 pixels across and 800 pixels down. This is the practical size that matters for websites, screens, thumbnails, and social media.",
          "More pixels can hold more detail, but they also increase file size. The right resolution is the one that fits the display need without being unnecessarily large.",
        ],
      },
      {
        heading: "DPI is mostly a print concept",
        paragraphs: [
          "DPI means dots per inch and is mainly relevant when printing. A 1200x800 image is still 1200x800 pixels whether the metadata says 72 DPI or 300 DPI. The DPI value can affect print size, but it does not magically change the number of pixels.",
          "For websites, focus on pixel dimensions. If a site asks for 1000x1000 pixels, changing DPI alone will not satisfy that requirement.",
        ],
      },
      {
        heading: "Resolution and sharpness",
        paragraphs: [
          "An image looks sharp when it has enough pixels for the space where it appears. If a 400 pixel image is stretched across a 1200 pixel container, it will look soft. If a 3000 pixel image is displayed at 600 pixels, it may look sharp but waste bandwidth.",
          "High-density screens can benefit from slightly larger images, but that does not mean every image should be uploaded at full camera size.",
        ],
      },
      {
        heading: "Aspect ratio matters too",
        paragraphs: [
          "Resolution is not only about total pixels. The shape of the image matters. A 1200x1200 square image and a 1200x675 wide image both have useful roles, but they fit different layouts.",
          "Before resizing, identify both the needed dimensions and the needed aspect ratio. This prevents stretching and awkward cropping.",
        ],
      },
      {
        heading: "How resolution affects workflow",
        paragraphs: [
          "Resolution decisions should happen before editing and exporting. If you crop an image too tightly and then enlarge it later, the result may look soft. If you keep a larger source version, you can create several exports for thumbnails, banners, and social posts without losing flexibility.",
          "For websites, resolution also affects performance. A high-resolution original is useful for editing, but the published version should match the layout. This is why many teams keep source images separately from optimized web exports.",
        ],
      },
    ],
    faqs: [
      { question: "What is image resolution?", answer: "For digital images, resolution usually means pixel dimensions such as 1200x800." },
      { question: "Does DPI matter online?", answer: "Not much. Pixel dimensions matter more for websites and screens." },
      { question: "Why does my image look blurry?", answer: "It may be displayed larger than its pixel dimensions can support, or it may have been compressed too much." },
      { question: "Should I upload the largest image possible?", answer: "No. Use dimensions that match the display need to avoid slow pages." },
      { question: "Can resizing change resolution?", answer: "Yes. Resizing changes the pixel dimensions of the exported image." },
    ],
  },
  "make-images-load-faster-on-websites": {
    intro: [
      "Images often make up a large part of a webpage's total weight. Slow image loading can hurt user experience, increase bounce rates, and make a site feel less professional.",
      "The good news is that many image performance improvements are simple: use better dimensions, compress carefully, choose modern formats, and avoid uploading files that are much larger than needed.",
    ],
    sections: [
      {
        heading: "Resize images before publishing",
        paragraphs: [
          "Do not rely only on CSS to shrink huge images. If a page displays an image at 800 pixels wide, uploading a 4000 pixel file forces users to download extra data they may never see.",
          "Create exported versions that match your layout. This is especially important for repeated images such as product cards, blog thumbnails, and gallery grids.",
        ],
      },
      {
        heading: "Compress with the content in mind",
        paragraphs: [
          "Photos can usually be compressed more than screenshots with text. A low-quality photo may still look acceptable, but low-quality text can become hard to read. Choose compression settings based on what the image contains.",
          "Preview the final image at the size users will see. If it looks clean, the file is probably good enough. If it looks damaged, raise quality or use another format.",
        ],
      },
      {
        heading: "Use WebP where it fits",
        paragraphs: [
          "WebP can reduce file size for many website images while keeping good visual quality. It is a practical option for modern websites, especially when replacing large PNG or JPG files.",
          "Keep source files and fallbacks when needed. Some older workflows may still require JPG or PNG, but WebP is a strong format to test for public pages.",
        ],
      },
      {
        heading: "Build a repeatable workflow",
        paragraphs: [
          "Website image performance is easier when it becomes a habit. Resize first, compress second, choose the right format, remove unnecessary metadata, and then upload the optimized copy.",
          "This workflow reduces page weight without needing complex engineering changes. It also helps non-technical content editors publish better images consistently.",
        ],
      },
      {
        heading: "Measure and maintain",
        paragraphs: [
          "After optimizing images, check important pages on both desktop and mobile. Look for large hero images, product grids, blog thumbnails, and repeated logos. These are often the areas where image weight adds up quickly. A single optimized image helps, but a consistent media library helps much more.",
          "Image performance is not a one-time task. New content can slowly make a site heavy again if editors upload full-size photos. Create a simple publishing rule: resize to the right dimensions, compress, choose the right format, then upload. That rule keeps the site fast as it grows.",
        ],
      },
    ],
    faqs: [
      { question: "Why do images slow down websites?", answer: "Large dimensions and heavy file sizes require more data to download and render." },
      { question: "Should I resize images before upload?", answer: "Yes. Resize images close to the size they will appear on the page." },
      { question: "Is WebP good for faster pages?", answer: "Often yes. WebP can create smaller files for many website images." },
      { question: "Does compression hurt SEO?", answer: "Good compression can help performance. Over-compression that damages user experience should be avoided." },
      { question: "What is a simple image optimization workflow?", answer: "Resize, compress, choose the right format, remove metadata if needed, and upload the optimized copy." },
    ],
  },
};

export const guideArticles: GuideArticle[] = guides.map((guide) => ({
  ...guide,
  ...articleContent[guide.slug],
}));

export function getGuideArticle(slug: string) {
  return guideArticles.find((article) => article.slug === slug);
}
