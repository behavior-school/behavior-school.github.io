"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Compass, Home, Menu, Search, Wrench, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { YoutubeIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

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
      "fixed inset-x-0 top-0 z-50 h-[var(--app-header-height)] transition-all duration-200 " +
      (scrolled
        ? "bg-[var(--background)]/95 backdrop-blur-xl border-b border-[var(--border)]"
        : "bg-[var(--background)]/80 backdrop-blur-lg")
    }>
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--muted)] p-1.5 shadow-sm">
            <img src="/logo.svg" alt="Behavior School Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-extrabold text-[15px] tracking-tight text-[var(--foreground)]">
            Behavior<span className="text-[var(--primary)] font-normal">School</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 text-xs font-medium">
          <ThemeToggle />
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={isActive(href) ? "font-semibold text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"}>
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
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] shadow-sm"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      <nav
        aria-label="Mobile primary navigation"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-[var(--background)]/96 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden"
      >
        <div className="mx-auto grid h-[var(--app-bottom-nav-height)] max-w-md grid-cols-5 items-center">
          <Link href="/" onClick={() => setOpen(false)} className={isActive("/") ? "flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl bg-[var(--muted)] text-[10px] font-bold text-[var(--primary)] active:bg-[var(--muted)]" : "flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold text-[var(--muted-foreground)] active:bg-[var(--muted)]"}>
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link href="/resources" onClick={() => setOpen(false)} className={isActive("/resources") ? "flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl bg-[var(--muted)] text-[10px] font-bold text-[var(--primary)] active:bg-[var(--muted)]" : "flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold text-[var(--muted-foreground)] active:bg-[var(--muted)]"}>
            <Compass className="h-5 w-5" />
            <span>Learn</span>
          </Link>
          <Link href="/books" onClick={() => setOpen(false)} className={isActive("/books") ? "flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl bg-[var(--muted)] text-[10px] font-bold text-[var(--primary)] active:bg-[var(--muted)]" : "flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold text-[var(--muted-foreground)] active:bg-[var(--muted)]"}>
            <BookOpen className="h-5 w-5" />
            <span>Books</span>
          </Link>
          <Link href="/tools" onClick={() => setOpen(false)} className={isActive("/tools") ? "flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl bg-[var(--muted)] text-[10px] font-bold text-[var(--primary)] active:bg-[var(--muted)]" : "flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold text-[var(--muted-foreground)] active:bg-[var(--muted)]"}>
            <Wrench className="h-5 w-5" />
            <span>Tools</span>
          </Link>
          <Link href="/books" onClick={() => setOpen(false)} className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-semibold text-[var(--muted-foreground)] active:bg-[var(--muted)]">
            <Search className="h-5 w-5" />
            <span>Search</span>
          </Link>
        </div>
      </nav>

      {open && (
        <div className="absolute left-0 right-0 top-[var(--app-header-height)] lg:hidden border-t border-[var(--border)] bg-[var(--background)]/98 backdrop-blur-xl shadow-xl">
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
            <div className="flex items-center justify-between py-2.5">
              <span className="text-sm font-semibold text-[var(--foreground)]">Appearance</span>
              <ThemeToggle />
            </div>
            <a href="https://www.youtube.com/@behavior-school" target="_blank" rel="noopener noreferrer" className="py-2.5 font-semibold text-[var(--primary)]">
              YouTube Channel
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
