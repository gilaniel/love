"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { Icon } from "@/components/ui/icon";
import { Episodes } from "./episodes";
import { ContentItem, Locale, SeriesItem } from "@/types/model";

import { Description } from "./description";

import { scrollTo } from "@/lib/utils";
import Link from "next/link";

export const Info = ({
  data,
  meta,
  isPlaying,
  locale,
  count,
  onEpisodeClick,
  currentEpisode,
}: {
  data: ContentItem[];
  meta: SeriesItem;
  isPlaying: boolean;
  locale: Locale;
  count: number;
  onEpisodeClick?: (link?: string, episode?: number) => void;
  currentEpisode: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-[400px] w-full mt-10 lg:mt-[80px] flex flex-col gap-4 px-4 lg:px-0"
    >
      <h1 className="text-[24px] lg:text-[32px] leading-[120%]">
        {meta.l10n[locale].name || "-"}
      </h1>

      <div className="flex flex-col-reverse lg:flex-col gap-4">
        {meta.l10n[locale].description && (
          <Description text={meta.l10n[locale].description} />
        )}

        {!!meta.tags.length && (
          <div className="flex gap-2 flex-wrap">
            {meta.tags.map((tag, i) => (
              <Link href={`/?category=${tag.id}`} key={i}>
                <Tag v={tag.name} />
              </Link>
            ))}
          </div>
        )}

        <div className="lg:mt-10 flex flex-col">
          <p className="mb-4 hidden lg:block">Episodes 1-{count}</p>
          <div className="flex gap-1">
            <div
              className="w-[72px] h-[48px] rounded-[8px] flex items-center justify-center"
              style={{ background: "var(--gradient-v)" }}
            >
              <Icon url={`/icons/playing.${isPlaying ? "gif" : "svg"}`} />
            </div>
            <Button
              className="h-[48px] rounded-[28px] w-full mb-6"
              onClick={() => scrollTo("app")}
            >
              <span>Download app</span>
            </Button>
          </div>
          <Episodes
            data={data}
            onEpisodeClick={onEpisodeClick}
            currentEpisode={currentEpisode}
          />
        </div>
      </div>

      {/* <div className="flex gap-2 lg:gap-4 mt-10">
        {meta.prev && (
          <Link
            href={`/series/${data.id - 1}`}
            className="basis-1/2 lg:basis-auto"
          >
            <Button className="gradient-black-btn h-[56px] rounded-[28px] text-[14px] w-full">
              <span className="black-btn-bg"></span>
              <Icon
                url="/icons/next.svg"
                alt="Next"
                classNames="rotate-[180deg]"
              />
              <span>Previous show</span>
            </Button>
          </Link>
        )}
        {data.next && (
          <Link
            href={`/series/${data.id + 1}`}
            className="basis-1/2 lg:basis-auto"
          >
            <Button className="gradient-black-btn h-[56px] rounded-[28px] text-[14px] w-full">
              <span className="black-btn-bg"></span>
              <Icon url="/icons/next.svg" alt="Next" />
              <span>Next show</span>
            </Button>
          </Link>
        )}
      </div> */}
    </motion.div>
  );
};
