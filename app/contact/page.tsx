import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Bring Mathnetica a difficult Data & AI problem — platforms, production AI, retrieval or complex technical decisions.",
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
          <h1 className="text-statement">Discuss your project.</h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Tell us what you are building. We work with CTOs and platform leaders
            on Data &amp; AI platforms, production AI and complex technical
            decisions.
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
