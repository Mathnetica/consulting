import type { Metadata } from "next";
import Link from "next/link";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/fade-in";
import { qbridge, siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "QBridge",
  description: qbridge.tagline,
  alternates: { canonical: "/qbridge" },
};

export default function QBridgePage() {
  return (
    <>
      <section className="container-site pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container-content">
          <SectionIntro
            eyebrow={qbridge.status}
            title={qbridge.name}
            description={qbridge.tagline}
          />
          <FadeIn className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>{qbridge.summary}</p>
            <p>
              We do not start with a magical scheduler that picks the best QPU.
              v0.1 does little — on purpose:{" "}
              {qbridge.pipeline.join(" → ")}.
            </p>
          </FadeIn>
          <FadeIn className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={qbridge.github}
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
          <SectionIntro title="Architecture." />
          <FadeIn className="mt-10 max-w-2xl overflow-x-auto">
            <pre className="font-mono text-sm leading-relaxed text-foreground/80 md:text-base">
{`Application
     │
     ▼
┌───────────────┐
│    QBridge    │
└───────┬───────┘
        │
   ┌────┴───────────────┐
   │                    │
Classical             Quantum
   │                    │
CPU / GPU        Simulator / QPU
                        │
               ┌────────┼────────┐
              IBM      IonQ      ...`}
            </pre>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro title="Roadmap." description="One path. No product zoo." />
          <div className="mt-14 space-y-0 border-y border-border">
            {qbridge.phases.map((phase, index) => (
              <FadeIn
                key={phase.title}
                delayMs={index * 50}
                className="border-b border-border py-8 last:border-b-0 md:py-10"
              >
                <h3 className="text-xl tracking-tight md:text-2xl">
                  {phase.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {phase.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <CTASection
            title="Follow the build."
            description={`QBridge is the flagship of ${siteConfig.name}. Research notes document what we learn as the orchestration layer grows.`}
            ctaLabel="Read the research"
            ctaHref="/research"
          />
        </div>
      </section>
    </>
  );
}
