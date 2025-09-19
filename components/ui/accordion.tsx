"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import Image from "next/image";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-[#26262699] last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "accordion-trigger focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-[50px] rounded-md py-5 text-left text-[20px] font-[500] transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer leading-[120%]",
          className
        )}
        {...props}
      >
        <span className="mt-2">{children}</span>
        <span className="gradient-circle-btn h-[40px] w-[40px] min-w-[40px] flex items-center justify-center">
          <Image
            src="/icons/plus.svg"
            alt=""
            quality={100}
            width={24}
            height={24}
            className="accordion-close"
          />
          <Image
            src="/icons/minus.svg"
            alt=""
            quality={100}
            width={24}
            height={24}
            className="accordion-open"
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div
        className={cn(
          "pt-0 pb-5 pl-6 text-white/70 leading-[140%] text-[16px] font-[300]",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
