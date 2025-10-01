"use client";

import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100dvh-80px)]">
      <Loader className="size-8 animate-spin" />
    </div>
  );
}
