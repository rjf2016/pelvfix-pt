import Link from 'next/link';
import { CheckCircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SuccessMessage() {
  return (
    // <div className="flex items-center justify-center w-full h-full">
    <div className="animate-slide-down w-full h-screen z-50 absolute top-0 left-0 bg-background">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <CheckCircleIcon size={64} className="text-emerald-500" />
        <h1 className="text-pretty text-center text-xl my-2">
          Your message has been sent successfully!
        </h1>
        <p>I will get back to you within 24 hours</p>
        <Button asChild className="w-60 mt-2">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
    // </div>
  );
}
