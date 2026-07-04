import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { siteConfig } from "@/lib/site";

const homeTitle = "Free Online Image Tools";
const homeDescription =
  "Resize, compress, convert, crop, and edit images directly in your browser with free, fast, privacy-friendly online image tools.";
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

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${homeTitle} | ${siteConfig.name}`,
    description: homeDescription,
    url: siteConfig.url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${homeTitle} | ${siteConfig.name}`,
    description: homeDescription,
  },
};

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const webApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    url: siteConfig.url,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    description: homeDescription,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }}
      />
      <HomeContent />
    </>
  );
}
