import type { Metadata } from "next";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { Engagements } from "@/components/sections/Engagements";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Data & AI platforms, AI architecture, Architecture Reviews and fractional senior technical direction from Mathnetica.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-site pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container-content">
          <SectionIntro
            eyebrow="Services"
            title="Expertise for complex Data & AI systems."
            description="Platform engineering, AI architecture and focused technical engagements with clear deliverables."
          />
        </div>
      </section>

      <section className="container-site pb-16 md:pb-24">
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
          <SectionIntro
            eyebrow="Engagements"
            title="How organizations work with us."
            description="One entry product with a fixed price. Larger work is scoped and priced after conversation."
          />
          <Engagements variant="all" />
        </div>
      </section>

      <section className="container-site section-space border-t border-border">
        <div className="container-content">
          <CTASection
            title="Bring us the difficult problem."
            description="Start with a review, a Solution Architecture engagement, or ongoing senior direction."
          />
        </div>
      </section>
    </>
  );
}
