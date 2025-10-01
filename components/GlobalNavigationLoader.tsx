"use client";

import { useNavigation } from "@/providers/NavigationProviders";
import { Loader } from "lucide-react";

export function GlobalNavigationLoader() {
  const { isPending } = useNavigation();

  if (!isPending) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backdropFilter: "blur(2px)",
      }}
    >
      <div className="flex flex-col items-center">
        <Loader className="size-8 animate-spin" />
      </div>
    </div>
  );
}
