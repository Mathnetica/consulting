export type Service = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  capabilities: string[];
  problem: string;
  whatWeDo: string;
  typicalEngagement: string;
  deliverables: string[];
  technologies: string[];
  outcomes: string[];
  priceNote?: string;
  entryPoint?: boolean;
  flagship?: boolean;
  contactTopic?: string;
};

/**
 * Specialized quantum infrastructure engineering engagements.
 * Not generic DevOps / cloud / AI consulting.
 *
 * Entry: Hybrid Quantum Infrastructure Review
 * Next: Hybrid Quantum Architecture & PoC
 * Flagship direction: Hybrid Quantum Infrastructure Workflows
 */
export const services: Service[] = [
  {
    slug: "infrastructure-review",
    number: "01",
    title: "Hybrid Quantum Infrastructure Review",
    entryPoint: true,
    contactTopic: "infrastructure-review",
    shortDescription:
      "Understand how quantum computing can fit into your existing cloud, Kubernetes and HPC infrastructure — a technical architecture assessment, not a strategy workshop.",
    capabilities: [
      "architecture discovery",
      "cloud / Kubernetes / HPC review",
      "quantum readiness assessment",
      "hybrid workload candidates",
      "provider options",
      "security and data-flow",
      "implementation roadmap",
    ],
    problem:
      "Teams need an independent technical view before committing to quantum access, HPC integration or a hybrid platform direction — without a generic “what is quantum” presentation.",
    whatWeDo:
      "We run a time-boxed Hybrid Quantum Infrastructure Review: 90-minute discovery, review of your environment, readiness assessment, candidate hybrid workloads, CPU/GPU/QPU target architecture, provider options, security and data-flow considerations, integration recommendations, architecture diagram, five prioritized engineering recommendations, roadmap and a 60-minute review session.",
    typicalEngagement: "About 1–2 weeks including discovery and a closing review session.",
    deliverables: [
      "Architecture Assessment",
      "Target Architecture Diagram",
      "Infrastructure Recommendations",
      "Provider Options",
      "Implementation Roadmap",
    ],
    technologies: [
      "Cloud / Kubernetes / HPC landscapes",
      "Hybrid quantum-classical architecture",
      "Simulator and QPU access patterns",
      "Provider-neutral integration models",
    ],
    outcomes: [
      "Clear picture of where quantum fits",
      "Prioritized engineering next steps",
      "Better decisions before large spend",
      "Optional path into a focused PoC",
    ],
    priceNote: "Hybrid Quantum Infrastructure Review — €1,950 fixed",
  },
  {
    slug: "hybrid-architecture-poc",
    number: "02",
    title: "Hybrid Quantum Architecture & PoC",
    contactTopic: "architecture-poc",
    shortDescription:
      "The next step after an Infrastructure Review — design and implement a focused hybrid path across classical infrastructure and a simulator or QPU backend.",
    capabilities: [
      "hybrid workload design",
      "infrastructure deployment path",
      "simulator integration",
      "QPU provider integration",
      "orchestration and observability",
      "engineering handover",
    ],
    problem:
      "After architecture clarity, organizations need a working experiment path — not a promise of quantum advantage or production maturity that does not exist yet.",
    whatWeDo:
      "We design and implement a scoped hybrid architecture and PoC: application → Kubernetes/HPC → Mathnetica / QBridge concepts → runtime (e.g. Qiskit / CUDA-Q / PennyLane where relevant) → simulator or QPU. Deliverables stay honest about experimental status.",
    typicalEngagement:
      "Multi-week engagement, usually after a Hybrid Quantum Infrastructure Review.",
    deliverables: [
      "Working hybrid workload path",
      "Infrastructure deployment notes",
      "Simulator and/or QPU integration",
      "Observability hooks where useful",
      "Architecture documentation",
      "Engineering handover",
    ],
    technologies: [
      "Kubernetes / HPC / cloud",
      "Simulators and QPU APIs",
      "Example backends: IBM Quantum, PASQAL, EuroHPC (as available)",
      "OpenTelemetry where useful",
    ],
    outcomes: [
      "A concrete hybrid execution path",
      "Evidence for the next investment decision",
      "Patterns client teams can extend",
      "Lessons that feed the Mathnetica Platform",
    ],
    priceNote: "Hybrid Quantum Architecture & PoC — from €7,500",
  },
  {
    slug: "hybrid-infrastructure-workflows",
    number: "03",
    title: "Hybrid Quantum Infrastructure Workflows",
    flagship: true,
    contactTopic: "infrastructure-workflows",
    shortDescription:
      "Controlled infrastructure workflows for hybrid quantum-classical computing — policy, human approval, provisioning and execution across CPU, GPU, HPC, simulators and QPUs.",
    capabilities: [
      "policy and sovereignty checks",
      "human approval gates",
      "workload placement",
      "provisioning when needed",
      "execution across compute classes",
      "observability and audit",
    ],
    problem:
      "Organizations need controlled processes: where a workload may run, who approves costly or sensitive steps, how infrastructure is provisioned, and how execution is observed and audited.",
    whatWeDo:
      "We design and implement controlled infrastructure workflows: request → plan → policy check → approval (when required) → provision → place → execute → observe → results / cost / audit. Deterministic tooling runs operations; policy sets boundaries; humans approve high-risk steps. QPU is a first-class target from the start.",
    typicalEngagement:
      "Architecture and implementation engagement, usually after Review and/or PoC.",
    deliverables: [
      "Workflow and decision model",
      "Policy and approval design",
      "Placement and execution path",
      "Reference implementation or PoC",
      "Operational and audit notes",
      "Handover to client teams",
    ],
    technologies: [
      "Existing Kubernetes / HPC / cloud stacks",
      "Workflow and automation tooling where useful",
      "Simulators and QPU provider APIs",
      "OpenTelemetry / observability hooks",
    ],
    outcomes: [
      "One controlled path across heterogeneous compute",
      "Policy and approval baked into execution",
      "Patterns that feed the Mathnetica Platform",
      "Quantum included from the start — not bolted on later",
    ],
  },
  {
    slug: "qpu-hpc-integration",
    number: "04",
    title: "QPU / HPC / Classical Integration",
    contactTopic: "qpu-hpc-integration",
    shortDescription:
      "Engineering work to connect quantum backends with existing HPC, cloud or Kubernetes environments.",
    capabilities: [
      "provider integration",
      "HPC bridging",
      "credentials and job lifecycle",
      "telemetry hooks",
      "reference implementations",
    ],
    problem:
      "Accessing a QPU is not the same as operating it inside real infrastructure — queues, credentials, results and classical stages must fit existing systems.",
    whatWeDo:
      "We design and implement critical-path integration between classical infrastructure and quantum execution environments.",
    typicalEngagement: "Time-boxed integration / PoC engagement.",
    deliverables: [
      "Integration design",
      "Working reference path",
      "Operational notes",
      "Handover to client teams",
    ],
    technologies: [
      "HPC / Slurm where relevant",
      "Kubernetes and workflow tools",
      "Provider SDKs and APIs",
      "OpenTelemetry where useful",
    ],
    outcomes: [
      "Working hybrid execution path",
      "Patterns client teams can extend",
      "Lessons that inform Mathnetica Platform research",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const infrastructureReview = services.find(
  (service) => service.slug === "infrastructure-review",
)!;

/** @deprecated Use infrastructureReview — kept for gradual rename in imports. */
export const architectureReview = infrastructureReview;

export const architecturePoc = services.find(
  (service) => service.slug === "hybrid-architecture-poc",
)!;

export const flagshipEngagement = services.find(
  (service) => service.slug === "hybrid-infrastructure-workflows",
)!;
