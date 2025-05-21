'use client';

import { useSite } from '@/hooks/use-site';
import { motion } from 'framer-motion';
import { icons } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const MotionLink = motion(Link);

function SocialNetworks({ className, ...props }: React.ComponentProps<'div'>) {
	const { data, isLoading } = useSite();

	if (isLoading) return <></>;

	return (
		<div className={className} {...props}>
			{data?.socialNavigation?.items.map(({ id, icon, url, label }) => {
				const Icon = icons[icon as keyof typeof icons] ?? icons.Link;

				return (
					<MotionLink
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						whileTap={{ scale: 0.97 }}
						whileHover={{ scale: 1.1 }}
						key={id}
						passHref
						className="relative mx-1 inline-flex items-center justify-center"
					>
						<Button
							theme="secondary"
							variant="icon"
							size="lg"
							rounded="full"
							hover="effect"
						>
							<Icon />
							<span className="sr-only">{label}</span>
						</Button>
					</MotionLink>
				);
			})}
		</div>
	);
}

export { SocialNetworks };
