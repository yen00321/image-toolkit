export const languages = [
  { code: "en", label: "English" },
  { code: "zh", label: "繁中" },
  { code: "es", label: "Español" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "id", label: "Indonesia" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const defaultLanguage: LanguageCode = "en";

type CommonKey =
  | "start"
  | "freeOnlineTool"
  | "homeEyebrow"
  | "homeTitle"
  | "homeDescription"
  | "faqHeading"
  | "advertisement"
  | "sidebarAd"
  | "articleAd"
  | "uploadImage"
  | "uploadHelp"
  | "preview"
  | "previewEmptyTitle"
  | "previewEmptyText"
  | "width"
  | "height"
  | "keepAspectRatio"
  | "resizeMode"
  | "fitMode"
  | "coverMode"
  | "stretchMode"
  | "format"
  | "quality"
  | "presets"
  | "downloadImage"
  | "downloadCompressed"
  | "original"
  | "compressed"
  | "compressionQuality"
  | "downloadFormat"
  | "cropInstruction"
  | "cropWidth"
  | "cropHeight"
  | "downloadCropped"
  | "cropPreview"
  | "cropEmptyTitle"
  | "cropEmptyText"
  | "footerText";

export const commonTranslations: Record<LanguageCode, Record<CommonKey, string>> = {
  en: {
    start: "Start",
    freeOnlineTool: "Free online image tool",
    homeEyebrow: "Browser-based image tools",
    homeTitle: "Resize, compress, crop, and convert images online.",
    homeDescription:
      "Image Toolkit gives you fast, simple image tools for everyday work. Resize, compress, crop, and convert images directly in your browser.",
    faqHeading: "Frequently Asked Questions",
    advertisement: "Advertisement",
    sidebarAd: "Sidebar ad",
    articleAd: "In-article ad",
    uploadImage: "Upload image",
    uploadHelp: "JPG, PNG, and WebP are processed locally in your browser.",
    preview: "Preview",
    previewEmptyTitle: "Preview appears here",
    previewEmptyText: "Upload an image to start processing.",
    width: "Width",
    height: "Height",
    keepAspectRatio: "Keep aspect ratio",
    resizeMode: "Resize mode",
    fitMode: "Fit inside canvas",
    coverMode: "Cover and crop",
    stretchMode: "Stretch to exact size",
    format: "Format",
    quality: "Quality",
    presets: "Presets",
    downloadImage: "Download image",
    downloadCompressed: "Download compressed JPG",
    original: "Original",
    compressed: "Compressed",
    compressionQuality: "Compression quality",
    downloadFormat: "Download",
    cropInstruction:
      "Drag the crop box to move it. Drag the bottom-right handle to resize it. Export keeps the selected pixels from the original image.",
    cropWidth: "Crop width",
    cropHeight: "Crop height",
    downloadCropped: "Download cropped image",
    cropPreview: "Crop preview",
    cropEmptyTitle: "Crop area appears here",
    cropEmptyText: "Upload an image to start cropping.",
    footerText: "Free browser-first image tools. Ad placeholders are reserved for future Google AdSense integration.",
  },
  zh: {
    start: "開始使用",
    freeOnlineTool: "免費線上圖片工具",
    homeEyebrow: "瀏覽器本機圖片工具",
    homeTitle: "線上調整、壓縮、裁切與轉換圖片。",
    homeDescription:
      "Image Toolkit 提供快速、簡潔的線上圖片工具。你可以直接在瀏覽器中調整尺寸、壓縮、裁切與轉換圖片。",
    faqHeading: "常見問題",
    advertisement: "廣告",
    sidebarAd: "側邊廣告",
    articleAd: "文章內廣告",
    uploadImage: "上傳圖片",
    uploadHelp: "JPG、PNG、WebP 會在你的瀏覽器本機處理。",
    preview: "預覽",
    previewEmptyTitle: "預覽會顯示在這裡",
    previewEmptyText: "上傳圖片後即可開始處理。",
    width: "寬度",
    height: "高度",
    keepAspectRatio: "保持比例",
    resizeMode: "調整模式",
    fitMode: "完整放入畫布",
    coverMode: "填滿並裁切",
    stretchMode: "強制拉伸到尺寸",
    format: "格式",
    quality: "品質",
    presets: "預設尺寸",
    downloadImage: "下載圖片",
    downloadCompressed: "下載壓縮 JPG",
    original: "原始大小",
    compressed: "壓縮後",
    compressionQuality: "壓縮品質",
    downloadFormat: "下載",
    cropInstruction: "拖曳裁切框可移動，拖曳右下角可調整大小。輸出會保留原圖中選取的像素。",
    cropWidth: "裁切寬度",
    cropHeight: "裁切高度",
    downloadCropped: "下載裁切圖片",
    cropPreview: "裁切預覽",
    cropEmptyTitle: "裁切區會顯示在這裡",
    cropEmptyText: "上傳圖片後即可開始裁切。",
    footerText: "免費瀏覽器優先圖片工具。廣告預留區之後可接入 Google AdSense。",
  },
  es: {
    start: "Comenzar",
    freeOnlineTool: "Herramienta gratuita de imagen",
    homeEyebrow: "Herramientas de imagen en el navegador",
    homeTitle: "Redimensiona, comprime, recorta y convierte imágenes online.",
    homeDescription:
      "Image Toolkit ofrece herramientas rápidas y sencillas para imágenes. Redimensiona, comprime, recorta y convierte archivos directamente en tu navegador.",
    faqHeading: "Preguntas frecuentes",
    advertisement: "Anuncio",
    sidebarAd: "Anuncio lateral",
    articleAd: "Anuncio en contenido",
    uploadImage: "Subir imagen",
    uploadHelp: "JPG, PNG y WebP se procesan localmente en tu navegador.",
    preview: "Vista previa",
    previewEmptyTitle: "La vista previa aparecerá aquí",
    previewEmptyText: "Sube una imagen para empezar.",
    width: "Ancho",
    height: "Alto",
    keepAspectRatio: "Mantener proporción",
    resizeMode: "Modo de ajuste",
    fitMode: "Encajar en el lienzo",
    coverMode: "Cubrir y recortar",
    stretchMode: "Estirar al tamaño exacto",
    format: "Formato",
    quality: "Calidad",
    presets: "Tamaños predefinidos",
    downloadImage: "Descargar imagen",
    downloadCompressed: "Descargar JPG comprimido",
    original: "Original",
    compressed: "Comprimido",
    compressionQuality: "Calidad de compresión",
    downloadFormat: "Descargar",
    cropInstruction: "Arrastra el recuadro para moverlo. Arrastra la esquina inferior derecha para cambiar el tamaño.",
    cropWidth: "Ancho del recorte",
    cropHeight: "Alto del recorte",
    downloadCropped: "Descargar imagen recortada",
    cropPreview: "Vista previa del recorte",
    cropEmptyTitle: "El área de recorte aparecerá aquí",
    cropEmptyText: "Sube una imagen para recortar.",
    footerText: "Herramientas gratuitas de imagen en el navegador. Los espacios de anuncios están reservados para Google AdSense.",
  },
  vi: {
    start: "Bắt đầu",
    freeOnlineTool: "Công cụ ảnh miễn phí",
    homeEyebrow: "Công cụ ảnh chạy trong trình duyệt",
    homeTitle: "Đổi kích thước, nén, cắt và chuyển đổi ảnh trực tuyến.",
    homeDescription:
      "Image Toolkit cung cấp các công cụ ảnh nhanh và đơn giản. Bạn có thể đổi kích thước, nén, cắt và chuyển đổi ảnh ngay trong trình duyệt.",
    faqHeading: "Câu hỏi thường gặp",
    advertisement: "Quảng cáo",
    sidebarAd: "Quảng cáo bên",
    articleAd: "Quảng cáo trong bài",
    uploadImage: "Tải ảnh lên",
    uploadHelp: "JPG, PNG và WebP được xử lý cục bộ trong trình duyệt.",
    preview: "Xem trước",
    previewEmptyTitle: "Bản xem trước sẽ hiện ở đây",
    previewEmptyText: "Tải ảnh lên để bắt đầu xử lý.",
    width: "Chiều rộng",
    height: "Chiều cao",
    keepAspectRatio: "Giữ tỷ lệ",
    resizeMode: "Chế độ đổi kích thước",
    fitMode: "Vừa trong khung",
    coverMode: "Phủ khung và cắt",
    stretchMode: "Kéo giãn đúng kích thước",
    format: "Định dạng",
    quality: "Chất lượng",
    presets: "Kích thước mẫu",
    downloadImage: "Tải ảnh xuống",
    downloadCompressed: "Tải JPG đã nén",
    original: "Gốc",
    compressed: "Sau nén",
    compressionQuality: "Chất lượng nén",
    downloadFormat: "Tải xuống",
    cropInstruction: "Kéo khung cắt để di chuyển. Kéo góc phải dưới để đổi kích thước.",
    cropWidth: "Chiều rộng cắt",
    cropHeight: "Chiều cao cắt",
    downloadCropped: "Tải ảnh đã cắt",
    cropPreview: "Xem trước cắt ảnh",
    cropEmptyTitle: "Vùng cắt sẽ hiện ở đây",
    cropEmptyText: "Tải ảnh lên để bắt đầu cắt.",
    footerText: "Công cụ ảnh miễn phí chạy trong trình duyệt. Vị trí quảng cáo được chừa cho Google AdSense.",
  },
  id: {
    start: "Mulai",
    freeOnlineTool: "Alat gambar online gratis",
    homeEyebrow: "Alat gambar berbasis browser",
    homeTitle: "Ubah ukuran, kompres, potong, dan konversi gambar online.",
    homeDescription:
      "Image Toolkit menyediakan alat gambar yang cepat dan sederhana. Ubah ukuran, kompres, potong, dan konversi gambar langsung di browser Anda.",
    faqHeading: "Pertanyaan umum",
    advertisement: "Iklan",
    sidebarAd: "Iklan samping",
    articleAd: "Iklan artikel",
    uploadImage: "Unggah gambar",
    uploadHelp: "JPG, PNG, dan WebP diproses secara lokal di browser Anda.",
    preview: "Pratinjau",
    previewEmptyTitle: "Pratinjau muncul di sini",
    previewEmptyText: "Unggah gambar untuk mulai memproses.",
    width: "Lebar",
    height: "Tinggi",
    keepAspectRatio: "Pertahankan rasio",
    resizeMode: "Mode ubah ukuran",
    fitMode: "Pas di kanvas",
    coverMode: "Penuhi dan potong",
    stretchMode: "Regangkan ke ukuran tepat",
    format: "Format",
    quality: "Kualitas",
    presets: "Preset",
    downloadImage: "Unduh gambar",
    downloadCompressed: "Unduh JPG terkompresi",
    original: "Asli",
    compressed: "Terkompresi",
    compressionQuality: "Kualitas kompresi",
    downloadFormat: "Unduh",
    cropInstruction: "Seret kotak potong untuk memindahkan. Seret sudut kanan bawah untuk mengubah ukuran.",
    cropWidth: "Lebar potong",
    cropHeight: "Tinggi potong",
    downloadCropped: "Unduh gambar terpotong",
    cropPreview: "Pratinjau potong",
    cropEmptyTitle: "Area potong muncul di sini",
    cropEmptyText: "Unggah gambar untuk mulai memotong.",
    footerText: "Alat gambar gratis berbasis browser. Tempat iklan disiapkan untuk Google AdSense.",
  },
};

export const toolTranslations: Record<LanguageCode, Record<string, { name: string; shortName: string; description: string }>> = {
  en: {},
  zh: {
    "image-resizer": { name: "圖片尺寸調整器", shortName: "調整尺寸", description: "輸入自訂寬度與高度，調整 JPG、PNG 或 WebP 圖片。" },
    "image-compressor": { name: "圖片壓縮工具", shortName: "壓縮圖片", description: "調整輸出品質，降低圖片檔案大小並下載。" },
    "crop-image": { name: "圖片裁切工具", shortName: "裁切圖片", description: "使用可拖曳裁切框自由裁切圖片並下載結果。" },
    "jpg-to-png": { name: "JPG 轉 PNG", shortName: "JPG 轉 PNG", description: "在瀏覽器中將 JPG 圖片轉換為 PNG。" },
    "png-to-jpg": { name: "PNG 轉 JPG", shortName: "PNG 轉 JPG", description: "將 PNG 轉為 JPG，透明背景會填成白色。" },
    "image-to-webp": { name: "圖片轉 WebP", shortName: "轉 WebP", description: "將 JPG 或 PNG 轉換為現代 WebP 格式。" },
    "webp-to-jpg": { name: "WebP 轉 JPG", shortName: "WebP 轉 JPG", description: "將 WebP 圖片轉為相容性更高的 JPG。" },
    "instagram-resizer": { name: "Instagram 圖片尺寸工具", shortName: "Instagram 尺寸", description: "使用貼文、人像貼文與限時動態預設尺寸調整圖片。" },
    "tiktok-resizer": { name: "TikTok 封面尺寸工具", shortName: "TikTok 尺寸", description: "將圖片調整為 TikTok 影片封面尺寸。" },
    "youtube-thumbnail-resizer": { name: "YouTube 縮圖尺寸工具", shortName: "YouTube 縮圖", description: "一鍵將圖片調整為 YouTube 縮圖尺寸。" },
  },
  es: {
    "image-resizer": { name: "Redimensionador de imágenes", shortName: "Redimensionar", description: "Cambia el tamaño de imágenes JPG, PNG o WebP con ancho y alto personalizados." },
    "image-compressor": { name: "Compresor de imágenes", shortName: "Comprimir", description: "Reduce el tamaño del archivo ajustando la calidad de salida." },
    "crop-image": { name: "Recortar imagen", shortName: "Recortar", description: "Recorta una imagen libremente con un área arrastrable." },
    "jpg-to-png": { name: "Convertir JPG a PNG", shortName: "JPG a PNG", description: "Convierte imágenes JPG a PNG directamente en tu navegador." },
    "png-to-jpg": { name: "Convertir PNG a JPG", shortName: "PNG a JPG", description: "Convierte PNG a JPG con fondo blanco para transparencias." },
    "image-to-webp": { name: "Imagen a WebP", shortName: "A WebP", description: "Convierte JPG o PNG al formato moderno WebP." },
    "webp-to-jpg": { name: "WebP a JPG", shortName: "WebP a JPG", description: "Convierte imágenes WebP a archivos JPG compatibles." },
    "instagram-resizer": { name: "Redimensionador para Instagram", shortName: "Instagram", description: "Ajusta imágenes para publicaciones, retratos e historias de Instagram." },
    "tiktok-resizer": { name: "Redimensionador para TikTok", shortName: "TikTok", description: "Ajusta imágenes para portadas de video de TikTok." },
    "youtube-thumbnail-resizer": { name: "Redimensionador de miniaturas YouTube", shortName: "YouTube", description: "Redimensiona imágenes al tamaño de miniatura de YouTube." },
  },
  vi: {
    "image-resizer": { name: "Đổi kích thước ảnh", shortName: "Đổi kích thước", description: "Đổi kích thước ảnh JPG, PNG hoặc WebP bằng chiều rộng và chiều cao tùy chỉnh." },
    "image-compressor": { name: "Nén ảnh", shortName: "Nén ảnh", description: "Giảm dung lượng ảnh bằng cách điều chỉnh chất lượng xuất." },
    "crop-image": { name: "Cắt ảnh", shortName: "Cắt ảnh", description: "Cắt ảnh tự do bằng khung cắt có thể kéo." },
    "jpg-to-png": { name: "JPG sang PNG", shortName: "JPG sang PNG", description: "Chuyển ảnh JPG sang PNG trong trình duyệt." },
    "png-to-jpg": { name: "PNG sang JPG", shortName: "PNG sang JPG", description: "Chuyển PNG sang JPG với nền trắng cho vùng trong suốt." },
    "image-to-webp": { name: "Ảnh sang WebP", shortName: "Sang WebP", description: "Chuyển JPG hoặc PNG sang định dạng WebP hiện đại." },
    "webp-to-jpg": { name: "WebP sang JPG", shortName: "WebP sang JPG", description: "Chuyển ảnh WebP sang JPG dễ tương thích." },
    "instagram-resizer": { name: "Đổi kích thước cho Instagram", shortName: "Instagram", description: "Đổi kích thước ảnh cho bài đăng, ảnh dọc và story Instagram." },
    "tiktok-resizer": { name: "Đổi kích thước bìa TikTok", shortName: "TikTok", description: "Đổi kích thước ảnh cho bìa video TikTok." },
    "youtube-thumbnail-resizer": { name: "Đổi kích thước thumbnail YouTube", shortName: "YouTube", description: "Đổi ảnh sang kích thước thumbnail YouTube." },
  },
  id: {
    "image-resizer": { name: "Pengubah ukuran gambar", shortName: "Ubah ukuran", description: "Ubah ukuran JPG, PNG, atau WebP dengan lebar dan tinggi khusus." },
    "image-compressor": { name: "Kompresor gambar", shortName: "Kompres", description: "Kurangi ukuran file dengan mengatur kualitas output." },
    "crop-image": { name: "Potong gambar", shortName: "Potong", description: "Potong gambar dengan kotak potong yang dapat diseret." },
    "jpg-to-png": { name: "JPG ke PNG", shortName: "JPG ke PNG", description: "Konversi gambar JPG ke PNG di browser." },
    "png-to-jpg": { name: "PNG ke JPG", shortName: "PNG ke JPG", description: "Konversi PNG ke JPG dengan latar putih untuk transparansi." },
    "image-to-webp": { name: "Gambar ke WebP", shortName: "Ke WebP", description: "Konversi JPG atau PNG ke format WebP modern." },
    "webp-to-jpg": { name: "WebP ke JPG", shortName: "WebP ke JPG", description: "Konversi WebP ke JPG yang lebih kompatibel." },
    "instagram-resizer": { name: "Pengubah ukuran Instagram", shortName: "Instagram", description: "Ubah ukuran gambar untuk post, portrait, dan story Instagram." },
    "tiktok-resizer": { name: "Pengubah ukuran TikTok", shortName: "TikTok", description: "Ubah ukuran gambar untuk cover video TikTok." },
    "youtube-thumbnail-resizer": { name: "Pengubah thumbnail YouTube", shortName: "YouTube", description: "Ubah gambar ke ukuran thumbnail YouTube." },
  },
};
