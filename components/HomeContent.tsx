"use client";

import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ToolCard } from "@/components/ToolCard";
import { useI18n } from "@/components/LanguageProvider";
import { tools } from "@/lib/site";

export function HomeContent() {
  const { t } = useI18n();

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-brand">{t("homeEyebrow")}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-ink sm:text-6xl">{t("homeTitle")}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{t("homeDescription")}</p>
        </div>
        <AdPlaceholder className="mt-8" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>
    </main>
  );
}
