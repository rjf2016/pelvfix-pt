'use client';

import { memo, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface TabData {
  title: string;
  content: string;
}

const tabData: TabData[] = [
  {
    title: 'Pelvic Pain',
    content:
      'Pelvic pain can disrupt daily life, making even simple activities uncomfortable. At PelvFix, we specialize in identifying and treating the root causes of pelvic pain, whether it’s due to muscle imbalances, nerve irritation, or connective tissue issues. Our targeted, evidence-based approach aims to relieve pain, restore function, and improve your quality of life.',
  },
  {
    title: 'Prenatal & Postpartum',
    content:
      'Pregnancy and childbirth bring significant changes to your body, often impacting the pelvic floor and core muscles. PelvFix offers specialized care to support you through every stage of your journey, from pregnancy to postpartum recovery. We focus on strengthening, stabilizing, and relieving discomfort, so you can feel strong and confident in this transformative period.',
  },
  {
    title: 'Bowel & Bladder',
    content:
      'Bowel and bladder dysfunctions, such as incontinence or constipation, can be uncomfortable and often embarrassing. At PelvFix, we provide discreet and effective treatment plans to address these issues, focusing on retraining muscles, improving coordination, and enhancing your confidence. Our goal is to restore your independence and comfort in everyday life.',
  },
  {
    title: 'Prolapse',
    content:
      'Pelvic organ prolapse occurs when weakened pelvic muscles allow organs to shift or press downward, causing discomfort and pressure. PelvFix uses a personalized and holistic approach to strengthen the pelvic floor, alleviate symptoms, and prevent further progression. We aim to empower you with the tools and knowledge to regain your comfort and confidence.',
  },
];

const Services = memo(() => {
  const memoizedTabData = useMemo(() => tabData, []);

  return (
    <div className="w-full">
      {/* Horizontal Tabs for large screens */}
      <Tabs
        defaultValue="Pelvic Pain"
        className="hidden md:block rounded-xl bg-background overflow-hidden border border-muted"
      >
        <TabsList className="grid w-full grid-cols-4 overflow-hidden">
          {memoizedTabData.map((tab) => (
            <TabsTrigger key={tab.title} value={tab.title}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {memoizedTabData.map((tab) => (
          <TabsContent
            key={tab.title}
            value={tab.title}
            className="p-10 mt-0 leading-relaxed lg:text-lg rounded-xl"
          >
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>

      {/* Vertical Accordion for small screens */}
      <Accordion type="single" collapsible className="md:hidden w-full">
        {memoizedTabData.map((tab) => (
          <AccordionItem
            key={tab.title}
            value={tab.title}
            className="text-primary"
          >
            <AccordionTrigger className="text-left">
              {tab.title}
            </AccordionTrigger>
            <AccordionContent className="text-foreground">
              {tab.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex justify-center mt-4">
        <Button className="w-44 gap-x-1" asChild>
          <Link href={'/about#treatments'}>
            View All
            <ArrowRight className="h-4 w-4 -mr-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
});

Services.displayName = 'Services';

export default Services;
