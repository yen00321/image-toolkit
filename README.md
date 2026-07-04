# Image Toolkit

Image Toolkit is an English-first, browser-based image tools website built for global SEO traffic and Google AdSense monetization.

The MVP focuses on practical image utilities that process user-selected images locally in the browser whenever possible.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Browser Canvas API

## Tools Included

- Image Resizer: `/image-resizer`
- Image Compressor: `/image-compressor`
- Crop Image: `/crop-image`
- JPG to PNG: `/jpg-to-png`
- PNG to JPG: `/png-to-jpg`
- Image to WebP: `/image-to-webp`
- WebP to JPG: `/webp-to-jpg`
- HEIC to JPG: `/heic-to-jpg`
- HEIC to PNG: `/heic-to-png`
- AVIF to JPG: `/avif-to-jpg`
- AVIF to PNG: `/avif-to-png`
- SVG to PNG: `/svg-to-png`
- SVG to JPG: `/svg-to-jpg`
- BMP to JPG: `/bmp-to-jpg`
- BMP to PNG: `/bmp-to-png`
- TIFF to JPG: `/tiff-to-jpg`
- TIFF to PNG: `/tiff-to-png`
- GIF to JPG: `/gif-to-jpg`
- GIF to PNG: `/gif-to-png`
- PNG to ICO: `/png-to-ico`
- JPG to ICO: `/jpg-to-ico`
- WebP to PNG: `/webp-to-png`
- ICO Converter: `/ico-converter`
- PDF to Images: `/pdf-to-images`
- Images to PDF: `/images-to-pdf`
- Rotate Image: `/rotate-image`
- Flip Image: `/flip-image`
- Mirror Image: `/mirror-image`
- Resize Canvas: `/resize-canvas`
- Crop Circle Image: `/crop-circle-image`
- Add Watermark: `/add-watermark`
- Blur Image: `/blur-image`
- Sharpen Image: `/sharpen-image`
- Brightness Adjust: `/brightness-adjust`
- Contrast Adjust: `/contrast-adjust`
- Saturation Adjust: `/saturation-adjust`
- Hue Adjust: `/hue-adjust`
- Grayscale Filter: `/grayscale-filter`
- Sepia Filter: `/sepia-filter`
- Invert Colors: `/invert-colors`
- Pixelate Image: `/pixelate-image`
- Remove EXIF Metadata: `/remove-exif-metadata`
- Instagram Story Resizer: `/instagram-story-resizer`
- Instagram Reel Cover: `/instagram-reel-cover`
- Instagram Profile Picture: `/instagram-profile-picture`
- Facebook Cover Photo: `/facebook-cover-photo`
- Facebook Profile Picture: `/facebook-profile-picture`
- Facebook Post Resizer: `/facebook-post-resizer`
- YouTube Banner: `/youtube-banner`
- YouTube Shorts Thumbnail: `/youtube-shorts-thumbnail`
- TikTok Profile Picture: `/tiktok-profile-picture`
- LinkedIn Banner: `/linkedin-banner`
- LinkedIn Profile Picture: `/linkedin-profile-picture`
- X Header: `/x-header`
- X Profile Picture: `/x-profile-picture`
- Pinterest Pin Resizer: `/pinterest-pin-resizer`
- Discord Avatar Resizer: `/discord-avatar-resizer`
- Instagram Resizer: `/instagram-resizer`
- TikTok Resizer: `/tiktok-resizer`
- YouTube Thumbnail Resizer: `/youtube-thumbnail-resizer`

## Static Pages

- About: `/about`
- Privacy Policy: `/privacy-policy`
- Terms: `/terms`
- Contact: `/contact`

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run TypeScript checks:

```bash
npm run typecheck
```

## Environment

Set the public site URL after deployment:

```bash
NEXT_PUBLIC_SITE_URL=https://www.imagetoolkitapp.com
```

This value is used for sitemap and metadata URLs.

Set the Google Analytics 4 Measurement ID in production:

```bash
NEXT_PUBLIC_GA_ID=G-6CHJ6TTVVW
```

Google Analytics is loaded with the official Next.js `Script` component and is enabled only in production when `NEXT_PUBLIC_GA_ID` is present. App Router page views are tracked on initial load and route changes.

Google AdSense is loaded globally in production from `app/layout.tsx` with publisher client:

```text
ca-pub-4691862928355691
```

## Privacy Note

The current MVP processes selected images in the browser using Canvas-based utilities. Google AdSense is loaded in production, while in-page ad placements still use clean placeholder blocks until real ad units are configured.

## ImageToolkit V2 Upgrade

V2 focuses on content quality, UX, and AdSense readiness after the first AdSense review identified low-value content risk. The current priority is improving navigation, page depth, structured content, and trust signals instead of adding more tools.

Phase 1 completed:

- Rebuilt the homepage as a category-based tool directory instead of a flat 60-tool grid.
- Added a new hero section with Free, Fast, Browser-based, and Privacy-friendly trust points.
- Added homepage tool search by tool name, description, keyword, and category.
- Added category previews for Convert, Resize, Compress, Edit, Social Media, PDF, and Metadata.
- Added Popular Tools, Recently Added, Why Use ImageToolkit, Browser-based Privacy, and homepage FAQ sections.
- Added shared category data in `lib/tool-categories.ts` for upcoming category pages.
- Added homepage FAQ and WebApplication JSON-LD.

Phase 2 completed:

- Added category landing pages:
  - `/tools/convert`
  - `/tools/resize`
  - `/tools/compress`
  - `/tools/edit`
  - `/tools/social-media`
  - `/tools/pdf`
  - `/tools/metadata`
- Each category page includes 300+ words of English introduction content.
- Added category tool lists, related categories, FAQ sections, SEO metadata, canonical URLs, Open Graph, Twitter cards, Breadcrumb schema, and FAQ schema.
- Added category pages to `app/sitemap.ts`.

Phase 3 completed:

- Upgraded the shared tool page template used by all 60 existing tools.
- Added richer content sections to every tool page:
  - What is this tool?
  - How to use this tool
  - Key features
  - Supported formats
  - Privacy note
  - Related image tools
  - FAQ
- Ensured each tool page has at least 5 FAQ entries through shared fallback FAQ content.
- Increased related tools from 3 to 4 items per tool page.
- Updated FAQ JSON-LD to use the enriched FAQ set.

Next V2 phases:

- Phase 4: Add guides under `/guides`.
- Phase 5: Rebuild footer navigation and verify sitemap/schema coverage.

## Phase 2 Expansion

The Phase 2 expansion is adding browser-first tools in small batches. Format tools now include HEIC, AVIF, SVG, BMP, TIFF, GIF, ICO, WebP, and PDF utilities. HEIC and TIFF support depends on the user's browser decoder support.

Editing tools are being added with shared Canvas-based components for consistent browser-only image processing.

## Deployment Plan

The next planned deployment target is Vercel with the custom domain:

```text
imagetoolkitapp.com
```

The canonical production URL is:

```text
https://www.imagetoolkitapp.com
```
