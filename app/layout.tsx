import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from '@/lib/schema';

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
    default: 'In-Home Pelvic Floor Physical Therapy | Middlesex County NJ',
    template: '%s | PelvFix',
  },
  description:
    'Mobile pelvic floor physical therapy serving Middlesex County, South Brunswick, and Central NJ. Dr. Suzanne Chedid Fahey brings expert one-on-one care directly to your home.',
  keywords:
    'Pelvic Floor, Physical Therapy, Health, Wellness, NJ, Women, Pelvic PT, Middlesex County, South Brunswick, in-home PT, mobile physical therapy',
  robots: 'index, follow',

  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'PelvFix',
    title: 'In-Home Pelvic Floor Physical Therapy | Middlesex County NJ',
    description:
      'Mobile pelvic floor physical therapy serving Middlesex County, South Brunswick, and Central New Jersey. Dr. Suzanne Chedid Fahey brings expert one-on-one care directly to your home.',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PelvFix Physical Therapy — in-home pelvic floor physical therapy in Middlesex County, NJ',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'In-Home Pelvic Floor Physical Therapy | Middlesex County NJ',
    description:
      'Mobile pelvic floor physical therapy serving Middlesex County, South Brunswick, and Central New Jersey. Dr. Suzanne Chedid Fahey brings expert one-on-one care directly to your home.',
    images: [
      {
        url: '/og-image.jpg',
        alt: 'PelvFix Physical Therapy — in-home pelvic floor physical therapy in Middlesex County, NJ',
      },
    ],
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
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en">
      <body
        className={cn(
          'font-sans antialiased bg-muted',
          sans.variable,
          serif.variable,
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow flex flex-col h-full pb-12 bg-white">
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
