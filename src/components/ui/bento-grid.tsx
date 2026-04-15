"use client"

import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { MagicCard } from "@/components/ui/magic-card"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

type Technology = [string, React.ElementType]

interface BentoCardProps extends ComponentPropsWithoutRef<"a"> {
  name: string
  className: string
  background: string
  hoverBackground?: string
  Icon: React.ElementType
  description: string
  href: string
  technologies?: Technology[]
  magicCardMode?: "gradient" | "orb"
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn("grid w-full grid-cols-3 gap-4 auto-rows-auto", className)}
      {...props}
    >
      {children}
    </div>
  )
}

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
      "group relative col-span-3 flex flex-col overflow-hidden rounded-xl cursor-pointer",
      "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "dark:transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <MagicCard
      className="flex flex-col h-full rounded-xl"
      mode={magicCardMode}
    >
      {/* Image — grows to fill available space */}
      <div className="relative w-full flex-1 min-h-65 overflow-hidden rounded-t-xl">
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
      <div className="flex flex-col shrink-0 p-5 gap-2">
        <Icon className="h-8 w-8 text-neutral-700 dark:text-neutral-300 transition-all duration-300 ease-in-out group-hover:scale-75 origin-left" />
        <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed">
          {description}
        </p>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {technologies.map(([tech, TechIcon]) => (
              <span
                key={tech}
                className="flex items-center gap-1 text-xs text-muted-foreground border border-border rounded-md px-2 py-1"
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
)

export { BentoCard, BentoGrid, type Technology }