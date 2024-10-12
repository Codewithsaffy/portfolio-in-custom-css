"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const ref = useRef({} as HTMLDivElement);
  const wordsArray = words.split(" ");

  useEffect(() => {
    // Animate the span elements
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );

    const spanElements = ref.current.querySelectorAll("span");
    if (spanElements.length >= 2) {
      spanElements[spanElements.length - 1].style.color = "#CBACF9"; // Last word
      spanElements[spanElements.length - 2].style.color = "#CBACF9"; // Last word
    }
  }, [scope, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="">
        <div
          ref={ref}
          className={`dark:text-white text-black text-5xl leading-snug tracking-wide ${className}`}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
