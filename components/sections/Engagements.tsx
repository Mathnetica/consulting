import { assessment } from "@/lib/content/site";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

/** Quiet commercial model — assessment only, not homepage-primary. */
export function Engagements() {
  return (
    <FadeIn className="mt-14 border-y border-border py-10 md:mt-16 md:py-12">
      <h3 className="text-xl tracking-tight md:text-2xl">{assessment.name}</h3>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {assessment.description}
      </p>
      <p className="mt-3 text-base text-foreground/80">
        {assessment.duration} · {assessment.note}
      </p>
      <Link
        href="/contact"
        className="mt-5 inline-block text-base underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
      >
        Discuss an assessment
      </Link>
    </FadeIn>
  );
}
