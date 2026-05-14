"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Share2, Globe, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <footer ref={containerRef} className="bg-[#050505] pt-32 md:pt-40 pb-12 relative overflow-hidden">
      {/* Top Section with Logo and Columns */}
      <div className="site-container relative z-10">
        <div className="mb-32 flex items-center gap-6">
           <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden">
              <Image 
                src="/logo.png" 
                alt="JAK-CABINET Logo" 
                fill 
                className="object-contain"
              />
           </div>
           <h2 className="text-[#8b9d83] text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-none">
              JAK-CABINET<span className="text-[0.6em] align-top ml-1">®</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16 mb-[150px]">
          
          {/* Menu Column */}
          <div className="flex flex-col gap-10">
            <h3 className="text-zinc-500 text-[16px] font-bold tracking-widest uppercase">Menu</h3>
            <ul className="space-y-4">
              <li key="Home">
                <Link href="/" className="text-white text-[20px] md:text-[24px] hover:text-[#8b9d83] transition-colors duration-500 font-bold uppercase tracking-tight">Home</Link>
              </li>
              <li key="Shop">
                <Link href="/shop" className="text-white text-[20px] md:text-[24px] hover:text-[#8b9d83] transition-colors duration-500 font-bold uppercase tracking-tight">Shop</Link>
              </li>
              {["About", "Contact", "404 Page"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-white text-[20px] md:text-[24px] hover:text-[#8b9d83] transition-colors duration-500 font-bold uppercase tracking-tight">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-10">
            <h3 className="text-zinc-500 text-[16px] font-bold tracking-widest uppercase">Legal</h3>
            <ul className="space-y-4">
              {["Privacy Policy", "Cookie Policy", "Terms and Conditions", "Delivery and Return"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white text-[20px] md:text-[24px] hover:text-[#8b9d83] transition-colors duration-500 font-bold uppercase tracking-tight">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-10">
            <h3 className="text-zinc-500 text-[16px] font-bold tracking-widest uppercase">Contact</h3>
            <ul className="space-y-4">
              <li className="text-white text-[20px] md:text-[24px] font-bold uppercase tracking-tight">+97 75 803 6615</li>
            </ul>
          </div>

          {/* Follow us Column */}
          <div className="flex flex-col gap-10 relative">
            <div className="absolute -top-10 left-0">
               <div className="w-4 h-4 bg-[#8b9d83] rounded-full shadow-[0_0_20px_rgba(139,157,131,0.6)]" />
            </div>
            <h3 className="text-zinc-500 text-[16px] font-bold tracking-widest uppercase">Follow us</h3>
            <ul className="space-y-4">
              {["Instagram", "Facebook", "Twitter", "TikTok"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white text-[20px] md:text-[24px] hover:text-[#8b9d83] transition-colors duration-500 font-bold uppercase tracking-tight">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-10">
            <h3 className="text-zinc-500 text-[16px] font-bold tracking-widest uppercase">Newsletter</h3>
            <div className="relative group">
               <input 
                  type="email" 
                  className="w-full bg-transparent border border-white/20 rounded-sm py-4 px-5 text-sm text-white focus:outline-none focus:border-[#8b9d83] transition-colors duration-700"
                  placeholder=" "
               />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-zinc-300 hover:text-white transition-colors duration-500 border border-white/20">
                  <ArrowUpRight size={20} />
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Background Typography */}
      <div className="relative w-full overflow-hidden pointer-events-none pb-20">
        <motion.div 
          style={{ y: bgY }}
          className="flex justify-center"
        >
          <span className="text-[25vw] font-display font-black leading-none tracking-tighter select-none uppercase bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-transparent">
            CABINET
          </span>
        </motion.div>
      </div>

      {/* Bottom Rights Bar */}
      <div className="site-container border-t border-white/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <p className="text-zinc-400 text-[12px] uppercase tracking-widest font-medium">
           © {currentYear} JAK-CABINET. ALL RIGHTS RESERVED.
         </p>
      </div>

    </footer>
  );
}
