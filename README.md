# Mayuri Mushrooms — Website

A premium, animated React website for Mayuri Mushrooms, a Chennai-based oyster mushroom farm and training institute.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (scroll reveals, page transitions, micro-interactions)

- Lenis (smooth scrolling)
- React Router v7
- React Hook Form (Pre-Order + Contact forms)
- Swiper (testimonials carousel)
- React CountUp (animated stats)
- React Icons

## Typography

Three deliberately different typefaces, set as CSS variables in `src/index.css`:

- **Display** — [Fraunces](https://fonts.google.com/specimen/Fraunces) (`--font-display`, `.font-display`) — a characterful, optical-size variable serif used for the hero headline and big section titles. Used italic in a few spots for an editorial accent.
- **Heading** — [Schibsted Grotesk](https://fonts.google.com/specimen/Schibsted+Grotesk) (`--font-heading`, `.font-heading`) — a distinctive grotesk (not Poppins/Montserrat) used for nav links, buttons, card titles and eyebrows.
- **Body** — [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) (`--font-body`, set as the default on `body`) — used for paragraph copy.

To swap any of them, change the Google Fonts `@import` at the top of `src/index.css` and the matching `--font-*` variable underneath.

## Getting Started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project Structure

```
src/
  components/
    3d/          # React Three Fiber hero mushroom scene
    home/        # Homepage sections (Hero, WhyChooseUs, etc.)
    layout/      # Navbar, Footer, LoadingScreen, ScrollProgress, ThemeToggle, SEO
    ui/          # Reusable primitives: buttons, cards, form fields, reveals
  hooks/         # useLenis (smooth scroll)
  lib/           # constants.js — all site copy and content lives here
  pages/         # One file per route (Home, About, Pre-Order, Blog, Training, Contact)
```

## Editing Content

Nearly all copy (pricing, contact details, workshop schedule, testimonials, etc.)
lives in `src/lib/constants.js`, so most text updates don't require touching
component code.

## Connecting the Forms

The Pre-Order and Contact forms currently log submissions to the console and
show a success state. To make them functional, wire up EmailJS or Formspree
inside the `onSubmit` handlers in:

- `src/pages/PreOrder.jsx`
- `src/pages/Contact.jsx`

Both already use `react-hook-form`, so validation and submission state
(`isSubmitting`) are ready to go — just replace the `await new Promise(...)`
placeholder with your EmailJS `send()` call or a `fetch()` to your Formspree
endpoint.

## 3D Hero Mushroom

The hero's rotating oyster mushroom cluster (`src/components/3d/MushroomModel.jsx`)
is built procedurally from primitives (no external .glb needed), so there's
zero asset loading time. It floats, rotates slowly, and responds to pointer
position. Swap in a real GLTF model later via `useGLTF` from `@react-three/drei`
if you'd like photoreal geometry.

## Deployment

`npm run build` outputs a static `dist/` folder — deploy it to Vercel,
Netlify, Cloudflare Pages, or any static host.
