import { Sidebar } from '@/components/layout/Sidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex">
        <Sidebar />
        <article className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-12">
          <div className="prose max-w-3xl">{children}</div>
        </article>
      </div>
    </div>
  );
}
