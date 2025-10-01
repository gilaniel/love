"use client";

import { useRouter } from "next/navigation";
import {
  useTransition,
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type NavigationContextType = {
  isPending: boolean;
  navigate: (href: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    if (isPending) {
      setIsNavigating(true);
    } else {
      const timer = setTimeout(() => setIsNavigating(false), 100);
      return () => clearTimeout(timer);
    }
  }, [isPending]);

  const navigate = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <NavigationContext.Provider value={{ isPending: isNavigating, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
}
