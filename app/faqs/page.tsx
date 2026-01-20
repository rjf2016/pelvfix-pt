import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PelvFix PT FAQs – Pelvic Floor Physical Therapy Questions Answered',
  description:
    'Find answers to common questions about pelvic floor physical therapy, mobile visits, pricing, scheduling, and what to expect with PelvFix PT in Central NJ.',
  alternates: {
    canonical: '/faqs',
  },
};

export default function FaqsPage() {
  return (
    <div className="">
      <div className="container flex flex-col px-6 py-12 md:py-16 max-w-3xl">
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
    </div>
  );
}
