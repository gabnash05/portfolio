import { type ComponentPropsWithoutRef, type CSSProperties, type FC } from "react";

import { cn } from "@/lib/utils";

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
  color?: string;
  delay?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  delay = 0,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
          animationDelay: `${delay}s`,
        } as CSSProperties
      }
      className={cn(
        // Base styles
        "mx-auto max-w-md text-neutral-800/70 dark:text-neutral-300/70",

        // Shine effect
        "animate-shiny-text bg-size-[var(--shiny-width)_100%] bg-clip-text bg-position-[0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shine gradient
        "bg-linear-to-r from-transparent via-[#072F40]/80 via-50% to-transparent dark:via-[#D3E5ED]/80",

        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
