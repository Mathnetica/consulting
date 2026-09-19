import Link from "next/link";
import { siteConfig } from "@/lib/content/site";
import { FadeIn } from "@/components/ui/fade-in";

type CTASectionProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CTASection({
  title = "Building in the open.",
  description = "Follow QBridge and the research notes — or get in touch about hybrid classical–quantum systems.",
  ctaLabel = siteConfig.finalCta,
  ctaHref = "/contact",
}: CTASectionProps) {
  return (
    <FadeIn>
      <h2 className="text-statement max-w-4xl">{title}</h2>
      <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {description}
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link href={ctaHref} className="btn-pill-primary">
          {ctaLabel}
        </Link>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
        >
          {siteConfig.email}
        </a>
      </div>
    </FadeIn>
  );
}
