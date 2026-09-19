import type { Metadata } from "next";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { LargeStatement } from "@/components/sections/LargeStatement";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/fade-in";
import { aboutValues, siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mathnetica is an independent software research and engineering lab in Amsterdam focused on Quantum Infrastructure Engineering.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="container-site pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-content">
          <LargeStatement statement="Software infrastructure for hybrid classical–quantum computing.">
            <p>
              Mathnetica is an independent software research and engineering lab
              based in Amsterdam, Netherlands.
            </p>
            <p>
              We focus on {siteConfig.focus}: the software systems required to
              operate quantum workloads alongside classical computing
              infrastructure.
            </p>
            <p>
              Quantum processors introduce a fundamentally different class of
              compute. Rather than building quantum hardware, Mathnetica works
              on the infrastructure around it — workload execution, resource
              management, orchestration, operations and integration with modern
              cloud and HPC environments.
            </p>
            <p>
              We build open-source software and publish the engineering lessons
              we learn along the way. Research supports the platform — it is
              not a separate academic brand.
            </p>
          </LargeStatement>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro title="What we value." />
          <FadeIn className="mt-12">
            <ul className="grid gap-4 sm:grid-cols-2">
              {aboutValues.map((value) => (
                <li
                  key={value}
                  className="border-t border-border pt-4 text-base md:text-lg"
                >
                  {value}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content max-w-3xl">
          <SectionIntro
            title="What we do not build."
            description="QPU hardware, qubits, cryogenics, control electronics — or primary work on quantum algorithms and domain applications. Our layer sits between applications and quantum providers."
          />
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <CTASection
            title="Explore the platform."
            description="Open-source infrastructure for operating quantum workloads alongside classical systems."
            ctaLabel={siteConfig.primaryCta}
            ctaHref="/platform"
          />
        </div>
      </section>
    </>
  );
}
