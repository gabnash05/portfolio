"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [starColor, setStarColor] = useState("255,255,255");

  const { theme } = useTheme();

  const starColorRef = useRef(starColor);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    starColorRef.current = starColor;
  }, [starColor]);

  /**
   * Convert ANY CSS color (including OKLCH) → "r,g,b"
   */
  const readStarColor = useCallback(() => {
    const root = document.documentElement;

    const raw = getComputedStyle(root).getPropertyValue("--foreground").trim();

    if (!raw) return;

    // Force browser to resolve OKLCH → RGB
    const temp = document.createElement("div");
    temp.style.color = raw;
    temp.style.position = "absolute";
    temp.style.visibility = "hidden";

    document.body.appendChild(temp);

    const resolved = getComputedStyle(temp).color; // ALWAYS rgb(...)
    document.body.removeChild(temp);

    const formatted = resolved
      .replace(/^rgba?\(|\)$/g, "")
      .split(",")
      .slice(0, 3)
      .join(",");

    setStarColor(formatted);
  }, []);

  /**
   * React to theme changes
   */
  useEffect(() => {
    readStarColor();
  }, [theme, readStarColor]);

  /**
   * Generate stars
   */
  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);

      return Array.from({ length: numStars }, () => {
        const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.05 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        };
      });
    },
    [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]
  );

  /**
   * Resize handling
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateStars = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      setStars(generateStars(width, height));
    };

    updateStars();

    const resizeObserver = new ResizeObserver(updateStars);
    resizeObserver.observe(canvas);

    return () => resizeObserver.disconnect();
  }, [generateStars]);

  /**
   * Animation loop
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(${starColorRef.current}, ${star.opacity})`;
        ctx.fill();

        if (star.twinkleSpeed !== null) {
          star.opacity = 0.5 + Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [stars]);

  return <canvas ref={canvasRef} className={cn("absolute inset-0 h-full w-full", className)} />;
};
