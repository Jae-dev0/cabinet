"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const EASE = [0.22, 1, 0.36, 1] as any;

const products = [
  { id: 1, name: "Vetta Chair", category: "Seating", price: "$800.00", image: "/product-1.png" },
  { id: 2, name: "Arco Lounge", category: "Seating", price: "$988.00", image: "/product-2.png" },
  { id: 3, name: "Sera Stool", category: "Seating", price: "$410.00", image: "/product-3.png" },
  { id: 4, name: "Lume Chair", category: "Seating", price: "$332.00", image: "/product-4.png" },
  { id: 5, name: "Nord Table", category: "Tables", price: "$1,200.00", image: "/hero.png" },
  { id: 6, name: "Fjord Sofa", category: "Seating", price: "$2,450.00", image: "/collection-1.png" },
  { id: 7, name: "Moso Bench", category: "Seating", price: "$580.00", image: "/collection-2.png" },
  { id: 8, name: "Oura Chair", category: "Seating", price: "$890.00", image: "/collection-main.png" },
  { id: 9, name: "Cava Lounge", category: "Seating", price: "$210.00", image: "/product-1.png" },
  { id: 10, name: "Riva Stool", category: "Seating", price: "$222.00", image: "/product-2.png" },
  { id: 11, name: "Sabbia Armchair", category: "Seating", price: "$333.00", image: "/product-3.png" },
  { id: 12, name: "Dune Table", category: "Tables", price: "$1,100.00", image: "/product-4.png" },
];

const categories = ["All", "Seating", "Tables", "Storage", "Lighting"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="relative bg-[#0b0b0b] min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Shop Hero */}
      <section className="pt-56 pb-20 md:pt-64 md:pb-32 px-6">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/10 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: EASE }}
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="w-10 h-[1px] bg-primary" />
                <span className="text-[10px] tracking-[0.5em] font-black text-primary uppercase">Collections 2026</span>
              </div>
              <h1 className="text-[clamp(3rem,10vw,8rem)] font-display font-black leading-[0.8] tracking-tighter text-white uppercase">
                The <br /> Catalog
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: EASE }}
              className="max-w-xs"
            >
              <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed mb-8">
                A definitive collection of architectural furniture, where every piece is a testament to minimalist luxury and timeless form.
              </p>
              <div className="flex items-center gap-4 text-white group cursor-pointer">
                 <SlidersHorizontal size={18} className="text-primary" />
                 <span className="text-[10px] tracking-[0.4em] font-black uppercase">Refine Selection</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="pb-40 px-6">
        <div className="site-container">
          {/* Category Bar */}
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 mb-24">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.1, ease: EASE }}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] tracking-[0.6em] font-black uppercase transition-all duration-500 pb-2 border-b-2 ${
                  activeCategory === cat ? "text-primary border-primary" : "text-zinc-500 border-transparent hover:text-white"
                }`}
              >
                {cat}
              </motion.button>
            ))}
            <div className="ml-auto text-[10px] tracking-widest text-zinc-600 uppercase font-bold">
              Showing {filteredProducts.length} Results
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-14">
             {filteredProducts.map((product, i) => (
               <ShopProductCard key={product.id} product={product} index={i} />
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ShopProductCard({ product, index }: { product: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: (index % 4) * 0.1, ease: EASE }}
      className="group"
    >
      <div className="relative aspect-[4/5.5] overflow-hidden bg-zinc-950 rounded-sm mb-8 shadow-2xl border border-white/10 group-hover:border-white/30 transition-colors duration-700">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
           <button className="bg-white text-black text-[10px] tracking-[0.5em] font-black px-8 py-4 uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 hover:bg-primary hover:text-white">
             Add to Bag
           </button>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-2xl font-display font-black text-white group-hover:text-primary transition-colors duration-700 uppercase leading-none mb-3">
            {product.name}
          </h4>
          <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase font-black">
            {product.category}
          </p>
        </div>
        <p className="text-zinc-300 text-[12px] tracking-widest font-black">
          {product.price}
        </p>
      </div>
    </motion.div>
  );
}
