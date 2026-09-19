export const siteConfig = {
  name: "Mathnetica",
  email: "research@mathnetica.com",
  location: "Amsterdam · Netherlands",
  locationShort: "Amsterdam, Netherlands",
  /** Postal address — Amsterdam Zuid (Stadionbuurt). */
  address: {
    street: "Patroclosstraat 2",
    postalCode: "1076 NG",
    city: "Amsterdam",
    country: "Netherlands",
  },
  linkedin: "https://www.linkedin.com/company/mathnetica",
  github: "https://github.com/mathnetica",
  githubQuancave: "https://github.com/mathnetica/quancave",
  description:
    "Mathnetica is an independent quantum software research and engineering lab in the Netherlands — software infrastructure for hybrid classical–quantum computing.",
  tagline: "Building the software infrastructure between classical and quantum computing.",
  focus: "Quantum Systems Engineering",
  primaryCta: "Explore Quancave",
  primaryCtaHref: "/quancave",
  secondaryCta: "GitHub",
  secondaryCtaHref: "https://github.com/mathnetica",
  finalCta: "Get in touch",
} as const;

/** Primary nav — lab model: product, research, about. Contact via CTA. */
export const navLinks = [
  { href: "/quancave", label: "Quancave" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
] as const;

export const workAreas = [
  {
    number: "01",
    title: "Quantum Infrastructure",
    description:
      "Software connecting classical applications, cloud/HPC infrastructure and quantum processors.",
  },
  {
    number: "02",
    title: "Hybrid Computing",
    description:
      "Architecture and experimentation across CPU, GPU and QPU workloads.",
  },
  {
    number: "03",
    title: "Quantum Systems Architecture",
    description:
      "Independent assessment of hybrid classical–quantum designs — including when not to use quantum.",
  },
] as const;

export const credentials = [
  "Software Engineering",
  "Distributed Systems",
  "Kubernetes",
  "Cloud / HPC",
  "Hybrid Computing",
  "Quantum Systems",
] as const;

export const aboutValues = [
  "Cloud and platform engineering depth",
  "Hardware-independent infrastructure thinking",
  "Open source before marketing claims",
  "Research that stays in one domain",
  "Honest assessment — including don't use quantum",
  "Small scope, long commitment",
  "Netherlands quantum ecosystem",
  "Systems that can be operated, not only drawn",
] as const;

export const quancave = {
  name: "Quancave",
  status: "Experimental",
  tagline: "An experimental orchestration layer for hybrid quantum-classical workloads.",
  summary:
    "Quancave is Mathnetica's flagship open-source project: submit quantum jobs from classical infrastructure, track status, and collect results — starting with simulators, then real QPU backends.",
  github: "https://github.com/mathnetica/quancave",
  pipeline: ["submit", "execute", "status", "result"] as const,
  phases: [
    {
      title: "v0.1 — Simulator",
      description: "QuantumJob API on a local or cluster simulator. End-to-end submit → result.",
    },
    {
      title: "v0.2 — First QPU",
      description: "One real provider backend. Queue, status and result paths against hardware.",
    },
    {
      title: "Later — Portability",
      description: "Second backend, metrics, observability, fallback — only after real problems appear.",
    },
  ],
} as const;

/** Optional engagement — not homepage-primary; assessment when asked. */
export const assessment = {
  name: "Quantum Systems Architecture Assessment",
  duration: "1–2 weeks",
  description:
    "Business problem → workload → classical baseline → potential QPU component → hybrid architecture → readiness and limits.",
  note: "Sometimes the recommendation is: don't use quantum.",
} as const;
