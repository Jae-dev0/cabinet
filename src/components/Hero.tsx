"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-background overflow-hidden">
      {/* Immersive Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.7] grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
      </div>

      <div className="site-container relative z-10 min-h-screen flex items-center pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 w-full">
          <div className="flex flex-col gap-10">
            <h1 className="text-[clamp(3rem,9vw,8rem)] font-display font-black leading-[0.82] tracking-tighter text-white uppercase">
              where <br />
              quality <br />
              meets <br />
              affordability.
            </h1>
            <div className="mt-[5%] flex flex-col gap-10">
              <p className="text-white/70 text-xl md:text-2xl font-light leading-relaxed max-w-xl">
                We create contemporary seating collections for modern living.
              </p>
              <div className="flex items-center gap-6">
                <button className="w-14 h-14 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <ArrowUpRight size={22} />
                </button>
                <span className="text-[11px] tracking-[0.5em] uppercase font-bold text-white/70">
                  Discover Collection
                </span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute right-[12%] top-[35%] pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="w-3 h-3 bg-[#a3b18a] rounded-full shadow-[0_0_20px_rgba(163,177,138,0.5)]"
              />
            </div>
            <div className="absolute right-[22%] top-[48%] pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="w-6 h-6 bg-white rounded-full border-[6px] border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
