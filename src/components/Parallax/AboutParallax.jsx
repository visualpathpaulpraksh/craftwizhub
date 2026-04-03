"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutParallax() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "70%"]);

  return (
    <div ref={containerRef} className="w-full flex justify-end relative">
      {/* Parallax Text */}
      <motion.div
        style={{ y: textY }}
        className="w-full h-full px-4 lg:px-16 absolute z-[3] mix-blend-difference flex"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[16.5vw] lg:font-extralight text-neutral-200 tracking-tighter leading-tight lg:leading-0">
          CraftWizHub
        </h2>
      </motion.div>

      {/* Decorative panel replacing image */}
      <div className="w-[50%] relative aspect-[6/4] overflow-hidden z-[1] bg-neutral-900 flex flex-col justify-between p-8 border-l border-neutral-800">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-sky-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">CW</span>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
            Building digital experiences that drive real business growth — from web development to AI automation.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-neutral-800/60 rounded-lg p-4 border border-neutral-700">
            <p className="text-2xl font-bold text-white">50+</p>
            <p className="text-neutral-400 text-xs mt-1">Projects Delivered</p>
          </div>
          <div className="bg-neutral-800/60 rounded-lg p-4 border border-neutral-700">
            <p className="text-2xl font-bold text-white">30+</p>
            <p className="text-neutral-400 text-xs mt-1">Happy Clients</p>
          </div>
          <div className="bg-neutral-800/60 rounded-lg p-4 border border-neutral-700">
            <p className="text-2xl font-bold text-white">5+</p>
            <p className="text-neutral-400 text-xs mt-1">Years Experience</p>
          </div>
          <div className="bg-neutral-800/60 rounded-lg p-4 border border-neutral-700">
            <p className="text-2xl font-bold text-white">12+</p>
            <p className="text-neutral-400 text-xs mt-1">Global Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
}
