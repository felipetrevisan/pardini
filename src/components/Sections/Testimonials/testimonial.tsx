"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { Testimonial } from "@/types/testimonial";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  children: ReactNode;
} & Pick<Testimonial, "name" | "picture">;

export function Testimonial({ name, picture, children }: Props) {
  return (
    <div className="flex items-start gap-2.5">
      <Image
        src={
          picture === "placeholder"
            ? `https:ui-avatars.com/api/?background=random&size=38&rounded=true&name=${name}`
            : picture!
        }
        alt={`Foto de ${name}`}
        width={38}
        height={38}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col gap-1 w-full max-w-[320px]">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {name}
          </span>
        </div>
        <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <p className="text-sm font-normal text-gray-900 dark:text-white">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
