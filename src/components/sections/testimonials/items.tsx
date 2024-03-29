"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { Testimonial as Item } from "./testimonial";
import { Button } from "@/components/ui/button";

import "./styles.scss";
import { useTestimonials } from "@/hooks/useTestimonials";

export function Items() {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const { data } = useTestimonials();

  return (
    <div className="md:container">
      <div className="flex flex-col justify-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 2,
            depth: 100,
            modifier: 2,
          }}
          navigation={{
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
          }}
          modules={[EffectCoverflow, Navigation]}
          className="w-10/12"
        >
          {data
            ?.filter((testimonial) => testimonial.showHome)
            ?.map(({ id, ...rest }) => (
              <SwiperSlide key={id}>
                <Item {...rest} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="flex justify-center mt-4 gap-4 select-none">
          <Button ref={prevButtonRef} size="icon" variant="outline" className="size-12">
            <ArrowLeftIcon className="size-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button ref={nextButtonRef} size="icon" variant="outline" className="size-12">
            <ArrowRightIcon className="size-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
