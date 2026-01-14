import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marine-teal disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          // Variants
          variant === "primary" &&
            "bg-ocean-blue text-white hover:bg-opacity-90 shadow-sm",
          variant === "secondary" &&
            "bg-sunset-coral text-white hover:bg-opacity-90 shadow-sm",
          variant === "outline" &&
            "border border-ocean-blue text-ocean-blue hover:bg-ocean-blue/10",
          variant === "ghost" &&
            "hover:bg-gray-100 dark:hover:bg-gray-800 text-charcoal-slate",
          // Sizes
          size === "sm" && "h-8 px-3 text-xs",
          size === "md" && "h-10 px-4 py-2 text-sm",
          size === "lg" && "h-12 px-8 text-base",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
