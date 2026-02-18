'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docsNavigation } from '@/lib/navigation';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block">
      <nav className="docs-sidebar sticky top-16 h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r border-line px-4 py-8">
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
      </nav>
    </aside>
  );
}
