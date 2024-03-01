import React, { SVGProps } from "react";

type Props = SVGProps<SVGElement>;

export function CurveDownDivider({ color = "currentColor", className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
    >
      <path fill={color} d="M0 0 C 50 100 80 100 100 0 Z"></path>
    </svg>
  );
}
