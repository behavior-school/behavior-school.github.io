export interface BookVisual {
  title: string;
  subtitle?: string;
  steps: string[];
  caption: string;
}

export interface BookArtifact {
  title: string;
  description: string;
  items: string[];
  prompt?: string;
}

export interface BookQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface BookPollOption {
  id: number;
  text: string;
  votes: number;
}

export interface BookDetail {
  slug: string;
  title: string;
  author: string;
  year: string;
  tagline: string;
  summary: string;
  keyTakeaways: string[];
  protocolSteps: string[];
  markdownContent: string;
  hasHabitSimulator?: boolean;
  hasCognitiveTester?: boolean;
  quiz?: { title: string; questions: BookQuestion[] };
  poll?: { question: string; options: BookPollOption[] };
  visual?: BookVisual;
  artifact?: BookArtifact;
  category?: string;
  tags?: string[];
  coverImageUrl?: string;
  amazonUrl?: string;
  amazonImageUrl?: string;
  featured?: boolean;
}
