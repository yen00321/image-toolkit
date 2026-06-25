import type { Metadata } from "next";
import { StaticPageShell } from "@/components/StaticPageShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Image Toolkit privacy policy, including how browser-based image processing works and how future advertising may use cookies.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy",
    description:
      "Read the Image Toolkit privacy policy, including how browser-based image processing works and how future advertising may use cookies.",
    url: `${siteConfig.url}/privacy-policy`,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <StaticPageShell
      title="Privacy Policy"
      description="This policy explains how Image Toolkit handles images, basic website data, and future advertising integrations."
    >
      <p>Last updated: June 25, 2026</p>

      <h2>Image Processing</h2>
      <p>
        Image Toolkit is designed to process images locally in your browser whenever possible. In the current MVP, when
        you upload an image to resize, compress, crop, or convert it, the selected file is handled by your browser and
        is not intentionally uploaded to our server before processing.
      </p>

      <h2>Personal Information</h2>
      <p>
        We do not require user accounts for the current tools. If you contact us by email, we may receive your email
        address and any information you choose to include in your message.
      </p>

      <h2>Cookies and Advertising</h2>
      <p>
        The current website includes advertising placeholder areas only. If Google AdSense or another advertising
        provider is added later, third-party vendors may use cookies, device identifiers, or similar technologies to
        serve and measure ads according to their own policies.
      </p>

      <h2>Analytics</h2>
      <p>
        We may add privacy-conscious analytics in the future to understand which tools are useful and to improve the
        website. This page will be updated if analytics are added.
      </p>

      <h2>Data Security</h2>
      <p>
        No online service can guarantee perfect security. However, keeping image processing in the browser helps reduce
        the amount of image data that needs to leave your device.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, contact us at{" "}
        <a href="mailto:hello@imagetoolkitapp.com">hello@imagetoolkitapp.com</a>.
      </p>
    </StaticPageShell>
  );
}
