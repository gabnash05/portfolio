"use client";

import { useEffect, useRef, useState, type ComponentType, type RefAttributes } from "react";
import {
  AnimatePresence,
  motion,
  type DOMMotionComponents,
  type HTMLMotionProps,
  type MotionProps,
} from "motion/react";

import { cn } from "@/lib/utils";

type CharacterSet = string[] | readonly string[];

const motionElements = {
  article: motion.article,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  li: motion.li,
  p: motion.p,
  section: motion.section,
  span: motion.span,
  button: motion.button,
} as const;

type MotionElementType = Extract<keyof DOMMotionComponents, keyof typeof motionElements>;
type HyperTextMotionComponent = ComponentType<
  Omit<HTMLMotionProps<"div">, "ref"> & RefAttributes<HTMLElement>
>;

interface ToggleHyperTextProps extends Omit<MotionProps, "children"> {
  /** Primary text to display */
  primaryText: string;
  /** Secondary text to toggle to */
  secondaryText: string;
  /** Optional className for styling */
  className?: string;
  /** Duration of the animation in milliseconds */
  duration?: number;
  /** Component to render as - defaults to button */
  as?: MotionElementType;
  /** Custom character set for scramble effect */
  characterSet?: CharacterSet;
  /** Callback when text toggles */
  onToggle?: (isPrimary: boolean) => void;
}

const DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
) as readonly string[];

const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export function ToggleHyperText({
  primaryText,
  secondaryText,
  className,
  duration = 800,
  as: Component = "button",
  characterSet = DEFAULT_CHARACTER_SET,
  onToggle,
  ...props
}: ToggleHyperTextProps) {
  const MotionComponent = motionElements[Component] as HyperTextMotionComponent;

  const [isPrimary, setIsPrimary] = useState(true);
  const [displayText, setDisplayText] = useState<string[]>(() => primaryText.split(""));
  const [isAnimating, setIsAnimating] = useState(false);
  const iterationCount = useRef(0);
  const currentTargetText = useRef(primaryText);

  const handleClick = () => {
    if (isAnimating) return; // Prevent clicking during animation

    const newTarget = isPrimary ? secondaryText : primaryText;
    currentTargetText.current = newTarget;
    setIsAnimating(true);
    iterationCount.current = 0;
  };

  // Handle scramble animation
  useEffect(() => {
    let animationFrameId: number | null = null;

    if (isAnimating) {
      const targetText = currentTargetText.current;
      const maxIterations = targetText.length;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        iterationCount.current = progress * maxIterations;

        setDisplayText((currentText) =>
          currentText.map((letter, index) => {
            if (letter === " ") return " ";
            if (index <= iterationCount.current) {
              return targetText[index] || letter;
            }
            return characterSet[getRandomInt(characterSet.length)];
          })
        );

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          // Animation complete
          setDisplayText(targetText.split(""));
          setIsAnimating(false);
          setIsPrimary(!isPrimary);
          onToggle?.(!isPrimary);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isAnimating, duration, characterSet, isPrimary, onToggle]);

  // Handle text length changes when primary/secondary text updates
  useEffect(() => {
    if (!isAnimating) {
      const currentText = isPrimary ? primaryText : secondaryText;
      setDisplayText(currentText.split(""));
    }
  }, [primaryText, secondaryText, isPrimary, isAnimating]);

  return (
    <MotionComponent
      onClick={handleClick}
      className={cn(
        "cursor-pointer overflow-hidden py-2 text-4xl font-bold select-none",
        "transition-opacity hover:opacity-80",
        className
      )}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <AnimatePresence mode="wait">
        {displayText.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn("font-heading inline-block", letter === " " ? "w-3" : "")}
          >
            {letter.toUpperCase()}
          </motion.span>
        ))}
      </AnimatePresence>
    </MotionComponent>
  );
}
