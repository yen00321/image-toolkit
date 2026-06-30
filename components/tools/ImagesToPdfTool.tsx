"use client";

import { useState } from "react";
import { Download, Images } from "lucide-react";
import { baseName, downloadBlob, loadImageFile } from "@/lib/image-client";

type PdfImage = {
  name: string;
  width: number;
  height: number;
  data: Uint8Array;
  url: string;
};

export function ImagesToPdfTool() {
  const [images, setImages] = useState<PdfImage[]>([]);
  const [status, setStatus] = useState("Upload one or more images to create a PDF.");

  async function handleFiles(files?: FileList | null) {
    if (!files?.length) return;
    const loaded: PdfImage[] = [];
    setStatus("Preparing images in your browser...");

    for (const file of Array.from(files)) {
      const image = await loadImageFile(file);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) continue;
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image.bitmap, 0, 0);
      const blob = await canvasToJpeg(canvas);
      loaded.push({
        name: file.name,
        width: image.width,
        height: image.height,
        data: new Uint8Array(await blob.arrayBuffer()),
        url: URL.createObjectURL(blob),
      });
    }

    setImages(loaded);
    setStatus(`Ready to create a PDF from ${loaded.length} image${loaded.length === 1 ? "" : "s"}.`);
  }

  function handleDownload() {
    if (!images.length) return;
    const pdfBytes = createPdf(images);
    const firstName = baseName(images[0].name);
    downloadBlob(new Blob([pdfBytes], { type: "application/pdf" }), `${firstName || "images"}.pdf`);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <label className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white px-5 py-8 text-center transition hover:border-brand hover:bg-brand-soft/40">
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp,.png,.jpg,.jpeg,.webp"
            multiple
            className="sr-only"
            onChange={(event) => void handleFiles(event.target.files)}
          />
          <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-soft text-brand">
            <Images className="h-6 w-6" aria-hidden="true" />
          </span>
          <strong className="mt-3 text-lg text-ink">Upload images</strong>
          <span className="mt-1 text-sm text-muted">Images are assembled into a PDF locally in your browser.</span>
        </label>
        <p className="mt-4 rounded-lg border border-line bg-slate-50 px-4 py-3 text-sm font-semibold text-muted">
          {status}
        </p>
        <button
          type="button"
          disabled={!images.length}
          onClick={handleDownload}
          className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 font-bold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Download className="h-5 w-5" aria-hidden="true" />
          Download PDF
        </button>
      </section>
      <section className="rounded-lg border border-line bg-white shadow-soft">
        <div className="border-b border-line px-4 py-3">
          <h2 className="font-bold text-ink">PDF pages</h2>
        </div>
        <div className="grid gap-4 p-4 sm:grid-cols-2">
          {images.length ? (
            images.map((image, index) => (
              <article key={`${image.name}-${index}`} className="rounded-lg border border-line bg-slate-50 p-3">
                <img src={image.url} alt={image.name} className="h-48 w-full rounded border border-line object-contain" />
                <p className="mt-2 truncate text-sm font-bold text-ink">{image.name}</p>
                <p className="text-xs text-muted">
                  Page {index + 1} - {image.width} x {image.height}
                </p>
              </article>
            ))
          ) : (
            <div className="min-h-80 rounded-lg border border-dashed border-line bg-slate-50 p-6 text-center text-sm font-semibold text-muted sm:col-span-2">
              Selected images will appear here.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function canvasToJpeg(canvas: HTMLCanvasElement) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("Unable to export image."))), "image/jpeg", 0.92);
  });
}

function createPdf(images: PdfImage[]) {
  const encoder = new TextEncoder();
  const chunks: Uint8Array[] = [];
  const offsets: number[] = [0];
  let position = 0;

  function pushBytes(bytes: Uint8Array) {
    chunks.push(bytes);
    position += bytes.length;
  }

  function pushText(text: string) {
    pushBytes(encoder.encode(text));
  }

  function object(id: number, content: Array<string | Uint8Array>) {
    offsets[id] = position;
    pushText(`${id} 0 obj\n`);
    content.forEach((part) => (typeof part === "string" ? pushText(part) : pushBytes(part)));
    pushText("\nendobj\n");
  }

  const pageIds = images.map((_, index) => 3 + index * 3);
  pushText("%PDF-1.4\n%ImageToolkit\n");
  object(1, ["<< /Type /Catalog /Pages 2 0 R >>"]);
  object(2, [`<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`]);

  images.forEach((image, index) => {
    const pageId = pageIds[index];
    const contentId = pageId + 1;
    const imageId = pageId + 2;
    const width = Math.round(image.width);
    const height = Math.round(image.height);
    const stream = `q\n${width} 0 0 ${height} 0 0 cm\n/Im${index} Do\nQ\n`;
    object(pageId, [
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /XObject << /Im${index} ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>`,
    ]);
    object(contentId, [`<< /Length ${stream.length} >>\nstream\n${stream}endstream`]);
    object(imageId, [
      `<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.data.length} >>\nstream\n`,
      image.data,
      "\nendstream",
    ]);
  });

  const xrefPosition = position;
  pushText(`xref\n0 ${offsets.length}\n0000000000 65535 f \n`);
  for (let id = 1; id < offsets.length; id += 1) {
    pushText(`${String(offsets[id]).padStart(10, "0")} 00000 n \n`);
  }
  pushText(`trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${xrefPosition}\n%%EOF`);

  const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const output = new Uint8Array(totalLength);
  let offset = 0;
  chunks.forEach((chunk) => {
    output.set(chunk, offset);
    offset += chunk.length;
  });
  return output;
}
