"use client";

import { useI18n } from "@/components/LanguageProvider";

type AdPlaceholderProps = {
  label?: string;
  className?: string;
};

export function AdPlaceholder({ label = "Advertisement", className = "" }: AdPlaceholderProps) {
  const { t } = useI18n();
  const text = label === "Advertisement" ? t("advertisement") : label;

  return (
    <aside
      aria-label="Advertisement placeholder"
      className={`flex min-h-24 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-amber-50 px-4 py-6 text-center text-xs font-bold uppercase tracking-wide text-amber-700 ${className}`}
    >
      {text} placeholder
    </aside>
  );
}
