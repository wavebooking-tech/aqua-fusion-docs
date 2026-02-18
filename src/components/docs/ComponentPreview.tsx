'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type ComponentPreviewProps = {
  /** The live component demo */
  children: ReactNode;
  /** Additional CSS classes for the preview area */
  className?: string;
};

/**
 * ComponentPreview
 *
 * A container that renders a live component demo inside a bordered,
 * padded area with a subtle background grid pattern.
 */
export function ComponentPreview({
  children,
  className,
}: ComponentPreviewProps) {
  return (
    <div className="rounded-ui-lg border border-line overflow-hidden">
      <div className="border-b border-line bg-surface-subtle px-4 py-2">
        <span className="text-xs font-medium text-content-tertiary">
          Preview
        </span>
      </div>
      <div
        className={cn(
          'flex items-center justify-center gap-4 p-8 bg-surface',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
