"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Lock, Search, Sparkles, Zap } from "lucide-react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ToolCard } from "@/components/ToolCard";
import {
  getCategoryTools,
  getToolsBySlugs,
  popularToolSlugs,
  recentlyAddedToolSlugs,
  searchTools,
  toolCategoryGroups,
} from "@/lib/tool-categories";

const trustPoints = [
  { label: "Free", description: "Use practical image tools without creating an account." },
  { label: "Fast", description: "Most tools run instantly with browser Canvas and modern web APIs." },
  { label: "Browser-based", description: "Resize, compress, convert, and edit files directly on your device." },
  { label: "Privacy-friendly", description: "Images are processed locally whenever the browser supports the format." },
];

const whyUseItems = [
  "Organized image tools for daily website, social media, and document workflows.",
  "No heavy software required for common image resizing, compression, conversion, and editing tasks.",
  "Consistent tool pages make it easier to compare formats, export options, and privacy behavior.",
  "Designed for creators, marketers, students, developers, and business users who need quick image fixes.",
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
  const [query, setQuery] = useState("");
  const searchResults = useMemo(() => searchTools(query).slice(0, 12), [query]);
  const popularTools = useMemo(() => getToolsBySlugs(popularToolSlugs), []);
  const recentlyAddedTools = useMemo(() => getToolsBySlugs(recentlyAddedToolSlugs), []);

  return (
    <main>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-18">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand">Free browser-based image tools</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-normal text-ink sm:text-6xl">
              Free Online Image Tools
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Resize, compress, convert, crop, and edit images directly in your browser.
            </p>
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
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search image tools..."
                className="h-14 min-w-0 flex-1 border-0 bg-transparent text-base text-ink outline-none placeholder:text-muted"
              />
            </div>
            {query ? (
              <div className="mt-4 rounded-lg border border-line bg-white p-3 shadow-soft">
                {searchResults.length ? (
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
                  <p className="px-3 py-2 text-sm text-muted">No tools found for this search.</p>
                )}
              </div>
            ) : (
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-line bg-white p-4">
                  <Zap className="h-5 w-5 text-brand" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold text-ink">Quick workflows</p>
                  <p className="mt-1 text-sm leading-6 text-muted">Find common resizing, conversion, and social presets fast.</p>
                </div>
                <div className="rounded-lg border border-line bg-white p-4">
                  <Lock className="h-5 w-5 text-brand" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold text-ink">Local processing</p>
                  <p className="mt-1 text-sm leading-6 text-muted">Your files stay on your device for browser-supported tools.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <AdPlaceholder />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ToolCollection title="Popular Tools" eyebrow="Most used" tools={popularTools} />
          <ToolCollection title="Recently Added" eyebrow="New workflows" tools={recentlyAddedTools} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-brand">Why use ImageToolkit</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink">Simple image work without extra friction</h2>
          <p className="mt-4 text-base leading-7 text-muted">
            ImageToolkit is built for quick, practical image tasks: preparing website assets, shrinking large files,
            converting formats, making social media graphics, and cleaning image metadata. The goal is to keep each
            tool focused, predictable, and easy to use on both desktop and mobile.
          </p>
        </div>
        <div className="grid gap-3">
          {whyUseItems.map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-line bg-white p-4">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <p className="text-sm leading-6 text-muted">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-brand">Browser-based privacy</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink">Your images stay local whenever possible</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Many online image tasks do not need a server upload. ImageToolkit uses browser features like Canvas,
              file inputs, and local previews so common image processing can happen on your own device. Some advanced
              formats depend on browser support, but the product direction is privacy-friendly by default.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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

function ToolCollection({ title, eyebrow, tools }: { title: string; eyebrow: string; tools: ReturnType<typeof getToolsBySlugs> }) {
  return (
    <section>
      <p className="text-sm font-bold uppercase tracking-wide text-brand">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink">{title}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
