'use client';

import * as App from '@/components/app';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import './styles.scss';
import { portableComponents } from '@/components/ui/portable-components';
import { Skeleton } from '@/components/ui/skeleton';
import { useSite } from '@/hooks/use-site';
import { PortableText } from '@portabletext/react';

export function About() {
	const { data, isLoading } = useSite();

	return (
		<motion.div
			layout
			className="container h-full w-screen flex flex-col lg:flex-row my-20"
			data-section="about"
		>
			<div className="container flex flex-col lg:flex-row items-center justify-around gap-10">
				<div className="size-full md:size-[436px] max-w-[436px] max-h-[436px] flex justify-center items-center relative">
					<Image src="/assets/about.png" alt="" width={436} height={436} />
				</div>
				<div className="w-full lg:w-1/2 flex flex-col gap-5">
					<App.Title className="text-2xl md:text-4xl">A Pardini</App.Title>
					{isLoading &&
						Array.from({ length: 10 }).map((_, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Skeleton className="h-4 w-full" key={index} />
						))}
					{!isLoading && data && (
						<>
							<div className="font-medium text-justify md:text-start">
								<PortableText
									value={data.shortAbout}
									components={portableComponents}
								/>
							</div>
							<Link href="/quem-somos" passHref>
								<Button
									variant="default"
									size="xl"
									rounded="full"
									hover="effect"
									shadow
									className="flex items-center justify-between gap-2 w-full md:w-auto"
								>
									Saiba mais sobre nós
									<ChevronRightIcon fontSize={10} />
								</Button>
							</Link>
						</>
					)}
				</div>
			</div>
		</motion.div>
	);
}
