"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink, Menu, X, Sparkles } from "lucide-react";
import { YoutubeIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Pillars", href: "/#categories" },
    { name: "Questions We Answer", href: "/#questions" },
    { name: "Mind Diagnostic", href: "/#diagnostic" },
    { name: "Mental Models", href: "/#mental-models" },
    { name: "Series", href: "/#series" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Official Image */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 p-1 flex items-center justify-center shadow-lg shadow-indigo-500/10 group-hover:border-indigo-500/50 transition-all">
            <img
              src="/logo.svg"
              alt="Behavior School Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-white tracking-tight leading-tight">
              Behavior<span className="text-blue-500">School</span>
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
              Practical Psychology
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://app.notion.com/p/Behavior-School-373cd0ed0c25801e9a23c4ba60f032fb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
          >
            <span>Notion Hub</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
          <a
            href="https://www.youtube.com/@behavior-school"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-500 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all transform hover:-translate-y-0.5"
          >
            <YoutubeIcon className="w-4 h-4 fill-white" />
            <span>Subscribe @behavior-school</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1222]/95 border-b border-slate-800 px-4 py-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href="https://app.notion.com/p/Behavior-School-373cd0ed0c25801e9a23c4ba60f032fb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Notion Workspace</span>
            </a>
            <a
              href="https://www.youtube.com/@behavior-school"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 shadow-lg shadow-red-600/25"
            >
              <YoutubeIcon className="w-4 h-4 fill-white" />
              <span>Subscribe on YouTube</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
