import { describe, expect, it } from "vitest";
import {
  filterResearchArticles,
  getResearchBySlug,
  paginateResearchArticles,
  RESEARCH_PAGE_SIZE,
  researchArticles,
  researchCategories,
} from "@/lib/content/research";
import {
  audiences,
  infrastructureGap,
  navLinks,
  platform,
  siteConfig,
  workAreas,
} from "@/lib/content/site";
import { legalLinks } from "@/lib/content/legal";

describe("research content", () => {
  it("provides articles with unique slugs and status", () => {
    expect(researchArticles.length).toBeGreaterThanOrEqual(4);
    const slugs = researchArticles.map((article) => article.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const article of researchArticles) {
      expect(["published", "in-progress", "planned"]).toContain(article.status);
    }
  });

  it("keeps articles within known categories", () => {
    for (const article of researchArticles) {
      expect(researchCategories).toContain(article.category);
      expect(article.body.length).toBeGreaterThan(0);
      expect(getResearchBySlug(article.slug)).toEqual(article);
    }
  });

  it("filters by category and paginates above page size", () => {
    const articles = filterResearchArticles("Workloads");
    expect(articles.every((article) => article.category === "Workloads")).toBe(
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
  it("exposes platform brand and navigation", () => {
    expect(siteConfig.name).toBe("Mathnetica");
    expect(siteConfig.focus).toBe("Quantum Infrastructure Engineering");
    expect(siteConfig.primaryCtaHref).toBe("/platform");
    expect(navLinks.map((link) => link.href)).toEqual([
      "/platform",
      "/research",
      "/about",
    ]);
  });

  it("defines three build layers and one platform", () => {
    expect(workAreas.map((area) => area.title)).toEqual([
      "Hybrid Workloads",
      "QPU Infrastructure",
      "Quantum Operations",
    ]);
    expect(platform.name).toBe("Mathnetica Platform");
    expect(platform.status).toBe("Experimental");
    expect(platform.layers.map((layer) => layer.name)).toEqual([
      "QPU Resources",
      "Workloads",
      "Operations",
    ]);
  });

  it("frames the gap and audiences without product vaporware", () => {
    expect(infrastructureGap.title).toContain("isolation");
    expect(audiences).toHaveLength(4);
    expect(siteConfig.finalCta).toBe("Discuss a collaboration");
  });

  it("exposes legal routes", () => {
    expect(legalLinks.map((link) => link.href)).toEqual([
      "/privacy",
      "/cookies",
      "/terms",
    ]);
  });
});
