"use client";

import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PostsPaginationProps {
  pageCount: number;
  pageSize: number;
  pageIndex: number;
}

export function PostsPagination({ pageCount, pageSize, pageIndex }: PostsPaginationProps) {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const pageLength = Math.round(pageCount / pageSize);
  const page = pageIndex + 1;
  const hasPreviousPage = page > 1;
  const hasNextPage = page < pageLength;

  if (pageLength == 0) return <></>;

  return (
    <div className="flex items-center justify-end mb-10">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`/blog?${createQueryString("pageIndex", String(pageIndex - 1))}`}
                prefetch
                scroll={false}
                isDisabled={!hasPreviousPage}
              />
            </PaginationItem>
            {Array.from({ length: pageLength }).map((_, index) => (
              <PaginationItem key={index + 1}>
                <PaginationLink
                  href={`/blog?${createQueryString("pageIndex", String(index))}`}
                  prefetch
                  scroll={false}
                  isActive={page === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href={`/blog?${createQueryString("pageIndex", String(pageIndex + 1))}`}
                prefetch
                scroll={false}
                isDisabled={!hasNextPage}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
