import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

import './globals.css';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const serif = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: { default: 'PelvFix PT', template: '%s | PelvFix PT' },
  description: 'Pelvic Floor Physical Therapy',
  keywords: 'Pelvic Floor, Physical Therapy, Health, Wellness, NJ, Women',
  robots: 'index, follow',
  openGraph: {
    title: 'PelvFix PT',
    description: 'Pelvic Floor Physical Therapy',
    url: 'https://pelvfixpt.com',
    siteName: 'PelvFix PT',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://pelvfixpt.com/og-logo.jpg',
        height: 736,
        width: 736,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('font-sans antialiased', sans.variable, serif.variable)}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow flex flex-col h-full pb-12">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
