import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Expertise } from "@/components/sections/Expertise";
import { ResearchList } from "@/components/sections/ResearchList";
import { CTASection } from "@/components/sections/CTASection";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { FadeIn } from "@/components/ui/fade-in";
import { getSortedResearchArticles } from "@/lib/content/research";
import { quancave, siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mathnetica — Quantum Systems Engineering",
    description: siteConfig.description,
    url: "/",
  },
};

export default function HomePage() {
  const latestResearch = getSortedResearchArticles().slice(0, 3);

  return (
    <>
      <Hero />

      <section
        id="work"
        className="container-site section-space border-t border-border"
      >
        <div className="container-content">
          <SectionIntro eyebrow="Focus" title="What we work on." />
          <Expertise />
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro
            eyebrow="Open source"
            title={quancave.name}
            description={quancave.tagline}
          />
          <FadeIn className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/quancave" className="btn-pill-primary">
              Explore Quancave
            </Link>
            <a
              href={quancave.github}
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
            title="Research is part of the work."
            description="Practical notes on orchestration, portability, observability and hybrid CPU/GPU/QPU systems."
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
            title="Building hybrid classical–quantum infrastructure."
            description="Mathnetica is an independent quantum software research and engineering lab based in the Netherlands."
          />
        </div>
      </section>
    </>
  );
}
