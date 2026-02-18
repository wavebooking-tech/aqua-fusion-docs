import Link from 'next/link';
import { CodeSnippet } from '@/components/landing/CodeSnippet';

const STORYBOOK_URL =
  process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006';

const componentCategories = [
  {
    title: 'Form Controls',
    items: ['Button', 'Input', 'Select', 'Checkbox', 'Switch', 'Textarea', 'RadioGroup'],
  },
  {
    title: 'Display',
    items: ['Avatar', 'Badge', 'Icon', 'Typography', 'Progress', 'Skeleton', 'Tooltip'],
  },
  {
    title: 'Layout',
    items: ['Card', 'Accordion', 'Tabs', 'Divider', 'Drawer'],
  },
  {
    title: 'Overlays',
    items: ['Dialog', 'Popover', 'Toast', 'Alert'],
  },
  {
    title: 'Patterns',
    items: ['FormField', 'DataTable', 'ActionMenu', 'EmptyState', 'PageHeader', 'StatCard'],
  },
];

const features = [
  {
    title: '30+ Components',
    description:
      'Buttons, inputs, cards, dialogs, tables, and more. Built on accessible Radix UI primitives.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L12 16.5l-5.571-2.25m11.142 0L21.75 16.5 12 21.75 2.25 16.5l4.179-2.25" />
      </svg>
    ),
  },
  {
    title: 'Design Tokens',
    description:
      'Colors, typography, spacing, shadows, and animations as semantic CSS custom properties.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125V18a3.75 3.75 0 0 1-3.75 3.75Zm0 0h13.125C21.496 21 22 20.496 22 19.875v-5.25c0-.621-.504-1.125-1.125-1.125H14.25M3.375 13.5h3.75m-3.75-3h3.75" />
      </svg>
    ),
  },
  {
    title: 'Tailwind CSS Preset',
    description:
      'Drop-in preset that maps all design tokens to Tailwind utility classes. Zero configuration needed.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'TypeScript First',
    description:
      'Full type definitions with IntelliSense support. Every prop documented and typed.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Dark Mode',
    description:
      'Built-in dark mode with semantic color tokens. Toggle with a single CSS class.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>
    ),
  },
  {
    title: 'Tree-Shakeable',
    description:
      'ESM + CJS output with code splitting. Import only what you use for minimal bundle size.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
];

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-surface to-surface opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-ui-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
              <span className="h-2 w-2 rounded-full bg-primary-500" />
              v0.1.0 — Now available on npm
            </div>
            <h1 className="font-display text-5xl font-bold tracking-tight text-content-primary sm:text-6xl">
              Aqua Fusion
            </h1>
            <p className="mt-4 text-xl text-content-secondary sm:text-2xl">
              A design system and React component library for building modern
              web applications with Tailwind CSS.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center rounded-ui-lg bg-primary-600 px-8 py-3 text-sm font-semibold text-white shadow-ui transition-colors hover:bg-primary-700"
              >
                Get Started
              </Link>
              <Link
                href="/docs/components"
                className="inline-flex items-center rounded-ui-lg border border-line bg-surface px-8 py-3 text-sm font-semibold text-content-primary shadow-ui-sm transition-colors hover:bg-surface-subtle"
              >
                Browse Components
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-xl">
            <CodeSnippet
              code="npm install @wavebooking/aqua-fusion"
              language="bash"
              title="Terminal"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-line py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-content-primary">
              Everything you need to build
            </h2>
            <p className="mt-4 text-lg text-content-secondary">
              Production-ready components with design tokens, accessibility, and
              full TypeScript support.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-ui-xl border border-line bg-surface p-6 transition-shadow hover:shadow-ui-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-ui-lg bg-primary-50 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-content-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-content-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Categories */}
      <section className="border-b border-line py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-content-primary">
              Component Library
            </h2>
            <p className="mt-4 text-lg text-content-secondary">
              From atomic components to composite patterns, everything you need
              for a complete UI.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {componentCategories.map((category) => (
              <div key={category.title}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-content-tertiary">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/docs/components/${item.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase()}`}
                        className="text-sm text-content-secondary transition-colors hover:text-primary-600"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Code */}
      <section className="border-b border-line py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-content-primary">
                Get started in 3 steps
              </h2>
              <p className="mt-4 text-lg text-content-secondary">
                Install the package, configure Tailwind, import the theme, and
                start building.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-content-primary">
                      Add the Tailwind preset
                    </h3>
                    <p className="mt-1 text-sm text-content-secondary">
                      Include <code className="rounded bg-surface-muted px-1 py-0.5 text-xs text-primary-700">aquaFusionPreset</code> in
                      your tailwind.config.js
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-content-primary">
                      Import theme CSS
                    </h3>
                    <p className="mt-1 text-sm text-content-secondary">
                      Add <code className="rounded bg-surface-muted px-1 py-0.5 text-xs text-primary-700">@wavebooking/aqua-fusion/styles/theme.css</code> to
                      your app entry
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-content-primary">
                      Use components
                    </h3>
                    <p className="mt-1 text-sm text-content-secondary">
                      Import from <code className="rounded bg-surface-muted px-1 py-0.5 text-xs text-primary-700">@wavebooking/aqua-fusion</code> and
                      start building
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <CodeSnippet
                code={`import { Button, Card, Typography } from '@wavebooking/aqua-fusion';

export function MyComponent() {
  return (
    <Card className="p-6">
      <Typography variant="h2">
        Hello, Aqua Fusion
      </Typography>
      <Button variant="default" className="mt-4">
        Get Started
      </Button>
    </Card>
  );
}`}
                language="tsx"
                title="MyComponent.tsx"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-ui-2xl bg-gradient-to-br from-primary-600 to-primary-800 px-8 py-16 text-center shadow-ui-lg sm:px-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white">
              Ready to build?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
              Start using Aqua Fusion in your project today. Check out the docs,
              browse Storybook, or install from npm.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center rounded-ui-lg bg-white px-8 py-3 text-sm font-semibold text-primary-700 shadow-ui transition-colors hover:bg-primary-50"
              >
                Read the docs
              </Link>
              <a
                href={STORYBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-ui-lg border border-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Open Storybook
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
