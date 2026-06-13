"use client";

import Image from "next/image";
import { Product } from "@/data/products";
import { styles } from "./ProductCard.styles";
import Link from "next/link";

type Props = {
  product: Product;
  waNumber: string;
  designStyle?: "magazine" | "pastel";
};

export default function ProductCard({ product, waNumber, designStyle = "pastel" }: Props) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(product.price);

  const waMessage = encodeURIComponent(
    `Halo Zanada Studio, saya tertarik dengan ${product.name} (${formattedPrice}). Apakah masih tersedia?`
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  const variantStyles = styles[designStyle];

  return (
    <div className={`${styles.base.card} ${variantStyles.card}`}>

      <div className={`${styles.base.imageWrapper} ${variantStyles.imageWrapper}`}>
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={styles.base.image}
          />
        )}

        <div className={`${styles.base.overlay} ${variantStyles.overlay}`}>
          <p className={`${styles.base.overlayName} ${variantStyles.overlayName}`}>{product.name}</p>
          <div className={`${styles.base.overlayDivider} ${variantStyles.overlayDivider}`} />
          <p className={`${styles.base.overlayPrice} ${variantStyles.overlayPrice}`}>{formattedPrice}</p>

          <div className={styles.base.overlayActions}>
            <Link
              href={`/product/${product.id}`}
              className={`${styles.base.overlayBtnDetail} ${variantStyles.overlayBtnDetail}`}
            >
              Detail
            </Link>

            <a href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.base.overlayBtnWa} ${variantStyles.overlayBtnWa}`}
            >
              Order via WA
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.base.info} ${variantStyles.info || ""}`}>
        <p className={`${styles.base.infoName} ${variantStyles.infoName}`}>{product.name}</p>
        <p className={`${styles.base.infoPrice} ${variantStyles.infoPrice}`}>{formattedPrice}</p>
      </div>

    </div>
  );
}