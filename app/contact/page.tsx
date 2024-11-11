import type { Metadata } from 'next';
import ContactForm from '@/components/contactForm';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className="container flex flex-col px-4 py-12 mb-16">
      <div className="max-w-lg w-full mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
