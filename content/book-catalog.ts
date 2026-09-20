import { detailedBooksData } from "./books";
import { manipulationBooksData } from "./manipulation-books";
import { bookLearningLab } from "./book-learning-lab";
import { generatedBooksData } from "./generated-books";
import { generatedBooksBatch2Data } from "./generated-books-batch-2";

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
  "without-conscience": { category: "Psychopathy", tags: ["psychopathy", "deception", "forensic psychology"], asin: "1572304510" },
  "tiny-habits": { category: "Habits", tags: ["behavior design", "habits", "motivation", "prompts"], asin: "0358003326" },
  "the-power-of-moments": { category: "Behavior Design", tags: ["memory", "experiences", "peak moments", "connection"], asin: "1501147760" },
  "make-it-stick": { category: "Learning", tags: ["learning science", "memory", "retrieval practice", "spaced practice"], asin: "0674729013" },
  "peak": { category: "Learning", tags: ["deliberate practice", "expertise", "skill", "feedback"], asin: "0544456238" },
  "ultralearning": { category: "Learning", tags: ["self-directed learning", "skills", "practice", "transfer"], asin: "006285268X" },
  "range": { category: "Learning", tags: ["generalists", "career", "learning", "transfer", "experimentation", "breadth"], asin: "0735214506" },
  "mind-for-numbers": { category: "Learning", tags: ["learning", "math", "memory", "problem solving", "chunking", "study skills"], asin: "039916524X" },
  "why-we-sleep": { category: "Neuroscience", tags: ["sleep", "memory", "brain", "health", "circadian rhythm", "recovery"], asin: "1501144316" },
  "the-happiness-hypothesis": { category: "Psychology", tags: ["happiness", "emotion", "moral psychology", "virtue", "meaning", "well-being"], asin: "0465028020" },
  "stumbling-on-happiness": { category: "Psychology", tags: ["happiness", "prediction", "decision making", "affective forecasting", "imagination"], asin: "140007742X" }
};

export const allBooksData: Record<string, import("../lib/book-types").BookDetail> = {
  ...Object.fromEntries(
    Object.entries({ ...detailedBooksData, ...manipulationBooksData, ...generatedBooksData, ...generatedBooksBatch2Data }).map(([slug, book]) => {
      const meta = bookMeta[slug];
      return [
        slug,
        {
          ...book,
          ...meta,
          ...amazonBook(meta?.asin ?? book.slug),
          learningLab: book.learningLab ?? bookLearningLab[slug],
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
    category: book.category ?? meta?.category ?? "Behavioral Science",
    tags: book.tags ?? meta?.tags ?? [],
    featured: book.featured ?? meta?.featured ?? false,
    coverImageUrl: book.coverImageUrl ?? amazon.coverImageUrl,
    amazonImageUrl: book.amazonImageUrl ?? amazon.amazonImageUrl,
    amazonUrl: book.amazonUrl ?? amazon.amazonUrl,
  };
});

export type BookCatalogItem = (typeof booksCatalog)[number];
