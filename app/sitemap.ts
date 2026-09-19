import type { MetadataRoute } from "next";
import { researchArticles } from "@/lib/content/research";

const siteUrl = "https://mathnetica.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/qbridge",
    "/research",
    "/about",
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-09-19"),
    changeFrequency: "monthly" as const,
    priority:
      path === ""
        ? 1
        : path.startsWith("/privacy") ||
            path.startsWith("/cookies") ||
            path.startsWith("/terms")
          ? 0.3
          : path === "/qbridge"
            ? 0.9
            : 0.7,
  }));

  const researchRoutes = researchArticles.map((article) => ({
    url: `${siteUrl}/research/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...researchRoutes];
}
