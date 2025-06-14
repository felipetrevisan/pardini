'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { portableComponents } from '@/components/ui/portable-components';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn, getWordInitials } from '@/lib/utils';
import { urlForImage } from '@/sanity/lib/utils';
import { type Testimonial, TestimonialType } from '@/types/testimonial';
import { YouTubeEmbed } from '@next/third-parties/google';
import { PortableText } from '@portabletext/react';
import { QuoteIcon } from 'lucide-react';
import { Fragment } from 'react';

type Props = Omit<Testimonial, 'showHome' | 'id'>;

export function Testimonials({ author, type, testimonial, video }: Props) {
	return (
		<Card className="h-[300px] max-h-[300px] group relative overflow-hidden select-none cursor-pointer p-1">
			<CardContent className="flex items-center justify-center w-full bg-accent overflow-hidden rounded-lg p-0 h-full">
				<figure
					className={cn(
						'flex flex-col items-center justify-center w-full h-full border-0',
						{
							'p-8': type === TestimonialType.TEXT,
						},
					)}
				>
					{type === TestimonialType.TEXT ? (
						<Fragment>
							<ScrollArea className="h-3/4 max-w-2xl mx-auto mb-4 lg:mb-8 text-base relative w-full">
								<QuoteIcon className="absolute left-0 top-0 size-24 stroke-accent/30" />
								<div className="my-4 text-slate-700 font-bold drop-shadow-xl shadow-black text-center md:text-left">
									{testimonial && (
										<PortableText
											value={testimonial}
											components={portableComponents}
										/>
									)}
								</div>
							</ScrollArea>
							<figcaption className="flex items-center justify-center">
								<Avatar>
									<AvatarImage
										src={
											author.avatar
												? urlForImage(author.avatar.asset).url()
												: undefined
										}
										alt={`Foto de ${author.name}`}
									/>
									<AvatarFallback>
										{getWordInitials(author.name)}
									</AvatarFallback>
								</Avatar>
								<div className="space-y-0.5 font-bold text-slate-700 text-left rtl:text-right ms-3">
									<div>{author.name}</div>
								</div>
							</figcaption>
						</Fragment>
					) : (
						<div className="aspect-video h-full w-full overflow-hidden flex flex-col justify-center">
							{video && (
								<YouTubeEmbed
									videoid={new URL(video).pathname.split('/')[2] ?? ''}
								/>
							)}
						</div>
					)}
				</figure>
			</CardContent>
		</Card>
	);
}
