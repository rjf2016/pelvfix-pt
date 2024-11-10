import Image from 'next/image';
import Link from 'next/link';

import { TREATMENTS } from '@/lib/data';
import DoctorImg from '../../public/doctor.jpg';

export default function AboutPage() {
  return (
    <div className="mb-16">
      <section className="bg-muted flex flex-col justify-center">
        <div className="container px-4 md:px-6 py-16 flex flex-col justify-center items-center md:items-start gap-x-8 lg:gap-x-16 gap-y-8 md:flex-row">
          <div className="h-full pt-4">
            <Image
              src={DoctorImg}
              alt="Doctor"
              className="rounded-lg rounded-tl-[15%] rounded-br-[15%] w-64 md:w-96"
              priority
            />
          </div>
          <div className="flex flex-col w-full h-full px-2 space-y-4 md:text-lg leading-relaxed text-foreground text-pretty md:text-left">
            <h1 className="font-serif text-3xl md:text-4xl text-primary">
              Meet Your Therapist
            </h1>
            <p>
              <span className="text-primary/80 font-semibold">
                {'Dr. Suzanne Chedid '}
              </span>
              is a specialized physical therapist with a focus on pelvic floor
              rehabilitation. She earned her{' '}
              <span className="text-primary/80 font-semibold">
                {' Doctor of Physical Therapy degree from Rutgers University'}
              </span>
              , where she discovered her passion for pelvic health during a
              clinical rotation in pelvic floor rehabilitation.
            </p>
            <p>
              With experience in pelvic floor, neurological, and orthopedic
              rehabilitation in an outpatient hospital setting, Dr. Chedid
              developed a strong foundation in treating various conditions.
              However, she found
              <span className="text-primary/80 font-semibold">
                {" women's health to be an underserved area"}
              </span>
              , fueling her commitment to empowering women and enhancing their
              overall health and well-being.
            </p>
            <p>
              {
                'As the owner of PelvFix and a certified Pregnancy and Postpartum Corrective Exercise Specialist (PCES), Dr. Chedid is dedicated to helping women understand and overcome pelvic floor conditions to improve their quality of life.'
              }
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6">
        {/* Promise Section */}
        <section className="py-16">
          <div className=" rounded-xl space-y-4">
            <h2 className="text-2xl md:text-3xl text-primary tracking-tight font-medium">
              The PelvFix Promise
            </h2>
            <p className="leading-relaxed md:text-lg">
              PelvFix provides personalized, one-on-one pelvic floor therapy in
              the comfort of your home, removing barriers like childcare and
              commuting. Our holistic, whole-body approach includes nutrition
              guidance, behavioral changes, and movement analysis to ensure
              comprehensive care.
            </p>
          </div>
        </section>

        <section
          className="py-8 space-y-6 flex flex-col items-center bg-muted/50 rounded-xl"
          id="treatments"
        >
          <div className="text-center px-4 space-y-1">
            <h2 className="text-2xl md:text-3xl text-primary tracking-tight font-medium">
              Treatments We Provide
            </h2>
            <p className="text-primary text-balance">
              Don&apos;t see what you need?
              <Link
                href={'/contact'}
                className="underline underline-offset-2 inline-block text-primary mx-1 hover:text-primary/80"
              >
                Reach out
              </Link>
              to find out if we can help.
            </p>
          </div>
          <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2">
            {TREATMENTS.map((treatment) => (
              <li key={treatment}>{treatment}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
