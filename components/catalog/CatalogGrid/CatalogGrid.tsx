import { products } from "@/data/products";
import ProductCard from "../ProductCard/ProductCard";
import { styles } from "./CatalogGrid.styles";

const WA_NUMBER = "62xxxxxxxxxx"; // ganti dengan nomor WA kamu

export default function CatalogGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>Collection</span>
        <span className={styles.headerCount}>{products.length} pieces</span>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            waNumber={WA_NUMBER}
          />
        ))}
      </div>
    </section>
  );
}