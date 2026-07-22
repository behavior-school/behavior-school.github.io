"use client";

import React, { useState } from "react";
import { BookOpen, FileCode, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { ArtifactData } from "./ArtifactViewer";

interface BookSummariesProps {
  onOpenArtifact: (artifact: ArtifactData) => void;
}

export default function BookSummaries({ onOpenArtifact }: BookSummariesProps) {
  const [selectedBook, setSelectedBook] = useState<number | null>(null);

  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      year: "2018",
      tagline: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      coreIdea: "Small 1% changes compounding over time create radical transformation. System design matters more than goal setting.",
      keyRules: [
        "Make it Obvious (Cue)",
        "Make it Attractive (Craving)",
        "Make it Easy (Response - 2 Minute Rule)",
        "Make it Satisfying (Reward)"
      ],
      artifact: {
        title: "Atomic Habits Execution Framework",
        type: "PROTOCOL" as const,
        filename: "atomic-habits-summary.md",
        category: "Book Summary",
        content: `# Atomic Habits by James Clear

Focus on your identity rather than outcome goals. Every action you take is a vote for the type of person you wish to become.

## The 4 Laws of Behavior Change:
1. **1st Law (Cue)**: Implementation Intentions ("I will [BEHAVIOR] at [TIME] in [LOCATION]").
2. **2nd Law (Craving)**: Temptation bundling. Pair an action you want to do with an action you need to do.
3. **3rd Law (Response)**: Reduce friction. Optimize for starting rather than perfecting. Use the 2-Minute Rule.
4. **4th Law (Reward)**: Immediate reward tracking. Never miss twice.`,
        actionProtocol: [
          "Set an Implementation Intention for your primary habit.",
          "Design your physical workspace to make good cues obvious.",
          "Shrink habit execution time to 120 seconds."
        ]
      }
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      year: "2011",
      tagline: "The Two Systems That Drive the Way We Think",
      coreIdea: "Human judgment is governed by two cognitive engines: System 1 (fast, intuitive, emotional) and System 2 (slow, analytical, effortful).",
      keyRules: [
        "System 1 operates automatically with little or no effort.",
        "System 2 allocates attention to effortful mental operations.",
        "Beware of Substitution Bias and Availability Heuristics."
      ],
      artifact: {
        title: "Dual-Process Cognitive Architecture",
        type: "MENTAL_MODEL" as const,
        filename: "thinking-fast-slow.md",
        category: "Book Summary",
        content: `# Thinking, Fast and Slow by Daniel Kahneman

## System 1 (Fast Thinking):
- Automatic, unconscious, fast, and emotionally driven.
- Susceptible to systematic cognitive errors and biases.

## System 2 (Slow Thinking):
- Slow, deliberate, conscious, and analytical.
- Lazy by default; requires activation energy to override System 1 assumptions.`,
        actionProtocol: [
          "Slow down high-stakes financial or career decisions to activate System 2.",
          "Conduct a Premortem before launching critical initiatives."
        ]
      }
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      year: "2016",
      tagline: "Rules for Focused Success in a Distracted World",
      coreIdea: "The ability to perform deep work is becoming increasingly rare at the exact same time it is becoming increasingly valuable in our economy.",
      keyRules: [
        "Work Deeply: Ritualize your environment and scheduling.",
        "Embrace Boredom: Train your brain to resist digital novelty.",
        "Quit Social Media: Audit network tools for genuine value.",
        "Drain the Shallows: Eliminate low-value administrative tasks."
      ],
      artifact: {
        title: "Deep Work Execution Protocol",
        type: "PROTOCOL" as const,
        filename: "deep-work-protocol.md",
        category: "Book Summary",
        content: `# Deep Work by Cal Newport

Deep work: Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit.

## The Deep Work Ritual Matrix:
- Location & Duration Rules
- Physical Boundaries (Phone in separate room)
- Metric Tracking (Total deep hours logged daily)`,
        actionProtocol: [
          "Block 90-minute distraction-free deep work sessions on your calendar.",
          "Establish a shutdown ritual at the end of each workday."
        ]
      }
    },
    {
      title: "The Power of Habit",
      author: "Charles Duhigg",
      year: "2012",
      tagline: "Why We Do What We Do in Life and Business",
      coreIdea: "Habits emerge because the brain is constantly looking for ways to save effort and automate routine behaviors into the basal ganglia.",
      keyRules: [
        "The Golden Rule of Habit Change: Keep Cue & Reward, change Routine.",
        "Focus on Keystone Habits (e.g. daily exercise, sleep).",
        "Belief is the essential ingredient that converts habit loops into permanent identity."
      ],
      artifact: {
        title: "The Habit Loop Re-engineering Engine",
        type: "PROTOCOL" as const,
        filename: "power-of-habit.md",
        category: "Book Summary",
        content: `# The Power of Habit by Charles Duhigg

## The Habit Loop Architecture:
- **Cue**: The trigger that tells your brain which habit to use.
- **Routine**: The physical, mental, or emotional behavior executed.
- **Reward**: The payoff that tells your brain the loop is worth remembering.`,
        actionProtocol: [
          "Isolate the exact Cue trigger (Location, Time, Emotional State, Other People, Preceding Action).",
          "Experiment with alternative rewards to identify the true craving."
        ]
      }
    },
    {
      title: "Drive: The Surprising Truth About What Motivates Us",
      author: "Daniel H. Pink",
      year: "2009",
      tagline: "Autonomy, Mastery, and Purpose",
      coreIdea: "Carrots and sticks (Extrinsic Motivation 2.0) fail for complex cognitive work. True drive relies on Intrinsic Motivation 3.0.",
      keyRules: [
        "Autonomy: The desire to direct our own lives and work.",
        "Mastery: The urge to get better and better at something that matters.",
        "Purpose: The yearning to do what we do in the service of something larger than ourselves."
      ],
      artifact: {
        title: "Intrinsic Motivation Framework",
        type: "RESEARCH" as const,
        filename: "drive-autonomy.md",
        category: "Book Summary",
        content: `# Drive by Daniel H. Pink

## The Triad of Self-Determination:
1. **Autonomy**: Control over Task, Time, Technique, and Team.
2. **Mastery**: Grit, deliberate practice, and incremental progress mindset.
3. **Purpose**: Connecting daily effort to meaningful impact.`,
        actionProtocol: [
          "Audit your daily activities for Autonomy, Mastery, and Purpose alignment.",
          "Replace extrinsic reward incentives with self-directed mastery goals."
        ]
      }
    },
    {
      title: "Mindset: The New Psychology of Success",
      author: "Carol S. Dweck",
      year: "2006",
      tagline: "How We Can Learn to Fulfill Our Potential",
      coreIdea: "Your belief about your abilities determines whether you embrace challenges or shrink from failure.",
      keyRules: [
        "Fixed Mindset: Belief that intelligence and talent are static traits.",
        "Growth Mindset: Belief that abilities can be developed through dedication and hard work.",
        "The Power of 'Yet': Transform 'I can't do this' into 'I can't do this YET'."
      ],
      artifact: {
        title: "Growth Mindset Re-framing Protocol",
        type: "MENTAL_MODEL" as const,
        filename: "mindset-growth.md",
        category: "Book Summary",
        content: `# Mindset by Carol S. Dweck

## Fixed vs Growth Mindset Matrix:
- **Challenges**: Avoided (Fixed) vs Embraced (Growth).
- **Obstacles**: Give up easily (Fixed) vs Persist in the face of setbacks (Growth).
- **Effort**: Seen as fruitless (Fixed) vs Path to mastery (Growth).
- **Criticism**: Ignored (Fixed) vs Learned from (Growth).`,
        actionProtocol: [
          "Reframe failure as diagnostic feedback rather than a judgment on identity.",
          "Add the word 'YET' to any limiting self-talk statement."
        ]
      }
    }
  ];

  return (
    <section id="books" className="py-20 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Behavioral Science Library</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-3">
            Essential Book Summaries
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted-foreground)] max-w-xl mx-auto">
            Deep-dive breakdowns of seminal behavioral science and productivity literature. Click any code chip to open its full protocol drawer.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, idx) => (
            <div
              key={idx}
              className="bg-[var(--card)] p-6 rounded-3xl border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                    {book.year} Edition
                  </span>

                  {/* Clickable Code Chip */}
                  <button
                    onClick={() => onOpenArtifact(book.artifact)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--muted)] border border-[var(--border)] text-[10px] font-mono text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all cursor-pointer"
                  >
                    <FileCode className="w-3 h-3 text-[var(--primary)]" />
                    <span>{book.artifact.filename}</span>
                  </button>
                </div>

                <h3 className="text-lg font-bold text-[var(--foreground)] mb-0.5 group-hover:text-[var(--primary)] transition-colors">
                  {book.title}
                </h3>
                <span className="text-xs font-medium text-[var(--muted-foreground)] block mb-3">
                  by {book.author}
                </span>

                <p className="text-xs text-[var(--foreground)] font-semibold mb-3 leading-relaxed">
                  "{book.tagline}"
                </p>

                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-4">
                  {book.coreIdea}
                </p>
              </div>

              {/* Key Rules List */}
              <div className="pt-4 border-t border-[var(--border)] space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--primary)] block">
                  Core Framework Takeaways:
                </span>
                <ul className="space-y-1.5 text-[11px] text-[var(--muted-foreground)]">
                  {book.keyRules.map((rule, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)] shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
