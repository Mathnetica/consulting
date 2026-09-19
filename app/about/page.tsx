import type { Metadata } from "next";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { LargeStatement } from "@/components/sections/LargeStatement";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/fade-in";
import { Credentials } from "@/components/sections/Credentials";
import { aboutValues, assessment, siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mathnetica is an independent quantum software research and engineering lab based in the Netherlands.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="container-site pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-content">
          <LargeStatement statement="An independent quantum software lab.">
            <p>
              {siteConfig.name} is based in the Netherlands. We research and
              build software infrastructure for hybrid classical–quantum
              computing — the layer between cloud/HPC/Kubernetes and QPU
              backends.
            </p>
            <p>
              We do not build quantum computers. We do not chase every
              application domain. We stay in one specialization:{" "}
              {siteConfig.focus}.
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
        <div className="container-content">
          <SectionIntro
            title="Background."
            description="Cloud and platform engineering meeting quantum systems — not physics theatre."
          />
          <div className="mt-10 md:mt-14">
            <Credentials />
          </div>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content max-w-3xl">
          <SectionIntro
            eyebrow="When asked"
            title={assessment.name}
            description={assessment.description}
          />
          <FadeIn className="mt-6 text-base text-muted-foreground md:text-lg">
            <p>
              {assessment.duration}. {assessment.note}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <CTASection />
        </div>
      </section>
    </>
  );
}
