"use client";

import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { downloadBlob } from "@/lib/image-client";

type RenderedPage = {
  pageNumber: number;
  width: number;
  height: number;
  blob: Blob;
  url: string;
};

export function PdfToImagesTool() {
  const [fileName, setFileName] = useState("");
  const [pages, setPages] = useState<RenderedPage[]>([]);
  const [status, setStatus] = useState("Upload a PDF file to render pages as PNG images.");
  const [isRendering, setIsRendering] = useState(false);

  async function handleFile(file?: File) {
    if (!file) return;
    setIsRendering(true);
    setStatus("Rendering PDF pages in your browser...");
    pages.forEach((page) => URL.revokeObjectURL(page.url));
    setPages([]);
    setFileName(file.name.replace(/\.[^.]+$/, "") || "document");

    try {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url,
      ).toString();

      const data = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data }).promise;
      const renderedPages: RenderedPage[] = [];

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (!context) continue;

        canvas.width = Math.round(viewport.width);
        canvas.height = Math.round(viewport.height);
        await page.render({ canvas, canvasContext: context, viewport }).promise;
        const blob = await canvasToPng(canvas);
        renderedPages.push({
          pageNumber,
          width: canvas.width,
          height: canvas.height,
          blob,
          url: URL.createObjectURL(blob),
        });
      }

      setPages(renderedPages);
      setStatus(`Rendered ${renderedPages.length} page${renderedPages.length === 1 ? "" : "s"}.`);
    } catch {
      setStatus("This PDF could not be rendered in the browser. Try another PDF file.");
    } finally {
      setIsRendering(false);
    }
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <label className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white px-5 py-8 text-center transition hover:border-brand hover:bg-brand-soft/40">
          <input
            type="file"
            accept="application/pdf,.pdf"
            className="sr-only"
            onChange={(event) => void handleFile(event.target.files?.[0])}
          />
          <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-soft text-brand">
            <FileText className="h-6 w-6" aria-hidden="true" />
          </span>
          <strong className="mt-3 text-lg text-ink">Upload PDF</strong>
          <span className="mt-1 text-sm text-muted">PDF pages are rendered locally in your browser.</span>
        </label>
        <p className="mt-4 rounded-lg border border-line bg-slate-50 px-4 py-3 text-sm font-semibold text-muted">
          {status}
        </p>
      </section>
      <section className="rounded-lg border border-line bg-white shadow-soft">
        <div className="border-b border-line px-4 py-3">
          <h2 className="font-bold text-ink">Rendered pages</h2>
        </div>
        <div className="grid gap-4 p-4">
          {pages.length ? (
            pages.map((page) => (
              <article key={page.pageNumber} className="rounded-lg border border-line bg-slate-50 p-3">
                <img
                  src={page.url}
                  alt={`PDF page ${page.pageNumber}`}
                  className="max-h-96 w-full rounded border border-line object-contain"
                />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
                  <span>
                    Page {page.pageNumber} - {page.width} x {page.height}
                  </span>
                  <button
                    type="button"
                    onClick={() => downloadBlob(page.blob, `${fileName}-page-${page.pageNumber}.png`)}
                    className="inline-flex h-10 items-center gap-2 rounded-lg bg-brand px-3 font-bold text-white hover:bg-brand-dark"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    PNG
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="grid min-h-80 place-items-center rounded-lg border border-dashed border-line bg-slate-50 text-center">
              <p className="px-6 text-sm font-semibold text-muted">
                {isRendering ? "Rendering..." : "Rendered PDF pages will appear here."}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function canvasToPng(canvas: HTMLCanvasElement) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("Unable to export page."))), "image/png");
  });
}
