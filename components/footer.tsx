import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="px-4 py-10 lg:px-[80px] lg:py-[100px] mt-10 lg:mt-[100px]">
      <div className="flex justify-between items-start w-full flex-col lg:flex-row gap-10 lg:gap-0">
        <div className="flex flex-col gap-[60px]">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={164}
              height={32}
              quality={100}
              alt="ShortDrama"
            />
          </Link>
          <span className="text-[12px] text-white/30 hidden lg:block">
            (с) All rights reserved Shortapp 2025
          </span>
        </div>

        <div className="flex-col gap-[10px] hidden lg:flex">
          <Link href="/privacy" className="main-link">
            Privacy policy
          </Link>
          <Link href="/terms" className="main-link">
            Terms of use
          </Link>
        </div>

        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-2">
            <span className="text-[12px] text-white/30">Contact us</span>
            <a href="mailto:drama@ktrend.ae">drama@ktrend.ae</a>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] lg:hidden">
          <Link href="/privacy" className="main-link">
            Privacy policy
          </Link>
          <Link href="/terms" className="main-link">
            Terms of use
          </Link>
        </div>

        <span className="text-[12px] text-white/30 lg:hidden">
          (с) All rights reserved Shortapp 2025
        </span>
      </div>
    </footer>
  );
};
