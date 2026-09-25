import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Expertise } from "@/components/sections/Expertise";
import {
  ArchitectureDiagram,
  HybridRelationshipDiagram,
} from "@/components/sections/ArchitectureDiagram";
import { ResearchList } from "@/components/sections/ResearchList";
import { CTASection } from "@/components/sections/CTASection";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { FadeIn } from "@/components/ui/fade-in";
import { getSortedResearchArticles } from "@/lib/content/research";
import {
  audiences,
  collaborate,
  commercialModel,
  infrastructureGap,
  platform,
  qbridge,
  researchDirections,
  siteConfig,
} from "@/lib/content/site";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mathnetica — Quantum Infrastructure Engineering",
    description:
      "Infrastructure and control software for hybrid quantum-classical computing.",
    url: "/",
  },
};

export default function HomePage() {
  const latestResearch = getSortedResearchArticles().slice(0, 3);

  return (
    <>
      <Hero />

      <section className="bg-dot-grid border-t border-border">
        <div className="container-site section-space">
          <div className="container-content">
            <SectionIntro
              eyebrow={infrastructureGap.eyebrow}
              title={infrastructureGap.title}
            />
            <FadeIn className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {infrastructureGap.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </FadeIn>
            <div className="mt-12 md:mt-14">
              <HybridRelationshipDiagram />
            </div>
          </div>
        </div>
      </section>

      <section
        id="build"
        className="container-site section-space border-t border-border"
      >
        <div className="container-content">
          <SectionIntro
            eyebrow="What we are building"
            title="Infrastructure for hybrid quantum-classical systems."
            description="Quantum remains central. Useful quantum workloads still require classical compute, GPUs, HPC and simulators. Mathnetica researches and builds the control layer connecting them."
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
            title="A control layer above existing infrastructure."
            description={`${platform.summary} Status: ${platform.status}.`}
          />
          <div className="mt-12 md:mt-14">
            <ArchitectureDiagram variant="home" />
          </div>
          <FadeIn className="mt-12">
            <p className="text-sm tracking-[0.14em] text-muted-foreground uppercase">
              Research directions
            </p>
            <ul className="mt-6 space-y-0 border-y border-border">
              {researchDirections.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-border py-5 last:border-b-0"
                >
                  <p className="text-lg tracking-tight md:text-xl">
                    {item.title}
                  </p>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {platform.principle}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro
            eyebrow="Who it's for"
            title="Teams that need quantum compute inside real infrastructure."
          />
          <div className="mt-14 space-y-0 border-y border-border md:mt-16">
            {audiences.map((audience, index) => (
              <FadeIn
                key={audience.title}
                delayMs={index * 50}
                className="border-b border-border py-8 last:border-b-0 md:py-10"
              >
                <div className="grid gap-3 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-10">
                  <h3 className="text-xl tracking-tight md:text-2xl">
                    {audience.title}
                  </h3>
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {audience.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro
            eyebrow="Open source"
            title={platform.name}
            description={`${platform.tagline} Status: ${platform.status}.`}
          />
          <FadeIn className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>{platform.roadmapNote}</p>
            <p>
              <span className="text-foreground">{qbridge.name}</span> —{" "}
              {qbridge.summary}
            </p>
            <p className="text-foreground/80">{commercialModel.flywheel}</p>
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
            description="Mathnetica Research documents the engineering problems we encounter while building infrastructure for hybrid quantum-classical computing — including placement, automation, sovereignty and observability. Research feeds directly into the platform."
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
          <SectionIntro
            eyebrow={commercialModel.eyebrow}
            title={commercialModel.title}
            description={commercialModel.body}
          />
          <FadeIn className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
            <p>{commercialModel.offerLine}</p>
          </FadeIn>
          <div className="mt-14 space-y-0 border-y border-border md:mt-16">
            {services.map((service, index) => (
              <FadeIn
                key={service.slug}
                delayMs={index * 40}
                className="border-b border-border py-8 last:border-b-0 md:py-10"
              >
                <div className="grid gap-3 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-10">
                  <div>
                    <h3 className="text-xl tracking-tight md:text-2xl">
                      <Link
                        href={`/services#${service.slug}`}
                        className="transition-opacity hover:opacity-70"
                      >
                        {service.title}
                      </Link>
                    </h3>
                    {service.entryPoint ? (
                      <p className="mt-2 text-sm tracking-[0.12em] text-muted-foreground uppercase">
                        Entry point
                      </p>
                    ) : null}
                    {service.flagship ? (
                      <p className="mt-2 text-sm tracking-[0.12em] text-muted-foreground uppercase">
                        Flagship
                      </p>
                    ) : null}
                  </div>
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {service.shortDescription}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.commercialCtaHref}
              className="btn-pill-primary"
            >
              {siteConfig.commercialCta}
            </Link>
            <Link
              href="/services"
              className="text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
            >
              All engineering engagements →
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <CTASection
            title={collaborate.title}
            description={collaborate.description}
            ctaLabel={siteConfig.commercialCta}
            ctaHref={siteConfig.commercialCtaHref}
          />
          <FadeIn className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/contact"
              className="text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
            >
              {siteConfig.finalCta} →
            </Link>
            <a
              href={siteConfig.github}
              className="text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Build with us on GitHub →
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
