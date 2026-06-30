"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { ImageUploader } from "@/components/tools/ImageUploader";
import { PreviewCanvas } from "@/components/tools/PreviewCanvas";
import { baseName, canvasToBlob, downloadBlob, type LoadedImage } from "@/lib/image-client";

export function WatermarkTool() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [text, setText] = useState("Image Toolkit");
  const [opacity, setOpacity] = useState(55);
  const [fontSize, setFontSize] = useState(48);

  useEffect(() => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image.bitmap, 0, 0);
    ctx.save();
    ctx.globalAlpha = opacity / 100;
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "rgba(0,0,0,0.65)";
    ctx.lineWidth = Math.max(2, Math.round(fontSize / 14));
    ctx.font = `700 ${fontSize}px Arial, sans-serif`;
    ctx.textAlign = "right";
    ctx.textBaseline = "bottom";
    const margin = Math.max(24, Math.round(fontSize * 0.75));
    ctx.strokeText(text, canvas.width - margin, canvas.height - margin);
    ctx.fillText(text, canvas.width - margin, canvas.height - margin);
    ctx.restore();
  }, [fontSize, image, opacity, text]);

  async function handleDownload() {
    if (!image || !canvasRef.current) return;
    const blob = await canvasToBlob(canvasRef.current, "image/png");
    downloadBlob(blob, `${baseName(image.file.name)}-watermark.png`);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <ImageUploader image={image} onImage={setImage} />
        <div className="mt-5 grid gap-4">
          <label className="grid gap-1 text-sm font-bold text-ink">
            Watermark text
            <input
              value={text}
              onChange={(event) => setText(event.target.value)}
              className="h-11 rounded-lg border border-line px-3"
            />
          </label>
          <label className="grid gap-1 text-sm font-bold text-ink">
            Opacity {opacity}%
            <input
              value={opacity}
              min={10}
              max={100}
              type="range"
              onChange={(event) => setOpacity(Number(event.target.value))}
              className="h-11 accent-brand"
            />
          </label>
          <label className="grid gap-1 text-sm font-bold text-ink">
            Font size {fontSize}px
            <input
              value={fontSize}
              min={16}
              max={160}
              type="range"
              onChange={(event) => setFontSize(Number(event.target.value))}
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
      <PreviewCanvas canvasRef={canvasRef} hasImage={Boolean(image)} label="Watermark preview" />
    </div>
  );
}
