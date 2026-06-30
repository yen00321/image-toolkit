# Image Toolkit Progress Notes

Last updated: 2026-06-25

## Current Goal

Build an English-first global SEO image tools website for Google AdSense monetization.

Site name: Image Toolkit

Canonical production URL: `https://www.imagetoolkitapp.com`

Current expansion target: Phase 2, grow from 10 tools toward 60 tools without changing GA4, AdSense, Search Console, canonical, robots, or global SEO infrastructure.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Browser-first image processing with Canvas
- Production-only Google AdSense loader with ad placeholder blocks

## Completed

- Replaced the old static HTML version with a Next.js project.
- Added shared site metadata and tool metadata in `lib/site.ts`.
- Added SEO helpers in `lib/metadata.ts`.
- Added generated `robots.txt` and `sitemap.xml` through Next routes:
  - `app/robots.ts`
  - `app/sitemap.ts`
- Unified SEO URLs to the canonical `www` domain:
  - `https://www.imagetoolkitapp.com`
- Added global layout, header, footer, homepage, cards, FAQ, and ad placeholders.
- Added language switcher with client-side UI translation.
- Added AdSense-readiness static pages:
  - `/about`
  - `/privacy-policy`
  - `/terms`
  - `/contact`
- Added production-only Google AdSense loader in `app/layout.tsx`:
  - Publisher client: `ca-pub-4691862928355691`
  - Source: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`
- Added header utility links and footer links for static pages.
- Added static pages to `app/sitemap.ts`.
- Supported UI languages:
  - English
  - Traditional Chinese
  - Spanish
  - Vietnamese
  - Indonesian
- Added reusable browser image helpers in `lib/image-client.ts`.
- Added reusable tool components:
  - `ResizeTool`
  - `CompressorTool`
  - `CropTool`
  - `ConverterTool`
  - `ImageUploader`
  - `PreviewCanvas`
- Added all requested tool pages:
  - `/image-resizer`
  - `/image-compressor`
  - `/crop-image`
  - `/jpg-to-png`
  - `/png-to-jpg`
  - `/image-to-webp`
  - `/webp-to-jpg`
  - `/instagram-resizer`
  - `/tiktok-resizer`
  - `/youtube-thumbnail-resizer`
- Phase 2 batch 1 added format conversion routes:
  - `/heic-to-jpg`
  - `/heic-to-png`
  - `/avif-to-jpg`
  - `/avif-to-png`
  - `/svg-to-png`
- Phase 2 batch 2 added format conversion routes:
  - `/svg-to-jpg`
  - `/bmp-to-jpg`
  - `/bmp-to-png`
  - `/tiff-to-jpg`
  - `/tiff-to-png`
- Phase 2 batch 3 added format conversion routes:
  - `/gif-to-jpg`
  - `/gif-to-png`
  - `/png-to-ico`
  - `/jpg-to-ico`
  - `/webp-to-png`
- Phase 2 batch 4 completed Phase 1 format conversion routes:
  - `/ico-converter`
  - `/pdf-to-images`
  - `/images-to-pdf`
- Phase 2 batch 5 started editing tools:
  - `/rotate-image`
  - `/flip-image`
  - `/mirror-image`
  - `/resize-canvas`
  - `/crop-circle-image`
- Phase 2 batch 6 added editing tools:
  - `/add-watermark`
  - `/blur-image`
  - `/sharpen-image`
  - `/brightness-adjust`
  - `/contrast-adjust`
- Phase 2 batch 7 added editing tools:
  - `/saturation-adjust`
  - `/hue-adjust`
  - `/grayscale-filter`
  - `/sepia-filter`
  - `/invert-colors`
- Phase 2 batch 8 finished editing tools and started social tools:
  - `/pixelate-image`
  - `/remove-exif-metadata`
  - `/instagram-story-resizer`
  - `/instagram-reel-cover`
  - `/instagram-profile-picture`
- Phase 2 batch 9 added social tools:
  - `/facebook-cover-photo`
  - `/facebook-profile-picture`
  - `/facebook-post-resizer`
  - `/youtube-banner`
  - `/youtube-shorts-thumbnail`
- Phase 2 batch 10 added social tools:
  - `/tiktok-profile-picture`
  - `/linkedin-banner`
  - `/linkedin-profile-picture`
  - `/x-header`
  - `/x-profile-picture`
- Phase 2 batch 11 completed the 60-tool milestone:
  - `/pinterest-pin-resizer`
  - `/discord-avatar-resizer`
- Added reusable SEO sections for tool pages:
  - How to use
  - Related tools
  - JSON-LD WebApplication schema
  - FAQ schema
  - Breadcrumb schema

## Tool MVP Features

### Image Resizer

- Upload image
- Enter width and height
- Keep aspect ratio option
- Resize modes:
  - Fit inside canvas
  - Cover and crop
  - Stretch to exact size
- Output format:
  - JPG
  - PNG
  - WebP
- Quality slider
- Download resized image

### Image Compressor

- Upload image
- Quality slider
- Original size display
- Compressed size display
- Download compressed JPG

### Crop Image

- Upload image
- Draggable crop box
- Resizable crop box
- Download cropped PNG

### Format Converters

- JPG to PNG
- PNG to JPG
- Image to WebP
- WebP to JPG
- HEIC to JPG
- HEIC to PNG
- AVIF to JPG
- AVIF to PNG
- SVG to PNG
- SVG to JPG
- BMP to JPG
- BMP to PNG
- TIFF to JPG
- TIFF to PNG
- GIF to JPG
- GIF to PNG
- PNG to ICO
- JPG to ICO
- WebP to PNG
- ICO Converter
- PDF to Images
- Images to PDF

### Social Resizers

- Instagram:
  - 1080x1080
  - 1080x1350
  - 1080x1920
- TikTok:
  - 1080x1920
- YouTube Thumbnail:
  - 1280x720
- Instagram Story:
  - 1080x1920
- Instagram Reel Cover:
  - 1080x1920
- Instagram Profile Picture:
  - 320x320
- Facebook Cover Photo:
  - 851x315
- Facebook Profile Picture:
  - 320x320
- Facebook Post:
  - 1200x630
- YouTube Banner:
  - 2560x1440
- YouTube Shorts Thumbnail:
  - 1080x1920
- TikTok Profile Picture:
  - 200x200
- LinkedIn Banner:
  - 1584x396
- LinkedIn Profile Picture:
  - 400x400
- X Header:
  - 1500x500
- X Profile Picture:
  - 400x400
- Pinterest Pin:
  - 1000x1500
- Discord Avatar:
  - 512x512

### Editing Tools

- Rotate Image
- Flip Image
- Mirror Image
- Resize Canvas
- Crop Circle Image
- Add Watermark
- Blur Image
- Sharpen Image
- Brightness Adjust
- Contrast Adjust
- Saturation Adjust
- Hue Adjust
- Grayscale Filter
- Sepia Filter
- Invert Colors
- Pixelate Image
- Remove EXIF Metadata

## Verification

Passed:

- `npm.cmd run typecheck`
- `npm.cmd run build`

Latest verification on 2026-06-25:

- `npm.cmd run typecheck`
- `npm.cmd run build`
- Next generated 20 static pages successfully.

Latest Phase 2 batch:

- Batch 11 target: 2 social tools
- Completed batch 1: HEIC to JPG, HEIC to PNG, AVIF to JPG, AVIF to PNG, SVG to PNG
- Completed batch 2: SVG to JPG, BMP to JPG, BMP to PNG, TIFF to JPG, TIFF to PNG
- Completed batch 3: GIF to JPG, GIF to PNG, PNG to ICO, JPG to ICO, WebP to PNG
- Completed batch 4: ICO Converter, PDF to Images, Images to PDF
- Completed batch 5: Rotate Image, Flip Image, Mirror Image, Resize Canvas, Crop Circle Image
- Completed batch 6: Add Watermark, Blur Image, Sharpen Image, Brightness Adjust, Contrast Adjust
- Completed batch 7: Saturation Adjust, Hue Adjust, Grayscale Filter, Sepia Filter, Invert Colors
- Completed batch 8: Pixelate Image, Remove EXIF Metadata, Instagram Story Resizer, Instagram Reel Cover, Instagram Profile Picture
- Completed batch 9: Facebook Cover Photo, Facebook Profile Picture, Facebook Post Resizer, YouTube Banner, YouTube Shorts Thumbnail
- Completed batch 10: TikTok Profile Picture, LinkedIn Banner, LinkedIn Profile Picture, X Header, X Profile Picture
- Completed batch 11: Pinterest Pin Resizer, Discord Avatar Resizer
- Current tool count: 60
- 60-tool milestone: complete
- Remaining Phase 1 format tools: none

Development server was started on:

- `http://127.0.0.1:3000`

Note: Browser automation could not inspect `127.0.0.1:3000` because the in-app browser policy blocked local access in this session. The production build still passed successfully.

## Known Notes

- Current multilingual support is client-side UI translation only.
- SEO pages are still English-first.
- True multilingual SEO should be added later using locale routes and `hreflang`, for example:
  - `/en/image-resizer`
  - `/es/image-resizer`
  - `/zh/image-resizer`
  - `/vi/image-resizer`
  - `/id/image-resizer`
- Google AdSense global loader has been added for production.
- Ad placeholders are still present and ready to replace with real ad units later.
- Static AdSense-readiness pages are present. Contact email is currently `hello@imagetoolkitapp.com`.
- User images are intended to stay in the browser and not upload to a server.
- `npm install` reported 2 moderate vulnerabilities. Do not use `npm audit fix --force` blindly because it may break dependency compatibility.

## Recommended Next Steps

1. Verify the 60-tool production deployment, then plan the 100-tool roadmap after AdSense review status is clear.
2. Add proper multilingual SEO routes and `hreflang`.
3. Add long-form SEO content under each tool page.
4. Improve mobile visual QA once browser access is available.
5. Add image test fixtures and automated component checks.
6. Replace ad placeholder blocks with real AdSense ad units after approval/configuration.
7. Add AdSense policy-friendly content depth to each tool page.

## Important Files

- `app/page.tsx`
- `app/layout.tsx`
- `app/about/page.tsx`
- `app/privacy-policy/page.tsx`
- `app/terms/page.tsx`
- `app/contact/page.tsx`
- `components/HomeContent.tsx`
- `components/StaticPageShell.tsx`
- `components/SiteHeader.tsx`
- `components/ToolPageShell.tsx`
- `components/LanguageProvider.tsx`
- `components/tools/ResizeTool.tsx`
- `components/tools/CompressorTool.tsx`
- `components/tools/CropTool.tsx`
- `components/tools/ConverterTool.tsx`
- `lib/site.ts`
- `lib/i18n.ts`
- `lib/image-client.ts`
- `lib/metadata.ts`
