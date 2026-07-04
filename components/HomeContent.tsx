"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  FileImage,
  Lock,
  MousePointerClick,
  Search,
  ShieldCheck,
  Upload,
  Zap,
} from "lucide-react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ToolCard } from "@/components/ToolCard";
import {
  getCategoryTools,
  getRecentlyAddedTools,
  getToolsBySlugs,
  popularToolSlugs,
  searchTools,
  toolCategoryGroups,
} from "@/lib/tool-categories";

const trustPoints = [
  { label: "Free", description: "Use practical image tools without creating an account." },
  { label: "Fast", description: "Most tools run instantly with browser Canvas and modern web APIs." },
  { label: "Browser-based", description: "Resize, compress, convert, and edit files directly on your device." },
  { label: "Privacy-friendly", description: "Images are processed locally whenever the browser supports the format." },
];

const contentSections = [
  {
    eyebrow: "Why use ImageToolkit?",
    title: "A focused toolkit for everyday image work",
    icon: MousePointerClick,
    paragraphs: [
      "ImageToolkit is designed for people who need to finish practical image tasks quickly without opening a heavy design app. Many image problems are small but urgent: a website needs a lighter file, a profile photo needs the right dimensions, a form only accepts JPG, or a thumbnail needs a clean crop before publishing. Instead of mixing every feature into one crowded editor, ImageToolkit separates common workflows into clear, single-purpose tools.",
      "This makes the site easier for beginners and faster for repeat users. You can start from a popular tool, browse by category, or search for a specific format or task. Each tool page explains what it does, how to use it, supported formats, privacy behavior, and related tools. That structure gives visitors more context, helps search engines understand the page, and creates a stronger experience for AdSense review because the site provides real guidance instead of only thin utility pages.",
    ],
  },
  {
    eyebrow: "Browser-based privacy",
    title: "Process images locally whenever possible",
    icon: ShieldCheck,
    paragraphs: [
      "Many online image tasks do not require a server upload. Modern browsers can read local files, draw images to Canvas, preview changes, and export new files directly on the user's device. ImageToolkit uses that browser-first approach for resizing, compression, conversion, cropping, filters, social presets, and metadata cleanup whenever the selected format is supported. The original file remains on your device, and the processed result is downloaded as a new copy.",
      "This matters because images can contain personal details, private documents, unpublished product photos, client work, or location-related metadata. Browser-based processing reduces unnecessary transfer and keeps the workflow transparent. Some advanced formats such as HEIC or TIFF still depend on browser and operating system support, and very large files can require more memory, but the product direction stays privacy-friendly: explain the limitation, keep the controls simple, and avoid server processing unless a future feature clearly needs it.",
    ],
  },
  {
    eyebrow: "Supported image formats",
    title: "Work with common web, photo, icon, and document formats",
    icon: FileImage,
    paragraphs: [
      "ImageToolkit supports everyday formats such as JPG, PNG, WebP, SVG, BMP, GIF still frames, AVIF, ICO, and PDF-related workflows through the tools already available on the site. Format support depends on the browser's ability to decode the uploaded file, so some formats behave differently across Chrome, Edge, Safari, and mobile browsers. The tools are built to make this clear: if the browser can render the image, ImageToolkit can usually preview and export a new browser-generated file.",
      "Choosing the right format depends on the use case. JPG is widely accepted and efficient for photos. PNG is useful for graphics, screenshots, and transparency. WebP is often a good choice for modern websites because it can reduce file size while keeping quality high. SVG is common for vector graphics, ICO is still useful for icons, and PDF workflows help connect image files with documents. By organizing tools around these decisions, the site helps users understand why a format matters instead of only offering a button.",
    ],
  },
  {
    eyebrow: "Common use cases",
    title: "Prepare images for websites, social media, forms, and documents",
    icon: Zap,
    paragraphs: [
      "ImageToolkit is useful for website owners preparing faster assets, creators making social media graphics, students combining images into PDFs, marketers resizing campaign visuals, and support teams cleaning screenshots before sharing them. A single photo may need several steps: compress it for performance, convert it to a compatible format, crop it for a thumbnail, resize it for a social platform, and remove metadata before publishing. The category structure makes those next steps easier to find.",
      "The site also supports routine business tasks. Product photos can be resized into consistent dimensions, blog images can be converted to WebP, banners can be prepared for YouTube or LinkedIn, and screenshots can be blurred or cropped before documentation. Because each workflow is browser-based and focused, users can complete these tasks from a laptop, tablet, or phone without installing extra software. The result is a more useful website, not only a collection of small converters.",
    ],
  },
];

const homeFaqs = [
  {
    question: "Are ImageToolkit tools free to use?",
    answer:
      "Yes. ImageToolkit provides free browser-based image tools for resizing, compressing, converting, cropping, and editing common image files.",
  },
  {
    question: "Do my images get uploaded to a server?",
    answer:
      "Most tools process images directly in your browser. Your selected file is handled locally whenever the browser can decode and export the format.",
  },
  {
    question: "Which image formats are supported?",
    answer:
      "Support depends on the tool and browser, but common formats include JPG, PNG, WebP, AVIF, SVG, BMP, GIF still frames, ICO, and PDF workflows.",
  },
  {
    question: "Can I use ImageToolkit on mobile?",
    answer:
      "Yes. The website is responsive and works on modern mobile and desktop browsers, although very large files may process faster on desktop devices.",
  },
  {
    question: "How do I find the right tool?",
    answer:
      "Use the search box or browse categories such as Convert, Resize, Compress, Edit, Social Media, PDF, and Metadata.",
  },
];

export function HomeContent() {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const searchResults = useMemo(() => searchTools(query).slice(0, 8), [query]);
  const popularTools = useMemo(() => getToolsBySlugs(popularToolSlugs), []);
  const recentlyAddedTools = useMemo(() => getRecentlyAddedTools(8), []);

  function focusSearch() {
    searchInputRef.current?.focus();
    searchInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <main>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-18">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand">Free browser-based image tools</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-normal text-ink sm:text-6xl">
              Free Online Image Tools
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Resize, compress, convert, crop, and edit images directly in your browser.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/image-resizer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-extrabold text-white transition hover:bg-brand-dark"
              >
                <Upload className="h-5 w-5" aria-hidden="true" />
                Upload Image
              </Link>
              <button
                type="button"
                onClick={focusSearch}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink transition hover:border-brand hover:text-brand"
              >
                <Search className="h-5 w-5" aria-hidden="true" />
                Search Tools
              </button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point.label} className="flex gap-3 rounded-lg border border-line bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <strong className="text-sm text-ink">{point.label}</strong>
                    <p className="mt-1 text-sm leading-6 text-muted">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <label className="text-sm font-bold text-ink" htmlFor="tool-search">
              Search tools
            </label>
            <div className="mt-3 flex items-center gap-3 rounded-lg border border-line bg-white px-4 shadow-soft">
              <Search className="h-5 w-5 shrink-0 text-muted" aria-hidden="true" />
              <input
                id="tool-search"
                ref={searchInputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && searchResults[0]) {
                    router.push(searchResults[0].href);
                  }
                }}
                placeholder="Search image tools..."
                className="h-14 min-w-0 flex-1 border-0 bg-transparent text-base text-ink outline-none placeholder:text-muted"
              />
            </div>
            <div className="mt-4 rounded-lg border border-line bg-white p-3 shadow-soft">
              {query ? (
                searchResults.length ? (
                  <div className="grid gap-2">
                    {searchResults.map((tool) => (
                      <Link
                        key={tool.slug}
                        href={tool.href}
                        className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-brand-soft hover:text-brand"
                      >
                        <span>{tool.name}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="px-3 py-2 text-sm text-muted">No tools found. Try searching resize, compress, heic, png, webp, or social.</p>
                )
              ) : (
                <div className="grid gap-2">
                  {popularTools.slice(0, 5).map((tool) => (
                    <Link
                      key={tool.slug}
                      href={tool.href}
                      className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-brand-soft hover:text-brand"
                    >
                      <span>{tool.name}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="popular-tools" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand">Popular tools</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink">Start with the tools people use most</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">
            Free, browser-based tools for the most common image tasks: resizing, compression, conversion, cropping, and thumbnails.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} featured />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <AdPlaceholder />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand">Browse by category</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink">Image tools organized by task</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">
            Start with a category instead of scanning every tool. Each section shows up to six useful tools and links to the full category.
          </p>
        </div>

        <div className="mt-8 grid gap-6">
          {toolCategoryGroups.map((category) => {
            const categoryTools = getCategoryTools(category).slice(0, 6);

            return (
              <section key={category.id} className="rounded-lg border border-line bg-white p-5 shadow-soft">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-ink">{category.name}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{category.description}</p>
                  </div>
                  <Link
                    href={category.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-bold text-ink hover:border-brand hover:text-brand"
                  >
                    View All
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryTools.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-brand">Recently added</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink">Newer tools in the toolkit</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recentlyAddedTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        {contentSections.map((section) => {
          const Icon = section.icon;

          return (
            <article key={section.title} className="rounded-lg border border-line bg-white p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-brand">{section.eyebrow}</p>
                  <h2 className="mt-1 text-2xl font-extrabold tracking-normal text-ink">{section.title}</h2>
                </div>
              </div>
              <div className="mt-5 grid gap-4 text-sm leading-7 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-normal text-ink">ImageToolkit FAQ</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {homeFaqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-line bg-white p-5">
              <summary className="cursor-pointer text-base font-bold text-ink">{faq.question}</summary>
              <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
