"use client";

import type { RefObject } from "react";
import { useI18n } from "@/components/LanguageProvider";

type PreviewCanvasProps = {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  hasImage: boolean;
  label?: string;
};

export function PreviewCanvas({ canvasRef, hasImage, label = "Preview" }: PreviewCanvasProps) {
  const { t } = useI18n();
  const heading = label === "Preview" ? t("preview") : label;

  return (
    <section className="rounded-lg border border-line bg-white shadow-soft">
      <div className="border-b border-line px-4 py-3">
        <h2 className="font-bold text-ink">{heading}</h2>
      </div>
      <div className="checkerboard grid min-h-80 place-items-center overflow-hidden rounded-b-lg p-4">
        <canvas
          ref={canvasRef}
          className={hasImage ? "max-h-[70vh] rounded-lg bg-white shadow-lg" : "hidden"}
          aria-label="Image preview canvas"
        />
        {!hasImage ? (
          <div className="rounded-lg border border-line bg-white/95 px-5 py-4 text-center">
            <strong className="text-ink">{t("previewEmptyTitle")}</strong>
            <p className="mt-1 text-sm text-muted">{t("previewEmptyText")}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
