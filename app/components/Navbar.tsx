"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { YoutubeIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    ["/resources", "Resources"],
    ["/videos", "Videos"],
    ["/quiz", "Quiz"],
    ["/tools", "Tools"],
    ["/books", "Books"],
    ["/blog", "Blog"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];

  return (
    <header className={
      "fixed top-0 left-0 right-0 z-50 transition-all duration-200 " +
      (scrolled
        ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)] py-3"
        : "bg-transparent py-5")
    }>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[var(--muted)] border border-[var(--border)] p-1 flex items-center justify-center">
            <img src="/logo.svg" alt="Behavior School Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-base tracking-tight text-[var(--foreground)]">
            Behavior<span className="text-[var(--primary)] font-normal">School</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 text-xs font-medium">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
              {label}
            </Link>
          ))}
          <a
            href="https://www.youtube.com/@behavior-school"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm"
          >
            <YoutubeIcon className="w-3.5 h-3.5 fill-current" />
            <span>YouTube</span>
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--muted)] flex items-center justify-center text-[var(--foreground)]"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 grid gap-1 text-sm">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                {label}
              </Link>
            ))}
            <a href="https://www.youtube.com/@behavior-school" target="_blank" rel="noopener noreferrer" className="py-2.5 font-semibold text-[var(--primary)]">
              YouTube Channel
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
