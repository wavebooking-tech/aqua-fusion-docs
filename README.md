# Aqua Fusion Docs

Documentation site for [Aqua Fusion](https://www.npmjs.com/package/@wavebooking/aqua-fusion), the design system powering WaveBooking.

Built with **Next.js 15**, **MDX**, and **Tailwind CSS**.

## What's inside

- **Landing page** with feature overview and quick start guide
- **30 component docs** with props tables and live Storybook embeds
- **13 pattern docs** (ActionMenu, DataTable, FormField, PageHeader, etc.)
- **3 hooks docs** (useMediaQuery, useDisclosure, useDebounce)
- **Core guides** for installation, usage, and theming

## Getting started

```bash
npm install
cp .env.example .env.local   # configure your Storybook URL
npm run dev
```

Open [http://localhost:3003](http://localhost:3003).

## Environment variables

| Variable | Description | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_STORYBOOK_URL` | Base URL for Storybook embeds and links | `http://localhost:6006` |

Copy `.env.example` to `.env.local` and set the deployed Storybook URL.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server (port 3003) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check with TypeScript |

## Deployment

The site is deployed to **Vercel** with automatic deployments via GitHub integration.

- **Push to `main`** → deploys to production
- **Pull requests** → automatic preview deployments

### Setup

1. Import the repository on [vercel.com/new](https://vercel.com/new)
2. Vercel auto-detects Next.js — no extra configuration needed
3. Add the `NEXT_PUBLIC_STORYBOOK_URL` environment variable in **Project Settings → Environment Variables** (once the Storybook is deployed)

### CI (GitHub Actions)

Linting and type-checking run automatically on pushes and PRs via `.github/workflows/ci.yml`. Build and deployment are handled by Vercel.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [MDX](https://mdxjs.com/) for documentation pages
- [Tailwind CSS](https://tailwindcss.com/)
- [@wavebooking/aqua-fusion](https://www.npmjs.com/package/@wavebooking/aqua-fusion) design system
- [Vercel](https://vercel.com/) for deployment
