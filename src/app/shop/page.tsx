"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Search, SlidersHorizontal, X, Minus, Plus, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const EASE = [0.22, 1, 0.36, 1] as any;

const products = [
  { 
    id: 1, 
    name: "Vetta Chair", 
    category: "Seating", 
    price: "$800.00", 
    image: "/product-1.png",
    description: "A masterclass in Italian minimalism. The Vetta Chair combines surgical precision with organic curves to create a seating experience that is as comfortable as it is architectural.",
    specs: ["Material: Solid Oak & Premium Boucle", "Dimensions: 80 x 60 x 65cm", "Finish: Natural Wax"]
  },
  { 
    id: 2, 
    name: "Arco Lounge", 
    category: "Seating", 
    price: "$988.00", 
    image: "/product-2.png",
    description: "Designed for the modern sanctuary, the Arco Lounge features a signature curved backrest that embraces the form. Its low profile adds a sense of grounded luxury to any space.",
    specs: ["Material: Walnut & Full-Grain Leather", "Dimensions: 75 x 85 x 90cm", "Designer: Elena Rossi"]
  },
  { 
    id: 3, 
    name: "Sera Stool", 
    category: "Seating", 
    price: "$410.00", 
    image: "/product-3.png",
    description: "The Sera Stool is a study in verticality and balance. Perfect as a standalone statement or paired with our Nord collection.",
    specs: ["Material: Brushed Steel & Ash", "Dimensions: 45 x 35 x 35cm", "Weight: 6.5kg"]
  },
  { 
    id: 4, 
    name: "Lume Chair", 
    category: "Seating", 
    price: "$332.00", 
    image: "/product-4.png",
    description: "Lightweight and stackable, the Lume Chair doesn't compromise on aesthetic. Its translucent lines catch the light, creating a sense of ethereal presence.",
    specs: ["Material: Recycled Polymer", "Dimensions: 82 x 45 x 48cm", "Colors: Smoke, Clear, Amber"]
  },
  { 
    id: 5, 
    name: "Nord Table", 
    category: "Tables", 
    price: "$1,200.00", 
    image: "/hero.png",
    description: "The centerpiece of the collection. The Nord Table features a massive solid wood top supported by asymmetrical architectural legs.",
    specs: ["Material: Blackened Oak", "Dimensions: 220 x 100 x 75cm", "Capacity: 8 Persons"]
  },
  { 
    id: 6, 
    name: "Fjord Sofa", 
    category: "Seating", 
    price: "$2,450.00", 
    image: "/collection-1.png",
    description: "Inspired by the serenity of Nordic landscapes, the Fjord Sofa offers deep comfort with a modular design that adapts to your living flow.",
    specs: ["Material: Belgian Linen", "Dimensions: 280 x 105 x 68cm", "Modular: 3 Sections"]
  },
  { 
    id: 7, 
    name: "Moso Bench", 
    category: "Storage", 
    price: "$580.00", 
    image: "/collection-2.png",
    description: "A hybrid of seating and storage, the Moso Bench is crafted from sustainable bamboo with hidden compartments for a clutter-free hallway.",
    specs: ["Material: Pressed Bamboo", "Dimensions: 120 x 40 x 45cm", "Storage: 2 Drawers"]
  },
  { 
    id: 8, 
    name: "Oura Chair", 
    category: "Seating", 
    price: "$890.00", 
    image: "/collection-main.png",
    description: "A sculptural masterpiece. The Oura Chair challenges traditional geometry with its continuous loop frame and suspended seat.",
    specs: ["Material: Powder Coated Steel", "Dimensions: 78 x 70 x 72cm", "Finish: Matte Sand"]
  }
];

const categories = ["All", "Seating", "Tables", "Storage", "Lighting"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProduct]);

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
               </motion.div>

               <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, delay: 0.6, ease: EASE }}>
                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">Explore our definitive collection of architectural furniture — where every piece is balanced for form, comfort, and emotion.</p>
                <div className="flex items-center gap-4 text-white group cursor-pointer w-fit">
                   <SlidersHorizontal size={18} className="text-primary" />
                   <span className="text-[10px] tracking-[0.4em] font-black uppercase">Refine Selection</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="pb-40 px-6 min-h-[600px]">
        <div className="site-container">
          <div className="flex flex-wrap items-center gap-x-16 gap-y-8 mb-24">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[13px] md:text-[15px] tracking-[0.5em] font-black uppercase transition-all duration-500 pb-4 border-b-2 ${
                  activeCategory === cat ? "text-primary border-primary" : "text-zinc-500 border-transparent hover:text-white"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24">
             <AnimatePresence mode="popLayout">
               {filteredProducts.map((product, i) => (
                 <ShopProductCard 
                    key={product.id} 
                    product={product} 
                    index={i} 
                    onClick={() => setSelectedProduct(product)}
                 />
               ))}
             </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Redesigned Product Detail Modal (Image Matching) */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

function ShopProductCard({ product, index, onClick }: { product: any; index: number; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/5.5] overflow-hidden bg-zinc-950 rounded-sm mb-8 shadow-2xl border border-white/10 group-hover:border-white/30 transition-colors duration-700">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
           <button className="bg-white text-black text-[10px] tracking-[0.5em] font-black px-8 py-4 uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
             Discover Piece
           </button>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-2xl font-display font-black text-white group-hover:text-primary transition-colors duration-700 uppercase leading-none mb-3">
            {product.name}
          </h4>
          <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase font-black">{product.category}</p>
        </div>
        <p className="text-zinc-300 text-[14px] tracking-widest font-black">{product.price}</p>
      </div>
    </motion.div>
  );
}

function ProductModal({ product, onClose }: { product: any; onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" onClick={onClose} />
      
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative bg-[#0a0a0a] w-full h-full md:h-[90vh] md:max-w-7xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(0,0,0,1)] md:rounded-t-3xl border-t border-white/10"
      >
        <button 
          onClick={onClose}
          className="absolute top-10 right-10 z-[100] text-white hover:text-primary transition-colors bg-black/40 p-4 rounded-full border border-white/10 backdrop-blur-md"
        >
          <X size={28} />
        </button>

        {/* Left: Cinematic Product Visual */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Right: Bold Editorial Content */}
        <div className="w-full md:w-1/2 flex flex-col pt-16 pb-0 px-10 md:px-20 overflow-y-auto custom-scrollbar bg-[#080808]">
           <div className="mb-12">
              <span className="text-zinc-500 text-[11px] tracking-[0.6em] font-black uppercase mb-4 block">
                {product.category} Collection
              </span>
              <h2 className="text-7xl md:text-[110px] font-display font-black text-white tracking-[0.02em] uppercase leading-[0.75] mb-10 break-words">
                {product.name}
              </h2>
              <div className="flex items-baseline gap-10">
                 <p className="text-white text-5xl font-black tracking-tighter">{product.price}</p>
                 <p className="text-zinc-500 text-[11px] tracking-[0.3em] font-black uppercase">
                   In Stock / Ready to Ship
                 </p>
              </div>
           </div>

           <div className="space-y-16 mb-24">
              <div>
                <h3 className="text-[12px] tracking-[0.6em] font-black text-white uppercase mb-8 border-b border-white/10 pb-4 w-fit">
                   The Narrative
                </h3>
                <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-lg">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="text-[12px] tracking-[0.6em] font-black text-white uppercase mb-8 border-b border-white/10 pb-4 w-fit">
                   Specifications
                </h3>
                <ul className="space-y-6">
                   {product.specs.map((spec: string) => (
                     <li key={spec} className="text-zinc-400 text-sm md:text-base font-medium flex items-center gap-4">
                        <div className="w-2 h-2 bg-primary rounded-full opacity-50 shadow-[0_0_10px_rgba(139,157,131,0.5)]" />
                        {spec}
                     </li>
                   ))}
                </ul>
              </div>
           </div>

           {/* Sticky Purchase Bar (Matching Image) */}
           <div className="mt-auto sticky bottom-0 left-0 w-full bg-[#080808] pt-10 pb-10">
              <div className="flex items-center justify-between mb-10">
                 <div className="flex items-center gap-10">
                    <button className="text-zinc-500 hover:text-white transition-colors"><Minus size={20} /></button>
                    <span className="text-white font-black text-lg">01</span>
                    <button className="text-zinc-500 hover:text-white transition-colors"><Plus size={20} /></button>
                 </div>
                 <p className="text-[11px] tracking-[0.5em] text-zinc-500 uppercase font-black">Free Worldwide Shipping</p>
              </div>

              <button className="w-full bg-white text-black py-8 text-[14px] tracking-[0.8em] font-black uppercase flex items-center justify-center gap-8 group hover:bg-primary hover:text-white transition-all duration-1000">
                Purchase This Piece
                <ShoppingBag size={22} />
              </button>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
