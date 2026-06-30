"use client";

import { Upload } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/components/LanguageProvider";
import type { LoadedImage } from "@/lib/image-client";
import { formatBytes, loadImageFile } from "@/lib/image-client";

type ImageUploaderProps = {
  image: LoadedImage | null;
  onImage: (image: LoadedImage) => void;
  accept?: string;
};

export function ImageUploader({ image, onImage, accept = "image/png,image/jpeg,image/webp" }: ImageUploaderProps) {
  const { t } = useI18n();
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file?: File) {
    if (!file) return;
    setError(null);
    try {
      const loaded = await loadImageFile(file);
      onImage(loaded);
    } catch {
      setError("This browser could not read the selected image format. Try an updated browser or another file.");
    }
  }

  return (
    <div>
      <label className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white px-5 py-8 text-center transition hover:border-brand hover:bg-brand-soft/40">
        <input
          type="file"
          accept={accept}
          className="sr-only"
          onChange={(event) => {
            void handleFile(event.target.files?.[0]);
          }}
        />
        <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-soft text-brand">
          <Upload className="h-6 w-6" aria-hidden="true" />
        </span>
        <strong className="mt-3 text-lg text-ink">{t("uploadImage")}</strong>
        <span className="mt-1 text-sm text-muted">{t("uploadHelp")}</span>
      </label>
      {image ? (
        <div className="mt-3 rounded-lg border border-line bg-slate-50 px-4 py-3 text-sm text-muted">
          <strong className="block text-ink">{image.file.name}</strong>
          {image.width} x {image.height} · {formatBytes(image.file.size)}
        </div>
      ) : null}
      {error ? (
        <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
