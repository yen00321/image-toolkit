"use client";

import Link from "next/link";
import {
  ArrowRight,
  Crop,
  FileImage,
  FileText,
  ImageDown,
  Maximize2,
  Minimize2,
  Pencil,
  ShieldCheck,
  Share2,
} from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import type { ToolInfo } from "@/lib/site";

const categoryLabels: Record<ToolInfo["category"], string> = {
  convert: "Convert",
  resize: "Resize",
  compress: "Compress",
  crop: "Crop",
  edit: "Edit",
  social: "Social",
};

function ToolIcon({ tool }: { tool: ToolInfo }) {
  const className = "h-5 w-5";

  if (tool.slug.includes("pdf")) return <FileText className={className} aria-hidden="true" />;
  if (tool.slug.includes("metadata") || tool.slug.includes("exif")) return <ShieldCheck className={className} aria-hidden="true" />;
  if (tool.category === "convert") return <ImageDown className={className} aria-hidden="true" />;
  if (tool.category === "compress") return <Minimize2 className={className} aria-hidden="true" />;
  if (tool.category === "resize") return <Maximize2 className={className} aria-hidden="true" />;
  if (tool.category === "crop") return <Crop className={className} aria-hidden="true" />;
  if (tool.category === "social") return <Share2 className={className} aria-hidden="true" />;
  if (tool.category === "edit") return <Pencil className={className} aria-hidden="true" />;

  return <FileImage className={className} aria-hidden="true" />;
}

export function ToolCard({ tool, featured = false }: { tool: ToolInfo; featured?: boolean }) {
  const { toolText } = useI18n();
  const text = toolText(tool);

  return (
    <Link
      href={tool.href}
      className={[
        "group flex h-56 flex-col rounded-lg border bg-white shadow-soft transition duration-200",
        "hover:-translate-y-0.5 hover:border-brand/60 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand/40",
        featured ? "border-brand/35 p-4" : "border-line p-4",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
            <ToolIcon tool={tool} />
          </span>
          <div className="min-w-0">
            <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-bold uppercase tracking-wide text-muted">
              {categoryLabels[tool.category]}
            </span>
            <h2 className="mt-2 line-clamp-2 text-lg font-extrabold tracking-normal text-ink">{text.name}</h2>
          </div>
        </div>
      </div>
      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-muted">{text.description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-brand">
        Open
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
