import type { Metadata } from "next";
import Link from "next/link";
import { guideArticles } from "@/lib/guide-articles";
import { siteConfig } from "@/lib/site";
import { getCategoryTools, toolCategoryGroups } from "@/lib/tool-categories";

const pageUrl = `${siteConfig.url}/sitemap`;
const pageTitle = "ImageToolkit Sitemap";
const pageDescription =
  "Browse the ImageToolkit website map, including image tools, categories, guides, privacy pages, and company information.";

const sitePages = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "All Tools" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
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

export default function HumanSitemapPage() {
  const categories = toolCategoryGroups
    .map((category) => ({
      ...category,
      tools: getCategoryTools(category),
    }))
    .filter((category) => category.tools.length > 0);
  const structuredData = {
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
        name: "Sitemap",
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-brand">Website map</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">
          ImageToolkit Sitemap
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          Use this page to browse every important section of ImageToolkit, including the all-tools
          hub, image tool categories, guide articles, and trust pages.
        </p>
      </section>

      <section className="mt-10 rounded-lg border border-line bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-extrabold text-ink">Main pages</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sitePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-lg border border-line bg-slate-50 p-4 text-sm font-bold text-ink hover:border-brand hover:text-brand"
            >
              {page.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {categories.map((category) => (
          <article key={category.id} className="rounded-lg border border-line bg-white p-6 shadow-soft">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-extrabold text-ink">{category.name} tools</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{category.description}</p>
              </div>
              <Link href={category.href} className="text-sm font-extrabold text-brand hover:text-brand-dark">
                View category
              </Link>
            </div>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {category.tools.map((tool) => (
                <li key={tool.slug}>
                  <Link href={tool.href} className="text-sm font-semibold text-muted hover:text-brand">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-lg border border-line bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-extrabold text-ink">Guides</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          These editorial guides explain image formats, resizing, compression, website performance,
          and social media sizing decisions.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {guideArticles.map((article) => (
            <li key={article.slug}>
              <Link href={`/guides/${article.slug}`} className="font-semibold text-muted hover:text-brand">
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
