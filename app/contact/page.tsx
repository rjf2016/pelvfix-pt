import ContactForm from '@/components/contactForm';

export default function ContactPage() {
  return (
    <div className="container flex flex-col px-4 py-12">
      <div className="max-w-lg w-full mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
