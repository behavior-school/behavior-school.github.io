export interface BookQueueItem {
  slug: string;
  title: string;
  author: string;
  category: string;
  tags: string[];
}

/**
 * Editorial backlog for the hourly five-book publisher.
 *
 * Metadata such as edition/ISBN should be researched at publish time rather than
 * blindly copied from this backlog.
 */
export const bookPublishingQueue: BookQueueItem[] = [
  { slug: "tiny-habits", title: "Tiny Habits", author: "B.J. Fogg", category: "Habits", tags: ["behavior design", "habits", "motivation"] },
  { slug: "the-power-of-moments", title: "The Power of Moments", author: "Chip Heath & Dan Heath", category: "Behavior Design", tags: ["memory", "experiences", "peak moments"] },
  { slug: "make-it-stick", title: "Make It Stick", author: "Peter C. Brown, Henry L. Roediger III & Mark A. McDaniel", category: "Learning", tags: ["learning science", "memory", "active recall"] },
  { slug: "peak", title: "Peak", author: "Anders Ericsson & Robert Pool", category: "Learning", tags: ["deliberate practice", "expertise", "skill"] },
  { slug: "ultralearning", title: "Ultralearning", author: "Scott H. Young", category: "Learning", tags: ["self-directed learning", "skills", "practice"] },
  { slug: "range", title: "Range", author: "David Epstein", category: "Learning", tags: ["generalists", "career", "learning"] },
  { slug: "mind-for-numbers", title: "A Mind for Numbers", author: "Barbara Oakley", category: "Learning", tags: ["learning", "math", "memory"] },
  { slug: "why-we-sleep", title: "Why We Sleep", author: "Matthew Walker", category: "Neuroscience", tags: ["sleep", "memory", "brain"] },
  { slug: "the-happiness-hypothesis", title: "The Happiness Hypothesis", author: "Jonathan Haidt", category: "Psychology", tags: ["happiness", "emotion", "moral psychology"] },
  { slug: "stumbling-on-happiness", title: "Stumbling on Happiness", author: "Daniel Gilbert", category: "Psychology", tags: ["happiness", "prediction", "decision making"] },
  { slug: "emotional-intelligence", title: "Emotional Intelligence", author: "Daniel Goleman", category: "Social Psychology", tags: ["emotion", "self-awareness", "relationships"] },
  { slug: "social-intelligence", title: "Social Intelligence", author: "Daniel Goleman", category: "Social Psychology", tags: ["social cognition", "relationships", "empathy"] },
  { slug: "nonviolent-communication", title: "Nonviolent Communication", author: "Marshall B. Rosenberg", category: "Relationships", tags: ["communication", "conflict", "empathy"] },
  { slug: "crucial-conversations", title: "Crucial Conversations", author: "Kerry Patterson, Joseph Grenny, Ron McMillan & Al Switzler", category: "Communication", tags: ["communication", "conflict", "difficult conversations"] },
  { slug: "difficult-conversations", title: "Difficult Conversations", author: "Douglas Stone, Bruce Patton & Sheila Heen", category: "Communication", tags: ["conflict", "communication", "negotiation"] },
  { slug: "never-split-the-difference", title: "Never Split the Difference", author: "Chris Voss & Tahl Raz", category: "Negotiation", tags: ["negotiation", "persuasion", "communication"] },
  { slug: "made-to-stick", title: "Made to Stick", author: "Chip Heath & Dan Heath", category: "Communication", tags: ["ideas", "storytelling", "memory"] },
  { slug: "contagious", title: "Contagious", author: "Jonah Berger", category: "Social Psychology", tags: ["social transmission", "marketing", "word of mouth"] },
  { slug: "the-charisma-myth", title: "The Charisma Myth", author: "Olivia Fox Cabane", category: "Social Psychology", tags: ["charisma", "presence", "social skills"] },
  { slug: "captivate", title: "Captivate", author: "Vanessa Van Edwards", category: "Social Psychology", tags: ["social skills", "communication", "behavior"] },
  { slug: "quiet", title: "Quiet", author: "Susan Cain", category: "Personality", tags: ["introversion", "social behavior", "work"] },
  { slug: "attached", title: "Attached", author: "Amir Levine & Rachel Heller", category: "Relationships", tags: ["attachment", "relationships", "emotion"] },
  { slug: "the-like-switch", title: "The Like Switch", author: "Jack Schafer & Marvin Karlins", category: "Social Psychology", tags: ["rapport", "social skills", "trust"] },
  { slug: "mistakes-were-made", title: "Mistakes Were Made (But Not by Me)", author: "Carol Tavris & Elliot Aronson", category: "Cognition", tags: ["self-justification", "cognitive dissonance", "bias"] },
  { slug: "thinking-in-systems", title: "Thinking in Systems", author: "Donella H. Meadows", category: "Mental Models", tags: ["systems thinking", "feedback", "complexity"] },
  { slug: "the-design-of-everyday-things", title: "The Design of Everyday Things", author: "Don Norman", category: "Behavior Design", tags: ["affordances", "design", "usability"] },
  { slug: "dont-make-me-think", title: "Don't Make Me Think", author: "Steve Krug", category: "Behavior Design", tags: ["usability", "UX", "cognitive load"] },
  { slug: "hooked", title: "Hooked", author: "Nir Eyal", category: "Behavior Design", tags: ["product psychology", "habit loops", "engagement"] },
  { slug: "indistractable", title: "Indistractable", author: "Nir Eyal", category: "Focus", tags: ["distraction", "attention", "focus"] },
  { slug: "stolen-focus", title: "Stolen Focus", author: "Johann Hari", category: "Attention", tags: ["attention", "technology", "focus"] },
  { slug: "four-thousand-weeks", title: "Four Thousand Weeks", author: "Oliver Burkeman", category: "Productivity", tags: ["time", "productivity", "meaning"] },
  { slug: "essentialism", title: "Essentialism", author: "Greg McKeown", category: "Productivity", tags: ["prioritization", "focus", "decision making"] },
  { slug: "getting-things-done", title: "Getting Things Done", author: "David Allen", category: "Productivity", tags: ["productivity", "workflow", "organization"] },
  { slug: "eat-that-frog", title: "Eat That Frog!", author: "Brian Tracy", category: "Productivity", tags: ["procrastination", "priorities", "action"] },
  { slug: "incognito", title: "Incognito", author: "David Eagleman", category: "Neuroscience", tags: ["brain", "consciousness", "decision making"] },
  { slug: "behave", title: "Behave", author: "Robert Sapolsky", category: "Neuroscience", tags: ["behavior", "stress", "biology"] },
  { slug: "the-emotional-brain", title: "The Emotional Brain", author: "Joseph LeDoux", category: "Neuroscience", tags: ["emotion", "threat", "brain"] },
  { slug: "the-brain-that-changes-itself", title: "The Brain That Changes Itself", author: "Norman Doidge", category: "Neuroscience", tags: ["neuroplasticity", "rehabilitation", "learning"] },
  { slug: "livewired", title: "Livewired", author: "David Eagleman", category: "Neuroscience", tags: ["neuroplasticity", "brain", "adaptation"] },
  { slug: "the-tell-tale-brain", title: "The Tell-Tale Brain", author: "V.S. Ramachandran", category: "Neuroscience", tags: ["brain", "perception", "neuropsychology"] },
  { slug: "seven-and-a-half-lessons-about-the-brain", title: "Seven and a Half Lessons About the Brain", author: "Lisa Feldman Barrett", category: "Neuroscience", tags: ["brain", "emotion", "prediction"] },
  { slug: "why-zebras-dont-get-ulcers", title: "Why Zebras Don't Get Ulcers", author: "Robert M. Sapolsky", category: "Neuroscience", tags: ["stress", "health", "behavior"] },
  { slug: "the-righteous-mind", title: "The Righteous Mind", author: "Jonathan Haidt", category: "Social Psychology", tags: ["moral psychology", "intuition", "groups"] },
  { slug: "the-upward-spiral", title: "The Upward Spiral", author: "Alex Korb", category: "Neuroscience", tags: ["mood", "behavior", "neuroscience"] },
  { slug: "the-willpower-instinct", title: "The Willpower Instinct", author: "Kelly McGonigal", category: "Self-Regulation", tags: ["willpower", "self-control", "stress"] },
  { slug: "the-power-of-now", title: "The Power of Now", author: "Eckhart Tolle", category: "Mindfulness", tags: ["attention", "mindfulness", "present moment"] },
  { slug: "flow", title: "Flow", author: "Mihaly Csikszentmihalyi", category: "Focus", tags: ["flow", "motivation", "attention"] },
  { slug: "the-war-of-art", title: "The War of Art", author: "Steven Pressfield", category: "Creativity", tags: ["creative resistance", "procrastination", "work"] },
  { slug: "show-your-work", title: "Show Your Work!", author: "Austin Kleon", category: "Creativity", tags: ["creative work", "sharing", "career"] },
  { slug: "the-art-of-learning", title: "The Art of Learning", author: "Josh Waitzkin", category: "Learning", tags: ["mastery", "practice", "performance"] },
  { slug: "so-good-they-cant-ignore-you", title: "So Good They Can't Ignore You", author: "Cal Newport", category: "Career", tags: ["career capital", "skills", "work"] },
  { slug: "digital-minimalism", title: "Digital Minimalism", author: "Cal Newport", category: "Attention", tags: ["technology", "attention", "focus"] },
  { slug: "the-upside-of-stress", title: "The Upside of Stress", author: "Kelly McGonigal", category: "Stress", tags: ["stress", "performance", "mindset"] },
  { slug: "social-psychology", title: "Social Psychology", author: "David Myers", category: "Social Psychology", tags: ["social psychology", "behavior", "groups"] },
  { slug: "the-invisible-gorilla", title: "The Invisible Gorilla", author: "Christopher Chabris & Daniel Simons", category: "Cognition", tags: ["attention", "memory", "illusion"] },
  { slug: "noise", title: "Noise", author: "Daniel Kahneman, Olivier Sibony & Cass Sunstein", category: "Decision Making", tags: ["judgment", "noise", "decision making"] },
  { slug: "the-undoing-project", title: "The Undoing Project", author: "Michael Lewis", category: "Cognition", tags: ["Kahneman", "Tversky", "behavioral economics"] },
  { slug: "scarcity", title: "Scarcity", author: "Sendhil Mullainathan & Eldar Shafir", category: "Behavioral Economics", tags: ["scarcity", "attention", "decision making"] },
  { slug: "misbehaving", title: "Misbehaving", author: "Richard H. Thaler", category: "Behavioral Economics", tags: ["behavioral economics", "choice", "decision making"] },
  { slug: "nudge-for-good", title: "Nudge for Good", author: "Richard H. Thaler & Cass R. Sunstein", category: "Behavior Design", tags: ["choice architecture", "ethics", "behavior"] }
];
