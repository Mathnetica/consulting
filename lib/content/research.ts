export type ResearchArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  abstract: string;
  body: string[];
};

export const researchCategories = [
  "Orchestration",
  "Observability",
  "Portability",
  "Hybrid Architectures",
  "Resource Estimation",
  "Kubernetes",
] as const;

export const researchArticles: ResearchArticle[] = [
  {
    slug: "running-quantum-workloads-from-kubernetes",
    title: "Running Quantum Workloads from Kubernetes",
    category: "Kubernetes",
    date: "2026-09-01",
    abstract:
      "What it means to treat a QPU path like any other workload runtime — CRDs, status, ownership — without pretending quantum is just another microservice.",
    body: [
      "Kubernetes is where many classical platforms already live. The question for hybrid systems is not whether to invent a new control plane, but how far a QuantumJob abstraction can go before quantum-specific constraints break the model.",
      "Useful early design: a narrow CRD that captures circuit or program reference, shots, backend preference and result location — then an operator that talks to a simulator or provider API.",
      "The hard parts appear later: queue semantics, calibration windows, cost, and what 'failed' means when the backend is a shared QPU. Those should be learned from real runs, not invented in a slide deck.",
    ],
  },
  {
    slug: "observability-for-hybrid-quantum-classical-workloads",
    title: "Observability for Hybrid Quantum-Classical Workloads",
    category: "Observability",
    date: "2026-08-12",
    abstract:
      "Classical traces and metrics do not automatically explain a hybrid job. Hybrid systems need a shared identity across CPU, GPU and QPU stages.",
    body: [
      "A hybrid pipeline that loses correlation between classical prep, quantum execution and post-processing is hard to operate. Observability has to start with job identity, not with provider dashboards alone.",
      "OpenTelemetry-style traces across the classical control path, plus provider-native execution metadata, are a practical baseline for QBridge-style orchestration.",
      "The goal is operable systems: knowing where time and money went, and which stage failed — classical or quantum.",
    ],
  },
  {
    slug: "portable-quantum-workloads-across-heterogeneous-qpus",
    title: "Portable Quantum Workloads Across Heterogeneous QPUs",
    category: "Portability",
    date: "2026-07-20",
    abstract:
      "Hardware independence is a product claim only when the orchestration layer survives a second backend — not when the first demo works.",
    body: [
      "Every provider ships its own SDK and mental model. Portability starts with a thin execution contract: what is submitted, what is returned, and what is backend-specific.",
      "QBridge's early bet is not a universal compiler. It is a stable job lifecycle with pluggable backends, so classical infrastructure does not rewrite itself for each QPU vendor.",
      "True portability will expose painful differences in gates, noise and queues. That pain is the research agenda — not a reason to avoid abstraction.",
    ],
  },
  {
    slug: "cpu-gpu-qpu-orchestration-patterns",
    title: "CPU / GPU / QPU Orchestration Patterns",
    category: "Hybrid Architectures",
    date: "2026-06-15",
    abstract:
      "Most of the work stays classical. The architectural question is which fragments should ever touch a QPU — and how the system decides.",
    body: [
      "Hybrid computing is not 'replace the cluster with qubits'. It is selective offload: classical systems do the bulk of the work; quantum paths handle narrow, well-justified fragments.",
      "Patterns worth studying early: explicit stage graphs, synchronous vs queued QPU calls, and clear ownership of results back into classical state.",
      "If the classical baseline already solves the problem, the honest architecture says so. That decision belongs in systems design, not in marketing.",
    ],
  },
  {
    slug: "quantum-resource-estimation-in-cloud-environments",
    title: "Quantum Resource Estimation in Cloud Environments",
    category: "Resource Estimation",
    date: "2026-05-08",
    abstract:
      "Before paying for QPU time, teams need a classical-honest estimate of whether a quantum path can matter — under real cloud and queue constraints.",
    body: [
      "Resource estimation sits between algorithm theory and platform engineering: shots, circuit depth, queue delay, cost and classical alternatives.",
      "In cloud settings the estimate must include provider limits and operational friction, not only asymptotic gate counts.",
      "Assessment engagements should make this explicit. Sometimes the estimate ends the quantum path early — that is a successful outcome.",
    ],
  },
  {
    slug: "what-a-quantumjob-api-should-not-do",
    title: "What a QuantumJob API Should Not Do",
    category: "Orchestration",
    date: "2026-04-02",
    abstract:
      "v0.1 orchestration should submit, execute, report status and return results. Everything else is a temptation until real usage demands it.",
    body: [
      "The failure mode of early quantum platforms is feature gravity: scheduling AI, multi-cloud magic and full compiler stacks before a single reliable job path exists.",
      "QBridge starts with a boring lifecycle. Simulator first. One provider second. Abstraction only where the second backend forces it.",
      "Saying no to scope is how a one-person lab stays coherent for years.",
    ],
  },
];

export function getResearchBySlug(slug: string) {
  return researchArticles.find((article) => article.slug === slug);
}

export const RESEARCH_PAGE_SIZE = 10;

export type ResearchCategory = (typeof researchCategories)[number];

export function isResearchCategory(value: string): value is ResearchCategory {
  return (researchCategories as readonly string[]).includes(value);
}

export function getSortedResearchArticles() {
  return [...researchArticles].sort((a, b) => b.date.localeCompare(a.date));
}

export function filterResearchArticles(category?: string | null) {
  const sorted = getSortedResearchArticles();
  if (!category || !isResearchCategory(category)) {
    return sorted;
  }
  return sorted.filter((article) => article.category === category);
}

export function paginateResearchArticles(
  articles: ResearchArticle[],
  page: number,
  pageSize = RESEARCH_PAGE_SIZE,
) {
  const total = articles.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * pageSize;

  return {
    items: articles.slice(start, start + pageSize),
    total,
    totalPages,
    currentPage,
    pageSize,
    showPagination: total > pageSize,
  };
}

export function buildResearchHref(options: {
  category?: string | null;
  page?: number;
}) {
  const params = new URLSearchParams();
  if (options.category && isResearchCategory(options.category)) {
    params.set("category", options.category);
  }
  if (options.page && options.page > 1) {
    params.set("page", String(options.page));
  }
  const query = params.toString();
  return query ? `/research?${query}` : "/research";
}
