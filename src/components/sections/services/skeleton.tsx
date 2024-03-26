"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ServiceSkeleton() {
  return (
    <Card className="shadow hover:shadow-xl group relative overflow-hidden select-none cursor-pointer bg-gradient-to-r hover:from-slate-500 hover:via-primary hover:to-secondary p-1">
      <CardContent className="flex h-80 items-center justify-center p-6 w-full bg-white overflow-hidden rounded-lg">
        <div className="flex flex-col items-center justify-start gap-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <Skeleton className="size-16 rounded-full" />
            <Skeleton className="h-4 w-[250px]" />
          </div>
          <div className="flex flex-col items-center justify-start gap-4 text-sm">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
