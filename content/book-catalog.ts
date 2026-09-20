import { detailedBooksData } from "./books";
import { manipulationBooksData } from "./manipulation-books";
import { bookLearningLab } from "./book-learning-lab";

const amazonBook = (asin: string) => ({
  amazonUrl: `https://www.amazon.in/dp/${asin}`,
  amazonImageUrl: `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`,
  coverImageUrl: `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`,
});

const bookMeta: Record<string, {
  category: string;
  tags: string[];
  featured?: boolean;
  asin: string;
}> = {
  "atomic-habits": { category: "Habits", tags: ["habits", "behavior change", "productivity"], featured: true, asin: "0735211299" },
  "thinking-fast-and-slow": { category: "Cognition", tags: ["cognitive science", "biases", "decision making"], featured: true, asin: "0374533555" },
  "deep-work": { category: "Focus", tags: ["focus", "productivity", "attention"], featured: true, asin: "1455586692" },
  "power-of-habit": { category: "Habits", tags: ["habits", "behavior change", "routine"], asin: "081298160X" },
  "drive": { category: "Motivation", tags: ["motivation", "autonomy", "mastery"], asin: "1594484805" },
  "mindset": { category: "Growth", tags: ["growth mindset", "learning", "resilience"], asin: "0345472322" },
  "nudge": { category: "Persuasion", tags: ["choice architecture", "behavioral economics", "defaults"], featured: true, asin: "0300122233" },
  "predictably-irrational": { category: "Decision Making", tags: ["behavioral economics", "biases", "choice"], asin: "0061353248" },
  "influence": { category: "Persuasion", tags: ["persuasion", "social psychology", "influence"], featured: true, asin: "006124189X" },
  "thinking-in-bets": { category: "Decision Making", tags: ["uncertainty", "probability", "judgment"], asin: "0735216371" },
  "scout-mindset": { category: "Cognition", tags: ["critical thinking", "reasoning", "beliefs"], asin: "0735217556" },
  "paradox-of-choice": { category: "Decision Making", tags: ["choice overload", "decision fatigue", "consumer psychology"], asin: "0060005696" },
  "48-laws-of-power": { category: "Power & Manipulation", tags: ["power", "strategy", "manipulation"], featured: true, asin: "0670881465" },
  "laws-of-human-nature": { category: "Human Nature", tags: ["human behavior", "social strategy", "psychology"], featured: true, asin: "0525428143" },
  "art-of-seduction": { category: "Influence & Attraction", tags: ["attraction", "social dynamics", "influence"], featured: true, asin: "1861977697" },
  "games-people-play": { category: "Relationships", tags: ["transactional analysis", "relationships", "social games"], asin: "0241257476" },
  "emotional-blackmail": { category: "Manipulation Defense", tags: ["emotional manipulation", "boundaries", "relationships"], featured: true, asin: "0060928972" },
  "gaslight-effect": { category: "Manipulation Defense", tags: ["gaslighting", "emotional abuse", "boundaries"], featured: true, asin: "0767924460" },
  "in-sheeps-clothing": { category: "Manipulation Defense", tags: ["covert aggression", "manipulation", "boundaries"], featured: true, asin: "1935166301" },
  "confidence-game": { category: "Deception", tags: ["con artists", "fraud", "trust"], asin: "0143109871" },
  "pre-suasion": { category: "Persuasion", tags: ["persuasion", "attention", "framing"], asin: "1501109790" },
  "propaganda": { category: "Mass Persuasion", tags: ["propaganda", "public opinion", "media"], featured: true, asin: "080461511X" },
  "snakes-in-suits": { category: "Workplace Manipulation", tags: ["workplace", "psychopathy", "organizational behavior"], asin: "0060837721" },
  "without-conscience": { category: "Psychopathy", tags: ["psychopathy", "deception", "forensic psychology"], asin: "1572304510" }
};

export const allBooksData: Record<string, import("../lib/book-types").BookDetail> = {
  ...Object.fromEntries(
    Object.entries({ ...detailedBooksData, ...manipulationBooksData }).map(([slug, book]) => {
      const meta = bookMeta[slug];
      return [
        slug,
        {
          ...book,
          ...meta,
          ...amazonBook(meta?.asin ?? book.slug),
          learningLab: bookLearningLab[slug],
        },
      ];
    })
  ),
};

export const booksCatalog = Object.values(allBooksData).map((book) => {
  const meta = bookMeta[book.slug];
  const amazon = amazonBook(meta?.asin ?? book.slug);

  return {
    slug: book.slug,
    title: book.title,
    author: book.author,
    year: book.year,
    tagline: book.tagline,
    excerpt: book.summary,
    keyTakeaways: book.keyTakeaways.slice(0, 3),
    category: meta?.category ?? "Behavioral Science",
    tags: meta?.tags ?? [],
    featured: meta?.featured ?? false,
    ...amazon,
  };
});

export type BookCatalogItem = (typeof booksCatalog)[number];
