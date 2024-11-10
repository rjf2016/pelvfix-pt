import Link from 'next/link';
import { CheckCircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SuccessMessage() {
  return (
    <div className="flex flex-col h-full items-center space-y-4">
      <CheckCircleIcon className="text-emerald-500 w-16 h-16" />
      <div>
        <h1 className="text-pretty text-center text-xl text-primary tracking-tighter mt-2">
          Your message has been sent!
        </h1>
        <p>I will get back to you within 24 hours</p>
      </div>
      <Button asChild className="w-60 mt-4">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
