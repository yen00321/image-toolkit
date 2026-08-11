"use client";

import Link from "next/link";
import { ImageIcon } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { languages, type LanguageCode } from "@/lib/i18n";

const navLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/tools/convert", label: "Categories" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const { lang, setLang, t } = useI18n();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2 font-extrabold text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">
            <ImageIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="truncate">Image Toolkit</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-muted lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-muted">
            <span className="sr-only">Language</span>
            <select
              value={lang}
              onChange={(event) => setLang(event.target.value as LanguageCode)}
              className="h-10 max-w-24 rounded-lg border border-line bg-white px-2 text-sm font-bold text-ink sm:max-w-none sm:px-3"
              aria-label="Language"
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.label}
                </option>
              ))}
            </select>
          </label>
          <Link
            href="/image-resizer"
            className="hidden rounded-lg bg-brand px-4 py-2 text-sm font-bold text-white hover:bg-brand-dark sm:inline-flex"
          >
            {t("start")}
          </Link>
        </div>
      </div>
      <nav
        className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 pb-3 text-sm font-semibold text-muted sm:px-6 lg:hidden"
        aria-label="Mobile primary"
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="shrink-0 hover:text-brand">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
