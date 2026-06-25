"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { ImageUploader } from "@/components/tools/ImageUploader";
import { PreviewCanvas } from "@/components/tools/PreviewCanvas";
import { baseName, canvasToBlob, downloadBlob, formatBytes, type LoadedImage } from "@/lib/image-client";

export function CompressorTool() {
  const { t } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [quality, setQuality] = useState(80);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);

  useEffect(() => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image.bitmap, 0, 0);
    void canvasToBlob(canvas, "image/jpeg", quality / 100).then((blob) => setCompressedSize(blob.size));
  }, [image, quality]);

  async function handleDownload() {
    if (!image || !canvasRef.current) return;
    const blob = await canvasToBlob(canvasRef.current, "image/jpeg", quality / 100);
    downloadBlob(blob, `${baseName(image.file.name)}-compressed.jpg`);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <ImageUploader image={image} onImage={setImage} />
        <div className="mt-5 grid gap-4">
          <label className="grid gap-1 text-sm font-bold text-ink">
            {t("compressionQuality")} {quality}%
            <input
              value={quality}
              min={35}
              max={100}
              type="range"
              onChange={(event) => setQuality(Number(event.target.value))}
              className="h-11 accent-brand"
            />
          </label>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg border border-line bg-slate-50 p-3">
              <span className="block text-muted">{t("original")}</span>
              <strong className="text-ink">{image ? formatBytes(image.file.size) : "-"}</strong>
            </div>
            <div className="rounded-lg border border-line bg-slate-50 p-3">
              <span className="block text-muted">{t("compressed")}</span>
              <strong className="text-ink">{compressedSize ? formatBytes(compressedSize) : "-"}</strong>
            </div>
          </div>
          <button
            type="button"
            disabled={!image}
            onClick={() => void handleDownload()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-4 font-bold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            {t("downloadCompressed")}
          </button>
        </div>
      </section>
      <PreviewCanvas canvasRef={canvasRef} hasImage={Boolean(image)} label={`${t("compressed")} ${t("preview")}`} />
    </div>
  );
}
