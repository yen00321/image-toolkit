import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the terms of use for Image Toolkit, including responsible use, image rights, availability, and limitations.",
};

export default function TermsPage() {
  return (
    <StaticPageShell
      title="Terms of Use"
      description="These terms explain the basic rules for using Image Toolkit and its browser-based image tools."
    >
      <p>Last updated: June 25, 2026</p>

      <h2>Use of the Website</h2>
      <p>
        By using Image Toolkit, you agree to use the website responsibly and only process images that you own, have
        permission to use, or are legally allowed to edit.
      </p>

      <h2>User Responsibility</h2>
      <p>
        You are responsible for the images you choose, edit, and download. Do not use Image Toolkit for unlawful,
        harmful, infringing, deceptive, or abusive activity.
      </p>

      <h2>Tool Availability</h2>
      <p>
        The tools are provided on an as-is and as-available basis. We aim to make the website useful and reliable, but
        we do not guarantee that every browser, file, format, or workflow will work perfectly.
      </p>

      <h2>No Professional Advice</h2>
      <p>
        Image Toolkit provides technical image utilities. It does not provide legal, financial, design, or marketing
        advice.
      </p>

      <h2>Changes to the Terms</h2>
      <p>
        We may update these terms as the website grows, especially if new features, AI tools, account systems, or
        advertising integrations are added.
      </p>
    </StaticPageShell>
  );
}
