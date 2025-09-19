"use client";

import { useState } from "react";

export const Description = ({ text }: { text: string }) => {
  const [isMore, setMore] = useState(false);

  return (
    <>
      <div
        className="lg:hidden flex items-center gap-2"
        onClick={() => setMore((prev) => !prev)}
      >
        {!isMore && <p className="more-desc-btn">More</p>}
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-[22px]">Description</p>
        <p className={`${isMore ? "" : "line-clamp-[3]"} mt-6 lg:mt-0`}>
          {text}
        </p>
      </div>

      <div
        className="hidden lg:flex items-center gap-2"
        onClick={() => setMore((prev) => !prev)}
      >
        {!isMore && <p className="more-desc-btn">More</p>}
      </div>
    </>
  );
};
