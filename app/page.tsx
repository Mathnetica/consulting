import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { LargeStatement } from "@/components/sections/LargeStatement";
import { Expertise } from "@/components/sections/Expertise";
import { Engagements } from "@/components/sections/Engagements";
import { Credentials } from "@/components/sections/Credentials";
import { ResearchList } from "@/components/sections/ResearchList";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/sections/CTASection";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { FadeIn } from "@/components/ui/fade-in";
import { researchArticles } from "@/lib/content/research";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mathnetica — Data & AI Platform Engineering",
    description: siteConfig.description,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-site section-space border-t border-border">
        <div className="container-content max-w-3xl">
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
        <div className="container-content max-w-3xl">
          <LargeStatement statement="Architects who still engineer.">
            <p>Our background is software engineering.</p>
            <p>
              We have built complex systems, platforms and infrastructure before
              designing them for others.
            </p>
            <p>That experience shapes every decision we make.</p>
          </LargeStatement>
        </div>
      </section>

      <section
        id="expertise"
        className="container-site section-space border-t border-border"
      >
        <div className="container-content">
          <SectionIntro eyebrow="Expertise" title="Where we work." />
          <Expertise />
          <FadeIn className="mt-10">
            <Link
              href="/services"
              className="text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
            >
              Explore our expertise
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro
            eyebrow="Engagements"
            title="How organizations work with us."
            description="Time-boxed work with clear outcomes."
          />
          <Engagements variant="home" />
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro title="Engineering depth matters." />
          <div className="mt-10 md:mt-14">
            <Credentials />
          </div>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro
            eyebrow="Research"
            title="Research is part of the work."
            description="We investigate the technologies and patterns shaping the next generation of Data & AI systems."
          />
          <div className="mt-12 md:mt-14">
            <ResearchList articles={researchArticles.slice(0, 3)} compact />
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
          <SectionIntro title="How we work." />
          <ProcessSteps />
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
