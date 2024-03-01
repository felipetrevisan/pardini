"use client";

import React, { HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

export function Title({
  asChild,
  className,
  children,
  ...props
}: Props) {
  const Component = asChild ? Slot : "div";

  return (
    <Component className={cn("flex gap-1 items-center text-primary-foreground text-2xl font-semibold", className)} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="7"
        viewBox="0 0 26 7"
        fill="none"
      >
        <path
          d="M26 0.999776C26 1.55218 25.2166 2 24.2493 2H7.74961C7.26654 2 6.82911 1.88808 6.51229 1.70704C6.19573 1.52628 6 1.27626 6 1.00007C5.99974 0.447599 6.78343 -0.000149254 7.75053 3.73222e-08H24.2506C25.2171 0.000124446 25.9998 0.447599 26 0.999776Z"
          className="fill-secondary"
        />
        <path
          d="M20 5.99978C20 6.55218 19.2166 7 18.2493 7H1.74961C1.26654 7 0.829108 6.88808 0.512287 6.70704C0.195727 6.52628 6.53032e-08 6.27626 6.53032e-08 6.00007C-0.000261194 5.4476 0.783431 4.99985 1.75053 5H18.2506C19.2171 5.00012 19.9998 5.4476 20 5.99978Z"
          className="fill-secondary"
        />
      </svg>
      <h2 className="text-secondary">{children}</h2>
      {/* <div className="bg-secondary max-w-max" /> */}
    </Component>
  );
}
