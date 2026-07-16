# Image Toolkit Progress Notes

Last updated: 2026-07-17

## Current Goal

Upgrade ImageToolkit V3 for stronger homepage conversion, tool discoverability, content value, UX, SEO, and Google AdSense review readiness after a low-value-content rejection.

Site name: Image Toolkit

Canonical production URL: `https://www.imagetoolkitapp.com`

Current direction: pause new tool creation and keep improving the existing 60-tool website with cleaner homepage UX, simpler navigation, stronger content quality, and AdSense-friendly presentation.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Browser-first image processing with Canvas
- Production-only Google AdSense loader with responsive in-page ad components

## Completed

- Replaced the old static HTML version with a Next.js project.
- Added shared site metadata and tool metadata in `lib/site.ts`.
- Added SEO helpers in `lib/metadata.ts`.
- Added generated `robots.txt` and `sitemap.xml` through Next routes:
  - `app/robots.ts`
  - `app/sitemap.ts`
- Unified SEO URLs to the canonical `www` domain:
  - `https://www.imagetoolkitapp.com`
- Added global layout, header, footer, homepage, cards, FAQ, and responsive ad component structure.
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
- Started ImageToolkit V2 Content + UX Upgrade after AdSense rejected the site once for low-value content.
- V2 Phase 1 completed:
  - Rebuilt the homepage so it no longer flat-lists all 60 tools.
  - Added hero copy: "Free Online Image Tools".
  - Added trust points for Free, Fast, Browser-based, and Privacy-friendly usage.
  - Added homepage tool search with placeholder: "Search image tools...".
  - Added category sections for Convert, Resize, Compress, Edit, Social Media, PDF, and Metadata.
  - Limited each homepage category preview to 6 tools.
  - Added View All links for upcoming category landing pages.
  - Added Popular Tools and Recently Added sections.
  - Added Why Use ImageToolkit and Browser-based Privacy content sections.
  - Added homepage FAQ content.
  - Added homepage FAQ JSON-LD and WebApplication JSON-LD.
  - Added reusable category data in `lib/tool-categories.ts`.
- V2 Phase 2 completed:
  - Added category landing pages:
    - `/tools/convert`
    - `/tools/resize`
    - `/tools/compress`
    - `/tools/edit`
    - `/tools/social-media`
    - `/tools/pdf`
    - `/tools/metadata`
  - Added 300+ words of English introduction content to each category page.
  - Added category tool lists and related category links.
  - Added 5 FAQ items to each category page.
  - Added SEO metadata, canonical URLs, Open Graph, Twitter cards, Breadcrumb schema, and FAQ schema.
  - Added category pages to `app/sitemap.ts`.
- V2 Phase 3 completed:
  - Upgraded the shared `ToolPageShell` used by all 60 existing tool pages.
  - Added "What is this tool?" explanatory content to every tool page.
  - Added Key features, Supported formats, and Privacy note sections.
  - Kept How to use, Related tools, FAQ, FAQ schema, Breadcrumb schema, and WebApplication schema active.
  - Ensured each tool page has at least 5 FAQ entries by merging shared fallback FAQ content.
  - Increased related tools from 3 to 4 per page.
- V3 optimization completed:
  - Improved homepage hero with Upload Image and Search Tools CTAs.
  - Upload Image links to `/image-resizer`.
  - Search Tools focuses the homepage search box.
  - Moved a stronger Popular Tools section directly below the hero.
  - Popular Tools now shows Image Resizer, Image Compressor, JPG to PNG, PNG to JPG, WebP to JPG, Image to WebP, Crop Image, and YouTube Thumbnail Resizer.
  - Recently Added now uses the latest tools from shared tool data instead of hardcoded page content.
  - Search now checks tool name, slug, category, description, and keywords.
  - Search suggestions are limited to 8 results and Enter opens the first result.
  - Tool cards now include icons, category labels, Free badges, hover motion, stronger visual hierarchy, and Open Tool CTAs.
  - Main navigation now includes Tools, Categories, Guides, About, Privacy, and Contact.
  - Added `/guides` with guide filtering, reading time, related tools, SEO metadata, Breadcrumb schema, and CollectionPage schema.
  - Rebuilt footer with ImageToolkit intro, Popular Tools, Categories, Resources, and Company sections.
  - Added deeper homepage content sections for Why use ImageToolkit, Browser-based privacy, Supported image formats, and Common use cases.
  - Added `/guides` to sitemap.
- V3.5 UI Cleanup completed:
  - Simplified the homepage hero to H1, subtitle, search, and one-line trust badges.
  - Removed dense Hero explanation cards and extra CTA buttons.
  - Changed homepage category sections into compact category cards.
  - Homepage categories now show only category name, tool count, short description, and View tools.
  - Popular Tools now shows 6 tools.
  - Recently Added now shows 4 tools.
  - Tool cards now use a smaller fixed-height layout, less description text, one category label, and a short `Open` CTA.
  - Why use ImageToolkit now shows only 3 concise points.
  - Homepage FAQ now shows 3 questions.
  - Footer was simplified to essential product, tool, category, and site links.
- Ad Placement optimization completed:
  - Added `ResponsiveAd`, `InArticleAd`, `ToolPageAd`, and `FooterAd` in `components/ads/AdUnits.tsx`.
  - Ad components are production-only and render only when matching ad slot environment variables are configured.
  - Removed the old visual ad reservation component and visible reservation UI.
  - Homepage now has a responsive ad below the hero/search area and a footer ad before the site footer.
  - Tool pages now use in-content ads after the main tool UI, after the privacy section, and before Related Tools.
  - Removed tool-page sidebar advertising.
  - Category pages now include a responsive ad above the tool list and one after each 12 tools for long categories.
  - Static pages now use the responsive ad component after page intros.
  - Privacy policy advertising copy was updated to describe real advertising areas instead of placeholders.
- AdSense low-value-content follow-up completed:
  - Confirmed production `ads.txt` is working as `text/plain`.
  - Added 10 standalone guide article pages under `/guides/[slug]`.
  - Added table of contents, article sections, related tools, and FAQ to each guide article.
  - Added Article schema, Breadcrumb schema, and FAQ schema to guide articles.
  - Linked `/guides` cards to full article pages.
  - Added guide article URLs to `app/sitemap.ts`.
- AdSense stability pass completed:
  - Expanded all 10 guide articles to 800+ words each.
  - Kept existing GA4, AdSense script, canonical URL, robots, sitemap, and tool URLs unchanged.
  - Verified `npm run typecheck` passes.
  - Verified `npm run build` passes and generates 88 pages.

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

Latest V2 verification on 2026-07-04:

- `npm.cmd run typecheck`
- `npm.cmd run build`
- Next generated 77 static pages successfully.
- Build note: Next.js still reports non-blocking `<img>` warnings in PDF preview components. These are existing local blob previews and do not block production builds.

Latest V3 verification on 2026-07-04:

- `npm.cmd run typecheck`
- `npm.cmd run build`
- Next generated 78 static pages successfully, including `/guides`.
- Local production spot checks returned 200 for:
  - `/`
  - `/guides`
  - `/image-resizer`
  - `/sitemap.xml`
  - `/robots.txt`
- Confirmed AdSense publisher script remains in `app/layout.tsx`.
- Confirmed GA4 loader remains in `app/layout.tsx` and still uses `NEXT_PUBLIC_GA_ID`.
- Confirmed sitemap includes `/guides`.
- Confirmed robots points to `https://www.imagetoolkitapp.com/sitemap.xml`.
- Build note: Next.js still reports non-blocking `<img>` warnings in PDF preview components.

Latest V3.5 verification on 2026-07-04:

- `npm.cmd run typecheck`
- `npm.cmd run build`
- Next generated 78 static pages successfully.
- Build note: Next.js still reports non-blocking `<img>` warnings in PDF preview components.
- No changes were made to AdSense script, GA4 script, canonical domain settings, robots.txt, sitemap structure, or existing tool URLs.

Latest Ad Placement verification on 2026-07-04:

- `npm.cmd run typecheck`
- `npm.cmd run build`
- Next generated 78 static pages successfully.
- Confirmed global AdSense publisher script remains in `app/layout.tsx`.
- Confirmed GA4 loader remains in `app/layout.tsx`.
- Confirmed no changes to canonical domain settings, robots.txt, sitemap structure, www redirect, or existing tool URLs.
- Build note: Next.js still reports non-blocking `<img>` warnings in PDF preview components.

Latest AdSense content follow-up verification on 2026-07-17:

- `npm.cmd run typecheck`
- `npm.cmd run build`
- Next generated 88 static pages successfully, including 10 guide article pages.
- Confirmed production `https://www.imagetoolkitapp.com/ads.txt` returns the correct plain text publisher record.
- Build note: Next.js still reports non-blocking `<img>` warnings in PDF preview components.

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

Latest phase:

- AdSense low-value-content follow-up: guide article pages
- Status: complete

Next phase:

- Add full long-form article pages for each guide listed on `/guides`.
- Add Article schema, FAQ schema, Breadcrumb schema, table of contents, and internal links to related tools for each guide article.

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
- Responsive ad components are present and ready for real ad slot IDs.
- Static AdSense-readiness pages are present. Contact email is currently `hello@imagetoolkitapp.com`.
- User images are intended to stay in the browser and not upload to a server.
- `npm install` reported 2 moderate vulnerabilities. Do not use `npm audit fix --force` blindly because it may break dependency compatibility.

## Recommended Next Steps

1. Verify the 60-tool production deployment, then plan the 100-tool roadmap after AdSense review status is clear.
2. Add proper multilingual SEO routes and `hreflang`.
3. Add long-form SEO content under each tool page.
4. Improve mobile visual QA once browser access is available.
5. Add image test fixtures and automated component checks.
6. Add real AdSense ad slot IDs after approval/configuration.
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
