import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { FadeIn } from "@/components/ui/fade-in";
import {
  architectureReview,
  flagshipEngagement,
  services,
} from "@/lib/content/services";
import { commercialModel, siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Architecture Review and Hybrid Quantum Infrastructure Workflows — specialized engineering for hybrid quantum-classical systems.",
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
            description="Mathnetica is a commercial engineering company. Organizations hire us for Architecture Review and for designing controlled hybrid quantum infrastructure workflows — not generic DevOps, cloud or AI consulting."
          />
          <FadeIn className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>{commercialModel.offerLine}</p>
          </FadeIn>
          <FadeIn className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.commercialCtaHref}
              className="btn-pill-primary"
            >
              {siteConfig.commercialCta}
            </Link>
            <p className="text-base text-muted-foreground">
              {architectureReview.priceNote} · then{" "}
              <Link
                href={`#${flagshipEngagement.slug}`}
                className="underline-offset-4 hover:underline"
              >
                {flagshipEngagement.title}
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
            title="Start with an Architecture Review."
            description="The fastest path into Hybrid Quantum Infrastructure Workflows — before a larger design or implementation engagement."
            ctaLabel={siteConfig.commercialCta}
            ctaHref={siteConfig.commercialCtaHref}
          />
        </div>
      </section>
    </>
  );
}
