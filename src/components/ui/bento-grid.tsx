"use client";

import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

type Technology = [string, React.ElementType];

interface BentoCardProps extends ComponentPropsWithoutRef<"a"> {
  name: string;
  className: string;
  background: string;
  hoverBackground?: string;
  Icon: React.ElementType;
  description: string;
  href: string;
  technologies?: Technology[];
  magicCardMode?: "gradient" | "orb";
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full max-w-full auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  hoverBackground,
  Icon,
  description,
  href,
  technologies,
  magicCardMode = "gradient",
  ...props
}: BentoCardProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "group relative col-span-3 flex cursor-pointer flex-col overflow-hidden rounded-xl",
      "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "dark:transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <MagicCard className="flex h-full flex-col rounded-xl" mode={magicCardMode}>
      {/* Image — grows to fill available space */}
      <div className="relative min-h-65 w-full flex-1 overflow-hidden rounded-t-xl">
        <Image
          src={background}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-90 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          unoptimized={process.env.NODE_ENV === "development"}
        />
        {hoverBackground && (
          <Image
            src={hoverBackground}
            alt={`${name} hover`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-90"
          />
        )}
      </div>

      {/* Content pinned to bottom */}
      <div className="flex shrink-0 flex-col gap-2 p-5">
        <Icon className="h-8 w-8 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 dark:text-neutral-300" />
        <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">{name}</h3>
        <p className="text-sm leading-relaxed text-neutral-400">{description}</p>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {technologies.map(([tech, TechIcon]) => (
              <span
                key={tech}
                className="text-muted-foreground border-border flex items-center gap-1 rounded-md border px-2 py-1 text-xs"
              >
                <TechIcon className="h-3 w-3" />
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </MagicCard>
  </a>
);

export { BentoCard, BentoGrid, type Technology };
