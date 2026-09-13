import { describe, expect, it } from "vitest";
import { getServiceBySlug, services } from "@/lib/content/services";
import {
  getResearchBySlug,
  researchArticles,
  researchCategories,
} from "@/lib/content/research";
import { navLinks, siteConfig } from "@/lib/content/site";

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

  it("includes an architecture review price note", () => {
    const review = getServiceBySlug("architecture-review");
    expect(review?.priceNote).toMatch(/€1,950/);
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
});
