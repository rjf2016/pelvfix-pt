import Image from 'next/image';

import DoctorImg from '../../public/doctor.jpg';

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted min-h-[50vh] flex flex-col justify-center">
        <div className="container p-6 flex flex-col justify-center items-center md:items-start gap-x-8 gap-y-8 md:flex-row">
          <div className="h-full">
            <Image
              src={DoctorImg}
              alt="Doctor"
              className="rounded-lg rounded-tl-[15%] rounded-br-[15%] w-80 md:w-96"
              priority
            />
          </div>
          <div className="flex flex-col w-full h-full space-y-4 md:text-lg leading-relaxed text-foreground">
            <h1 className="font-serif text-3xl md:text-4xl text-black text-center md:text-left">
              About Us
            </h1>
            <p>
              Dr. Suzanne Chedid is a specialized physical therapist with a
              focus on pelvic floor rehabilitation. She earned her Doctor of
              Physical Therapy degree from Rutgers University, where she
              discovered her passion for pelvic health during a clinical
              rotation in pelvic floor rehabilitation.
            </p>
            <p>
              {
                "With experience in pelvic floor, neurological, and orthopedic rehabilitation in an outpatient hospital setting, Dr. Chedid developed a strong foundation in treating various conditions. However, she found women's health to be an underserved area, fueling her commitment to empowering women and enhancing their overall health and well-being."
              }
            </p>
            <p>
              {
                'As the owner of PelvFix and a certified Pregnancy and Postpartum Corrective Exercise Specialist (PCES), Dr. Chedid is dedicated to helping women understand and overcome pelvic floor conditions to improve their quality of life.'
              }
            </p>
          </div>
        </div>
      </section>

      <section className="container space-y-4 px-6 py-12 md:py-16 lg:py-20"></section>
    </>
  );
}
