"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-md border border-[var(--border)] bg-[var(--muted)] p-0.5">
            <img src="/logo.svg" alt="Behavior School" className="h-full w-full object-contain" />
          </div>
          <span className="font-bold tracking-tight">BehaviorSchool</span>
        </div>

        <Link
          href="/tools"
          className="text-xs font-semibold text-[var(--foreground)] transition-colors hover:underline sm:text-sm"
        >
          Behavior School Lab
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
          <Link href="/resources" className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
            Resources
          </Link>
          <Link href="/about" className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
            About
          </Link>
          <Link href="/contact" className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
            Contact
          </Link>
          <Link href="/privacy" className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
            Privacy
          </Link>
          <Link href="/editorial-policy" className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
            Editorial Policy
          </Link>
          <Link href="/terms" className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
            Terms
          </Link>
        </div>

        <p className="text-xs text-[var(--muted-foreground)]/70 sm:text-sm">
          © {new Date().getFullYear()} Behavior School. Created by{" "}
          <a
            href="https://github.com/sh20raj"
            className="text-[var(--muted-foreground)] transition-colors hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            sh20raj
          </a>
          .
        </p>

        <div className="flex gap-4">
          <a
            href="https://www.youtube.com/@behavior-school"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behavior School on YouTube"
            className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            <Youtube className="h-5 w-5 fill-current" />
          </a>
          <a
            href="https://github.com/sh20raj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="/about"
            aria-label="About Behavior School"
            className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
