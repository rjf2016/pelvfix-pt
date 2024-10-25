import Image from 'next/image';
import PregnantYoga from '../public/pregnant-yoga.jpg';
import BallYoga from '../public/unsplash-ball.jpg';
import { Button } from '@/components/ui/button';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <main className="flex flex-col bg-white pb-12">
      {/* Hero Section */}
      <section className="bg-muted py-6">
        <div className="container px-6 flex flex-col items-center justify-center gap-y-8 lg:justify-between lg:flex-row min-h-[50vh]">
          <div className="space-y-2 md:space-y-2 text-center lg:text-left max-w-[500px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance text-black font-serif">
              Pelvic Floor Rehab
              <span className="text-3xl md:text-4xl lg:text-5xl">{' & '}</span>
              Wellness
            </h1>
            <h6 className="text-pretty">
              Mobile Pelvic Floor Physical Therapy Clinic (Central, NJ)
            </h6>
            <h6 className="font-medium text-black pb-4">
              Dr. Suzanne Chedid, PT, DPT, PCES
            </h6>
            <Button size={'lg'} className="w-40">
              Schedule
            </Button>
          </div>

          <Image
            src={BallYoga}
            alt="hero"
            // sizes="100vw"
            className="hidden md:block rounded-xl object-contain h-auto w-full max-w-[400px] lg:max-w-none lg:w-[45%]"
          />
        </div>
      </section>

      {/* Promise Section */}
      <section className="container space-y-4 px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-medium">
          The PelvFix Promise
        </h2>
        <p className="leading-relaxed md:text-lg">
          PelvFix provides personalized, one-on-one pelvic floor therapy in the
          comfort of your home, removing barriers like childcare and commuting.
          Our holistic, whole-body approach includes nutrition guidance,
          behavioral changes, and movement analysis to ensure comprehensive
          care.
        </p>
      </section>

      <div className="w-3/5 max-w-96 mx-auto h-0.5 bg-muted" />

      {/* Conditions Section */}
      <section
        className="container space-y-4 px-6 py-12 md:py-16 lg:py-20"
        id="treatments"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-medium">
          Conditions We Treat
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative cursor-pointer">
            <Image
              src={PregnantYoga}
              alt="Pregnancy & Postpartum"
              className="rounded-xl brightness-[33%]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted md:text-lg font-medium text-center">
                Pregnancy & Postpartum
              </p>
            </div>
          </div>
          <div className="relative cursor-pointer">
            <Image
              src={PregnantYoga}
              alt="Pelvic Pain"
              className="rounded-xl brightness-[33%]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted md:text-lg font-medium text-center">
                Pelvic Pain
              </p>
            </div>
          </div>
          <div className="relative cursor-pointer">
            <Image
              src={PregnantYoga}
              alt="Bowel & Bladder"
              className="rounded-xl brightness-[33%]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted md:text-lg font-medium text-center">
                Bowel & Bladder
              </p>
            </div>
          </div>
          <div className="relative cursor-pointer">
            <Image
              src={PregnantYoga}
              alt="Other"
              className="rounded-xl brightness-[33%]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted md:text-lg font-medium text-center">
                Other
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-3/5 max-w-96 mx-auto h-0.5 bg-muted" />

      {/* Testimonials Section */}
      <section
        className="container space-y-4 px-6 py-12 md:py-16 lg:py-20"
        id="testimonials"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-medium">
          Testimonials
        </h2>
        <div className="w-full overflow-x-hidden">
          <Testimonials />
        </div>
      </section>
    </main>
  );
}
