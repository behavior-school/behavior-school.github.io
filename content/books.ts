import type { BookDetail } from "../lib/book-types";

export const detailedBooksData: Record<string, BookDetail> = {
  "atomic-habits": {
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    year: "2018",
    tagline: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    hasHabitSimulator: true,
    summary: "Atomic Habits presents a comprehensive practical framework for improving every day by 1%. James Clear demonstrates that long-term outcome success is not created by high willpower or ambitious goals, but by designing friction-free environmental systems.",
    keyTakeaways: [
      "Habits do not change your life overnight; small 1% improvements compound over time.",
      "Focus on identity-based habits ('I am a runner') rather than outcome-based habits ('I want to run a marathon').",
      "Environment is the invisible hand that shapes human behavior.",
      "Never miss twice. Missing once is a mistake; missing twice is the start of a new bad habit."
    ],
    protocolSteps: [
      "Write an Implementation Intention: 'I will [BEHAVIOR] at [TIME] in [LOCATION]'.",
      "Apply the 2-Minute Rule: Shrink the initial habit action until it takes under 120 seconds.",
      "Temptation Bundling: Pair an action you need to do with an action you want to do."
    ],
    poll: {
      question: "Which of the 4 Laws of Behavior Change do you find hardest to maintain?",
      options: [
        { id: 1, text: "Make it Obvious (Cue)", votes: 24 },
        { id: 2, text: "Make it Attractive (Craving)", votes: 31 },
        { id: 3, text: "Make it Easy (Response - 2 Min Rule)", votes: 52 },
        { id: 4, text: "Make it Satisfying (Reward)", votes: 19 }
      ]
    },
    quiz: {
      title: "Atomic Habits Framework Quiz",
      questions: [
        {
          id: 1,
          question: "What type of habits produce the most lasting permanent behavioral change according to James Clear?",
          options: ["Outcome-based habits", "Identity-based habits", "Reward-based habits", "Goal-based habits"],
          correctAnswer: 1,
          explanation: "Identity-based habits focus on who you wish to become. Every action you take is a vote for your desired identity."
        }
      ]
    },
    markdownContent: `## The Four Laws of Behavior Change

Every habit loop consists of four distinct cognitive stages: **Cue, Craving, Response, and Reward.**

### 1st Law: Make it Obvious (Cue)

Your brain is a prediction machine. It continuously scans your physical environment for cues that signal rewards.

- **Design your environment**: Place your guitar in the middle of the living room; place healthy food at eye level in the fridge.
- **Habit Stacking**: Connect a new habit to an existing automated routine: *"After I [CURRENT HABIT], I will [NEW HABIT]."*

### 2nd Law: Make it Attractive (Craving)

It is the anticipation of a reward—not the fulfillment of it—that gets us to take action. Dopamine spikes occur during anticipation.

- **Reframe your mindset**: Shift from *"I have to do this"* to *"I get to build this skill."*

### 3rd Law: Make it Easy (Response)

Human behavior follows the Law of Least Effort. We naturally gravitate toward the option that requires the least physical friction.

- **Reduce friction**: Log out of social accounts after each session. Lay out workout gear the night before.
- **The 2-Minute Rule**: When you start a new habit, it should take less than two minutes to execute.

### 4th Law: Make it Satisfying (Reward)

What is immediately rewarded is repeated. What is immediately punished is avoided.

- **Use instant reinforcement**: Keep a visual habit tracker and cross off completed days to trigger immediate satisfaction.`
  },
  "thinking-fast-and-slow": {
    slug: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: "2011",
    tagline: "The Two Systems That Drive the Way We Think",
    hasCognitiveTester: true,
    summary: "Nobel laureate Daniel Kahneman explains the two systems that drive human thought: System 1 is fast, intuitive, and emotional; System 2 is slow, analytical, and logical.",
    keyTakeaways: [
      "System 1 operates automatically with high speed and zero conscious effort, relying on mental shortcuts.",
      "System 2 requires conscious energy, attention, and cognitive work, but is inherently lazy.",
      "Loss Aversion: The pain of losing $100 is psychologically twice as powerful as the pleasure of gaining $100.",
      "Availability Heuristic: We estimate the probability of events based on how easily examples come to mind."
    ],
    protocolSteps: [
      "Conduct a Premortem before finalizing major decisions.",
      "Pause for 5 minutes before making high-stakes financial choices to activate System 2.",
      "Beware of Anchoring Bias in negotiations."
    ],
    markdownContent: `## Dual-Process Theory: System 1 vs System 2

Human judgment is constantly negotiating between two fundamental modes of thought:

### System 1 (Fast Thinking)

- Operates automatically, quickly, with little or no effort and no sense of voluntary control.
- Generates complex patterns of ideas, but cannot perform complex logical operations.
- Prone to systemic cognitive biases and logical fallacies.

### System 2 (Slow Thinking)

- Allocates attention to effortful mental operations, including complex computations.
- Associated with the subjective experience of agency, choice, and concentration.
- Requires high glucose consumption and mental energy; lazy by default.

## Key Cognitive Biases Revealed

- **WYSIATI (What You See Is All There Is)**: System 1 builds the best possible story out of available information, ignoring unknown data.
- **Regression to the Mean**: Extreme performances are naturally followed by average outcomes, which humans mistake for causal feedback.`
  },
  "deep-work": {
    slug: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    year: "2016",
    tagline: "Rules for Focused Success in a Distracted World",
    summary: "Computer science professor Cal Newport argues that deep work—the ability to focus without distraction on a cognitively demanding task—is becoming rare and extremely valuable.",
    keyTakeaways: [
      "Deep Work is necessary to master hard skills and produce elite-level output rapidly.",
      "Shallow Work (emails, Slack messages, quick meetings) creates an illusion of productivity without creating real value.",
      "Attention Residue: Switching tasks leaves a cognitive hangover that degrades focus on the next task."
    ],
    protocolSteps: [
      "Block 90-minute distraction-free deep work focus blocks.",
      "Quarantine your phone in another room during focus sessions.",
      "Establish a strict shutdown ritual at the end of the workday."
    ],
    markdownContent: `## The Deep Work Philosophy

To thrive in the modern economy, you must master two core abilities:

1. The ability to master hard things quickly.
2. The ability to produce at an elite level, in terms of both quality and speed.

### The Four Deep Work Scheduling Strategies

- **Monastic Strategy**: Eliminate all shallow obligations completely for long stretches.
- **Bimodal Strategy**: Divide your time into distinct deep periods and shallow periods.
- **Rhythmic Strategy**: Transform deep work into a daily 90-minute morning habit.
- **Journalistic Strategy**: Fit deep work into your schedule whenever free blocks open up.

### The Attention Residue Effect

When you switch from Task A to Task B, your attention does not immediately follow. A residue of your attention remains stuck thinking about Task A, compromising your cognitive bandwidth.`
  },
  "power-of-habit": {
    slug: "power-of-habit",
    title: "The Power of Habit",
    author: "Charles Duhigg",
    year: "2012",
    tagline: "Why We Do What We Do in Life and Business",
    summary: "Charles Duhigg explores the science behind habit formation in individuals, organizations, and societies, showing how understanding the habit loop allows us to transform our lives.",
    keyTakeaways: [
      "Habits emerge because the brain is constantly looking for ways to save energy.",
      "The Habit Loop consists of Cue, Routine, and Reward.",
      "You cannot extinguish a bad habit; you can only change the Routine while keeping Cue and Reward intact."
    ],
    protocolSteps: [
      "Identify the exact Cue trigger (Time, Location, Emotional State, Other People, Immediately Preceding Action).",
      "Substitute the physical Routine while preserving the same emotional Reward.",
      "Focus on Keystone Habits like daily physical exercise."
    ],
    markdownContent: `## The Golden Rule of Habit Change

The key to transforming bad habits is understanding that you cannot simply erase a habit loop. You must preserve the **Cue** and the **Reward**, but swap out the **Routine**.

### The Anatomy of the Habit Loop

1. **The Cue**: A trigger that tells your brain to go into automatic mode.
2. **The Routine**: The behavior itself (physical, mental, or emotional).
3. **The Reward**: The positive reinforcement that helps your brain decide if this loop is worth remembering.

### Keystone Habits

Keystone habits trigger widespread positive cascades across multiple areas of life. For example, establishing a regular exercise routine naturally leads to better nutrition, improved focus, and disciplined expenditure.`
  },
  "drive": {
    slug: "drive",
    title: "Drive: The Surprising Truth About Motivation",
    author: "Daniel H. Pink",
    year: "2009",
    tagline: "Autonomy, Mastery, and Purpose",
    summary: "Daniel Pink demonstrates that traditional extrinsic rewards (carrots and sticks) destroy creativity and intrinsic drive for modern cognitive work.",
    keyTakeaways: [
      "Motivation 2.0 (external rewards and punishments) only works for algorithmic, repetitive tasks.",
      "Motivation 3.0 relies on three intrinsic pillars: Autonomy, Mastery, and Purpose.",
      "Extrinsic rewards can extinguish intrinsic motivation, diminish performance, and crush creativity."
    ],
    protocolSteps: [
      "Increase personal autonomy over Task, Time, Technique, and Team.",
      "Set deliberate practice goals designed to foster continuous Mastery.",
      "Connect daily work routines to a clear overarching Purpose."
    ],
    markdownContent: `## The Triad of Intrinsic Motivation (Motivation 3.0)

### 1. Autonomy
The desire to direct our own lives. High performers require control over:

- **Task**: What they do.
- **Time**: When they do it.
- **Technique**: How they do it.
- **Team**: Who they do it with.

### 2. Mastery
The desire to get better and better at something that matters. Mastery is a mindset:

- It requires effort, deliberate practice, and embracing difficulty.
- It is an asymptote—you can approach it, but never fully touch perfection.

### 3. Purpose
The yearning to do what we do in the service of something larger than ourselves. Purpose provides the context and energy required for long-term perseverance.`
  },
  "mindset": {
    slug: "mindset",
    title: "Mindset: The New Psychology of Success",
    author: "Carol S. Dweck",
    year: "2006",
    tagline: "How We Can Learn to Fulfill Our Potential",
    summary: "Stanford psychologist Carol Dweck shows how our beliefs about our capabilities dictate our achievement, resilience, and personal growth.",
    keyTakeaways: [
      "Fixed Mindset assumes character, intelligence, and creative ability are static givens.",
      "Growth Mindset thrives on challenge and sees failure not as evidence of un-intelligence, but as a springboard for growth.",
      "Praising effort rather than intelligence fosters long-term resilience."
    ],
    protocolSteps: [
      "Reframe mistakes as diagnostic data rather than personal shortcomings.",
      "Add the word 'YET' to any limiting self-talk statement.",
      "Praise effort, strategy, and progress rather than inherent talent."
    ],
    markdownContent: `## Fixed vs Growth Mindset Principles

### Fixed Mindset
- Believes intelligence is static.
- Avoids challenges to prevent failure.
- Sees effort as proof of lack of talent.

### Growth Mindset
- Believes intelligence can be developed.
- Embraces challenges enthusiastically.
- Sees effort as the path to mastery.

### The Power of 'YET'

Whenever you find yourself thinking *"I don't know how to code"* or *"I'm not good at public speaking"*, append the word **YET**. This simple linguistic shift re-engages neuroplasticity and growth orientation.`
  },

  "nudge": {
    slug: "nudge",
    title: "Nudge",
    author: "Richard H. Thaler & Cass R. Sunstein",
    year: "2008",
    tagline: "Improving Decisions About Health, Wealth, and Happiness",
    summary: "Nudge explains how the way a choice is arranged can quietly influence what people do, without removing their freedom to choose something else. The book introduces choice architecture: designing the environment around a decision so that useful options are easier to notice, understand, and act on.",
    keyTakeaways: [
      "People are influenced by defaults, order, framing, feedback, and the effort required to act.",
      "A good choice architecture makes the desired action easy while preserving alternatives.",
      "Small design details matter because real people often make decisions with limited time, attention, and information.",
      "Nudges work best as complements to education, incentives, and sound institutions—not as substitutes for them."
    ],
    protocolSteps: [
      "Map the exact moment a decision is made and list every point of friction.",
      "Check the default: ask what happens when a person does nothing.",
      "Give immediate, understandable feedback so people can learn from their choices."
    ],
    visual: {
      title: "The Choice Architecture Map",
      subtitle: "Behavior changes when the environment changes the path of least resistance.",
      steps: ["Choice environment", "Attention + friction", "Perceived ease", "Behavior + feedback"],
      caption: "The person still chooses. The designer changes what is visible, easy, timely, and understandable around that choice."
    },
    artifact: {
      title: "Choice Architecture Audit",
      description: "Use this one-page audit before designing a form, app flow, classroom routine, onboarding process, or personal system.",
      items: [
        "What decision is the person actually trying to make?",
        "What happens if the person takes no action?",
        "Which option is easiest to see, understand, and complete?",
        "Where can a tiny amount of friction prevent a costly mistake?",
        "What feedback tells the person whether the choice worked?"
      ],
      prompt: "Pick one choice you control. Redesign the environment around it without removing anyone's freedom to choose another option."
    },
    markdownContent: `## The Big Idea: People Choose in Environments

It is tempting to describe behavior as if it begins inside the person: their personality, motivation, discipline, or intelligence. **Nudge** adds another layer. The setting around a decision is part of the decision.

Think about a cafeteria. The same food can be arranged in different places, the same options can be labelled differently, and the same payment process can make one action feel effortless and another annoying. The person remains free to choose, but the architecture of the choice has changed.

That is the central idea of **choice architecture**.

### Humans Are Not Perfect Calculators

The book works from a realistic picture of decision-making. People are busy. We forget things. We use rules of thumb. We notice what is vivid. We delay difficult actions. We often take the path that requires the least immediate effort.

This does not mean people are irrational all the time. It means that a useful system should be designed for real human limits rather than an imaginary perfect decision-maker.

### Defaults Are Powerful

A default is what happens when a person does nothing.

Imagine two systems. One requires a person to actively sign up for a useful option. The other includes the option by default but makes it easy to switch off. The alternatives may be identical, yet participation can differ because the effort is different.

A default is therefore not neutral. It is a decision built into the environment.

The important ethical question is not simply, "Which default gets more people to do what we want?" It is, **"Is the default transparent, easy to reverse, and aligned with the person's likely interests?"**

### Make Information Easier to Use

More information is not automatically better information.

A useful interface translates information into something the user can understand at the moment a choice is made. Good choice architecture improves **mapping** between an action and its consequence.

For example, "3,000 mg sodium" is a number. A clearer design can place the number beside a daily target and explain what it means in context.

The goal is not to trick the person into choosing. The goal is to make consequences easier to see.

## A Simple Nudge Design Formula

A practical way to remember the framework is:

**Notice → Understand → Act → Learn**

First, help the person notice the relevant option. Then make the meaning clear. Next, reduce unnecessary effort. Finally, provide feedback so the person can learn.

This turns a static menu into a learning environment.

### When Nudges Fail

A nudge can be badly designed.

If the interface hides important information, makes alternatives hard to find, or uses confusing language, it can create accidental behavior rather than informed behavior.

There is also a bigger limitation: some problems are structural. A reminder cannot solve a shortage of money. A better button cannot fix unsafe infrastructure. Behavioral design is powerful, but it is not magic.

## The Practical Lesson

When a behavior is not happening, do not immediately blame motivation.

Ask three questions:

1. **What does the environment currently make obvious?**
2. **What does the environment currently make easy?**
3. **What does the environment currently reward or make costly?**

Those questions move you from judging the person to inspecting the system.

That is the enduring value of the nudge framework: behavior is not only about what people want. It is also about what the surrounding environment makes simple, visible, timely, and understandable.`
  },

  "predictably-irrational": {
    slug: "predictably-irrational",
    title: "Predictably Irrational",
    author: "Dan Ariely",
    year: "2008",
    tagline: "The Hidden Forces That Shape Our Decisions",
    summary: "Predictably Irrational argues that many mistakes in human decision-making are not random accidents. People often make the same kinds of mistakes again and again because context, comparison, emotion, and expectations change how an option feels.",
    keyTakeaways: [
      "People judge options relative to reference points rather than in absolute terms.",
      "A free option can feel dramatically different from a merely cheap option.",
      "Social norms and market norms can motivate the same action in very different ways.",
      "Knowing a bias exists does not automatically make you immune to it."
    ],
    protocolSteps: [
      "Write down your first reference point before comparing alternatives.",
      "Separate the question 'What do I want?' from 'What am I comparing this with?'",
      "When emotion is intense, delay irreversible decisions and revisit them with a calmer process."
    ],
    visual: {
      title: "The Relativity Engine",
      subtitle: "The same option can feel different when the surrounding comparison set changes.",
      steps: ["Context", "Reference point", "Emotional frame", "Perceived value", "Choice"],
      caption: "The key question is often not only 'What is this worth?' but also 'Worth compared with what?'"
    },
    artifact: {
      title: "Decision Friction Sheet",
      description: "A tiny worksheet for catching contextual traps before an important purchase, commitment, or emotional decision.",
      items: [
        "What is my reference point right now?",
        "What would I choose if the comparison options disappeared?",
        "Am I treating 'free' as if it means 'no downside'?",
        "Am I mixing social expectations with financial incentives?",
        "What would I think about this choice tomorrow morning?"
      ],
      prompt: "Describe one current decision in one sentence. Now rewrite it without prices, rankings, competitors, or other people's reactions. Notice what changes."
    },
    markdownContent: `## The Big Idea: Irrationality Has Patterns

The phrase "irrational" can sound like chaos. Ariely's argument is more interesting: our mistakes are often **systematic**.

That means you can make the same kind of mistake repeatedly because the same psychological trigger appears repeatedly.

This is useful because patterns can be studied and designed around.

### We Compare More Than We Calculate

People often struggle to decide the absolute value of an option. Comparison is easier.

A salary may look attractive next to a smaller salary and disappointing next to a larger one. A product may look like a bargain because it is displayed beside an expensive product.

The number itself did not change. The **reference point** changed.

This is one reason menus, product pages, and negotiations often contain multiple options. Comparison changes perception.

### The Strange Power of Zero

Free is psychologically special.

If an option moves from a small positive price to zero, people can react as if the product itself became qualitatively different. The risk feels lower, the emotional appeal rises, and the cost calculation can become less careful.

The practical lesson is simple: **free is a decision trigger, not proof of value.**

When something is free, ask what you are actually giving up: money, attention, data, time, flexibility, or future commitment.

### Social Norms vs Market Norms

Some situations are governed mainly by social relationships. Others are governed mainly by transactions.

Imagine helping a friend move house. Your relationship may be damaged if you immediately turn the request into a price list. In a professional service context, money and contracts can make expectations clearer.

The same act can therefore feel generous in one frame and transactional in another.

Good systems make the governing norm explicit.

## Emotion Can Change the Decision-Maker

One of the book's useful ideas is the gap between how we imagine our behavior in a calm state and how we behave when highly emotional.

A calm person can promise to study late, skip dessert, save money, or leave a difficult argument. Then the emotional state arrives. Suddenly the immediate reward becomes louder than the long-term plan.

This suggests a practical rule: **do not build important systems that depend on your future self remaining perfectly calm.**

Use pre-commitments, defaults, timers, spending limits, or environmental barriers when the cost of an impulsive decision is high.

### Expectations Change Experience

Expectations do not merely describe the future. They can influence how we experience the present.

If a person expects a product, lesson, or experience to be excellent, ambiguous information may be interpreted more positively. A poor expectation can do the opposite.

This does not mean expectations create reality. It means perception is partly constructed by prediction.

For creators, teachers, and product designers, the lesson is powerful: **the story you tell before an experience can become part of the experience itself.**

### Ownership Changes What Things Feel Like

Once we start thinking of something as "ours," giving it up can feel more painful.

This appears in products we customize, objects we have spent time improving, and even ideas we have publicly defended.

Ownership therefore has a psychological dimension.

A practical defense is to evaluate the future value of an option without using the amount of effort already spent as proof that you should continue.

## The Practical Lesson

When a decision feels obvious, inspect the context.

Ask:

- What am I comparing this with?
- What reference point am I using?
- Has the word "free" changed my judgment?
- Am I making this decision while emotionally activated?
- Am I continuing because the option is good, or because I already invested in it?

The goal is not to become perfectly rational. The goal is to become better at recognizing the repeated situations in which your judgment predictably bends.`
  },

  "influence": {
    slug: "influence",
    title: "Influence",
    author: "Robert B. Cialdini",
    year: "1984",
    tagline: "The Psychology of Persuasion",
    summary: "Influence explains several recurring psychological principles that can make people more willing to say yes. The deeper lesson is not simply how persuasion works, but how fast mental shortcuts can be triggered—and how to pause long enough to inspect the situation.",
    keyTakeaways: [
      "Reciprocity makes an unexpected gift or favor feel like something that deserves a response.",
      "Commitment and consistency can pull later behavior toward earlier choices or statements.",
      "Social proof becomes more persuasive when we are uncertain and many similar people appear to agree.",
      "Authority, liking, and scarcity can act as shortcuts—but each should be checked rather than blindly trusted."
    ],
    protocolSteps: [
      "Identify which persuasion principle is being activated before responding.",
      "Ask whether the signal is relevant evidence or merely a shortcut.",
      "Create a pause between the persuasion trigger and your commitment."
    ],
    visual: {
      title: "The Persuasion Shortcut",
      subtitle: "A trigger can become a mental shortcut before deliberate evaluation begins.",
      steps: ["Persuasion cue", "Mental shortcut", "Automatic response", "Pause + verification", "Informed choice"],
      caption: "The pause is the key defensive move: detect the shortcut, then decide whether the underlying evidence actually deserves your trust."
    },
    artifact: {
      title: "Persuasion Defense Card",
      description: "Keep this mental checklist for sales pages, negotiations, social media, group pressure, and emotionally charged requests.",
      items: [
        "What exactly is being asked of me?",
        "Which persuasion principle is being triggered?",
        "What independent evidence supports the claim?",
        "Would I agree if the urgency or social pressure disappeared?",
        "What happens if I wait 24 hours?"
      ],
      prompt: "When you notice a powerful persuasion cue today, name it before acting. Naming the mechanism creates a useful moment of distance."
    },
    markdownContent: `## Why Persuasion Works So Quickly

Human beings cannot deeply analyze every request they receive. We use shortcuts.

If a respected expert recommends something, we may give the recommendation more weight. If many people appear to choose an option, it can feel safer. If something looks scarce, we may assume it is valuable.

These shortcuts can be useful. They become dangerous when the signal is manipulated or irrelevant.

## Reciprocity: "You Did Something for Me"

People generally feel pressure to return favors.

This can support healthy relationships: generosity creates trust. But it can also create a false sense of obligation.

A useful boundary is to separate **gratitude** from **agreement**.

You can appreciate a favor without owing someone a purchase, commitment, or yes.

### Commitment and Consistency

Once people publicly state a position, they often feel pressure to behave consistently with it.

Consistency is normally useful. It allows people to maintain stable identities and relationships.

The trap appears when the first commitment was made casually, under pressure, or without enough information.

A practical habit is to give yourself permission to revise a previous decision when new evidence appears.

Changing your mind is not automatically inconsistency. Sometimes it is learning.

### Social Proof

When uncertain, people often look sideways.

"What are people like me doing?"

This is especially powerful when the situation is ambiguous and the group appears similar to us.

But popularity is not the same as truth.

A long queue may tell you that many people want something. It does not tell you whether the product is safe, suitable, or worth the price.

Use social proof as a clue, not a substitute for evidence.

### Liking

We are generally more open to people we like.

Similarity, familiarity, compliments, shared identity, and repeated contact can increase liking.

Liking is not bad. It becomes a problem when positive feelings silently become evidence.

Ask: **Do I like this person, and separately, is this claim well supported?**

### Authority

Credentials can compress complex information.

A qualified expert can save enormous time.

The mistake is treating every appearance of expertise as proof.

When authority matters, check whether the person's expertise matches the exact claim being made. A famous person in one field is not automatically authoritative in another.

### Scarcity

Scarcity can increase attention and desire.

Limited seats, expiring offers, rare objects, and disappearing availability all create urgency.

The defensive question is simple:

**"Would I still want this if it were available tomorrow?"**

If the answer collapses, urgency may have been doing most of the persuasive work.

## The Ethical Core

The most useful way to study persuasion is to understand both sides.

For creators, the principles explain why messages sometimes cut through noise.

For audiences, the same principles become a defense system.

Good persuasion helps a person make a decision that they would still endorse after the emotional trigger disappears.

That is the standard worth using when evaluating any influence attempt.

## A Better Habit: Name the Shortcut

The next time a page makes you feel, "I need this right now," stop.

Name the trigger.

"Scarcity."

"Authority."

"Social proof."

"Reciprocity."

Then ask whether the underlying evidence survives after the label is removed.

That tiny pause is often more valuable than trying to memorize a hundred persuasion tricks.`
  },

  "thinking-in-bets": {
    slug: "thinking-in-bets",
    title: "Thinking in Bets",
    author: "Annie Duke",
    year: "2018",
    tagline: "Making Smarter Decisions When You Don't Have All the Facts",
    summary: "Thinking in Bets teaches a powerful distinction: a good decision can produce a bad outcome, and a bad decision can sometimes get lucky. Better decision-making therefore requires separating decision quality from outcome quality and treating beliefs as probabilities that can be updated.",
    keyTakeaways: [
      "An outcome does not prove that the decision was good or bad.",
      "Uncertainty is not a weakness; it is a feature of real decisions.",
      "Thinking in probabilities makes beliefs easier to update.",
      "A decision journal helps reveal whether you were reasoning well before the result became known."
    ],
    protocolSteps: [
      "Write your decision, evidence, assumptions, and confidence before acting.",
      "Define what evidence would change your mind.",
      "Review the process separately from the outcome after the uncertainty resolves."
    ],
    visual: {
      title: "The Decision Loop",
      subtitle: "A result is evidence about the process—not a perfect grade on the process.",
      steps: ["Evidence", "Belief + probability", "Decision", "Outcome", "Process review"],
      caption: "The same outcome can come from skill or luck. Reviewing the path protects you from judging your past reasoning only with hindsight."
    },
    artifact: {
      title: "Decision Bet Slip",
      description: "A compact template for important decisions in study, work, money, projects, and relationships.",
      items: [
        "Decision: what exactly am I choosing?",
        "Evidence: what facts do I actually know?",
        "Unknowns: what important information is missing?",
        "Confidence: what probability do I assign to my preferred outcome?",
        "Update rule: what new evidence would make me change course?"
      ],
      prompt: "Before a meaningful decision, write your confidence percentage. Revisit it later. The goal is calibration, not looking clever in hindsight."
    },
    markdownContent: `## The Core Shift: From Certainty to Probability

Many decisions are not multiple-choice questions with a hidden correct answer.

They are bets.

You choose a project because you think it has a strong chance of working. You study a topic because you believe it will matter. You hire someone because you estimate they can perform the job well.

At the moment of choice, the future is unknown.

Thinking in bets means treating your belief as a **probability**, not as a permanent fact.

### Good Decisions Can Lose

Imagine two people making a difficult decision.

Person A has strong evidence, considers alternatives, and chooses carefully. A rare event then causes the plan to fail.

Person B ignores the evidence and makes a careless choice. By chance, it works.

If you judge only by the result, Person B looks smarter.

That is **resulting**: judging decision quality primarily from the outcome.

The danger is obvious. It rewards luck and punishes careful reasoning when chance is involved.

## Decision Quality vs Outcome Quality

A better review asks:

**"Given what I knew then, was my process reasonable?"**

This does not mean outcomes are irrelevant. Outcomes are feedback. But they are not a perfect score.

A failed experiment can still be excellent science if the hypothesis was clear and the test was informative.

A successful product launch can still be the result of weak reasoning if the market happened to move in the creator's favor.

### The Power of Writing Before You Know

Hindsight changes memory.

Once the result is visible, the result feels more predictable than it really was.

A simple defense is to write your reasoning before the outcome occurs.

Record:

- what you know,
- what you believe,
- what you are unsure about,
- what you expect to happen,
- and how confident you are.

Later, compare the record with reality.

This creates a feedback loop for your thinking.

## Beliefs Should Be Updateable

A good belief is not one you defend forever.

It is one you can change when evidence changes.

That requires a language shift.

Instead of saying:

"This project will definitely work."

Try:

"I think there is a 70% chance this project works, based on these three signals."

The second statement feels less dramatic, but it gives your brain somewhere to go.

New evidence can move 70% to 50%, or 85%, without forcing you to protect your identity.

### Separate Facts From Stories

In uncertain decisions, people often mix observation and interpretation.

"The user left after one session" is an observation.

"The user hated the product" is an interpretation.

"The market will fail" is a prediction.

Keeping these categories separate makes it easier to update.

## Build an Update Rule

Before acting, decide what evidence would change your mind.

For example:

- If fewer than 5% of users return in a week, I will rethink the onboarding.
- If three independent tests reproduce the failure, I will stop blaming random noise.
- If the evidence reaches a specific threshold, I will change the plan.

This prevents moving the goalposts after the evidence arrives.

## The Practical Lesson

You do not need certainty to make good decisions.

You need a repeatable process for handling uncertainty.

Write before the result. Use probabilities. Separate evidence from interpretation. Review the process, not only the outcome.

Over time, this turns decision-making into a trainable skill rather than a personality trait.`
  },

  "scout-mindset": {
    slug: "scout-mindset",
    title: "The Scout Mindset",
    author: "Julia Galef",
    year: "2021",
    tagline: "Why Some People See Things Clearly and Others Don't",
    summary: "The Scout Mindset explores the difference between defending a position and trying to understand reality. Galef uses the metaphor of a scout: someone whose job is to build the clearest possible map, including terrain they would prefer not to see.",
    keyTakeaways: [
      "The goal of thinking should be accurate understanding, not protecting a team, identity, or argument.",
      "Curiosity makes uncomfortable evidence easier to investigate.",
      "Confidence should be separable from identity: being wrong about a claim does not make you a bad person.",
      "Good thinkers actively search for disconfirming evidence instead of waiting for it to attack them."
    ],
    protocolSteps: [
      "Write the strongest reason your current belief could be wrong.",
      "Search for evidence that would surprise you if your position were correct.",
      "When correcting yourself, describe the update as learning rather than losing."
    ],
    visual: {
      title: "Map-Making Instead of Winning",
      subtitle: "Scout thinking treats beliefs as maps that can be improved.",
      steps: ["Claim", "Test the map", "Find mismatch", "Update belief", "Act on the better map"],
      caption: "The target is not intellectual victory. It is a more accurate model of the territory you must navigate."
    },
    artifact: {
      title: "Scout Check",
      description: "Run these five questions before a heated debate, major assumption, or identity-heavy belief.",
      items: [
        "What evidence would genuinely change my mind?",
        "What is the strongest argument against my position?",
        "Am I defending a fact, a prediction, or an identity?",
        "What part of the other side do I think is actually true?",
        "What would I believe if nobody knew my answer?"
      ],
      prompt: "Choose one belief you feel unusually attached to. Write the best case against it without sarcasm. Then mark which parts you accept."
    },
    markdownContent: `## The Scout and the Soldier

The metaphor is simple.

A **soldier** thinks about winning and defending.

A **scout** thinks about seeing accurately.

Both can be intelligent. The difference is what intelligence is being used for.

When we enter a disagreement as soldiers, facts can become ammunition. We notice evidence that helps our side and explain away evidence that hurts it.

The scout has a different objective: **build the clearest map possible.**

### The Hidden Problem: Identity

Many beliefs are connected to identity.

"I am a smart person."

"I am a loyal member of this group."

"People like me believe this."

Once a belief becomes part of identity, changing the belief can feel like losing status or becoming disloyal.

The scout mindset separates the two.

You can say:

"I believed X. New evidence suggests Y. I changed my mind."

The update is not a moral failure. It is a normal part of learning.

## Accuracy Needs Curiosity

People are often told to "be objective." That sounds useful but incomplete.

A person can sincerely want objectivity while still avoiding the information that would challenge them.

Curiosity is more practical.

Ask:

**"What would I discover if I investigated the part of this story that makes me uncomfortable?"**

This creates movement.

### The Disconfirmation Habit

A common error is looking only for evidence that confirms a hypothesis.

The scout asks the opposite question too.

**"What would I expect to see if I were wrong?"**

That question turns vague disagreement into a test.

For example, suppose you believe a new study method works brilliantly.

Instead of collecting only good study sessions, define failure signals:

- Did retention actually improve?
- Did performance rise on unfamiliar questions?
- Did the effect survive when motivation was lower?

Now your belief can be tested.

## Confidence Without Stubbornness

You can be confident and still update.

Confidence should describe the strength of the current evidence, not the strength of your attachment.

A useful mental model is:

**Belief = current estimate, not permanent identity.**

That small change makes uncertainty less threatening.

### Emotional Reactions Are Information

A strong emotional reaction to evidence does not prove the evidence is correct.

But it can tell you something about yourself.

If one sentence makes you unusually angry, defensive, or eager to dismiss the source, ask:

**"What would it mean about me if this were true?"**

Sometimes the barrier is not the evidence. It is the identity cost of accepting the evidence.

## The Practical Lesson

Scout thinking is not about being neutral about everything.

It is about being willing to inspect your own map.

You can hold strong values, make decisions quickly, and still ask:

- What am I missing?
- What would change my mind?
- What part of this opposing view is accurate?
- Am I trying to understand, or merely win?

The reward is not that you become impossible to fool.

The reward is that your map becomes more useful every time reality disagrees with it.`
  },

  "paradox-of-choice": {
    slug: "paradox-of-choice",
    title: "The Paradox of Choice",
    author: "Barry Schwartz",
    year: "2004",
    tagline: "Why More Is Less",
    summary: "The Paradox of Choice examines how an abundance of options can increase the mental work of deciding. More freedom can create more comparison, more opportunity cost, higher expectations, and greater regret—especially when people feel that they should find the perfect option.",
    keyTakeaways: [
      "More options do not always create more satisfaction.",
      "Maximizers search for the best possible option; satisficers use a good-enough threshold.",
      "Opportunity cost becomes more visible as the option set grows.",
      "Decision rules and constraints can protect attention without eliminating meaningful freedom."
    ],
    protocolSteps: [
      "Define what 'good enough' means before comparing options.",
      "Set a maximum search window for low-stakes decisions.",
      "Use a small set of criteria instead of trying to optimize every dimension."
    ],
    visual: {
      title: "The Choice Overload Curve",
      subtitle: "As the menu grows, the decision can become harder even when freedom increases.",
      steps: ["More options", "More comparison", "More opportunity cost", "More decision effort", "Lower confidence"],
      caption: "The point is not that many options are always bad. The useful question is whether the extra choice adds value or simply adds cognitive work."
    },
    artifact: {
      title: "Choice Budget",
      description: "A practical rule-set for protecting attention when a decision has far more options than it deserves.",
      items: [
        "Define the outcome you actually need.",
        "Choose 3–5 criteria that matter most.",
        "Set a maximum number of options to compare.",
        "Choose a clear good-enough threshold.",
        "Stop searching once the threshold is met."
      ],
      prompt: "For your next low-stakes decision, set a timer before searching. When the timer ends, pick the first option that meets your predefined criteria."
    },
    markdownContent: `## Freedom Has a Cognitive Cost

It sounds strange to criticize choice.

More options can increase freedom. But freedom can also create work.

A larger menu means more things to compare, more paths not taken, and more opportunities to wonder whether a different option would have been better.

The paradox is not that choice is bad.

The paradox is that **more choice can require more from the chooser.**

### Maximizers and Satisficers

Schwartz describes two broad decision styles.

A **maximizer** tries to find the best option.

A **satisficer** decides using a threshold: once an option is good enough on the important dimensions, the search can stop.

Neither style is automatically correct.

The problem appears when every decision is treated like a life-defining optimization problem.

Choosing a laptop for a short trip does not need the same research process as choosing a long-term career.

## Opportunity Cost Becomes Loud

Every choice closes other possibilities.

With three options, the trade-off may feel manageable.

With three hundred, the invisible alternatives can become psychologically exhausting.

You start imagining the perfect option you might be missing.

That can reduce satisfaction even after a good decision.

The product is fine. The experience is good. Yet the brain asks:

"Was there something better?"

### The Expectation Trap

More options can raise expectations.

When there are only two restaurants nearby, a good meal can simply be a good meal.

When there are thousands of reviews, menus, videos, ratings, and alternatives, the mind can start expecting the perfect dinner.

A satisfactory outcome then feels disappointing because the search implied that perfection was available.

The issue is not merely the quality of the result. It is the gap between **expected** and **experienced** quality.

## Constraints Can Be Liberating

A useful constraint is not always a loss of freedom.

Sometimes it is protection for attention.

For example:

- Pick from the first five well-reviewed options.
- Research for 20 minutes.
- Compare only three criteria.
- Choose the first option that reaches your threshold.

These rules prevent tiny decisions from consuming an unlimited amount of mental energy.

### The Good-Enough Threshold

The threshold should be specific.

"Choose something good" is vague.

"A hotel under my budget, within 2 km of the venue, with a rating above my minimum, and free cancellation" is concrete.

Once one option meets the criteria, more search may have diminishing value.

That is the real purpose of satisficing: not laziness, but **attention management**.

## When More Choice Is Actually Useful

Choice overload should not be turned into a universal rule.

For some decisions, variety is valuable because preferences differ dramatically or because the cost of a wrong choice is high.

The better lesson is proportionality:

**The size of your decision process should match the size of the decision.**

## The Practical Lesson

You can design your own choice environment.

Limit the number of tabs.

Predefine the criteria.

Set a research deadline.

Use defaults.

Decide what "good enough" means before you become attached to perfect.

A smaller decision surface can create more mental space for the decisions that actually deserve deep thought.

The paradox of choice is therefore also a lesson about attention: every option has a cognitive price, even when it costs no money.`
  },

};
