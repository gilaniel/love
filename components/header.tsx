"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCurrentLocale } from "next-i18n-router/client";

import { cn, scrollTo } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "@/i18nConfig";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const Header = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = useCurrentLocale(i18nConfig);

  const [isScrolled, setScrolled] = useState(false);

  const switchHeader = () => {
    const scrollY = window.scrollY;

    setScrolled(scrollY > 80);
  };

  const handleChange = (locale: string) => {
    const newLocale = locale;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  useEffect(() => {
    switchHeader();

    document.addEventListener("scroll", switchHeader);
  }, []);

  return (
    <header
      className={cn(
        "flex py-4 lg:py-5 px-4 lg:px-[80px] bg-primary relative justify-between items-center z-[10] sticky top-0",
        isScrolled ? "bg-[#ffffff03] backdrop-blur-[4px]" : ""
      )}
    >
      <Link href="/" className="flex-1 text-left">
        <Image
          src="/logo.svg"
          width={164}
          height={32}
          quality={100}
          alt="ShortDrama"
          className="h-[24px] w-[123px] lg:w-[164px] lg:h-[32px]"
        />
      </Link>

      <div className="gap-10 font-[600] hidden pointer-events-none md:pointer-events-auto md:flex main-page-nav opacity-0 transition-opacity flex-1 justify-center md:text-[14px] lg:text-[16px] text-center">
        <span className="main-link" onClick={() => scrollTo("home")}>
          Home
        </span>
        <span
          className="main-link"
          onClick={() => scrollTo("popular")}
          style={{ whiteSpace: "nowrap" }}
        >
          Most popular
        </span>
        <span className="main-link" onClick={() => scrollTo("faq")}>
          FAQ
        </span>
      </div>

      <div className="flex flex-1 gap-4 items-center">
        <div className="flex flex-1 justify-end">
          <Button
            size="lg"
            className="w-10 h-10 px-0 lg:w-auto lg:h-10 lg:px-6 "
            onClick={() => scrollTo("app")}
          >
            <Image
              src="/icons/download.svg"
              alt="download"
              width={24}
              height={24}
              quality={100}
            />
            <span className="hidden lg:block ">Download</span>
          </Button>
        </div>

        <Select onValueChange={(v) => handleChange(v)} value={currentLocale}>
          <SelectTrigger className="w-[140px] rounded-2xl">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent className="rounded-2xl bg-black">
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="pt">Português</SelectItem>
            <SelectItem value="es">Español</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};
