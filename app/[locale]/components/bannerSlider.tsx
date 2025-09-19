"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Pagination, Autoplay } from "swiper/modules";
import { SeriesItem } from "@/types/model";
import { BannerItem } from "./bannerItem";
import { useEffect, useState } from "react";

export const BannerSlider = ({ series }: { series: SeriesItem[] }) => {
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass | null>(null);

  const handleNextClick = () => {
    firstSwiper?.slideNext();
  };

  useEffect(() => {
    const mainNav = document.querySelector(".main-page-nav") as HTMLDivElement;

    if (mainNav) {
      mainNav.style.opacity = "1";
    }

    return () => {
      mainNav.style.opacity = "0";
    };
  }, []);

  return (
    <section>
      <Swiper
        autoplay={{
          delay: 3500,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        modules={[Pagination, Autoplay]}
        loop
        spaceBetween={0}
        slidesPerView="auto"
        pagination={{
          clickable: true,
        }}
        allowTouchMove={false}
        onSwiper={(swiper) => {
          setFirstSwiper(swiper);
        }}
      >
        {series.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerItem data={item} onNextClick={handleNextClick} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
