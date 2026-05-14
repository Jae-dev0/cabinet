"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as any;

const featuredProducts = [
  { id: 1, name: "Vetta Chair", price: "Starts at $800.00", image: "/product-1.png" },
  { id: 2, name: "Arco Lounge", price: "$988.00", image: "/product-2.png" },
  { id: 3, name: "Sera Stool", price: "$410.00", image: "/product-3.png" },
];

const allProducts = [
  { id: 4, name: "Lume Chair", price: "$332.00", image: "/product-4.png" },
  { id: 5, name: "Cava Lounge", price: "$210.00", image: "/product-1.png" },
  { id: 6, name: "Riva Stool", price: "$222.00", image: "/product-2.png" },
  { id: 7, name: "Sabbia Armchair", price: "$333.00", image: "/product-3.png" },
  { id: 8, name: "Nord Table", price: "$1,200.00", image: "/hero.png" },
  { id: 9, name: "Fjord Sofa", price: "$2,450.00", image: "/collection-1.png" },
  { id: 10, name: "Moso Bench", price: "$580.00", image: "/collection-2.png" },
  { id: 11, name: "Oura Chair", price: "$890.00", image: "/collection-main.png" },
];

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);

  // Horizontal parallax transforms
  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity: sectionOpacity, scale: sectionScale }}
      className="py-32 md:py-48 relative bg-[#0a0a0a] overflow-hidden w-full border-t border-white/5"
    >
      <div className="site-container relative z-10">
        {/* Row 1: Header & Featured Split */}
        <motion.div 
          style={{ x: xLeft }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 md:mb-32"
        >
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: EASE }}
            className="flex flex-col justify-between lg:col-span-4"
          >
            <div>
              <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-display font-black leading-[0.8] tracking-tighter text-white mb-8 uppercase">
                Pieces that <br /> speak softly.
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-sm mb-10">
                Explore a curated selection of modern Italian furniture — designed to balance form, comfort, and emotion.
              </p>
              <Link href="/shop" className="group flex items-center gap-6 text-[11px] tracking-[0.5em] font-black text-white border-b border-white/10 pb-4 w-fit hover:border-white transition-all duration-700 uppercase">
                Discover the Goodies
                <ArrowUpRight size={18} className="transition-transform duration-700 group-hover:rotate-45" />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14 lg:col-span-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </motion.div>

        {/* Row 2 & 3: Editorial Grid with alternating parallax */}
        <div className="flex flex-col gap-16 md:gap-20">
          <motion.div 
            style={{ x: xRight }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-14"
          >
            {allProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

          <motion.div 
            style={{ x: xLeft }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-14"
          >
            {allProducts.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="flex justify-start"
        >
             <Link href="/shop" className="group flex items-center gap-8 text-[12px] tracking-[0.6em] font-black text-zinc-300 hover:text-white transition-all duration-700 uppercase border border-white/20 px-12 py-5 rounded-full hover:border-white/40">
                View All Catalog
            </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [120, 0, 0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group relative"
    >
      {/* Parent set to 'relative' to satisfy next/image fill */}
      <div className="relative aspect-[4/5.5] overflow-hidden bg-zinc-950 rounded-sm mb-8 shadow-2xl border border-white/15 group-hover:border-white/30 transition-colors duration-700">
        <motion.div style={{ scale: imgScale }} className="w-full h-full relative">
           <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-opacity duration-1000 group-hover:opacity-80 grayscale-[0.2] group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
      <div className="flex justify-between items-start pr-2 gap-6">
        <div className="flex flex-col gap-3">
          <h4 className="text-3xl md:text-4xl font-display font-black text-white group-hover:text-primary transition-colors duration-700 uppercase leading-none">
            {product.name}
          </h4>
          <div className="flex items-center gap-4">
             <div className="w-10 h-[1px] bg-white/30 group-hover:bg-primary transition-colors duration-700" />
             <p className="text-zinc-300 text-[12px] tracking-[0.25em] uppercase font-black">
               {product.price}
             </p>
          </div>
        </div>
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-zinc-300 group-hover:border-white group-hover:text-white transition-all duration-700 group-hover:rotate-45">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </motion.div>
  );
}
