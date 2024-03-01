"use client";

import { useApp } from "@/hooks/useApp";
import { MenuTypes } from "@/types";
import { Menu as MenuMobile } from "./Mobile";
import { Menu as MenuDesktop } from "./Desktop";

type Props = {
  isOpen?: boolean;
};

export function Menu({ isOpen = false }: Props) {
  const { currentSection, sections } = useApp();

  return (
    <>
      {/* <MenuMobile
        isOpen={isOpen}
        current={currentSection}
        sections={sections}
        className="inline-flex lg:hidden"
        type={MenuTypes.drawer}
      /> */}
      <MenuDesktop
        current={currentSection}
        sections={sections}
        // type={MenuTypes.top}
        // className="hidden lg:inline-flex"
      />
    </>
  );
}
