import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Image Toolkit",
  description:
    "Learn about Image Toolkit, a browser-first collection of free online image tools for resizing, compressing, cropping, and converting images.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Image Toolkit",
    description:
      "Learn about Image Toolkit, a browser-first collection of free online image tools for resizing, compressing, cropping, and converting images.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <StaticPageShell
      title="About Image Toolkit"
      description="Image Toolkit is a growing collection of simple, fast, browser-first image tools for everyday creators, marketers, students, and website owners."
    >
      <h2>What We Build</h2>
      <p>
        Image Toolkit helps people prepare images for everyday digital work without installing desktop software. The
        site includes focused tools for resizing, compressing, cropping, converting, editing, PDF image workflows, social
        media image sizes, and metadata cleanup. Each tool is designed around a specific task so users can quickly open a
        page, choose an image, preview the result, and download a new file.
      </p>
      <p>
        The project is built for creators, students, developers, marketers, store owners, support teams, bloggers, and
        website owners who often need practical image fixes. Instead of presenting one heavy editor with many unrelated
        controls, Image Toolkit organizes tools by purpose: conversion, resizing, compression, editing, social media,
        PDF, and metadata.
      </p>

      <h2>Browser-First Processing</h2>
      <p>
        Most tools in this version use browser APIs such as Canvas, local file reading, and client-side export. That
        means selected images are processed on your device whenever the browser supports the file type. This browser-first
        approach reduces unnecessary uploads, keeps common workflows fast, and gives users more control over their source
        files.
      </p>
      <p>
        Some advanced formats depend on the browser and operating system. HEIC, TIFF, AVIF, PDF, and animated formats may
        behave differently across devices. When a file cannot be decoded locally, the tool should fail clearly rather than
        silently uploading private files elsewhere.
      </p>

      <h2>Content and Guides</h2>
      <p>
        Image Toolkit is not only a tool directory. The site also includes guides that explain image formats, compression,
        resolution, website performance, and social media image sizing. These articles help users understand why a format
        or setting matters before they download the final file.
      </p>

      <h2>Our Principles</h2>
      <ul>
        <li>Keep tools free and easy to use.</li>
        <li>Process images in the browser whenever possible.</li>
        <li>Keep the original file unchanged and export a new copy.</li>
        <li>Use clean navigation so each task is easy to find.</li>
        <li>Write practical guides that help users make better image decisions.</li>
      </ul>

      <h2>Who Uses Image Toolkit</h2>
      <p>
        People use Image Toolkit to resize profile pictures, compress website images, convert WebP or HEIC files, crop
        screenshots, prepare YouTube thumbnails, create Instagram-ready images, remove metadata, and bundle images into
        PDFs. The tools are intentionally practical and repeatable for common image workflows.
      </p>

      <h2>Our Roadmap</h2>
      <p>
        The current focus is quality, reliability, and useful content around the existing browser-first tools. Future
        expansion may include batch workflows, more file format utilities, and AI image features such as background
        removal or upscaling after the core site has a stable audience and policy-friendly foundation.
      </p>
    </StaticPageShell>
  );
}
