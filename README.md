# SESA Website

Official digital platform of the **Software Engineering Student Association (SESA)**, Department of Computer Engineering (Software Engineering), MIT Academy of Engineering.

> **Dream • Build • Achieve**

## Frontend status

The first frontend foundation includes:

- Logo splash screen shown once per browser session
- Premium navy, ivory and gold design system based on the SESA crest
- Responsive navigation and mobile menu
- Complete public homepage
- Events browser with search and filters
- Team, gallery, projects, resources and contact pages
- Interactive gallery preview
- Functional contact form frontend state
- Administration dashboard shell
- Accessible reduced-motion support
- Reusable data, type and UI component structure

The content is intentionally mock data. Supabase integration will replace it after the frontend and information architecture are approved.

## Locked stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui conventions
- Framer Motion
- Supabase PostgreSQL, Auth and Storage
- Vercel
- GitHub

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Main routes

- `/` — Home
- `/events` — Event listing and filters
- `/team` — Team structure
- `/gallery` — Gallery and preview interaction
- `/projects` — Projects and initiatives
- `/resources` — Searchable resource hub
- `/contact` — Contact and participation form
- `/admin` — Administration dashboard shell

## Environment variables

Copy `.env.example` to `.env.local` when Supabase integration begins.

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Project rules

Read [`AGENTS.md`](./AGENTS.md) before making code changes and [`docs/BLUEPRINT.md`](./docs/BLUEPRINT.md) for product and design decisions.
