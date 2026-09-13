import { processSteps } from "@/lib/content/site";
import { FadeIn } from "@/components/ui/fade-in";

export function ProcessSteps() {
  return (
    <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {processSteps.map((step, index) => (
        <FadeIn key={step.number} delayMs={index * 60}>
          <p className="text-base tracking-[0.12em] text-muted-foreground">
            {step.number}
          </p>
          <h3 className="mt-3 text-xl tracking-tight md:text-2xl">{step.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {step.description}
          </p>
        </FadeIn>
      ))}
    </div>
  );
}
