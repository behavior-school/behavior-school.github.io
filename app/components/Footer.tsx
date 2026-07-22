"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)] text-[var(--muted-foreground)] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--muted)] border border-[var(--border)] p-1 flex items-center justify-center">
                <img src="/logo.svg" alt="Behavior School" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-base text-[var(--foreground)] tracking-tight">
                Behavior<span className="text-[var(--primary)] font-normal">School</span>
              </span>
            </div>
            <p className="text-xs text-[var(--muted-foreground)] max-w-sm leading-relaxed">
              Practical Psychology & Neuroscience for Real Life.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://sopkit.github.io/"
                target="_blank"
                rel="noopener follow"
                className="text-xs text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-1"
              >
                <span>SOPKit Templates</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/blog" className="hover:text-[var(--primary)] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://www.youtube.com/@behavior-school" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">
                  YouTube Channel
                </a>
              </li>
              <li>
                <a href="https://app.notion.com/p/Behavior-School-373cd0ed0c25801e9a23c4ba60f032fb" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">
                  Notion Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)] mb-3">
              Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[var(--primary)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--primary)] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[var(--primary)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[var(--primary)] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Behavior School. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
