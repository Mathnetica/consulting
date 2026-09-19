import Link from "next/link";
import { siteConfig } from "@/lib/content/site";

export function Hero() {
  return (
    <section className="container-site flex min-h-[calc(100svh-3.5rem)] flex-col pt-10 pb-8 md:min-h-[calc(100svh-4.25rem)] md:pt-14 md:pb-10 lg:pt-16">
      <div className="flex w-full flex-1 flex-col">
        <p className="mb-8 text-left text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase md:mb-12">
          {siteConfig.location}
        </p>

        <h1 className="m-0 w-full text-left text-display">
          <span className="block">Quantum</span>
          <span className="block">Infrastructure</span>
          <span className="block">Engineering</span>
        </h1>

        <p className="mt-8 max-w-2xl text-left text-xl font-medium tracking-tight text-foreground md:mt-10 md:text-2xl">
          {siteConfig.tagline}
        </p>

        <div className="mt-auto flex w-full flex-col gap-8 pt-16 md:flex-row md:items-end md:justify-between md:gap-12 md:pt-24">
          <p className="max-w-xl text-left text-base leading-relaxed text-foreground/70 md:text-lg">
            Mathnetica develops open-source infrastructure for operating quantum
            workloads alongside CPU, GPU and modern cloud/HPC systems.
          </p>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
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
            <Link
              href={siteConfig.researchCtaHref}
              className="text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
            >
              {siteConfig.researchCta}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-foreground md:mt-14" />
    </section>
  );
}
