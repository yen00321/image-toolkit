"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, Search } from "lucide-react";
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

const badges = ["Free", "Fast", "Browser-based", "Privacy-friendly"];

const whyItems = [
  {
    title: "Free tools",
    description: "Resize, compress, convert, crop, and edit images without paying or installing extra software.",
  },
  {
    title: "Browser-based processing",
    description: "Most tools work directly in your browser, keeping everyday image tasks fast and local.",
  },
  {
    title: "No account required",
    description: "Open a tool, upload an image, preview the result, and download a new file right away.",
  },
];

const homeFaqs = [
  {
    question: "Are ImageToolkit tools free?",
    answer: "Yes. The tools are free to use and do not require an account.",
  },
  {
    question: "Are my images uploaded?",
    answer:
      "Most tools process images locally in your browser whenever the selected format is supported.",
  },
  {
    question: "How do I find a tool?",
    answer:
      "Use the search box or choose a category such as Convert, Resize, Compress, Edit, Social Media, PDF, or Metadata.",
  },
];

export function HomeContent() {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const searchResults = useMemo(() => searchTools(query).slice(0, 8), [query]);
  const popularTools = useMemo(() => getToolsBySlugs(popularToolSlugs).slice(0, 6), []);
  const recentlyAddedTools = useMemo(() => getRecentlyAddedTools(4), []);

  return (
    <main>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-18">
          <p className="text-sm font-bold uppercase tracking-wide text-brand">Free browser-based image tools</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-normal text-ink sm:text-6xl">
            Free Online Image Tools
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            Resize, compress, convert, crop, and edit images directly in your browser.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {badges.map((badge) => (
              <span key={badge} className="rounded-full border border-line bg-slate-50 px-3 py-1 text-sm font-bold text-muted">
                {badge}
              </span>
            ))}
          </div>

          <div className="relative mx-auto mt-8 max-w-2xl text-left">
            <label className="sr-only" htmlFor="tool-search">
              Search image tools
            </label>
            <div className="flex items-center gap-3 rounded-lg border border-line bg-white px-4 shadow-soft">
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
            {query ? (
              <div className="absolute left-0 right-0 z-10 mt-2 rounded-lg border border-line bg-white p-2 shadow-soft">
                {searchResults.length ? (
                  <div className="grid gap-1">
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
                  <p className="px-3 py-2 text-sm text-muted">No tools found. Try resize, compress, png, webp, heic, or social.</p>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <AdPlaceholder />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand">Categories</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink">Choose what you need to do</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">
            Start from a category, then open the exact tool for your image task.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {toolCategoryGroups.map((category) => {
            const count = getCategoryTools(category).length;

            return (
              <Link
                key={category.id}
                href={category.href}
                className="group flex min-h-44 flex-col rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-ink">{category.name}</h3>
                    <p className="mt-1 text-sm font-bold text-brand">{count} tools</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-brand transition group-hover:translate-x-1" aria-hidden="true" />
                </div>
                <p className="mt-4 flex-1 text-sm leading-6 text-muted">{category.description}</p>
                <span className="mt-4 text-sm font-extrabold text-brand">View tools</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="popular-tools" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand">Popular tools</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink">Most used image tools</h2>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-brand">Recently added</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink">Latest tools</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recentlyAddedTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-wide text-brand">Why use ImageToolkit?</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink">Simple tools, clean workflow</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {whyItems.map((item) => (
            <article key={item.title} className="rounded-lg border border-line bg-white p-5 shadow-soft">
              <CheckCircle2 className="h-5 w-5 text-brand" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-extrabold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-normal text-ink">FAQ</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
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
