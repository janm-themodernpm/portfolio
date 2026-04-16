{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red173\green176\blue178;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c73333\c74510\c74902;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec3 # Portfolio V2 \'97 Build Instructions\
\
## Who This Is For\
Jan Patrick McGhee. Senior Product Manager. 7 years at Amazon in Trust & Safety\
and ML-driven decisioning. Now also Founder of JoinPlay (live consumer product).\
\
## Design Direction\
- Color palette ("Ink & Paper"): Warm ink-black bg (#12110f), warm cream\
  text (#ece8e1), stone muted (#8a8578), slate blue accent (#5a7d9a),\
  muted amber secondary (#c49a4a), surface (#1a1917), border (#2a2723)\
- Fonts: "DM Mono" for numbers and labels, "Instrument Serif" for display\
  headings, "DM Sans" for all body text\
- Aesthetic: Editorial and architectural. Sharp warmth, not cozy. Someone\
  who ships ML systems and also has taste. Not corporate. Not generic.\
- NO: purple gradients, Inter font, Roboto, centered hero layouts,\
  cookie-cutter card grids\
\
## Page Sections (build in this order)\
1. Hero\
2. Live Products\
3. Key Metrics\
4. Professional Journey\
5. Skills\
6. Education & Languages\
7. Contact / Footer\
\
## Images\
- assets/images/joinplay.png \'97 JoinPlay product image\
- assets/images/spec-check.png \'97 Spec-Check product image\
- assets/images/prompt-library.png \'97 Prompt Library product image\
\
## Content\
Use the content in content.md for all text, names, dates, and metrics.\
\
## Technical Rules\
- Single HTML file (index.html) + separate CSS (assets/css/style.css) +\
  separate JS (assets/js/main.js)\
- Mobile responsive (test at 375px width)\
- Smooth scroll between sections\
- Scroll-triggered animations using IntersectionObserver\
- Counter animation on metrics when scrolled into view\
- No external JavaScript frameworks or libraries (no React, no jQuery)\
- Google Fonts only for font imports\
}