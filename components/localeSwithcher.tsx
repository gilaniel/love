"use client";

import { useParams } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";

export function useLocale() {
  const params = useParams();
  return params.locale as string;
}

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchToLocale = (locale: string) => {
    let newPathname: string;

    if (locale === "en") {
      // Удаляем текущую локаль из пути
      newPathname = pathname.replace(/^\/(es|pt)/, "") || "/";
    } else {
      // Добавляем локаль, если её нет
      if (currentLocale === "en") {
        newPathname = `/${locale}${pathname === "/" ? "" : pathname}`;
      } else {
        newPathname = pathname.replace(/^\/(es|pt)/, `/${locale}`);
      }
    }

    router.push(newPathname);
  };

  return (
    <div>
      <button onClick={() => switchToLocale("en")}>EN</button>
      <button onClick={() => switchToLocale("es")}>ES</button>
      <button onClick={() => switchToLocale("pt")}>PT</button>
    </div>
  );
}
