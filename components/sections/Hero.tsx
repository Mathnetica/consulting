import Link from "next/link";
import { siteConfig } from "@/lib/content/site";

export function Hero() {
  return (
    <section className="container-site flex min-h-[calc(100svh-3.5rem)] flex-col pt-10 pb-8 md:min-h-[calc(100svh-4.25rem)] md:pt-14 md:pb-10 lg:pt-16">
      <div className="flex w-full flex-1 flex-col">
        <p className="mb-8 text-left text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase md:mb-12">
          {siteConfig.location}
        </p>

        {/* <p className="mb-6 text-left text-sm font-medium tracking-[0.14em] text-foreground/70 uppercase md:mb-8">
          {siteConfig.focus}
        </p> */}

        <h1 className="m-0 w-full text-left text-display">
          <span className="block">Quantum</span>
          <span className="block">Systems Engineering</span>
        </h1>

        <div className="mt-auto flex w-full flex-col gap-8 pt-20 md:flex-row md:items-end md:justify-between md:gap-12 md:pt-28">
          <p className="max-w-xl text-left text-base leading-relaxed font-medium text-foreground/70 md:text-lg">
            We research and build software for hybrid classical–quantum systems.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={siteConfig.primaryCtaHref} className="btn-pill-primary">
              {siteConfig.primaryCta}
            </Link>
            <a
              href={siteConfig.secondaryCtaHref}
              className="btn-pill-secondary"
              target="_blank"
              rel="noreferrer"
            >
              {siteConfig.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-foreground md:mt-14" />
    </section>
  );
}
