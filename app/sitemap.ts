export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { getAllArticles } from "../lib/content";
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

const quizSlugs = [
  "neuroscience-dopamine-quiz",
  "atomic-habits-benchmark",
  "cognitive-biases-test",
  "deep-work-focus-audit",
];

const toolSlugs = [
  "pomodoro-timer",
  "dopamine-calculator",
  "habit-shrinker",
  "friction-audit",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" || path === "/books" || path === "/blog" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1.0 : path === "/books" || path === "/tools" || path === "/quiz" ? 0.9 : 0.7,
  }));

  const bookEntries = getAllBookSlugs().map((slug) => ({
    url: `${BASE_URL}/books/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const articleEntries = getAllArticles().map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: article.revisionDate ? new Date(article.revisionDate) : now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const quizEntries = quizSlugs.map((slug) => ({
    url: `${BASE_URL}/quiz/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const toolEntries = toolSlugs.map((slug) => ({
    url: `${BASE_URL}/tools/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticEntries, ...bookEntries, ...articleEntries, ...quizEntries, ...toolEntries];
}
