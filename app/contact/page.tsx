import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/ui/fade-in";
import { assessment, siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mathnetica about Quancave, research, or a Quantum Systems Architecture Assessment.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="container-site pt-20 pb-24 md:pt-28 md:pb-40">
      <div className="container-content grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
        <FadeIn immediate>
          <p className="mb-4 text-sm tracking-[0.14em] text-muted-foreground uppercase">
            Contact
          </p>
          <h1 className="text-statement">Get in touch.</h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Quancave, research collaboration, or a{" "}
            {assessment.name.toLowerCase()}. We work with teams exploring hybrid
            classical–quantum systems.
          </p>
          <div className="mt-10 space-y-2 text-base">
            <p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="text-muted-foreground">{siteConfig.locationShort}</p>
          </div>
        </FadeIn>

        <FadeIn delayMs={80}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
