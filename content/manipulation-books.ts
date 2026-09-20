import type { BookDetail } from "../lib/book-types";

export const manipulationBooksData: Record<string, BookDetail> = {
  "48-laws-of-power": {
    slug: "48-laws-of-power",
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    year: "1998",
    tagline: "An Observational Field Guide to Power, Status, and Human Strategy",
    summary: "Robert Greene's The 48 Laws of Power is a deliberately provocative survey of recurring power patterns drawn from history and court politics. It is most useful here as a defensive map of status, reputation, information, attention, timing, and social strategy rather than as a literal instruction manual.",
    keyTakeaways: [
      "Power often depends on perception as much as formal authority.",
      "Reputation, visibility, timing, alliances, and emotional control can shape social outcomes.",
      "The same behavior that looks strategic from one side can look exploitative from the other.",
      "Power awareness is most useful when it improves judgment without replacing personal values."
    ],
    protocolSteps: [
      "Notice when a normal interaction suddenly becomes status-sensitive.",
      "Separate stated goals from the incentives created by the situation.",
      "Document important agreements instead of relying on vague promises."
    ],
    visual: {
      title: "The Power Game Radar",
      subtitle: "Read the environment before reacting to the performance happening inside it.",
      steps: ["Status signal", "Hidden incentive", "Pressure move", "Your leverage", "Boundary or response"],
      caption: "The defensive advantage comes from seeing the game without becoming trapped inside it."
    },
    artifact: {
      title: "Power-Dynamics Field Note",
      description: "Use this after a confusing meeting, negotiation, friendship shift, or workplace conflict.",
      items: [
        "Who gains if the current story is believed?",
        "What resource is actually scarce: money, attention, status, information, or access?",
        "What behavior is rewarded in this environment?",
        "Which part of the situation is explicit and which part is implied?",
        "What boundary would reduce the game's leverage over me?"
      ],
      prompt: "Describe the situation using observable actions, incentives, and consequences instead of labels."
    },
    markdownContent: `## Read It as a Map, Not a Moral Manual

The 48 Laws of Power is theatrical on purpose. Greene collects historical episodes and turns them into memorable principles about status, reputation, attention, timing, and conflict.

A healthier modern reading is defensive: **notice the pattern before the pattern notices you.**

### Power Is Often About Perception

People respond not only to what someone can technically do, but also to signals.

Confidence can look like competence. Silence can look like control. Public praise can raise status. A rumor can damage a reputation before anyone checks it.

That creates a second layer of social reality:

**What happened?**

and

**What does everyone think happened?**

### Information Is a Resource

Information can be unevenly distributed. One person may know the real constraint, the deadline, the budget, or the decision-maker.

When information is incomplete, people fill gaps with assumptions.

The defensive lesson is boring and powerful: write down decisions, deadlines, responsibilities, and definitions.

### Reputation Compounds

A reputation is a pattern remembered by other people.

The most useful signals are often mundane:

- whether you keep commitments,
- whether you stay calm when challenged,
- whether you take responsibility,
- whether you gossip,
- whether your behavior changes depending on status.

### The Most Useful Question

When a situation feels politically complicated, ask:

**"What does this environment reward?"**

A system that rewards blame will produce blame. A system that rewards visibility will produce self-promotion. A system that punishes uncertainty may produce confident-sounding nonsense.

The book becomes far more valuable when used as a warning system instead of a permission slip for manipulation.`
  },

  "laws-of-human-nature": {
    slug: "laws-of-human-nature",
    title: "The Laws of Human Nature",
    author: "Robert Greene",
    year: "2018",
    tagline: "A Tour of the Hidden Motives Behind Human Behavior",
    summary: "The Laws of Human Nature examines recurring emotional and social patterns that can distort how people see themselves and one another. Greene discusses irrationality, narcissism, group pressure, envy, aggression, and the masks people wear in social life.",
    keyTakeaways: [
      "People can be driven by motives they do not openly acknowledge.",
      "Strong emotions can narrow perception and make short-term impulses feel like objective truth.",
      "Understanding incentives is different from approving behavior.",
      "Self-awareness matters because your own blind spots can become leverage points."
    ],
    protocolSteps: [
      "Identify the emotion dominating your attention before reacting.",
      "Ask what the other person might gain, fear, or protect.",
      "Check whether your interpretation comes from one dramatic event or a broader pattern."
    ],
    visual: {
      title: "The Hidden-Motive Stack",
      subtitle: "What someone says is only one layer of a social interaction.",
      steps: ["Visible behavior", "Emotion", "Identity", "Incentive", "Context"],
      caption: "These deeper layers are hypotheses to test, not facts to assume."
    },
    artifact: {
      title: "Human Nature Decoder",
      description: "A five-question worksheet for confusing interpersonal situations.",
      items: [
        "What did the person actually do or say?",
        "What emotion is driving me right now?",
        "What incentive could plausibly explain the behavior?",
        "What alternative explanation fits the same evidence?",
        "What would I need to observe before becoming confident?"
      ],
      prompt: "Write two competing explanations for the same behavior. Keep both alive until evidence separates them."
    },
    markdownContent: `## Behavior Has More Than One Layer

A person may say, "I'm doing this for the team," while also wanting recognition. Someone may claim not to care about status while reacting strongly when another person gets praised.

That does not prove deception.

It shows why behavior is easier to understand over time than from one sentence.

### Emotion Changes the Lens

Anger makes hostile explanations easier to access.

Fear makes threats more visible.

Envy makes comparison more salient.

Excitement can make weak opportunities look obvious.

A useful question is:

**"Would I interpret this the same way if I were calm?"**

### Patterns Beat Impressions

Look across events:

- Does the person take responsibility?
- Do they change their story when challenged?
- Do they treat low-status people differently?
- Do promises match later behavior?
- Do they become warm mainly when they need something?

No single signal proves a hidden motive. Repetition is more informative.

## The Practical Lesson

Understanding motives is not mind reading. It is hypothesis formation.

Use language such as "one possibility is..." and "I may be missing context..." so that the map can still change.`
  },

  "art-of-seduction": {
    slug: "art-of-seduction",
    title: "The Art of Seduction",
    author: "Robert Greene",
    year: "2001",
    tagline: "A Historical Study of Attraction, Attention, and Influence",
    summary: "The Art of Seduction studies how attention, mystery, emotional contrast, self-presentation, and perceived desirability can shape attraction. The safest modern use is as a study of social influence and the ways attraction can blur judgment.",
    keyTakeaways: [
      "Attention is a powerful social resource.",
      "Novelty, confidence, mystery, and emotional intensity can amplify attraction.",
      "Attraction can make warning signs easier to rationalize.",
      "Healthy relationships still require reciprocity, consent, and clear boundaries."
    ],
    protocolSteps: [
      "Separate chemistry from compatibility when evaluating a relationship.",
      "Notice when intensity is increasing faster than trust and knowledge.",
      "Keep independent friendships, routines, and judgment when attraction is strong."
    ],
    visual: {
      title: "The Attraction Filter",
      subtitle: "Strong attraction can change which evidence feels important.",
      steps: ["Attention", "Novelty", "Emotional intensity", "Idealization", "Reality check"],
      caption: "Return to observable behavior after the emotional spotlight becomes bright."
    },
    artifact: {
      title: "Chemistry vs Compatibility Sheet",
      description: "Use this when a new person feels unusually compelling.",
      items: [
        "What do I actually know about this person?",
        "What am I imagining or projecting?",
        "Do actions match words over time?",
        "Can I disagree safely and still feel respected?",
        "Would I make the same decision without the emotional high?"
      ],
      prompt: "Write two columns: 'Observed' and 'Imagined.' Do not put a fact in the second column."
    },
    markdownContent: `## Attraction Is Attention Plus Story

Greene's historical examples show how people become magnetic because they seem unusual, confident, unavailable, mysterious, or intensely attentive.

The modern lesson is:

**Notice what your attention is doing.**

### Mystery Creates Gaps

When information is incomplete, the brain fills gaps.

A person who reveals little may appear deeper than they are because the mind supplies the missing qualities.

### The Idealization Loop

Attraction can create a loop:

**Interest → selective attention → idealization → stronger interest**

Once the loop starts, inconsistent evidence may be discounted because the mind wants the story to remain coherent.

A practical defense is to keep collecting ordinary evidence:

How do they treat people when tired? How do they respond to "no"? Do they keep small promises?

### Keep Reality in the Room

Healthy attraction can coexist with disagreement, independent time, uncertainty, and boundaries.

The useful question is not only "How strongly do I feel?"

Also ask:

**"What pattern am I actually experiencing?"**`
  },

  "games-people-play": {
    slug: "games-people-play",
    title: "Games People Play",
    author: "Eric Berne",
    year: "1964",
    tagline: "Hidden Scripts Inside Everyday Human Interactions",
    summary: "Eric Berne's classic introduces transactional analysis and the idea that some interactions follow recognizable patterns with hidden payoffs. The Parent, Adult, and Child model provides a simple language for noticing repetitive communication loops.",
    keyTakeaways: [
      "Some conversations become repetitive because people replay familiar interaction scripts.",
      "The Parent, Adult, and Child model is a communication lens rather than a complete personality theory.",
      "Hidden payoffs can keep unhealthy interaction cycles alive.",
      "The goal is clearer communication, not winning the game."
    ],
    protocolSteps: [
      "Notice when a conversation becomes strangely repetitive.",
      "Restate the concrete issue instead of responding to the emotional script.",
      "Ask for a direct request instead of guessing at hidden expectations."
    ],
    visual: {
      title: "Transaction Loop",
      subtitle: "A conversation can become a script instead of an exchange of information.",
      steps: ["Trigger", "Ego-state response", "Counter-response", "Hidden payoff", "Repeat"],
      caption: "Breaking the loop usually begins with changing the kind of response."
    },
    artifact: {
      title: "Conversation Loop Breaker",
      description: "A practical script for meetings, family arguments, and recurring misunderstandings.",
      items: [
        "What is the factual issue?",
        "What emotional role am I being invited to play?",
        "What would an Adult-to-Adult question sound like?",
        "Can the request be said directly?",
        "What response would end the loop?"
      ],
      prompt: "Replace one accusation with one observable fact and one concrete request."
    },
    markdownContent: `## Why Some Conversations Feel Like Scripts

Someone complains. The other person rescues. The rescue creates resentment. The resentment creates another complaint.

Nothing important changes.

Berne called these repeated patterns games.

### Parent, Adult, Child

Transactional analysis describes three broad communication states:

- **Parent**: rules, judgments, protection, inherited scripts.
- **Adult**: present-focused information processing.
- **Child**: emotion, spontaneity, adaptation, rebellion.

They are not fixed personality boxes. They are a vocabulary for noticing shifts in communication.

### Hidden Payoffs

A frustrating interaction may still provide attention, rescue, moral superiority, or a reason to avoid responsibility.

You do not need to prove the hidden motive.

If the pattern repeatedly produces the same result, that is enough reason to change the response.

### Break the Script

Instead of:

"You never help."

Try:

"I need the report by 4 PM. Can you do it?"

The second sentence creates a decision instead of an emotional stage.`
  },

  "emotional-blackmail": {
    slug: "emotional-blackmail",
    title: "Emotional Blackmail",
    author: "Susan Forward with Donna Frazier",
    year: "1997",
    tagline: "When Fear, Obligation, and Guilt Become Leverage",
    summary: "Emotional Blackmail examines coercive relationship patterns in which fear, obligation, and guilt are used to push someone into compliance. Forward focuses on recognizing pressure, rebuilding boundaries, and tolerating the discomfort that can come with changing an established pattern.",
    keyTakeaways: [
      "Fear, obligation, and guilt can become powerful levers in close relationships.",
      "Pressure works partly because the target already cares about the relationship.",
      "A boundary is a statement about your behavior, not a way to control another person.",
      "Breaking the cycle often requires tolerating short-term discomfort."
    ],
    protocolSteps: [
      "Name the request without accepting the emotional framing around it.",
      "Decide what you can genuinely agree to before negotiating.",
      "Repeat the boundary calmly instead of escalating the argument."
    ],
    visual: {
      title: "The FOG Cycle",
      subtitle: "Pressure gets stronger when fear, obligation, and guilt blur the original choice.",
      steps: ["Demand", "FOG pressure", "Compliance", "Temporary peace", "Reinforced pattern"],
      caption: "A boundary changes the response after the pressure arrives."
    },
    artifact: {
      title: "Boundary Builder",
      description: "A short template for turning a vague emotional fight into a clear boundary.",
      items: [
        "What exactly is being requested?",
        "What part of my answer is genuine agreement?",
        "What part comes from fear, guilt, or obligation?",
        "What can I realistically offer?",
        "What will I repeat if pressure continues?"
      ],
      prompt: "I understand that you want ____. I am willing to ____, but I am not willing to ____."
    },
    markdownContent: `## Manipulation Works Through Relationships

A stranger's demand can often be ignored. A parent's disappointment, partner's anger, friend's threat to withdraw, or manager's emotional pressure can feel far more difficult.

Forward describes a recurring pattern using **fear, obligation, and guilt**.

### Feelings Are Not Contracts

Someone is allowed to be disappointed.

Someone is allowed to be angry.

Someone is allowed to say they dislike your choice.

None of those feelings automatically create an obligation for you to comply.

A useful boundary separates:

**"You can feel this."**

from

**"You are not automatically entitled to the behavior you want from me."**

### Why Boundaries Feel Wrong at First

People who are used to over-accommodating may experience ordinary boundaries as selfishness.

That discomfort does not prove the boundary is wrong.

The relationship may simply be adjusting to a new pattern.

## The Practical Lesson

Calm repetition often works better than a long defense:

"I understand."

"My answer is still no."

"I can do X, not Y."

"You can be upset, and I will keep the boundary."

The goal is not to win. It is to stop using your nervous system as the payment method for someone else's demand.`
  },

  "gaslight-effect": {
    slug: "gaslight-effect",
    title: "The Gaslight Effect",
    author: "Dr. Robin Stern",
    year: "2007",
    tagline: "How Hidden Manipulation Can Make You Doubt Your Own Perception",
    summary: "The Gaslight Effect explores relationships in which repeated dismissal, distortion, or rewriting of events can make someone doubt memory, judgment, or emotional reactions. Stern emphasizes recognizing the process and rebuilding confidence in one's own perceptions.",
    keyTakeaways: [
      "Gaslighting often develops gradually rather than as one dramatic event.",
      "Repeated second-guessing can weaken confidence in memory and judgment.",
      "Documentation and outside perspectives can provide useful reality checks.",
      "The goal is not to win every argument; it is to regain a stable sense of what you experience."
    ],
    protocolSteps: [
      "Write down important events in neutral language while they are fresh.",
      "Talk to a trusted, independent person who is not invested in the conflict.",
      "Pay attention to repeated patterns rather than trying to prove one isolated memory."
    ],
    visual: {
      title: "The Reality-Doubt Spiral",
      subtitle: "Repeated invalidation can change the argument and your confidence in yourself.",
      steps: ["Event", "Deny or distort", "Self-doubt", "Over-explaining", "More vulnerability"],
      caption: "External reality checks and clear boundaries can interrupt the loop."
    },
    artifact: {
      title: "Reality Check Log",
      description: "A neutral record designed for clarity, not revenge.",
      items: [
        "What happened, using observable facts?",
        "What did I feel or remember?",
        "What did the other person claim happened?",
        "What evidence exists outside the disagreement?",
        "What pattern appears across multiple events?"
      ],
      prompt: "Do not write 'they are gaslighting me.' Write what happened and let the pattern emerge."
    },
    markdownContent: `## Gaslighting Is a Process

You remember something one way.

The other person confidently says it never happened.

You start checking yourself.

Then you begin trusting their interpretation more than your own.

Stern's framework is useful because it treats this as a process rather than a single clever lie.

### Repeated Doubt Is Powerful

Human memory is imperfect.

That fact can create an unhealthy asymmetry when every disagreement becomes:

"Are you sure?"

"You're remembering it wrong."

"You're too sensitive."

The person may stop asking, "What happened?" and start asking, "Am I the problem?"

### Documentation Is a Reality Tool

Writing things down is not about building a courtroom case for every conversation.

It is about preserving memory when confidence keeps being destabilized.

Dates. Decisions. Promises. Messages. Observable events.

## The Practical Lesson

You do not need perfect certainty before setting a boundary.

"I remember it differently."

"I need time to check the facts."

"I am going to speak with someone I trust."

Healthy relationships can tolerate questions. A relationship that requires constant surrender of your perception deserves careful examination.`
  },

  "in-sheeps-clothing": {
    slug: "in-sheeps-clothing",
    title: "In Sheep's Clothing",
    author: "George K. Simon",
    year: "1996",
    tagline: "Understanding and Dealing with Manipulative People",
    summary: "George Simon's In Sheep's Clothing focuses on covert aggression, manipulative behavior, and the difficulty of spotting harmful conduct when it is packaged as politeness, concern, or plausible deniability.",
    keyTakeaways: [
      "Manipulation can hide behind apparently reasonable language.",
      "Covert aggression can work through confusion, guilt, or denial rather than open confrontation.",
      "Intent is difficult to prove; behavior and consequences are easier to observe.",
      "Boundaries become stronger when they are specific and behavior-based."
    ],
    protocolSteps: [
      "Describe the behavior instead of diagnosing the person.",
      "Refuse to debate motives when the observable action is already clear.",
      "State the boundary and the consequence you actually control."
    ],
    visual: {
      title: "The Plausibility Shield",
      subtitle: "Manipulation becomes harder to challenge when the surface explanation sounds reasonable.",
      steps: ["Harmful action", "Plausible explanation", "Target doubts self", "Pattern repeats", "Boundary breaks"],
      caption: "Do not wait for certainty about motive. Respond to the behavior you can observe."
    },
    artifact: {
      title: "Behavior-First Checklist",
      description: "A practical alternative to trying to diagnose somebody's personality.",
      items: [
        "What behavior occurred?",
        "What effect did it have?",
        "Was the behavior repeated?",
        "Did a direct request change anything?",
        "What boundary can I enforce without controlling the person?"
      ],
      prompt: "Replace 'What kind of person is this?' with 'What pattern am I experiencing?'"
    },
    markdownContent: `## Why Manipulation Can Look Reasonable

Covert aggression is difficult partly because it sounds ordinary.

A person says they were "only helping."

A colleague says they "misunderstood."

A friend says you are "overreacting."

Any one sentence may be harmless.

The important signal is repetition plus consequences.

### Behavior Beats Mind Reading

You may never know what another person intended.

You can know that they repeatedly changed commitments, shared private information, undermined your work, or pushed after a clear no.

That is enough to respond.

### Plausible Deniability

One comment is "a joke."

One missed deadline is "an accident."

One disclosure is "I was worried about you."

The pattern becomes visible only when you look across events.

## The Practical Lesson

Boundaries do not require courtroom-level certainty.

"That does not work for me."

"I need that agreement in writing."

"I am not discussing motives. I am discussing what happened."

The more concrete the language, the less room there is for the conversation to become a debate about whether your feelings are legitimate.`
  },

  "confidence-game": {
    slug: "confidence-game",
    title: "The Confidence Game",
    author: "Maria Konnikova",
    year: "2016",
    tagline: "Why Con Artists Can Turn Trust Into a Weapon",
    summary: "The Confidence Game examines how con artists build trust, create emotional investment, and make implausible stories feel believable. Konnikova's central lesson is that ordinary preferences for coherence, hope, familiarity, and trust can be exploited.",
    keyTakeaways: [
      "Con artists sell a story about who they are before they sell the product or opportunity.",
      "Trust can become an emotional investment that people resist abandoning.",
      "Sunk costs and embarrassment can keep people inside a failing story.",
      "Selective skepticism is healthier than treating everyone as a potential con."
    ],
    protocolSteps: [
      "Verify high-stakes claims independently of the person presenting them.",
      "Treat urgency and secrecy as reasons to slow down.",
      "Create a stop rule before additional losses become emotional."
    ],
    visual: {
      title: "The Confidence Loop",
      subtitle: "Trust can grow before the evidence has earned it.",
      steps: ["Charm", "Trust", "Small commitment", "Escalation", "Loss + rationalization"],
      caption: "The earliest verification step is usually the easiest; later, sunk costs make updating harder."
    },
    artifact: {
      title: "Con-Resistance Card",
      description: "Use this before paying, investing, sharing secrets, or making a high-stakes commitment.",
      items: [
        "Can I verify the core claim independently?",
        "Why must this decision happen now?",
        "Who benefits if I believe the story?",
        "What would make me walk away?",
        "Would I still choose this if I had invested nothing?"
      ],
      prompt: "Make 'pause and verify' a default for opportunities that combine urgency, secrecy, and unusually good promises."
    },
    markdownContent: `## Con Artists Sell Identity Before Information

A confidence trick often begins with a story:

"Look how successful I am."

"Look how connected I am."

"Look how much I understand this opportunity."

The story creates a feeling about the person before the evidence is fully inspected.

### Trust Creates Momentum

Once you trust someone, new information is interpreted through that trust.

A contradiction may be explained away.

A failed promise becomes bad luck.

A warning can look like jealousy.

The relationship begins protecting the narrative.

### Why People Stay

People do not only lose money.

They can lose identity.

Admitting "I was fooled" is emotionally painful, so the mind may prefer "maybe it will still work."

That is why stopping rules matter.

## Build External Friction

Good defenses live outside your mood:

- wait before large transfers,
- require independent confirmation,
- ask a second person to review the claim,
- never send money because you feel embarrassed to say no.

Trust should be earned by evidence, not accelerated by confidence.`
  },

  "pre-suasion": {
    slug: "pre-suasion",
    title: "Pre-Suasion",
    author: "Robert B. Cialdini",
    year: "2016",
    tagline: "How Attention Before a Message Can Change How the Message Is Received",
    summary: "Pre-Suasion focuses on what happens before a request is made. Cialdini argues that attention can shape which ideas feel important and which associations become active, changing the mental context in which a later message is evaluated.",
    keyTakeaways: [
      "What people notice before a message can influence how they interpret it.",
      "Attention can make one idea temporarily feel more important than alternatives.",
      "Framing matters because people do not evaluate information in a vacuum.",
      "A useful defense is to reset the frame before committing."
    ],
    protocolSteps: [
      "Ask what was made salient and what was left in the background.",
      "Restate the decision in neutral language.",
      "Seek at least one relevant fact the original framing made less visible."
    ],
    visual: {
      title: "Before → Attention → Meaning",
      subtitle: "The message is only one part of persuasion.",
      steps: ["Priming context", "Attention", "Perceived importance", "Message", "Choice"],
      caption: "The defensive habit is to inspect the first four steps instead of judging only the final sentence."
    },
    artifact: {
      title: "Frame Reset",
      description: "A five-minute way to escape a persuasive frame before making a decision.",
      items: [
        "What did the communicator make me notice first?",
        "What conclusion does that attention make feel natural?",
        "What important fact became less visible?",
        "How would I phrase the issue neutrally?",
        "What would a skeptical friend ask?"
      ],
      prompt: "Rewrite a persuasive message as a neutral question. Answer that question before returning to the original pitch."
    },
    markdownContent: `## Persuasion Starts Before the Ask

Most people study persuasion by looking at the sentence containing the request.

Cialdini asks what happened before it.

What did you notice?

What became emotionally important?

What association was activated?

### Attention Is a Gate

Attention is limited.

If a message makes one feature highly visible, that feature can temporarily dominate judgment.

The underlying facts have not changed. The mental spotlight has.

### The Focusing Problem

Once attention is captured, people can mistake "what I am thinking about" for "what matters most."

The defense is a frame reset.

Write the decision in plain language. List the facts. Then ask what was absent from the original presentation.

## The Ethical Line

Framing exists in every communication.

The concern is whether important information is deliberately hidden to create a decision people would reject under clearer context.

The simplest defense is:

**change the frame before you commit.**`
  },

  "propaganda": {
    slug: "propaganda",
    title: "Propaganda",
    author: "Edward L. Bernays",
    year: "1928",
    tagline: "A Foundational Text on Public Opinion, Media, and Mass Persuasion",
    summary: "Edward Bernays' Propaganda is a historical examination of how public opinion can be organized through communication, institutions, media, symbols, and influential groups. It is best read today as a media-literacy text.",
    keyTakeaways: [
      "Public opinion is influenced by networks, institutions, symbols, repetition, and social leadership.",
      "Mass communication shapes what groups notice as well as what they know.",
      "Influence can operate indirectly through organizations and intermediaries.",
      "Understanding historical propaganda makes source tracing more important."
    ],
    protocolSteps: [
      "Identify the source, sponsor, and distribution network behind a message.",
      "Separate emotional framing from the underlying factual claim.",
      "Compare how the same event is described by independent sources."
    ],
    visual: {
      title: "The Message Supply Chain",
      subtitle: "A narrative can travel through institutions before reaching you.",
      steps: ["Source", "Intermediary", "Frame", "Distribution", "Public response"],
      caption: "Trace the network around a message, not only the sentence you received."
    },
    artifact: {
      title: "Media Influence Audit",
      description: "Use this when a story feels unusually emotional, universal, or impossible to question.",
      items: [
        "Who created the message?",
        "Who paid for or amplified it?",
        "Which emotion does the framing activate?",
        "What evidence is independently verifiable?",
        "What alternative framing describes the same facts?"
      ],
      prompt: "Rewrite a viral claim as five neutral factual statements before deciding whether the narrative still feels inevitable."
    },
    markdownContent: `## Why a 1928 Book Still Matters

Bernays asks how a message moves from one actor into the beliefs and behavior of a much larger group.

### Influence Is Often Indirect

Messages can travel through journalists, professional associations, social groups, respected individuals, advertisements, and organizations.

That can make influence appear spontaneous even when the message has a coordinated origin.

### Emotion and Identity

People do not only ask, "Is this true?"

They may also ask:

"What does someone like me believe?"

That creates a feedback loop between information and belonging.

### Modern Defensive Lesson

Do not treat "many people are saying this" as independent confirmation when many voices repeat the same original source.

Trace the chain backward.

Who published first?

Who amplified it?

Who benefits from attention?

What evidence survives after the emotional framing is removed?

Propaganda is most useful as media literacy: inspect the machinery around a message, not just the message itself.`
  },

  "snakes-in-suits": {
    slug: "snakes-in-suits",
    title: "Snakes in Suits",
    author: "Paul Babiak & Robert D. Hare",
    year: "2006",
    tagline: "Psychopathy, Manipulation, and Power in Organizations",
    summary: "Snakes in Suits examines psychopathic traits in workplace settings and how organizational incentives can sometimes reward charm, risk-taking, impression management, and aggressive ambition. It is best used as workplace risk awareness, not casual diagnosis.",
    keyTakeaways: [
      "Harmful workplace behavior can be hard to detect when performance and manipulation appear together.",
      "Charm and confidence are not the same as integrity.",
      "Organizations can reward short-term results while hiding long-term relational damage.",
      "Psychological labels should not replace observation of conduct and controls."
    ],
    protocolSteps: [
      "Separate performance metrics from reports of repeated harmful conduct.",
      "Use multiple sources of evaluation for high-impact roles.",
      "Create clear reporting and documentation paths for boundary violations."
    ],
    visual: {
      title: "The Workplace Risk Stack",
      subtitle: "Problems become harder to catch when incentives reward appearance without accountability.",
      steps: ["Charm + competence", "Trust", "Access", "Boundary crossing", "Organizational cost"],
      caption: "Healthy systems add checks at each stage instead of relying on personality judgments."
    },
    artifact: {
      title: "Team Risk Review",
      description: "A system-level checklist for founders, managers, and team leads.",
      items: [
        "Are important decisions independently reviewed?",
        "Can one person control too much information or access?",
        "Are complaints investigated for patterns?",
        "Do leaders reward results while ignoring how results were achieved?",
        "Can employees disagree safely with high-status people?"
      ],
      prompt: "Design controls around behavior and process, not around trying to identify 'the psychopath' in the room."
    },
    markdownContent: `## Charisma Is Not Character

Workplaces often reward people who seem confident, decisive, ambitious, and persuasive.

Those traits can be useful.

They can also hide damaging behavior if an organization evaluates outcomes without enough attention to process.

### Why Systems Matter

Suppose an employee repeatedly intimidates peers but consistently hits targets.

If the organization rewards only the target, the behavior can become self-reinforcing.

The durable defense is structural:

- multiple reviewers,
- transparent decisions,
- documented expectations,
- safe reporting,
- consequences for misconduct regardless of rank.

### Do Not Diagnose From a Book

Psychopathy is a clinical construct. A workplace disagreement is not evidence of psychopathy.

Ask instead:

**"What behavior keeps occurring, and what happens when the behavior is challenged?"**

That keeps the analysis grounded.`
  },

  "without-conscience": {
    slug: "without-conscience",
    title: "Without Conscience",
    author: "Robert D. Hare",
    year: "1999",
    tagline: "Understanding Psychopathy, Deception, and the Absence of Remorse",
    summary: "Robert Hare's Without Conscience is a research-informed account of psychopathy, covering interpersonal traits, emotional deficits, lifestyle patterns, and the ways some individuals exploit others. It is especially useful for separating clinical concepts from internet stereotypes.",
    keyTakeaways: [
      "Psychopathy is more specific than being selfish, cold, or manipulative on one occasion.",
      "Charm and verbal fluency can coexist with serious interpersonal deficits.",
      "Repeated deception and lack of remorse matter more than one unpleasant interaction.",
      "Assessment belongs to trained professionals; everyday readers should focus on conduct and boundaries."
    ],
    protocolSteps: [
      "Judge repeated behavior rather than charisma.",
      "Keep important commitments and transactions documented.",
      "Use institutional safeguards when the stakes are high."
    ],
    visual: {
      title: "Trait ≠ Diagnosis",
      subtitle: "A concerning behavior does not automatically justify a clinical label.",
      steps: ["Observed behavior", "Repeated pattern", "Impact", "Boundary", "System response"],
      caption: "Ground the discussion in evidence instead of armchair diagnosis."
    },
    artifact: {
      title: "Charisma Reality Check",
      description: "A compact defense tool when someone is unusually persuasive or impressive.",
      items: [
        "Do they keep promises without an audience?",
        "How do they treat people who cannot help them?",
        "Do they accept accountability?",
        "Does their story stay stable across contexts?",
        "What independent evidence exists beyond self-presentation?"
      ],
      prompt: "Trust patterns across time more than first impressions."
    },
    markdownContent: `## The Problem With Internet Labels

Online culture often turns "psychopath" into a synonym for confident, successful, cold, or manipulative.

Hare's work is much more specific.

The book describes a constellation of traits and behavior patterns that cannot be established from one rude comment or one difficult relationship.

### Charm Can Be a Signal, Not a Verdict

Some people with psychopathic traits may be socially skilled.

That does not mean charisma itself is suspicious.

The defensive lesson is simply:

**Do not let charm substitute for evidence.**

Check whether promises are kept.

Check whether responsibility is accepted.

Check whether behavior changes when there is no reward for appearing good.

### Use Systems, Not Suspicion

No workplace or relationship should require amateur diagnosis.

Use boring safeguards:

- contracts,
- permissions,
- audit trails,
- reference checks,
- conflict-of-interest rules,
- independent review.

Boring systems are powerful because they work even when your first impression is wrong.`
  }
};
