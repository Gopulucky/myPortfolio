# Gopu Hardik — Portfolio

Personal portfolio for **Gopu Hardik**, Software Engineer & AI Specialist. A one-page site with a 3D hero, scroll animations, and a real project/certification showcase.

Live projects: [github.com/Gopulucky](https://github.com/Gopulucky) · [LinkedIn](https://www.linkedin.com/in/gopu-hardik-842aa530b/)

## Tech stack

- [Vite](https://vite.dev) + [React](https://react.dev)
- [React Three Fiber](https://r3f.docs.pmnd.rs) + [drei](https://github.com/pmndrs/drei) — 3D hero scene
- [Framer Motion](https://www.framer.com/motion/) — scroll reveals, stagger, tilt-on-hover project cards
- [Tailwind CSS v4](https://tailwindcss.com) — utility styling, palette defined in `src/index.css`
- Self-hosted [Inter](https://fonts.google.com/specimen/Inter) variable font via `@fontsource-variable/inter`

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev       # starts the dev server at http://localhost:5173
```

## Build

```bash
npm run build      # outputs a static build to dist/
npm run preview    # serve the production build locally to smoke-test it
```

## Project structure

```
public/
  resume.html        # standalone, print-friendly resume (not a React route)
  images/             # certification screenshots
  certificates/       # certification PDFs
src/
  data/content.js      # single source of truth for all portfolio copy
  scenes/HeroScene.jsx  # React Three Fiber hero visual
  components/
    layout/            # Navbar, Footer
    sections/           # Hero, About, Experience, Certifications, Projects, Contact
    ui/                 # shared presentational pieces (cards, pills, icons)
  hooks/usePrefersReducedMotion.js
  lib/motion.js         # shared Framer Motion variants
```

## Deployment (Vercel)

Import the repo in the [Vercel dashboard](https://vercel.com) — the Vite framework preset is auto-detected (build command `vite build`, output directory `dist`). No `vercel.json` is needed; this is a single static page with anchor-link navigation, no client-side routing.

Alternatively, deploy from the CLI:

```bash
npx vercel --prod
```

## Content

All portfolio copy — bio, skills, timeline, certifications, and projects — lives in [`src/data/content.js`](src/data/content.js). Update that file to change what's shown on the site; certification PDFs and images referenced from it live in `public/certificates/` and `public/images/`.

## Contact

- Email: gopuhardik@gmail.com
- GitHub: [github.com/Gopulucky](https://github.com/Gopulucky)
- LinkedIn: [linkedin.com/in/gopu-hardik-842aa530b](https://www.linkedin.com/in/gopu-hardik-842aa530b/)
