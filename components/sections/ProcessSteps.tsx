import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Workload and constraints before quantum claims.",
  },
  {
    number: "02",
    title: "Design",
    description: "Hybrid classical–quantum system direction.",
  },
  {
    number: "03",
    title: "Validate",
    description: "Prove the path on simulator, then QPU.",
  },
  {
    number: "04",
    title: "Transfer",
    description: "Open interfaces your team can own.",
  },
] as const;

export function ProcessSteps() {
  return (
    <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {steps.map((step, index) => (
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
