import type { Metadata } from 'next';
import ContactForm from '@/components/contactForm';

export const metadata: Metadata = {
  title: 'Book In-Home Pelvic Floor Therapy in NJ',
  description:
    'Contact PelvFix Physical Therapy to book an in-home pelvic floor PT session in Middlesex County, South Brunswick, or Central NJ. Call (732) 853-1055.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="container flex flex-col px-6 py-12 md:py-16">
      <div className="max-w-lg w-full mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
