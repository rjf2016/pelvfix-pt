import ContactForm from '@/components/contactForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="container flex flex-col px-6 py-12">
      <Card className="max-w-xl w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-primary">Contact Us</CardTitle>
          <CardDescription>
            Got a question for us? Fill out the form below and I will get back
            to you within 24 hours.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
}
