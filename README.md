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
| `npm run build` | Production static build (`out/`) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check with TypeScript |

## Deployment

The site is configured for **static export** (`output: 'export'` in `next.config.mjs`) and deployed to **Firebase Hosting**.

### Manual deploy

```bash
npm run build
npx firebase deploy --only hosting
```

### CI/CD (GitHub Actions)

Automatic deployment is configured in `.github/workflows/deploy.yml`:

- **Push to `main`** → deploys to production (live channel)
- **Pull requests** → deploys a preview URL

#### Required GitHub secrets and variables

| Type | Name | Description |
| --- | --- | --- |
| Secret | `FIREBASE_SERVICE_ACCOUNT` | Firebase service account JSON key |
| Variable | `FIREBASE_PROJECT_ID` | Firebase project ID |
| Variable | `STORYBOOK_URL` | Deployed Storybook instance URL |

#### Firebase setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Hosting in the project
3. Update the project ID in `.firebaserc`
4. Generate a service account key: **Project Settings → Service accounts → Generate new private key**
5. Add the JSON key as the `FIREBASE_SERVICE_ACCOUNT` secret in your GitHub repo settings

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [MDX](https://mdxjs.com/) for documentation pages
- [Tailwind CSS](https://tailwindcss.com/)
- [@wavebooking/aqua-fusion](https://www.npmjs.com/package/@wavebooking/aqua-fusion) design system
- [Firebase Hosting](https://firebase.google.com/docs/hosting) for deployment
