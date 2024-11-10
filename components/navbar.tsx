import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

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

import { NAV_LINKS } from '@/lib/data';
import PelvfixSvg from '../public/pelvfix.svg';

export default function Navbar() {
  return (
    <header className={'w-full bg-muted sticky top-0 z-50'}>
      <nav className="container mx-auto px-4 py-1 lg:py-4">
        <div className="flex justify-between items-center">
          <Button variant={'link'} asChild className="px-2">
            <Link href={'/'}>
              <Image
                src={PelvfixSvg}
                alt="PelvFix Logo"
                className="h-5 w-auto"
                priority
              />
            </Link>
          </Button>
          <div className="hidden lg:flex items-center gap-x-6 text-primary">
            {NAV_LINKS.map((link) => (
              <Button
                asChild
                key={link.title}
                variant={'ghost'}
                className="h-full min-w-[80px]"
              >
                <Link
                  href={link.href}
                  className="no-underline hover:no-underline"
                >
                  {link.title}
                </Link>
              </Button>
            ))}
            <Button asChild className="h-full ml-2">
              <Link href={'/contact'}>Contact</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant={'ghost'}
                className="ring-transparent lg:hidden focus-visible:ring-transparent ring-offset-transparent focus-visible:bg-black/10 h-6 w-6 p-0 mr-2"
              >
                <MenuIcon />
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
              <div className="text-lg text-primary flex flex-col gap-y-4 pt-12">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.title}>
                    <Link
                      href={link.href}
                      className="hover:underline text-lg text-primary w-fit"
                    >
                      {link.title}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link href={'/contact'}>Contact</Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
