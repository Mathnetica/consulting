import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Mathnetica about Data & AI platforms, AI architecture or an architecture review.",
};

export default function ContactPage() {
  return (
    <section className="container-site pt-20 pb-24 md:pt-28 md:pb-40">
      <div className="container-content grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
        <FadeIn immediate>
          <p className="mb-4 text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Contact
          </p>
          <h1 className="text-statement">Start a conversation.</h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Tell us what you are building. We typically work with CTOs,
            architects and platform leaders on production Data &amp; AI systems.
          </p>
          <div className="mt-10 space-y-2 text-sm">
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
