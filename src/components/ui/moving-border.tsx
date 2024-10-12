"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: string | React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
}) {
  return (
    <Component
      className={cn(
        "relative text-lg md:text-xl h-16 w-40  p-[2px] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105", 
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      {/* Moving border effect */}
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} borderRadius={borderRadius}>
          <div
            className={cn(
              "h-20 w-20 opacity-80 bg-[radial-gradient(circle,var(--sky-500)_40%,transparent_60%)]", // Radial gradient for border animation
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      {/* Inner button content */}
      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased transition-colors duration-300 hover:bg-slate-800/90", // Transition background on hover
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  borderRadius = "1.75rem",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  borderRadius?: string;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          width="100%"
          height="100%"
          rx={borderRadius}
          ry={borderRadius}
          ref={pathRef}
          fill="none"
          stroke="transparent"
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
