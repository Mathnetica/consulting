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
    "Mathnetica builds infrastructure and control software for hybrid quantum-classical computing.",
  tagline: "Build and operate hybrid quantum-classical systems.",
  focus: "Quantum Infrastructure Engineering",
  heroSupport:
    "Mathnetica explores the infrastructure layer connecting classical compute, GPU and HPC systems, quantum simulators and QPUs.",
  primaryCta: "Explore the Platform",
  primaryCtaHref: "/platform",
  secondaryCta: "GitHub",
  secondaryCtaHref: "https://github.com/mathnetica",
  researchCta: "Research",
  researchCtaHref: "/research",
  finalCta: "Discuss your architecture",
  commercialCta: "Request an Architecture Review",
  commercialCtaHref: "/contact?topic=architecture-review",
} as const;

/** Core thesis — hybrid, not QPU-only. */
export const infrastructureGap = {
  eyebrow: "The thesis",
  title: "Quantum doesn't run alone.",
  body: [
    "Quantum workloads are inherently hybrid. Data preparation, simulation, optimization and post-processing happen on classical infrastructure, while selected parts of a workload may execute on quantum processors.",
    "Mathnetica focuses on the infrastructure layer connecting these worlds — not quantum algorithms, and not quantum hardware.",
  ],
} as const;

export const audiences = [
  {
    title: "Quantum computing providers",
    description:
      "Integrate QPUs with modern cloud and HPC infrastructure.",
  },
  {
    title: "HPC & supercomputing centres",
    description:
      "Operate CPU, GPU and QPU resources as part of hybrid workloads.",
  },
  {
    title: "Research institutions",
    description:
      "Run reproducible hybrid quantum–classical experiments.",
  },
  {
    title: "Platform engineering teams",
    description:
      "Integrate quantum resources without creating a separate infrastructure stack.",
  },
] as const;

export const collaborate = {
  title: "Work with Mathnetica.",
  description:
    "Start with an Architecture Review, or engage us to design controlled hybrid quantum infrastructure workflows. Open-source and research feed the Mathnetica Platform — they are not the whole company.",
} as const;

export const commercialModel = {
  eyebrow: "Work with us",
  title: "Architecture Review today. Infrastructure workflows next.",
  body: "Mathnetica is a commercial engineering company under Quantum Infrastructure Engineering. We design controlled infrastructure workflows — policy, approval, placement, provisioning, execution and audit — across CPU, GPU, HPC, simulators and QPUs. Specialized engagements fund and inform the Mathnetica Platform.",
  flywheel:
    "Research → open source → real-world engineering → reusable technology → Mathnetica Platform.",
  offerLine:
    "Mathnetica builds controlled infrastructure workflows for hybrid quantum-classical computing — connecting policy, human approval, provisioning and execution across CPU, GPU, HPC and QPU environments.",
} as const;

export const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/research", label: "Research" },
  { href: "/services", label: "Engineering" },
  { href: "/about", label: "About" },
] as const;

/** Research and engineering directions — not production feature claims. */
export const workAreas = [
  {
    number: "01",
    title: "Hybrid workflows",
    description:
      "We are exploring controlled infrastructure workflows that span CPU, GPU, HPC, simulators and QPUs — including policy checks and human approval for high-risk steps — without treating quantum execution as an isolated experiment.",
  },
  {
    number: "02",
    title: "Workload placement",
    description:
      "We are investigating how infrastructure can reason about where each stage should run — based on performance, availability, cost, hardware requirements and policy — including when a simulator is the better target than a QPU.",
  },
  {
    number: "03",
    title: "Operations & constraints",
    description:
      "We are researching observability, cost awareness, infrastructure lifecycle and sovereignty constraints across the quantum–classical boundary — including European data residency and trusted-provider requirements where organizations need them. Platform capabilities, not a separate product.",
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
      "Respecting region, data location, approved providers, budget and organizational policy — including European data residency and cloud sovereignty constraints where they apply.",
  },
  {
    title: "Observability",
    description:
      "Workflow-first visibility, cost signals and execution provenance across classical and quantum stages.",
  },
  {
    title: "Cost awareness",
    description:
      "Estimating and comparing cost and turnaround as part of placement — not a separate FinOps product.",
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
    "QBridge explores a portable infrastructure layer for connecting classical workloads with quantum simulators and QPU backends. It is an open-source adapter direction within the Mathnetica Platform — not a finished enterprise product.",
} as const;

export const platform = {
  name: "Mathnetica Platform",
  status: "Experimental" as const,
  tagline:
    "Infrastructure and control software for hybrid quantum-classical computing.",
  summary:
    "Mathnetica is building a quantum-aware control layer for modern computing infrastructure. We are exploring hybrid workflow orchestration, workload placement, infrastructure automation, policy and sovereignty, observability and cost awareness — extending proven cloud-native and HPC technologies where they already exist.",
  principle:
    "Existing stack is the foundation. Our code is the layer that makes infrastructure understand hybrid quantum-classical workloads.",
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
    "Capabilities described on this site are research and early engineering directions. Do not assume providers, schedulers or automation are production-ready unless listed as implemented.",
} as const;

export const aboutValues = [
  "Commercial engineering company — not only open source",
  "Software infrastructure, not quantum hardware",
  "Hybrid by design — CPU, GPU, HPC, simulators, QPU",
  "Proven cloud-native and HPC building blocks first",
  "Quantum-aware layer where gaps exist",
  "Open source for adoption and credibility",
  "Research that feeds the platform",
  "Honest experimental status",
  "Amsterdam · European data residency & sovereignty where required",
] as const;
