<div align="center">

<img src="public/assets/images/logo.png" width="72" alt="ByteSpace logo"/>

# ByteSpace

**An online course platform — learn, teach, and grow.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-003be2?style=for-the-badge&logo=vercel&logoColor=white)](https://byte-space-liard.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-a855f7?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)

</div>

---

## About

ByteSpace is a modern, fully responsive front-end for an online learning platform.
Learners can browse a course catalog, filter and search courses, and view detailed
course pages — while creators get their own profile pages to showcase their work.

## Features

- **Landing page** — animated hero with a working course search bar, skill categories, featured courses, learning paths, creator call-to-action, and testimonials
- **Course catalog** — live search, category chips, and a responsive 3/2/1-column course grid
- **Course details** — tabbed content (About / Lessons / Reviews), lesson list, pricing card, and instructor profile
- **Creator profiles** — creator stats, follow button, and all courses by that creator
- **Authentication pages** — sign-up and sign-in with client-side validation and social sign-in buttons
- **Custom 404 page** — any unknown route or path renders a styled not-found page
- **Fully responsive** — desktop, tablet, and mobile layouts with a hamburger menu on small screens
- **Hash-based routing** — lightweight client-side routing with zero extra dependencies

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite 8](https://vite.dev/) | Dev server & bundler |
| CSS Modules | Scoped, component-level styling |
| Vercel | Hosting & deployment |

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/AnikaTahshin/ByteSpace.git
cd ByteSpace

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app opens at `http://localhost:5173`.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Pages & Routes

Routing is hash-based — every route below also works after a hard refresh,
and unknown paths fall back to the 404 page (a Vercel rewrite serves the app
for all paths).

| Route | Page |
| --- | --- |
| `/#/` | Landing page |
| `/#/courses` | Course catalog |
| `/#/courses/:slug` | Course details |
| `/#/creators` | Creator profile |
| `/#/signup` | Sign up |
| `/#/signin` | Sign in |
| anything else | 404 — page not found |

## Project Structure

```
src/
├── components/
│   ├── Navbar/            # Top navigation (with mobile hamburger menu)
│   ├── Hero/              # Landing hero with floating info cards
│   ├── SearchBar/         # Course search input
│   ├── Categories/        # Skill category pills
│   ├── CourseCard/        # Reusable course card
│   ├── Courses/           # Featured courses section (landing)
│   ├── CoursesPage/       # Full course catalog page
│   ├── CourseDetailsPage/ # Tabbed course details page
│   ├── CreatorsPage/      # Creator profile page
│   ├── SignUpPage/        # Sign-up page
│   ├── SignInPage/        # Sign-in page
│   ├── NotFoundPage/      # 404 page
│   ├── Footer/            # Footer with newsletter form
│   └── ...                # Other landing sections & shared UI
├── data/
│   └── courses.ts         # Course catalog data
├── App.tsx                # Hash router
└── index.css              # Global styles & design tokens
```

## Deployment

The project deploys as a static site on [Vercel](https://vercel.com/).
The included `vercel.json` rewrites all paths to `index.html`, so the SPA
(and its 404 page) works on every URL.

## License

This project is for learning purposes.
