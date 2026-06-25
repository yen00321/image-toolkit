"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import type { ToolInfo } from "@/lib/site";

export function ToolCard({ tool }: { tool: ToolInfo }) {
  const { toolText } = useI18n();
  const text = toolText(tool);

  return (
    <Link
      href={tool.href}
      className="group flex h-full flex-col rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-brand">{tool.category}</p>
          <h2 className="mt-2 text-xl font-bold text-ink">{text.name}</h2>
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{text.description}</p>
    </Link>
  );
}
