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
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow flex flex-col h-full">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
