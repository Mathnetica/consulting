export type ResearchStatus = "published" | "in-progress" | "planned";

export type ResearchLink = {
  label: string;
  href: string;
};

export type ResearchArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  abstract: string;
  body: string[];
  status: ResearchStatus;
  links?: ResearchLink[];
};

export const researchCategories = [
  "Workloads",
  "Resources",
  "Scheduling",
  "Workflows",
  "Operations",
  "Control Plane",
  "Automation",
] as const;

/**
 * Published notes have body content.
 * In-progress / planned items are research directions that support the platform.
 */
export const researchArticles: ResearchArticle[] = [
  {
    slug: "mathnetica-tools-for-cudaq",
    title: "Building Developer Tools for CUDA-Q in VS Code and Cursor",
    category: "Workloads",
    date: "2026-10-07",
    status: "published",
    abstract:
      "Mathnetica Tools for CUDA-Q is an independent Preview extension that helps developers run CUDA-Q programs, inspect environments, select targets and work with notebooks — without leaving VS Code or Cursor.",
    body: [
      "Hybrid quantum-classical work does not start only at the cluster. It also starts where engineers write kernels, select targets and debug local environments. Mathnetica is building open developer tooling for that layer alongside longer-term infrastructure research.",
      "Mathnetica Tools for CUDA-Q is an independent open-source Preview for Visual Studio Code and Cursor. It focuses on practical CUDA-Q workflows: run the current file, detect @cudaq.kernel functions, select execution targets from the local CUDA-Q environment, inspect Python and CUDA-Q diagnostics, and work with Jupyter notebooks in the editor.",
      "The extension is intentionally honest about maturity. Target availability depends on the local CUDA-Q installation. GPU or QPU targets are not assumed. Kernel CodeLens currently runs the containing Python file so imports and surrounding context are preserved. Optional AI assistance (local Ollama or Mistral BYOK) is available, but all core CUDA-Q tools work without it.",
      "This project is not affiliated with, sponsored by, or endorsed by NVIDIA. NVIDIA and CUDA-Q are trademarks of NVIDIA Corporation. Mathnetica Tools for CUDA-Q does not use NVIDIA logos or official CUDA-Q branding assets.",
      "Why it matters for Mathnetica: useful quantum infrastructure includes the path from developer workstation to hybrid execution. Editor tooling is one concrete place where CPU, simulator and eventual QPU workflows become operational for engineers — complementary to Kubernetes, HPC and control-plane research, not a replacement for them.",
      "Status: Preview, under active development. Feedback and contributions are welcome via GitHub.",
    ],
    links: [
      {
        label: "VS Code Marketplace — Mathnetica Tools for CUDA-Q",
        href: "https://marketplace.visualstudio.com/items?itemName=mathnetica.mathnetica-tools-for-cudaq",
      },
      {
        label: "GitHub — Mathnetica/mathnetica-cudaq-vscode",
        href: "https://github.com/Mathnetica/mathnetica-cudaq-vscode",
      },
    ],
  },
  {
    slug: "running-quantum-workloads-from-kubernetes",
    title: "Running Quantum Workloads from Kubernetes",
    category: "Workloads",
    date: "2026-09-01",
    status: "in-progress",
    abstract:
      "What changes when quantum execution becomes part of a cloud-native workload — without making Kubernetes Mathnetica's identity.",
    body: [
      "Kubernetes provides mature primitives for declarative resources, controllers and scheduling. Quantum execution adds remote queues, provider semantics and hardware constraints those primitives never assumed.",
      "This note frames Kubernetes as an initial laboratory for hybrid workloads — a place to test control-plane ideas that should remain meaningful on HPC or other environments later.",
      "Status: in progress. Early experiments only; not a claim of production QPU scheduling on Kubernetes.",
    ],
  },
  {
    slug: "designing-a-qpu-resource-model",
    title: "Designing a QPU Resource Model",
    category: "Resources",
    date: "2026-08-20",
    status: "planned",
    abstract:
      "CPU and GPU abstractions do not map directly to quantum processors. What information should infrastructure understand about a QPU?",
    body: [
      "A useful QPU resource model may need qubits, topology, queue characteristics, fidelity signals, cost and provider identity — not just capacity counts.",
      "Mathnetica treats this as a platform research problem: define the minimum honest model before claiming automatic scheduling.",
      "Status: planned research topic supporting the Mathnetica Platform resource layer.",
    ],
  },
  {
    slug: "scheduling-across-heterogeneous-qpus",
    title: "Scheduling Across Heterogeneous QPUs",
    category: "Scheduling",
    date: "2026-08-05",
    status: "planned",
    abstract:
      "How should infrastructure place and schedule stages when backends differ in availability, topology, queue time, fidelity, cost and policy?",
    body: [
      "Heterogeneous QPUs break naive portability. Placement research must separate local intent from remote provider queues and avoid pretending backends are interchangeable.",
      "We are researching decision inputs — including when a simulator is the better target than a QPU — not shipping an automatic multi-QPU scheduler today.",
      "Status: planned.",
    ],
  },
  {
    slug: "hybrid-cpu-gpu-qpu-workflows",
    title: "Hybrid CPU/GPU/QPU Workflows",
    category: "Workflows",
    date: "2026-07-18",
    status: "in-progress",
    abstract:
      "Exploring workflow orchestration across CPU, GPU, HPC, simulators and QPUs — one workload, multiple classes of compute.",
    body: [
      "Quantum applications increasingly combine classical preprocessing, optimization, simulation, quantum execution and classical post-processing.",
      "Mathnetica treats the complete workflow as an infrastructure problem and intends to integrate mature workflow engines where useful rather than rewriting them.",
      "Status: in progress. Conceptual and experimental work; not a claim of a finished hybrid workflow product.",
    ],
  },
  {
    slug: "observability-across-the-quantum-classical-boundary",
    title: "Observability Across the Quantum-Classical Boundary",
    category: "Operations",
    date: "2026-07-01",
    status: "in-progress",
    abstract:
      "Following one hybrid workload across classical stages, provider queues, simulators, QPU execution and classical post-processing.",
    body: [
      "Observability is a platform capability, not Mathnetica's product. We intend to use OpenTelemetry, Prometheus and Grafana where appropriate and add quantum-specific context where generic stacks stop.",
      "The research question is what a shared execution identity must carry across the quantum–classical boundary — including placement and policy decisions.",
      "Status: in progress.",
    ],
  },
  {
    slug: "operating-remote-quantum-resources",
    title: "Operating Remote Quantum Resources",
    category: "Control Plane",
    date: "2026-06-10",
    status: "planned",
    abstract:
      "A QPU may be remote, queued and controlled by an external provider. What does this mean for modern infrastructure control planes?",
    body: [
      "Remote QPUs challenge assumptions about locality, failure and reconciliation loops that cloud-native operators take for granted.",
      "This topic studies control-plane implications for discovery, lifecycle and reliability when the device is not in the cluster.",
      "Status: planned.",
    ],
  },
  {
    slug: "workload-placement-across-hybrid-targets",
    title: "Workload Placement Across Hybrid Targets",
    category: "Scheduling",
    date: "2026-05-20",
    status: "planned",
    abstract:
      "When a stage can run on CPU, GPU, HPC, a simulator or a QPU — how should infrastructure decide, and how should it explain why?",
    body: [
      "Placement is not only scheduling QPU jobs. Hybrid workloads need decisions that weigh performance, queue time, cost, hardware requirements and organizational policy — including European data residency and cloud sovereignty constraints where they apply.",
      "Mathnetica is exploring this as a research direction for the control layer. No production placement engine is claimed.",
      "Status: planned.",
    ],
  },
  {
    slug: "infrastructure-automation-for-hybrid-workloads",
    title: "Infrastructure Automation for Hybrid Workloads",
    category: "Automation",
    date: "2026-05-01",
    status: "planned",
    abstract:
      "Execution is only part of the problem. When should hybrid workloads also drive provisioning, configuration and teardown of supporting infrastructure?",
    body: [
      "Some workloads already have capacity. Others need ephemeral environments. Mathnetica is investigating how infrastructure automation can enter the lifecycle of hybrid quantum-classical workloads without becoming a generic Terraform consultancy.",
      "Existing tools may be used underneath. They are not the Mathnetica product.",
      "Status: planned.",
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

export function formatResearchStatus(status: ResearchStatus) {
  switch (status) {
    case "published":
      return "Published";
    case "in-progress":
      return "In progress";
    case "planned":
      return "Planned";
  }
}
