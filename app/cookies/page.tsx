import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Mathnetica uses cookies and similar technologies on mathnetica.com, and how to manage your preferences.",
  alternates: { canonical: "/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="13 September 2026">
      <LegalSection title="Overview">
        <p>
          This policy explains how <strong>{siteConfig.name}</strong> uses
          cookies and similar technologies on mathnetica.com. For personal data
          processing more broadly, see our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="What are cookies?">
        <p>
          Cookies are small text files stored on your device. Similar
          technologies include local storage entries used to remember
          preferences. Some cookies are essential for the site to work; others
          are optional and used only with your consent.
        </p>
      </LegalSection>

      <LegalSection title="Cookies we use">
        <ul>
          <li>
            <strong>Essential / functional</strong> — required to provide the
            website securely and to remember your cookie consent choice
            (stored locally as <code>mathnetica-cookie-consent</code>). These
            do not require consent beyond what is necessary for the service.
          </li>
          <li>
            <strong>Analytics (optional)</strong> — used only if you choose
            “Accept” for analytics. They help us understand aggregate visits and
            improve content. If analytics tools are not active, accepting this
            category simply stores your preference for future use.
          </li>
        </ul>
        <p>
          We do not currently use advertising or social tracking cookies on this
          site.
        </p>
      </LegalSection>

      <LegalSection title="Managing preferences">
        <p>
          When you first visit, you can Accept analytics cookies, Reject
          optional cookies, or open Cookie settings. You can change your mind
          later via the “Cookie settings” link in the footer.
        </p>
        <p>
          You can also clear cookies and site data in your browser settings.
          Blocking all cookies may affect basic site behaviour.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about cookies:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
