"use client";

import { useNavigation } from "@/providers/NavigationProviders";
import NextLink from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface NavigationLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
  children: ReactNode;
}

export function NavigationLink({
  href,
  children,
  onClick,
  ...props
}: NavigationLinkProps) {
  const { navigate } = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(href);
  };

  return (
    <NextLink href={href} onClick={handleClick} {...props}>
      {children}
    </NextLink>
  );
}
