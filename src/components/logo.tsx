'use client';

import { useApp } from '@/hooks/use-app';
import { type HTMLMotionProps, type MotionValue, motion } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';

type LogoProps = {
	height: MotionValue<string>;
	width: MotionValue<string>;
} & HTMLMotionProps<'a'>;

export const Logo = ({ className, height, width, ...props }: LogoProps) => {
	const { isMenuOpen } = useApp();

	return (
		<motion.a
			className="relative w-full h-[50px]"
			style={{
				height,
				width,
			}}
			{...props}
			href="/"
		>
			<Image
				src={`${!isMenuOpen ? '/assets/logo-pardini.png' : '/assets/logo-pardini-dark.png'}`}
				alt="Logo Pardini"
				className="w-full h-full max-w-[160px] md:max-w-[440px]"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				priority
				fill
			/>
		</motion.a>
	);
};
