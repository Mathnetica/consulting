import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import {
  architecturePoc,
  infrastructureReview,
} from "@/lib/content/services";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a Hybrid Quantum Infrastructure Review or discuss a hybrid quantum architecture PoC with Mathnetica.",
  alternates: { canonical: "/contact" },
};

type ContactPageProps = {
  searchParams: Promise<{ topic?: string | string[] }>;
};

function firstParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

/** Accept new topics and legacy architecture-review alias. */
function resolveTopic(raw?: string) {
  if (!raw) return "general" as const;
  if (raw === "architecture-review" || raw === "infrastructure-review") {
    return "infrastructure-review" as const;
  }
  if (raw === "architecture-poc") return "architecture-poc" as const;
  return "general" as const;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const topic = resolveTopic(firstParam((await searchParams).topic));

  const copy =
    topic === "infrastructure-review"
      ? {
          title: "Book a Hybrid Quantum Infrastructure Review.",
          body: "Tell us about your cloud, Kubernetes or HPC environment and goals. The Review is a technical architecture assessment — not an introductory quantum presentation.",
          subject: "Hybrid Quantum Infrastructure Review enquiry",
          cta: siteConfig.commercialCta,
          note: infrastructureReview.priceNote,
        }
      : topic === "architecture-poc"
        ? {
            title: "Discuss a Hybrid Quantum Architecture & PoC.",
            body: "Usually follows an Infrastructure Review. Describe the hybrid path you want to prove — simulator and/or QPU — without assuming production maturity or quantum advantage.",
            subject: "Hybrid Quantum Architecture & PoC enquiry",
            cta: "Discuss a Proof of Concept",
            note: architecturePoc.priceNote,
          }
        : {
            title: "Discuss your architecture.",
            body: "Infrastructure Review, hybrid PoC, QPU/HPC integration, or research collaboration. Mathnetica is a commercial engineering company — open source and research support the work.",
            subject: "Architecture enquiry",
            cta: siteConfig.finalCta,
            note: null,
          };

  const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(copy.subject)}`;

  return (
    <section className="container-site pt-20 pb-24 md:pt-28 md:pb-40">
      <div className="container-content max-w-2xl">
        <FadeIn immediate>
          <p className="mb-4 text-sm tracking-[0.14em] text-muted-foreground uppercase">
            Contact
          </p>
          <h1 className="text-statement">{copy.title}</h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            {copy.body}
          </p>
          {copy.note ? (
            <p className="mt-4 text-base text-foreground/80">{copy.note}</p>
          ) : null}
          <div className="mt-12 space-y-3 text-base md:text-lg">
            <p>
              <a
                href={mailtoHref}
                className="text-xl font-medium underline-offset-4 transition-opacity hover:opacity-70 hover:underline md:text-2xl"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="text-muted-foreground">{siteConfig.locationShort}</p>
          </div>
          <a href={mailtoHref} className="btn-pill-primary mt-10 inline-flex">
            {copy.cta}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
