import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import Testimonials from '@/components/testimonials';
import Services from '@/components/services';

import Wave from '../public/wave.svg';
import Prenatal from '../public/prenatal.jpg';
import PhoneIcon from '../public/phone-icon.svg';
import HomeIcon from '../public/home-icon.svg';
import HappyIcon from '../public/happy-icon.svg';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PelvFix PT - Mobile Pelvic Floor Physical Therapy in Central NJ',
  description:
    'In-home pelvic floor physical therapy in Central NJ. PelvFix PT provides personalized, one-on-one care from Dr. Suzanne Chedid in the comfort of your home.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-muted pb-6 overflow-x-hidden">
        <div className="container py-12 px-4 md:px-8 flex flex-col items-center justify-center gap-y-8 min-h-[65vh] lg:min-h-[50vh]">
          <div className="text-center w-full max-w-md md:max-w-lg lg:max-w-2xl z-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-balance text-primary font-serif">
              Pelvic Floor Rehab & Wellness
            </h1>
            <h2 className="text-pretty text-center md:text-lg mt-4 mb-6 max-w-[384px] mx-auto">
              One on one, personalized care in the comfort of your home. Based
              in Central NJ.
            </h2>
            <Button size={'lg'} className="w-full max-w-40" asChild>
              <Link href={'/contact'}>Schedule</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 -left-1 w-[105%] bg-white">
          <Image src={Wave} alt="" className="w-full" priority />
        </div>
      </section>

      <div className="container px-4 md:px-6">
        <section className="py-12">
          <div className="flex flex-col md:flex-row gap-x-12">
            <Image
              src={Prenatal}
              alt=""
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl mx-auto w-full object-contain max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
              priority
            />
            <div className="w-full flex flex-col justify-center items-start space-y-4">
              <h2 className="text-2xl md:text-3xl text-primary tracking-tight font-medium">
                Regain Control and Confidence
              </h2>
              <p className="leading-relaxed lg:text-lg">
                Pelvic floor dysfunction affects
                <span className="text-primary/80 font-semibold">
                  {' 1 in 4 women'}
                </span>
                , causing symptoms like incontinence, pelvic pain, organ
                prolapse, and decreased sexual function. While common, these
                issues are not normal—and you don&apos;t have to live with them.
              </p>
              <p className="leading-relaxed lg:text-lg">
                At{' '}
                <span className="text-primary/80 font-semibold">PelvFix</span>,
                we&apos;re dedicated to helping you overcome these challenges
                through personalized, compassionate care. Our mobile clinic
                brings expert therapy directly to your doorstep, making it
                easier than ever to receive the treatment you need.
              </p>
            </div>
          </div>
        </section>

        {/* Get Started section */}
        <section className="bg-muted/60 rounded-xl py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl text-primary tracking-tight text-center font-medium">
            Getting Started with PelvFix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 md:justify-items-center">
            <div className="pt-8 flex flex-col items-center space-y-1 text-center md:min-h-[205px] px-1">
              <Image src={PhoneIcon} alt="" className="w-14 md:w-16" />
              <p className="text-primary font-medium pt-1 lg:text-lg ">
                Free 15 Min Chat
              </p>
              <p className="max-w-[300px] text-sm lg:text-base leading-relaxed">
                Reach out and get your questions answered. We will set up your
                initial consultation.
              </p>
            </div>

            <div className="pt-8 flex flex-col items-center space-y-1 text-center md:min-h-[205px] px-1">
              <Image src={HomeIcon} alt="" className="w-14 md:w-16" />
              <p className="text-primary font-medium pt-1 lg:text-lg">
                First Session!
              </p>
              <p className="max-w-[300px] text-sm lg:text-base leading-relaxed">
                Your therapist will come to your home for a comprehensive
                evaluation. Together, we will create a personalized action plan.
              </p>
            </div>

            <div className="pt-8 flex flex-col items-center space-y-1 text-center md:min-h-[205px] px-1">
              <Image src={HappyIcon} alt="" className="w-14 md:w-16" />
              <p className="text-primary font-medium pt-1 lg:text-lg">
                Find Lasting Relief
              </p>
              <p className="max-w-[300px] text-sm lg:text-base leading-relaxed">
                We will work with you every step of the way to ensure you meet
                any goals you have set.
              </p>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="space-y-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl text-primary tracking-tight font-medium">
            What We Treat
          </h2>
          <Services />
        </section>

        {/* Testimonials Section */}
        <section className="space-y-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl text-primary tracking-tight font-medium">
            What Our Patients Say
          </h2>
          <div className="w-full overflow-x-hidden">
            <Testimonials />
          </div>
        </section>
      </div>
    </div>
  );
}
