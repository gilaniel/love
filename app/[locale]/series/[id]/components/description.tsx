"use client";

import { Link } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Description = ({ text }: { text: string }) => {
  const [isMore, setMore] = useState(false);

  async function copyToClipboard() {
    const text = window.location.href;
    try {
      await navigator.clipboard.writeText(text);
      toast("Copied");
    } catch (err) {
      console.error("Ошибка при копировании: ", err);
    }
  }

  return (
    <>
      <div
        className="lg:hidden flex items-center gap-2"
        onClick={() => setMore((prev) => !prev)}
      >
        {!isMore && <p className="more-desc-btn">More</p>}
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-3 items-center">
          <p className="text-[22px]">Description</p>

          <Link className="size-5 cursor-pointer" onClick={copyToClipboard} />
        </div>

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
