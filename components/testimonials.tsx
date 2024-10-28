import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { TESTIMONIAL_DATA } from '@/lib/data';
import { StarIcon } from 'lucide-react';

type TestimonialData = {
  id: number;
  name: string;
  rating: number;
  review: string;
};

function TestimonalCard(testimonal: TestimonialData) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 h-full flex flex-col justify-between gap-y-4 text-pretty text-sm md:text-base">
        <div className="flex gap-x-0.5 justify-center">
          {[...Array(testimonal.rating)].map((_, index) => (
            <StarIcon
              key={index}
              size={18}
              stroke="#FFBC00"
              strokeWidth={2.5}
              fill="#FFBC00"
            />
          ))}
        </div>
        <p className="line-clamp-6 leading-relaxed select-none">
          {testimonal.review}
        </p>
        <p className="font-medium text-left select-none">{testimonal.name}</p>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <Carousel
      className="w-full mx-auto cursor-grab active:cursor-grabbing"
      opts={{ align: 'center', duration: 50 }}
    >
      <CarouselContent className="-m-1 md:-m-3">
        {TESTIMONIAL_DATA.map((testimonial) => (
          <CarouselItem
            key={testimonial.id}
            className="p-1 mb-3 md:p-3 basis-4/5 md:basis-1/2 lg:basis-1/3"
          >
            <TestimonalCard {...testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
