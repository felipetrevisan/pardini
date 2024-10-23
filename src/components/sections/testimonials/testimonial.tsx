"use client";

import { Fragment } from "react";
import { QuoteIcon } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { Testimonial, TestimonialType } from "@/types/testimonial";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { cn, getWordInitials } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { portableComponents } from "@/components/ui/portable-components";

type Props = Omit<Testimonial, "showHome" | "id">;

export function Testimonials({ author, type, testimonial, video }: Props) {
  return (
    <Card className="h-[300px] max-h-[300px] group relative overflow-hidden select-none cursor-pointer p-1">
      <CardContent className="flex items-center justify-center w-full bg-accent overflow-hidden rounded-lg p-0 h-full">
        <figure
          className={cn("flex flex-col items-center justify-center w-full h-full border-0", {
            "p-8": type === TestimonialType.TEXT,
          })}
        >
          {type === TestimonialType.TEXT ? (
            <Fragment>
              <ScrollArea className="h-3/4 max-w-2xl mx-auto mb-4 lg:mb-8 text-base relative w-full">
                <QuoteIcon className="absolute left-0 top-0 size-24 stroke-accent/30" />
                <p className="my-4 text-slate-700 font-bold drop-shadow-xl shadow-black">
                  {testimonial && (
                    <PortableText value={testimonial} components={portableComponents} />
                  )}
                </p>
              </ScrollArea>
              <figcaption className="flex items-center justify-center">
                <Avatar>
                  <AvatarImage
                    src={author.avatar ? urlForImage(author.avatar.asset).url() : undefined}
                    alt={`Foto de ${author.name}`}
                  />
                  <AvatarFallback>{getWordInitials(author.name)}</AvatarFallback>
                </Avatar>
                <div className="space-y-0.5 font-bold text-slate-700 text-left rtl:text-right ms-3">
                  <div>{author.name}</div>
                </div>
              </figcaption>
            </Fragment>
          ) : (
            <iframe
              width="560"
              height="315"
              src={video!}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video h-full w-full overflow-hidden p-3"
            />
          )}
        </figure>
      </CardContent>
    </Card>
  );
}
