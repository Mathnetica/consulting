import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing use of the Mathnetica website and general conditions for engaging our consulting services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="13 September 2026">
      <LegalSection title="Agreement">
        <p>
          By using mathnetica.com you agree to these Terms of Use. If you do
          not agree, please do not use the site. Separate written agreements
          apply to consulting engagements.
        </p>
      </LegalSection>

      <LegalSection title="Who we are">
        <p>
          The site is operated by <strong>{siteConfig.name}</strong>,{" "}
          {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
          {siteConfig.address.city}, {siteConfig.address.country}. Contact:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </LegalSection>

      <LegalSection title="Website content">
        <p>
          Content on this site is provided for general information about our
          services and research interests. It does not constitute professional
          advice, an offer, or a commitment to enter into a contract. We may
          update or remove content without notice.
        </p>
        <p>
          Research notes and articles are illustrative and may include
          placeholders or evolving views. They should not be relied on as
          production architecture guidance without a formal engagement.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <ul>
          <li>Do not misuse the site or attempt unauthorized access.</li>
          <li>
            Do not submit unlawful, misleading or harmful content through forms.
          </li>
          <li>
            Do not scrape or copy substantial site content for commercial reuse
            without permission.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          Unless otherwise stated, text, design and branding on this site are
          owned by {siteConfig.name} or used under licence. You may browse and
          share links; reproduction beyond fair use requires prior written
          consent.
        </p>
      </LegalSection>

      <LegalSection title="Enquiries and services">
        <p>
          Submitting a contact form does not create a client relationship.
          Project scope, fees, confidentiality and deliverables are defined in a
          separate statement of work or contract.
        </p>
      </LegalSection>

      <LegalSection title="Liability">
        <p>
          To the fullest extent permitted by law, {siteConfig.name} is not
          liable for indirect or consequential losses arising from use of this
          website. Nothing in these terms excludes liability that cannot be
          limited under applicable Dutch or EU law.
        </p>
      </LegalSection>

      <LegalSection title="Privacy and cookies">
        <p>
          Personal data is handled as described in our{" "}
          <Link href="/privacy">Privacy Policy</Link> and{" "}
          <Link href="/cookies">Cookie Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These terms are governed by the laws of the Netherlands. Courts in
          Amsterdam have jurisdiction, without prejudice to mandatory consumer
          protections where applicable.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may revise these terms periodically. Continued use of the site
          after changes constitutes acceptance of the updated terms.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
