import type { Metadata } from "next";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { LargeStatement } from "@/components/sections/LargeStatement";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/fade-in";
import { aboutValues } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mathnetica is a Data & AI consultancy for complex production environments — experts who work at architecture level and can drop into engineering.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="container-site pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container-content">
          <LargeStatement statement="We kept seeing the same problem.">
            <p>
              Years spent working across private companies and public
              organizations showed us a recurring pattern.
            </p>
            <p>
              The people making technical decisions were becoming increasingly
              disconnected from the people building the systems.
            </p>
            <p>Mathnetica was created to close that gap.</p>
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
            title="Architects who still engineer."
            description="Our background is software engineering. That experience shapes every decision we make."
          />
          <FadeIn className="mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              We have built complex systems, platforms and infrastructure before
              designing them for others — including cloud, Kubernetes, data and
              AI systems, with TOGAF where the discipline helps.
            </p>
            <p>
              Research is part of the work. We leave clear decisions your teams
              can own.
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
