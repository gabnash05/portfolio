"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { motion } from "motion/react";

interface ProfilePhotoProps {
  className?: string;
  size?: number;
}

const GRID_TRANSFORM = "perspective(500px) rotateY(-6deg)";

export function ProfilePhoto({ className, size = 300 }: ProfilePhotoProps) {
  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size * 1.8, height: size * 1.8 }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      >
        <InteractiveGridPattern
          width={40}
          height={40}
          squares={[20, 20]}
          className="absolute inset-0 h-full w-full origin-center"
          style={{ transform: GRID_TRANSFORM }}
          squaresClassName="stroke-border hover:fill-muted"
        />
      </div>

      <div className="z-5" style={{ width: size, height: size, transform: GRID_TRANSFORM }}>
        <motion.div
          className="border-border relative h-full w-full overflow-hidden rounded-sm shadow-xl"
          whileHover={{
            y: -4,
            x: -2,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
        >
          <Image
            src="/profile.jpg"
            alt="Gab's profile photo"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
