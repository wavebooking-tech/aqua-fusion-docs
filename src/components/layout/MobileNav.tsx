'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docsNavigation } from '@/lib/navigation';

const STORYBOOK_URL =
  process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-ui-md p-2 text-content-secondary transition-colors hover:bg-surface-subtle hover:text-content-primary"
        aria-label="Open navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M3 12h18" />
          <path d="M3 6h18" />
          <path d="M3 18h18" />
        </svg>
      </button>

      {/* Backdrop + Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-backdrop bg-black/50"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div className="fixed inset-y-0 left-0 z-modal w-72 overflow-y-auto bg-surface shadow-ui-xl">
            {/* Drawer header */}
            <div className="flex items-center justify-between border-b border-line px-4 py-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-ui-md bg-primary-500 text-sm font-bold text-white">
                  AF
                </span>
                <span className="font-display text-lg font-semibold text-content-primary">
                  Aqua Fusion
                </span>
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-ui-md p-2 text-content-secondary transition-colors hover:bg-surface-subtle hover:text-content-primary"
                aria-label="Close navigation menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation content */}
            <div className="px-4 py-6">
              {/* Top-level links */}
              <div className="mb-6 space-y-1">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={
                    pathname === '/'
                      ? 'block rounded-ui-md px-3 py-2 text-sm font-medium bg-primary-50 text-primary-700'
                      : 'block rounded-ui-md px-3 py-2 text-sm font-medium text-content-secondary transition-colors hover:bg-surface-subtle hover:text-content-primary'
                  }
                >
                  Home
                </Link>
                <a
                  href={STORYBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-ui-md px-3 py-2 text-sm font-medium text-content-secondary transition-colors hover:bg-surface-subtle hover:text-content-primary"
                >
                  Storybook
                </a>
              </div>

              {/* Doc navigation groups */}
              <ul className="space-y-6">
                {docsNavigation.map((group) => (
                  <li key={group.title}>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-content-tertiary">
                      {group.title}
                    </h4>
                    <ul className="space-y-1">
                      {group.items.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className={
                                isActive
                                  ? 'block rounded-ui-md px-3 py-1.5 text-sm font-medium bg-primary-50 text-primary-700'
                                  : 'block rounded-ui-md px-3 py-1.5 text-sm text-content-secondary transition-colors hover:bg-surface-subtle hover:text-content-primary'
                              }
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
