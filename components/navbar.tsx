import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

import PelvfixSvg from '../public/pelvfix.svg';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const NavLinks = [
  {
    title: 'Treatments',
    href: '#treatments',
  },
  {
    title: 'About Us',
    href: '#about',
  },
  {
    title: 'Testimonials',
    href: '#testimonials',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

export default function Navbar() {
  return (
    <header className={'w-full bg-muted'}>
      <nav className="container mx-auto py-3 px-6">
        <div className="flex justify-between items-center">
          <Image
            src={PelvfixSvg}
            alt="PelvFix Logo"
            className="h-5 lg:h-6 w-auto"
          />
          <div className="hidden lg:flex items-center gap-x-4 text-lg text-black h-10">
            {NavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                prefetch={false}
                scroll={false}
                className="hover:bg-white transition-colors py-1 px-2 rounded-xl"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant={'ghost'}
                size={'icon'}
                className="ring-transparent lg:hidden focus-visible:ring-transparent ring-offset-transparent focus-visible:bg-black/10"
              >
                <MenuIcon className="h-6 w-auto" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-muted">
              <VisuallyHidden>
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>
                    This is the navigation menu. Use the links to navigate
                    through the site.
                  </SheetDescription>
                </SheetHeader>
              </VisuallyHidden>
              <div className="text-lg text-black flex flex-col gap-y-4 pt-12">
                {NavLinks.map((link) => (
                  <SheetClose asChild key={link.title}>
                    <Link
                      href={link.href}
                      prefetch={false}
                      scroll={false}
                      className="hover:underline text-lg text-black w-fit"
                    >
                      {link.title}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
