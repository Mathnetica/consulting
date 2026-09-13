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
};

export const services: Service[] = [
  {
    slug: "data-ai-platform-engineering",
    number: "01",
    title: "Data & AI Platform Engineering",
    shortDescription:
      "Design and implementation of modern data and AI platforms.",
    capabilities: [
      "data platforms",
      "lakehouse architecture",
      "event-driven systems",
      "data products",
      "search infrastructure",
      "vector search",
      "RAG infrastructure",
      "model serving",
      "observability",
      "Kubernetes",
      "cloud platforms",
      "sovereign infrastructure",
    ],
    problem:
      "Production AI fails when the data, serving and platform layers underneath it are fragile, fragmented or hard to operate.",
    whatWeDo:
      "We design and build the platform foundations for data products, retrieval, model serving and operational reliability — with architecture that engineering teams can own.",
    typicalEngagement:
      "Platform assessments, target architecture, reference implementations and paired delivery with internal platform or data engineering teams.",
    deliverables: [
      "Current-state assessment",
      "Target platform architecture",
      "Reference implementation of critical paths",
      "Operational runbooks and ownership model",
      "Migration and rollout plan",
    ],
    technologies: [
      "Kubernetes",
      "lakehouse stacks",
      "event streaming",
      "vector databases",
      "search engines",
      "model serving",
      "observability tooling",
      "major cloud providers",
    ],
    outcomes: [
      "A coherent platform for data and AI workloads",
      "Clear ownership boundaries",
      "Faster path from prototype to production",
      "Infrastructure that can be operated and evolved",
    ],
  },
  {
    slug: "ai-architecture",
    number: "02",
    title: "AI Architecture",
    shortDescription:
      "Architecture for production-grade AI systems integrated into real enterprise environments.",
    capabilities: [
      "AI platform architecture",
      "LLM architecture",
      "RAG architecture",
      "agent systems",
      "evaluation architecture",
      "model serving",
      "integration patterns",
      "security",
      "governance",
      "scalability",
      "enterprise AI architecture",
    ],
    problem:
      "Many AI initiatives stall between demos and production because architecture, integration, evaluation and governance were treated as afterthoughts.",
    whatWeDo:
      "We define AI system architecture that fits enterprise constraints: identity, data access, evaluation, serving, observability and change management.",
    typicalEngagement:
      "Architecture design for LLM and RAG systems, agent platforms, evaluation pipelines and integration into existing enterprise landscapes.",
    deliverables: [
      "AI system architecture",
      "Integration and security patterns",
      "Evaluation approach",
      "Risk and governance recommendations",
      "Implementation roadmap",
    ],
    technologies: [
      "LLM APIs and self-hosted models",
      "RAG pipelines",
      "vector search",
      "orchestration frameworks",
      "API gateways",
      "identity and access control",
      "evaluation tooling",
    ],
    outcomes: [
      "AI systems designed for production use",
      "Clear boundaries between models, data and applications",
      "Measurable quality and operational controls",
      "Architecture that can scale with demand",
    ],
  },
  {
    slug: "complex-systems-engineering",
    number: "03",
    title: "Complex Systems Engineering",
    shortDescription:
      "Engineering support for systems that are difficult to design, scale, migrate or operate.",
    capabilities: [
      "distributed systems",
      "performance",
      "scalability",
      "system modernization",
      "platform migration",
      "API architecture",
      "event-driven systems",
      "cloud-native architecture",
      "search systems",
    ],
    problem:
      "Legacy platforms, distributed systems and high-throughput workloads often outgrow their original design and become expensive to change safely.",
    whatWeDo:
      "We help teams redesign, modernize and stabilize complex systems — with senior engineers who understand both architecture and implementation detail.",
    typicalEngagement:
      "Performance and scalability work, modernization programs, platform migrations and deep technical pairing on critical subsystems.",
    deliverables: [
      "System analysis and risk map",
      "Target architecture and migration strategy",
      "Critical path implementations",
      "Performance and reliability improvements",
      "Handover documentation",
    ],
    technologies: [
      "distributed systems",
      "APIs and event buses",
      "cloud-native platforms",
      "search infrastructure",
      "observability stacks",
      "performance tooling",
    ],
    outcomes: [
      "Systems that can scale and evolve",
      "Reduced operational risk during change",
      "Clearer technical ownership",
      "Practical modernization without rewrite theater",
    ],
  },
  {
    slug: "architecture-review",
    number: "04",
    title: "Architecture Review",
    shortDescription:
      "A focused senior technical review of an existing Data, AI or platform architecture.",
    capabilities: [
      "discovery session",
      "architecture assessment",
      "system diagram",
      "technical risks",
      "prioritized recommendations",
      "review session",
    ],
    problem:
      "Teams need an independent, senior technical view before committing to a platform direction, major migration or AI investment.",
    whatWeDo:
      "We run a focused architecture review: understand the system, assess risks and trade-offs, and deliver clear, prioritized recommendations.",
    typicalEngagement:
      "A time-boxed engagement with discovery, assessment and a structured review session with technical stakeholders.",
    deliverables: [
      "Discovery session",
      "Architecture assessment",
      "System diagram",
      "Technical risks",
      "Prioritized recommendations",
      "Review session",
    ],
    technologies: [
      "Architecture modeling",
      "Risk assessment",
      "Platform and AI stack review",
    ],
    outcomes: [
      "Independent technical clarity",
      "Shared understanding of risks",
      "Actionable next steps",
      "Better decisions before large spend",
    ],
    priceNote: "Architecture Review — from €1,950",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
