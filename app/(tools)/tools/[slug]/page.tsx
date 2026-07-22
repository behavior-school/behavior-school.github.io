import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Cpu } from "lucide-react";
import DopamineCalculatorTool from "../../../components/tools/DopamineCalculatorTool";
import HabitShrinkerTool from "../../../components/tools/HabitShrinkerTool";

interface ToolDetail {
  slug: string;
  name: string;
  category: string;
  desc: string;
  component: "dopamine" | "habit";
}

const toolsData: Record<string, ToolDetail> = {
  "dopamine-calculator": {
    slug: "dopamine-calculator",
    name: "Dopamine Baseline & Boredom Calculator",
    category: "Neuroscience",
    desc: "Calculate estimated D2 receptor sensitivity, boredom threshold, and receive a customized digital detox protocol based on daily phone screen time.",
    component: "dopamine"
  },
  "habit-shrinker": {
    slug: "habit-shrinker",
    name: "2-Minute Habit Shrinker & Implementation Planner",
    category: "Habits & Discipline",
    desc: "Deconstruct any complex long-term goal down to a 120-second physical initiation action + implementation intention.",
    component: "habit"
  }
};

export function generateStaticParams() {
  return Object.keys(toolsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = toolsData[slug];
  if (!tool) return { title: "Tool Not Found | Behavior School" };

  return {
    title: `${tool.name} | Behavior School Tools`,
    description: tool.desc,
    openGraph: {
      title: tool.name,
      description: tool.desc,
      url: `https://behavior-school.github.io/tools/${tool.slug}`,
      siteName: "Behavior School",
      type: "website",
    },
  };
}

export default async function IndividualToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = toolsData[slug];
  if (!tool) notFound();

  const jsonLdTool = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": tool.name,
    "description": tool.desc,
    "url": `https://behavior-school.github.io/tools/${tool.slug}`,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTool) }}
      />

      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Web Tools</span>
        </Link>

        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)]">
              <Cpu className="w-3.5 h-3.5" />
              <span>{tool.category}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">
              {tool.name}
            </h1>
            <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
              {tool.desc}
            </p>
          </div>

          {/* Render Active Component */}
          {tool.component === "dopamine" && <DopamineCalculatorTool />}
          {tool.component === "habit" && <HabitShrinkerTool />}
        </div>
      </main>
    </>
  );
}
