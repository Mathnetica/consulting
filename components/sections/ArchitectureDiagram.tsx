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
          CPU / GPU / HPC / Simulator / QPU`;

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
          CPU / GPU / HPC / Simulator / QPU
                   │
         Provider integrations (roadmap)`;

const hybridWorkflowDiagram = `DATA
 ↓
CPU
 ↓
GPU / HPC
 ↓
SIMULATOR
 ↓
QPU
 ↓
CPU
 ↓
RESULT`;

const hybridRelationshipDiagram = `CPU · GPU · HPC
       ↓
Hybrid workload
       ↓
Simulator · QPU`;

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

export function HybridRelationshipDiagram({
  className,
}: {
  className?: string;
}) {
  return (
    <FadeIn className={cn("overflow-x-auto", className)}>
      <pre className="font-mono text-sm leading-relaxed text-foreground/80 md:text-base">
        {hybridRelationshipDiagram}
      </pre>
    </FadeIn>
  );
}
