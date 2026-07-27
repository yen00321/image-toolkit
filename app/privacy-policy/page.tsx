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
      <p>Last updated: July 27, 2026</p>

      <h2>Image Processing</h2>
      <p>
        Image Toolkit is designed to process images locally in your browser whenever possible. In the current MVP, when
        you upload an image to resize, compress, crop, or convert it, the selected file is handled by your browser and
        is not intentionally uploaded to our server before processing.
      </p>
      <p>
        Browser-based processing means your device reads the file, renders a preview, and creates a downloadable output
        where the selected format is supported. Some formats depend on your browser and operating system. If a file cannot
        be decoded locally, the tool may not be able to process it.
      </p>

      <h2>Personal Information</h2>
      <p>
        We do not require user accounts for the current tools. If you contact us by email, we may receive your email
        address and any information you choose to include in your message.
      </p>
      <p>
        Please do not send private images, identity documents, confidential business files, or sensitive personal
        information by email unless you intentionally want to share that information with us for support.
      </p>

      <h2>Cookies and Advertising</h2>
      <p>
        The website may include Google AdSense advertising areas. Third-party vendors may use cookies, device
        identifiers, or similar technologies to serve and measure ads according to their own policies.
      </p>
      <p>
        During site review or when no ad slots are configured, Image Toolkit may load the AdSense publisher script without
        displaying visible ad units inside the page content. This helps keep the user experience clean while the site is
        being reviewed or configured.
      </p>

      <h2>Analytics</h2>
      <p>
        Image Toolkit may use Google Analytics to understand aggregate website usage, such as which pages are visited,
        which tools are popular, and how the site performs across devices. Analytics data helps improve navigation,
        content quality, and tool reliability.
      </p>

      <h2>Data Security</h2>
      <p>
        No online service can guarantee perfect security. However, keeping image processing in the browser helps reduce
        the amount of image data that needs to leave your device.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Image Toolkit may use third-party services such as Google Analytics, Google AdSense, hosting infrastructure, and
        browser-provided APIs. These services may process technical information according to their own privacy policies.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Image Toolkit is a general-purpose image utility website and is not directed at children. We do not knowingly
        collect personal information from children through accounts because the current tools do not require accounts.
      </p>

      <h2>Policy Updates</h2>
      <p>
        This privacy policy may be updated as Image Toolkit adds new features, improves analytics, introduces configured
        advertising placements, or expands browser-based image tools.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, contact us at{" "}
        <a href="mailto:hello@imagetoolkitapp.com">hello@imagetoolkitapp.com</a>.
      </p>
    </StaticPageShell>
  );
}
