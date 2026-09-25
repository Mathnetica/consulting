import type { Metadata } from "next";
import Link from "next/link";
import {
  ArchitectureDiagram,
  HybridWorkflowDiagram,
} from "@/components/sections/ArchitectureDiagram";
import { CTASection } from "@/components/sections/CTASection";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { FadeIn } from "@/components/ui/fade-in";
import {
  platform,
  qbridge,
  researchDirections,
  siteConfig,
} from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Platform",
  description: platform.tagline,
  alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
  return (
    <>
      <section className="container-site pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container-content">
          <SectionIntro
            eyebrow={platform.status}
            title={platform.name}
            description={platform.tagline}
          />
          <FadeIn className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>{platform.summary}</p>
            <p>{platform.roadmapNote}</p>
          </FadeIn>
          <FadeIn className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={platform.github}
              className="btn-pill-primary"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
            <Link
              href="/research"
              className="text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
            >
              Related research
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro
            title="Control plane."
            description="Mathnetica sits above infrastructure technologies. Kubernetes, HPC and provider SDKs are foundations — not the product."
          />
          <div className="mt-14 space-y-0 border-y border-border">
            {platform.layers.map((layer, index) => (
              <FadeIn
                key={layer.name}
                delayMs={index * 50}
                className="border-b border-border py-8 last:border-b-0 md:py-10"
              >
                <h3 className="text-xl tracking-tight md:text-2xl">
                  {layer.name}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {layer.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro
            title="Research directions."
            description="Areas we are exploring and building — not a claim of finished production features."
          />
          <div className="mt-14 space-y-0 border-y border-border">
            {researchDirections.map((item, index) => (
              <FadeIn
                key={item.title}
                delayMs={index * 40}
                className="border-b border-border py-8 last:border-b-0 md:py-10"
              >
                <h3 className="text-xl tracking-tight md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {item.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro title="Architecture." />
          <div className="mt-12 md:mt-14">
            <ArchitectureDiagram variant="detail" />
          </div>
          <FadeIn className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              {platform.principle} Kubernetes is an initial laboratory — not our
              identity. The same control ideas should remain meaningful on HPC
              and other environments.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro
            title="Hybrid workload."
            description="One workload. Multiple classes of compute."
          />
          <div className="mt-12 md:mt-14">
            <HybridWorkflowDiagram />
          </div>
          <FadeIn className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Useful quantum applications combine classical preparation,
              simulation, quantum execution and classical analysis. Mathnetica
              treats the complete workflow as an infrastructure problem.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro
            eyebrow={qbridge.status}
            title={qbridge.name}
            description={qbridge.summary}
          />
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <CTASection
            title="Need architecture help today?"
            description={`While ${platform.name} remains experimental, organizations can hire Mathnetica for Architecture Review and specialized hybrid quantum infrastructure engineering.`}
            ctaLabel={siteConfig.commercialCta}
            ctaHref={siteConfig.commercialCtaHref}
          />
        </div>
      </section>
    </>
  );
}
