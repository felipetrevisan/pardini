import { Skeleton } from "@/components/ui/skeleton";

export function FaqSkeleton() {
  return (
    <div
      role="status"
      className="border-b relative bg-card mb-3 shadow-lg rounded-2xl p-6 flex flex-col mt-10"
    >
      <Skeleton className="h-4 w-full" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
