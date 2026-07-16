# SESA Digital Platform Blueprint

## Positioning

SESA is the official student association platform for the Department of Computer Engineering (Software Engineering), MIT Academy of Engineering.

The website should feel institutional enough to be trusted and contemporary enough to represent a technical student community.

## Brand direction

- **Name:** SESA
- **Full form:** Software Engineering Student Association
- **Motto:** Dream • Build • Achieve
- **Hero statement:** Where software engineers build what’s next.

### Core palette

| Token | Hex | Usage |
|---|---:|---|
| Deep navy | `#08162A` | Hero, footer, admin sidebar |
| Primary navy | `#112647` | Text, brand surfaces |
| Secondary navy | `#14335B` | Gradients and hover states |
| Heritage gold | `#B18345` | Calls to action and highlights |
| Warm ivory | `#FBF5EB` | Main page background |
| Soft slate | `#687587` | Secondary text |

## Logo behavior

- Show the full crest in a short opening splash once per browser session.
- Keep the intro around 1.5 seconds and respect reduced-motion preferences.
- Use a compact crest-and-wordmark treatment in navigation.
- Reserve the full crest for hero, footer, formal pages and official documents.

## Public information architecture

1. Home
2. Events
3. Team
4. Gallery
5. Projects
6. Resources
7. Contact

The homepage contains:

1. Splash screen
2. Sticky navigation
3. Hero
4. Announcement strip
5. Upcoming events
6. About SESA and motto framework
7. Projects and initiatives
8. Gallery preview
9. Team preview
10. Resource hub
11. Participation CTA
12. Footer

## Admin architecture

The first dashboard shell covers:

- Overview
- Events
- Team
- Gallery
- Resources
- Settings

Future backend phases will add role-based authentication, CRUD actions, image uploads, form submissions and audit-friendly status fields.

## Content model

Primary entities:

- Events
- Team members
- Projects
- Resources
- Announcements
- Gallery albums and media
- Contact submissions
- Admin profiles and roles

## Performance rules

- Default to Server Components.
- Keep animation libraries out of static sections.
- Use optimized images.
- Paginate large galleries.
- Load only essential content on the homepage.
- Cache public read-heavy data when Supabase is connected.

## Accessibility rules

- Keyboard-accessible navigation and controls
- Visible focus states
- Semantic headings
- Meaningful image alternatives
- Reduced-motion mode
- Sufficient contrast between navy, ivory and gold combinations

## Deferred scope

Not part of version one:

- AI chatbot
- Discussion forum
- Complex real-time features
- Microservices
- Kubernetes or Docker infrastructure
- Heavy 3D scenes
- Advanced analytics suite

These are deferred because they add maintenance cost without supporting the current department website goal.
