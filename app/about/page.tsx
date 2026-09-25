import type { Metadata } from "next";
import Link from "next/link";
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
          <LargeStatement statement="Infrastructure and control software for hybrid quantum-classical computing.">
            <p>
              Mathnetica is a commercial engineering company based in Amsterdam,
              Netherlands — not only an open-source or academic project.
            </p>
            <p>
              We focus on {siteConfig.focus}. Quantum remains central — but
              useful quantum workloads do not run alone. They depend on CPU,
              GPU, HPC, simulators and QPUs.
            </p>
            <p>
              Organizations hire us for specialized architecture and integration
              work today. In parallel we research and build the Mathnetica
              Platform. Open source and research create adoption and credibility;
              commercial value comes from engineering engagements and, over time,
              the platform.
            </p>
            <p>
              Rather than building quantum hardware or primary quantum
              algorithms, we work on the infrastructure layer connecting these
              systems: hybrid workflows, placement, automation, policy and
              observability.
            </p>
            <p>
              <Link
                href="/letter"
                className="underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
              >
                Read the Mathnetica letter →
              </Link>
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
            description="QPU hardware, qubits, cryogenics, control electronics — or primary work on quantum algorithms and domain applications. We are not a generic cloud, DevOps or AI consultancy. Our layer sits between applications and classical/quantum infrastructure."
          />
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <CTASection
            title="Start with an Architecture Review."
            description="Specialized quantum infrastructure engineering — or explore the experimental platform and research."
            ctaLabel={siteConfig.commercialCta}
            ctaHref={siteConfig.commercialCtaHref}
          />
        </div>
      </section>
    </>
  );
}
