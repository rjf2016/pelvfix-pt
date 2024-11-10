import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQS } from '@/lib/data';

export default function FaqsPage() {
  return (
    <div className="container flex flex-col px-4 py-12 max-w-3xl min-h-[calc(100vh-100px)]">
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
  );
}
