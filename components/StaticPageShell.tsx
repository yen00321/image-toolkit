import type { ReactNode } from "react";
import { AdPlaceholder } from "@/components/AdPlaceholder";

type StaticPageShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function StaticPageShell({ eyebrow = "Image Toolkit", title, description, children }: StaticPageShellProps) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-brand">{eyebrow}</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-normal text-ink sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg leading-8 text-muted">{description}</p>
      </div>
      <AdPlaceholder className="mt-8" />
      <article className="prose prose-slate mt-8 max-w-none rounded-lg border border-line bg-white p-6 shadow-soft prose-headings:text-ink prose-p:text-muted prose-li:text-muted sm:p-8">
        {children}
      </article>
    </main>
  );
}
