import { workAreas } from "@/lib/content/site";
import { FadeIn } from "@/components/ui/fade-in";

export function Expertise() {
  return (
    <div className="mt-14 space-y-0 border-y border-border md:mt-16">
      {workAreas.map((area, index) => (
        <FadeIn
          key={area.number}
          delayMs={index * 60}
          className="border-b border-border py-10 last:border-b-0 md:py-12"
        >
          <div className="grid gap-4 md:grid-cols-[120px_1fr] md:gap-10">
            <p className="text-base tracking-[0.12em] text-muted-foreground">
              {area.number}
            </p>
            <div>
              <h3 className="text-2xl tracking-tight md:text-3xl">
                {area.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {area.description}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
