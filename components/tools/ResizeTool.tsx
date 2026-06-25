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
  drawResizedImage,
  extensionForMime,
  type LoadedImage,
  type ResizeMode,
} from "@/lib/image-client";

type Preset = {
  label: string;
  width: number;
  height: number;
};

type ResizeToolProps = {
  presets?: Preset[];
  defaultWidth?: number;
  defaultHeight?: number;
};

export function ResizeTool({ presets = [], defaultWidth = 1200, defaultHeight = 800 }: ResizeToolProps) {
  const { t } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [width, setWidth] = useState(defaultWidth);
  const [height, setHeight] = useState(defaultHeight);
  const [keepRatio, setKeepRatio] = useState(true);
  const [mode, setMode] = useState<ResizeMode>("fit");
  const [mime, setMime] = useState("image/jpeg");
  const [quality, setQuality] = useState(90);

  useEffect(() => {
    if (!image || !canvasRef.current) return;
    drawResizedImage(image.bitmap, canvasRef.current, width, height, mode, mime);
  }, [height, image, mime, mode, width]);

  function updateWidth(nextWidth: number) {
    const safeWidth = Math.max(1, nextWidth);
    setWidth(safeWidth);
    if (image && keepRatio) {
      setHeight(Math.max(1, Math.round(safeWidth / (image.width / image.height))));
    }
  }

  function updateHeight(nextHeight: number) {
    const safeHeight = Math.max(1, nextHeight);
    setHeight(safeHeight);
    if (image && keepRatio) {
      setWidth(Math.max(1, Math.round(safeHeight * (image.width / image.height))));
    }
  }

  async function handleDownload() {
    if (!image || !canvasRef.current) return;
    const blob = await canvasToBlob(canvasRef.current, mime, quality / 100);
    downloadBlob(blob, `${baseName(image.file.name)}-${width}x${height}.${extensionForMime(mime)}`);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <ImageUploader
          image={image}
          onImage={(loaded) => {
            setImage(loaded);
            setWidth(loaded.width);
            setHeight(loaded.height);
          }}
        />
        <div className="mt-5 grid gap-4">
          <div className="grid grid-cols-2 gap-3">
            <label className="grid gap-1 text-sm font-bold text-ink">
              {t("width")}
              <input
                value={width}
                min={1}
                type="number"
                onChange={(event) => updateWidth(Number(event.target.value))}
                className="h-11 rounded-lg border border-line px-3 font-normal"
              />
            </label>
            <label className="grid gap-1 text-sm font-bold text-ink">
              {t("height")}
              <input
                value={height}
                min={1}
                type="number"
                onChange={(event) => updateHeight(Number(event.target.value))}
                className="h-11 rounded-lg border border-line px-3 font-normal"
              />
            </label>
          </div>
          <label className="flex items-center gap-2 text-sm font-semibold text-ink">
            <input
              checked={keepRatio}
              type="checkbox"
              onChange={(event) => setKeepRatio(event.target.checked)}
              className="h-4 w-4 accent-brand"
            />
            {t("keepAspectRatio")}
          </label>
          <label className="grid gap-1 text-sm font-bold text-ink">
            {t("resizeMode")}
            <select
              value={mode}
              onChange={(event) => setMode(event.target.value as ResizeMode)}
              className="h-11 rounded-lg border border-line px-3 font-normal"
            >
              <option value="fit">{t("fitMode")}</option>
              <option value="cover">{t("coverMode")}</option>
              <option value="stretch">{t("stretchMode")}</option>
            </select>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="grid gap-1 text-sm font-bold text-ink">
              {t("format")}
              <select
                value={mime}
                onChange={(event) => setMime(event.target.value)}
                className="h-11 rounded-lg border border-line px-3 font-normal"
              >
                <option value="image/jpeg">JPG</option>
                <option value="image/png">PNG</option>
                <option value="image/webp">WebP</option>
              </select>
            </label>
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
          </div>
          {presets.length ? (
            <div className="grid gap-2">
              <span className="text-sm font-bold text-ink">{t("presets")}</span>
              <div className="grid gap-2 sm:grid-cols-2">
                {presets.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => {
                      setWidth(preset.width);
                      setHeight(preset.height);
                    }}
                    className="rounded-lg border border-line bg-slate-50 px-3 py-2 text-left text-sm font-semibold text-ink hover:border-brand"
                  >
                    {preset.label}
                    <span className="block text-xs font-normal text-muted">
                      {preset.width} x {preset.height}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}
          <button
            type="button"
            disabled={!image}
            onClick={() => void handleDownload()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-4 font-bold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            {t("downloadImage")}
          </button>
        </div>
      </section>
      <PreviewCanvas canvasRef={canvasRef} hasImage={Boolean(image)} />
    </div>
  );
}
