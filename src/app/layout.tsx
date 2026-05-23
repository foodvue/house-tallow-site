import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'House Tallow — Slow-made by hand. Indiana.',
  description:
    'Handmade tallow soap, slow-cured for six weeks. Sealed by the house. Made in Indiana.',
  openGraph: {
    title: 'House Tallow',
    description: 'Slow-made by hand. Indiana.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
