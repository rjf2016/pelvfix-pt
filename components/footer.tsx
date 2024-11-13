import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { SOCIAL_LINKS } from '@/lib/data';
import PelvfixSvg from '../public/pelvfix.svg';
import FacebookIcon from '../public/facebook.svg';
import InstagramIcon from '../public/instagram.svg';
import TiktokIcon from '../public/tiktok.svg';

export default function Footer() {
  return (
    <footer className="bg-muted pt-8">
      <div className="container mx-auto px-6 flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-8">
          <Button variant={'link'} asChild className="px-2">
            <Link href={'/'} className="flex justify-center md:justify-start">
              <Image
                src={PelvfixSvg}
                alt="PelvFix logo"
                className="h-6 w-auto"
              />
            </Link>
          </Button>
          <div className="flex-1 flex flex-row items-center justify-center gap-x-6">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              className="hover:opacity-80 p-1.5 rounded-lg bg-white shadow"
            >
              <Image
                src={FacebookIcon}
                alt="Facebook logo"
                className="h-6 w-6"
              />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              className="hover:opacity-80 p-1.5 rounded-lg bg-white shadow"
            >
              <Image
                src={InstagramIcon}
                alt="Instagram logo"
                className="h-6 w-6"
              />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              className="hover:opacity-80 p-1.5 rounded-lg bg-white shadow"
            >
              <Image src={TiktokIcon} alt="TikTok logo" className="h-6 w-6" />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p>
              <span className="text-primary font-medium">Phone: </span>
              <a
                href="tel:+17328531055"
                className="underline underline-offset-4 text-foreground"
              >
                (732) 853-1055
              </a>
            </p>
            <p>
              <span className="text-primary font-medium">Email: </span>
              <a
                href="mailto:info@pelvfixpt.com"
                className="underline underline-offset-4"
              >
                info@pelvfixpt.com
              </a>
            </p>
          </div>
        </div>

        <div className="w-full py-1">
          <p className="text-center text-xs md:text-sm">
            &copy; Copyright 2024 PelvFix PT. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
