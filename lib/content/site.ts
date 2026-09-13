export const siteConfig = {
  name: "Mathnetica",
  email: "hello@mathnetica.com",
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
  description:
    "Mathnetica is a Data & AI consultancy for complex production environments — platform engineering, AI architecture and focused technical engagements.",
  tagline: "Engineering the platforms behind Data & AI.",
  primaryCta: "Start a project",
  secondaryCta: "Explore services",
  finalCta: "Discuss your project",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroFocus = [
  "Data & AI Platform Engineering",
  "AI Architecture",
] as const;

export const expertiseAreas = [
  {
    number: "01",
    title: "Data & AI Platforms",
    description:
      "Data architecture, AI infrastructure, retrieval, RAG, model serving, Kubernetes and cloud-native platforms.",
    href: "/services#data-ai-platform-engineering",
  },
  {
    number: "02",
    title: "AI Architecture",
    description:
      "Technical direction for production AI — integration, security, governance, scalability and technology decisions.",
    href: "/services#data-ai-solution-architecture",
  },
  {
    number: "03",
    title: "Architecture Review",
    description:
      "Independent assessment of an existing Data, AI or platform architecture.",
    href: "/services#architecture-review",
  },
] as const;

export const credentials = [
  "Software Engineering",
  "Distributed Systems",
  "Kubernetes",
  "Azure",
  "AWS",
  "TOGAF",
  "Data & AI",
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Constraints before solutions.",
  },
  {
    number: "02",
    title: "Design",
    description: "Clear technical decisions and system direction.",
  },
  {
    number: "03",
    title: "Validate",
    description: "Prove the difficult parts.",
  },
  {
    number: "04",
    title: "Transfer",
    description: "Your team owns what comes next.",
  },
] as const;

export const targetClients = [
  "Enterprise",
  "Scale-ups",
  "Regulated industries",
  "Public sector",
  "Data-intensive organizations",
  "AI-native products",
] as const;

export const researchAreas = [
  { label: "Hybrid Search", href: "/research" },
  { label: "Retrieval & RAG", href: "/research" },
  { label: "Sovereign AI", href: "/research" },
  { label: "Data Signals", href: "/research" },
  { label: "Distributed Systems", href: "/research" },
  { label: "AI Platform Architecture", href: "/research" },
] as const;

export const aboutValues = [
  "Engineering depth behind every decision",
  "Independent technical judgment",
  "Clear deliverables and transferable ownership",
  "Simple systems over unnecessary complexity",
  "Open standards",
  "Measurable outcomes",
  "Guidance for client implementation teams",
  "Research that informs practice",
] as const;

/** Homepage commercial models — time + outcome; one public price (Review). */
export const homepageEngagements = [
  {
    name: "Architecture Review",
    duration: "1–2 weeks",
    price: "€2,500 fixed",
    commercial: null,
    description:
      "Independent technical assessment of your Data & AI architecture.",
    outcomes: "Risks · gaps · prioritized recommendations",
    cta: { href: "/contact", label: "Start with a review" },
  },
  {
    name: "Solution Architecture",
    duration: "3–6 weeks",
    price: null,
    commercial: "Defined engagement",
    description:
      "Technical direction for a defined Data & AI initiative.",
    outcomes: "Target architecture · ADRs · technology decisions · roadmap",
    cta: { href: "/contact", label: "Discuss your project" },
  },
  {
    name: "Data & AI Platform Architecture",
    duration: "4–8+ weeks",
    price: null,
    commercial: "Defined engagement",
    description:
      "Design for the platform layer underneath production AI.",
    outcomes:
      "Platform design · security · integration · retrieval · infrastructure",
    cta: { href: "/contact", label: "Discuss your project" },
  },
] as const;

/** Full list for /services, including fractional capacity. */
export const engagements = [
  ...homepageEngagements,
  {
    name: "Fractional Principal Architect",
    duration: "Ongoing engagement",
    price: null,
    commercial: "Monthly engagement",
    description:
      "Ongoing senior Data & AI technical direction across initiatives.",
    outcomes: "Usually 1–2 days per week · decisions · reviews · direction",
    cta: { href: "/contact", label: "Discuss your project" },
  },
] as const;
