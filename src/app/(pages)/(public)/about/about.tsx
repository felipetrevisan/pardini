'use client';

import * as App from '@/components/app';
import { aboutSectionVariants } from '@/config/animation';
import { useAbout } from '@/hooks/use-about';
import { cn } from '@/lib/utils';
import { urlForImage } from '@/sanity/lib/utils';
import { type About as AboutType, BlockSideType } from '@/types/about';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function About({ initialData }: { initialData: AboutType[] }) {
	const { data } = useAbout(initialData);

	return (
		<motion.div layout className="h-full flex flex-col space-y-20 bg-white">
			<div className="grid gap-10">
				{data?.map(({ id, title, content, picture }, index) => {
					const idx = index % 3;

					return (
						<motion.div
							key={id}
							className="w-full flex flex-col"
							initial="hidden"
							variants={aboutSectionVariants}
							whileInView="visible"
							viewport={{ once: true }}
						>
							<div className="px-10 w-full flex flex-col justify-center gap-5">
								{title && <App.Title className="text-4xl">{title}</App.Title>}
								<div
									className={cn(
										'relative grid gap-16 before:bg-secondary/5 before:absolute before:w-full before:h-full before:-z-[1] before:rounded-lg backdrop-blur-xl p-10',
										{
											'md:grid-cols-[2fr_1fr]':
												picture.hasPicture &&
												picture.side === BlockSideType.AFTER,
											'md:grid-cols-[1fr_2fr]':
												picture.hasPicture &&
												picture.side === BlockSideType.BEFORE,
											'md:grid-cols-[1fr]': !picture.hasPicture,
										},
									)}
								>
									{picture.hasPicture &&
										picture.side === BlockSideType.BEFORE && (
											<div className="relative w-full flex justify-center items-center">
												<Image
													src={urlForImage(picture.image.asset).url()}
													alt=""
													width={353}
													height={470}
													className={cn(
														'shadow-[-.50rem_.75rem] shadow-tertiary',
														{
															'rounded-[16%_84%_22%_78%_/_73%_28%_72%_27%]':
																idx === 0,
															'rounded-[0%_100%_0%_100%_/_73%_29%_71%_27%]':
																idx === 1,
															'rounded-[16%_84%_19%_81%_/_88%_10%_90%_12%]':
																idx === 2,
														},
													)}
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
													placeholder="blur"
													blurDataURL={picture.image.metadata.lqip}
												/>
											</div>
										)}
									<div className="font-semibold flex flex-col justify-center gap-4 drop-shadow-text shadow-white">
										<PortableText value={content} />
									</div>
									{picture.hasPicture &&
										picture.side === BlockSideType.AFTER && (
											<div className="relative w-full flex justify-center items-center">
												<Image
													src={urlForImage(picture.image.asset).url()}
													alt=""
													width={353}
													height={470}
													className={cn(
														'shadow-[-.50rem_.75rem] shadow-tertiary',
														{
															'rounded-[16%_84%_22%_78%_/_73%_28%_72%_27%]':
																idx === 0,
															'rounded-[0%_100%_0%_100%_/_73%_29%_71%_27%]':
																idx === 1,
															'rounded-[16%_84%_19%_81%_/_88%_10%_90%_12%]':
																idx === 2,
														},
													)}
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
													placeholder="blur"
													blurDataURL={picture.image.metadata.lqip}
												/>
											</div>
										)}
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</motion.div>
	);
}
