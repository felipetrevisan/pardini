'use client';

import { ServiceDetailsDialog } from '@/components/service-details-dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import type { Service } from '@/types/services';
import { icons } from 'lucide-react';
import type { ReactNode } from 'react';

type Props = Service & { children: ReactNode };

export function Item({ children, ...props }: Props) {
	const { title, icon } = props;
	const LucideIcon = icons[icon] ?? icons.Scale;

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Card className="shadow hover:shadow-xl group relative overflow-hidden select-none cursor-pointer bg-gradient-to-r hover:from-slate-500 hover:via-primary hover:to-secondary p-1">
					<CardContent className="flex h-80 items-center justify-center p-6 w-full bg-white overflow-hidden rounded-lg">
						<div className="flex flex-col items-center justify-start gap-5">
							<div className="flex flex-col items-center justify-center gap-5">
								<LucideIcon className="rounded-full bg-tabs text-tabs-foreground p-4 size-16 overflow-hidden" />
								<h6 className="flex items-center h-12 font-semibold text-base md:text-md lg:text-lg text-center">
									{title}
								</h6>
							</div>
							<div className="flex flex-col items-center justify-start gap-4 text-sm">
								{children}
								<div className="hidden justify-end w-full group-hover:flex absolute bottom-0 opacity-0 group-hover:opacity-100 group-hover:transition-all">
									<Button
										variant="tertiary"
										className="rounded-tl-3xl border-r-0 border-b-0"
									>
										Ver mais
									</Button>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</DialogTrigger>
			<ServiceDetailsDialog {...props} />
		</Dialog>
	);
}
