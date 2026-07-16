"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BookOpen, Clock, Tag } from "lucide-react";
import { guideCategories, guides } from "@/lib/guides";
import { getToolsBySlugs } from "@/lib/tool-categories";

type Filter = (typeof guideCategories)[number];

export function GuidesContent() {
  const [filter, setFilter] = useState<Filter>("All");
  const filteredGuides = useMemo(
    () => (filter === "All" ? guides : guides.filter((guide) => guide.category === filter)),
    [filter],
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="text-sm font-semibold text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-brand">
          Home
        </Link>
        <span className="px-2">/</span>
        <span className="text-ink">Guides</span>
      </nav>

      <section className="mt-8 rounded-lg border border-line bg-white p-6 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-wide text-brand">Image guides</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">
          Practical image guides for better files, faster pages, and cleaner uploads
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
          Learn how image formats, dimensions, compression, resolution, privacy, and social media presets affect real
          publishing workflows. These guides connect directly to ImageToolkit tools so you can read the advice and then
          apply it in your browser.
        </p>
      </section>

      <section className="mt-8">
        <div className="flex flex-wrap gap-2" aria-label="Guide categories">
          {guideCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={[
                "rounded-lg border px-4 py-2 text-sm font-bold transition",
                filter === category
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-white text-ink hover:border-brand hover:text-brand",
              ].join(" ")}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        {filteredGuides.map((guide) => {
          const relatedTools = getToolsBySlugs(guide.relatedToolSlugs);

          return (
            <article id={guide.slug} key={guide.slug} className="rounded-lg border border-line bg-white p-6 shadow-soft">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wide text-muted">
                <span className="inline-flex items-center gap-1 rounded-md bg-brand-soft px-2 py-1 text-brand">
                  <Tag className="h-3.5 w-3.5" aria-hidden="true" />
                  {guide.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {guide.readingTime}
                </span>
              </div>
              <div className="mt-4 flex gap-3">
                <BookOpen className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <h2 className="text-2xl font-extrabold tracking-normal text-ink">{guide.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{guide.description}</p>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="mt-4 inline-flex rounded-lg bg-brand px-4 py-2 text-sm font-extrabold text-white hover:bg-brand-dark"
                  >
                    Read guide
                  </Link>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-wide text-muted">Related tools</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={tool.href}
                      className="rounded-md border border-line px-3 py-1.5 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
                    >
                      {tool.shortName}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
