import articlesData from "../../content/articles.json";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  recommendedVideo: string;
  hasProcrastinationSimulator?: boolean;
  keyTakeaways: string[];
  content: string;
}

export function getAllArticles(): Article[] {
  return articlesData as Article[];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articlesData.find((art) => art.slug === slug) as Article | undefined;
}
