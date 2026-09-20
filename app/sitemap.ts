import type { MetadataRoute } from "next";
import { getAllBookSlugs } from "../lib/book-repository";

const BASE_URL = "https://behavior-school.github.io";

const staticRoutes = [
  "/",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/resources",
  "/editorial-policy",
  "/blog",
  "/videos",
  "/quiz",
  "/tools",
  "/books",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: path === "/books" || path === "/" ? "weekly" as const : "monthly" as const,
    priority: path === "/" ? 1 : path === "/books" ? 0.9 : 0.7,
  }));

  const bookEntries = getAllBookSlugs().map((slug) => ({
    url: `${BASE_URL}/books/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...bookEntries];
}
