import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { getGuideArticle, guideArticles } from "@/lib/guide-articles";
import { siteConfig } from "@/lib/site";
import { getToolsBySlugs } from "@/lib/tool-categories";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guideArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getGuideArticle(slug);

  if (!article) return {};

  const url = `${siteConfig.url}/guides/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${article.title} | ${siteConfig.name}`,
      description: article.description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${siteConfig.name}`,
      description: article.description,
    },
  };
}

export default async function GuideArticlePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const article = getGuideArticle(slug);

  if (!article) {
    notFound();
  }

  const url = `${siteConfig.url}/guides/${article.slug}`;
  const relatedTools = getToolsBySlugs(article.relatedToolSlugs);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      url,
      articleSection: article.category,
      author: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      mainEntityOfPage: url,
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
          name: "Guides",
          item: `${siteConfig.url}/guides`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((faq) => ({
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
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <nav className="text-sm font-semibold text-muted" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-brand">
          Home
        </Link>
        <span className="px-2">/</span>
        <Link href="/guides" className="hover:text-brand">
          Guides
        </Link>
        <span className="px-2">/</span>
        <span className="text-ink">{article.title}</span>
      </nav>

      <article className="mt-8 rounded-lg border border-line bg-white p-6 shadow-soft sm:p-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wide text-muted">
          <span className="inline-flex items-center gap-1 rounded-md bg-brand-soft px-2 py-1 text-brand">
            <Tag className="h-3.5 w-3.5" aria-hidden="true" />
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readingTime}
          </span>
        </div>

        <h1 className="mt-5 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">{article.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted">{article.description}</p>

        <section className="mt-8 rounded-lg border border-line bg-slate-50 p-5">
          <h2 className="text-xl font-extrabold text-ink">Table of Contents</h2>
          <ol className="mt-4 grid gap-2 text-sm font-semibold text-muted">
            {article.sections.map((section) => (
              <li key={section.heading}>
                <a className="hover:text-brand" href={`#${slugify(section.heading)}`}>
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-8 grid gap-5 text-base leading-8 text-muted">
          {article.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {article.sections.map((section) => (
          <section key={section.heading} id={slugify(section.heading)} className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-extrabold text-ink">{section.heading}</h2>
            <div className="mt-4 grid gap-5 text-base leading-8 text-muted">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-10 rounded-lg border border-line bg-slate-50 p-5">
          <h2 className="text-2xl font-extrabold text-ink">Recommended tools for this guide</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Use these browser-based tools to apply the ideas from this guide. Each tool opens in its
            own page, processes supported files locally, and creates a downloadable copy.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {relatedTools.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.href}
                className="group rounded-lg border border-line bg-white p-4 hover:border-brand"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-brand">{tool.category}</span>
                <h3 className="mt-2 font-extrabold text-ink group-hover:text-brand">{tool.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{tool.description}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-brand">
                  Open tool
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-extrabold text-ink">FAQ</h2>
          <div className="mt-4 divide-y divide-line rounded-lg border border-line">
            {article.faqs.map((faq) => (
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
      </article>
    </main>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
