"use client";

import React from "react";
import { GithubIcon, YoutubeIcon } from "./Icons";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  Globe,
  Repeat2,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

const focusAreas = [
  {
    icon: Brain,
    title: "Psychology & Cognition",
    description:
      "Understand attention, beliefs, emotion, decision-making, and the mental shortcuts that shape everyday behavior.",
    points: [
      "Cognitive biases & belief updating",
      "Attention, emotion & self-control",
      "Practical models without oversimplification",
    ],
    href: "/blog/confirmation-bias-and-belief-updating",
  },
  {
    icon: Repeat2,
    title: "Habits & Behavior Change",
    description:
      "Study how habits are cued, repeated, reinforced, and redesigned through environment, friction, and deliberate practice.",
    points: [
      "Cue → routine → reward loops",
      "Environment & friction design",
      "Identity, consistency & recovery",
    ],
    href: "/books/atomic-habits",
  },
  {
    icon: BookOpen,
    title: "Learning, Memory & Focus",
    description:
      "Turn learning science into practical study systems for remembering more and reducing wasted effort.",
    points: [
      "Active recall & retrieval practice",
      "Spaced practice & forgetting",
      "Deep work & attention management",
    ],
    href: "/blog/active-recall-vs-rereading",
  },
  {
    icon: Users,
    title: "People, Decisions & Practice",
    description:
      "Explore social behavior, mental models, questions, experiments, and tools that make ideas easier to apply.",
    points: [
      "Social psychology & influence",
      "Mental models for clearer thinking",
      "Interactive quizzes, tools & experiments",
    ],
    href: "/resources",
  },
];

const series = [
  {
    status: "Free Series",
    title: "Practical Psychology Foundations",
    description:
      "A clear path through attention, habits, cognition, decision-making, and behavior change.",
    meta: "Psychology",
    href: "/blog",
    action: "Start Reading",
  },
  {
    status: "Library",
    title: "Habits & Behavior Change",
    description:
      "Book-based frameworks and field guides for redesigning cues, friction, routines, and consistency.",
    meta: "Behavior",
    href: "/books",
    action: "Explore Books",
  },
  {
    status: "Practice",
    title: "Learning & Focus Systems",
    description:
      "Active recall, spaced practice, focus environments, and small interventions you can test immediately.",
    meta: "Learning",
    href: "/tools",
    action: "Open Tools",
  },
  {
    status: "Interactive",
    title: "Thinking & Self-Reflection",
    description:
      "Questions, quizzes, visual models, and behavior-pattern checkups built for active learning.",
    meta: "Practice",
    href: "/quiz",
    action: "Try Practice",
  },
];

const guides = [
  [
    "The Habit Loop Explained",
    "Understand how repeated cue-response patterns can become automatic and how changing context can help.",
    "/blog/habit-loop-cue-routine-reward",
  ],
  [
    "Active Recall vs Rereading",
    "See why retrieval changes the learning task and how to build it into a realistic study routine.",
    "/blog/active-recall-vs-rereading",
  ],
  [
    "Cognitive Load & Working Memory",
    "A practical guide to mental load, task complexity, and designing information people can actually process.",
    "/blog/cognitive-load-working-memory",
  ],
  [
    "How Confirmation Bias Protects Beliefs",
    "A grounded look at selective attention, interpretation, and why updating a belief can be difficult.",
    "/blog/confirmation-bias-and-belief-updating",
  ],
];

export default function HomeClient() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-24 pt-20 text-center sm:px-6 md:pb-32 md:pt-28 lg:px-8">
          <div className="mb-6 inline-flex items-center border border-[var(--border)] bg-transparent px-3.5 py-1 text-xs font-medium uppercase tracking-wide text-[var(--muted-foreground)]">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Understand. Experiment. Change.
          </div>

          <h1 className="mb-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Understand Your Mind,{" "}
            <span className="text-[var(--muted-foreground)]">Change Your Behavior</span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)] sm:text-xl">
            Welcome to <span className="font-semibold text-[var(--foreground)]">Behavior School</span> —
            a visual learning library for psychology, behavioral science, habits, attention, learning,
            and better decision-making.
          </p>

          <div className="flex w-full max-w-lg flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.youtube.com/@behavior-school"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-xl bg-[var(--foreground)] px-8 py-4 text-sm font-bold text-[var(--background)] shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:opacity-90 sm:w-auto"
            >
              <YoutubeIcon className="mr-2 h-5 w-5" />
              Watch on YouTube
            </a>

            <Link
              href="/resources"
              className="flex w-full items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-8 py-4 text-sm font-semibold transition-transform duration-300 hover:scale-[1.02] hover:bg-[var(--muted)] sm:w-auto"
            >
              Explore the Library
              <ArrowUpRight className="ml-1.5 h-4 w-4 text-[var(--muted-foreground)]" />
            </Link>
          </div>

          <Link
            href="#focus-areas"
            className="group mt-8 flex items-center gap-1.5 text-sm font-semibold text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            Explore what we study
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section id="focus-areas" className="border-t border-[var(--border)] bg-[var(--card)]/10">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What We Study & Practice</h2>
            <p className="text-base text-[var(--muted-foreground)] sm:text-lg">
              Go beyond motivational slogans. Learn the mechanisms, models, and practical experiments
              that make behavior easier to reason about.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Link
                  key={area.title}
                  href={area.href}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--card)]/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--foreground)]/30 hover:bg-[var(--muted)]/10 hover:shadow-sm sm:p-7"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--foreground)] shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-2 text-xl font-bold tracking-tight">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
                    {area.description}
                  </p>

                  <ul className="mt-5 space-y-1.5 text-xs font-mono text-[var(--muted-foreground)]/80">
                    {area.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>

                  <div className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-[var(--foreground)]">
                    Explore topic
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="series" className="border-t border-[var(--border)] bg-[var(--card)]/20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Courses & Visual Series</h2>
            <p className="text-base text-[var(--muted-foreground)] sm:text-lg">
              Structured learning paths that turn scattered articles into a coherent practice loop.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {series.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]/30 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--foreground)]/30 hover:bg-[var(--muted)]/10"
              >
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-4 w-fit rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                    {item.status}
                  </span>
                  <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted-foreground)] sm:text-sm">
                    {item.description}
                  </p>

                  <div className="mt-auto border-t border-[var(--border)] pt-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-mono text-[var(--muted-foreground)]/70">{item.meta}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold">
                        {item.action}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="latest-guides" className="border-t border-[var(--border)] bg-[var(--card)]/10">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-mono uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                Latest Behavioral Guides
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Learn the behavior, not just the headline.
              </h2>
              <p className="text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
                Deep guides connect attention, habits, learning, beliefs, and decision-making into
                one practical library.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
            >
              Read all guides
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {guides.map(([title, description, href]) => (
              <Link
                key={href}
                href={href}
                className="group rounded-xl border border-[var(--border)] bg-[var(--card)]/20 p-5 transition-all hover:border-[var(--foreground)]/30 hover:bg-[var(--muted)]/10"
              >
                <h3 className="mb-2 font-bold leading-snug group-hover:underline">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold">
                  Read guide
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)]/30 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                Interactive Lab
              </p>
              <h2 className="mt-1 text-lg font-bold">Read it. Test it. Remember it.</h2>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[var(--muted-foreground)]">
                Use quizzes, visual models, behavior-pattern checks, and focused tools to turn a
                concept into something you can actually practice.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3.5 py-2 text-xs font-semibold hover:bg-[var(--muted)]"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Quiz
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3.5 py-2 text-xs font-semibold hover:bg-[var(--muted)]"
              >
                <Wrench className="h-3.5 w-3.5" />
                Tools
              </Link>
              <Link
                href="/books"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3.5 py-2 text-xs font-semibold hover:bg-[var(--muted)]"
              >
                <BookOpen className="h-3.5 w-3.5" />
                Books
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="creator" className="border-t border-[var(--border)] bg-[var(--card)]/10">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight">Meet the Creator</h2>
            <p className="text-sm text-[var(--muted-foreground)]">Building practical learning surfaces for curious people.</p>
          </div>

          <div className="flex flex-col items-center gap-8 rounded-2xl border border-[var(--border)] bg-[var(--card)]/20 p-7 sm:p-10 md:flex-row">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--background)] p-1 sm:h-32 sm:w-32">
              <img
                src="https://avatars.githubusercontent.com/u/66713844"
                alt="Shaswat Raj"
                width="512"
                height="512"
                loading="lazy"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold">Shaswat Raj</h3>
              <p className="mt-1 text-xs font-mono text-[var(--muted-foreground)]">
                Software Engineer & Tech Educator
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
                Behavior School turns research-heavy ideas into readable explanations, visual models,
                experiments, and practical tools. The aim is to make complex behavior easier to reason
                about while keeping evidence, uncertainty, and context visible.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href="https://sh20raj.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-[var(--muted)] px-3.5 py-2 text-xs font-semibold transition-colors hover:bg-[var(--secondary)]"
                >
                  <Globe className="mr-1.5 h-3.5 w-3.5 text-[var(--muted-foreground)]" />
                  Portfolio
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </a>
                <a
                  href="https://github.com/sh20raj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-[var(--muted)] px-3.5 py-2 text-xs font-semibold transition-colors hover:bg-[var(--secondary)]"
                >
                  <GithubIcon className="mr-1.5 h-3.5 w-3.5 text-[var(--muted-foreground)]" />
                  GitHub
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
