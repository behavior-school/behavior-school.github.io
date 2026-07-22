import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Activity, Zap, ShieldAlert, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Behavioral Science & Neuroscience Web Tools | Behavior School",
  description: "Interactive Pomodoro timers, neurochemistry calculators, habit shrinkers, dopamine audits, and friction barrier tools.",
  openGraph: {
    title: "Behavioral Science Interactive Tools | Behavior School",
    description: "Interactive tools for habit formation, dopamine recalibration, focus timers, and cognitive performance.",
    url: "https://behavior-school.github.io/tools",
    siteName: "Behavior School",
    type: "website",
  },
};

export const toolsList = [
  {
    slug: "pomodoro-timer",
    name: "Neuroscience Pomodoro & Ultradian Timer",
    icon: Clock,
    desc: "Interactive 25-minute Pomodoro & 90-minute Ultradian focus session timer with distraction protocols.",
    category: "Focus & Productivity"
  },
  {
    slug: "dopamine-calculator",
    name: "Dopamine Baseline & Boredom Calculator",
    icon: Activity,
    desc: "Calculate estimated D2 receptor sensitivity, boredom threshold, and receive a customized digital detox protocol based on daily phone screen time.",
    category: "Neuroscience"
  },
  {
    slug: "habit-shrinker",
    name: "2-Minute Habit Shrinker & Implementation Planner",
    icon: Zap,
    desc: "Deconstruct any complex long-term goal down to a 120-second physical initiation action + implementation intention.",
    category: "Habits & Discipline"
  },
  {
    slug: "friction-audit",
    name: "Habit Loop Friction Audit Tool",
    icon: ShieldAlert,
    desc: "Audit bad habits and generate physical & digital friction barriers to make bad habits difficult to execute.",
    category: "Behavior Science"
  }
];

export default function ToolsIndexPage() {
  const jsonLdTools = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Behavioral Science Interactive Tools",
    "url": "https://behavior-school.github.io/tools",
    "description": "Interactive web applications for neurochemistry, focus timers, habit formation, and cognitive performance.",
    "hasPart": toolsList.map((tool) => ({
      "@type": "WebApplication",
      "name": tool.name,
      "url": `https://behavior-school.github.io/tools/${tool.slug}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTools) }}
      />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Web Tools & Calculators</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--foreground)] tracking-tight mb-4">
            Behavioral Science <span className="text-[var(--primary)]">Tools</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)]">
            Audit your brain chemistry, time focus sessions, shrink habit friction, and calculate focus parameters using interactive web applications.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {toolsList.map((tool) => {
            const Icon = tool.icon;
            return (
              <article
                key={tool.slug}
                className="bg-[var(--card)] p-8 rounded-3xl border border-[var(--border)] flex flex-col justify-between hover:border-[var(--primary)]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                      {tool.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors leading-snug">
                    <Link href={`/tools/${tool.slug}`}>
                      {tool.name}
                    </Link>
                  </h2>
                  <p className="text-xs text-[var(--muted-foreground)] mb-6 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
                  <span className="text-[var(--muted-foreground)] font-medium">Interactive App</span>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="inline-flex items-center gap-1.5 font-bold text-[var(--primary)] hover:opacity-80 transition-opacity"
                  >
                    <span>Launch Tool</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
}
