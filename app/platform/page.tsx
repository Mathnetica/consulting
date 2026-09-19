import type { Metadata } from "next";
import Link from "next/link";
import {
  ArchitectureDiagram,
  HybridWorkflowDiagram,
} from "@/components/sections/ArchitectureDiagram";
import { CTASection } from "@/components/sections/CTASection";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { FadeIn } from "@/components/ui/fade-in";
import { builtOn, platform, siteConfig } from "@/lib/content/site";

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
            description="Mathnetica is the quantum-aware layer. Kubernetes, Argo, Kueue and HPC are the foundation — not the product."
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
          <SectionIntro title="Architecture." />
          <div className="mt-12 md:mt-14">
            <ArchitectureDiagram variant="detail" />
          </div>
          <FadeIn className="mt-12">
            <p className="text-sm tracking-[0.14em] text-muted-foreground uppercase">
              Built on
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {builtOn.map((item) => (
                <li key={item} className="text-base text-foreground/80">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {platform.principle} Kubernetes is our initial infrastructure
              environment — not our identity.
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
              Quantum applications increasingly combine classical preprocessing,
              optimization, quantum execution and classical post-processing.
              Mathnetica treats the complete workflow as an infrastructure
              problem.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <CTASection
            title="Follow the platform."
            description={`${siteConfig.name} is building ${platform.name} in the open. Research notes document the engineering problems we hit along the way.`}
            ctaLabel="Read the research"
            ctaHref="/research"
          />
        </div>
      </section>
    </>
  );
}
