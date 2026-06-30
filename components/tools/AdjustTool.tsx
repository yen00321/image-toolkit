"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { ImageUploader } from "@/components/tools/ImageUploader";
import { PreviewCanvas } from "@/components/tools/PreviewCanvas";
import { baseName, canvasToBlob, downloadBlob, type LoadedImage } from "@/lib/image-client";

type AdjustMode = "blur" | "sharpen" | "brightness" | "contrast" | "saturation" | "hue" | "grayscale" | "sepia" | "invert";

type AdjustToolProps = {
  mode: AdjustMode;
};

const labels: Record<AdjustMode, string> = {
  blur: "Blur",
  sharpen: "Sharpen",
  brightness: "Brightness",
  contrast: "Contrast",
  saturation: "Saturation",
  hue: "Hue",
  grayscale: "Grayscale",
  sepia: "Sepia",
  invert: "Invert",
};

export function AdjustTool({ mode }: AdjustToolProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [amount, setAmount] = useState(defaultAmount(mode));

  useEffect(() => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (mode === "blur") {
      ctx.filter = `blur(${amount}px)`;
      ctx.drawImage(image.bitmap, 0, 0);
      ctx.filter = "none";
      return;
    }

    const filter = filterForMode(mode, amount);
    if (filter) {
      ctx.filter = filter;
      ctx.drawImage(image.bitmap, 0, 0);
      ctx.filter = "none";
      return;
    }

    ctx.drawImage(image.bitmap, 0, 0);
    sharpenCanvas(ctx, canvas.width, canvas.height, amount / 100);
  }, [amount, image, mode]);

  async function handleDownload() {
    if (!image || !canvasRef.current) return;
    const blob = await canvasToBlob(canvasRef.current, "image/png");
    downloadBlob(blob, `${baseName(image.file.name)}-${mode}.png`);
  }

  const min = minAmount(mode);
  const max = maxAmount(mode);
  const suffix = mode === "blur" ? "px" : mode === "hue" ? "deg" : "%";

  return (
    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <ImageUploader image={image} onImage={setImage} />
        <div className="mt-5 grid gap-4">
          <label className="grid gap-1 text-sm font-bold text-ink">
            {labels[mode]} {amount}
            {suffix}
            <input
              value={amount}
              min={min}
              max={max}
              type="range"
              onChange={(event) => setAmount(Number(event.target.value))}
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
      <PreviewCanvas canvasRef={canvasRef} hasImage={Boolean(image)} label={`${labels[mode]} preview`} />
    </div>
  );
}

function defaultAmount(mode: AdjustMode) {
  if (mode === "blur") return 4;
  if (mode === "sharpen") return 50;
  if (mode === "hue") return 90;
  if (mode === "grayscale" || mode === "sepia" || mode === "invert") return 100;
  return 100;
}

function minAmount(mode: AdjustMode) {
  if (mode === "blur" || mode === "sharpen" || mode === "grayscale" || mode === "sepia" || mode === "invert") return 0;
  if (mode === "hue") return 0;
  return 40;
}

function maxAmount(mode: AdjustMode) {
  if (mode === "blur") return 20;
  if (mode === "sharpen") return 100;
  if (mode === "hue") return 360;
  if (mode === "saturation") return 200;
  if (mode === "grayscale" || mode === "sepia" || mode === "invert") return 100;
  return 180;
}

function filterForMode(mode: AdjustMode, amount: number) {
  if (mode === "brightness") return `brightness(${amount}%)`;
  if (mode === "contrast") return `contrast(${amount}%)`;
  if (mode === "saturation") return `saturate(${amount}%)`;
  if (mode === "hue") return `hue-rotate(${amount}deg)`;
  if (mode === "grayscale") return `grayscale(${amount}%)`;
  if (mode === "sepia") return `sepia(${amount}%)`;
  if (mode === "invert") return `invert(${amount}%)`;
  return null;
}

function sharpenCanvas(ctx: CanvasRenderingContext2D, width: number, height: number, strength: number) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const source = imageData.data;
  const output = new Uint8ClampedArray(source);
  const center = 1 + 4 * strength;
  const side = -strength;

  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const index = (y * width + x) * 4;
      for (let channel = 0; channel < 3; channel += 1) {
        output[index + channel] =
          source[index + channel] * center +
          source[index + channel - 4] * side +
          source[index + channel + 4] * side +
          source[index + channel - width * 4] * side +
          source[index + channel + width * 4] * side;
      }
    }
  }

  imageData.data.set(output);
  ctx.putImageData(imageData, 0, 0);
}
