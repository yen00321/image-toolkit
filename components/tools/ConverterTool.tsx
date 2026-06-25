"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { ImageUploader } from "@/components/tools/ImageUploader";
import { PreviewCanvas } from "@/components/tools/PreviewCanvas";
import {
  baseName,
  canvasToBlob,
  downloadBlob,
  extensionForMime,
  type LoadedImage,
} from "@/lib/image-client";

type ConverterToolProps = {
  outputMime: "image/png" | "image/jpeg" | "image/webp";
  accept?: string;
  outputLabel: string;
};

export function ConverterTool({ outputMime, accept, outputLabel }: ConverterToolProps) {
  const { t } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [quality, setQuality] = useState(90);

  useEffect(() => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (outputMime === "image/jpeg") {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.drawImage(image.bitmap, 0, 0);
  }, [image, outputMime]);

  async function handleDownload() {
    if (!image || !canvasRef.current) return;
    const blob = await canvasToBlob(canvasRef.current, outputMime, quality / 100);
    downloadBlob(blob, `${baseName(image.file.name)}.${extensionForMime(outputMime)}`);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <ImageUploader image={image} onImage={setImage} accept={accept} />
        <div className="mt-5 grid gap-4">
          {outputMime !== "image/png" ? (
            <label className="grid gap-1 text-sm font-bold text-ink">
              {t("quality")} {quality}%
              <input
                value={quality}
                min={40}
                max={100}
                type="range"
                onChange={(event) => setQuality(Number(event.target.value))}
                className="h-11 accent-brand"
              />
            </label>
          ) : null}
          <button
            type="button"
            disabled={!image}
            onClick={() => void handleDownload()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-4 font-bold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            {t("downloadFormat")} {outputLabel}
          </button>
        </div>
      </section>
      <PreviewCanvas canvasRef={canvasRef} hasImage={Boolean(image)} label={`${outputLabel} ${t("preview")}`} />
    </div>
  );
}
