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
};

/**
 * Specialized quantum infrastructure engineering engagements.
 * Not generic DevOps / cloud / AI consulting.
 *
 * Entry: Architecture Review
 * Flagship commercial direction: Hybrid Quantum Infrastructure Workflows
 */
export const services: Service[] = [
  {
    slug: "architecture-review",
    number: "01",
    title: "Architecture Review",
    entryPoint: true,
    shortDescription:
      "The easiest starting point — a focused senior review of your quantum, hybrid or classical infrastructure plans and constraints.",
    capabilities: [
      "discovery",
      "architecture assessment",
      "risks and trade-offs",
      "prioritized recommendations",
      "review session",
    ],
    problem:
      "Teams need an independent technical view before committing to quantum access, HPC integration, hybrid workflows or a platform direction.",
    whatWeDo:
      "We run a time-boxed Architecture Review: understand the system and goals, assess architecture and risks, and deliver clear, prioritized recommendations.",
    typicalEngagement: "1–2 weeks with discovery, assessment and a review session.",
    deliverables: [
      "Discovery session",
      "Architecture assessment",
      "System context and constraints",
      "Technical risks",
      "Prioritized recommendations",
      "Review session",
    ],
    technologies: [
      "Hybrid quantum-classical architecture",
      "HPC and cloud infrastructure",
      "Kubernetes / workflow tooling where relevant",
      "QPU provider access patterns",
    ],
    outcomes: [
      "Independent technical clarity",
      "Shared understanding of risks",
      "Actionable next steps",
      "Better decisions before large spend",
    ],
    priceNote: "Architecture Review — €2,500 fixed",
  },
  {
    slug: "hybrid-infrastructure-workflows",
    number: "02",
    title: "Hybrid Quantum Infrastructure Workflows",
    flagship: true,
    shortDescription:
      "Controlled infrastructure workflows for hybrid quantum-classical computing — connecting policy, human approval, provisioning and execution across CPU, GPU, HPC, simulators and QPUs.",
    capabilities: [
      "policy and sovereignty checks",
      "human approval gates",
      "workload placement",
      "provisioning when needed",
      "execution across compute classes",
      "observability and audit",
    ],
    problem:
      "Organizations need more than access to a QPU or a Kubernetes cluster. They need controlled processes: where a workload may run, who approves costly or sensitive steps, how infrastructure is provisioned, and how execution is observed and audited.",
    whatWeDo:
      "We design and implement controlled infrastructure workflows: request → plan → policy check → approval (when required) → provision → place → execute → observe → results / cost / audit. Deterministic tooling runs the operations; policy sets boundaries; humans approve high-risk steps. QPU is a first-class target alongside CPU, GPU, HPC and simulators — not a later add-on.",
    typicalEngagement:
      "Architecture and implementation engagement, usually after an Architecture Review. Scope can start with one hybrid path (e.g. CPU → simulator → one QPU backend) and expand.",
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
    slug: "quantum-infrastructure-architecture",
    number: "03",
    title: "Quantum Infrastructure Architecture",
    shortDescription:
      "Target architecture for operating quantum workloads alongside classical systems — control plane, providers, operations.",
    capabilities: [
      "target architecture",
      "provider integration model",
      "workload lifecycle",
      "operations design",
      "ADRs and roadmap",
    ],
    problem:
      "Organizations need a coherent infrastructure architecture for quantum compute that fits existing cloud, HPC and platform practices.",
    whatWeDo:
      "We define constraints, target design, integration patterns, operational model and a practical roadmap your teams can implement.",
    typicalEngagement: "Multi-week architecture engagement or follow-on from an Architecture Review.",
    deliverables: [
      "Constraints and current-state assessment",
      "Target architecture",
      "Integration and operations guidance",
      "Technology decisions and ADRs",
      "Implementation roadmap",
    ],
    technologies: [
      "QPU providers and simulators",
      "Cloud / on-prem infrastructure",
      "Workflow and scheduling systems",
      "Observability stacks",
    ],
    outcomes: [
      "Clear technical direction",
      "Decisions that hold in production contexts",
      "Client teams equipped to own the system",
    ],
  },
  {
    slug: "qpu-hpc-integration",
    number: "04",
    title: "QPU / HPC / Classical Integration",
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
  {
    slug: "workload-infrastructure-assessment",
    number: "05",
    title: "Workload & Infrastructure Assessment",
    shortDescription:
      "Assess readiness of workloads and infrastructure for hybrid quantum-classical experimentation.",
    capabilities: [
      "workload screening",
      "infrastructure readiness",
      "provider options",
      "cost and constraint review",
    ],
    problem:
      "Teams often do not know which workloads, providers or infrastructure changes are worth pursuing first.",
    whatWeDo:
      "We assess candidate workloads and current infrastructure, then recommend a realistic experiment path — without quantum hype.",
    typicalEngagement: "Short assessment, often paired with Architecture Review.",
    deliverables: [
      "Workload and infrastructure findings",
      "Recommended experiment path",
      "Risks and constraints",
      "Next-step options",
    ],
    technologies: [
      "Classical and HPC stacks",
      "Simulators and QPU access models",
    ],
    outcomes: [
      "Honest readiness picture",
      "Prioritized experiments",
      "Clear go / no-go signals",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const architectureReview = services.find(
  (service) => service.slug === "architecture-review",
)!;

export const flagshipEngagement = services.find(
  (service) => service.slug === "hybrid-infrastructure-workflows",
)!;
