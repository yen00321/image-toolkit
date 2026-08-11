import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ToolCard } from "@/components/ToolCard";
import { Faq } from "@/components/Faq";
import { siteConfig } from "@/lib/site";
import { getCategoryTools, toolCategoryGroups } from "@/lib/tool-categories";

const pageUrl = `${siteConfig.url}/tools`;
const pageTitle = "All Free Online Image Tools";
const pageDescription =
  "Browse every ImageToolkit tool for resizing, compressing, converting, cropping, editing, social media images, PDF workflows, and metadata cleanup.";

const faqs = [
  {
    question: "What can I do with ImageToolkit tools?",
    answer:
      "You can resize, compress, crop, convert, edit, prepare social media images, work with PDF image tasks, and remove image metadata using focused browser-based tools.",
  },
  {
    question: "Are all tools free?",
    answer:
      "Yes. The current ImageToolkit tools are free to use and do not require an account.",
  },
  {
    question: "Do the tools upload my images?",
    answer:
      "ImageToolkit is designed around browser-based processing whenever the selected file type is supported, so common image tasks can run locally on your device.",
  },
  {
    question: "Which tool should I start with?",
    answer:
      "Use Image Resizer for custom dimensions, Image Compressor for smaller files, Convert tools for format changes, and Social Media tools for platform presets.",
  },
  {
    question: "Can I use these tools on mobile?",
    answer:
      "Yes. The site is responsive and works in modern mobile browsers, though very large files usually process faster on a desktop or laptop.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
  },
};

export default function ToolsPage() {
  const categories = toolCategoryGroups
    .map((category) => ({
      ...category,
      tools: getCategoryTools(category),
    }))
    .filter((category) => category.tools.length > 0);
  const allTools = Array.from(
    new Map(categories.flatMap((category) => category.tools).map((tool) => [tool.slug, tool])).values(),
  );
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: `${siteConfig.name} Tools`,
      url: pageUrl,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      description: pageDescription,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
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
          name: "Tools",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-brand">ImageToolkit tools</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">
          All Free Online Image Tools
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          Browse focused browser-based tools for everyday image tasks. Choose a category, open a tool,
          upload an image, preview the result, and download a new file without creating an account.
        </p>
      </section>

      <section className="mt-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand">Categories</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink">Browse by task</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">
            Each category groups tools by the job users usually need to complete: conversion, sizing,
            compression, editing, social publishing, PDF workflows, or privacy cleanup.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group flex min-h-40 flex-col rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-extrabold text-ink">{category.name}</h3>
                  <p className="mt-1 text-sm font-bold text-brand">{category.tools.length} tools</p>
                </div>
                <ArrowRight className="h-5 w-5 text-brand transition group-hover:translate-x-1" aria-hidden="true" />
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-muted">{category.description}</p>
              <span className="mt-4 text-sm font-extrabold text-brand">View category</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand">{allTools.length} tools</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-normal text-ink">All available tools</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">
            These are the tool pages currently exposed for indexing because they include expanded,
            task-specific content and clear browser-based privacy notes.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <Faq items={faqs} />
    </main>
  );
}
