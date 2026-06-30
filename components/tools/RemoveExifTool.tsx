"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { ImageUploader } from "@/components/tools/ImageUploader";
import { PreviewCanvas } from "@/components/tools/PreviewCanvas";
import { baseName, canvasToBlob, downloadBlob, type LoadedImage } from "@/lib/image-client";

export function RemoveExifTool() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [format, setFormat] = useState<"image/jpeg" | "image/png">("image/jpeg");

  useEffect(() => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (format === "image/jpeg") {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.drawImage(image.bitmap, 0, 0);
  }, [format, image]);

  async function handleDownload() {
    if (!image || !canvasRef.current) return;
    const blob = await canvasToBlob(canvasRef.current, format, 0.92);
    downloadBlob(blob, `${baseName(image.file.name)}-clean.${format === "image/png" ? "png" : "jpg"}`);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <ImageUploader image={image} onImage={setImage} />
        <div className="mt-5 grid gap-4">
          <label className="grid gap-1 text-sm font-bold text-ink">
            Output format
            <select
              value={format}
              onChange={(event) => setFormat(event.target.value as "image/jpeg" | "image/png")}
              className="h-11 rounded-lg border border-line bg-white px-3 text-ink"
            >
              <option value="image/jpeg">JPG</option>
              <option value="image/png">PNG</option>
            </select>
          </label>
          <p className="rounded-lg border border-line bg-slate-50 px-4 py-3 text-sm text-muted">
            The image is redrawn through Canvas. The downloaded file contains fresh pixels without the original file metadata.
          </p>
          <button
            type="button"
            disabled={!image}
            onClick={() => void handleDownload()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-4 font-bold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Download clean image
          </button>
        </div>
      </section>
      <PreviewCanvas canvasRef={canvasRef} hasImage={Boolean(image)} label="Clean image preview" />
    </div>
  );
}
