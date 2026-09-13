import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  className,
}: SectionIntroProps) {
  return (
    <FadeIn className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-4 text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-section">{title}</h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
