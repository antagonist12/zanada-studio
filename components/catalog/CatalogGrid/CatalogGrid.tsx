import { products } from "@/data/products";
import ProductCard from "../ProductCard/ProductCard";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import { styles } from "./CatalogGrid.styles";

const WA_NUMBER = "62xxxxxxxxxx"; // ganti dengan nomor WA kamu

export default function CatalogGrid() {
  const magazineProducts = products.slice(0, 2);
  const pastelProducts = products.slice(2, 4);

  return (
    <div className="w-full">
      {/* Header that respects container padding */}
      {/* <div className="px-4 md:px-8 pt-12 pb-8 w-full max-w-[1400px] mx-auto">
        <div className={styles.header}>
          <span className={styles.headerTitle}>Collection</span>
          <span className={styles.headerCount}>{products.length} pieces</span>
        </div>
      </div> */}

      {/* Full-width Parallax Sections */}
      <div className="flex flex-col w-full">
        {/* Category 1: 90s Travel Magazine (Parallax Background, Cards on Left) */}
        <section className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden border-t border-[var(--border)]">
          {/* Parallax Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/assets/tshirt/paralax_90s.png')",
              opacity: 0.3,
              backgroundSize: "cover",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row w-full max-w-[1400px] mx-auto gap-8">
            <div className="w-full md:w-1/2 flex flex-col">
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-3 tracking-tight">90s Travel Magazine</h2>
              <p className="text-[var(--text-soft)] text-sm tracking-widest uppercase mb-10 font-medium">Vintage Aesthetics & Timeless Journeys</p>
              <div className="w-full">
                <ProductCarousel
                  products={magazineProducts}
                  waNumber={WA_NUMBER}
                  designStyle="pastel"
                />
              </div>
            </div>
            {/* Empty right half to show off the parallax background */}
            <div className="hidden md:block w-1/2" />
          </div>
        </section>

        {/* Category 2: Soft Pastel (Parallax Background, Cards on Right) */}
        <section className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden border-t border-[var(--border)]">
          {/* Parallax Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/assets/tshirt/paralax_pastel.png')",
              opacity: 0.3,
              backgroundSize: "cover",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row w-full max-w-[1400px] mx-auto gap-8">
            {/* Empty left half to show off the parallax background */}
            <div className="hidden md:block w-1/2" />
            <div className="w-full md:w-1/2 flex flex-col md:items-end md:text-right">
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-3 tracking-tight">Soft Pastel</h2>
              <p className="text-[var(--text-soft)] text-sm tracking-widest uppercase mb-10 font-medium">Dreamy Hues & Delicate Touches</p>
              <div className="w-full text-left">
                <ProductCarousel
                  products={pastelProducts}
                  waNumber={WA_NUMBER}
                  designStyle="pastel"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}