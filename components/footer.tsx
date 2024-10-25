import Image from 'next/image';

import PelvfixSvg from '../public/pelvfix.svg';

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container flex flex-col gap-y-6 p-6 pb-2">
        <div>
          <Image
            src={PelvfixSvg}
            alt="PelvFix Logo"
            className="h-4 lg:h-5 w-auto"
          />
        </div>
        <p className="text-center">&copy; 2024 PelvFix PT</p>
      </div>
    </footer>
  );
}
