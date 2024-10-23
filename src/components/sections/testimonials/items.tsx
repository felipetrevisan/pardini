"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCoverflow, EffectFlip, Navigation, Pagination } from "swiper/modules";

import { Testimonials as Item } from "./testimonial";

import { useTestimonials } from "@/hooks/use-testimonials";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./styles.scss";
import { SliderPagination } from "./pagination";

export function Items() {
  const { data, isLoading } = useTestimonials();

  const items = data?.filter((testimonial) => testimonial.showHome) ?? [];

  return (
    <div className="flex flex-col justify-center">
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={40}
        modules={[A11y]}
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
        className="w-full h-full !flex flex-col items-center justify-center gap-4"
      >
        {items.map(({ id, ...rest }) => (
          <SwiperSlide key={id}>
            <Item {...rest} />
          </SwiperSlide>
        ))}
        {!isLoading && items.length !== 0 && <SliderPagination />}
      </Swiper>
    </div>
  );
}
