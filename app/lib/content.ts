import articlesData from "../../content/articles.json";
import additionalArticlesData from "../../content/additional-articles.json";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  revisionDate?: string;
  recommendedVideo?: string;
  videoUrl?: string;
  hasProcrastinationSimulator?: boolean;
  keyTakeaways: string[];
  content: string;
}

export function getAllArticles(): Article[] {
  const combined = [...(articlesData as Article[]), ...(additionalArticlesData as Article[])];
  return Array.from(new Map(combined.map((article) => [article.slug, article])).values());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}
