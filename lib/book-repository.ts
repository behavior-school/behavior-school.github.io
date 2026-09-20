import { allBooksData, booksCatalog, type BookCatalogItem } from "../content/book-catalog";
import type { BookDetail } from "./book-types";

export function getAllBooks(): BookDetail[] {
  return Object.values(allBooksData);
}

export function getBookBySlug(slug: string): BookDetail | undefined {
  return allBooksData[slug as keyof typeof allBooksData];
}

export function getAllBookSlugs(): string[] {
  return Object.keys(allBooksData);
}

export function getBookCatalog(): BookCatalogItem[] {
  return booksCatalog;
}
