import Image from 'next/image';

import PelvfixSvg from '../public/pelvfix.svg';
import FacebookIcon from '../public/facebook.svg';
import InstagramIcon from '../public/instagram.svg';
import TiktokIcon from '../public/tiktok.svg';
import { SOCIAL_LINKS } from '@/lib/data';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-black/10">
      <div className="container flex flex-col gap-y-8 p-6 pb-2">
        <div className="flex flex-row items-center justify-between">
          <Link href={'/'}>
            <Image
              src={PelvfixSvg}
              alt="PelvFix Logo"
              className="h-4 lg:h-5 w-auto"
            />
          </Link>
          {/* socials */}
          <div className="flex flex-row gap-x-6 items-center">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image src={FacebookIcon} alt="Facebook" className="h-6 w-6" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image src={InstagramIcon} alt="Instagram" className="h-6 w-6" />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image src={TiktokIcon} alt="TikTok" className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="w-full pt-2">
          <p className="text-center text-sm">
            &copy; Copyright 2024 PelvFix PT. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
