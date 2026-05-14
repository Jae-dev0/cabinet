"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Menu } from "lucide-react";
import Magnetic from "./Magnetic";

const menuItems = [
  { name: "SHOP", href: "/shop" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      {/* Ticker / Announcement Bar */}
      <div className="bg-black/40 backdrop-blur-md border-b border-white/5 py-2 overflow-hidden w-full relative marquee">
        <div className="marquee__inner">
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex whitespace-nowrap gap-10">
              {[...Array(10)].map((_, i) => (
                <span key={`${groupIndex}-${i}`} className="text-[10px] tracking-widest text-zinc-300 uppercase">
                  • Get 10% Off out of black friday
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <motion.nav
        className={`w-full transition-all duration-700 py-10 ${
          isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="site-container flex items-center justify-between relative">
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden transition-transform duration-700 group-hover:scale-110">
              <Image 
                src="/logo.png" 
                alt="JAK-CABINET Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-black tracking-tighter text-white">
              JAK-CABINET<span className="text-primary ml-1">®</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-20 absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-[13px] tracking-[0.6em] font-black text-zinc-300 hover:text-white transition-all duration-700 uppercase"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-12">
            <Magnetic>
              <button className="text-white hover:text-primary transition-colors">
                <Search size={22} strokeWidth={2} />
              </button>
            </Magnetic>
            <Magnetic>
              <button className="relative text-white hover:text-primary transition-colors">
                <ShoppingBag size={22} strokeWidth={2} />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full text-[8px] font-bold text-white flex items-center justify-center border border-black shadow-[0_0_10px_rgba(0,0,0,0.5)]">0</span>
              </button>
            </Magnetic>
            <button className="text-white hover:text-primary transition-colors">
              <Menu size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
