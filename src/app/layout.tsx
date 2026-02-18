import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeScript } from '@/components/layout/ThemeScript';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Aqua Fusion - Design System & Component Library',
    template: '%s | Aqua Fusion',
  },
  description:
    'A comprehensive React component library with design tokens, Tailwind CSS integration, and accessible Radix UI primitives.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-surface text-content-primary antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
