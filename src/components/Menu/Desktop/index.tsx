"use client";

import type { Section } from "@/types";
import { Item } from "../Item";

interface Props {
  sections: Section[];
  current: Section;
}

export function Menu({ sections, current }: Props) {
  return (
    <>
      {/* <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"> */}
      {sections.map((section) => {
        const isActive = current.path === section.path;

        return (
          <Item
            key={section.name.toLocaleLowerCase()}
            label={section.label}
            active={false}
            href={section.path}
            // className={`px-2 ${isActive ? "pointer-events-none" : ""}`}
            // type={type}
          />
        );
      })}
      {/* </ul> */}
    </>
    // <div className={className}>
    //   <nav className="flex items-center justify-between px-2 py-4">
    //     <ul className="flex flex-row p-4 lg:mx-auto lg:flex-row lg:p-0">
    //       {sections.map((section) => {
    //         const isActive = current.path === section.path;

    //         return (
    //           <Item
    //             key={section.name.toLocaleLowerCase()}
    //             label={section.label}
    //             active={isActive}
    //             href={section.path}
    //             className={`px-2 ${isActive ? 'pointer-events-none' : ''}`}
    //             type={type}
    //           />
    //         );
    //       })}
    //     </ul>
    //   </nav>
    // </div>
  );
}
