"use client";

import Image from "next/image";
import { Testimonial, TestimonialType } from "@/types/testimonial";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/utils";

type Props = Omit<Testimonial, "showHome" | "id">;

export function Testimonial({ author, type, testimonial, video }: Props) {
  return (
    <Card className="h-[300px] max-h-[300px] group relative overflow-hidden select-none cursor-pointer p-1">
      <CardContent className="flex items-center justify-center w-full bg-white overflow-hidden rounded-lg p-0 h-full">
        <figure
          className={cn(
            "flex flex-col items-center justify-center w-full h-full border-b rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-secondary/90 border-slate-700",
            {
              "p-8": type === TestimonialType.TEXT,
            }
          )}
        >
          {type === TestimonialType.TEXT ? (
            <>
              <ScrollArea className="h-3/4 max-w-2xl mx-auto mb-4 text-white lg:mb-8 text-base relative w-full">
                <QuoteIcon className="absolute left-0 top-0 size-24 stroke-accent/30" />
                <p className="my-4 text-white font-bold text-center drop-shadow-xl shadow-black">
                  {testimonial}
                </p>
              </ScrollArea>
              <figcaption className="flex items-center justify-center">
                <Image
                  src={
                    author.avatar === null
                      ? `https:ui-avatars.com/api/?background=random&size=38&rounded=true&name=${author.name}`
                      : urlForImage(author.avatar).url()
                  }
                  alt={`Foto de ${author.name}`}
                  width={38}
                  height={38}
                  className="size-8 rounded-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="space-y-0.5 font-bold text-white text-left rtl:text-right ms-3">
                  <div>{author.name}</div>
                </div>
              </figcaption>
            </>
          ) : (
            <iframe
              width="560"
              height="315"
              src={video!}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video h-full w-full overflow-hidden"
            />
          )}
        </figure>
      </CardContent>
    </Card>
  );
}
