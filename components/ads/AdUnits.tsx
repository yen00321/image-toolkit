"use client";

import { useEffect } from "react";

const ADSENSE_CLIENT = "ca-pub-4691862928355691";
const isProduction = process.env.NODE_ENV === "production";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdUnitProps = {
  slot?: string;
  className?: string;
  minHeight?: number;
};

function AdUnit({ slot, className = "", minHeight = 90 }: AdUnitProps) {
  useEffect(() => {
    if (!isProduction || !slot) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ad blockers or delayed AdSense loading should never break the page.
    }
  }, [slot]);

  if (!isProduction || !slot) {
    return null;
  }

  return (
    <aside aria-label="Advertisement" className={`my-8 overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle block w-full"
        style={{ display: "block", minHeight }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}

export function ResponsiveAd({ className }: { className?: string }) {
  return (
    <AdUnit
      slot={process.env.NEXT_PUBLIC_ADSENSE_RESPONSIVE_SLOT}
      className={className}
      minHeight={90}
    />
  );
}

export function InArticleAd({ className }: { className?: string }) {
  return (
    <AdUnit
      slot={process.env.NEXT_PUBLIC_ADSENSE_IN_ARTICLE_SLOT}
      className={className}
      minHeight={120}
    />
  );
}

export function ToolPageAd({ className }: { className?: string }) {
  return (
    <AdUnit
      slot={process.env.NEXT_PUBLIC_ADSENSE_TOOL_PAGE_SLOT}
      className={className}
      minHeight={90}
    />
  );
}

export function FooterAd({ className }: { className?: string }) {
  return (
    <AdUnit
      slot={process.env.NEXT_PUBLIC_ADSENSE_FOOTER_SLOT}
      className={className}
      minHeight={90}
    />
  );
}
