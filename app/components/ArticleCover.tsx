import type { LucideIcon } from "lucide-react";
import { Brain, Compass, Eye, HeartHandshake, Layers, Sparkles } from "lucide-react";

const iconByCategory: Record<string, LucideIcon> = {
  Psychology: Brain,
  Neuroscience: Sparkles,
  "Neuroscience Masterclass": Sparkles,
  "Cognitive Psychology": Brain,
  "Positive Psychology": HeartHandshake,
  "Social Neuroscience": HeartHandshake,
  "Habits & Behavior": Layers,
  "Habits & Discipline": Layers,
  "Behavior Change": Layers,
  "Behavior Science": Eye,
  "Mental Models": Compass,
  "Behavioral Economics": Compass,
  "Learning Science": Eye,
  "Attention & Focus": Eye,
  "Decision Making": Compass,
};

export default function ArticleCover({ title, category }: { title: string; category: string }) {
  const Icon = iconByCategory[category] ?? Brain;

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--muted)]" aria-label={title + " visual cover"}>
      <div className="absolute inset-0 opacity-70" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 1200 500" preserveAspectRatio="none">
          <defs>
            <pattern id="behavior-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M 44 0 L 0 0 0 44" fill="none" stroke="currentColor" strokeWidth="1" opacity=".08" />
            </pattern>
          </defs>
          <rect width="1200" height="500" fill="url(#behavior-grid)" />
          <circle cx="180" cy="120" r="120" fill="none" stroke="currentColor" strokeWidth="2" opacity=".12" />
          <circle cx="1020" cy="390" r="190" fill="none" stroke="currentColor" strokeWidth="2" opacity=".1" />
          <path d="M120 360 C300 180 420 450 620 250 S940 80 1100 180" fill="none" stroke="currentColor" strokeWidth="3" opacity=".14" />
          <path d="M80 410 C270 270 390 390 540 320 S850 130 1160 290" fill="none" stroke="currentColor" strokeWidth="2" opacity=".08" />
        </svg>
      </div>
      <div className="relative flex min-h-48 items-end justify-between gap-5 p-6 sm:min-h-64 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--primary)] backdrop-blur">
            {category}
          </div>
          <h2 className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-[-0.035em] text-[var(--foreground)] sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--background)]/75 text-[var(--primary)] shadow-sm backdrop-blur sm:h-20 sm:w-20">
          <Icon className="h-7 w-7 sm:h-9 sm:w-9" />
        </div>
      </div>
    </div>
  );
}