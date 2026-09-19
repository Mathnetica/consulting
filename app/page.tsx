import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Expertise } from "@/components/sections/Expertise";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { ResearchList } from "@/components/sections/ResearchList";
import { CTASection } from "@/components/sections/CTASection";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { FadeIn } from "@/components/ui/fade-in";
import { getSortedResearchArticles } from "@/lib/content/research";
import { builtOn, platform, siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mathnetica — Quantum Infrastructure Engineering",
    description: "Software infrastructure for hybrid classical–quantum computing.",
    url: "/",
  },
};

export default function HomePage() {
  const latestResearch = getSortedResearchArticles().slice(0, 3);

  return (
    <>
      <Hero />

      <section
        id="build"
        className="container-site section-space border-t border-border"
      >
        <div className="container-content">
          <SectionIntro
            eyebrow="What we build"
            title="One engineering problem. Three layers."
            description="Quantum processors introduce a new class of compute with different execution, scheduling and operational characteristics. Mathnetica is building the infrastructure layer required to integrate that compute with existing systems."
          />
          <Expertise />
        </div>
      </section>

      <section
        id="platform"
        className="container-site section-space border-t border-border"
      >
        <div className="container-content">
          <SectionIntro
            eyebrow="The platform"
            title="One infrastructure layer. Classical and quantum compute."
            description="Mathnetica builds the quantum-aware control layer for modern computing infrastructure. We extend proven cloud-native and HPC technologies with the resource models, provider integrations and operational capabilities required to run quantum workloads."
          />
          <div className="mt-12 md:mt-14">
            <ArchitectureDiagram variant="home" />
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
              {platform.principle}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro
            eyebrow="Open source"
            title={platform.name}
            description={`${platform.tagline} Status: ${platform.status}.`}
          />
          <FadeIn className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>{platform.summary}</p>
          </FadeIn>
          <FadeIn className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/platform" className="btn-pill-primary">
              Explore Platform
            </Link>
            <a
              href={platform.github}
              className="text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro
            eyebrow="Research"
            title="Engineering the missing pieces."
            description="Mathnetica Research documents the engineering problems we encounter while building infrastructure for hybrid classical–quantum computing. Research feeds directly into the platform."
          />
          <div className="mt-12 md:mt-14">
            <ResearchList articles={latestResearch} compact />
          </div>
          <FadeIn className="mt-8">
            <Link
              href="/research"
              className="text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
            >
              All research
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <CTASection
            title="Building infrastructure for the next class of compute."
            description="Quantum processors will not replace classical infrastructure. They introduce another specialized compute resource. Mathnetica is building the software infrastructure required to operate it."
            ctaLabel={siteConfig.primaryCta}
            ctaHref="/platform"
          />
        </div>
      </section>
    </>
  );
}
