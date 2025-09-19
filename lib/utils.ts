import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollTo(anchor: string) {
  const el: HTMLDivElement | null = document.querySelector(
    `[data-anchor='${anchor}']`
  );

  el?.scrollIntoView({
    behavior: "smooth",
  });
}
