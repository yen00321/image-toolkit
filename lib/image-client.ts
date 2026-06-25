export type LoadedImage = {
  file: File;
  bitmap: HTMLImageElement;
  width: number;
  height: number;
  objectUrl: string;
};

export type ResizeMode = "fit" | "cover" | "stretch";

export function formatBytes(bytes: number) {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
}

export function loadImageFile(file: File): Promise<LoadedImage> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const bitmap = new Image();
    bitmap.onload = () => {
      resolve({
        file,
        bitmap,
        width: bitmap.naturalWidth,
        height: bitmap.naturalHeight,
        objectUrl,
      });
    };
    bitmap.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Unable to read the selected image."));
    };
    bitmap.src = objectUrl;
  });
}

export function extensionForMime(mime: string) {
  if (mime === "image/png") return "png";
  if (mime === "image/webp") return "webp";
  return "jpg";
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function canvasToBlob(canvas: HTMLCanvasElement, mime: string, quality = 0.9): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Unable to export the image."));
        }
      },
      mime,
      quality,
    );
  });
}

function fillBackground(ctx: CanvasRenderingContext2D, width: number, height: number, mime: string) {
  if (mime === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  }
}

export function drawResizedImage(
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  mode: ResizeMode,
  mime: string,
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, width, height);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  fillBackground(ctx, width, height, mime);

  if (mode === "stretch") {
    ctx.drawImage(image, 0, 0, width, height);
    return;
  }

  const sourceRatio = image.naturalWidth / image.naturalHeight;
  const targetRatio = width / height;

  if (mode === "fit") {
    let drawWidth = width;
    let drawHeight = height;
    let drawX = 0;
    let drawY = 0;

    if (sourceRatio > targetRatio) {
      drawHeight = Math.round(width / sourceRatio);
      drawY = Math.round((height - drawHeight) / 2);
    } else {
      drawWidth = Math.round(height * sourceRatio);
      drawX = Math.round((width - drawWidth) / 2);
    }

    if (mime !== "image/jpeg") {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
    }
    ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
    return;
  }

  let sourceX = 0;
  let sourceY = 0;
  let sourceWidth = image.naturalWidth;
  let sourceHeight = image.naturalHeight;

  if (sourceRatio > targetRatio) {
    sourceWidth = Math.round(image.naturalHeight * targetRatio);
    sourceX = Math.round((image.naturalWidth - sourceWidth) / 2);
  } else {
    sourceHeight = Math.round(image.naturalWidth / targetRatio);
    sourceY = Math.round((image.naturalHeight - sourceHeight) / 2);
  }

  ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, width, height);
}

export function baseName(fileName: string) {
  return fileName.replace(/\.[^.]+$/, "") || "image";
}
