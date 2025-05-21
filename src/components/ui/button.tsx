import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive z-1 cursor-pointer',
	{
		variants: {
			variant: {
				default: 'shadow-sm outline outline-2',
				outline: 'shadow-sm outline outline-2',
				ghost: 'shadow-sm outline-0 border-0',
				link: 'underline-offset-4 hover:underline',
				icon: 'outline outline-2',
			},
			theme: {
				default:
					'bg-primary text-primary-foreground hover:bg-primary/30 hover:text-primary outline-primary/40',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/30 hover:text-secondary outline-secondary/40',
				tertiary:
					'bg-tertiary text-tertiary-foreground hover:bg-tertiary/30 hover:text-tertiary outline-tertiary/40',
				whatsapp:
					'bg-whatsapp border-2 text-whatsapp-foreground border-whatsapp hover:border-whatsapp-foreground outline-whatsapp hover:outline-whatsapp-foreground hover:border-whatsapp hover:bg-whatsapp-foreground hover:text-whatsapp',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 px-3 text-xs',
				lg: 'h-10 px-8',
				xl: 'h-14 text-md px-6',
				'2xl': 'h-16 text-md px-8',
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
				false: 'shadow-none',
			},
			hover: {
				effect:
					'before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:[clip-path:polygon(50%_0%,50%_0%,50%_50%,50%_100%,50%_100%,50%_50%)] before:-z-1 before:transition-all hover:before:[clip-path:polygon(25%_-70%,75%_-70%,120%_50%,75%_170%,25%_170%,-20%_50%)] before:duration-500',
			},
			fullWidth: {
				true: 'w-full',
			},
		},
		defaultVariants: {
			variant: 'default',
			theme: 'default',
			size: 'default',
			rounded: 'none',
			hover: null,
			shadow: false,
			fullWidth: false,
		},
		compoundVariants: [
			{
				theme: 'default',
				variant: 'icon',
				className:
					'transition-all ease-in-out duration-500 hover:bg-primary-foreground hover:text-primary',
			},
			{
				theme: 'secondary',
				variant: 'icon',
				className:
					'transition-all ease-in-out duration-500 hover:bg-secondary-foreground hover:text-secondary',
			},
			{
				theme: 'tertiary',
				variant: 'icon',
				className:
					'transition-all ease-in-out duration-500 hover:bg-tertiary-foreground hover:text-tertiary',
			},

			// Hover
			// Default / Primary
			{
				hover: 'effect',
				variant: 'default',
				className:
					'transition-all ease-in-out duration-500 before:bg-primary-foreground hover:text-primary',
			},
			{
				hover: 'effect',
				variant: 'outline',
				className:
					'transition-all ease-in-out duration-500 border-primary text-primary before:bg-primary hover:text-primary-foreground',
			},
			{
				hover: 'effect',
				variant: 'ghost',
				className:
					'transition-all ease-in-out duration-500 text-primary before:bg-primary hover:text-primary-foreground',
			},
			// Secondary
			{
				hover: 'effect',
				theme: 'secondary',
				variant: 'default',
				className:
					'transition-all ease-in-out duration-500 before:bg-secondary-foreground hover:text-secondary',
			},
			{
				hover: 'effect',
				theme: 'secondary',
				variant: 'outline',
				className:
					'transition-all ease-in-out duration-500 border-secondary text-secondary before:bg-secondary hover:text-secondary-foreground',
			},
			{
				hover: 'effect',
				theme: 'secondary',
				variant: 'ghost',
				className:
					'transition-all ease-in-out duration-500 text-secondary before:bg-secondary hover:text-secondary-foreground',
			},
			// Tertiary
			{
				hover: 'effect',
				theme: 'tertiary',
				variant: 'default',
				className:
					'transition-all ease-in-out duration-500 before:bg-tertiary-foreground hover:text-tertiary',
			},
			{
				hover: 'effect',
				theme: 'tertiary',
				variant: 'outline',
				className:
					'transition-all ease-in-out duration-500 border-tertiary text-tertiary before:bg-tertiary hover:text-tertiary-foreground',
			},
			{
				hover: 'effect',
				theme: 'tertiary',
				variant: 'ghost',
				className:
					'transition-all ease-in-out duration-500 text-tertiary before:bg-tertiary hover:text-tertiary-foreground',
			},

			// Shadow
			// Default / Primary
			{
				shadow: true,
				variant: 'default',
				className:
					'shadow-primary/40 hover:shadow-primary transition-shadow ease-in-out duration-500',
			},
			{
				shadow: true,
				variant: 'outline',
				className:
					'shadow-primary/40 hover:shadow-primary transition-shadow ease-in-out duration-500',
			},
			{
				shadow: true,
				variant: 'ghost',
				className:
					'shadow-primary/40 hover:shadow-primary transition-shadow ease-in-out duration-500',
			},
			// Secondary
			{
				shadow: true,
				theme: 'secondary',
				variant: 'default',
				className:
					'shadow-secondary/40 hover:shadow-secondary transition-shadow ease-in-out duration-500',
			},
			{
				shadow: true,
				theme: 'secondary',
				variant: 'outline',
				className:
					'shadow-secondary/40 hover:shadow-secondary transition-shadow ease-in-out duration-500',
			},
			{
				shadow: true,
				theme: 'secondary',
				variant: 'ghost',
				className:
					'shadow-secondary/40 hover:shadow-secondary transition-shadow ease-in-out duration-500',
			},
			// Tertiary
			{
				shadow: true,
				theme: 'secondary',
				variant: 'default',
				className:
					'shadow-tertiary/40 hover:shadow-tertiary transition-shadow ease-in-out duration-500',
			},
			{
				shadow: true,
				theme: 'tertiary',
				variant: 'outline',
				className:
					'shadow-tertiary/40 hover:shadow-tertiary transition-shadow ease-in-out duration-500',
			},
			{
				shadow: true,
				theme: 'tertiary',
				variant: 'ghost',
				className:
					'shadow-tertiary/40 hover:shadow-tertiary transition-shadow ease-in-out duration-500',
			},

			// Outline
			{
				variant: 'outline',
				className: 'bg-transparent text-primary',
			},
			{
				variant: 'ghost',
				className: 'bg-transparent text-primary',
			},
			{
				variant: 'icon',
				size: 'default',
				className: 'size-9 p-0 [&_svg]:size-4',
			},
			{
				variant: 'icon',
				size: 'sm',
				className: 'size-8 p-0 [&_svg]:size-3',
			},
			{
				variant: 'icon',
				size: 'lg',
				className: 'size-10 p-0',
			},
			{
				variant: 'icon',
				size: 'xl',
				className: 'size-14 p-0 [&_svg]:size-9',
			},
			{
				variant: 'icon',
				size: '2xl',
				className: 'size-16 p-0 [&_svg]:size-10',
			},
		],
	},
);

function Button({
	className,
	variant,
	theme,
	size,
	rounded,
	hover,
	shadow,
	fullWidth,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot="button"
			className={cn(
				buttonVariants({
					variant,
					theme,
					size,
					rounded,
					hover,
					shadow,
					fullWidth,
					className,
				}),
			)}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
