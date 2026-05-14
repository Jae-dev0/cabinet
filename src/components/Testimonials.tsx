"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as any;

const testimonials = [
  {
    name: "Luca Moretti",
    role: "Interior Designer",
    content: "Every detail was perfect — from materials to final finish. True craftsmanship you can feel.",
    avatar: "/avatar-1.png",
  },
  {
    name: "Giulia Rossi",
    role: "Art Director",
    content: "Each piece feels intentional — nothing unnecessary, nothing loud.",
    avatar: "/avatar-2.png",
  },
  {
    name: "Sofia Marino",
    role: "Architect",
    content: "I've ordered several pieces, and each one feels handcrafted with real attention to detail. The textures, packaging, and finish all scream quality.",
    avatar: "/avatar-4.png",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity: sectionOpacity, scale: sectionScale }}
      className="py-32 md:py-44 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden"
    >
      <div className="site-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: EASE }}
          >
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-display font-black leading-[0.8] tracking-tighter text-white uppercase">
              What our <br /> clients say
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
            className="max-w-md text-right"
          >
             <div className="flex justify-end gap-3 mb-10">
                {[1,2,3,4,5].map(i => (
                  <motion.div 
                    key={i} 
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    className="w-2 h-2 bg-primary rounded-full" 
                  />
                ))}
             </div>
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed tracking-tight">
              Voices of those who have invited our quiet elegance into their most personal spaces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: i * 0.2, ease: EASE }}
              className={`flex flex-col h-full group relative ${i % 2 === 1 ? "lg:mt-16" : ""}`}
            >
              <div className="mb-12 flex items-center gap-6">
                <div className="relative w-20 h-20 overflow-hidden rounded-full grayscale group-hover:grayscale-0 transition-all duration-[2s] shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-white/5">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-black text-white tracking-tighter uppercase leading-none">{t.name}</h4>
                  <p className="text-zinc-400 text-[11px] tracking-[0.5em] uppercase font-black mt-2 leading-none">{t.role}</p>
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-zinc-300 text-2xl md:text-3xl font-light leading-snug mb-10 italic tracking-tight opacity-90 group-hover:opacity-100 transition-opacity duration-1000">
                  &quot;{t.content}&quot;
                </p>
              </div>

              <div className="w-24 h-[1px] bg-white/5 group-hover:bg-primary transition-all duration-[2s] group-hover:w-full" />
              
              {/* Subtle architectural vertical line */}
              <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-white/[0.03] hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Parallax Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="h-full w-full opacity-[0.02]" 
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>
    </motion.section>
  );
}
