import type { Metadata } from "next";
import Link from "next/link";
import { StaticPageShell } from "@/components/StaticPageShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Image Toolkit",
  description: "Contact Image Toolkit for support, feedback, privacy questions, or advertising inquiries.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Image Toolkit",
    description: "Contact Image Toolkit for support, feedback, privacy questions, or advertising inquiries.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <StaticPageShell
      title="Contact"
      description="Have feedback, a support question, or a partnership idea? Reach out to Image Toolkit."
    >
      <h2>Email</h2>
      <p>
        Contact us at <a href="mailto:hello@imagetoolkitapp.com">hello@imagetoolkitapp.com</a>.
      </p>
      <p>
        Use this address for support questions, bug reports, privacy questions, content feedback, or general website
        inquiries. We aim to review clear, actionable messages and use feedback to improve the tools and guides.
      </p>

      <h2>What to Include</h2>
      <ul>
        <li>The tool page you were using.</li>
        <li>Your browser and device type.</li>
        <li>A short description of the issue or suggestion.</li>
        <li>The file format you were working with, such as JPG, PNG, WebP, HEIC, TIFF, or PDF.</li>
        <li>Whether the problem happened during upload, preview, conversion, download, or page navigation.</li>
      </ul>

      <h2>Privacy Reminder</h2>
      <p>
        Do not email sensitive images or private files unless you are comfortable sharing them. The current tools are
        designed to process selected images locally in your browser.
      </p>

      <h2>Useful Links</h2>
      <ul>
        <li>
          Read the <Link href="/privacy-policy">Privacy Policy</Link> to understand browser-based image processing.
        </li>
        <li>
          Read the <Link href="/terms">Terms of Use</Link> for tool limitations and responsible use.
        </li>
        <li>
          Visit the <Link href="/faq">FAQ</Link> for common questions about formats, privacy, and downloads.
        </li>
        <li>
          Browse <Link href="/guides">Guides</Link> for image format, compression, resizing, and website performance help.
        </li>
      </ul>

      <h2>Response Expectations</h2>
      <p>
        Image Toolkit is a growing project, so response times can vary. Clear reports with the page URL, browser, device,
        and file type are the easiest to investigate.
      </p>
    </StaticPageShell>
  );
}
