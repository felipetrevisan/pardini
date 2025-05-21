'use client';

import { useFaq } from '@/hooks/use-faq';
import { Fragment } from 'react';
import { Items } from './items';
import { Skeleton } from './skeleton';

export function Questions() {
	const { data, isLoading } = useFaq();

	return (
		<Fragment>
			{isLoading ? (
				<div className="flex flex-col space-y-3 mt-5">
					{Array.from({ length: 5 }).map((_, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Skeleton key={index} />
					))}
				</div>
			) : (
				<Items data={data ?? []} />
			)}
		</Fragment>
	);
}
