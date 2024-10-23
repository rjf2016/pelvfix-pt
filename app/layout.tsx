import type { Metadata } from 'next';
import { DM_Sans, Libre_Baskerville } from 'next/font/google';
import Image from 'next/image';
import './globals.css';

import PelvfixSvg from '../public/pelvfix.svg';
import { Button } from '@/components/ui/button';

const sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const serif = Libre_Baskerville({
  weight: ['400', '700'],
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
    <html lang="en" className="bg-background">
      <body
        className={`${sans.variable} ${serif.variable} antialiased bg-background`}
      >
        {/* <Navbar>
          <Image
            src={PelvfixSvg}
            alt="PelvFix Logo"
            className="object-contain h-6 w-auto"
          />
          <MenuIcon size={24} className="text-black" />
        </Navbar> */}

        <header className={'w-full bg-muted'}>
          <nav className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <Image
                src={PelvfixSvg}
                alt="PelvFix Logo"
                className="object-contain h-6 w-auto"
              />
              {/* contact button */}
              <Button size={'sm'} variant={'ghost'}>
                Contact
              </Button>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
