import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { FadeIn } from "@/components/ui/fade-in";
import {
  architecturePoc,
  infrastructureReview,
  services,
} from "@/lib/content/services";
import { commercialModel, siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Hybrid Quantum Infrastructure Review (€1,950) and Hybrid Quantum Architecture & PoC (from €7,500) — specialized engineering for hybrid quantum-classical systems.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-site pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container-content">
          <SectionIntro
            eyebrow="Engineering"
            title="Specialized quantum infrastructure engineering."
            description="Mathnetica is a commercial engineering company. Organizations hire us to understand how quantum computing fits existing cloud, Kubernetes and HPC infrastructure — not for generic DevOps, cloud or AI consulting."
          />
          <FadeIn className="mt-8 max-w-2xl space-y-3 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>{commercialModel.offerLine}</p>
            <p className="text-foreground/80">{commercialModel.europeanLine}</p>
          </FadeIn>
          <FadeIn className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.commercialCtaHref}
              className="btn-pill-primary"
            >
              {siteConfig.commercialCta}
            </Link>
            <p className="text-base text-muted-foreground">
              {infrastructureReview.priceNote}
              {" · "}
              <Link
                href={`#${architecturePoc.slug}`}
                className="underline-offset-4 hover:underline"
              >
                then PoC from €7,500
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-site pb-24 md:pb-40">
        <div className="container-content">
          <ServiceSection services={services} detailed />
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <CTASection
            title="Start with a Hybrid Quantum Infrastructure Review."
            description="The fastest path to technical clarity — before a Hybrid Quantum Architecture & PoC or a larger implementation engagement."
            ctaLabel={siteConfig.commercialCta}
            ctaHref={siteConfig.commercialCtaHref}
          />
        </div>
      </section>
    </>
  );
}
