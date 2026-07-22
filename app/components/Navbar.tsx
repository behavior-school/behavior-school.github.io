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
          ? "bg-black/90 backdrop-blur-md border-b border-neutral-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 p-1 flex items-center justify-center">
            <img
              src="/logo.svg"
              alt="Behavior School Logo"
              className="w-full h-full object-contain invert"
            />
          </div>
          <span className="font-bold text-base tracking-tight text-white">
            Behavior<span className="text-neutral-400 font-normal">School</span>
          </span>
        </Link>

        {/* Minimal Right Actions */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <Link
            href="/blog"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <a
            href="https://www.youtube.com/@behavior-school"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-1.5"
          >
            <YoutubeIcon className="w-3.5 h-3.5 fill-black" />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </header>
  );
}
