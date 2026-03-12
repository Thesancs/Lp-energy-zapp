"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const TimelineContent = ({
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  as = "div",
}: any) => {
  const localRef = useRef(null);
  const isInView = useInView(localRef, { once: true, margin: "-40px" });
  const MotionComponent: any = motion[as as keyof typeof motion] || motion.div;

  return (
    <MotionComponent
      ref={localRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
      custom={animationNum}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
