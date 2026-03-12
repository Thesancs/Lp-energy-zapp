"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  highlightWords = []
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  highlightWords?: string[];
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-100px" });
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.1),
        }
      );
    }
  }, [isInView, scope, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isHighlighted = highlightWords.some(hw => hw.toLowerCase() === word.replace(/[.,]/g, '').toLowerCase() || highlightWords.includes(word));
          return (
            <motion.span
              key={word + idx}
              className={cn(
                "opacity-0 transition-colors duration-500",
                isHighlighted 
                  ? "text-[#00FFA3] drop-shadow-[0_0_8px_rgba(0,255,163,0.8)] font-medium" 
                  : "text-white"
              )}
              style={{
                filter: filter ? "blur(10px)" : "none",
                display: "inline-block",
                marginRight: "0.25em"
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-medium", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
