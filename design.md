# 🎨 Behavior School Design System & Architecture (`design.md`)

## 📐 Design Philosophy: Clean, Minimal, Premium & Interactive

The **Behavior School** web application is built on a clean, minimal design system utilizing pure **shadcn/ui** CSS variables, crisp typography, and an interactive **Claude-like Artifacts** panel system.

---

## 🎨 Color Palette (Pure shadcn/ui Variables)

| Token | HSL Value | Hex Equivalent | Usage |
| :--- | :--- | :--- | :--- |
| `--background` | `224 71% 4%` | `#090D16` | Deep obsidian canvas background |
| `--foreground` | `213 31% 91%` | `#F1F5F9` | High-contrast body text |
| `--card` | `224 71% 6%` | `#0E1424` | Minimal container cards |
| `--card-foreground` | `213 31% 91%` | `#F1F5F9` | Card title and body content |
| `--primary` | `239 84% 67%` | `#6366F1` | Electric Indigo brand accent |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on primary buttons |
| `--secondary` | `215 27.9% 16.9%` | `#1E293B` | Subtle badges and container highlights |
| `--muted` | `215 27.9% 16.9%` | `#1E293B` | Inactive tabs and muted controls |
| `--muted-foreground` | `217.9 10.6% 64.9%` | `#94A3B8` | Subtitles and meta labels |
| `--border` | `215 27.9% 16.9%` | `#1E293B` | Subtle 1px dividers and borders |
| `--ring` | `239 84% 67%` | `#6366F1` | Focus rings |
| `--radius` | `0.75rem` | `12px` | Modern border radius |

---

## 📄 Claude-Like Artifacts System

Whenever a user interacts with a **Question**, **Mental Model**, **Behavior Diagnostic**, or **Curriculum Pillar**, an interactive **Artifact Drawer/Panel** opens side-by-side or as a clean slide-over (resembling Anthropic Claude's Artifacts interface).

### Key Features of the Artifact System:
1. **Interactive Code & Summary Preview**: Displays research papers, step-by-step habit loops, and neuroscience protocols formatted as actionable markdown cards.
2. **Copy Artifact Action**: Allows visitors to copy protocol steps or mental models directly to their clipboard.
3. **Download PDF/Markdown**: Export behavioral protocols into local notes.
4. **Side-by-Side Dual Pane**: Allows browsing questions while viewing detailed artifact breakdowns concurrently.

---

## ⚡ Microinteractions & Dynamics

1. **Active Filter Chips**: Instant category filtering with smooth active states.
2. **Interactive Diagnostic Analyzer**: Step-by-step diagnostic quiz providing instant feedback.
3. **Live Search**: Instant keyword filtering across questions, biases, and video series.
4. **Copy-to-Clipboard Notifications**: Toast confirmation when copying protocols.
5. **Smooth Anchor Scrolling**: Seamless navigation across sections.

---

## 🏛️ Component Hierarchy

```
app/
 ├── components/
 │    ├── ArtifactViewer.tsx     <-- Claude-style Artifact Drawer
 │    ├── Navbar.tsx             <-- Minimal Clean Header
 │    ├── Hero.tsx               <-- High-Impact Hero & Interactive Teasers
 │    ├── CategoriesSection.tsx  <-- 6 Core Pillars Grid
 │    ├── QuestionsExplorer.tsx  <-- Interactive Question Artifacts
 │    ├── BehaviorDiagnostic.tsx <-- Mind Diagnostic Protocol Generator
 │    ├── MentalModelsLibrary.tsx<-- Searchable Mental Models & Biases
 │    ├── SeriesShowcase.tsx     <-- Video Series Catalog
 │    ├── PhilosophyMission.tsx  <-- Brand Philosophy & Vision
 │    └── Footer.tsx             <-- Minimal Footer
 ├── layout.tsx
 ├── page.tsx
 └── globals.css
```
