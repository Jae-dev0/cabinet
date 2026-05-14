"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1];

const feedItems = [
  { id: 1, image: "/hero.png", size: "tall", speed: 0.1 },
  { id: 2, image: "/collection-1.png", size: "short", speed: -0.15 },
  { id: 3, image: "/collection-2.png", size: "medium", speed: 0.05 },
  { id: 4, image: "/collection-main.png", size: "tall", speed: -0.08 },
  { id: 5, image: "/product-1.png", size: "medium", speed: 0.12 },
  { id: 6, image: "/product-2.png", size: "short", speed: -0.05 },
];

export default function Feed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);

  // Horizontal parallax transform
  const xMove = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity: sectionOpacity, scale: sectionScale }}
      className="py-32 md:py-48 bg-[#0a0a0a] overflow-hidden relative w-full border-t border-white/5"
    >
      <div className="site-container relative z-10">
        <motion.div 
          style={{ x: xMove }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: EASE }}
          >
             <div className="mb-8 flex items-center gap-4">
                <div className="w-10 h-[1px] bg-primary" />
                <span className="text-[10px] tracking-[0.5em] font-black text-primary uppercase">Editorial</span>
             </div>
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-display font-black leading-[0.8] tracking-tighter text-white uppercase">
              On the <br /> Feed
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
            className="max-w-md text-right"
          >
            <p className="text-zinc-400 text-[11px] tracking-[0.6em] mb-8 uppercase font-black">
              Storytelling
            </p>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
              Follow our journey — where craftsmanship meets everyday living and architectural grace. A curated stream of moments.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0, 1], [60, -60]) }}
          className="columns-1 md:columns-2 lg:columns-3 gap-12 md:gap-16 space-y-12 md:space-y-16"
        >
          {feedItems.map((item, index) => (
            <ParallaxItem key={item.id} item={item} index={index} />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-16 md:mt-20 flex justify-center"
        >
           <span className="text-[11px] tracking-[0.8em] font-black text-zinc-300 uppercase border-b border-white/30 pb-4 cursor-pointer hover:text-white hover:border-white transition-all duration-700">
             Load More Stories
           </span>
        </motion.div>
      </div>
    </motion.section>
  );
}

function ParallaxItem({ item, index }: { item: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150 * item.speed * 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, delay: (index % 3) * 0.2, ease: EASE }}
      className="relative overflow-hidden group rounded-sm break-inside-avoid shadow-2xl"
    >
      {/* Parent set to 'relative' to satisfy next/image fill */}
      <motion.div 
        style={{ y }}
        className={`relative w-full overflow-hidden ${
          item.size === "tall" ? "aspect-[2/3.5]" : 
          item.size === "medium" ? "aspect-[4/5.5]" : 
          "aspect-square"
        }`}
      >
        <motion.div style={{ scale }} className="w-full h-full relative">
          <Image
            src={item.image}
            alt={`Feed image ${item.id}`}
            fill
            className="object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center gap-6">
           <span className="text-[10px] tracking-[0.5em] font-black text-white uppercase border border-white/20 px-10 py-4 backdrop-blur-3xl transition-transform duration-700 hover:scale-105">
            View Story
           </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
