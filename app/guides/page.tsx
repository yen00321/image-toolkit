import type { Metadata } from "next";
import { GuidesContent } from "@/components/GuidesContent";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/site";

const title = "Image Guides";
const description =
  "Read practical image guides about resizing, compression, formats, resolution, social media sizes, and website performance.";
const url = `${siteConfig.url}/guides`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

export default function GuidesPage() {
  const breadcrumbJsonLd = {
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
        item: url,
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url,
    mainEntity: guides.map((guide) => ({
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      url: `${url}#${guide.slug}`,
      articleSection: guide.category,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, collectionJsonLd]) }}
      />
      <GuidesContent />
    </>
  );
}
