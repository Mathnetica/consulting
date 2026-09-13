export type ResearchArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  abstract: string;
  body: string[];
};

export const researchCategories = [
  "Hybrid Search",
  "Retrieval Systems",
  "Sovereign AI",
  "Distributed Systems",
  "Data Platforms",
  "AI Infrastructure",
  "Architecture Patterns",
] as const;

export const researchArticles: ResearchArticle[] = [
  {
    slug: "hybrid-search-for-production-rag",
    title: "Hybrid Search for Production RAG",
    category: "Hybrid Search",
    date: "2026-06-12",
    abstract:
      "Why dense retrieval alone is rarely enough, and how lexical and vector signals can be combined without turning the retrieval layer into an unmaintainable experiment.",
    body: [
      "Production RAG systems often fail at retrieval quality long before model choice becomes the bottleneck. Dense embeddings help with semantic match, but they can miss exact identifiers, codes, product names and regulatory phrasing.",
      "Hybrid search combines lexical and vector retrieval behind a shared ranking stage. The architectural question is not whether to combine signals, but how to keep the pipeline operable: indexing ownership, freshness, evaluation and failure modes.",
      "A practical pattern is a dual-index path with a lightweight fusion layer, clear document identity and an evaluation set that reflects real user queries rather than synthetic similarity benchmarks.",
    ],
  },
  {
    slug: "evaluation-architecture-for-llm-systems",
    title: "Evaluation Architecture for LLM Systems",
    category: "Retrieval Systems",
    date: "2026-05-03",
    abstract:
      "Evaluation is part of the architecture. Without offline and online measurement, LLM features drift into unmaintainable prompt collections.",
    body: [
      "Teams often treat evaluation as a notebook exercise. In production systems it needs to sit beside serving: datasets, judges, regression gates and operational telemetry.",
      "A useful architecture separates retrieval quality, generation quality and task success. Each layer needs its own signals, ownership and release criteria.",
      "The goal is not perfect scoring. The goal is a system that can detect regression early and make architectural trade-offs visible.",
    ],
  },
  {
    slug: "sovereign-ai-infrastructure-constraints",
    title: "Sovereign AI Infrastructure Constraints",
    category: "Sovereign AI",
    date: "2026-03-18",
    abstract:
      "Sovereignty changes more than where GPUs sit. It reshapes identity, data residency, model hosting and operational control.",
    body: [
      "Sovereign AI is often framed as a hosting decision. In practice it is an architecture constraint set: where data may move, who operates the model plane, and what fallback paths remain acceptable.",
      "Useful designs treat sovereignty as a first-class axis in the platform architecture rather than a deployment checkbox after the fact.",
      "That usually means clearer boundaries between data products, retrieval indexes, model serving and application integration — with controls that can be audited.",
    ],
  },
  {
    slug: "event-driven-data-platforms",
    title: "Event-Driven Boundaries in Data Platforms",
    category: "Data Platforms",
    date: "2026-02-09",
    abstract:
      "Event-driven patterns help platform teams scale ownership, but only when contracts, schema evolution and operational semantics are deliberate.",
    body: [
      "Many data platforms grow into tightly coupled batch pipelines. Event-driven boundaries can reduce that coupling, but they introduce new failure modes around ordering, duplicates and consumer lag.",
      "Architecture should make those trade-offs explicit: which domains publish events, which consume as products, and how contracts evolve without silent breakage.",
      "The result is not more events for their own sake. It is clearer ownership and a platform that can absorb change.",
    ],
  },
  {
    slug: "operating-model-serving-at-scale",
    title: "Operating Model Serving at Scale",
    category: "AI Infrastructure",
    date: "2025-11-21",
    abstract:
      "Model serving is an operations problem as much as an ML problem: capacity, rollout, isolation and observability decide whether systems stay production-grade.",
    body: [
      "Serving architecture needs to account for traffic shape, cold starts, multi-model coexistence and safe rollout. These are infrastructure concerns with direct product impact.",
      "Useful designs separate control plane decisions from runtime serving, and make latency, error and cost visible per model and per consumer.",
      "Without that, teams accumulate brittle serving paths that cannot be changed without risking the whole product surface.",
    ],
  },
  {
    slug: "architecture-without-diagrams-only",
    title: "Architecture Without Diagrams Only",
    category: "Architecture Patterns",
    date: "2025-09-04",
    abstract:
      "An architecture that cannot be implemented, operated and evolved by engineering teams is incomplete — regardless of how polished the diagram looks.",
    body: [
      "Architecture work fails when it stops at boxes and arrows. Production systems require decisions about interfaces, failure handling, ownership and migration paths.",
      "The useful artifact set includes diagrams, but also constraints, decision records, risk notes and a path from current state to target state.",
      "That is the difference between architecture as communication and architecture as engineering.",
    ],
  },
];

export function getResearchBySlug(slug: string) {
  return researchArticles.find((article) => article.slug === slug);
}
