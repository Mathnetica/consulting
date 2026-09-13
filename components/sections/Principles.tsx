import { principles } from "@/lib/content/site";
import { FadeIn } from "@/components/ui/fade-in";

export function Principles() {
  return (
    <div className="mt-14 grid gap-10 border-t border-border pt-12 md:mt-16 md:grid-cols-3 md:gap-8 md:pt-14">
      {principles.map((principle, index) => (
        <FadeIn key={principle.number} delayMs={index * 80}>
          <p className="text-sm tracking-[0.14em] text-muted-foreground">
            {principle.number}
          </p>
          <h3 className="mt-3 text-xl tracking-tight">{principle.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {principle.description}
          </p>
        </FadeIn>
      ))}
    </div>
  );
}
