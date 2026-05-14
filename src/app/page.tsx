import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import Feed from "@/components/Feed";
import Statement from "@/components/Statement";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-24 md:gap-32">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Collections />
      <ProductShowcase />
      <Testimonials />
      <Feed />
      <Statement />
      <Footer />
    </main>
  );
}



