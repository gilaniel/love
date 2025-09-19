"use client";

import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import { cn, scrollTo } from "@/lib/utils";
import { ContentItem } from "@/types/model";
import { Icon } from "@/components/ui/icon";

const COUNTS_PER_PAGE = 20;

export const Episodes = ({
  data,
  onEpisodeClick,
}: {
  data: ContentItem[];
  onEpisodeClick?: (link?: string) => void;
}) => {
  const total = data.length;
  const pages = Math.ceil(total / COUNTS_PER_PAGE);
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass | null>(null);
  const [index, setIndex] = useState(0);
  const [currentEpisode, setEpisode] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4 text-[14px] text-white/70 justify-center">
        {new Array(pages).fill(1).map((_, page, array) => (
          <div
            key={page}
            onClick={() => {
              firstSwiper?.slideTo(page, 600);
              setIndex(page);
            }}
            className={`${
              index === page ? "active" : ""
            } cursor-pointer episodes-tab`}
          >
            {COUNTS_PER_PAGE * page + 1} -{" "}
            {array.length === page + 1 ? total : COUNTS_PER_PAGE * (page + 1)}
          </div>
        ))}
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        allowTouchMove={false}
        autoHeight={true}
        onSwiper={(swiper) => {
          setFirstSwiper(swiper);
        }}
        className="episodes-slider"
      >
        {new Array(pages).fill(1).map((_, page) => (
          <SwiperSlide key={page}>
            <div className="grid grid-cols-4 lg:grid-cols-5 gap-1 w-full ">
              {new Array(total)
                .fill(1)
                .slice(COUNTS_PER_PAGE * page, COUNTS_PER_PAGE * (page + 1))
                .map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex item-center justify-center rounded-[8px] text-[14px] py-4 font-[500] relative cursor-pointer transition-colors",
                      i + COUNTS_PER_PAGE * page !== currentEpisode &&
                        "hover:bg-[#080808] border-[1px] border-white/20"
                    )}
                    onClick={() => {
                      if (onEpisodeClick) {
                        onEpisodeClick(data[i].is_open ? data[i].cf_link : "");

                        if (data[i].is_open) {
                          setEpisode(i);
                        }

                        return;
                      }

                      scrollTo("app");
                    }}
                    style={{
                      background:
                        i + COUNTS_PER_PAGE * page === currentEpisode
                          ? "var(--gradient-v)"
                          : "#191919",
                    }}
                  >
                    {!data[i].is_open && (
                      <Icon
                        url="/icons/lock.svg"
                        alt="1"
                        classNames="absolute size-5 top-[-1px] right-[-1px]"
                      />
                    )}
                    {i + 1 + COUNTS_PER_PAGE * page}
                  </div>
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
