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
    "Mathnetica builds open-source software infrastructure for operating quantum workloads alongside classical computing systems.",
  tagline: "Building software infrastructure for hybrid classical–quantum computing.",
  focus: "Quantum Infrastructure Engineering",
  primaryCta: "Explore the Platform",
  primaryCtaHref: "/platform",
  secondaryCta: "GitHub",
  secondaryCtaHref: "https://github.com/mathnetica",
  researchCta: "Research",
  researchCtaHref: "/research",
  finalCta: "Get in touch",
} as const;

export const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
] as const;

/** One engineering problem, three layers. */
export const workAreas = [
  {
    number: "01",
    title: "Hybrid Workloads",
    description:
      "Run workflows spanning classical and quantum compute. Mathnetica explores infrastructure for coordinating CPU, GPU and QPU stages without treating quantum execution as an isolated experiment.",
  },
  {
    number: "02",
    title: "QPU Infrastructure",
    description:
      "Make quantum processors manageable infrastructure resources. We research resource discovery, provider integration, workload lifecycle, queues, scheduling and execution across heterogeneous backends.",
  },
  {
    number: "03",
    title: "Quantum Operations",
    description:
      "Operate the complete workload, not just the circuit. Tracing, metrics, provenance, reliability and execution visibility across classical and quantum stages.",
  },
] as const;

export const builtOn = [
  "Kubernetes",
  "Argo",
  "Kueue",
  "OpenTelemetry",
  "Prometheus",
  "Grafana",
] as const;

export const platform = {
  name: "Mathnetica Platform",
  status: "Experimental" as const,
  tagline: "Open-source infrastructure for hybrid classical–quantum computing.",
  summary:
    "Mathnetica builds the quantum-aware control layer for modern computing infrastructure. We extend proven cloud-native and HPC technologies with the resource models, provider integrations and operational capabilities required to run quantum workloads.",
  principle:
    "Existing stack is the foundation. Our code is the layer that makes infrastructure understand QPUs.",
  github: "https://github.com/mathnetica",
  claimLevel: "experimental" as const,
  layers: [
    {
      name: "QPU Resources",
      description:
        "Discovery and allocation — how infrastructure should represent and manage quantum processors. Research and experiments.",
    },
    {
      name: "Workloads",
      description:
        "Routing and lifecycle across CPU, GPU and QPU stages — without treating quantum as an isolated experiment.",
    },
    {
      name: "Operations",
      description:
        "Telemetry and provenance across the quantum–classical boundary — a platform capability, not a separate product.",
    },
  ],
  roadmapNote:
    "Provider integrations, predictive scheduling and multi-cluster/HPC orchestration are on the roadmap. Do not assume backends are supported unless listed as implemented.",
} as const;

export const aboutValues = [
  "Software infrastructure, not quantum hardware",
  "Proven cloud-native building blocks first",
  "Quantum-aware layer where gaps exist",
  "Open source before marketing claims",
  "Research that feeds the platform",
  "Honest experimental status",
  "Amsterdam · European ecosystem",
  "Years in one domain",
] as const;
