import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mathnetica.com/sitemap.xml",
    host: "https://mathnetica.com",
  };
}
