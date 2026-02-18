'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const STORYBOOK_BASE_URL =
  process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006';

export type StorybookEmbedProps = {
  /** The Storybook story ID (e.g. "components-button--all-variants") */
  story: string;
  /** Height of the iframe in pixels */
  height?: number;
  /** Additional CSS classes for the wrapper */
  className?: string;
};

/**
 * StorybookEmbed
 *
 * Embeds a Storybook story in an iframe with a header bar containing
 * a "Live Preview" label and an "Open in Storybook" link. Shows a
 * loading spinner until the iframe finishes loading.
 */
export function StorybookEmbed({
  story,
  height = 300,
  className,
}: StorybookEmbedProps) {
  const [loading, setLoading] = useState(true);

  const iframeUrl = `${STORYBOOK_BASE_URL}/iframe.html?id=${story}&viewMode=story&shortcuts=false&singleStory=true`;
  const fullUrl = `${STORYBOOK_BASE_URL}/?path=/story/${story}`;

  return (
    <div
      className={cn(
        'rounded-ui-lg border border-line overflow-hidden',
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-line bg-surface-subtle px-4 py-2">
        <span className="text-xs font-medium text-content-tertiary">
          Live Preview
        </span>
        <a
          href={fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors"
        >
          Open in Storybook
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>

      <div className="relative" style={{ height }}>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-surface">
            <div className="flex flex-col items-center gap-2">
              <svg
                className="h-6 w-6 animate-spin text-primary-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span className="text-xs text-content-tertiary">
                Loading preview...
              </span>
            </div>
          </div>
        )}

        <iframe
          src={iframeUrl}
          title={`Storybook preview: ${story}`}
          className="h-full w-full border-0"
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
