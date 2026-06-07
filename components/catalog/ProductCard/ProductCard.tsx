"use client";

import Image from "next/image";
import { Product } from "@/data/products";
import { styles } from "./ProductCard.styles";
import Link from "next/link";

type Props = {
  product: Product;
  waNumber: string;
};

export default function ProductCard({ product, waNumber }: Props) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(product.price);

  const waMessage = encodeURIComponent(
    `Halo Zanada Studio, saya tertarik dengan ${product.name} (${formattedPrice}). Apakah masih tersedia?`
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <div className={styles.card}>

      <div className={styles.imageWrapper}>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2C2C2A" strokeWidth="1">
              <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
            </svg>
            <span className={styles.imagePlaceholderText}>Photo</span>
          </div>
        )}

        <div className={styles.overlay}>
          <p className={styles.overlayName}>{product.name}</p>
          <div className={styles.overlayDivider} />
          <p className={styles.overlayPrice}>{formattedPrice}</p>

          <div className={styles.overlayActions}>
            <Link
              href={`/product/${product.id}`}
              className={styles.overlayBtnDetail}
            >
              Detail
            </Link>
            
            <a href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.overlayBtnWa}
            >
              Order via WA
            </a>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <p className={styles.infoName}>{product.name}</p>
        <p className={styles.infoPrice}>{formattedPrice}</p>
      </div>

    </div>
  );
}