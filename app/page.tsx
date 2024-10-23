import Image from 'next/image';
import YogaImg from '../public/unsplash-yoga.jpg';
import PregnantYoga from '../public/pregnant-yoga.jpg';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted p-4 md:min-h-[50vh] flex flex-col justify-center">
        <div className="container w-full flex flex-col-reverse md:flex-row md:items-center gap-4">
          <div className="w-full flex flex-col px-4 space-y-6 py-8">
            <div className="w-full flex flex-col justify-center text-center space-y-1 md:text-left md:text-lg text-black">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance">
                Pelvic Floor Rehab & Wellness
              </h1>
              <h6 className="text-foreground">
                Mobile Pelvic Floor Physical Therapy Clinic (Central, NJ)
              </h6>
              <h6 className="font-medium pt-4 text-lg">
                Dr. Suzanne Chedid, PT, DPT, PCES
              </h6>
            </div>
            <Button className="w-40 mx-auto md:mx-0">Schedule</Button>
          </div>
          <Image
            src={YogaImg}
            alt="hero"
            className="rounded-xl w-full md:w-1/3 max-h-[400px] md:max-h-none object-cover"
          />
        </div>
      </section>

      {/* Promise Section */}
      <section className="container space-y-4 px-4 py-8 min-h-[50vh] md:min-h-[40vh] lg:min-h-[30vh] flex flex-col justify-center border-b">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-black">
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

      {/* Conditions Section */}
      <section className="container space-y-4 px-4 py-8 min-h-[50vh] md:min-h-[40vh] lg:min-h-[30vh] flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-black">
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
              <p className="text-white md:text-lg font-medium text-center">
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
              <p className="text-white md:text-lg font-medium text-center">
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
              <p className="text-white md:text-lg font-medium text-center">
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
              <p className="text-white md:text-lg font-medium text-center">
                Other
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-4 p-4 pt-16 pb-8 md:pt-20 md:pb-10 lg:pt-24 lg:pb-12 xl:pt-28">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-black">
          Lorem Ipsum
        </h2>
        <p className="leading-relaxed md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde libero
          molestiae voluptates incidunt. Commodi eaque nisi minus incidunt
          expedita corporis recusandae alias. Eveniet ad nesciunt animi minima
          ratione. Dolorem, soluta.
        </p>
      </section>
    </main>
  );
}
