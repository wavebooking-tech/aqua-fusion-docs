'use client';

import { type ReactNode, useCallback, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export type CodeBlockProps = {
  /** The code content to display */
  children: ReactNode;
  /** Optional title displayed in a header bar above the code */
  title?: string;
};

/**
 * CodeBlock
 *
 * A styled container for code snippets with an optional title bar
 * and a copy-to-clipboard button that appears on hover.
 */
export function CodeBlock({ children, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCopy = useCallback(async () => {
    if (!contentRef.current) return;

    const text = contentRef.current.innerText;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for environments where clipboard API is unavailable
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return (
    <div className="group relative rounded-ui-lg border border-line overflow-hidden">
      {title && (
        <div className="border-b border-line bg-surface-subtle px-4 py-2">
          <span className="text-xs font-medium text-content-tertiary">
            {title}
          </span>
        </div>
      )}

      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          'absolute right-3 top-3 z-10',
          'rounded-ui-sm border border-line bg-surface px-2 py-1',
          'text-xs font-medium text-content-secondary',
          'opacity-0 group-hover:opacity-100',
          'transition-opacity duration-150',
          'hover:bg-surface-subtle',
          'focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-500',
          title && 'top-12'
        )}
        aria-label="Copy code to clipboard"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>

      <div ref={contentRef}>{children}</div>
    </div>
  );
}
