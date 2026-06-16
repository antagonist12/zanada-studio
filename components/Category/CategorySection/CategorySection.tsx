import { Product } from "@/data/products";
import ProductCarousel from "../../catalog/ProductCarousel/ProductCarousel";
import { siteConfig } from "@/data/config";
import { FadeUp } from "@/components/animations/FadeUp";

export type CategoryProps = {
  title: string;
  subtitle: string;
  bgImage: string;
  bgPosition: "left" | "right";
  items: Product[];
};

export default function CategorySection({ title, subtitle, bgImage, bgPosition, items }: CategoryProps) {
  if (items.length === 0) return null;
  const isContentLeft = bgPosition === "right"; // Background right means content is on the left

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden border-t border-[var(--border)]">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed"
        style={{
          backgroundImage: `url('${bgImage}')`,
          opacity: 0.3,
          backgroundPosition: `${bgPosition} center`,
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-[1400px] mx-auto gap-8">
        {!isContentLeft && <div className="hidden md:block w-1/2" />}

        <div className={`w-full md:w-1/2 flex flex-col justify-center ${!isContentLeft ? "md:items-end md:text-right" : ""}`}>
          <FadeUp delay={0.1}>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-3 tracking-tight">{title}</h2>
            <p className="text-[var(--text-soft)] text-sm tracking-widest uppercase mb-10 font-medium">{subtitle}</p>
          </FadeUp>
          <FadeUp delay={0.3} className={`w-full ${!isContentLeft ? "text-left" : ""}`}>
            <ProductCarousel
              products={items}
              waNumber={siteConfig.contact.whatsapp}
            />
          </FadeUp>
        </div>

        {isContentLeft && <div className="hidden md:block w-1/2" />}
      </div>
    </section>
  );
}
