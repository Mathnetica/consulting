import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

type ArchitectureDiagramProps = {
  variant?: "home" | "detail";
  className?: string;
};

const homeDiagram = `                 MATHNETICA
          Quantum Control Plane
                   │
     ┌─────────────┼─────────────┐
     │             │             │
 QPU Resources   Workloads    Operations
     │             │             │
 Discovery       Routing      Telemetry
 Allocation      Lifecycle    Provenance
     │             │             │
     └─────────────┼─────────────┘
                   │
     ───── Existing Infrastructure ─────
       Kubernetes / Argo / Kueue / HPC
                   │
          CPU  /  GPU  /  QPU`;

const detailDiagram = `                 MATHNETICA
          Quantum Control Plane
                   │
     ┌─────────────┼─────────────┐
     │             │             │
 QPU Resources   Workloads    Operations
     │             │             │
 Discovery       Routing      Telemetry
 Allocation      Lifecycle    Provenance
     │             │             │
     └─────────────┼─────────────┘
                   │
     ───── Existing Infrastructure ─────
       Kubernetes / Argo / Kueue / HPC
                   │
          CPU  /  GPU  /  QPU
                   │
         Provider integrations (roadmap)`;

const hybridWorkflowDiagram = `Data
 |
 v
CPU preprocessing
 |
 v
GPU optimization
 |
 v
Quantum circuit
 |
 v
QPU execution
 |
 v
CPU post-processing
 |
 v
Result`;

export function ArchitectureDiagram({
  variant = "home",
  className,
}: ArchitectureDiagramProps) {
  const diagram = variant === "detail" ? detailDiagram : homeDiagram;

  return (
    <FadeIn className={cn("overflow-x-auto", className)}>
      <pre className="font-mono text-sm leading-relaxed text-foreground/80 md:text-base">
        {diagram}
      </pre>
    </FadeIn>
  );
}

export function HybridWorkflowDiagram({ className }: { className?: string }) {
  return (
    <FadeIn className={cn("overflow-x-auto", className)}>
      <pre className="font-mono text-sm leading-relaxed text-foreground/80 md:text-base">
        {hybridWorkflowDiagram}
      </pre>
    </FadeIn>
  );
}
