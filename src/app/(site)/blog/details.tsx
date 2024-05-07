"use client";

import { Author, Post } from "@/types/post";
import { urlForImage } from "@/sanity/lib/utils";
import { formatRelative, isDate } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getWordInitials } from "@/lib/utils";

type BlogDetailsProps = Author & Pick<Post, "date">;

export function PostDetails({ name, picture, date }: BlogDetailsProps) {
  return (
    <figcaption className="flex items-center justify-center flex-shrink">
      <Avatar>
        <AvatarImage src={picture ? urlForImage(picture).url() : undefined} />
        <AvatarFallback>{getWordInitials(name)}</AvatarFallback>
      </Avatar>
      <div className="space-y-0.5 text-left tracking-normal leading-snug ms-3">
        <p className="font-semibold text-black text-base">Por {name}</p>
        {isDate(date) && (
          <time dateTime={date} className="text-black text-xs capitalize">
            {formatRelative(date, new Date(), { locale: ptBR })}
          </time>
        )}
      </div>
    </figcaption>
  );
}
