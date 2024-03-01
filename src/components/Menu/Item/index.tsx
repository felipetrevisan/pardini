"use client";

import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import * as Navbar from "@/components/ui/navbar";

type Props = {
  label: string;
  active: boolean;
} & LinkProps;

export function Item({ label, active = false, href, ...rest }: Props) {
  const classesMenu = cn(
    "block py-2 px-3 md:p-0 font-semibold text-white md:bg-transparent hover:after:left-0 hover:after-right-auto hover:after:w-full after:transition-all after:absolute after:left-auto after:right-0 after:-bottom-8 after:h-[0.20rem] after:w-0 after:bg-gradient-to-r after:from-white after:via-primary after:to-secondary relative inline-block px-1 uppercase",
    {
      "after:left-0 after-right-auto after:w-full pointer-events-none": active,
    },
  );

  return (
    <Navbar.Link asChild active={active}>
      <Link
        {...rest}
        href={href}
        className={classesMenu}
        aria-current="page"
        scroll
      >
        {label}
      </Link>
    </Navbar.Link>
  );
}
