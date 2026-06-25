"use client";

import { PointerEvent, useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { ImageUploader } from "@/components/tools/ImageUploader";
import { baseName, canvasToBlob, downloadBlob, type LoadedImage } from "@/lib/image-client";

type CropRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type DragMode = "move" | "resize" | null;

export function CropTool() {
  const { t } = useI18n();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dragStart = useRef<{ x: number; y: number; rect: CropRect; mode: DragMode } | null>(null);
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [crop, setCrop] = useState<CropRect>({ x: 10, y: 10, width: 70, height: 70 });

  useEffect(() => {
    if (!image) return;
    setCrop({ x: 10, y: 10, width: 80, height: 80 });
  }, [image]);

  function clampCrop(rect: CropRect): CropRect {
    const width = Math.min(Math.max(rect.width, 8), 100);
    const height = Math.min(Math.max(rect.height, 8), 100);
    const x = Math.min(Math.max(rect.x, 0), 100 - width);
    const y = Math.min(Math.max(rect.y, 0), 100 - height);
    return { x, y, width, height };
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>, mode: DragMode) {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      rect: crop,
      mode,
    };
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const start = dragStart.current;
    const imageElement = imgRef.current;
    if (!start || !imageElement) return;
    const bounds = imageElement.getBoundingClientRect();
    const dx = ((event.clientX - start.x) / bounds.width) * 100;
    const dy = ((event.clientY - start.y) / bounds.height) * 100;

    if (start.mode === "move") {
      setCrop(clampCrop({ ...start.rect, x: start.rect.x + dx, y: start.rect.y + dy }));
    }

    if (start.mode === "resize") {
      setCrop(clampCrop({ ...start.rect, width: start.rect.width + dx, height: start.rect.height + dy }));
    }
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.releasePointerCapture(event.pointerId);
    dragStart.current = null;
  }

  async function handleDownload() {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const sourceX = Math.round((crop.x / 100) * image.width);
    const sourceY = Math.round((crop.y / 100) * image.height);
    const sourceWidth = Math.round((crop.width / 100) * image.width);
    const sourceHeight = Math.round((crop.height / 100) * image.height);

    canvas.width = sourceWidth;
    canvas.height = sourceHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image.bitmap, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, sourceWidth, sourceHeight);

    const blob = await canvasToBlob(canvas, "image/png", 0.92);
    downloadBlob(blob, `${baseName(image.file.name)}-cropped.png`);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <ImageUploader image={image} onImage={setImage} />
        <div className="mt-5 grid gap-3 text-sm">
          <p className="leading-6 text-muted">
            {t("cropInstruction")}
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-line bg-slate-50 p-3">
              <span className="block text-muted">{t("cropWidth")}</span>
              <strong className="text-ink">{Math.round(crop.width)}%</strong>
            </div>
            <div className="rounded-lg border border-line bg-slate-50 p-3">
              <span className="block text-muted">{t("cropHeight")}</span>
              <strong className="text-ink">{Math.round(crop.height)}%</strong>
            </div>
          </div>
          <button
            type="button"
            disabled={!image}
            onClick={() => void handleDownload()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-4 font-bold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            {t("downloadCropped")}
          </button>
        </div>
      </section>

      <section className="rounded-lg border border-line bg-white shadow-soft">
        <div className="border-b border-line px-4 py-3">
          <h2 className="font-bold text-ink">{t("cropPreview")}</h2>
        </div>
        <div className="checkerboard grid min-h-96 place-items-center overflow-hidden rounded-b-lg p-4">
          {image ? (
            <div
              className="relative max-h-[75vh] max-w-full touch-none select-none"
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              {/* User-selected blob URLs are local previews, so the native image element is the correct fit here. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={imgRef}
                src={image.objectUrl}
                alt="Uploaded crop preview"
                className="max-h-[75vh] max-w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-black/35" aria-hidden="true" />
              <div
                className="absolute cursor-move border-2 border-white bg-white/10 shadow-[0_0_0_9999px_rgba(0,0,0,0.35)]"
                style={{
                  left: `${crop.x}%`,
                  top: `${crop.y}%`,
                  width: `${crop.width}%`,
                  height: `${crop.height}%`,
                }}
                onPointerDown={(event) => onPointerDown(event, "move")}
              >
                <div
                  className="absolute -bottom-3 -right-3 h-6 w-6 cursor-nwse-resize rounded-full border-2 border-white bg-brand"
                  onPointerDown={(event) => {
                    event.stopPropagation();
                    onPointerDown(event, "resize");
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-line bg-white/95 px-5 py-4 text-center">
              <strong className="text-ink">{t("cropEmptyTitle")}</strong>
              <p className="mt-1 text-sm text-muted">{t("cropEmptyText")}</p>
            </div>
          )}
          <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
        </div>
      </section>
    </div>
  );
}
