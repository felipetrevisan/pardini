import React from "react";

export function TriangleDivider({
  transparent = true,
}: {
  transparent?: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={transparent ? "bg-transparent" : "bg-white"}
    >
      <path className="fill-secondary" d="M10 0 L100 40 L100 0 Z"></path>
      <path className="fill-primary" d="M0 100 L100 0 L100 0 Z"></path>
    </svg>
  );
}
