"use client";

import type { ReactNode } from "react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Faq } from "@/components/Faq";
import { useI18n } from "@/components/LanguageProvider";
import { siteConfig, tools, type ToolInfo } from "@/lib/site";
import Link from "next/link";

type ToolPageShellProps = {
  tool: ToolInfo;
  children: ReactNode;
};

export function ToolPageShell({ tool, children }: ToolPageShellProps) {
  const { t, toolText } = useI18n();
  const text = toolText(tool);
  const howToSteps = tool.howTo ?? [
    `Upload an image for ${tool.name}.`,
    "Adjust the available settings in the browser.",
    "Preview the result before downloading.",
    "Download the finished image file.",
  ];
  const relatedTools = getRelatedTools(tool);
  const pageUrl = `${siteConfig.url}${tool.href}`;
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
      mainEntity: tool.faqs.map((item) => ({
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
      <AdPlaceholder className="mt-7" />
      <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div>{children}</div>
        <AdPlaceholder className="min-h-96 lg:sticky lg:top-24" label={t("sidebarAd")} />
      </div>
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
      <Faq items={tool.faqs} />
      <AdPlaceholder className="mt-10" label={t("articleAd")} />
    </main>
  );
}

function getRelatedTools(tool: ToolInfo) {
  const explicit = tool.relatedSlugs
    ?.map((slug) => tools.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is ToolInfo => Boolean(candidate));

  if (explicit?.length) return explicit.slice(0, 3);

  return tools
    .filter((candidate) => candidate.slug !== tool.slug && candidate.category === tool.category)
    .slice(0, 3);
}
