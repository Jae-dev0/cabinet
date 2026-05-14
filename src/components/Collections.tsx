"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

const collections = [
  { name: "Milano", description: "Soft geometry for modern spaces." },
  { name: "Terra", description: "Inspired by natural tones." },
  { name: "Luna", description: "Minimal comfort after dark." },
  { name: "Forma", description: "Where structure meets softness." },
];

export default function Collections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);

  // Horizontal parallax transforms
  const xLeft = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const xRight = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="bg-surface-alt py-[500px] px-6 relative overflow-hidden w-full"
    >
      <div className="site-container relative z-10">
        {/* Editorial Split with xLeft parallax */}
        <motion.div 
          style={{ x: xLeft }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-32 md:mb-48"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="mb-8">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                width="44" height="44" viewBox="0 0 60 60" fill="none" className="text-primary"
              >
                <path d="M30 0V60M0 30H60" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="30" cy="30" r="10" stroke="currentColor" strokeWidth="0.8" />
              </motion.svg>
            </div>
            <h2 className="text-[clamp(3rem,9vw,7rem)] font-display font-black leading-[0.78] tracking-tighter text-white uppercase">
              The art of <br /> balance
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-12"
          >
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-xl">
              We believe in furniture that doesn't shout — it whispers through form, balance, and comfort. Every piece is crafted to bring quiet elegance into modern living.
            </p>

            <div className="relative aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-sm group cursor-pointer shadow-2xl border border-white/15">
              <Image
                src="/collection-main.png"
                alt="Process"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-black shadow-2xl transition-transform duration-500 group-hover:scale-110">
                  <Play fill="black" size={28} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Explore Section with xRight parallax */}
        <motion.div 
          style={{ x: xRight }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
        >
          <div className="hidden lg:block lg:col-span-3 pt-6">
            <h3 className="text-[10px] tracking-[0.6em] font-black text-zinc-400 uppercase leading-relaxed mb-6">
              TIMELESS <br /> CURATION
            </h3>
            <div className="w-10 h-[1px] bg-white/20" />
          </div>

          <div className="lg:col-span-9 flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
              <h3 className="text-5xl md:text-6xl font-display font-black tracking-tighter text-white uppercase leading-[0.85]">
                EXPLORE OUR <br /> COLLECTIONS
              </h3>
              <p className="text-zinc-400 text-[12px] font-bold leading-relaxed max-w-[300px] uppercase tracking-[0.35em]">
                CURATED SETS — DESIGNED TO BRING TIMELESS ITALIAN ELEGANCE.
              </p>
            </div>

            <div className="space-y-0 border-t border-white/15">
              {collections.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative py-14 md:py-16 flex items-center justify-between border-b border-white/15 cursor-pointer hover:bg-white/[0.03] hover:px-6 transition-all duration-700"
                >
                  <div className="flex items-center gap-10 z-10">
                    <span className="text-zinc-400 text-xl font-display font-bold group-hover:text-primary transition-colors duration-500">0{index + 1}</span>
                    <h4 className="text-3xl md:text-6xl font-display font-black text-white/80 group-hover:text-white transition-colors duration-700 leading-none uppercase">
                      {item.name}
                    </h4>
                    <p className="text-zinc-400 text-[11px] tracking-[0.3em] font-bold uppercase opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 hidden md:block">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black transition-all duration-700">
                    <ArrowUpRight size={24} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
