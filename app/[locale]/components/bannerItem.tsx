import { Button } from "@/components/ui/button";
import { FadeImg } from "@/components/ui/fade-img";
import { SeriesItem } from "@/types/model";
import Image from "next/image";
import Link from "next/link";

export const BannerItem = ({
  data,
  onNextClick,
}: {
  data: SeriesItem;
  onNextClick: () => void;
}) => {
  return (
    <div className="w-[100vw] h-[670px] relative">
      <FadeImg
        src={`/series/${data.id}/${data.banner}`}
        alt={data.title}
        quality={100}
        width={1200}
        height={700}
        className="absolute object-cover object-start w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-end pb-[85px] px-4 lg:px-[80px]">
        <div className="flex justify-between items-start w-full gap-5 flex-col lg:flex-row lg:items-end">
          <div className="flex flex-col gap-4 max-w-[620px]">
            <p className="text-[40px] md:text-[56px] font-[500] leading-[120%] tracking-[0.04em]">
              {data.title}
            </p>
            <p>{data.description}</p>
            <span className="text-[12px] text-[#aba497] font-[400]">
              {data.episodes} episodes
            </span>
          </div>

          <div className="flex gap-6 w-full lg:w-auto items-center lg:items-end justify-center md:justify-start">
            <Link href={`/series/${data.id}`}>
              <Button className="gradient-black-btn h-[56px] rounded-[28px]">
                <span className="black-btn-bg"></span>
                <Image
                  src="/icons/play.svg"
                  alt="Watch now"
                  quality={100}
                  width={24}
                  height={24}
                />
                <span>Watch now</span>
              </Button>
            </Link>

            <Button
              className="gradient-circle-btn h-[56px] w-[56px]"
              onClick={onNextClick}
            >
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
  );
};
