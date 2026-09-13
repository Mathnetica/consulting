import Link from "next/link";
import { homepageEngagements, engagements } from "@/lib/content/site";
import { FadeIn } from "@/components/ui/fade-in";

type EngagementsProps = {
  /** Homepage shows three project engagements; services can show the full set. */
  variant?: "home" | "all";
};

export function Engagements({ variant = "home" }: EngagementsProps) {
  const items = variant === "all" ? engagements : homepageEngagements;

  return (
    <div className="mt-14 grid gap-0 border-y border-border md:mt-16">
      {items.map((engagement, index) => {
        const meta = engagement.price ?? engagement.commercial;

        return (
          <FadeIn
            key={engagement.name}
            delayMs={index * 50}
            className="grid gap-5 border-b border-border py-8 last:border-b-0 md:grid-cols-[1.5fr_0.9fr] md:gap-10 md:py-10"
          >
            <div>
              <h3 className="text-xl tracking-tight md:text-2xl">
                {engagement.name}
              </h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                {engagement.description}
              </p>
              <p className="mt-3 max-w-xl text-base text-foreground/80">
                {engagement.outcomes}
              </p>
              <Link
                href={engagement.cta.href}
                className="mt-5 inline-block text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
              >
                {engagement.cta.label}
              </Link>
            </div>
            <div className="flex flex-col gap-1 md:items-end md:text-right">
              <p className="text-base text-foreground/80">{engagement.duration}</p>
              {meta ? (
                <p className="text-base font-medium">{meta}</p>
              ) : null}
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
