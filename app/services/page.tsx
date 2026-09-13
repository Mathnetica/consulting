import type { Metadata } from "next";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Data & AI Platform Engineering, AI Architecture, Complex Systems Engineering and Architecture Reviews from Mathnetica.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-site pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container-content">
          <SectionIntro
            eyebrow="Services"
            title="Engineering services for production Data & AI systems."
            description="Concise engagements focused on architecture that can be built, operated and owned."
          />
        </div>
      </section>

      <section className="container-site pb-24 md:pb-32">
        <div className="container-content">
          {services.map((service) => (
            <div key={service.slug} id={service.slug}>
              <ServiceSection services={[service]} detailed />
            </div>
          ))}
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <CTASection
            title="Need a senior technical view?"
            description="Start with an Architecture Review, or talk to us about platform and AI architecture work."
          />
        </div>
      </section>
    </>
  );
}
