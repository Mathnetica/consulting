export const letter = {
  slug: "letter",
  eyebrow: "Letter",
  title: "A letter from Mathnetica.",
  dateLabel: "September 2026",
  dateIso: "2026-09-25",
  bannerLabel: "Read the Mathnetica letter",
  bannerHref: "/letter",
  storageKey: "mathnetica-letter-banner-dismissed-2026-09",
  summary:
    "Why we are building infrastructure for hybrid quantum-classical computing — as a commercial engineering company and a research lab.",
  closing:
    "If this direction resonates — as a collaborator, early customer, research partner, or long-term backer — we would like to hear from you.",
  paragraphs: [
    "Mathnetica exists because useful quantum computing will not arrive as a standalone appliance. It will arrive as another class of compute inside systems that already run on CPUs, GPUs and HPC — with simulators, remote QPUs, queues, cost, policy and classical work before and after every interesting experiment.",
    "That is our starting point: quantum doesn't run alone.",
    "Most of the industry still sells either hardware promise or algorithm hope. Both matter. Neither is our layer. We are building the infrastructure and control software required to operate hybrid quantum-classical workloads — the missing layer between applications and the messy reality of providers, clusters and constraints.",
    "We are deliberately both things at once: a commercial engineering company and a research lab. Organizations can hire us today for Architecture Review and for designing controlled hybrid infrastructure workflows. In parallel we research and build the Mathnetica Platform in the open. Research without real systems is theatre. Services without a compounding technology thesis become another consultancy. We refuse both failure modes.",
    "The commercial idea is simple. Infrastructure decisions should be workflows, not tribal knowledge. Request, plan, policy check, human approval when required, provision if needed, place the stage, execute, observe, audit. Deterministic tooling should do deterministic work. Policy should bound what is allowed — including European data residency and sovereignty constraints where they apply. Humans should approve what is expensive, sensitive or irreversible. Quantum processors should be first-class targets alongside classical compute, not a marketing footnote bolted on later.",
    "That is why we do not position Mathnetica as Kubernetes consulting, GPU consulting, or generic “AI infrastructure.” Those markets are crowded and forgettable. Our identity remains Quantum Infrastructure Engineering. Hybrid classical systems are inside that identity because quantum workloads require them.",
    "We are early. The platform is experimental. Open source such as QBridge and our research notes exist to create technical credibility and adoption — not to pretend the product is finished. Honesty is part of the brand. Overclaiming would destroy the only advantage a small European lab has: trust.",
    "What we want over the next years is compounding: research questions that become working experiments; experiments that become open components; components that become reusable platform technology; real engineering engagements that teach us what production systems actually need. Services fund the present. The platform is the bet on the future.",
    "If you are building or operating systems where classical and quantum compute must coexist — HPC centres, research institutions, quantum providers, platform teams, or long-term partners who care about European infrastructure — we are interested in conversation. Not every conversation needs to be a purchase. Some should be collaboration. Some may become capital or strategic partnership. All of them should start from the same thesis.",
    "Quantum will not replace classical infrastructure. It will force infrastructure to grow up. Mathnetica intends to help build that layer.",
  ],
} as const;
