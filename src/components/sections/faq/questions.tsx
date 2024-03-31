"use client";

import { Fragment } from "react";
import { useFaq } from "@/hooks/useFaq";
import { FaqSkeleton } from "./skeleton";
import { Items } from "./items";

export function Questions() {
  const { data, isLoading } = useFaq();

  return (
    <Fragment>
      {isLoading ? (
        <Fragment>
          {Array.from({ length: 5 }).map((_, index) => (
            <FaqSkeleton key={index} />
          ))}
        </Fragment>
      ) : (
        <Items data={data ?? []} />
      )}
    </Fragment>
  );
}
