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
    slug: "data-ai-solution-architecture",
    number: "01",
    title: "Data & AI Solution Architecture",
    shortDescription:
      "Technical direction for complex Data & AI systems — decisions your teams can implement.",
    capabilities: [
      "enterprise AI architecture",
      "data architecture",
      "AI platform architecture",
      "integration architecture",
      "RAG / search architecture",
      "cloud-native architecture",
      "security & governance",
      "technology selection",
      "ADRs & technical strategy",
    ],
    problem:
      "Organizations need clear technical direction for enterprise RAG, AI platforms and data systems under real constraints — cloud, security, integration and existing teams.",
    whatWeDo:
      "We define requirements and constraints, target design, technology decisions, ADRs, security and integration patterns, deployment model, and a roadmap for your implementation teams.",
    typicalEngagement:
      "Engagements of several weeks, Architecture Reviews, or fractional Principal / Solution Architect retainers.",
    deliverables: [
      "Assessment and constraints model",
      "Target design and system diagrams",
      "Technology decisions and ADRs",
      "Security, integration and deployment guidance",
      "Implementation roadmap for client teams",
    ],
    technologies: [
      "Azure / AWS / GCP",
      "Databricks and lakehouse stacks",
      "Kubernetes",
      "RAG and search infrastructure",
      "API and event integration",
      "Identity, security and governance patterns",
    ],
    outcomes: [
      "Clear technical direction before large spend",
      "Decisions that hold up in production",
      "Client teams equipped to build and own the system",
      "Senior expertise without standing up a delivery squad",
    ],
  },
  {
    slug: "data-ai-platform-engineering",
    number: "02",
    title: "Data & AI Platform Engineering",
    shortDescription:
      "Platform foundations and critical-path engineering where implementation knowledge is required to validate design.",
    capabilities: [
      "platform foundations",
      "reference implementations",
      "critical-path PoCs",
      "lakehouse architecture",
      "RAG infrastructure",
      "model serving patterns",
      "observability",
      "Kubernetes",
      "sovereign infrastructure",
    ],
    problem:
      "Design fails when it has never touched the hard parts of the platform — retrieval quality, serving, data contracts or operational reality.",
    whatWeDo:
      "We engineer reference implementations, prototypes and critical paths to validate the hardest technical bets.",
    typicalEngagement:
      "Time-boxed validation of the hardest technical bets, alongside Solution Architecture work.",
    deliverables: [
      "Critical-path prototype or PoC",
      "Reference implementation patterns",
      "Technical risk findings",
      "Handover for client engineering ownership",
    ],
    technologies: [
      "Kubernetes",
      "data platforms",
      "vector search",
      "model serving",
      "observability stacks",
      "major cloud providers",
    ],
    outcomes: [
      "Design proven where it matters most",
      "Reduced implementation risk",
      "Patterns client teams can extend",
      "Clear ownership after the engagement",
    ],
  },
  {
    slug: "architecture-review",
    number: "03",
    title: "Architecture Review",
    shortDescription:
      "A focused senior technical review of an existing Data, AI or platform setup.",
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
      "We run a time-boxed Architecture Review: understand the system, assess risks and trade-offs, and deliver clear, prioritized recommendations.",
    typicalEngagement: "1–2 weeks with discovery, assessment and a review session.",
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
    priceNote: "Architecture Review — €2,500 fixed",
  },
  {
    slug: "fractional-principal-architect",
    number: "04",
    title: "Fractional Principal Architect",
    shortDescription:
      "Ongoing senior Data & AI technical direction across initiatives — typically one to two days per week.",
    capabilities: [
      "technical strategy",
      "architecture governance",
      "design reviews",
      "technology selection",
      "roadmap stewardship",
      "guidance for delivery teams",
    ],
    problem:
      "Organizations need continuous senior technical judgment across initiatives, but a full-time principal hire is not always the right model.",
    whatWeDo:
      "We provide fractional Principal / Solution Architecture: typically one to two days per week, focused on decisions, reviews and direction.",
    typicalEngagement: "Monthly retainer, usually 1–2 days per week.",
    deliverables: [
      "Standing technical direction cadence",
      "Design and ADR reviews",
      "Prioritized backlog of decisions",
      "Guidance for internal implementation teams",
    ],
    technologies: [
      "Enterprise architecture practice",
      "Data & AI platforms",
      "Cloud and Kubernetes landscapes",
    ],
    outcomes: [
      "Senior technical capacity on retainer",
      "Consistent direction across teams",
      "Continuity without a full-time hire",
      "Expertise that scales across initiatives",
    ],
    priceNote: "Fractional Principal Architect — ongoing monthly engagement",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
