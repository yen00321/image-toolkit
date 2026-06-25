import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { LanguageProvider } from "@/components/LanguageProvider";
import { FooterTextClient } from "@/components/FooterTextClient";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

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
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <SiteHeader />
          {children}
          <footer className="border-t border-line bg-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:px-6 lg:px-8">
              <strong className="text-ink">Image Toolkit</strong>
              <FooterText />
              <nav className="flex flex-wrap gap-x-5 gap-y-2 font-semibold" aria-label="Footer">
                <Link href="/about" className="hover:text-brand">
                  About
                </Link>
                <Link href="/privacy-policy" className="hover:text-brand">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-brand">
                  Terms
                </Link>
                <Link href="/contact" className="hover:text-brand">
                  Contact
                </Link>
              </nav>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}

function FooterText() {
  return <FooterTextClient />;
}
