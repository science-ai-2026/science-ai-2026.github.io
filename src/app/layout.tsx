import type { Metadata } from 'next';
import { siteConfig } from '@/data/workshop';
import './globals.css';

export const metadata: Metadata = {
  title: `${siteConfig.title} | ${siteConfig.conference}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.title} | ${siteConfig.conference}`,
    description: siteConfig.description,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
