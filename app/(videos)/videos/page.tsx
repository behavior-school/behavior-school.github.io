import type { Metadata } from "next";
import Link from "next/link";
import { YoutubeIcon } from "../../components/Icons";
import { Clock, Play, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Behavior School YouTube Video Lessons & Companion Field Guides",
  description: "Watch all video lessons from @behavior-school covering practical psychology, neuroscience, overthinking, procrastination, and cognitive biases.",
  openGraph: {
    title: "Behavior School Video Lessons & Field Guides",
    description: "Watch video lessons on practical psychology and human behavior.",
    url: "https://behavior-school.github.io/videos",
    siteName: "Behavior School",
    type: "website",
  },
};

export const channelVideos = [
  {
    title: "Why Rejection LITERALLY Hurts (According to Neuroscience)",
    duration: "3:57",
    category: "Social Neuroscience",
    views: "2 views",
    date: "2 weeks ago",
    slug: "why-rejection-literally-hurts-neuroscience",
    desc: "How the dorsal anterior cingulate cortex processes social pain identically to physical tissue damage."
  },
  {
    title: "The Intelligence Trap: Why Smart Brains Overthink Everything",
    duration: "4:44",
    category: "Psychology",
    views: "New",
    date: "3 weeks ago",
    slug: "intelligence-trap-why-smart-brains-overthink",
    desc: "Why high cognitive capacity leads to paralysis by analysis and hyper-active Default Mode Network loops."
  },
  {
    title: "The Invisible Strings: Mastering the Psychology of Manipulation",
    duration: "4:23",
    category: "Behavior Science",
    views: "New",
    date: "3 weeks ago",
    slug: "psychology-of-manipulation-invisible-strings",
    desc: "Deconstructing dark triad traits, gaslighting mechanisms, and emotional manipulation tactics."
  },
  {
    title: "The Biological Battlefield: The Neuroscience of Procrastination",
    duration: "4:55",
    category: "Neuroscience",
    views: "New",
    date: "3 weeks ago",
    slug: "neuroscience-of-procrastination",
    desc: "Why procrastination is an emotional regulation failure caused by Amygdala threat perception."
  },
  {
    title: "You Are Not Lazy",
    duration: "20:07",
    category: "Masterclass",
    views: "4 views",
    date: "1 month ago",
    slug: "you-are-not-lazy-behavioral-breakdown",
    desc: "A 20-minute comprehensive masterclass uncoupling state exhaustion from moral failure."
  },
  {
    title: "How to Train Your Brain to Be Happy (7 Simple Habits)",
    duration: "6:25",
    category: "Positive Psychology",
    views: "1 view",
    date: "1 month ago",
    slug: "train-your-brain-to-be-happy-7-habits",
    desc: "Neuroplasticity protocols to rewire serotonin receptors and regulate baseline tonic mood."
  },
  {
    title: "You Love the Dream, Not the Work",
    duration: "4:47",
    category: "Habits & Discipline",
    views: "1 view",
    date: "1 month ago",
    slug: "you-love-the-dream-not-the-work",
    desc: "Why fantasy dopamine spikes trick your brain into feeling accomplishment before taking physical action."
  },
  {
    title: "Why You Ignore 100 Compliments (The Negativity Bias)",
    duration: "9:00",
    category: "Cognitive Psychology",
    views: "2 views",
    date: "1 month ago",
    slug: "why-you-ignore-100-compliments-negativity-bias",
    desc: "Evolutionary psychology reveals why human brains weigh negative feedback 4x heavier than positive reinforcement."
  },
  {
    title: "How a Single Number Hacks Your Brain (The Anchoring Effect)",
    duration: "6:08",
    category: "Mental Models",
    views: "3 views",
    date: "1 month ago",
    slug: "how-a-single-number-hacks-your-brain-anchoring",
    desc: "How initial numeric anchors skew financial negotiations and intuitive estimations."
  },
  {
    title: "Why You Fear the Wrong Things (The Availability Heuristic)",
    duration: "5:22",
    category: "Mental Models",
    views: "2 views",
    date: "1 month ago",
    slug: "why-you-fear-the-wrong-things-availability-heuristic",
    desc: "Why news media vividness distorts probability estimation and causes irrational risk assessment."
  },
  {
    title: "Why This Ugly Chair Feels Perfect (The IKEA Effect)",
    duration: "4:26",
    category: "Behavioral Economics",
    views: "3 views",
    date: "1 month ago",
    slug: "why-this-ugly-chair-feels-perfect-ikea-effect",
    desc: "Cognitive bias breakdown of why humans overvalue products and ideas they personally helped build."
  }
];

export default function VideosPage() {
  const jsonLdVideos = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Behavior School YouTube Video Lessons",
    "url": "https://behavior-school.github.io/videos",
    "description": "Watch video lessons on practical psychology, neuroscience, and cognitive biases.",
    "hasPart": channelVideos.map((video) => ({
      "@type": "VideoObject",
      "name": video.title,
      "description": video.desc,
      "duration": video.duration,
      "thumbnailUrl": "https://behavior-school.github.io/og-image.png",
      "uploadDate": "2026-06-01",
      "contentUrl": "https://www.youtube.com/@behavior-school"
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideos) }}
      />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)]">
            <YoutubeIcon className="w-4 h-4 fill-current text-[var(--primary)]" />
            <span>YouTube Channel Videos @behavior-school</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--foreground)] tracking-tight">
            Video Lessons & <span className="text-[var(--primary)]">Field Guides</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)]">
            Watch our visual lessons on YouTube and read their matching science field guides.
          </p>

          <div className="pt-2">
            <a
              href="https://www.youtube.com/@behavior-school"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity shadow-sm"
            >
              <YoutubeIcon className="w-4 h-4 fill-current" />
              <span>Subscribe to @behavior-school Channel</span>
            </a>
          </div>
        </div>

        {/* Video Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {channelVideos.map((v, idx) => (
            <article
              key={idx}
              className="bg-[var(--card)] p-6 rounded-3xl border border-[var(--border)] flex flex-col justify-between hover:border-[var(--primary)]/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                    {v.category}
                  </span>
                  <span className="text-xs font-mono text-[var(--muted-foreground)] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {v.duration}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--muted)] border border-[var(--border)] mb-4 flex items-center justify-center group-hover:border-[var(--primary)]/40 transition-colors">
                  <Play className="w-8 h-8 text-[var(--primary)] group-hover:scale-110 transition-transform" />
                </div>

                <h2 className="text-base font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors leading-snug">
                  {v.title}
                </h2>
                <p className="text-xs text-[var(--muted-foreground)] mb-4 leading-relaxed">
                  {v.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs">
                <a
                  href="https://www.youtube.com/@behavior-school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[var(--primary)] hover:underline flex items-center gap-1"
                >
                  <span>Watch on YouTube</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href={`/blog/${v.slug}`}
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-semibold"
                >
                  Read Field Guide
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
