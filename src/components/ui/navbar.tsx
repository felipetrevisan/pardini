import { useApp } from '@/hooks/use-app';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

const navbarVariants = cva('w-full h-auto sm:px-4 p-2', {
	variants: {
		sticky: {
			true: 'fixed z-90 top-0 start-0',
		},
		rounded: {
			none: 'rounded-none',
			full: 'rounded-full',
			lg: 'rounded-lg',
		},
	},
	defaultVariants: {
		sticky: false,
		rounded: 'none',
	},
});

type RootProps = PropsWithChildren<
	React.ComponentProps<typeof motion.nav> & VariantProps<typeof navbarVariants>
>;

function Root({ className, sticky, rounded, children, ...props }: RootProps) {
	return (
		<motion.nav
			className={cn(navbarVariants({ sticky, rounded }), className)}
			initial={false}
			{...props}
		>
			<div className="max-w-8xl mx-auto flex flex-wrap items-center justify-between">
				{children}
			</div>
		</motion.nav>
	);
}

function Brand({
	className,
	asChild = false,
	children,
	...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : 'div';
	return (
		<Comp className={cn('flex items-center space-x-3', className)} {...props}>
			{children}
		</Comp>
	);
}

const Path = (props: React.ComponentProps<typeof motion.path>) => (
	<motion.path
		strokeWidth="3"
		fill="currentColor"
		stroke="currentColor"
		strokeLinecap="round"
		{...props}
	/>
);

function Toggle({
	className,
	children,
	...props
}: React.ComponentProps<'button'>) {
	const { toggleMenu } = useApp();

	return (
		<button
			className={cn(
				'rounded-full bg-white cursor-pointer flex justify-center items-center size-12 text-sm lg:hidden',
				className,
			)}
			{...props}
			onClick={() => toggleMenu()}
		>
			{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
			<svg width="23" height="23" viewBox="0 0 23 23">
				<Path
					variants={{
						closed: { d: 'M 2 2.5 L 20 2.5' },
						open: { d: 'M 3 16.5 L 17 2.5' },
					}}
				/>
				<Path
					d="M 2 9.423 L 20 9.423"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					variants={{
						closed: { d: 'M 2 16.346 L 20 16.346' },
						open: { d: 'M 3 2.5 L 17 16.346' },
					}}
				/>
			</svg>
		</button>
	);
}

function Background({
	className,
	children,
	...props
}: React.ComponentProps<typeof motion.div>) {
	return (
		<motion.div
			className={cn(
				'absolute flex justify-center top-0 right-0 bottom-0 shadow-xl bg-accent backdrop-blur-xl md:hidden w-7/12 md:w-9/12 h-screen border-l-4 border-secondary',
				className,
			)}
			{...props}
		/>
	);
}

export { Root, Brand, Background, Toggle };
