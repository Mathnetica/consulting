import { describe, expect, it } from "vitest";
import { getServiceBySlug, services } from "@/lib/content/services";
import {
  filterResearchArticles,
  getResearchBySlug,
  paginateResearchArticles,
  RESEARCH_PAGE_SIZE,
  researchArticles,
  researchCategories,
} from "@/lib/content/research";
import {
  homepageEngagements,
  navLinks,
  processSteps,
  siteConfig,
} from "@/lib/content/site";
import { legalLinks } from "@/lib/content/legal";

describe("services content", () => {
  it("defines four service lines", () => {
    expect(services).toHaveLength(4);
  });

  it("uses unique slugs and required detail fields", () => {
    const slugs = services.map((service) => service.slug);
    expect(new Set(slugs).size).toBe(slugs.length);

    for (const service of services) {
      expect(service.title).toBeTruthy();
      expect(service.problem).toBeTruthy();
      expect(service.whatWeDo).toBeTruthy();
      expect(service.typicalEngagement).toBeTruthy();
      expect(service.deliverables.length).toBeGreaterThan(0);
      expect(service.technologies.length).toBeGreaterThan(0);
      expect(service.outcomes.length).toBeGreaterThan(0);
      expect(getServiceBySlug(service.slug)).toEqual(service);
    }
  });

  it("includes a fixed architecture review price", () => {
    const review = getServiceBySlug("architecture-review");
    expect(review?.priceNote).toMatch(/€2,500 fixed/);
  });

  it("leads with solution architecture", () => {
    expect(services[0]?.slug).toBe("data-ai-solution-architecture");
    expect(services[0]?.title).toMatch(/solution architecture/i);
  });
});

describe("research content", () => {
  it("provides placeholder articles with unique slugs", () => {
    expect(researchArticles.length).toBeGreaterThanOrEqual(4);
    const slugs = researchArticles.map((article) => article.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("keeps articles within known categories", () => {
    for (const article of researchArticles) {
      expect(researchCategories).toContain(article.category);
      expect(article.body.length).toBeGreaterThan(0);
      expect(getResearchBySlug(article.slug)).toEqual(article);
    }
  });

  it("filters by category and paginates above page size", () => {
    const hybrid = filterResearchArticles("Hybrid Search");
    expect(hybrid.every((article) => article.category === "Hybrid Search")).toBe(
      true,
    );

    const paged = paginateResearchArticles(
      researchArticles,
      1,
      RESEARCH_PAGE_SIZE,
    );
    expect(paged.showPagination).toBe(researchArticles.length > RESEARCH_PAGE_SIZE);
    expect(paged.items.length).toBeLessThanOrEqual(RESEARCH_PAGE_SIZE);
  });
});

describe("site content", () => {
  it("exposes brand and primary navigation", () => {
    expect(siteConfig.name).toBe("Mathnetica");
    expect(siteConfig.email).toBe("hello@mathnetica.com");
    expect(navLinks.map((link) => link.href)).toEqual([
      "/services",
      "/research",
      "/about",
      "/contact",
    ]);
  });

  it("exposes legal routes", () => {
    expect(legalLinks.map((link) => link.href)).toEqual([
      "/privacy",
      "/cookies",
      "/terms",
    ]);
  });

  it("keeps homepage engagements to three project models", () => {
    expect(homepageEngagements).toHaveLength(3);
    expect(homepageEngagements.map((item) => item.name)).toEqual([
      "Architecture Review",
      "Solution Architecture",
      "Data & AI Platform Architecture",
    ]);
  });

  it("publishes only the Architecture Review price", () => {
    expect(homepageEngagements[0]?.price).toBe("€2,500 fixed");
    expect(homepageEngagements.slice(1).every((item) => item.price === null)).toBe(
      true,
    );
  });

  it("uses Understand → Design → Validate → Transfer", () => {
    expect(processSteps.map((step) => step.title)).toEqual([
      "Understand",
      "Design",
      "Validate",
      "Transfer",
    ]);
  });
});
