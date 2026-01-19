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
  metadataBase: new URL('https://www.pelvfixpt.com'),
  title: {
    default: 'PelvFix PT - Mobile Pelvic Floor Physical Therapy in Central NJ',
    template: '%s - PelvFix PT',
  },
  description:
    'Mobile pelvic floor physical therapy serving Central NJ. Dr. Suzanne Chedid brings expert one-on-one care directly to your home.',
  keywords:
    'Pelvic Floor, Physical Therapy, Health, Wellness, NJ, Women, Pelvic PT',
  robots: 'index, follow',

  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'PelvFix PT',
    title: 'PelvFix PT - Mobile Pelvic Floor Physical Therapy in Central NJ',
    description:
      'Mobile pelvic floor physical therapy serving Central New Jersey. Dr. Suzanne Chedid brings expert one-on-one care directly to your home.',
    locale: 'en_US',
    images: [
      {
        url: 'https://pelvfixpt.com/og-logo.jpg',
        height: 736,
        width: 736,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'PelvFix PT - Mobile Pelvic Floor Physical Therapy in Central NJ',
    description:
      'Mobile pelvic floor physical therapy serving Central New Jersey. Dr. Suzanne Chedid brings expert one-on-one care directly to your home.',
    images: ['https://pelvfixpt.com/og-logo.jpg'],
  },

  alternates: {
    canonical: '/',
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
