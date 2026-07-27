import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { siteConfig } from "@/lib/site";

const faqs = [
  {
    question: "Is ImageToolkit free to use?",
    answer:
      "Yes. ImageToolkit provides free browser-based image tools for resizing, compressing, converting, cropping, and editing common image files. You do not need to create an account to use the current tools.",
  },
  {
    question: "Are my images uploaded to an ImageToolkit server?",
    answer:
      "ImageToolkit is designed to process images locally in your browser whenever the selected format is supported. Your browser reads the file, previews the result, and creates a downloadable copy on your device.",
  },
  {
    question: "Which image formats are supported?",
    answer:
      "Common formats such as JPG, PNG, and WebP work best in modern browsers. Other formats such as AVIF, SVG, BMP, GIF still frames, HEIC, TIFF, ICO, and PDF depend on the specific tool and your browser's decoding support.",
  },
  {
    question: "Why does a file sometimes fail to open?",
    answer:
      "Some image formats depend on browser and operating system support. If a file cannot be decoded locally, try another modern browser, export the image from the original app in JPG or PNG, or use a different source file.",
  },
  {
    question: "Does ImageToolkit change my original file?",
    answer:
      "No. The tools create a new processed download. Your original image remains on your device unless you choose to delete or replace it yourself.",
  },
  {
    question: "Can I use ImageToolkit on mobile?",
    answer:
      "Yes. The site is responsive and works on modern mobile browsers. Very large files may process faster on desktop because image processing uses your device's memory and browser capabilities.",
  },
  {
    question: "Does ImageToolkit use Google Analytics or advertising?",
    answer:
      "The production website may use Google Analytics to understand aggregate site usage and Google AdSense for advertising. These scripts do not change the browser-first design of the image tools.",
  },
  {
    question: "How should I choose between JPG, PNG, and WebP?",
    answer:
      "Use JPG for broad compatibility and photos, PNG for transparency or sharp graphics, and WebP for modern websites where smaller files and performance matter.",
  },
  {
    question: "Can ImageToolkit recover lost image quality?",
    answer:
      "No. Resizing, converting, or compressing cannot restore detail that was already lost in a low-quality source file. Start with the best source image you have, then export a new copy for the final use.",
  },
  {
    question: "How can I contact ImageToolkit?",
    answer:
      "You can contact ImageToolkit at hello@imagetoolkitapp.com for support, feedback, privacy questions, or website issues.",
  },
];

export const metadata: Metadata = {
  title: "ImageToolkit FAQ",
  description:
    "Frequently asked questions about ImageToolkit, browser-based image processing, supported formats, privacy, downloads, and common image workflows.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
  openGraph: {
    title: "ImageToolkit FAQ",
    description:
      "Frequently asked questions about ImageToolkit, browser-based image processing, supported formats, privacy, downloads, and common image workflows.",
    url: `${siteConfig.url}/faq`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ImageToolkit FAQ",
    description:
      "Frequently asked questions about ImageToolkit, browser-based image processing, supported formats, privacy, downloads, and common image workflows.",
  },
};

export default function FaqPage() {
  const pageUrl = `${siteConfig.url}/faq`;
  const structuredData = [
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
          name: "FAQ",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <StaticPageShell
      title="Frequently Asked Questions"
      description="Clear answers about ImageToolkit tools, browser-based processing, supported formats, privacy, and downloads."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="grid gap-6">
        {faqs.map((faq) => (
          <section key={faq.question}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </section>
        ))}
      </div>
    </StaticPageShell>
  );
}
