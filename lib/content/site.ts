export const siteConfig = {
  name: "Mathnetica",
  email: "research@mathnetica.com",
  location: "Amsterdam · Netherlands",
  locationShort: "Amsterdam, Netherlands",
  address: {
    street: "Patroclosstraat 2",
    postalCode: "1076 NG",
    city: "Amsterdam",
    country: "Netherlands",
  },
  linkedin: "https://www.linkedin.com/company/mathnetica",
  github: "https://github.com/mathnetica",
  description:
    "Mathnetica helps organizations integrate quantum computing with existing cloud, Kubernetes and HPC infrastructure.",
  tagline:
    "Connect cloud, Kubernetes and HPC with quantum computing platforms.",
  focus: "Quantum Infrastructure Engineering",
  heroSupport:
    "Mathnetica designs the architecture and infrastructure required to run hybrid CPU, GPU and QPU workloads — without treating quantum as an isolated experiment.",
  primaryCta: "Explore the Platform",
  primaryCtaHref: "/platform",
  secondaryCta: "GitHub",
  secondaryCtaHref: "https://github.com/mathnetica",
  researchCta: "Research",
  researchCtaHref: "/research",
  finalCta: "Discuss your architecture",
  commercialCta: "Book an Architecture Review",
  commercialCtaHref: "/contact?topic=infrastructure-review",
} as const;

/** Core thesis — hybrid, not QPU-only. */
export const infrastructureGap = {
  eyebrow: "The thesis",
  title: "Quantum doesn't run alone.",
  body: [
    "Quantum computing does not replace your infrastructure. It has to integrate with it. Organizations already operate cloud, Kubernetes, HPC, CPU/GPU workloads, identity, security and observability.",
    "Access to a QPU is only one part of the problem. Mathnetica focuses on the infrastructure layer: where workloads execute, how classical and quantum stages communicate, how providers are selected, and how security and sovereignty requirements are maintained.",
  ],
} as const;

export const audiences = [
  {
    title: "CTOs & platform leads",
    description:
      "Understand how quantum computing could fit into an existing technology stack.",
  },
  {
    title: "HPC & cloud architects",
    description:
      "Integrate QPUs with Kubernetes, HPC and classical compute without a parallel stack.",
  },
  {
    title: "Research & R&D organizations",
    description:
      "Run reproducible hybrid quantum–classical experiments on real infrastructure.",
  },
  {
    title: "Public-sector technology teams",
    description:
      "Evaluate portable, observable and sovereignty-aware quantum infrastructure paths.",
  },
] as const;

export const collaborate = {
  title: "Preparing your infrastructure for quantum computing?",
  description:
    "Start with a Hybrid Quantum Infrastructure Review and understand where quantum computing fits into your existing technology stack — then decide whether a focused PoC makes sense.",
} as const;

export const commercialModel = {
  eyebrow: "Work with us",
  title: "Architecture Review today. PoC when ready.",
  body: "Mathnetica is a commercial engineering company under Quantum Infrastructure Engineering. Hire us to assess how quantum fits your cloud, Kubernetes and HPC environment — then optionally build a hybrid PoC. Open source and research feed the Mathnetica Platform.",
  flywheel:
    "Research → open source → real-world engineering → reusable technology → Mathnetica Platform.",
  offerLine:
    "Understand how quantum computing integrates with your existing infrastructure — then design controlled hybrid CPU / GPU / QPU paths without locking into a single provider.",
  europeanLine: "Portable. Observable. Sovereign.",
} as const;

/** Homepage / services: primary commercial offers only. */
export const homepageServices = [
  "infrastructure-review",
  "hybrid-architecture-poc",
  "hybrid-infrastructure-workflows",
] as const;

export const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/research", label: "Research" },
  { href: "/services", label: "Engineering" },
  { href: "/about", label: "About" },
] as const;

/** Three core capability areas — research and engineering directions. */
export const workAreas = [
  {
    number: "01",
    title: "Quantum Infrastructure",
    description:
      "Design infrastructure connecting enterprise systems with quantum computing platforms — cloud-to-QPU and Kubernetes/HPC integration, secure connectivity, provider access, identity and workload execution architecture.",
  },
  {
    number: "02",
    title: "Hybrid Computing",
    description:
      "Design systems where CPU, GPU, HPC, simulators and QPUs work together — hybrid workflows, scheduling, orchestration, asynchronous jobs and classical pre-/post-processing.",
  },
  {
    number: "03",
    title: "Quantum Systems Architecture",
    description:
      "Help organizations determine how quantum fits into their landscape — current and target architecture, provider evaluation, security boundaries, data flows, placement and an implementation roadmap.",
  },
] as const;

export const researchDirections = [
  {
    title: "Hybrid workflow orchestration",
    description:
      "Controlled workflows across classical and quantum stages — with policy and approval where required.",
  },
  {
    title: "Workload placement",
    description:
      "Choosing CPU, GPU, HPC, simulator or QPU for each stage.",
  },
  {
    title: "Infrastructure automation",
    description:
      "Provisioning and releasing resources as part of the workload lifecycle — when needed.",
  },
  {
    title: "Policy and sovereignty",
    description:
      "Portable, observable and sovereignty-aware decisions — region, data location, approved providers and organizational policy, including European constraints where they apply.",
  },
  {
    title: "Observability",
    description:
      "Workflow-first visibility, cost signals and execution provenance across classical and quantum stages.",
  },
  {
    title: "Provider neutrality",
    description:
      "Work with simulators and QPU backends such as IBM Quantum, PASQAL or EuroHPC without unnecessarily coupling architecture to one vendor.",
  },
] as const;

/** Keep tech stack secondary — foundation, not identity. */
export const builtOn = [
  "Kubernetes",
  "Argo",
  "Kueue",
  "OpenTelemetry",
  "Prometheus",
  "Grafana",
] as const;

export const qbridge = {
  name: "QBridge",
  status: "Experimental" as const,
  summary:
    "QBridge is experimental open-source orchestration for hybrid quantum workloads. It explores treating quantum execution as an infrastructure workload — portable definitions, provider abstraction and lifecycle — rather than isolated notebook experiments. Proof that Mathnetica experiments with building infrastructure, not only talking about it.",
} as const;

export const platform = {
  name: "Mathnetica Platform",
  status: "Experimental" as const,
  tagline:
    "Infrastructure and control software for hybrid quantum-classical computing.",
  summary:
    "Mathnetica is building a quantum-aware control layer for modern computing infrastructure. We are exploring hybrid workflow orchestration, workload placement, infrastructure automation, policy and sovereignty, observability and cost awareness — extending proven cloud-native and HPC technologies where they already exist.",
  principle:
    "Existing infrastructure is the foundation. Quantum becomes another compute resource.",
  github: "https://github.com/mathnetica",
  claimLevel: "experimental" as const,
  layers: [
    {
      name: "QPU Resources",
      description:
        "We are researching how infrastructure should discover, represent and allocate quantum processors alongside classical compute.",
    },
    {
      name: "Workloads",
      description:
        "We are exploring routing and lifecycle across CPU, GPU, HPC, simulator and QPU stages — without treating quantum as an isolated experiment.",
    },
    {
      name: "Operations",
      description:
        "We are investigating telemetry, provenance, cost signals and policy decisions across the quantum–classical boundary.",
    },
  ],
  roadmapNote:
    "Capabilities described on this site are research and early engineering directions. Provider examples (e.g. IBM Quantum, PASQAL, EuroHPC) are illustrative — not claims of production integrations or partnerships.",
} as const;

export const aboutValues = [
  "Commercial engineering company — not only open source",
  "Software infrastructure, not quantum hardware",
  "Hybrid by design — CPU, GPU, HPC, simulators, QPU",
  "Provider-neutral — no single-vendor lock-in story",
  "Proven cloud-native and HPC building blocks first",
  "Open source for adoption and credibility",
  "Research that feeds the platform",
  "Honest experimental status",
  "Amsterdam · Portable · Observable · Sovereign",
] as const;
