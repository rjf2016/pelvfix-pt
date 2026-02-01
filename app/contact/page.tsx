import type { Metadata } from 'next';
import ContactForm from '@/components/contactForm';

export const metadata: Metadata = {
  title:
    'Contact – Book Mobile Pelvic Floor Physical Therapy in Middlesex County, NJ',
  description:
    'Contact PelvFix Physical Therapy to book an in-home pelvic floor physical therapy session in Middlesex County, East Brunswick, and Central NJ or ask questions about our services and availability.',
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
