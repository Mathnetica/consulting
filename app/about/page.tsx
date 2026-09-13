import type { Metadata } from "next";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { LargeStatement } from "@/components/sections/LargeStatement";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/fade-in";
import { aboutValues } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mathnetica is a Dutch engineering consultancy built around senior engineers and architects who design systems they know how to build.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-site pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-content">
          <LargeStatement statement="Mathnetica is an engineering company built around people who have spent years building complex systems.">
            <p>
              We are a small, highly technical Dutch engineering boutique. Our
              work sits at the intersection of architecture and implementation —
              Data &amp; AI platforms, production AI systems and complex
              engineering environments.
            </p>
          </LargeStatement>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro
            title="What we value."
            description="Clear principles that keep the practice technical, independent and useful."
          />
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
            title="Engineering architects."
            description="Mathnetica specialists combine hands-on software engineering backgrounds with architecture experience and relevant professional credentials."
          />
          <FadeIn className="mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Our people have designed and built distributed systems, cloud
              platforms, data infrastructure and production software. Architecture
              work is an extension of that engineering depth — not a separate
              abstract layer.
            </p>
            <p>
              Where relevant, the practice draws on enterprise architecture
              credentials such as TOGAF and cloud or Kubernetes certifications.
              We do not treat credentials as a substitute for production
              judgment.
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
