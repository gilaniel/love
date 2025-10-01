import { Button } from "@/components/ui/button";
import { FadeImg } from "@/components/ui/fade-img";
import Link from "next/link";

export const GetApp = () => {
  return (
    <section className="relative pb-[40px] overflow-x-hidden" data-anchor="app">
      <div className="flex flex-col items-center gap-10 max-w-[620px] px-4 mx-auto pt-[80px] lg:pt-[120px] relative z-[3]">
        <h2 className="title">
          Love the drama? <br /> You need The ShortDrama app!
        </h2>
        <div className="flex flex-col gap-5">
          <p>
            Whether you have a few minutes between meetings or want to unwind
            before bed, our short-form romantic dramas are designed for your
            mobile screen, making it easy to immerse yourself in passionate love
            stories on the go. With high-quality storytelling, relatable
            characters, and emotionally rich plots, {`you'll`} never run out of
            heartfelt romance to enjoy.
          </p>
          <p>
            Feel the love, live the drama! Download Love Drama and experience
            short romance stories that will touch your heart.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto">
          <div>
            <FadeImg
              src="/qr2.svg"
              alt="Get app"
              quality={100}
              width={140}
              height={140}
              className="rounded-[16px]"
            />
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-auto items-center">
            <Link
              href="https://lovedrama.onelink.me/3PHG/36j653y4"
              target="_blank"
            >
              <Button className="gradient-black-btn h-[48px] w-full md:w-[200px] rounded-[28px]">
                <span className="black-btn-bg"></span>
                <FadeImg
                  src="/icons/apple.svg"
                  alt="App Store"
                  quality={100}
                  width={24}
                  height={24}
                />
                <span>App Store</span>
              </Button>
            </Link>
            <Link
              href="https://lovedrama.onelink.me/3PHG/36j653y4"
              target="_blank"
            >
              <Button className="gradient-black-btn h-[48px] w-full md:w-[200px] rounded-[28px]">
                <span className="black-btn-bg"></span>
                <FadeImg
                  src="/icons/google.svg"
                  alt="Google play"
                  quality={100}
                  width={24}
                  height={24}
                />
                <span>Google play</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <FadeImg
        src="/phone-l.png"
        alt="Get app"
        quality={100}
        width={645}
        height={608}
        className="absolute right-1/2 top-[110px] translate-x-[-290px] z-[2]"
      />
      <FadeImg
        src="/phone-r.png"
        alt="Get app"
        quality={100}
        width={534}
        height={503}
        className="absolute left-1/2 top-[20px] translate-x-[310px] z-[2]"
      />
    </section>
  );
};
