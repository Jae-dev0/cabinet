import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CABINET | Ultra-Premium Luxury Furniture",
  description: "Cinematic furniture e-commerce experience inspired by modern Scandinavian design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground font-sans selection:bg-primary selection:text-white">
        <div className="grain-overlay" />
        <div className="architectural-grid pointer-events-none" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

