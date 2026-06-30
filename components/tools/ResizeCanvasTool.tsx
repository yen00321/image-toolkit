"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { ImageUploader } from "@/components/tools/ImageUploader";
import { PreviewCanvas } from "@/components/tools/PreviewCanvas";
import { baseName, canvasToBlob, downloadBlob, type LoadedImage } from "@/lib/image-client";

export function ResizeCanvasTool() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(1200);
  const [background, setBackground] = useState("#ffffff");

  function handleImage(nextImage: LoadedImage) {
    setImage(nextImage);
    setWidth(nextImage.width);
    setHeight(nextImage.height);
  }

  useEffect(() => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);
    const x = Math.round((width - image.width) / 2);
    const y = Math.round((height - image.height) / 2);
    ctx.drawImage(image.bitmap, x, y);
  }, [background, height, image, width]);

  async function handleDownload() {
    if (!image || !canvasRef.current) return;
    const blob = await canvasToBlob(canvasRef.current, "image/png");
    downloadBlob(blob, `${baseName(image.file.name)}-canvas.png`);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <ImageUploader image={image} onImage={handleImage} />
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1 text-sm font-bold text-ink">
            Canvas width
            <input
              value={width}
              min={1}
              type="number"
              onChange={(event) => setWidth(Number(event.target.value))}
              className="h-11 rounded-lg border border-line px-3"
            />
          </label>
          <label className="grid gap-1 text-sm font-bold text-ink">
            Canvas height
            <input
              value={height}
              min={1}
              type="number"
              onChange={(event) => setHeight(Number(event.target.value))}
              className="h-11 rounded-lg border border-line px-3"
            />
          </label>
          <label className="grid gap-1 text-sm font-bold text-ink sm:col-span-2">
            Background
            <input
              value={background}
              type="color"
              onChange={(event) => setBackground(event.target.value)}
              className="h-11 w-full rounded-lg border border-line bg-white px-2"
            />
          </label>
          <button
            type="button"
            disabled={!image}
            onClick={() => void handleDownload()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-4 font-bold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Download PNG
          </button>
        </div>
      </section>
      <PreviewCanvas canvasRef={canvasRef} hasImage={Boolean(image)} label="Canvas preview" />
    </div>
  );
}
