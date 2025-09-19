"use client";

import { FadeImg } from "@/components/ui/fade-img";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Locale, SeriesItem } from "@/types/model";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Navigation, Autoplay } from "swiper/modules";

export const Hero = ({
  series,
  locale,
}: {
  series: SeriesItem[];
  locale: Locale;
}) => {
  const [isInit, setInit] = useState(false);
  const [isHiddenNext, setHiddenNext] = useState(true);

  useEffect(() => {
    setTimeout(() => setHiddenNext(false), 50);

    const mainNav = document.querySelector(".main-page-nav") as HTMLDivElement;

    if (mainNav) {
      mainNav.style.opacity = "1";
    }

    return () => {
      mainNav.style.opacity = "0";
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "relative w-full flex items-center transition-opacity mt-10",
          isInit ? "opacity-100" : "opacity-0"
        )}
      >
        <Swiper
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          className="custom-slider"
          speed={600}
          slidesPerGroup={1}
          shortSwipes={true} // ← Разрешить короткие свайпы (даже маленькие движения)
          watchSlidesProgress={true} // ← Помогает точнее отслеживать движение
          resistance={true} // ← Можно оставить, чтобы не "вылетало" за границы
          resistanceRatio={0.85} //
          onSwiper={() => {
            setInit(true);
          }}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".prev-slide-m",
            nextEl: ".next-slide-m ",
          }}
        >
          {series.concat(series).map((item, i) => (
            <SwiperSlide key={i} className="custom-slide">
              <Link
                href={`/series/${item.id}`}
                className="flex flex-col gap-3 text-center"
              >
                <FadeImg
                  src={item.l10n[locale]?.thumbnail || ""}
                  alt={item.l10n[locale]?.name || "-"}
                  quality={100}
                  width={188}
                  height={265}
                  className="overflow-hidden rounded-[12px] min-h-[265px]"
                />

                <p>{item.l10n[locale]?.name || "-"}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={isHiddenNext ? "hidden" : "hidden lg:block"}>
          <div
            className={cn(
              "prev-slide-m  popular-fade popular-fade-m max-w-[80px] absolute left-0 top-0 z-[4] transition-opacity flex items-center rotate-180"
            )}
          >
            <Button className="gradient-circle-btn h-[56px] w-[56px]">
              <span className="black-btn-bg"></span>
              <Image
                src="/icons/arrow.svg"
                alt=""
                quality={100}
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>

        <div className={isHiddenNext ? "hidden" : "hidden lg:block"}>
          <div
            className={cn(
              "next-slide-m  popular-fade popular-fade-m max-w-[80px] absolute right-0 top-0 z-[4] transition-opacity flex items-center"
            )}
          >
            <Button className="gradient-circle-btn h-[56px] w-[56px]">
              <span className="black-btn-bg"></span>
              <Image
                src="/icons/arrow.svg"
                alt=""
                quality={100}
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
