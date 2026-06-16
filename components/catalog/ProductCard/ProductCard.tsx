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
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={styles.image}
          />
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