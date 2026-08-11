import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ResponsiveAd } from "@/components/ads/AdUnits";
import { ToolCard } from "@/components/ToolCard";
import { siteConfig } from "@/lib/site";
import {
  getCategoryTools,
  getToolCategoryGroup,
  toolCategoryGroups,
  type ToolCategoryGroupId,
} from "@/lib/tool-categories";

type CategoryContent = {
  seoTitle: string;
  metaDescription: string;
  intro: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const categoryContent: Record<ToolCategoryGroupId, CategoryContent> = {
  convert: {
    seoTitle: "Free Online Image Converters",
    metaDescription:
      "Convert JPG, PNG, WebP, AVIF, SVG, BMP, GIF, ICO, HEIC, and other image formats online with browser-based ImageToolkit tools.",
    intro: [
      "Image conversion is one of the most common tasks for anyone who works with websites, social media, documents, design files, or online forms. A format that looks perfect in one app may not be accepted by another, and large modern formats are not always supported by older platforms. The Convert tools in ImageToolkit help you move between practical image formats such as JPG, PNG, WebP, AVIF, SVG, BMP, GIF, ICO, HEIC, and TIFF when your browser can decode the source file.",
      "These tools are designed for quick everyday format changes rather than complex server-side processing. You can upload a file, preview it, choose the available export options, and download the converted result directly from the browser. JPG is useful for photos and smaller file sizes, PNG is helpful for crisp graphics and transparency, WebP can improve website performance, and SVG or ICO workflows are useful for icons and interface assets. Some formats, especially HEIC and TIFF, depend on browser support, so the page explains when a file cannot be decoded locally.",
      "For AdSense-friendly and user-friendly quality, this category is organized around real decisions users need to make: compatibility, transparency, file size, and website performance. Use the tools below when a platform rejects your image, when you need a more web-friendly file, or when you want to prepare assets without installing desktop software. ImageToolkit aims to keep conversion simple, transparent, and privacy-friendly by processing files locally whenever possible.",
      "Before choosing a converter, think about where the final image will be used. A photo for a marketplace listing may work best as JPG, a logo or interface screenshot may need PNG, a website hero image may benefit from WebP, and an icon workflow may require ICO or SVG-derived output. Keeping the original file is also important because each export creates a new copy with its own compression, transparency, and compatibility behavior.",
    ],
    faqs: [
      {
        question: "Which image formats can I convert online?",
        answer:
          "ImageToolkit includes converters for JPG, PNG, WebP, AVIF, SVG, BMP, GIF, ICO, HEIC, TIFF, and PDF-related workflows. Exact support depends on the browser's ability to decode the uploaded file.",
      },
      {
        question: "Are converted images uploaded to a server?",
        answer:
          "Most conversion tools run in your browser using local file and Canvas features. The selected image is not uploaded to an ImageToolkit server for these browser-based tools.",
      },
      {
        question: "Why does HEIC or TIFF conversion sometimes fail?",
        answer:
          "HEIC and TIFF decoding depends heavily on browser and operating system support. If the browser cannot read the file, ImageToolkit shows an error instead of uploading it elsewhere.",
      },
      {
        question: "Should I choose JPG, PNG, or WebP?",
        answer:
          "Use JPG for photos and broad compatibility, PNG for transparency or crisp graphics, and WebP for modern websites where smaller file sizes matter.",
      },
      {
        question: "Can I convert images on my phone?",
        answer:
          "Yes. The tools are responsive and work on modern mobile browsers, although very large images usually process faster on a desktop or laptop.",
      },
    ],
  },
  resize: {
    seoTitle: "Free Online Image Resizers",
    metaDescription:
      "Resize images by width, height, canvas size, crop shape, and common publishing presets with free browser-based tools.",
    intro: [
      "Image resizing is more than making a file smaller or larger. The right size affects how an image looks on a website, whether it fits a form upload limit, how quickly it loads, and whether it appears correctly on social platforms. The Resize tools in ImageToolkit focus on practical dimension changes, including custom width and height, canvas resizing, thumbnail preparation, and shape-based cropping for profile images.",
      "A good resize workflow should protect the image from unwanted distortion. That is why the resizing tools include aspect ratio controls and fit, cover, or stretch modes where appropriate. Fit mode keeps the whole image visible inside the target canvas, cover mode fills the target size by cropping overflow, and stretch mode is only useful when exact dimensions matter more than preserving the original proportions. This gives users a clear way to prepare images without guessing what will happen after export.",
      "Use this category when you need website images, profile pictures, thumbnails, square posts, vertical stories, or exact pixel dimensions for a platform. Processing happens in the browser whenever possible, so the workflow stays fast and private. For best results, start with the highest quality source image you have, choose the target size, preview the result, and download a new copy instead of overwriting the original.",
      "Resizing also helps create consistency across a project. Blog thumbnails, product galleries, team headshots, portfolio images, and social posts look more professional when their dimensions follow a predictable system. If you are preparing images for a website, resize them close to the displayed size instead of uploading oversized originals. This can improve layout stability, reduce bandwidth, and make pages feel faster for visitors on mobile networks.",
      "For teams, a shared resizing workflow can also reduce review time. Everyone can export images to the same dimensions before uploading them to a CMS, store, newsletter, or design handoff.",
    ],
    faqs: [
      {
        question: "How do I resize an image without stretching it?",
        answer:
          "Use aspect ratio controls or choose fit or cover mode. Fit preserves the full image, while cover fills the target size by cropping rather than stretching.",
      },
      {
        question: "Can I enter custom width and height?",
        answer:
          "Yes. The Image Resizer lets you type custom dimensions and optionally keep the original aspect ratio.",
      },
      {
        question: "What is the difference between image resize and canvas resize?",
        answer:
          "Image resize changes the image dimensions. Canvas resize changes the surrounding canvas area, which can add space, crop space, or reposition the image.",
      },
      {
        question: "Will resizing reduce quality?",
        answer:
          "Downsizing usually keeps good visual quality, while enlarging a small image can make it look soft. Always start from a high-resolution source when possible.",
      },
      {
        question: "Are resize tools private?",
        answer:
          "The current resize tools process images locally in the browser and do not upload the selected image to an ImageToolkit server.",
      },
    ],
  },
  compress: {
    seoTitle: "Free Online Image Compressors",
    metaDescription:
      "Compress images online, reduce file size, and compare quality settings with browser-based ImageToolkit tools.",
    intro: [
      "Large image files slow down websites, make email attachments harder to send, and can exceed upload limits on forms, marketplaces, and publishing tools. Image compression helps reduce file size while keeping the image visually useful. The Compress category in ImageToolkit focuses on simple browser-based workflows for lowering file size, adjusting quality, and choosing formats that are better suited for web use.",
      "Compression is always a balance between quality and size. JPG compression can greatly reduce photo file sizes, but very low quality settings may create visible artifacts. PNG is better for sharp graphics and transparency, but it is not always the smallest choice for photos. WebP often provides strong compression for modern browsers and websites. ImageToolkit makes these tradeoffs easier by giving you direct tools for compression and related format changes.",
      "This category is useful before uploading product photos, blog images, profile pictures, screenshots, or website assets. Because processing is handled locally in the browser where possible, you can test different output settings without sending the image to a remote server. A good workflow is to keep the original file, export a compressed copy, compare the file size and preview, and choose the smallest version that still looks clean for its intended use.",
      "Compression works best when it is matched to the image type. Detailed photographs usually tolerate JPG or WebP compression well, while screenshots with text may need higher quality to stay readable. Transparent graphics should usually remain PNG or WebP. If an image will be viewed on a high-resolution screen, avoid pushing quality too low. The goal is not simply the smallest possible file, but the smallest file that still serves the page or post well.",
      "For website owners, image compression is one of the simplest performance improvements to apply before publishing. Smaller images can reduce page weight, improve perceived speed, and make repeated content updates easier to manage.",
    ],
    faqs: [
      {
        question: "How does online image compression work?",
        answer:
          "The browser redraws the image and exports a new file with adjusted quality or a more efficient format, reducing the final file size.",
      },
      {
        question: "What quality setting should I use?",
        answer:
          "For photos, start around 70 to 85 percent and compare the preview. Use a higher setting for important visuals and a lower setting when file size matters most.",
      },
      {
        question: "Is WebP better for compression?",
        answer:
          "WebP often creates smaller files than JPG or PNG while keeping good visual quality, especially for websites that target modern browsers.",
      },
      {
        question: "Can compression make PNG files smaller?",
        answer:
          "Sometimes, but photos often compress better as JPG or WebP. PNG is best when transparency or crisp edges are more important than the smallest size.",
      },
      {
        question: "Will my compressed image be uploaded?",
        answer:
          "ImageToolkit's compression workflow is browser-based, so your selected image is processed locally whenever the browser supports it.",
      },
    ],
  },
  edit: {
    seoTitle: "Free Online Image Editors",
    metaDescription:
      "Crop, rotate, flip, watermark, blur, sharpen, adjust color, and apply filters with free browser-based image editing tools.",
    intro: [
      "Small image edits should not always require a full design application. Many users simply need to rotate a photo, crop a screenshot, blur part of an image, add a watermark, sharpen a soft picture, or adjust brightness before publishing. The Edit category collects lightweight browser-based tools for common image adjustments that are quick to understand and easy to repeat.",
      "Each editor is focused on a specific task. This keeps the interface simple and avoids the clutter of a large all-in-one editor. You can crop an image freely, make a circular crop for avatars, rotate or flip orientation, adjust brightness and contrast, change saturation or hue, apply grayscale, sepia, invert, blur, sharpen, or pixelate effects, and export a new image file. These tools are useful for blog graphics, marketplace listings, classroom work, social images, documentation, and simple creative edits.",
      "ImageToolkit's editing tools are designed to keep user control visible: upload, adjust, preview, and download. Processing happens locally in the browser when possible, which supports privacy and speed. For best results, keep a copy of the original image, make one edit at a time, preview carefully, and download the result in the format that matches your use case. This category will continue to grow later, but V2 prioritizes clearer content and better navigation first.",
      "Focused editing tools are also easier for repeat tasks. If you regularly prepare support screenshots, you may only need blur, crop, and resize. If you manage product images, brightness, contrast, sharpen, and watermark tools may matter more. If you create visual posts, filters and pixel effects can help with style. By separating these jobs into clear pages, ImageToolkit makes each action easier to find, understand, and use without a crowded editor interface.",
      "This structure also helps beginners. A single-purpose page teaches what one edit does, shows only the controls needed for that edit, and makes the final download step obvious.",
    ],
    faqs: [
      {
        question: "Can I edit images without installing software?",
        answer:
          "Yes. ImageToolkit provides focused browser-based tools for common edits such as crop, rotate, flip, watermark, blur, sharpen, and color adjustments.",
      },
      {
        question: "Do the edit tools work on mobile?",
        answer:
          "The pages are responsive and work in modern mobile browsers, although fine crop or watermark adjustments may be easier on a larger screen.",
      },
      {
        question: "Can I undo edits?",
        answer:
          "Most tools are designed around previewing and exporting a new file. Keep your original image and reload it if you want to start over.",
      },
      {
        question: "Will editing reduce image quality?",
        answer:
          "The browser exports a new image after editing. JPG output uses compression, while PNG preserves the exported pixels more directly.",
      },
      {
        question: "Are image edits processed privately?",
        answer:
          "The current edit tools process images in the browser whenever possible and do not send selected files to an ImageToolkit server.",
      },
    ],
  },
  "social-media": {
    seoTitle: "Free Social Media Image Resizers",
    metaDescription:
      "Resize images for Instagram, TikTok, YouTube, Facebook, LinkedIn, X, Pinterest, and Discord using browser-based social media presets.",
    intro: [
      "Every social platform has different image size requirements, and those requirements can be frustrating when a photo is cropped incorrectly or rejected during upload. The Social Media tools in ImageToolkit provide common presets for Instagram, TikTok, YouTube, Facebook, LinkedIn, X, Pinterest, and Discord so users can prepare images more quickly for profiles, banners, posts, covers, thumbnails, and vertical formats.",
      "These tools are built around practical dimensions such as square profile pictures, vertical story and short-form video covers, wide channel banners, post previews, and pin-style graphics. Instead of manually calculating aspect ratios, you can choose a preset page, upload an image, select a resize mode, preview the result, and download a copy. Fit mode is useful when you want the full image visible, while cover mode is useful when the final platform slot must be completely filled.",
      "This category is especially useful for creators, small businesses, marketers, streamers, community managers, and anyone who posts across multiple platforms. Because ImageToolkit processes images locally in the browser where possible, the workflow stays fast and privacy-friendly. Platform recommendations can change over time, but the current preset pages cover widely used sizes and provide a clean starting point for preparing consistent social visuals.",
      "A good social media image workflow starts with the destination. A YouTube banner needs a very different shape than an Instagram profile photo, and a Pinterest pin benefits from a taller vertical layout than a Facebook link post. Using a preset tool reduces mistakes and helps keep branding consistent. If important text or faces are near the edge, preview the result carefully and choose fit or cover mode based on whether visibility or full-frame impact matters more.",
      "Consistent sizing also helps when planning campaigns. Preparing assets in batches for each platform can make posts look intentional, reduce last-minute cropping surprises, and make it easier to review variations before publishing across multiple accounts.",
    ],
    faqs: [
      {
        question: "Which social platforms are included?",
        answer:
          "ImageToolkit includes tools for Instagram, TikTok, YouTube, Facebook, LinkedIn, X, Pinterest, and Discord image sizing workflows.",
      },
      {
        question: "Can I prevent social images from stretching?",
        answer:
          "Yes. Use fit or cover mode to preserve the image ratio. Stretch mode should only be used when exact distortion is acceptable.",
      },
      {
        question: "Are platform sizes always current?",
        answer:
          "The tools use common preset sizes, but platforms may update recommendations. ImageToolkit can update presets as platform guidance changes.",
      },
      {
        question: "Can I make profile pictures?",
        answer:
          "Yes. There are profile and avatar tools for Instagram, Facebook, TikTok, LinkedIn, X, and Discord, plus circle crop tools for avatar-style images.",
      },
      {
        question: "Do social media resizers upload my images?",
        answer:
          "The current social resizing tools process selected images in your browser and do not upload them to an ImageToolkit server.",
      },
    ],
  },
  pdf: {
    seoTitle: "Free PDF and Image Tools",
    metaDescription:
      "Convert PDF pages to images or combine images into a PDF with browser-based ImageToolkit PDF tools.",
    intro: [
      "PDF and image workflows often overlap. A user may need to extract a page from a PDF as an image for a presentation, turn screenshots into a simple PDF, or prepare visual documents for sharing. The PDF category in ImageToolkit focuses on lightweight browser-based utilities that connect image files and PDF documents without requiring a full desktop PDF editor.",
      "The PDF to Images tool helps turn document pages into downloadable image outputs, while the Images to PDF tool combines selected image files into a single PDF. These workflows are useful for students, freelancers, support teams, office users, and website owners who need quick document preparation. Because PDFs and images can be large, performance depends on file size, page count, and device power. Large multi-page PDFs may take longer to render than a single-page document.",
      "Privacy is especially important for documents. ImageToolkit aims to keep these workflows browser-first whenever possible, so selected files are handled on your device rather than uploaded for remote processing. As with all browser tools, users should avoid uploading sensitive files to any online service unless they understand how processing works. This category gives a practical starting point for common PDF-image tasks while keeping the interface simple and focused.",
      "When working with PDFs, always consider the final destination. Images extracted from a PDF may be useful for slides, tutorials, previews, or records, while a PDF made from images can be easier to email or archive than a loose folder of files. Image resolution, page order, and file size all affect the result. For important documents, review the output after download to confirm that pages appear in the expected order and are readable at the intended zoom level.",
      "These tools are intentionally practical rather than overloaded. They cover common document-image tasks while keeping the workflow understandable for users who only need a quick conversion.",
    ],
    faqs: [
      {
        question: "Can I convert PDF pages into images?",
        answer:
          "Yes. The PDF to Images tool renders PDF pages in the browser and lets you download image outputs.",
      },
      {
        question: "Can I combine images into one PDF?",
        answer:
          "Yes. The Images to PDF tool lets you select image files and export them together as a PDF document.",
      },
      {
        question: "Do PDF tools work with large files?",
        answer:
          "They can, but large PDFs or many high-resolution images may take more time and memory, especially on mobile devices.",
      },
      {
        question: "Are PDF files uploaded to a server?",
        answer:
          "The current PDF workflows are designed to run in the browser where possible, keeping selected files local to your device.",
      },
      {
        question: "What are PDF image tools useful for?",
        answer:
          "They are useful for extracting document pages, creating simple visual PDFs, sharing screenshots, and preparing image-based documents.",
      },
    ],
  },
  metadata: {
    seoTitle: "Free Image Metadata Tools",
    metaDescription:
      "Remove EXIF metadata from images online with a privacy-friendly browser-based ImageToolkit metadata tool.",
    intro: [
      "Image metadata can include useful technical information, but it can also contain details users may not want to share. Depending on the camera, phone, app, or workflow, a photo may include EXIF metadata such as camera model, capture settings, timestamps, software names, and sometimes location-related information. The Metadata category in ImageToolkit focuses on helping users create cleaner image copies before publishing or sharing files online.",
      "The current metadata workflow removes embedded EXIF-style information by redrawing the image in the browser and exporting a new copy. This is different from directly editing the original file. The exported image keeps the visible pixels but drops metadata that is not part of the rendered image. This approach is simple, practical, and useful before uploading photos to websites, marketplaces, public profiles, support tickets, or shared documents.",
      "Metadata privacy is not only a technical concern; it is also about user confidence. ImageToolkit explains what the tool does, what it does not do, and why browser-based processing matters. Users should still be careful with sensitive images, screenshots, or documents, but a metadata removal step can reduce unnecessary embedded information. This category will remain focused on privacy-friendly image preparation rather than adding complicated features too quickly.",
      "Metadata removal is useful before posting photos publicly, sending images to clients, uploading marketplace listings, or sharing files in communities where the visible image is all that matters. It is not a replacement for careful review of the image itself: private information visible inside the pixels will remain visible. The best practice is to inspect the photo, crop or blur sensitive details when needed, remove metadata, and then share the cleaned copy rather than the original.",
      "For privacy-focused publishing, metadata cleanup can become a normal final step, similar to resizing or compression. It adds reassurance without making the workflow complicated, especially for teams that regularly prepare public images from phones, cameras, design tools, or shared folders.",
    ],
    faqs: [
      {
        question: "What is EXIF metadata?",
        answer:
          "EXIF metadata is embedded information stored in some image files, often including camera settings, timestamps, device details, software data, and sometimes location-related information.",
      },
      {
        question: "How does ImageToolkit remove metadata?",
        answer:
          "The tool redraws the visible image in the browser and exports a new file, which removes metadata that is not part of the rendered pixels.",
      },
      {
        question: "Will metadata removal change the image?",
        answer:
          "The visible image should remain similar, but the exported file is a new image and may use the selected output format and compression settings.",
      },
      {
        question: "Is metadata removal private?",
        answer:
          "The current workflow runs in the browser whenever possible, so the selected image is not uploaded to an ImageToolkit server for metadata removal.",
      },
      {
        question: "Should I remove metadata before sharing photos?",
        answer:
          "It is a good habit for public sharing, especially when you do not want extra camera, software, timestamp, or location-related details included.",
      },
    ],
  },
};

export function generateStaticParams() {
  return toolCategoryGroups.map((category) => ({ category: category.id }));
}

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categoryParam } = await params;
  const category = getToolCategoryGroup(categoryParam);

  if (!category) {
    return {};
  }

  const content = categoryContent[category.id];
  const url = `${siteConfig.url}${category.href}`;
  const categoryTools = getCategoryTools(category);
  const isIndexable = categoryTools.length > 0;

  return {
    title: content.seoTitle,
    description: content.metaDescription,
    keywords: category.keywords,
    robots: {
      index: isIndexable,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${content.seoTitle} | ${siteConfig.name}`,
      description: content.metaDescription,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.seoTitle} | ${siteConfig.name}`,
      description: content.metaDescription,
    },
  };
}

export default async function ToolCategoryPage({ params }: CategoryPageProps) {
  const { category: categoryParam } = await params;
  const category = getToolCategoryGroup(categoryParam);

  if (!category) {
    notFound();
  }

  const content = categoryContent[category.id];
  const categoryTools = getCategoryTools(category);
  const pageUrl = `${siteConfig.url}${category.href}`;
  const relatedCategories = toolCategoryGroups
    .filter((group) => group.id !== category.id && getCategoryTools(group).length > 0)
    .slice(0, 4);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools",
          item: `${siteConfig.url}/tools`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: category.name,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <nav className="text-sm font-semibold text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-brand">
          Home
        </Link>
        <span className="px-2">/</span>
        <span className="text-ink">{category.name}</span>
      </nav>

      <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-brand">ImageToolkit tools</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">
            {content.seoTitle}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{category.description}</p>
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-line bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-extrabold text-ink">About these {category.name.toLowerCase()} tools</h2>
        <div className="mt-5 grid gap-5 text-base leading-8 text-muted">
          {content.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand">
              {categoryTools.length ? `${categoryTools.length} tools` : "Content review mode"}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink">{category.name} tools</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">
            {categoryTools.length
              ? "Choose a tool below, upload your file, preview the result, and download a new image or document output."
              : "This category is being expanded with deeper tool content before it is promoted in search and sitemap navigation."}
          </p>
        </div>
        <ResponsiveAd />
        {categoryTools.length ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTools.map((tool, index) => (
              <div key={tool.slug} className="contents">
                <ToolCard tool={tool} />
                {(index + 1) % 12 === 0 && index + 1 < categoryTools.length ? (
                  <ResponsiveAd className="sm:col-span-2 lg:col-span-3" />
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </section>

      <section className="mt-10 rounded-lg border border-line bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-extrabold text-ink">Related categories</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedCategories.map((related) => (
            <Link
              key={related.id}
              href={related.href}
              className="group rounded-lg border border-line bg-slate-50 p-4 transition hover:border-brand/50 hover:bg-brand-soft"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-bold text-ink">{related.name}</h3>
                <ArrowRight className="h-4 w-4 text-brand transition group-hover:translate-x-0.5" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">{related.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-extrabold text-ink">{category.name} FAQ</h2>
        <div className="mt-4 divide-y divide-line rounded-lg border border-line bg-white">
          {content.faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold text-ink">
                <span>{faq.question}</span>
                <span className="float-right text-muted group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
