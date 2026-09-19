import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mathnetica about the platform, research collaboration, or hybrid quantum infrastructure.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="container-site pt-20 pb-24 md:pt-28 md:pb-40">
      <div className="container-content max-w-2xl">
        <FadeIn immediate>
          <p className="mb-4 text-sm tracking-[0.14em] text-muted-foreground uppercase">
            Contact
          </p>
          <h1 className="text-statement">Get in touch.</h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Platform questions, research collaboration, or hybrid classical–quantum
            infrastructure. We work with teams building software around quantum
            compute.
          </p>
          <div className="mt-12 space-y-3 text-base md:text-lg">
            <p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xl font-medium underline-offset-4 transition-opacity hover:opacity-70 hover:underline md:text-2xl"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="text-muted-foreground">{siteConfig.locationShort}</p>
          </div>
          <a
            href={`mailto:${siteConfig.email}?subject=Mathnetica`}
            className="btn-pill-primary mt-10 inline-flex"
          >
            Email us
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
