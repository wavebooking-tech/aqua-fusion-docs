import type { MDXComponents } from 'mdx/types';
import { PropsTable } from '@/components/docs/PropsTable';
import { StorybookEmbed } from '@/components/docs/StorybookEmbed';
import { ComponentPreview } from '@/components/docs/ComponentPreview';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-4 mt-8 text-4xl font-bold tracking-tight text-content-primary first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2
        id={id}
        className="mb-3 mt-10 text-2xl font-semibold tracking-tight text-content-primary scroll-mt-24 border-b border-line pb-2"
      >
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3
        id={id}
        className="mb-2 mt-8 text-xl font-semibold text-content-primary scroll-mt-24"
      >
        {children}
      </h3>
    ),
    h4: ({ children, id }) => (
      <h4
        id={id}
        className="mb-2 mt-6 text-lg font-semibold text-content-primary scroll-mt-24"
      >
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-7 text-content-secondary">{children}</p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="font-medium text-primary-600 underline underline-offset-4 hover:text-primary-700"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2 text-content-secondary">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2 text-content-secondary">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="mb-4 border-l-4 border-primary-300 pl-4 italic text-content-tertiary">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      if (!className) {
        return (
          <code className="rounded bg-surface-muted px-1.5 py-0.5 text-sm font-mono text-primary-700 before:content-none after:content-none">
            {children}
          </code>
        );
      }
      return <code className={className}>{children}</code>;
    },
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto rounded-ui-lg border border-line">
        <table className="w-full text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-surface-subtle">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="border-b border-line px-4 py-3 text-left font-semibold text-content-primary">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-b border-line-subtle px-4 py-3 text-content-secondary">
        {children}
      </td>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-surface-subtle">{children}</tr>
    ),
    hr: () => <hr className="my-8 border-line" />,
    PropsTable,
    StorybookEmbed,
    ComponentPreview,
    ...components,
  };
}
