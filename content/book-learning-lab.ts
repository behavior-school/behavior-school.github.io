import type { BookLearningLab } from "../lib/book-types";

export const bookLearningLab: Record<string, BookLearningLab> = {
  "atomic-habits": {
    coreModel: "Behavior is easier to change when you redesign the cue, reduce the response cost, and make the immediate feedback rewarding.",
    brainLens: "Habit learning is not a single brain circuit or a simple dopamine trick. Repeated cue–action–outcome relationships can become more automatic as learning shifts toward efficient stimulus-response control. Dopamine-related prediction-error signals are one part of reinforcement learning: unexpected outcomes can update what the system expects next. That makes immediate feedback useful, but it does not mean dopamine is simply a pleasure chemical.",
    story: { title: "The 10:00 PM study problem", text: "Imagine two students with the same goal. One keeps the phone beside the notebook and says, “I need more discipline.” The other charges the phone outside the room, opens the exact lecture at the desk, and starts with two minutes. The second student has changed the decision environment before motivation is required." },
    examples: ["Want to read more? Leave the book open on the pillow and the phone outside reach.", "Want to train? Put shoes and clothes beside the bed before the cue arrives.", "Want to break scrolling? Add friction before the app, not guilt after the session."],
    watchFor: ["Changing the goal while leaving the environment unchanged", "Making the first step too large", "Expecting motivation to stay constant", "Treating one miss as a total failure"],
    practice: ["Write one cue → routine → reward loop from yesterday.", "Shrink the desired behavior to a 2-minute start.", "Move one environmental cue tonight.", "Track the behavior for seven days, not your mood."]
  },
  "thinking-fast-and-slow": {
    coreModel: "Human judgment often begins with fast pattern completion; good decisions add a deliberate check when the stakes, uncertainty, or evidence warrant one.",
    brainLens: "The famous System 1/System 2 language is a useful explanatory model, not a claim that the brain literally contains two isolated thinking machines. Attention, working memory, control, emotion, and learned heuristics interact. Working memory is limited, and stress can change valuation and decision strategies, which helps explain why a carefully designed decision process matters most when attention is strained.",
    story: { title: "The first number wins", text: "A seller says a laptop costs ₹1,20,000 before offering a discount to ₹78,000. Even when the original figure is irrelevant, it can become a reference point. Your first question should be: “Compared with what independent benchmark?” rather than “How big is the discount?”" },
    examples: ["Write your estimate before hearing someone else's forecast.", "Separate evidence from the story you tell about the evidence.", "Use a premortem when the decision is expensive or irreversible."],
    watchFor: ["Anchors", "Availability mistaken for probability", "Confidence without calibration", "Narratives that explain too much from too little data"],
    practice: ["Make a prediction with a numeric probability.", "List one piece of evidence that would change your mind.", "Recheck the decision after a cooling-off period."]
  },
  "deep-work": {
    coreModel: "High-quality thinking improves when you protect attention, reduce task switching, and give demanding work a defined container.",
    brainLens: "Attention and working memory are tightly linked: they are limited resources rather than an infinite mental whiteboard. Frequent switching also changes what information is currently active, increasing interference and the feeling that work is fragmented. The practical lesson is architectural: protect the cognitive context before asking yourself to “focus harder.”",
    story: { title: "The 18-tab illusion", text: "You spend three hours with a document, chat window, email, music controls, and ten browser tabs open. You were never idle, but the output is thin. A 60–90 minute block with one target can feel harder for the first ten minutes and dramatically cleaner afterward." },
    examples: ["Choose one visible deliverable per focus block.", "Keep distracting tabs physically closed.", "Use a shutdown note so unfinished tasks do not keep occupying attention."],
    watchFor: ["Constant context switching", "Notifications masquerading as urgency", "Starting without a concrete output", "Measuring hours instead of finished work"],
    practice: ["Define one hard outcome for the next 60 minutes.", "Put the phone away.", "Write down distractions rather than acting on them.", "End by recording the next starting point."]
  },
  "power-of-habit": {
    coreModel: "A recurring behavior becomes easier to trigger when a stable cue reliably predicts a routine that delivers a valued outcome.",
    brainLens: "The habit loop is a behavioral model rather than a claim that one tiny circuit explains every habit. Repetition can reduce the amount of conscious control required, and reinforcement learning uses experienced outcomes to update expectations. When you replace a routine, preserve enough of the context or reward that the new response can compete with the old one.",
    story: { title: "The post-lunch crash", text: "If every difficult afternoon ends with opening social media, the phone is not the whole problem. The cue may be fatigue plus a location plus a need for stimulation. Replace the routine with a short walk or music and test whether the underlying reward was relief, novelty, or social contact." },
    examples: ["Map time, place, emotion, people, and preceding action.", "Preserve the real reward instead of guessing it.", "Use one keystone behavior to simplify several downstream behaviors."],
    watchFor: ["Trying to suppress a cue without replacing the routine", "Misidentifying the reward", "Building too many habits at once"],
    practice: ["Capture three repetitions of a behavior.", "Circle the most stable cue.", "Test one replacement routine for a week."]
  },
  "drive": {
    coreModel: "For complex work, motivation becomes more durable when people experience agency, improving competence, and a meaningful reason for the work.",
    brainLens: "Motivation is not reducible to one neurotransmitter. Goal-directed behavior depends on valuation, learning, effort allocation, and context. Social reward research shows that human brains process interpersonal outcomes through reward-related systems too, which helps explain why recognition and belonging can matter even when money is present.",
    story: { title: "Same task, different ownership", text: "Give two people the same assignment. One gets to choose the approach and understands the real outcome; the other is micromanaged and evaluated only on speed. Their effort can diverge even though the task itself is identical." },
    examples: ["Give yourself choices over task, time, technique, or collaborators.", "Define a skill target instead of only a completion target.", "Write the person or problem that benefits from the work."],
    watchFor: ["Using rewards for every action", "Confusing freedom with lack of standards", "Calling something “purposeful” without a concrete outcome"],
    practice: ["Increase one form of autonomy.", "Pick one deliberate-practice metric.", "Write a one-sentence purpose statement."]
  },
  "mindset": {
    coreModel: "Beliefs about ability influence how people interpret difficulty, feedback, and failure; the useful move is to treat performance as developable without pretending effort guarantees success.",
    brainLens: "Learning changes neural representations through experience, but “growth mindset” should not be turned into a claim that anyone can achieve anything through belief alone. A better neuroscience lens is prediction and error: practice gives the brain opportunities to update models, and feedback matters when it is specific enough to guide correction.",
    story: { title: "The coding error", text: "A compiler error can be interpreted as “I am bad at programming” or “my current mental model is wrong.” The second interpretation produces a better next action: inspect the error, isolate the concept, test the fix, and update the model." },
    examples: ["Replace identity judgments with skill descriptions.", "Ask which strategy failed, not only whether you failed.", "Use feedback tied to a behavior the person can change."],
    watchFor: ["Using “growth mindset” as empty encouragement", "Praising effort regardless of effectiveness", "Ignoring real constraints or skill gaps"],
    practice: ["Write one fixed statement and convert it into a skill question.", "Name the missing strategy.", "Run one deliberate experiment."]
  },
  "nudge": {
    coreModel: "Choice architecture changes what is noticed, how much effort a decision requires, and what happens by default—without removing alternatives.",
    brainLens: "Attention is selective and working memory is limited, so presentation order, defaults, and complexity can change which information reaches deliberation. Social and reward signals can also influence how valuable an option feels. The ethical test is transparency, reversibility, and whether the design helps people understand the consequence rather than merely steering them blindly.",
    story: { title: "The default form", text: "An online form pre-selects a delivery option. Most users leave it unchanged, not because they evaluated every alternative but because changing the default costs attention. A better interface makes the default visible and the alternatives easy to inspect." },
    examples: ["Put the important choice where attention naturally lands.", "Use reversible defaults for uncertain preferences.", "Show consequences beside the action that causes them."],
    watchFor: ["Dark patterns", "Hidden alternatives", "Defaults that are hard to reverse", "Designing for conversion while ignoring informed choice"],
    practice: ["Audit one form or workflow.", "List the current default.", "Test a transparent alternative.", "Measure comprehension as well as completion."]
  },
  "predictably-irrational": {
    coreModel: "People often evaluate options relative to context, reference points, emotions, and comparisons rather than from a fixed internal utility meter.",
    brainLens: "Valuation is context-sensitive. Neural reward systems respond to predicted and experienced outcomes, while social context can modify perceived value. That means the same object can feel more or less attractive when the comparison set, framing, or emotional state changes.",
    story: { title: "Free is not just cheaper", text: "A ₹10 item and a ₹0 item are separated by only ₹10, but the psychological boundary can feel much larger. The question is not only economic price—it is what the reference point and perceived risk become at zero." },
    examples: ["Change the comparison set and watch your preference move.", "Delay purchases made under excitement.", "Separate absolute value from relative value."],
    watchFor: ["“Free” framing", "Artificial comparison sets", "Emotion-driven reference points", "Assuming awareness removes the bias"],
    practice: ["Name the comparison set before deciding.", "Ask for an outside benchmark.", "Revisit the choice after the emotional state changes."]
  },
  "influence": {
    coreModel: "Persuasion often works by changing attention, social meaning, perceived scarcity, reciprocity, consistency, liking, authority, or consensus—not by magically bypassing free will.",
    brainLens: "Social information is deeply integrated into valuation and decision-making. People track status, affiliation, trust, norm compliance, and expected social outcomes using distributed neural systems. Influence becomes easier to resist when you separate the social signal from the underlying evidence.",
    story: { title: "The expert badge", text: "A presenter uses credentials, testimonials, and confident language. Those signals may be useful, but they are not the same thing as evidence for the specific claim being made. Ask: “What would convince me if the badge were removed?”" },
    examples: ["Check the claim independently of the source's status.", "Notice whether scarcity is real or manufactured.", "Treat reciprocity as courtesy, not debt."],
    watchFor: ["Pressure after a favor", "Authority without relevant evidence", "Artificial urgency", "Crowd approval used as proof"],
    practice: ["Name the influence principle you notice.", "Write the claim in neutral language.", "Seek one independent source before committing."]
  },
  "thinking-in-bets": {
    coreModel: "Good decisions are not the same as good outcomes; evaluate the quality of the reasoning process under uncertainty.",
    brainLens: "Prediction is inherently about updating beliefs as evidence changes. Prediction-error signals can help learning, but human confidence is often poorly calibrated. A probability estimate forces you to expose uncertainty instead of hiding it inside binary language.",
    story: { title: "Lucky outcome, bad process", text: "You make a reckless prediction with 55% confidence and happen to be right. The outcome feels like proof. A calibrated process asks whether the evidence really supported 55%, 70%, or 90% before the result was known." },
    examples: ["Record forecasts before outcomes.", "Use ranges where precision is false.", "Separate what happened from why you thought it would happen."],
    watchFor: ["Outcome bias", "Overconfidence after a win", "Retrofitting reasons", "Binary thinking under uncertainty"],
    practice: ["Make three probabilistic forecasts.", "Write your disconfirming evidence.", "Review calibration after the outcome."]
  },
  "scout-mindset": {
    coreModel: "A scout mindset treats beliefs as models to improve rather than identities to defend.",
    brainLens: "Cognitive control and error monitoring help us detect conflict, but motivation and social identity can bias what information receives attention. The practical intervention is procedural: reward yourself for updating accurately, not merely for winning arguments.",
    story: { title: "The uncomfortable data point", text: "You discover a study that weakens a belief you have repeated for years. The defensive question is “How do I disprove this?” The scout question is “What exactly changed the odds?”" },
    examples: ["State what evidence would change your mind.", "Separate disagreement from disrespect.", "Use confidence levels instead of absolute certainty."],
    watchFor: ["Identity-protective reasoning", "Selective evidence search", "Moving goalposts", "Confusing confidence with correctness"],
    practice: ["Write your strongest opposing argument.", "Find one piece of evidence you would regret ignoring.", "Update your confidence explicitly."]
  },
  "paradox-of-choice": {
    coreModel: "More options can increase cognitive cost, comparison, uncertainty, and regret—especially when the options are hard to distinguish.",
    brainLens: "Working memory and attention are limited, so large option sets can increase comparison demands. Choice also has emotional consequences: when an outcome is imperfect, more alternatives can make it easier to imagine a better missed choice. The solution is not always “fewer choices”; it is better structure.",
    story: { title: "The 47-tab purchase", text: "A shopper opens 47 tabs to find the perfect keyboard and ends up buying nothing. A five-option shortlist plus clear evaluation criteria can produce a better decision than exhaustive browsing." },
    examples: ["Set a shortlist cap.", "Choose criteria before comparing products.", "Use defaults for low-stakes decisions and deliberate review for high-stakes ones."],
    watchFor: ["Endless research", "Comparison without criteria", "Regret mistaken for evidence", "Optimizing trivial decisions"],
    practice: ["Create a three-criterion scorecard.", "Cap the candidate list at five.", "Set a decision deadline."]
  },
  "48-laws-of-power": {
    coreModel: "Read power tactics as a recognition map: status, information, dependence, reputation, incentives, and coalition structure can shape behavior even when nobody says so openly.",
    brainLens: "Social decision-making uses reward, threat, attention, learning, and prediction. Status cues can change how people interpret the same message, while uncertainty and social threat can narrow attention. The defensive skill is to detect the social signal without assuming every strategic behavior is malicious.",
    story: { title: "The meeting before the meeting", text: "A decision appears to happen in a room, but the real alignment formed earlier through conversations, information access, and coalition building. Understanding the network explains the outcome better than blaming the loudest speaker." },
    examples: ["Map who owns information and approvals.", "Watch repeated behavior across contexts.", "Protect reputation with evidence and consistency rather than counter-drama."],
    watchFor: ["Status games", "Information asymmetry", "Forced dependence", "Public charm paired with private inconsistency"],
    practice: ["Draw a stakeholder map.", "Mark dependencies and decision rights.", "Document commitments after important meetings.", "Use boundaries before confrontation."]
  },
  "laws-of-human-nature": {
    coreModel: "The book is most useful as a catalog of recurring human motives—status, self-interest, emotion, identity, attention, imitation, and desire—rather than as a license to stereotype everyone.",
    brainLens: "Human behavior emerges from interacting prediction, valuation, social-learning, and control systems. Social reward research shows that other people can change perceived value, while threat processes can heighten attention to cues of danger or rejection. Use patterns probabilistically, not as fixed labels.",
    story: { title: "The repeated trigger", text: "Someone reacts strongly to criticism. Instead of concluding “that is just their personality,” track the situations: public exposure, status threat, loss of control, or genuine disagreement. Context often explains behavior better than a single trait label." },
    examples: ["Study patterns across settings.", "Separate motive hypotheses from observed behavior.", "Ask what reward or threat the situation may contain."],
    watchFor: ["Overgeneralizing from one interaction", "Reading motives as facts", "Using personality labels instead of evidence"],
    practice: ["Write three competing explanations for one behavior.", "Look for disconfirming evidence.", "Prefer repeated patterns over vivid anecdotes."]
  },
  "art-of-seduction": {
    coreModel: "Treat attraction dynamics as a study of attention, uncertainty, reciprocity, identity, and storytelling—and pair it with consent, autonomy, and respect.",
    brainLens: "Attention is pulled toward novelty and uncertainty, while social reward can shape perceived value. But attraction is not a simple chemical switch, and no psychological pattern overrides another person's autonomy. A healthy interpretation focuses on understanding interpersonal dynamics rather than manufacturing dependence.",
    story: { title: "Mystery versus manipulation", text: "A person who has a full life can feel intriguing because they are not constantly available. That is different from deliberately withholding affection to create distress. The observable behavior may look similar from a distance; intent, consent, and impact matter." },
    examples: ["Notice reciprocity rather than chasing asymmetry.", "Use curiosity instead of pressure.", "Respect a clear no immediately."],
    watchFor: ["Manufactured jealousy", "Hot-and-cold punishment", "Dependency disguised as romance", "Pressure framed as persistence"],
    practice: ["Describe attraction dynamics without labeling the person.", "Check reciprocity.", "State boundaries and respect the response."]
  },
  "games-people-play": {
    coreModel: "Repeated interpersonal patterns can become predictable “games” when participants avoid the underlying need and recycle the same roles.",
    brainLens: "Social interaction is continuously predictive: people anticipate approval, rejection, status, threat, and reciprocity. Once a repeated interaction becomes familiar, the brain can automate expectations, making the pattern feel inevitable. Naming the pattern creates an opportunity to change the next move.",
    story: { title: "The endless rescue", text: "One person repeatedly asks for urgent help, the other repeatedly rescues them, resentment builds, and the same crisis returns. The surface topic changes; the transaction stays stable." },
    examples: ["Look for repeated roles: rescuer, victim, critic, avoider.", "State the underlying request directly.", "Change one response rather than trying to change the other person first."],
    watchFor: ["Recurring crisis scripts", "Indirect requests", "Payoff through attention or control", "Blame replacing problem solving"],
    practice: ["Name the pattern neutrally.", "Ask the direct question.", "Set one boundary and observe the next interaction."]
  },
  "emotional-blackmail": {
    coreModel: "Emotional blackmail turns a relationship's emotional bond into pressure: “Do this, or you will suffer guilt, fear, obligation, or rejection.”",
    brainLens: "Threat and social-reward systems make relational consequences feel urgent, which can narrow attention and increase compliance. This is why a person may know a demand is unreasonable and still feel compelled to say yes. The defensive move is to slow the decision and separate emotion from permission.",
    story: { title: "The guilt deadline", text: "Someone asks for a major favor and immediately adds, “After everything I've done for you.” The real decision is no longer just the favor. Your nervous system is also processing fear of relationship loss and a demand for immediate compliance." },
    examples: ["Pause before responding.", "Name the request without defending your character.", "Allow disappointment without treating it as evidence that you are wrong."],
    watchFor: ["Threats of withdrawal", "Guilt accounting", "Urgency that prevents reflection", "Punishment after a boundary"],
    practice: ["Use a 24-hour pause for high-stakes emotional requests.", "Write the request in neutral language.", "Give one clear yes/no answer without a courtroom speech."]
  },
  "gaslight-effect": {
    coreModel: "Gaslighting is a pattern that makes a person repeatedly doubt their memory, interpretation, or reality; one disagreement is not automatically gaslighting.",
    brainLens: "Memory is reconstructive rather than a perfect recording, and stress can affect attention, learning, and decision making. That makes chronic contradiction especially destabilizing. The defensive response is to anchor important facts in independent records, trusted relationships, and observable behavior rather than endlessly debating who “feels” correct.",
    story: { title: "The missing event", text: "You remember an agreement; the other person says it never happened. The important signal is not one mismatch. It is whether this repeatedly happens, whether records are dismissed, and whether your confidence is systematically undermined when you challenge the pattern." },
    examples: ["Keep factual notes for important events.", "Check interpretations with trusted outsiders.", "Judge patterns over time rather than one argument."],
    watchFor: ["Repeated denial of observable events", "Mocking your memory", "Isolation from reality checks", "Moving the story whenever evidence appears"],
    practice: ["Record dates and agreements.", "Describe behavior without diagnosing motives.", "Escalate to a safer support structure when the pattern is persistent."]
  },
  "in-sheeps-clothing": {
    coreModel: "Covert aggression often hides behind plausible deniability; the strongest defense is clear behavioral language, boundaries, and consequences.",
    brainLens: "Social threat does not always look dramatic. Ambiguous cues can recruit attention precisely because the brain is trying to predict whether a situation is safe. Chronic ambiguity is exhausting because you keep having to infer intent. A boundary reduces the inference burden: focus on what happened and what happens next.",
    story: { title: "The “helpful” delay", text: "A coworker repeatedly agrees to a deadline, misses it, and then acts confused about why you are upset. Instead of arguing about intent, document the date, the missed commitment, the impact, and the next process." },
    examples: ["Use observable verbs: missed, changed, withheld, denied.", "Reduce opportunities for private reinterpretation.", "Use written confirmation for important commitments."],
    watchFor: ["Plausible deniability", "Repeated obstruction", "Blame shifting", "Hidden consequences after cooperation"],
    practice: ["Write the behavior as a timeline.", "State the boundary.", "Attach a concrete process consequence."]
  },
  "confidence-game": {
    coreModel: "Confidence tricks often exploit trust, authority signals, scarcity, social proof, and the victim's desire to act before uncertainty becomes uncomfortable.",
    brainLens: "Humans learn from social information and use shortcuts when information is incomplete. Confidence, similarity, urgency, and apparent consensus can change perceived trustworthiness before factual verification catches up. The defensive tool is procedural friction: independent verification before money, access, or irreversible action.",
    story: { title: "The trusted introduction", text: "A stranger feels safe because a friend-of-a-friend introduced them, the opportunity sounds exclusive, and the decision has a deadline. Each cue adds social plausibility, but none proves the underlying claim." },
    examples: ["Verify identity through an independent channel.", "Pause before transferring money or credentials.", "Ask what evidence would still exist if the salesperson disappeared."],
    watchFor: ["Urgency", "Secrecy", "Credential theater", "Requests to bypass normal verification"],
    practice: ["Create a personal high-stakes verification checklist.", "Use a second person as a sanity check.", "Never let embarrassment become a reason to continue."]
  },
  "pre-suasion": {
    coreModel: "What people attend to immediately before a choice can change which interpretation becomes mentally available when the decision arrives.",
    brainLens: "Attention is selective and limited, so pre-decisional cues can alter which concepts are active. Expectation and prediction also influence perception and valuation. The ethical boundary is important: framing should clarify relevant information, not hide counterevidence or manufacture a false impression.",
    story: { title: "The question before the question", text: "Ask someone to estimate the value of something after first asking whether they feel adventurous, and you may activate a different mental frame than asking about carefulness. The setup can prime a lens before the main decision." },
    examples: ["Ask whether the framing is relevant to the decision.", "Show counterevidence alongside the preferred frame.", "Give the person space to reset the frame."],
    watchFor: ["Priming unrelated emotions", "Selective salience", "Framing that hides the alternative", "Preloading identity pressure"],
    practice: ["Write the decision with three different neutral frames.", "Compare what becomes salient in each.", "Choose the frame that improves understanding, not compliance."]
  },
  "propaganda": {
    coreModel: "Mass persuasion scales when repeated narratives, symbols, social identities, authorities, and media channels make one interpretation feel normal and obvious.",
    brainLens: "Repeated exposure can change familiarity and accessibility, while social information shapes perceived norms and group identity. Threat-related information can capture attention especially strongly. The defensive move is media hygiene: trace claims to primary evidence, diversify sources, and separate emotional salience from truth.",
    story: { title: "The repeated slogan", text: "A claim appears in a headline, a short video, a meme, and a friend's post. Four exposures can feel like four independent confirmations even when all four derive from the same original source." },
    examples: ["Trace the earliest available source.", "Count independent evidence, not repetitions.", "Separate a vivid story from base-rate evidence."],
    watchFor: ["Repetition without independent evidence", "Enemy images", "False binaries", "Appeals to identity instead of evidence"],
    practice: ["Build a source tree for one viral claim.", "Label facts, interpretations, and emotional framing.", "Wait before sharing high-arousal information."]
  },
  "snakes-in-suits": {
    coreModel: "Workplace manipulation becomes easier to understand when you examine incentives, organizational blind spots, impression management, and failures of accountability—not labels alone.",
    brainLens: "Social environments reward status, competence signals, coalition building, and norm compliance. Under stress, decision-making can shift and threat cues can dominate attention. Strong organizations reduce dependence on personality judgments through documentation, role clarity, independent checks, and consistent consequences.",
    story: { title: "The star performer exception", text: "A high performer repeatedly violates process, but the organization excuses it because their results are valuable. Over time, the system teaches everyone that rules are negotiable for insiders." },
    examples: ["Separate output from process quality.", "Use the same accountability standards for high and low performers.", "Create independent escalation paths."],
    watchFor: ["Special treatment", "Blame cascades", "Information silos", "Charm replacing evidence"],
    practice: ["Audit one high-risk workflow.", "Document decision rights.", "Add an independent review for exceptions."]
  },
  "without-conscience": {
    coreModel: "Use the book as a research-oriented description of psychopathic traits and interpersonal patterns, not as a checklist for diagnosing people in daily life.",
    brainLens: "Threat learning, reward valuation, social prediction, and emotional learning interact in complex ways. Research on psychopathy does not justify the internet habit of calling every selfish or charismatic person a psychopath. For everyday decisions, observed behavior, repeated patterns, and independent evidence are more actionable than labels.",
    story: { title: "Charm is not evidence", text: "Someone can be highly articulate and still unreliable; someone can be quiet and trustworthy. A good screening process therefore asks what the person repeatedly does when there is no reward for performing well." },
    examples: ["Check whether promises are kept.", "Observe accountability after mistakes.", "Use contracts and audit trails when stakes are high."],
    watchFor: ["Charisma replacing evidence", "Repeated deception", "Absence of accountability", "Manipulative behavior being excused because of status"],
    practice: ["Track behavior over time.", "Use independent references.", "Build systems that work even when your first impression is wrong."]
  }
};
