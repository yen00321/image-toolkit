"use client";

import type { ReactNode } from "react";
import { ResponsiveAd, ToolPageAd } from "@/components/ads/AdUnits";
import { Faq } from "@/components/Faq";
import { useI18n } from "@/components/LanguageProvider";
import { filterToolsForReview } from "@/lib/review-mode";
import { siteConfig, tools, type ToolInfo } from "@/lib/site";
import { getToolContent } from "@/lib/tool-content";
import Link from "next/link";

type ToolPageShellProps = {
  tool: ToolInfo;
  children: ReactNode;
};

export function ToolPageShell({ tool, children }: ToolPageShellProps) {
  const { t, toolText } = useI18n();
  const text = toolText(tool);
  const customContent = getToolContent(tool.slug);
  const howToSteps = customContent?.howTo ?? tool.howTo ?? [
    `Upload an image for ${tool.name}.`,
    "Adjust the available settings in the browser.",
    "Preview the result before downloading.",
    "Download the finished image file.",
  ];
  const enrichedFaqs = getEnrichedFaqs(tool, customContent?.faqs);
  const relatedTools = getRelatedTools(tool);
  const pageUrl = `${siteConfig.url}${tool.href}`;
  const toolExplanation = customContent?.explanation ?? getToolExplanation(tool);
  const keyFeatures = customContent?.features ?? getKeyFeatures(tool);
  const supportedFormats = customContent?.supportedFormats ?? getSupportedFormats(tool);
  const privacyNote = customContent?.privacyNote ?? getPrivacyNote();
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: tool.name,
      description: tool.metaDescription,
      url: pageUrl,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How to use ${tool.name}`,
      description: tool.metaDescription,
      step: howToSteps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        text: step,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: enrichedFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
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
          name: tool.name,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-brand">{t("freeOnlineTool")}</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">{text.name}</h1>
        <p className="mt-4 text-lg leading-8 text-muted">{text.description}</p>
      </div>
      <div className="mt-7">
        {children}
      </div>
      <ToolPageAd />
      <section className="mt-10 grid gap-5 rounded-lg border border-line bg-white p-6 shadow-soft">
        <div>
          <h2 className="text-2xl font-extrabold text-ink">What is this tool?</h2>
          <div className="mt-3 grid gap-4 text-sm leading-7 text-muted">
            {toolExplanation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-10 grid gap-5 rounded-lg border border-line bg-white p-6 shadow-soft">
        <div>
          <h2 className="text-2xl font-extrabold text-ink">How to use {text.name}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Follow these steps to process your image locally in the browser and download the result.
          </p>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2">
          {howToSteps.map((step, index) => (
            <li key={step} className="rounded-lg border border-line bg-slate-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wide text-brand">Step {index + 1}</span>
              <p className="mt-1 text-sm leading-6 text-muted">{step}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg border border-line bg-white p-6 shadow-soft lg:col-span-2">
          <h2 className="text-2xl font-extrabold text-ink">Key features</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {keyFeatures.map((feature) => (
              <li key={feature} className="rounded-lg border border-line bg-slate-50 p-4 text-sm leading-6 text-muted">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-line bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-extrabold text-ink">Supported formats</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{supportedFormats}</p>
        </div>
      </section>
      <section className="mt-10 rounded-lg border border-line bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-extrabold text-ink">Privacy note</h2>
        <p className="mt-3 text-sm leading-7 text-muted">{privacyNote}</p>
      </section>
      <ToolPageAd />
      <ResponsiveAd />
      <section className="mt-10">
        <h2 className="text-2xl font-extrabold text-ink">Related image tools</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedTools.map((relatedTool) => (
            <Link
              key={relatedTool.slug}
              href={relatedTool.href}
              className="rounded-lg border border-line bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-brand/50"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-brand">{relatedTool.category}</span>
              <h3 className="mt-2 text-lg font-bold text-ink">{toolText(relatedTool).name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{toolText(relatedTool).description}</p>
            </Link>
          ))}
        </div>
      </section>
      <Faq items={enrichedFaqs} />
    </main>
  );
}

function getRelatedTools(tool: ToolInfo) {
  const explicit = tool.relatedSlugs
    ?.map((slug) => tools.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is ToolInfo => Boolean(candidate));

  const reviewTools = filterToolsForReview(tools).filter((candidate) => candidate.slug !== tool.slug);
  const explicitFiltered = explicit?.filter((candidate) => reviewTools.some((item) => item.slug === candidate.slug));

  const base = explicitFiltered?.length
    ? explicitFiltered
    : reviewTools.filter((candidate) => candidate.category === tool.category);

  const fallback = reviewTools.filter(
    (candidate) => !base.some((item) => item.slug === candidate.slug),
  );

  return [...base, ...fallback].slice(0, 4);
}

function getToolExplanation(tool: ToolInfo) {
  const taskName = tool.name.toLowerCase();
  const categoryContext =
    tool.category === "convert"
      ? "format compatibility, website publishing, platform upload requirements, and file handoff workflows"
      : tool.category === "resize"
        ? "custom dimensions, layout consistency, thumbnails, profile images, and publishing requirements"
        : tool.category === "compress"
          ? "file size reduction, faster uploads, website performance, and cleaner image delivery"
          : tool.category === "social"
            ? "platform-ready image dimensions, profile visuals, covers, posts, and campaign assets"
            : "quick image editing, visual cleanup, presentation preparation, and everyday creative adjustments";

  return [
    `${tool.name} is a free browser-based image tool for users who need a focused way to handle ${categoryContext}. Instead of opening a heavy desktop editor or uploading a file to a complicated service, you can choose an image from your device, use the controls on this page, preview the result, and download a new copy. The tool is intentionally narrow: it does one practical job and keeps the workflow easy to understand. This makes it useful for creators, marketers, students, developers, store owners, support teams, and anyone who works with images for websites, documents, or social media.`,
    `Use this ${taskName} page when you want a fast result but still need control over the output. The original file should be kept as your source, while ImageToolkit creates a separate exported file for the processed version. Browser support can vary for advanced formats, but common JPG, PNG, WebP, and canvas-based workflows are handled locally whenever possible. The goal is to make routine image preparation feel predictable, privacy-friendly, and simple enough to repeat whenever you need another asset.`,
  ];
}

function getKeyFeatures(tool: ToolInfo) {
  const shared = [
    "Browser-based workflow with no account required.",
    "Preview the result before downloading a new file.",
    "Responsive layout for desktop and mobile browsers.",
    "Focused controls designed for one clear image task.",
    "Works well as part of a larger image preparation workflow.",
  ];

  if (tool.category === "convert") {
    return [
      "Convert between practical image formats when your browser supports the source file.",
      "Useful for compatibility with websites, apps, forms, and publishing platforms.",
      "Creates a downloadable copy while keeping the original file unchanged.",
      ...shared.slice(0, 2),
    ];
  }

  if (tool.category === "resize" || tool.category === "social") {
    return [
      "Prepare images for exact dimensions, presets, or publishing slots.",
      "Use fit, cover, or stretch behavior when available to control image framing.",
      "Helps avoid unwanted distortion by making sizing choices visible.",
      ...shared.slice(0, 2),
    ];
  }

  if (tool.category === "compress") {
    return [
      "Reduce image file size with adjustable output quality.",
      "Compare original and processed size before downloading.",
      "Useful before uploading images to websites, emails, stores, or forms.",
      ...shared.slice(0, 2),
    ];
  }

  return [
    "Apply a focused edit without opening a full design application.",
    "Download a new edited copy while keeping the original image available.",
    "Useful for screenshots, photos, social graphics, product images, and documents.",
    ...shared.slice(0, 2),
  ];
}

function getSupportedFormats(tool: ToolInfo) {
  if (tool.slug.includes("pdf")) {
    return "This tool supports PDF and common browser-readable image formats depending on the workflow. Large PDFs or high-resolution images may take longer to process.";
  }

  if (tool.slug.includes("heic")) {
    return "HEIC support depends on your browser and operating system. Output is available as JPG or PNG when the uploaded HEIC file can be decoded locally.";
  }

  if (tool.slug.includes("tiff")) {
    return "TIFF support depends on browser decoding. When supported, the tool can export the rendered image as JPG or PNG.";
  }

  if (tool.category === "convert") {
    return "Supported formats vary by converter and browser, including JPG, PNG, WebP, AVIF, SVG, BMP, GIF still frames, ICO, HEIC, and TIFF where decoding is available.";
  }

  return "Most tools support common browser-readable image formats such as JPG, PNG, WebP, AVIF, BMP, SVG, and GIF still frames where the browser can decode them.";
}

function getPrivacyNote() {
  return "ImageToolkit is designed to process this task in your browser whenever possible. Your selected image is handled locally for browser-supported formats, so you can preview and download a new file without sending the original image to an ImageToolkit server. Some file types depend on browser decoding support, and very large files may require more device memory, but the product direction remains browser-based and privacy-friendly.";
}

function getEnrichedFaqs(tool: ToolInfo, customFaqs?: Array<{ question: string; answer: string }>) {
  const fallbackFaqs = [
    {
      question: `Is ${tool.name} free to use?`,
      answer: `Yes. ${tool.name} is free to use in your browser without creating an account.`,
    },
    {
      question: `Does ${tool.name} upload my image to a server?`,
      answer:
        "The tool is designed to process images locally in your browser whenever the selected format is supported.",
    },
    {
      question: `Can I use ${tool.name} on mobile?`,
      answer:
        "Yes. The page is responsive and works on modern mobile browsers, although large files may process faster on desktop.",
    },
    {
      question: "Will the original image be changed?",
      answer:
        "No. ImageToolkit exports a new processed file. Your original image on your device is not overwritten.",
    },
    {
      question: "Which formats work best?",
      answer:
        "JPG, PNG, and WebP are the most reliable formats for browser-based image processing. Advanced formats depend on browser support.",
    },
  ];
  const merged = customFaqs?.length ? [...customFaqs] : [...tool.faqs];

  for (const faq of fallbackFaqs) {
    if (merged.length >= 5) break;
    if (!merged.some((item) => item.question === faq.question)) {
      merged.push(faq);
    }
  }

  return merged.slice(0, Math.max(5, merged.length));
}
