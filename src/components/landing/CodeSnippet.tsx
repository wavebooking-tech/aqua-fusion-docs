import { codeToHtml } from 'shiki';

export type CodeSnippetProps = {
  /** The code string to display */
  code: string;
  /** Programming language label (e.g. "bash", "tsx", "js") */
  language?: string;
  /** Optional title displayed in a header bar above the code */
  title?: string;
};

/**
 * CodeSnippet
 *
 * A server-rendered, dark-themed code display block with optional title bar.
 * Used on the marketing landing page for installation and usage examples.
 */
export async function CodeSnippet({ code, language, title }: CodeSnippetProps) {
  const highlighted = await codeToHtml(code, {
    lang: language || 'text',
    theme: 'github-dark',
  });

  return (
    <div className="overflow-hidden rounded-lg border border-gray-800">
      {title && (
        <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-950 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-gray-700" />
            <span className="h-3 w-3 rounded-full bg-gray-700" />
            <span className="h-3 w-3 rounded-full bg-gray-700" />
          </div>
          <span className="ml-2 text-xs font-medium text-gray-400">
            {title}
          </span>
        </div>
      )}

      <div
        className="[&_pre]:overflow-x-auto [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-relaxed [&_pre]:rounded-none [&_code]:font-[JetBrains_Mono,monospace]"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
}
