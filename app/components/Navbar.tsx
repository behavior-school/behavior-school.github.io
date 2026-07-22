"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { YoutubeIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[var(--muted)] border border-[var(--border)] p-1 flex items-center justify-center">
            <img
              src="/logo.svg"
              alt="Behavior School Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-base tracking-tight text-[var(--foreground)]">
            Behavior<span className="text-[var(--primary)] font-normal">School</span>
          </span>
        </Link>

        {/* Minimal Right Actions */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <Link
            href="/videos"
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Videos
          </Link>
          <Link
            href="/quiz"
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Quiz
          </Link>
          <Link
            href="/tools"
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Tools
          </Link>
          <Link
            href="/books"
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Books
          </Link>
          <Link
            href="/blog"
            className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Blog
          </Link>
          <a
            href="https://www.youtube.com/@behavior-school"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm"
          >
            <YoutubeIcon className="w-3.5 h-3.5 fill-current" />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </header>
  );
}
