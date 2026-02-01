import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQS } from '@/lib/data';
import { generateFAQPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title:
    'PelvFix PT FAQs – Pelvic Floor Physical Therapy Questions Answered in Middlesex County, NJ',
  description:
    'Find answers to common questions about pelvic floor physical therapy, mobile visits, pricing, scheduling, and what to expect with PelvFix PT in Middlesex County and Central NJ.',
  alternates: {
    canonical: '/faqs',
  },
};

export default function FaqsPage() {
  const faqSchema = generateFAQPageSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    <div className="container flex flex-col px-4 py-12 max-w-3xl">
      <h1 className="text-2xl md:text-3xl text-primary font-medium tracking-tight text-center">
        Frequently Asked Questions
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full pt-6"
        defaultValue="1"
      >
        {FAQS.map((faq) => (
          <AccordionItem value={faq.id} key={faq.id}>
            <AccordionTrigger className="text-base lg:text-lg text-primary/80">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base lg:text-lg">
              {faq.answer.map((answer, index) => (
                <p key={index} className="mb-3">
                  {answer}
                </p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    </>
  );
}
