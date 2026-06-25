"use client";

import type { ReactNode } from "react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Faq } from "@/components/Faq";
import { useI18n } from "@/components/LanguageProvider";
import type { ToolInfo } from "@/lib/site";

type ToolPageShellProps = {
  tool: ToolInfo;
  children: ReactNode;
};

export function ToolPageShell({ tool, children }: ToolPageShellProps) {
  const { t, toolText } = useI18n();
  const text = toolText(tool);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-brand">{t("freeOnlineTool")}</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">{text.name}</h1>
        <p className="mt-4 text-lg leading-8 text-muted">{text.description}</p>
      </div>
      <AdPlaceholder className="mt-7" />
      <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div>{children}</div>
        <AdPlaceholder className="min-h-96 lg:sticky lg:top-24" label={t("sidebarAd")} />
      </div>
      <Faq items={tool.faqs} />
      <AdPlaceholder className="mt-10" label={t("articleAd")} />
    </main>
  );
}
