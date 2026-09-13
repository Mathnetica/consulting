import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { LargeStatement } from "@/components/sections/LargeStatement";
import { Principles } from "@/components/sections/Principles";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { Credentials } from "@/components/sections/Credentials";
import { ResearchList } from "@/components/sections/ResearchList";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TargetClients } from "@/components/sections/TargetClients";
import { CTASection } from "@/components/sections/CTASection";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { FadeIn } from "@/components/ui/fade-in";
import { services } from "@/lib/content/services";
import { researchArticles } from "@/lib/content/research";
import { researchAreas } from "@/lib/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <LargeStatement statement="AI is only as good as the platform beneath it.">
            <p>
              Production AI depends on reliable data, infrastructure,
              architecture, security, observability and engineering discipline.
            </p>
            <p>Mathnetica helps organizations design and build that foundation.</p>
          </LargeStatement>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <LargeStatement statement="Architecture by engineers.">
            <p>Our architects come from software engineering.</p>
            <p>
              We have spent years building distributed systems, cloud platforms,
              data infrastructure and production software before moving into
              architecture.
            </p>
            <p>We do not separate architecture from engineering.</p>
            <p>We design systems we understand deeply enough to build.</p>
          </LargeStatement>
          <Principles />
        </div>
      </section>

      <section
        id="services"
        className="container-site section-space border-t border-border"
      >
        <div className="container-content">
          <SectionIntro
            eyebrow="Services"
            title="What we engineer."
            description="Four focused service lines for organizations building serious Data & AI systems."
          />
          <div className="mt-14 md:mt-16">
            <ServiceSection services={services} />
          </div>
          <FadeIn className="mt-8">
            <Link
              href="/services"
              className="text-sm underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
            >
              View services in detail
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <LargeStatement statement="Senior enough to architect. Technical enough to build.">
            <p>
              Mathnetica combines architecture expertise with years of hands-on
              engineering experience.
            </p>
            <p>
              Our specialists understand enterprise architecture, but also code,
              infrastructure, distributed systems, cloud platforms, Kubernetes,
              data engineering and production AI.
            </p>
          </LargeStatement>
          <Credentials />
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro
            eyebrow="Research"
            title="Research keeps us sharp."
            description="We maintain an active research practice around AI infrastructure, search, distributed systems and emerging architecture patterns."
          />
          <FadeIn className="mt-10">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {researchAreas.map((area) => (
                <li key={area.label}>
                  <Link
                    href={area.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
          <div className="mt-12 md:mt-14">
            <ResearchList articles={researchArticles.slice(0, 3)} compact />
          </div>
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro title="Small teams. Senior people. Real systems." />
          <ProcessSteps />
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <SectionIntro title="Built for complex environments." />
          <TargetClients />
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
