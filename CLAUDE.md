# CLAUDE.md — Portfolio copy & content guide

Persistent instructions for Claude Code when editing this portfolio. Read this before making any copy, content, or tone changes.

---

## What this project is

A personal portfolio site for **Jan Patrick McGhee** — senior product manager, seven years at Amazon (Trust & Safety / risk / fraud), now founder of **JoinPlay** and actively searching for senior PM or founding-PM roles. Static HTML/CSS/JS hosted on GitHub Pages. No build step.

The site's job is to land roles. Every copy decision should serve that — clarity over cleverness, specificity over polish.

---

## Voice & tone

**First person, reflective, confident without bragging.** Cases are narrated, not listed. The writer sounds like a seasoned PM thinking out loud — not a recruiter, not a marketer, not an AI.

**Do:**
- Open sections with an argument, not a label. ("Adults don't quit sports because they get old. They quit because showing up feels risky.")
- Use italics inside serif headlines for emphasis on the load-bearing noun.
- Use bolded leading phrases on metric bullets (`**$15.3M in revenue** through a strategic incentive funding program.`) so bullets scan without icons.
- Cite real numbers with real context. Every stat should be traceable to something that actually happened.
- Let pullquotes carry the sharp one-liner. Use the `.pullquote` class; one per section max.

**Don't:**
- Don't use emoji. Not in headings, not in bullets, not as decoration.
- Don't invent metrics or outcomes. If there's no data yet (e.g. JoinPlay pre-launch), frame targets honestly as targets. The site already does this in `joinplay.html` § 05 — match that pattern.
- Don't use marketing-speak: "solutions," "leverage," "cutting-edge," "best-in-class," "passionate." If a word could appear on any PM's portfolio, cut it.
- Don't write corporate-bland bullets ("Led cross-functional initiatives"). Every bullet should have a verb, a number, and a consequence.
- Don't add filler sections to balance a layout. Empty space is a design choice.

---

## Factual anchors (keep these straight)

- **Location:** Los Angeles, CA (moving there; no longer targeting Seattle roles). Amazon and JoinPlay historical role entries still say Seattle — that's where the work happened, don't rewrite history.
- **Contact:** jan.mcghee09@gmail.com
- **Links:** joinplay.io (live product, pre-launch), spec-check-nine.vercel.app (live beta)
- **Status:** Actively job-searching. "Open to senior IC or founding PM roles in platform, T&S, risk, or applied AI. Los Angeles or remote."

### JoinPlay (the one that moves a lot — be careful)

- **Stage:** Pre-launch. MVP is live at joinplay.io but has **zero real users**. Jan is tightening core loops before marketing.
- **Category positioning:** "Social sports integration" — a new category, not another league app.
- **Thesis:** Every rec-sports activity has two fits — **Activity Fit** (skill, location, schedule) and **Social Fit** (welcoming, competitive intensity, social continuity). Every incumbent only measures one.
- **Research backing:** 16 JTBD mapped across 3 tiers (Access, Social Integration, Identity), 13 competitor platforms rated.
- **Beachhead:** Mid-size U.S. cities (441 cities, 64M people, 75K–500K residents).
- **Launch scope:** 13 sports supported at launch.
- **Metrics to cite:** Only the target metrics from § 05 of `joinplay.html` (Belonging Confidence ≥4.0/5, Social Integration Speed <14d, Culture Match Accuracy ≥70%, Newcomer Absorption ≥50%). **Never invent post-launch results.** If pressed for outcomes, frame as "what I'll measure" not "what I've achieved."
- **Do not re-introduce** the old fake "80% show-up rate" metric. That was removed deliberately.

### Amazon (2014–2024, Seattle)

- Seven years total, four distinct roles ending as Senior PM on the A-to-z Guarantee platform.
- Key metrics (all real, keep intact): $15.3M revenue, 41.1% ROI, $7.4M annual opex eliminated, 10.6M yearly customers, 2.1M third-party sellers, 98% recall / 91% accuracy on ML automation, 28% seller trust lift, 10% CSAT lift, 40% case-volume reduction.

### Spec-Check

- Solo build. Five specialist agents + one orchestrator. Live beta at spec-check-nine.vercel.app. Produces a 0–100 Readiness Score.

### Prompt Library

- In production. Framed as coming soon with a functional 6-prompt preview. Don't claim it's launched.

---

## Design system (abbreviated — see README.md for full detail)

- **Typography:** Instrument Serif (display), Inter (body/UI), JetBrains Mono (meta/eyebrows). Italics in serif carry emphasis.
- **Color:** Warm paper `#faf7f2`, ink `#1a1814`, single accent `#c8542c`. Dark theme available. **One accent, used sparingly.**
- **No gradients** except the Spec-Check radar glow. **No emoji.** **No pill-shaped buttons.** **No giant rounded corners** (6px max).
- **Rhythm:** 120px between top-level sections; case-study body narrows to ~720px.
- **Three aesthetic modes** (Editorial default, Monolith mono-grid, Studio warm-rounded) wired through the Tweaks panel — don't break these when editing.

---

## Structural conventions

- **Case-study sections** are numbered `01 / ...`, `02 / ...` in mono eyebrow, serif heading follows inline. Keep this pattern for any new section.
- **Outcome blocks** are `.outcomes` grids of `.outcome` cells (big serif numeral + mono label). Four across on desktop.
- **Pullquotes** use `.pullquote`. One per section max.
- **Role entries** on the landing timeline: year range (mono) / title (serif) / org + location (sans) / lede / bullets with bold leading phrase for metrics.

---

## File map

```
index.html            # landing page
joinplay.html         # case study 01 — pre-launch framing, target metrics not achieved metrics
spec-check.html       # case study 02 — includes interactive radar demo
prompt-library.html   # case study 03 — "coming soon" with functional preview
assets/site.css       # all tokens + component styles, do not split
assets/site.js        # theme toggle, count-up, cursor label, Tweaks protocol
uploads/              # all imagery (joinplay.png, spec-check.png, prompt-library.png, jan-headshot.jpg)
```

All paths are relative so the site works under `/portfolio/` on GitHub Pages. Don't introduce absolute paths.

---

## When making copy changes

1. **Match the voice.** Read the surrounding paragraphs before editing; keep cadence and emphasis consistent.
2. **Check factual claims against this file.** If you're asserting a number, a date, a role, or a product status, it should match the anchors above.
3. **Update in all three places.** Changes to JoinPlay framing usually need to land in: the landing-page project card (`index.html` § project-grid), the timeline entry (`index.html` § experience), and the case-study page (`joinplay.html`). Same for Spec-Check across index + spec-check.html. Keep them in sync.
4. **Don't add sections without asking.** The site is deliberately spare. If copy feels short, that's intentional.
5. **Preserve the Tweaks protocol.** `assets/site.js` handles `__edit_mode_available` / `__activate_edit_mode` / `__edit_mode_set_keys`. Don't remove or rename these handlers when touching JS.

---

## When in doubt

Ask Jan. A quick clarification is cheaper than a copy change that misrepresents his work — especially on JoinPlay, where the line between "building" and "launched" matters for job conversations.
