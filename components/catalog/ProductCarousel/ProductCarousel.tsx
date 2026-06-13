"use client";

import { useState, useEffect } from "react";
import { Product } from "@/data/products";
import ProductCard from "../ProductCard/ProductCard";

type Props = {
  products: Product[];
  waNumber: string;
  designStyle?: "magazine" | "pastel";
  interval?: number;
};

export default function ProductCarousel({ products, waNumber, designStyle = "pastel", interval = 5000 }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    if (products.length <= 1 || isHovered) return;
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [products.length, interval, isHovered]);

  if (!products.length) return null;

  return (
    <div 
      className="relative w-full pb-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`transition-all duration-1000 ease-in-out ${index === currentIndex
              ? "opacity-100 translate-y-0 relative z-10"
              : "opacity-0 translate-y-4 absolute inset-0 z-0 pointer-events-none"
              }`}
          >
            <ProductCard
              product={product}
              waNumber={waNumber}
              designStyle={designStyle}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-[50%] left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-white backdrop-blur-sm transition-colors z-20"
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute top-[50%] right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-white backdrop-blur-sm transition-colors z-20"
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 z-20">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? "bg-[#d8cbe3] w-8" : "bg-[#d8cbe3]/30 w-3 hover:bg-[#d8cbe3]/60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
