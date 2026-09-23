"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  Info,
  Library,
  Mail,
  Menu,
  Play,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { YoutubeIcon } from "./Icons";

const links = [
  { href: "/resources", label: "Resources", icon: Boxes },
  { href: "/videos", label: "Videos", icon: Play },
  { href: "/blog", label: "Blog", icon: Library },
  { href: "/books", label: "Books", icon: BookOpen },
  { href: "/tools", label: "Tools", icon: Wrench },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--muted)] p-1">
            <img src="/logo.svg" alt="Behavior School" className="h-full w-full object-contain" />
          </div>
          <span className="truncate text-base font-black tracking-tight sm:text-lg">
            BehaviorSchool
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--card)]/30 p-1 md:flex"
          aria-label="Primary"
        >
          {links.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors",
                  active
                    ? "bg-[var(--muted)] text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
                ].join(" ")}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href="https://www.youtube.com/@behavior-school"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center rounded-full bg-[var(--foreground)] px-3 text-[10px] font-bold text-[var(--background)] transition-all hover:opacity-90"
          >
            <YoutubeIcon className="mr-1.5 h-3.5 w-3.5" />
            YouTube
          </a>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
            aria-label="Open navigation"
            aria-expanded="false"
            onClick={(event) => {
              const target = event.currentTarget.nextElementSibling as HTMLElement | null;
              target?.classList.toggle("hidden");
              const open = !target?.classList.contains("hidden");
              event.currentTarget.setAttribute("aria-expanded", String(open));
            }}
          >
            <Menu className="h-4 w-4" />
          </button>

          <div className="absolute inset-x-0 top-full hidden border-b border-[var(--border)] bg-[var(--background)]/96 backdrop-blur-2xl">
            <div className="mx-auto flex max-w-6xl flex-col p-4 sm:px-6">
              {links.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)]/60 hover:text-[var(--foreground)]"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-40" />
                  </Link>
                );
              })}

              <div className="mt-1 flex items-center justify-between rounded-xl border border-[var(--border)] px-3 py-3">
                <span className="text-sm font-semibold">Appearance</span>
                <ThemeToggle />
              </div>

              <a
                href="https://www.youtube.com/@behavior-school"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-[var(--foreground)] text-sm font-semibold text-[var(--background)]"
              >
                <YoutubeIcon className="mr-2 h-4 w-4" />
                Subscribe on YouTube
              </a>

              <Link
                href="/"
                className="mt-4 inline-flex items-center gap-1 px-1 text-[10px] leading-5 text-[var(--muted-foreground)]"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Practical psychology, visual models, experiments, and field guides.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
