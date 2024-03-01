import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-[1] duration-500",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-secondary bg-accent shadow-sm hover:bg-secondary hover:text-secondary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        whatsapp: "bg-[#2ecb71] border-2 border-green-400 text-white font-bold",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        xl: "h-14 text-md px-10",
        "2xl": "h-16 text-md px-10",
        icon: "size-9",
      },
      rounded: {
        none: "rounded-none",
        full: "rounded-full",
        lg: "rounded-lg",
        xl: "rounded-2xl",
        "2xl": "rounded-3xl",
      },
      hover: {
        effect:
          "before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:[clip-path:polygon(50%_0%,50%_0%,50%_50%,50%_100%,50%_100%,50%_50%)] before:-z-[1] before:transition-all hover:before:[clip-path:polygon(25%_-70%,75%_-70%,120%_50%,75%_170%,25%_170%,-20%_50%)] before:duration-500",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "none",
      hover: null,
    },
    compoundVariants: [
      {
        size: "icon",
        className: "rounded-full",
      },
      {
        hover: "effect",
        variant: "default",
        className:
          "transition-all ease-in-out duration-500 before:bg-secondary hover:text-secondary-foreground",
      },
      {
        hover: "effect",
        variant: "secondary",
        className:
          "transition-all ease-in-out duration-500 before:bg-accent hover:text-primary-foreground",
      },
      // {
      //   hover: "effect",
      //   className: "rounded-full"
      // },
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
    { className, variant, size, rounded, hover, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, rounded, hover, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
