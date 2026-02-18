import Link from 'next/link';

const STORYBOOK_URL =
  process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006';

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-subtle">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-ui-md bg-primary-500 text-sm font-bold text-white">
                AF
              </span>
              <span className="font-display text-lg font-semibold text-content-primary">
                Aqua Fusion
              </span>
            </div>
            <p className="mt-3 text-sm text-content-secondary">
              A design system and component library for building modern web
              applications with React and Tailwind CSS.
            </p>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-content-primary">
              Documentation
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-content-secondary transition-colors hover:text-content-primary"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/getting-started"
                  className="text-sm text-content-secondary transition-colors hover:text-content-primary"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/components"
                  className="text-sm text-content-secondary transition-colors hover:text-content-primary"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/theming"
                  className="text-sm text-content-secondary transition-colors hover:text-content-primary"
                >
                  Theming
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-content-primary">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://github.com/wavebooking-tech/wavebooking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-content-secondary transition-colors hover:text-content-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/@wavebooking/aqua-fusion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-content-secondary transition-colors hover:text-content-primary"
                >
                  npm
                </a>
              </li>
              <li>
                <a
                  href={STORYBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-content-secondary transition-colors hover:text-content-primary"
                >
                  Storybook
                </a>
              </li>
            </ul>
          </div>

          {/* Package Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-content-primary">
              Package
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <span className="inline-block rounded-ui-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700">
                  v0.1.0
                </span>
              </li>
              <li>
                <span className="text-sm text-content-secondary">
                  MIT License
                </span>
              </li>
              <li>
                <span className="text-sm text-content-secondary">
                  React 18 / 19
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-line pt-6">
          <p className="text-center text-sm text-content-tertiary">
            Built by the WaveBooking team. Released under the MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
