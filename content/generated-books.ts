import type { BookDetail } from "../lib/book-types";

/**
 * Automated publishing output.
 *
 * The hourly publishing agent appends complete BookDetail records here.
 * Keep this file data-only so it remains easy to audit and migrate to a CMS later.
 */
export const generatedBooksData: Record<string, BookDetail> = {};
