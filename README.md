# Anber Aziz — Portfolio

A dark, neon-blue, glassmorphic portfolio site built with React, Vite, Tailwind CSS, and Framer Motion. Content is populated entirely from Anber Aziz's CV.

## Tech Stack

- **React 18** + **Vite 5** — app shell & build tooling
- **Tailwind CSS 3** — utility-first styling, custom neon/navy design tokens
- **Framer Motion** — scroll-triggered reveals, hover/tap micro-interactions
- **React Router** — routing shell (single-page, anchor-based navigation)
- **React Icons** — Heroicons + Font Awesome icon sets

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → opens http://localhost:5173

# 3. Build for production
npm run build
# → outputs to /dist

# 4. Preview the production build
npm run preview
```

## Project Structure

```
src/
├── components/      # Sidebar, Hero, About, Skills, Projects, Experience,
│                     #   Education, Contact, Footer, BackgroundFX, etc.
├── pages/
│   └── Home.jsx      # Assembles all sections into the single-page layout
├── data/
│   └── profile.js     # All content — name, skills, projects, experience,
│                       #   education, certifications — sourced from the CV
├── App.jsx
├── main.jsx
└── index.css         # Tailwind layers + glassmorphism/neon utility classes
```

## Customizing Content

All text content lives in `src/data/profile.js`. Update the `profile`, `skillCategories`, `projects`, `experience`, `education`, `certifications`, and `languages` exports to change what's displayed — no need to touch component files.

## Notes

- **Profile photo**: the hero currently shows initials in a glowing circle as a placeholder. Drop a real photo into `src/assets/` and swap the placeholder markup in `src/components/Hero.jsx` for an `<img>` tag.
- **Resume download**: `profile.resumeUrl` points to `/Anber_Aziz_CV.pdf`. Add your CV PDF to the `public/` folder (create it if it doesn't exist) under that exact filename, or update the path in `src/data/profile.js`.
- **Contact form**: currently simulates a successful send client-side. To actually deliver messages, wire the `handleSubmit` function in `src/components/Contact.jsx` to a backend endpoint or a service like Formspree / EmailJS.
- **CyberGuard project & live demo / GitHub links**: the CyberGuard FYP description was written based on your background in network/security systems — update `src/data/profile.js` with the real project details, and replace the GitHub/demo URLs across `projects` with the actual repository and deployed links.
