"use client";

import { Button } from "@/components/ui/button";
import { Locale, SeriesItem } from "@/types/model";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { cn, scrollTo } from "@/lib/utils";
import { FadeImg } from "@/components/ui/fade-img";
import { useEffect, useState } from "react";

export const Popular = ({
  series,
  locale,
}: {
  series: SeriesItem[];
  locale: Locale;
}) => {
  const [isHiddenNext, setHiddenNext] = useState(true);

  useEffect(() => {
    setTimeout(() => setHiddenNext(false), 50);
  }, []);

  return (
    <section
      className="pt-10 lg:pt-[120px] px-4 lg:px-[80px] mb-[120px]"
      data-anchor="popular"
    >
      <div className="flex flex-col gap-6 lg:gap-10">
        <h2 className="title" style={{ textAlign: "start" }}>
          Most popular
        </h2>

        <div className="relative w-full">
          <Swiper
            slidesPerView="auto"
            className="popular-slider"
            breakpoints={{
              320: {
                spaceBetween: 20,
              },
              1024: {
                spaceBetween: 40,
              },
            }}
            modules={[Navigation]}
            navigation={{
              nextEl: ".next-slide",
            }}
            updateOnWindowResize
          >
            {series.map((item, i) => (
              <SwiperSlide key={i}>
                <Link
                  href={`/series/${item.id}`}
                  className="flex flex-col w-[188px] gap-3"
                >
                  <FadeImg
                    src={"/series/0/poster.webp"}
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

            <SwiperSlide>
              <div
                className="flex flex-col w-[188px] h-[265px] gap-3 relative rounded-[12px] p-[1px] cursor-pointer"
                style={{ background: "var(--gradient)" }}
                onClick={() => scrollTo("app")}
              >
                <div className="bg-black size-full rounded-[12px]">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-semibold uppercase w-full">
                    More in app
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className={isHiddenNext ? "hidden" : "hidden lg:block"}>
            <div
              className={cn(
                "next-slide popular-fade absolute right-[-80px] top-0 z-[4] lg:block transition-opacity "
              )}
            >
              <Button className="gradient-circle-btn h-[56px] w-[56px] top-[100px] left-6 absolute">
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
      </div>
    </section>
  );
};
