'use client';

import useScrollDirection from '@/hooks/useScrollDirection';
import { cn } from '@/lib/utils';

export default function Navbar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { scrollDirection, scrolling } = useScrollDirection(100);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-20 transition-transform duration-300 bg-background',
        scrollDirection === 'down' && scrolling
          ? '-translate-y-full'
          : 'translate-y-0'
      )}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">{children}</div>
      </nav>
    </header>
  );
}
