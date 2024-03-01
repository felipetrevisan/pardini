"use client";

import { ReactNode } from "react";

type BodyProps = {
  children: ReactNode;
};

export function Body({ children }: BodyProps) {
  return <body className="antialiased">{children}</body>;
}
