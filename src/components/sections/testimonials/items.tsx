"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCoverflow, Navigation } from "swiper/modules";

import { Testimonial as Item } from "./testimonial";

import { useTestimonials } from "@/hooks/useTestimonials";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./styles.scss";
import { SliderPagination } from "./pagination";

export function Items() {
  const { data, isLoading } = useTestimonials();

  const items = data?.filter((testimonial) => testimonial.showHome) ?? [];

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
          modules={[EffectCoverflow, Navigation, A11y]}
          className="w-10/12"
        >
          {items.map(({ id, ...rest }) => (
            <SwiperSlide key={id}>
              <Item {...rest} />
            </SwiperSlide>
          ))}
          {!isLoading && items.length !== 0 && <SliderPagination />}
        </Swiper>
      </div>
    </div>
  );
}
