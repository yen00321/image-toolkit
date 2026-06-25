import type { Metadata } from "next";
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
        This address should be connected to a real inbox before public launch.
      </p>

      <h2>What to Include</h2>
      <ul>
        <li>The tool page you were using.</li>
        <li>Your browser and device type.</li>
        <li>A short description of the issue or suggestion.</li>
      </ul>

      <h2>Privacy Reminder</h2>
      <p>
        Do not email sensitive images or private files unless you are comfortable sharing them. The current tools are
        designed to process selected images locally in your browser.
      </p>
    </StaticPageShell>
  );
}
