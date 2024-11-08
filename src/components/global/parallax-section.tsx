"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
}

export default function ParallaxSection({ children }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div ref={ref} className="relative w-full h-fit -mt-[40svh] duration-200">
      <motion.div style={{ y }} className="relative z-10 h-fit">
        {children}
      </motion.div>
    </div>
  );
}
