"use client";

import type { Testimonial } from "@/types/testimonial";
import { Testimonial as Item } from "./testimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  data: Testimonial[];
};

export function Items({ data }: Props) {
  return (
    <div className="space-y-2">
      <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>div:not(:first-child)]:mt-8">
        {/* <CarouselContent> */}
          {data?.map(({ id, testimonial, ...rest }) => (
            // <CarouselItem key={id}>
              <Item {...rest} key={id}>
                <p>{testimonial}</p>
              </Item>
            // </CarouselItem>
          ))}
        {/* </CarouselContent> */}
        {/* <div className="relative">
        <CarouselPrevious size="xl" variant="ghost" color="accent" className="relative" />
        <CarouselNext size="xl" variant="outline" className="relative" />
        </div> */}
      </div>
    </div>
  );
}
