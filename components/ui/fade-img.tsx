"use client";

import { useState } from "react";

import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface FadeImgProps extends ImageProps {
  className?: string;
}

export const FadeImg = ({ className, alt, ...rest }: FadeImgProps) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <Image
      className={cn(className, "opacity-0", loaded && "opacity-[1]")}
      onLoad={onLoad}
      style={{ transition: "all .3s ease" }}
      alt={alt}
      {...rest}
    />
  );
};
