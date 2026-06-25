import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "About Image Toolkit",
  description:
    "Learn about Image Toolkit, a browser-first collection of free online image tools for resizing, compressing, cropping, and converting images.",
};

export default function AboutPage() {
  return (
    <StaticPageShell
      title="About Image Toolkit"
      description="Image Toolkit is a growing collection of simple, fast, browser-first image tools for everyday creators, marketers, students, and website owners."
    >
      <h2>What We Build</h2>
      <p>
        Image Toolkit helps people resize, compress, crop, and convert images without installing software. The current
        MVP focuses on practical utilities that work directly in modern browsers.
      </p>

      <h2>Browser-First Processing</h2>
      <p>
        Most tools in this version use the browser Canvas API. That means selected images are processed on your device
        and are not uploaded to our server before processing.
      </p>

      <h2>Our Roadmap</h2>
      <p>
        The project is designed to expand into more image utilities, including AI Background Remover, AI Upscaler,
        batch image tools, and more SEO-focused guides for common image workflows.
      </p>
    </StaticPageShell>
  );
}
