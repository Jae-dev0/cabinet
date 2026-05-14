"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as any;

export default function Statement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xPos = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.05, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative h-[150vh] flex items-center justify-center bg-surface-alt px-6 overflow-hidden">
      <div className="max-w-[1900px] mx-auto w-full relative z-10 xl:pl-[20%] xl:pr-[12%]">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: EASE }}
          className="flex flex-col md:items-start items-center gap-16 md:gap-24"
        >
          <h2 className="text-[clamp(3.5rem,12vw,12rem)] font-display font-black leading-[0.75] tracking-tighter text-white relative uppercase">
            <motion.span style={{ x: xPos }} className="block overflow-hidden pb-4">
               We design
            </motion.span>
            <span className="block text-primary md:ml-[15%] overflow-hidden pb-4">
               spaces that
            </span>
            <span className="block md:ml-[30%] overflow-hidden pb-4">
               breathe<span className="text-white">.</span>
            </span>
            
            {/* Massive Floating Architectural Dot */}
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1], 
                opacity: [0.4, 1, 0.4],
                x: [0, 100, 0],
                y: [0, -50, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 right-10 w-12 h-12 bg-white rounded-full shadow-[0_0_120px_rgba(255,255,255,1)] hidden lg:block"
            />
          </h2>
          
        </motion.div>
      </div>

      {/* Decorative Parallax Text in background */}
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
      >
        <span className="text-[30vw] font-display font-black text-white tracking-tighter leading-none select-none">
          BREATHE
        </span>
      </motion.div>

      {/* Cinematic Grid Overlays */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-12 gap-0 opacity-[0.03]">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-white h-full" />
        ))}
      </div>
    </section>
  );
}
