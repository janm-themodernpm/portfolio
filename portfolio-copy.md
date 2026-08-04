# Portfolio Copy — Editable Working Doc

All human-readable copy from the portfolio, organized by page and section. Edit freely and hand back. Anchors in **[brackets]** identify each block so I can update precisely. Preserve them if you can; if you delete one, tell me what page/section it was.

Formatting notes:
- `**bold**` renders as bold in HTML.
- `*italic*` renders as italic (used inside headlines for emphasis on load-bearing nouns).
- Lines starting with `- ` are bullets. Bullets that begin with a bolded phrase (`- **$15.3M in revenue** through…`) will render as metric bullets.
- Pullquotes are marked `> ` at the start of the line.

---

## PAGE 1 — index.html (Landing)

### [nav]
- Brand name: **Jan Patrick McGhee**
- Nav links: Work · Experience · AI practice · Contact

### [hero.meta]
- Pill: **Senior Product Manager**
- Location line: **Los Angeles, CA · Available**

### [hero.portrait]
- Image: `uploads/jan_profileimage.JPG`
- Alt text: Portrait of Jan Patrick McGhee
- Position: left of the headline, above the lede, on every screen size. Height and headline font-size scale together off a single variable (`--hero-scale`) so the three-line name always equals the image height.

### [hero.headline]
Rendered as three separate lines, stacked, matching the height of the portrait:
- Line 1: Jan
- Line 2: Patrick
- Line 3: McGhee

### [hero.lede]
I'm a product manager specializing in the infrastructure behind risk, fraud, and Trust & Safety operations. Seven years at Amazon shipping signal architecture, automation, and platform work that served **10M customers**, **2M businesses**, and **100M+ annual transactions**. Today I'm in pre-launch with my first founder venture, JoinPlay, and building agentic AI tools for PMs.

### [hero.cta]
- Primary button: **See the work**
- Secondary button: **Get in touch →**

---

### [stats.label]
Seven years of outcomes, by the numbers

### [stats.items]
- **$15.3M+** — Revenue generated
- **$7.4M+** — Annual costs eliminated
- **12.6M** — Customers served annually
- **32%** — Trust improvement

---

### [work.head]
- Eyebrow: **01 / Selected work**
- Title: **Three projects where AI does real work. Not demos. Not decoration.**
- Sub: Every piece of work below has AI doing real work: in the product, in how it was built, or both.

### [work.project.joinplay]
- Tags: 0→1 founder · Pre-launch · Agentic prototyping
- Title: **JoinPlay**
- Kicker: Every activity shows two scores: one for the sport, one for the people.
- Description: The rec-sports world optimizes logistics and abandons belonging. JoinPlay is a consumer platform pioneering a new category — *social sports integration* — built for what incumbents ignore. Sole PM & builder: dual-fit matching system, JTBD research across 13 competitors, architecture, and MVP. Tightening core loops before public launch.
- Role label: **Founder · Product Lead**
- CTA: **Case study →**

### [work.project.speccheck]
- Tags: Agentic AI · PM tooling · LLM red-team
- Title: **Spec-Check**
- Kicker: Stress-test a PRD before a single line of code.
- Description: An AI review system that runs your product spec past five specialist agents — technical feasibility, metric clarity, stakeholder alignment, edge-case coverage, and data privacy — and returns a readiness score with actionable gaps.
- Role label: **Solo build**
- CTA: **Case study →**

### [work.project.prompts]
- Tags: Coming soon · Prompt engineering
- Title: **Jan's Prompt Library**
- Kicker: The prompts I reach for when I'm shipping with agents.
- Description: An interactive library of my favorite prompts for agentic workflows, PRD drafting, research synthesis, and vibe-coded prototyping. Launching soon — preview what's inside.
- Role label: **In production**
- CTA: **Preview →**

---

### [experience.head]
- Eyebrow: **02 / Professional journey**
- Title: A decade in the operational seams — risk, fraud, Trust & Safety, and the platforms that hold them together.

### [experience.companies]
Each company gets a left rail with its logo + a vertical bracket that runs down through its roles.

- **JoinPlay**: `uploads/joinplay_iconmark.svg` (two overlapping circles — same file used in both light and dark themes) + a composed "JoinPlay" wordmark rendered in Instrument Serif — "Join" in coral (`#ff6b47`), "Play" in ink weight 500.
- **Amazon**: `uploads/amazon-com.png` (light theme) / `uploads/amazon-com-light.png` (dark theme). The full amazon.com wordmark with the orange swoosh.
- Amazon groups all three Amazon roles under one shared logo; JoinPlay has its own single-role block.
- Each role's meta line is `LOCATION · YEARS` in mono uppercase. The current role's dates take the accent color with a pulsing dot.

### [experience.role.joinplay]
- Title: **Founder · Product Lead**
- Meta line: Seattle, WA · 2025 — Present
- Lede: Building a consumer platform pioneering a new category — *social sports integration* — that matches users to rec-sports communities on skill *and* social fit.
- Bullets:
  - Mapped 16 JTBD across three tiers, rated 13 competitor platforms, and identified the unserved Tier-2 social integration gap.
  - Designed a dual-score matching system (Activity Fit + Social Fit) across skill, availability, location, and group culture.
  - Authored product strategy, system architecture, PRD, metric tree, GTM plan, and safety framework end-to-end.
  - Shipping MVP solo with an agentic stack; public launch follows mid-size-city beachhead strategy.

### [experience.role.amazon-senior-pm]
- Title: **Senior Product Manager · Trust & Safety Data Platform**
- Meta line: Seattle, WA · 2019 — 2024
- Lede: Owned the A-to-z Guarantee platform through four product generations, from manual adjudication to ML-driven automation at 100M+ transactions per year.
- Metric bullets:
  - **4 new products and 70+ features** supporting 10.6M yearly customers and 2.1M third-party sellers.
  - **$15.3M in revenue** (41.1% ROI) through a strategic incentive funding program.
  - **$7.4M in yearly operational costs eliminated** through ML-driven automation — 98% recall, 91% accuracy.
  - **28% seller-trust lift, 10% CSAT lift** via voice-of-customer initiatives.
  - **40% case-volume reduction** through comprehensive UX redesign.

### [experience.role.amazon-risk-policy]
- Title: **Risk & Policy Manager · Trust & Safety**
- Meta line: Seattle, WA · 2018 — 2019
- Lede: Inherited a 42-day backlog on a 7-day SLA, with no PM in seat. Cleared it in six weeks without headcount.
- Metric bullets:
  - Resolved a **42-day backlog of 1.2M cases** against a 7-day SLA.
  - Reduced misfile rate from **22% to 5%** through guided workflow implementation.
  - **92% reduction** in repeat customer contacts.
  - Managed executive escalations including Bezos "?" emails.

### [experience.role.amazon-investigator]
- Title: **Sr. Investigation Specialist · Transaction Risk Management**
- Meta line: Seattle, WA · 2016 — 2018
- Lede: (none currently)
- Metric bullets:
  - **50% above target** (21 vs. 14 investigations per hour).
  - Redesigned global SOPs from **50+ to 7**, improving efficiency by 35%.
  - **30% reduction** in average handle time through process optimization.

---

### [ai-practice.head]
- Eyebrow: **03 / How I work with AI**
- Title: I run a one-person product org on an agentic stack, handling discovery, architecture, build, and launch without a pod.
- Sub: Generative and agentic AI are load-bearing in my workflow, not decorative.

### [ai-practice.card.A]
- Heading: **Agent-assisted discovery**
- Body: I run structured JTBD interviews, then use LLMs as synthesis partners to cluster quotes, find the disagreements no one named out loud, and draft problem framings I can pressure-test against the transcript.
- Tools: Claude · GPT-4 · Dovetail

### [ai-practice.card.B]
- Heading: **PRD red-teaming**
- Body: Every spec I write goes through Spec-Check — my own agentic review system — before stakeholders see it. Five specialist agents catch gaps I'd otherwise ship.
- Tools: Spec-Check · Claude Sonnet

### [ai-practice.card.C]
- Heading: **Vibe-coded prototyping**
- Body: I prototype entire flows end-to-end — not Figma, but working HTML, real state, real APIs — so I can user-test and iterate in hours instead of sprints.
- Tools: Cursor · v0 · Claude Code

### [ai-practice.card.D]
- Heading: **Signal & metric design**
- Body: For risk & T&S work I still reason about signals by hand, but use agents to generate test cases, stress distributions, and edge-case catalogs that would take days to assemble manually.
- Tools: Claude · Python

---

### [skills.head]
- Eyebrow: **04 / Core expertise**

### [skills.product]
- Column heading: **Product**
- Items:
  - Agentic AI productivity workflows
  - Platform strategy & scaling
  - ML-enabled decisioning & adjudication
  - Trust & Safety infrastructure
  - Data platform governance
  - Long-term product strategy
  - Go-to-market · A/B testing frameworks
  - Data-driven prioritization

### [skills.technical]
- Column heading: **Technical**
- Items:
  - Oracle → AWS cloud modernization
  - Data signal retrieval & logic systems
  - ML model deployment & evaluation
  - Workflow automation & case routing
  - API & cross-service integrations
  - Privacy & GDPR data governance
  - Risk signal modeling
  - UI design language & principles

### [skills.scope]
- Column heading: **Scope**
- Items:
  - Global operations: NA, EU, APAC
  - 10.6M+ customers
  - 2.1M third-party sellers
  - 100M+ annual transactions
  - 0→1 founder experience
  - Executive escalation management

---

### [contact]
- Eyebrow: **05 / Get in touch**
- Headline: Looking for a *senior PM* who can ship with agents *and* operate at scale?
- Sub: Open to senior IC or founding PM roles in platform, T&S, risk, or applied AI. Los Angeles or remote. Let's talk.
- Cards:
  - Email — jan.mcghee09@gmail.com
  - LinkedIn — linkedin.com/in/janmcghee
  - Live product — joinplay.io

### [footer]
- Left: © 2026 Jan Patrick McGhee
- Right: Built with HTML, Claude, and stubbornness.

---

## PAGE 2 — joinplay.html (Case study 01)

### [jp.hero.meta]
- Case study · 01
- Founder · Product Lead
- 2025 → Present
- Pre-launch · joinplay.io

### [jp.hero.title]
JoinPlay

### [jp.hero.kicker]
A consumer platform pioneering a new category — *social sports integration* — that helps people find rec communities where they actually belong, matched on skill *and* social fit.

### [jp.facts]
- Role: Founder, PM of One
- Stage: Pre-launch · MVP build
- Market: $4.64B adult social sports
- Beachhead: Mid-size U.S. cities

---

### [jp.01.problem]
- Number: 01 / The problem
- Heading: Rec sports fails at the one moment that determines retention: the transition from "I signed up" to "I belong here."
- Body:
Recreational sports platforms have optimized for logistics — scheduling, payments, performance tracking — while abandoning users at the moment that actually decides whether they stay. Meanwhile, costs have turned participation into a luxury: adult leagues routinely run $700–$1,060 per season in major metros, and average family spending on a child's primary sport rose 46% between 2019 and 2024.

I mapped the 16 jobs a rec-sports participant needs done, across three tiers: **Access & Readiness**, **Social Integration**, and **Identity & Belonging**. Then I rated 13 competitor platforms against all 16.

> Every platform does Tier 1 at least adequately. Every platform leaves Tier 2 — the social integration jobs — almost entirely unserved. That's a structural market failure, and it's the one worth solving.

A 2023 review of 29 adult sports-participation studies found that the mental-health benefits of rec sports flow through two pathways — physical activity *and* social relationships — with "belonging" explicitly identified as a mechanism. One included study found no relationship at all between activity volume and wellbeing outcomes. Platforms optimizing for access and scheduling while ignoring social integration may be optimizing the wrong pathway entirely.

### [jp.02.insight]
- Number: 02 / The insight
- Heading: Every activity has two fits. Every incumbent only measures one.
- Body:
The reframe was separating **Activity Fit** (skill match, location, schedule) from **Social Fit** (welcoming, competitive intensity, social continuity). Both matter. Either alone produces bad matches and silent churn.

That became the core product hypothesis: *if both fits can be quantified and made visible before a user commits, the social-integration tax on newcomers collapses*.

- **Activity Fit** — two required inputs per sport at onboarding (skill tier, availability), plus two optional signals (years experience, frequency). Self-reports cross-validate against post-session feedback over time, correcting for the well-documented tendency to overestimate skill at sign-up.
- **Social Fit** — scores a group on three dimensions: newcomer welcoming, competitive intensity, and social continuity. Weighting starts from JTBD priority ranking; once feedback data accumulates, weights shift to whichever dimension most predicts whether newcomers return.
- **Two scores visible before RSVP** — the fit scores appear on every activity card, *before* the user commits. Every group knows it's being scored, which changes incentive dynamics at the supply side.

A user can hit 94 on Activity Fit and 66 on Social Fit for the same event — near-perfect skill/location/schedule match, but a competitive-intensity gap that would make them quietly never come back. That's the exact mismatch the category has been invisibly producing for years.

### [jp.03.beachhead]
- Number: 03 / Why now, and where to enter
- Heading: Mid-size U.S. cities are the beachhead.
- Body:
242M Americans participated in sports or fitness in 2023 — ~80% of the population aged six and older. Participation intent has grown 118% since 2023, and one in five Americans now plays in a rec league or plans to (47% among Gen Z). The market is real and growing.

Major metros already have dense league infrastructure. Mid-size cities — the 441 U.S. cities between 75K and 500K residents, covering 64M Americans across 45 states — don't. Discovery is harder, fit is impossible to assess, and no incumbent has meaningfully served them. The need is more acute, not less. It's also a strategic advantage: in markets where even logistics is underserved, JoinPlay can communicate value before every social-integration feature is live.

Within that beachhead, three segments by social motivation:

- **Primarily Social** players — use sports as a vehicle for friendship. High LTV, high word-of-mouth. No incumbent serves them because every major competitor is built around the activity, not the relationship.
- **Balanced Social-Activity** players — want both dimensions optimized. The largest addressable segment and the highest-complexity problem. Primary target.
- **Activity-Focused** players — social benefits are secondary. Existing fitness apps serve them adequately. Secondary market.

### [jp.04.system]
- Number: 04 / The system
- Heading: Three objects, two mirrored profiles, one fit score per dimension.
- Body:
JoinPlay runs on three primary objects — **users**, **groups**, and **activities**. Users build a profile rating themselves on skill, availability, and social preferences. Groups do the same across mirrored dimensions. Groups post activities; every activity card surfaces Activity Fit and Social Fit scores derived from comparing the user profile against the group profile. Post-session feedback refines both the group's validated scores and the user's own preference profile. The next match is more accurate than the last.

Three product principles separate it from the category:

- **Scores before commitment.** Activity Fit and Social Fit visible on every card. No hidden ranking.
- **Scoring groups, not individuals.** People fear being judged. Groups don't. Users reflect on their own experience, not on each other. This was a deliberate pivot away from peer-rating models that bleed trust.
- **Unvalidated scores are labeled.** New groups show a self-reported culture profile clearly distinguished from a validated score. Validation requires a minimum feedback threshold.

**Accessible entry.** Creating a group, joining an activity, and attending sessions costs nothing. After three attended activities, continued access to the intelligence layer requires a $5–8/mo subscription (pending WTP work). The paywall is tied to demonstrated value, not a calendar — three sessions is enough to experience the fit scoring working.

### [jp.05.metrics]
- Number: 05 / What I'd measure instead of vanity
- Heading: (none — number acts as heading)
- Body:
Since there are no real users yet, I won't pretend. The metrics worth watching post-launch are the ones tied to the social-integration thesis — not signups or DAU.

Outcome tiles:
- **≥4.0/5** — Belonging Confidence — avg rating on "I felt welcomed by this group"
- **<14d** — Social Integration Speed — median days from signup to reported sense of belonging
- **≥70%** — Culture Match Accuracy — users rating expected-vs-actual culture alignment ≥4/5
- **≥50%** — Newcomer Absorption — % of newcomers who return to the same group at least twice

Closing body:
These are diagnostic, not vanity. If Belonging Confidence holds at 4.0+ while Newcomer Absorption stays above 50%, the core hypothesis is working. If signups grow but those two drift down, we're scaling a broken experience — which is the specific failure mode I'm designing against.

### [jp.06.status]
- Number: 06 / Where it stands
- Heading: Pre-launch, tightening core loops before I start marketing.
- Outcome tiles:
  - **13** — Sports supported at launch
  - **16** — JTBD jobs mapped across 3 tiers
  - **13** — Competitor platforms rated against the full JTBD framework
  - **PWA** — Progressive Web App — faster iteration, lower discovery friction
- Body:
The MVP is live at joinplay.io, with the social-integration feedback loop in active build. Public launch follows the community-embedded GTM plan: local rec-center partnerships, problem-based search capture ("pickup basketball near me"), and word-of-mouth amplification before any paid acquisition. Quality over volume: healthy density in one city beats fragmented scale across five.

### [jp.07.takeaways]
- Number: 07 / What I'd take to the next role
- Bullets:
  - A working demonstration that a single PM, plus an agentic stack, can execute 0→1 scope that used to require a pod — discovery, PRD, architecture, build, and launch.
  - Operational fluency with the messy parts of 0→1: pricing, legal, payments, ops, analytics instrumentation, safety & moderation design.
  - Hard-won conviction that *transparency in ranking systems* is a product strategy, not a compliance feature — and that measuring the right thing (belonging, not RSVPs) is the single highest-leverage PM decision in a community product.

### [jp.case-next]
- Label: Next case study
- Link: Spec-Check

---

## PAGE 3 — spec-check.html (Case study 02)

### [sc.hero.meta]
- Case study · 02
- Solo build
- Agentic AI · PM tooling
- Live · spec-check-nine.vercel.app

### [sc.hero.title]
Spec-Check

### [sc.hero.kicker]
An AI review system that stress-tests a PRD across five specialist agents — before a line of code gets written.

### [sc.facts]
- Role: Solo — PM & builder
- Stack: Next.js · Claude · OpenAI
- Agents: 5 specialists, 1 orchestrator
- Status: Live beta

---

### [sc.01.why]
- Number: 01 / Why I built this
- Heading: Every bad sprint I've shipped started with a spec I thought was done.
- Body:
After seven years at Amazon writing PRDs for Trust & Safety, I got tired of the same pattern: engineering reads the spec, nods, builds it, and halfway through discovers a missing metric, a mis-scoped edge case, or a stakeholder we forgot to loop in. Costly. Avoidable. Structural.

The best PM tradition for catching this is the "red-team review" — pull in a peer who'll try to break your spec before engineering does. The problem: peers are expensive, slow, and often too polite.

> Agents are neither polite nor tired. They're the ideal red-teamer for a pre-flight spec check.

### [sc.02.system]
- Number: 02 / The system
- Heading: Five specialists, one orchestrator, one readiness score.
- Body:
Spec-Check runs your PRD through five parallel agents, each with a single sharp mandate. The orchestrator collects their findings, deduplicates, ranks severity, and returns a unified **Readiness Score** from 0–100 along with actionable gaps.

- **Technical Feasibility** — flags architecture assumptions, integration risk, unbounded compute, and hand-wave language like "scalable" or "simply."
- **Stakeholder Alignment** — detects missing owners, ambiguous decision rights, and language that papers over unresolved disagreements.
- **Metric Clarity** — checks that success metrics are measurable, attributable, and tied to user behavior (not vanity counters).
- **Edge Case Coverage** — synthesizes failure-mode tests: what breaks at zero, at scale, under partial outages, across regions.
- **Data Privacy** — scans for PII handling, consent paths, retention, and regional compliance gaps (GDPR, CPRA).

### [sc.03.demo]
- Number: 03 / A quick demo
- Body (above interactive radar):
Here's the core output pattern — radar across the five axes, a composite Readiness Score, and the top issues ranked by severity. Click a scenario to see how the chart responds.

- Radar axis labels: TECHNICAL FEASIBILITY · STAKEHOLDER · EDGE CASES · DATA PRIVACY · METRIC CLARITY
- Center label: READINESS
- Scenario buttons: Sample PRD · Privacy-heavy launch · Ambitious, under-spec'd · Polished spec

### [sc.04.decisions]
- Number: 04 / Design decisions
- Body:
**Specialist > generalist.** I initially tried a single agent with a long rubric. It produced mush — every axis scored 60-ish, no sharp findings. Splitting into five single-mandate agents dropped variance and surfaced findings sharp enough to act on. The orchestrator became thinner, not thicker.

**A score, not a verdict.** Readiness Score is a diagnostic, not a gatekeeper. It's ambiguous by design — 62% means "go, but with these three things fixed first." A binary pass/fail would have been easier to build and worse to use.

**Severity bands, not stars.** Findings ship in four bands — Mental Model, Metric Gap, Stakeholder Alert, Edge Case — because that's how engineers triage. The findings got more useful when I stopped being clever with severity names.

### [sc.05.outcomes]
- Number: 05 / Outcomes
- Outcome tiles:
  - **5** — Specialist agents, 1 orchestrator
  - **~45s** — Median review latency for a 4-page PRD
  - **100%** — Of my own PRDs now routed through it
  - **0→1** — Built solo, live on Vercel
- Closing body:
Using Spec-Check on my own work caught three shippable-looking PRDs with critical gaps before they ever hit engineering — one of which would have cost a week of rework.

### [sc.06.lessons]
- Number: 06 / What this project taught me
- Bullets:
  - Orchestrated multi-agent systems are genuinely better than single-agent ones for *judgment* tasks — not because models are stronger, but because mandates stay sharper.
  - The UX around agent output is 70% of the product. Nobody trusts a number without severity, evidence, and a path to act on it.
  - Agentic tools are at their best when they *review* human work, not when they *replace* it.

### [sc.case-next]
- Label: Next case study
- Link: Jan's Prompt Library

---

## PAGE 4 — prompt-library.html (Case study 03)

### [pl.hero.meta]
- Case study · 03
- Solo build
- Prompt engineering
- In production

### [pl.hero.title]
Jan's Prompt Library

### [pl.hero.kicker]
An interactive library of the prompts I actually reach for when I'm shipping with agents — PRD drafting, research synthesis, red-teaming, and vibe-coded prototyping.

---

### [pl.01.preview]
- Number: 01 / Preview
- Heading: A working glimpse of what's launching.
- Body:
Below is a functional preview of the library's browsing experience. Click any prompt to see its full text, the tool it's tuned for, and when to use it. The production version will ship with 60+ prompts organized by PM workflow stage, along with execution examples and failure modes.

- Preview list items (title / tag):
  - PRD cold start / Discovery
  - JTBD synthesis / Research
  - Red-team my spec / Review
  - Metric designer / Metrics
  - Edge case catalog / QA
  - Vibe-code scaffold / Build

### [pl.02.why]
- Number: 02 / Why a prompt library
- Body:
Two years of agentic workflow. Most of the leverage comes from a surprisingly small set of prompts, slowly refined, shared with peers, and refined again. The prompts weren't clever. They were *structured* — role, context, constraints, output format, failure modes.

The library is my attempt to write down what I've learned: the prompts that work, why they're built the way they are, and how they fail. Each entry includes the prompt, the tool it's tuned for, the reasoning behind its structure, and — importantly — how it fails, so you don't have to learn the hard way.

### [pl.03.inside]
- Number: 03 / What's inside at launch
- Bullets:
  - **Discovery prompts** — interview planners, JTBD synthesizers, insight clusterers, narrative extractors.
  - **PRD & spec prompts** — cold-start scaffolds, red-team critiques, metric-clarity checkers, stakeholder-alignment audits.
  - **Research synthesis** — transcript tension finders, quote deduplicators, counter-argument generators.
  - **Vibe-coding prompts** — scaffolding, component design, state modeling, API boilerplate with error paths pre-written.
  - **Ops & meta** — standup summarizers, decision loggers, and the "disagree with me" prompt I use weekly.

### [pl.04.ship]
- Number: 04 / Ship date
- Body:
Late spring 2026. If you want to be notified, the fastest way is a note to jan.mcghee09@gmail.com — I'll add you to a small launch list.

### [pl.case-next]
- Label: Back to
- Link: All work

---

### [pl.prompts.previewCards]
Interactive prompt cards on this page (title / meta / body). Edit body copy freely — braces like `{paste}` are user-fill placeholders.

**Prompt 1**
- Title: PRD cold start
- Meta: Tool: Claude Sonnet · Stage: Discovery → Draft
- Body:
```
You are a senior PM reviewing a raw problem statement.

Take the rough problem below and return:
1. The sharpest one-sentence framing you can produce, written to a skeptical exec.
2. Three competing hypotheses for what the user actually needs.
3. The single measurable outcome that would tell us this is worth building.
4. Three ways this could look successful but be the wrong thing to build.

Constraint: if you don't have enough signal to answer a section, say so — don't invent.

PROBLEM:
{paste raw notes}
```

**Prompt 2**
- Title: JTBD synthesis
- Meta: Tool: Claude · Stage: Research synthesis
- Body:
```
You are synthesizing user interviews using the Jobs-To-Be-Done framework.

I will paste interview transcripts one at a time. For each, extract:
- The functional job ("when __, I want to __, so I can __")
- The emotional job ("when __, I feel __, and I want to feel __")
- Forces of progress (Push / Pull / Anxieties / Habits)
- A verbatim quote that carries the most signal

Do not summarize. Do not generalize across interviews until I say "synthesize."
If a transcript lacks enough signal, flag it and say what you'd need.

[interview pasted]
```

**Prompt 3**
- Title: Red-team my spec
- Meta: Tool: Claude Opus · Stage: Review
- Body:
```
You are a skeptical staff engineer reviewing a PRD.

Your job is to break this spec. Assume good intent but broken execution. Return:

1. Top 3 assumptions that could cause this to fail silently.
2. Any metric that would go up even if the product is failing users.
3. Any edge case the author clearly hasn't considered.
4. Anything that sounds decided but is actually a disagreement dressed up as a decision.

Be specific. Cite the section. No hedging.

PRD:
{paste}
```

**Prompt 4**
- Title: Metric designer
- Meta: Tool: Claude · Stage: Metrics definition
- Body:
```
For this feature, propose a metric tree:
- 1 North Star (user-outcome, not vanity)
- 3 Input metrics (things we can move in a sprint)
- 2 Guardrails (things we must NOT harm)
- 1 "Lies-to-ourselves" metric (common vanity metric we will IGNORE)

For each, include:
- Definition in one sentence
- How we'd measure it
- What a bad answer looks like

FEATURE:
{paste}
```

**Prompt 5**
- Title: Edge case catalog
- Meta: Tool: Claude · Stage: Pre-build QA
- Body:
```
You are a reliability engineer. For the feature below, generate an edge-case catalog.

Cover at minimum:
- Zero state (no data yet)
- Scale state (10x expected load)
- Partial outage (one upstream dependency down)
- Cross-region / timezone / locale
- Malicious input
- Concurrent conflicting writes
- Silent failure modes (where nothing errors but the user is harmed)

For each: the scenario, the expected behavior, and the current spec's answer (or "not covered").

FEATURE:
{paste}
```

**Prompt 6**
- Title: Vibe-code scaffold
- Meta: Tool: Cursor + Claude · Stage: Build
- Body:
```
Scaffold a {stack} project for the feature below.

Before writing code:
1. State the component tree in ASCII.
2. List all client-side state variables and where they live.
3. List all server/API calls and their contracts.
4. Identify the 3 most likely bugs and how you'll guard against them.

Then write the code.

Constraint: no libraries beyond what's in the stack. No "TODO" comments — if it's not done, don't stub it, flag it.

FEATURE:
{paste}
```

---

## End of copy doc

When you hand this back, I'll diff it against the original, update the HTML files, and keep index/case-study framing in sync per CLAUDE.md.
