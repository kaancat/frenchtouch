# Window Cleaning Quote App Manifest

## Project Overview
**Client:** French Touch  
**Project Name:** Klik-en-pris MVP  
**Purpose:** Build a modern, highly usable, and visually premium quote generator for window cleaning services. The app will replicate and improve upon the booking experience of major players in the Danish market (e.g., Spejlblank.dk), combining intuitive UX with a scalable tech foundation. Ultimately, this MVP will serve as a live prototype for French Touch to evaluate the concept, test workflows, and determine if a full-scale rollout is viable.
Note: The first implementation of the app will be fully in Danish. All UI copy, buttons, tooltips, and flow labels should default to Danish. Multilingual support (e.g., English) can be added in later phases.
---

## Tech Stack
This MVP will be developed using a modern JavaScript stack with scalability, developer efficiency, and future WordPress embedding in mind.

- **Frontend:** Next.js (React-based framework)
- **Styling:** Tailwind CSS for utility-first styling and rapid prototyping
- **Database & Auth:** Supabase (PostgreSQL-based) for user registration, storing orders, and future CRM expansion
- **Hosting:** Vercel (optimized for Next.js and rapid deployment)
- **Payments (Future):** Stripe integration planned for post-MVP

We choose this stack to ensure:
- Seamless frontend/backend integration
- Easy embedding (via iframe or static export) into a WordPress environment
- Fast loading, responsive interface
- Ability to expand into payment flows and dashboards later

---

## Brand Integration
French Touch has a clean, elegant, and slightly playful identity that will be translated into a professional, SaaS-style web UI. Unlike the relatively flat and dense feel of Spejlblank.dk, our goal is a bright, confident, and smooth interface.

**Colors**:
- **Primary:** `#255071` (used for backgrounds, buttons, strong call-to-action)
- **Accent:** `#db413f` (used for visual highlights, badges, hover effects)

**Logo:** ![French Touch Logo](https://s3-eu-west-1.amazonaws.com/tpd/logos/65b249348520b59532495e56/0x0.png)  
**Mascot:** ![Mascot](https://fs.frenchtouch.dk/wp-content/uploads/2025/05/Frenchtouchguygoodblue-977x1024.webp)

Typography and visual rhythm will follow modern SaaS patterns: lots of white space, bold headlines, clear hierarchy, and animated transitions where appropriate.

The mascot should be present in the UI — ideally in the lower-left corner as a fixed visual element, offering a playful but branded touch. It may serve for interaction in the future (e.g., tips, chat).

---

## Design Goals & Inspirations

The current reference site [Spejlblank.dk](https://spejlblank.dk) is functional but outdated:

- It uses heavy green with little design variety
- Lacks transitions, polish, microinteractions
- Dense structure, minimal UX refinement

Our app will be a **visually cleaner, more modern, and mobile-optimized version** of Spejlblank’s quote tool.

Our app will:
- Use whitespace generously
- Apply Tailwind transitions and effects (e.g., `hover:scale-105`, `ease-in-out`, `duration-200`)
- Animate step changes smoothly (e.g., Framer Motion)
- Feature responsive layouts for mobile-first usability
- Leverage Iconify for vector icons

We will take design cues from:
- **Spejlblank.dk** (as a base flow reference to improve on)
- **Framer.com** (fluid pricing selectors, modern SaaS polish)
- **Cron** (clean layout, soft UI, subtle depth)

---

## [Further content truncated for brevity...]