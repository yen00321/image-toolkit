"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { ImageUploader } from "@/components/tools/ImageUploader";
import { PreviewCanvas } from "@/components/tools/PreviewCanvas";
import { baseName, canvasToBlob, downloadBlob, type LoadedImage } from "@/lib/image-client";

export function PixelateTool() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [pixelSize, setPixelSize] = useState(12);

  useEffect(() => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const smallWidth = Math.max(1, Math.round(image.width / pixelSize));
    const smallHeight = Math.max(1, Math.round(image.height / pixelSize));
    const scratch = document.createElement("canvas");
    const scratchCtx = scratch.getContext("2d");
    if (!scratchCtx) return;

    canvas.width = image.width;
    canvas.height = image.height;
    scratch.width = smallWidth;
    scratch.height = smallHeight;
    scratchCtx.imageSmoothingEnabled = false;
    scratchCtx.drawImage(image.bitmap, 0, 0, smallWidth, smallHeight);
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(scratch, 0, 0, smallWidth, smallHeight, 0, 0, canvas.width, canvas.height);
  }, [image, pixelSize]);

  async function handleDownload() {
    if (!image || !canvasRef.current) return;
    const blob = await canvasToBlob(canvasRef.current, "image/png");
    downloadBlob(blob, `${baseName(image.file.name)}-pixelated.png`);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <ImageUploader image={image} onImage={setImage} />
        <div className="mt-5 grid gap-4">
          <label className="grid gap-1 text-sm font-bold text-ink">
            Pixel size {pixelSize}px
            <input
              value={pixelSize}
              min={2}
              max={60}
              type="range"
              onChange={(event) => setPixelSize(Number(event.target.value))}
              className="h-11 accent-brand"
            />
          </label>
          <button
            type="button"
            disabled={!image}
            onClick={() => void handleDownload()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-4 font-bold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Download PNG
          </button>
        </div>
      </section>
      <PreviewCanvas canvasRef={canvasRef} hasImage={Boolean(image)} label="Pixelated preview" />
    </div>
  );
}
