"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { ImageUploader } from "@/components/tools/ImageUploader";
import { PreviewCanvas } from "@/components/tools/PreviewCanvas";
import { baseName, canvasToBlob, downloadBlob, type LoadedImage } from "@/lib/image-client";

type IcoToolProps = {
  accept?: string;
};

const iconSizes = [16, 32, 48, 64, 128, 256];

export function IcoTool({ accept }: IcoToolProps) {
  const { t } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [size, setSize] = useState(256);

  useEffect(() => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;
    ctx.clearRect(0, 0, size, size);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const sourceRatio = image.width / image.height;
    let drawWidth = size;
    let drawHeight = size;
    let drawX = 0;
    let drawY = 0;

    if (sourceRatio > 1) {
      drawHeight = Math.round(size / sourceRatio);
      drawY = Math.round((size - drawHeight) / 2);
    } else {
      drawWidth = Math.round(size * sourceRatio);
      drawX = Math.round((size - drawWidth) / 2);
    }

    ctx.drawImage(image.bitmap, drawX, drawY, drawWidth, drawHeight);
  }, [image, size]);

  async function handleDownload() {
    if (!image || !canvasRef.current) return;
    const pngBlob = await canvasToBlob(canvasRef.current, "image/png");
    const icoBlob = await pngBlobToIco(pngBlob, size, size);
    downloadBlob(icoBlob, `${baseName(image.file.name)}.ico`);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <ImageUploader image={image} onImage={setImage} accept={accept} />
        <div className="mt-5 grid gap-4">
          <label className="grid gap-1 text-sm font-bold text-ink">
            Icon size
            <select
              value={size}
              onChange={(event) => setSize(Number(event.target.value))}
              className="h-11 rounded-lg border border-line bg-white px-3 text-ink"
            >
              {iconSizes.map((iconSize) => (
                <option key={iconSize} value={iconSize}>
                  {iconSize} x {iconSize}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            disabled={!image}
            onClick={() => void handleDownload()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-4 font-bold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            {t("downloadFormat")} ICO
          </button>
        </div>
      </section>
      <PreviewCanvas canvasRef={canvasRef} hasImage={Boolean(image)} label={`ICO ${t("preview")}`} />
    </div>
  );
}

async function pngBlobToIco(pngBlob: Blob, width: number, height: number) {
  const pngBytes = new Uint8Array(await pngBlob.arrayBuffer());
  const headerSize = 6;
  const directorySize = 16;
  const imageOffset = headerSize + directorySize;
  const buffer = new ArrayBuffer(imageOffset + pngBytes.length);
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);

  view.setUint16(0, 0, true);
  view.setUint16(2, 1, true);
  view.setUint16(4, 1, true);
  view.setUint8(6, width >= 256 ? 0 : width);
  view.setUint8(7, height >= 256 ? 0 : height);
  view.setUint8(8, 0);
  view.setUint8(9, 0);
  view.setUint16(10, 1, true);
  view.setUint16(12, 32, true);
  view.setUint32(14, pngBytes.length, true);
  view.setUint32(18, imageOffset, true);
  bytes.set(pngBytes, imageOffset);

  return new Blob([buffer], { type: "image/x-icon" });
}
