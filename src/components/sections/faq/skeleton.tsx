import { Skeleton as BaseSkeleton } from '@/components/ui/skeleton';

export function Skeleton() {
	return (
		<div className="border-b relative bg-card mb-3 shadow-lg rounded-2xl p-6 flex flex-col mt-10">
			<BaseSkeleton className="h-4 w-full" />
		</div>
	);
}
