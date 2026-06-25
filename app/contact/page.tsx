import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";

export const metadata: Metadata = {
  title: "Contact Image Toolkit",
  description: "Contact Image Toolkit for support, feedback, privacy questions, or advertising inquiries.",
};

export default function ContactPage() {
  return (
    <StaticPageShell
      title="Contact"
      description="Have feedback, a support question, or a partnership idea? Reach out to Image Toolkit."
    >
      <h2>Email</h2>
      <p>
        Contact us at <a href="mailto:hello@example.com">hello@example.com</a>.
      </p>
      <p>
        This is a placeholder email for the MVP. Replace it with a real address after choosing the domain name, such as
        support@yourdomain.com or contact@yourdomain.com.
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
