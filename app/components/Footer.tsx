"use client";

import React from "react";
import { ExternalLink, ArrowUp } from "lucide-react";
import { YoutubeIcon, GithubIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col with Official Logo */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 p-1 flex items-center justify-center">
                <img src="/logo.svg" alt="Behavior School" className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Behavior<span className="text-blue-500">School</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              An educational media brand dedicated to helping people understand how their minds work so they can make better decisions, build better habits, and live more intentionally.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.youtube.com/@behavior-school"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-red-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all"
                title="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://app.notion.com/p/Behavior-School-373cd0ed0c25801e9a23c4ba60f032fb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all"
                title="Notion Workspace"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://behavior-school.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
                title="GitHub Pages"
              >
                <GithubIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Pillars & Content
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#categories" className="hover:text-indigo-400 transition-colors">
                  Psychology & Neuroscience
                </a>
              </li>
              <li>
                <a href="#questions" className="hover:text-indigo-400 transition-colors">
                  Questions We Answer
                </a>
              </li>
              <li>
                <a href="#diagnostic" className="hover:text-indigo-400 transition-colors">
                  Mind Diagnostic Tool
                </a>
              </li>
              <li>
                <a href="#mental-models" className="hover:text-indigo-400 transition-colors">
                  Mental Models & Biases
                </a>
              </li>
              <li>
                <a href="#series" className="hover:text-indigo-400 transition-colors">
                  Real Self Series
                </a>
              </li>
            </ul>
          </div>

          {/* Official Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Official Hubs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://www.youtube.com/@behavior-school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
                >
                  <YoutubeIcon className="w-3.5 h-3.5 fill-current" />
                  <span>YouTube Channel</span>
                </a>
              </li>
              <li>
                <a
                  href="https://app.notion.com/p/Behavior-School-373cd0ed0c25801e9a23c4ba60f032fb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Notion Content Hub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://behavior-school.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 fill-current" />
                  <span>GitHub Pages Site</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Behavior School. All rights reserved. Practical Psychology for Real Life.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
