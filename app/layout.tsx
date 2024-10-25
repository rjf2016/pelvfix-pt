import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

import './globals.css';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

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
  title: 'PelvFix PT',
  description: 'Pelvic Floor Physical Therapy',
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
