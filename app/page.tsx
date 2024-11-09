import Image from 'next/image';

import { Button } from '@/components/ui/button';
import Testimonials from '@/components/testimonials';
import Services from '@/components/services';

import Wave from '../public/wave.svg';
import BallYoga from '../public/unsplash-ball.jpg';
import Prenatal from '../public/prenatal.jpg';
import PhoneIcon from '../public/phone-icon.svg';
import HomeIcon from '../public/home-icon.svg';
import HappyIcon from '../public/happy-icon.svg';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-muted py-6">
        <div className="container px-6 flex flex-col items-center justify-center gap-y-8 lg:justify-between lg:flex-row min-h-[450px] md:min-h-[650px] lg:min-h-[760px]">
          <div className="space-y-4 text-center lg:text-left max-w-[500px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance text-primary font-serif">
              Pelvic Floor Rehab
              <span className="text-3xl md:text-4xl lg:text-5xl">{' & '}</span>
              Wellness
            </h1>
            <p className="text-pretty md:text-lg">
              One on one, personalized care in the comfort of your home. Based
              in Central NJ.
            </p>
            <Button size={'lg'} className="w-40">
              Schedule
            </Button>
          </div>
          <Image
            src={BallYoga}
            alt="hero"
            priority
            className="hidden md:block rounded-xl object-contain h-auto w-full max-w-[400px] lg:max-w-none lg:w-[45%] z-10"
          />
        </div>
        <div className="absolute bottom-0 w-full bg-white">
          <Image src={Wave} alt="wave" className="w-full" priority />
        </div>
      </section>

      <section className="container space-y-4 px-6 py-12 md:py-16 lg:py-20 my-2 lg:my-8">
        <div className="flex flex-col md:flex-row gap-x-12">
          <Image
            src={Prenatal}
            alt="yoga"
            className="rounded-xl mx-auto w-full object-contain max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
          />
          <div className="w-full flex flex-col justify-center items-start space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary tracking-tight">
              Regain Control and Confidence
            </h2>
            <p className="leading-relaxed lg:text-lg">
              Pelvic floor dysfunction affects
              <span className="text-primary/80 font-semibold">
                {' 1 in 4 women'}
              </span>
              , causing symptoms like incontinence, pelvic pain, organ prolapse,
              and decreased sexual function. While common, these issues are not
              normal—and you don&apos;t have to live with them.
            </p>
            <p className="leading-relaxed lg:text-lg">
              At <span className="text-primary/80 font-semibold">PelvFix</span>,
              we&apos;re dedicated to helping you overcome these challenges
              through personalized, compassionate care. Our mobile clinic brings
              expert therapy directly to your doorstep, making it easier than
              ever to receive the treatment you need.
            </p>
          </div>
        </div>
      </section>

      {/* Get Started section */}
      <section className="container bg-muted/50 rounded-xl px-6 py-12 md:py-16 lg:py-20 my-2 lg:my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary tracking-tight text-center">
          Getting Started with PelvFix
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:justify-items-center">
          <div className="pt-8 flex flex-col items-center space-y-1 text-center md:min-h-[205px]">
            <Image src={PhoneIcon} alt="phone icon" className="w-14 md:w-16" />
            <p className="text-primary font-medium pt-1 lg:text-lg ">
              Free 15 Min Chat
            </p>
            <p className="max-w-[300px] text-sm md:text-base leading-relaxed">
              Reach out and get your questions answered. We will set up your
              initial consultation.
            </p>
          </div>

          <div className="pt-8 flex flex-col items-center space-y-1 text-center md:min-h-[205px]">
            <Image src={HomeIcon} alt="home icon" className="w-14 md:w-16" />
            <p className="text-primary font-medium pt-1 lg:text-lg">
              First Session!
            </p>
            <p className="max-w-[300px] text-sm md:text-base leading-relaxed">
              Your therapist will come to your home for a comprehensive
              evaluation. Together, we will create a personalized action plan.
            </p>
          </div>

          <div className="pt-8 flex flex-col items-center space-y-1 text-center md:min-h-[205px]">
            <Image
              src={HappyIcon}
              alt="calendar icon"
              className="w-14 md:w-16"
            />
            <p className="text-primary font-medium pt-1 lg:text-lg">
              Find Lasting Relief
            </p>
            <p className="max-w-[300px] text-sm md:text-base leading-relaxed">
              We will work with you every step of the way to ensure you meet any
              goals you have set.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section
        className="container space-y-4 px-6 py-12 md:py-16 lg:py-20 my-2 lg:my-8"
        id="services"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary tracking-tight font-medium">
          What We Treat
        </h2>
        <Services />
      </section>

      {/* Testimonials Section */}
      <section
        className="container space-y-4 px-6 py-12 md:py-16 lg:py-20 my-2 lg:my-8"
        id="testimonials"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary tracking-tight">
          What Our Patients Say
        </h2>
        <div className="w-full overflow-x-hidden">
          <Testimonials />
        </div>
      </section>
    </div>
  );
}
