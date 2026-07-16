# SESA Website Engineering Rules

This file guides coding agents and future student maintainers.

## Product goal

Build a clean, premium and maintainable department platform—not a cluttered festival clone. The site must support frequent content updates through an admin dashboard and remain understandable to future student batches.

## Locked technologies

- Next.js 15 App Router
- TypeScript in strict mode
- Tailwind CSS
- shadcn/ui-style local components
- Framer Motion only where motion adds clarity
- Supabase for PostgreSQL, Auth and Storage
- Vercel for deployment

Do not add a second backend, Redux, microservices, Docker, Kubernetes or real-time infrastructure without a documented requirement.

## Design rules

- Use the SESA palette: deep navy, warm ivory and heritage gold.
- Maintain strong spacing and typography hierarchy.
- Prefer one dominant CTA per section.
- Avoid neon gradients, excessive glassmorphism and decorative animation.
- The public website may be expressive; the admin dashboard must remain quiet and practical.
- Every interaction must work on mobile and keyboard.
- Respect `prefers-reduced-motion`.

## Code rules

- Keep public content in typed data modules until Supabase is connected.
- Prefer Server Components. Add `"use client"` only for real browser interaction.
- Keep components focused and reusable.
- Do not hard-code repeated content in multiple pages.
- Avoid `any` and unexplained type assertions.
- Add loading, empty and error states when introducing network requests.
- Images must use `next/image` and meaningful alt text unless decorative.
- Never expose Supabase service-role credentials in frontend code.

## Handover rule

A second-year student should be able to understand the folder structure and make a safe content or component change within one day. If an architecture decision makes that unrealistic, simplify it.
