import { describe, expect, it } from "vitest";
import {
  filterResearchArticles,
  getResearchBySlug,
  paginateResearchArticles,
  RESEARCH_PAGE_SIZE,
  researchArticles,
  researchCategories,
} from "@/lib/content/research";
import { navLinks, quancave, siteConfig, workAreas } from "@/lib/content/site";
import { legalLinks } from "@/lib/content/legal";

describe("research content", () => {
  it("provides articles with unique slugs", () => {
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
    const articles = filterResearchArticles("Kubernetes");
    expect(articles.every((article) => article.category === "Kubernetes")).toBe(
      true,
    );

    const paged = paginateResearchArticles(
      researchArticles,
      1,
      RESEARCH_PAGE_SIZE,
    );
    expect(paged.showPagination).toBe(
      researchArticles.length > RESEARCH_PAGE_SIZE,
    );
    expect(paged.items.length).toBeLessThanOrEqual(RESEARCH_PAGE_SIZE);
  });
});

describe("site content", () => {
  it("exposes quantum brand and lab navigation", () => {
    expect(siteConfig.name).toBe("Mathnetica");
    expect(siteConfig.focus).toBe("Quantum Systems Engineering");
    expect(siteConfig.email).toBe("research@mathnetica.com");
    expect(navLinks.map((link) => link.href)).toEqual([
      "/quancave",
      "/research",
      "/about",
    ]);
  });

  it("defines three work areas and Quancave", () => {
    expect(workAreas).toHaveLength(3);
    expect(quancave.name).toBe("Quancave");
    expect(quancave.pipeline).toEqual(["submit", "execute", "status", "result"]);
  });

  it("exposes legal routes", () => {
    expect(legalLinks.map((link) => link.href)).toEqual([
      "/privacy",
      "/cookies",
      "/terms",
    ]);
  });
});
