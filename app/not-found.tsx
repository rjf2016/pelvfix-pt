import Link from 'next/link';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '404 - Not Found',
};

export default function NotFound() {
  return (
    <div className="container flex flex-grow flex-col px-4 py-40 justify-center items-center">
      <h1 className="text-3xl md:text-4xl text-primary font-medium tracking-tight">
        404 - Not Found
      </h1>
      <p className="text-lg">Could not find requested resource</p>
      <Button asChild className="mt-4 w-40">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
