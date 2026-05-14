"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import Image from "next/image";
import { Search, SlidersHorizontal, X } from "lucide-react";
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
  { id: 7, name: "Moso Bench", category: "Storage", price: "$580.00", image: "/collection-2.png" },
  { id: 8, name: "Oura Chair", category: "Seating", price: "$890.00", image: "/collection-main.png" },
  { id: 9, name: "Cava Lounge", category: "Seating", price: "$210.00", image: "/product-1.png" },
  { id: 10, name: "Riva Stool", category: "Seating", price: "$222.00", image: "/product-2.png" },
  { id: 11, name: "Sabbia Armchair", category: "Seating", price: "$333.00", image: "/product-3.png" },
  { id: 12, name: "Dune Table", category: "Tables", price: "$1,100.00", image: "/product-4.png" },
  { id: 13, name: "Kast Cabinet", category: "Storage", price: "$2,800.00", image: "/collection-3.png" },
  { id: 14, name: "Lyska Pendant", category: "Lighting", price: "$450.00", image: "/collection-4.png" },
  { id: 15, name: "Veneer Desk", category: "Tables", price: "$1,600.00", image: "/hero.png" },
  { id: 16, name: "Soft Seating", category: "Seating", price: "$1,100.00", image: "/collection-1.png" },
  { id: 17, name: "Alto Shelf", category: "Storage", price: "$920.00", image: "/product-1.png" },
  { id: 18, name: "Glow Lamp", category: "Lighting", price: "$290.00", image: "/product-2.png" },
  { id: 19, name: "Porta Sideboard", category: "Storage", price: "$1,450.00", image: "/product-3.png" },
  { id: 20, name: "Rami Chair", category: "Seating", price: "$670.00", image: "/product-4.png" },
];

const categories = ["All", "Seating", "Tables", "Storage", "Lighting"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="relative bg-[#0b0b0b] min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Shop Hero & Search */}
      <section className="pt-56 pb-20 md:pt-64 md:pb-32 px-6">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 border-b border-white/10 pb-20">
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
            
            <div className="flex flex-col gap-10 lg:w-1/3">
               {/* Search Bar */}
               <motion.div 
                 initial={{ opacity: 0, scaleX: 0 }}
                 animate={{ opacity: 1, scaleX: 1 }}
                 transition={{ duration: 1.5, delay: 0.4, ease: EASE }}
                 className="relative group origin-left"
               >
                 <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-primary transition-colors duration-500" size={20} />
                 <input 
                   type="text"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder="SEARCH THE COLLECTION..."
                   className="w-full bg-transparent border-b border-white/10 py-5 pl-10 text-[11px] tracking-[0.4em] font-black text-white focus:outline-none focus:border-primary transition-all duration-700 placeholder:text-zinc-700"
                 />
                 {searchQuery && (
                   <button 
                     onClick={() => setSearchQuery("")}
                     className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                   >
                     <X size={16} />
                   </button>
                 )}
               </motion.div>

               <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.6, ease: EASE }}
              >
                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                  Experience a curated stream of architectural furniture. Every piece is balanced for form, comfort, and emotion.
                </p>
                <div className="flex items-center gap-4 text-white group cursor-pointer w-fit">
                   <SlidersHorizontal size={18} className="text-primary" />
                   <span className="text-[10px] tracking-[0.4em] font-black uppercase">Refine Filters</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="pb-40 px-6 min-h-[600px]">
        <div className="site-container">
          {/* Category Bar */}
          <div className="flex flex-wrap items-center gap-x-16 gap-y-8 mb-24">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.1, ease: EASE }}
                onClick={() => setActiveCategory(cat)}
                className={`text-[13px] md:text-[15px] tracking-[0.5em] font-black uppercase transition-all duration-500 pb-4 border-b-2 ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24 md:gap-x-14 md:gap-y-32">
             <AnimatePresence mode="popLayout">
               {filteredProducts.length > 0 ? (
                 filteredProducts.map((product, i) => (
                   <ShopProductCard key={product.id} product={product} index={i} />
                 ))
               ) : (
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="col-span-full py-40 text-center"
                 >
                    <p className="text-[12px] tracking-[0.8em] text-zinc-500 font-black uppercase">
                      No results matching your selection
                    </p>
                    <button 
                      onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                      className="mt-10 text-primary text-[10px] tracking-widest uppercase font-black border-b border-primary/20 hover:border-primary transition-all pb-2"
                    >
                      Reset All Filters
                    </button>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ShopProductCard({ product, index }: { product: any; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: EASE }}
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
