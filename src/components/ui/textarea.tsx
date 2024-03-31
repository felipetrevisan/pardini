import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full bg-input/10 border-2 border-input/20 text-gray-900 rounded-2xl px-3 py-2 text-sm shadow-sm placeholder:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-within:border-input/50 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
