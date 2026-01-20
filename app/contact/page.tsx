import type { Metadata } from 'next';
import ContactForm from '@/components/contactForm';

export const metadata: Metadata = {
  title:
    'Contact PelvFix PT – Book Mobile Pelvic Floor Physical Therapy in Central NJ',
  description:
    'Contact PelvFix PT to book an in-home pelvic floor physical therapy session in Central NJ or ask questions about our services and availability.',
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
