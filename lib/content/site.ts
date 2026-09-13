export const siteConfig = {
  name: "Mathnetica",
  email: "hello@mathnetica.com",
  location: "Amsterdam · Netherlands",
  locationShort: "Amsterdam, Netherlands",
  linkedin: "https://www.linkedin.com/company/mathnetica",
  github: "https://github.com/mathnetica",
  description:
    "Mathnetica is a Netherlands-based engineering consultancy specializing in Data & AI Platform Engineering, AI Architecture and complex systems.",
  tagline: "Architecture by engineers.",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const principles = [
  {
    number: "01",
    title: "Architecture",
    description:
      "Practical system design grounded in real constraints, scale and ownership.",
  },
  {
    number: "02",
    title: "Engineering",
    description:
      "Architecture shaped by people who have built production systems themselves.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Designs that survive operations: reliability, observability, security and change.",
  },
] as const;

export const credentials = [
  "TOGAF",
  "Kubernetes",
  "Azure",
  "AWS",
  "Data Platforms",
  "Software Architecture",
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with the system, constraints, organization and business problem.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We define a practical architecture grounded in engineering reality.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We prototype or implement the critical parts together with your engineering teams.",
  },
  {
    number: "04",
    title: "Transfer",
    description:
      "We document decisions, patterns and operational knowledge so teams can own the platform.",
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
  "Engineering depth",
  "Architecture grounded in implementation",
  "Technical independence",
  "Small senior teams",
  "Simple systems over unnecessary complexity",
  "Open standards",
  "Measurable results",
  "Knowledge transfer",
] as const;
