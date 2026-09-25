import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request an Architecture Review or discuss quantum infrastructure architecture with Mathnetica.",
  alternates: { canonical: "/contact" },
};

type ContactPageProps = {
  searchParams: Promise<{ topic?: string | string[] }>;
};

function firstParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const topic = firstParam((await searchParams).topic);
  const isArchitectureReview = topic === "architecture-review";
  const mailtoSubject = isArchitectureReview
    ? "Architecture Review enquiry"
    : "Architecture enquiry";
  const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(mailtoSubject)}`;

  return (
    <section className="container-site pt-20 pb-24 md:pt-28 md:pb-40">
      <div className="container-content max-w-2xl">
        <FadeIn immediate>
          <p className="mb-4 text-sm tracking-[0.14em] text-muted-foreground uppercase">
            Contact
          </p>
          <h1 className="text-statement">
            {isArchitectureReview
              ? "Request an Architecture Review."
              : "Discuss your architecture."}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            {isArchitectureReview
              ? "Tell us about your system, constraints and goals. Architecture Review is the usual starting point for quantum infrastructure and hybrid classical–quantum work."
              : "Architecture Review, hybrid quantum-classical architecture, QPU / HPC integration, or research collaboration. Mathnetica is a commercial engineering company — open source and research support the work, they are not the whole story."}
          </p>
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
            {isArchitectureReview
              ? siteConfig.commercialCta
              : siteConfig.finalCta}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
