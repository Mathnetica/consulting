import Link from "next/link";
import { siteConfig } from "@/lib/content/site";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  return (
    <section className="container-site flex min-h-[calc(100svh-3.5rem)] flex-col pt-10 pb-8 md:min-h-[calc(100svh-4.25rem)] md:pt-14 md:pb-10 lg:pt-16">
      <FadeIn immediate className="flex flex-1 flex-col">
        <p className="mb-8 text-[12px] font-medium tracking-[0.2em] text-muted-foreground uppercase md:mb-12">
          {siteConfig.location}
        </p>

        <h1 className="text-display max-w-[13ch] md:max-w-[15ch]">
          Engineering the platforms behind Data &amp; AI.
        </h1>

        <div className="mt-auto grid gap-8 pt-16 md:grid-cols-[minmax(0,32rem)_auto] md:items-end md:justify-between md:gap-12 md:pt-24">
          <p className="max-w-md text-[15px] leading-relaxed font-medium text-foreground/70 md:text-base">
            Data &amp; AI Platform Engineering and AI Architecture for
            organizations building serious production systems.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:justify-end">
            <Link href="/contact" className="btn-pill-primary">
              Start a project
            </Link>
            <Link href="/services" className="btn-pill-secondary">
              Explore our work
            </Link>
          </div>
        </div>
      </FadeIn>

      <div className="mt-10 border-t border-foreground md:mt-14" />
    </section>
  );
}
