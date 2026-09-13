import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Mathnetica collects, uses and protects personal data when you use our website or contact us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="13 September 2026">
      <LegalSection title="Who we are">
        <p>
          <strong>{siteConfig.name}</strong> (“we”, “us”) is an engineering
          consultancy based in Amsterdam Zuid. Postal address:{" "}
          {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
          {siteConfig.address.city}, {siteConfig.address.country}. For privacy
          questions, contact{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
        <p>
          This policy explains how we process personal data when you visit{" "}
          <strong>mathnetica.com</strong>, submit an enquiry, or otherwise
          communicate with us. We process data in line with the EU General Data
          Protection Regulation (GDPR) and applicable Dutch law.
        </p>
      </LegalSection>

      <LegalSection title="What data we collect">
        <p>Depending on how you interact with us, we may process:</p>
        <ul>
          <li>
            <strong>Contact details</strong> — name, work email, company name
            and the contents of your message when you use the contact form or
            email us.
          </li>
          <li>
            <strong>Technical data</strong> — IP address, browser type, device
            information and basic server logs needed to operate and secure the
            website.
          </li>
          <li>
            <strong>Cookie preferences</strong> — your consent choices stored
            locally in your browser so we can respect them on later visits.
          </li>
        </ul>
        <p>
          We do not intentionally collect special-category data through this
          website. Please do not include sensitive personal information in
          enquiry forms.
        </p>
      </LegalSection>

      <LegalSection title="Why we use your data">
        <ul>
          <li>
            <strong>Responding to enquiries</strong> — to reply to project
            requests and schedule conversations (legitimate interests /
            pre-contractual steps).
          </li>
          <li>
            <strong>Operating the website</strong> — hosting, security,
            troubleshooting and performance (legitimate interests).
          </li>
          <li>
            <strong>Consent preferences</strong> — to store and honour your
            cookie choices (consent / legal obligation where applicable).
          </li>
          <li>
            <strong>Optional analytics</strong> — only if you accept analytics
            cookies, to understand aggregate traffic and improve the site
            (consent).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Where data is processed">
        <p>
          Website hosting and email delivery may involve processors in the EU
          and, where necessary, other regions with appropriate safeguards (for
          example Standard Contractual Clauses). Contact form messages may be
          delivered by our email provider (currently Resend when configured).
        </p>
      </LegalSection>

      <LegalSection title="How long we keep data">
        <p>
          Enquiry correspondence is kept for as long as needed to handle your
          request and for a reasonable follow-up period, unless a longer
          retention is required for legal or commercial reasons. Server logs are
          rotated on a short cycle. Cookie preference data remains in your
          browser until you clear it or change your choice.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>Under GDPR you may have the right to:</p>
        <ul>
          <li>access your personal data</li>
          <li>rectify inaccurate data</li>
          <li>erase data in certain circumstances</li>
          <li>restrict or object to processing</li>
          <li>data portability where applicable</li>
          <li>withdraw consent at any time</li>
          <li>
            lodge a complaint with the Autoriteit Persoonsgegevens (Dutch DPA)
          </li>
        </ul>
        <p>
          To exercise these rights, email{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </LegalSection>

      <LegalSection title="Sharing">
        <p>
          We do not sell personal data. We share data only with service
          providers that help us run the website and communications, or when
          required by law.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this policy from time to time. The “Last updated” date
          at the top of this page will change when we do.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
