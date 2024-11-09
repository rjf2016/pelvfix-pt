import Image from 'next/image';

import DoctorImg from '../../public/doctor.jpg';

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted min-h-[50vh] flex flex-col justify-center">
        <div className="container p-6 flex flex-col justify-center items-center lg:items-start gap-x-8 gap-y-8 lg:flex-row">
          <div className="h-full">
            <Image
              src={DoctorImg}
              alt="Doctor"
              className="rounded-lg rounded-tl-[15%] rounded-br-[15%] w-80 md:w-96"
              priority
            />
          </div>
          <div className="flex flex-col w-full h-full space-y-4 md:text-lg leading-relaxed text-foreground">
            <h1 className="font-serif text-3xl md:text-4xl text-primary text-center md:text-left">
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
              However, she found women&apos;s health to be an underserved area,
              fueling her commitment to empowering women and enhancing their
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

      {/* Promise Section */}
      <section className="container space-y-4 px-6 py-12 md:py-16 lg:py-20 my-2 lg:my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary tracking-tight text-center">
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
    </>
  );
}
