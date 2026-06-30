"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { ImageUploader } from "@/components/tools/ImageUploader";
import { PreviewCanvas } from "@/components/tools/PreviewCanvas";
import { baseName, canvasToBlob, downloadBlob, type LoadedImage } from "@/lib/image-client";

type TransformMode = "rotate" | "flip" | "mirror";

type TransformToolProps = {
  mode: TransformMode;
};

export function TransformTool({ mode }: TransformToolProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [rotation, setRotation] = useState(90);
  const [flipAxis, setFlipAxis] = useState<"horizontal" | "vertical">("horizontal");

  useEffect(() => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const angle = mode === "rotate" ? rotation : 0;
    const normalized = ((angle % 360) + 360) % 360;
    const swap = normalized === 90 || normalized === 270;
    canvas.width = swap ? image.height : image.width;
    canvas.height = swap ? image.width : image.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    if (mode === "rotate") {
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((normalized * Math.PI) / 180);
      ctx.drawImage(image.bitmap, -image.width / 2, -image.height / 2);
    } else {
      const horizontal = mode === "mirror" || flipAxis === "horizontal";
      ctx.translate(horizontal ? canvas.width : 0, horizontal ? 0 : canvas.height);
      ctx.scale(horizontal ? -1 : 1, horizontal ? 1 : -1);
      ctx.drawImage(image.bitmap, 0, 0);
    }

    ctx.restore();
  }, [flipAxis, image, mode, rotation]);

  async function handleDownload() {
    if (!image || !canvasRef.current) return;
    const blob = await canvasToBlob(canvasRef.current, "image/png");
    downloadBlob(blob, `${baseName(image.file.name)}-${mode}.png`);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <ImageUploader image={image} onImage={setImage} />
        <div className="mt-5 grid gap-4">
          {mode === "rotate" ? (
            <label className="grid gap-1 text-sm font-bold text-ink">
              Rotation
              <select
                value={rotation}
                onChange={(event) => setRotation(Number(event.target.value))}
                className="h-11 rounded-lg border border-line bg-white px-3 text-ink"
              >
                <option value={90}>90 degrees right</option>
                <option value={180}>180 degrees</option>
                <option value={270}>90 degrees left</option>
              </select>
            </label>
          ) : null}
          {mode === "flip" ? (
            <label className="grid gap-1 text-sm font-bold text-ink">
              Flip direction
              <select
                value={flipAxis}
                onChange={(event) => setFlipAxis(event.target.value as "horizontal" | "vertical")}
                className="h-11 rounded-lg border border-line bg-white px-3 text-ink"
              >
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </select>
            </label>
          ) : null}
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
      <PreviewCanvas canvasRef={canvasRef} hasImage={Boolean(image)} label="Edited image preview" />
    </div>
  );
}
