import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-[1] duration-500 cursor-pointer',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground shadow hover:bg-primary/30 outline outline-2 outline-primary',
				destructive:
					'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
				outline:
					'border border-white bg-accent shadow-sm hover:bg-secondary hover:text-secondary-foreground outline outline-2 outline-secondary',
				secondary:
					'bg-secondary text-secondary-foreground shadow hover:bg-secondary/30 outline outline-2 outline-secondary',
				tertiary:
					'bg-tertiary text-tertiary-foreground shadow hover:bg-tertiary outline outline-2 outline-tertiary',
				ghost: 'hover:bg-secondary/10',
				link: 'text-primary underline-offset-4 hover:underline',
				whatsapp:
					'bg-success border-2 border-white text-white font-bold hover:bg-white hover:text-success hover:border-white outline outline-2 outline-success hover:outline-white hover:border-success',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 px-3 text-xs',
				lg: 'h-10 px-8',
				xl: 'h-14 text-md px-6',
				'2xl': 'h-16 text-md px-8',
			},
			icon: {
				true: 'size-9 p-0',
			},
			rounded: {
				none: 'rounded-none',
				full: 'rounded-full',
				lg: 'rounded-lg',
				xl: 'rounded-2xl',
				'2xl': 'rounded-3xl',
			},
			shadow: {
				true: 'shadow-[-.2rem_.35rem]',
			},
			hover: {
				effect:
					'before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:[clip-path:polygon(50%_0%,50%_0%,50%_50%,50%_100%,50%_100%,50%_50%)] before:-z-[1] before:transition-all hover:before:[clip-path:polygon(25%_-70%,75%_-70%,120%_50%,75%_170%,25%_170%,-20%_50%)] before:duration-500',
			},
			fullWidth: {
				true: 'w-full',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
			rounded: 'none',
			hover: null,
			shadow: false,
			icon: false,
			fullWidth: false,
		},
		compoundVariants: [
			{
				icon: true,
				size: 'default',
				className: 'size-7',
			},
			{
				icon: true,
				size: 'sm',
				className: 'size-6',
			},
			{
				icon: true,
				size: 'lg',
				className: 'size-7',
			},
			{
				icon: true,
				size: 'xl',
				className: 'size-10',
			},
			{
				icon: true,
				size: '2xl',
				className: 'size-12',
			},
			{
				hover: 'effect',
				variant: 'default',
				className:
					'transition-all ease-in-out duration-500 before:bg-accent hover:text-primary',
			},
			{
				hover: 'effect',
				variant: 'secondary',
				className:
					'transition-all ease-in-out duration-500 before:bg-accent hover:text-secondary',
			},
			{
				shadow: true,
				variant: 'default',
				className:
					'shadow-primary/40 hover:shadow-black transition-shadow ease-in-out duration-500',
			},
			{
				shadow: true,
				variant: 'secondary',
				className:
					'shadow-secondary/40 hover:shadow-black transition-shadow ease-in-out duration-500',
			},
			{
				shadow: true,
				variant: 'outline',
				className:
					'shadow-secondary/40 hover:shadow-black transition-shadow ease-in-out duration-500',
			},
		],
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			rounded,
			hover,
			icon,
			shadow,
			fullWidth,
			asChild = false,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(
					buttonVariants({
						variant,
						size,
						rounded,
						hover,
						icon,
						shadow,
						fullWidth,
						className,
					}),
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = 'Button';

export { Button, buttonVariants };
