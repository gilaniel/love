"use client";

import { Button } from "@/components/ui/button";
import { Locale, SeriesItem, TagItem } from "@/types/model";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { cn, scrollTo } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { NavigationLink } from "@/components/NavigationLink";
import { FadeImg } from "@/components/ui/fade-img";
import { useRouter, useSearchParams } from "next/navigation";

export const Categories = ({
  series,
  tags,
  locale,
}: {
  series: SeriesItem[];
  tags: TagItem[];
  locale: Locale;
}) => {
  const [isHiddenNext, setHiddenNext] = useState(true);

  const router = useRouter();
  const params = useSearchParams();
  const category = params.get("category");

  const sortedTags = useMemo(() => {
    const mostTrending = tags.find((tag) => tag.name === "Most trending");
    const newReleases = tags.find((tag) => tag.name === "New releases");

    const others = tags.filter(
      (tag) => !["Most trending", "New releases", "Promo"].includes(tag.name)
    );

    const reorderedTags =
      mostTrending && newReleases
        ? [mostTrending, newReleases, ...others]
        : tags;

    return reorderedTags;
  }, [tags]);

  const seriesMap = useMemo(() => {
    const map = new Map<number, SeriesItem>();
    series.forEach((s) => {
      map.set(Number(s.id), s);
    });
    return map;
  }, [series]);

  useEffect(() => {
    if (!category) return;

    const el = document.querySelector(`.tag-${category}`) as HTMLDivElement;

    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
    });

    router.replace("/", { scroll: false });
  }, [category, router]);

  useEffect(() => {
    setTimeout(() => setHiddenNext(false), 50);
  }, []);

  return (
    <section
      className="pt-10 lg:pt-[120px] px-4 lg:px-[80px] mb-[120px]"
      data-anchor="popular"
    >
      {sortedTags.map((tag, i) => (
        <div
          key={tag.id}
          className={`flex flex-col gap-6 lg:gap-10 pb-10 lg:pb-[60px] tag-${tag.id} scroll-mt-[90px] lg:scroll-mt-[120px]`}
        >
          <h2 className="title" style={{ textAlign: "start" }}>
            {tag.l10n[locale].name}
          </h2>

          <div className="relative w-full">
            <Swiper
              slidesPerView="auto"
              className="popular-slider"
              slidesPerGroup={1}
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
                prevEl: `.prev-slide-${i}`,
                nextEl: `.next-slide-${i}`,
              }}
              updateOnWindowResize
            >
              {tag.brands.map((item) => {
                const brand = seriesMap.get(Number(item.id));

                return (
                  <SwiperSlide key={item.id}>
                    <NavigationLink
                      href={`/${locale}/series/${item.id}`}
                      className="flex flex-col w-[168px] xl:w-[188px] gap-3"
                    >
                      <div className="relative rounded-[12px] overflow-hidden">
                        <FadeImg
                          src={brand?.l10n[locale]?.thumbnail || "-"}
                          // src={"/series/0/poster.webp"}
                          alt={brand?.l10n[locale]?.name || "-"}
                          quality={100}
                          width={188}
                          height={265}
                          className="overflow-hidden rounded-[12px] min-h-[245px] xl:min-h-[265px]"
                        />

                        {tag.name === "Most trending" && (
                          <div
                            className="absolute bottom-0 left-0 bg-red-200 size-7 rounded-tr-[16px] font-bold text-[14px] flex items-center justify-center"
                            style={{ background: "var(--gradient-v)" }}
                          >
                            <div className="relative top-[2px]">
                              {item.weight}
                            </div>
                          </div>
                        )}
                      </div>
                      {brand?.l10n[locale].name}
                    </NavigationLink>
                  </SwiperSlide>
                );
              })}

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
                  `prev-slide-${i} popular-fade absolute left-[-80px] top-0 z-[4] max-w-[140px] transition-opacity rotate-180 flex items-center`
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
                  `next-slide-${i} popular-fade absolute right-[-80px] top-0 z-[4] max-w-[140px] transition-opacity flex items-center`
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
        </div>
      ))}
    </section>
  );
};
