import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { LanguageProvider } from "@/components/LanguageProvider";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { GoogleAnalyticsPageView } from "@/components/GoogleAnalytics";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Free Online Image Tools`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const enableAnalytics = process.env.NODE_ENV === "production" && Boolean(gaId);
  const enableAdsense = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <head>
        {enableAdsense ? (
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4691862928355691"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
      </head>
      <body>
        {enableAnalytics ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}', { send_page_view: false });
              `}
            </Script>
            <GoogleAnalyticsPageView measurementId={gaId} />
          </>
        ) : null}
        <LanguageProvider>
          <SiteHeader />
          {children}
          <footer className="border-t border-line bg-white">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 text-sm text-muted sm:px-6 md:grid-cols-4 lg:px-8">
              <div>
                <strong className="text-lg text-ink">ImageToolkit</strong>
                <p className="mt-3 leading-6">Free browser-based image tools for everyday image tasks.</p>
              </div>
              <FooterColumn
                title="Tools"
                links={[
                  ["/tools", "All Tools"],
                  ["/image-resizer", "Image Resizer"],
                  ["/image-compressor", "Image Compressor"],
                ]}
              />
              <FooterColumn
                title="Categories"
                links={[
                  ["/tools/convert", "Convert"],
                  ["/tools/resize", "Resize"],
                  ["/tools/compress", "Compress"],
                  ["/tools/edit", "Edit"],
                ]}
              />
              <FooterColumn
                title="Site"
                links={[
                  ["/guides", "Guides"],
                  ["/faq", "FAQ"],
                  ["/sitemap", "Sitemap"],
                  ["/about", "About"],
                  ["/privacy-policy", "Privacy Policy"],
                  ["/terms", "Terms"],
                  ["/contact", "Contact"],
                ]}
              />
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<[string, string]> }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-extrabold text-ink">{title}</h2>
      <ul className="mt-3 grid gap-2">
        {links.map(([href, label]) => (
          <li key={href}>
            <Link href={href} className="font-semibold hover:text-brand">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
