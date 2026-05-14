"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  { id: 1, size: "large", image: "/hero.png" },
  { id: 2, size: "small", image: "/collection-1.png" },
  { id: 3, size: "medium", image: "/collection-2.png" },
  { id: 4, size: "small", image: "/collection-3.png" },
  { id: 5, size: "large", image: "/collection-main.png" },
  { id: 6, size: "medium", image: "/collection-4.png" },
];

export default function MasonryGallery() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 text-center">
          <span className="text-primary text-[10px] tracking-[0.4em] font-bold block mb-4">EDITORIAL FEED</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            Our Living Stories
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group rounded-sm break-inside-avoid"
            >
              <Image
                src={item.image}
                alt={`Gallery image ${item.id}`}
                width={800}
                height={item.size === "large" ? 1200 : item.size === "medium" ? 800 : 600}
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-[10px] tracking-[0.4em] font-bold border border-white px-6 py-2">VIEW STORY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
