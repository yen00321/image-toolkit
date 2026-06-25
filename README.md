# Image Toolkit

Image Toolkit is an English-first, browser-based image tools website built for global SEO traffic and future Google AdSense monetization.

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
NEXT_PUBLIC_SITE_URL=https://imagetoolkitapp.com
```

This value is used for sitemap and metadata URLs.

Set the Google Analytics 4 Measurement ID in production:

```bash
NEXT_PUBLIC_GA_ID=G-6CHJ6TTVVW
```

Google Analytics is loaded with the official Next.js `Script` component and is enabled only in production when `NEXT_PUBLIC_GA_ID` is present. App Router page views are tracked on initial load and route changes.

## Privacy Note

The current MVP processes selected images in the browser using Canvas-based utilities. Real Google AdSense code is not included yet; the project currently uses ad placeholder blocks.

## Deployment Plan

The next planned deployment target is Vercel with the custom domain:

```text
imagetoolkitapp.com
```
