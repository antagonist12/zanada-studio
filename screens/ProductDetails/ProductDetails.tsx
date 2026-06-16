"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import { siteConfig } from "@/data/config";
import { Product } from "@/data/products";
import { styles } from "./ProductDetails.styles";

type Props = {
  product: Product;
};

export default function ProductDetails({ product }: Props) {
  // We use the main image and duplicate it to mock a gallery for demonstration.
  // In a real scenario, you would map over product.images array.
  const gallery = product.category === "magazine" ? [
    product.image,
    "/assets/tshirt/egypt_tshirt.png",
    "/assets/tshirt/london_tshirt.png",
  ].filter(Boolean) as string[] : [
    product.image,
    "/assets/tshirt/kyoto-pastel.png",
    "/assets/tshirt/tokyo-pastel.png",
  ].filter(Boolean) as string[];

  const [selectedImage, setSelectedImage] = useState<string>(gallery[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentIndex = gallery.indexOf(selectedImage);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    setSelectedImage(gallery[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % gallery.length;
    setSelectedImage(gallery[nextIndex]);
  };

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(product.price);

  const waMessage = encodeURIComponent(
    `Halo Zanada Studio, saya tertarik dengan ${product.name} (${formattedPrice}). Apakah masih tersedia?`
  );
  const waLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=${waMessage}`;

  return (
    <div className={styles.container}>
      <Link href="/#collection" className={styles.backLink}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Collection
      </Link>

      <div className={styles.gridContainer}>
        {/* Left: Images */}
        <div className={styles.leftColumn}>
          <FadeUp delay={0.1}>
            <div 
              className={styles.mainImageContainer}
              onClick={() => setIsModalOpen(true)}
            >
              {selectedImage ? (
                <>
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    className={styles.mainImage} 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {gallery.length > 1 && (
                    <>
                      <button
                        onClick={handlePrev}
                        className={styles.navButtonLeft}
                        aria-label="Previous image"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                      </button>
                      <button
                        onClick={handleNext}
                        className={styles.navButtonRight}
                        aria-label="Next image"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </button>
                    </>
                  )}
                </>
              ) : (
                <div className={styles.noImage}>
                  No Image
                </div>
              )}
            </div>
          </FadeUp>

          {/* Thumbnails */}
          {gallery.length > 1 && (
            <FadeUp delay={0.2} className={styles.thumbnailContainer}>
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`${styles.thumbnailButtonBase} ${
                    selectedImage === img ? styles.thumbnailActive : styles.thumbnailInactive
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className={styles.thumbnailImage}
                    sizes="96px"
                  />
                </button>
              ))}
            </FadeUp>
          )}
        </div>

        {/* Right: Info */}
        <FadeUp delay={0.3} className={styles.rightColumn}>
          <p className={styles.category}>
            {product.category} Collection
          </p>
          <h1 className={styles.title}>
            {product.name}
          </h1>
          <p className={styles.price}>
            {formattedPrice}
          </p>

          <div className={styles.divider} />

          <p className={styles.description}>
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className={styles.actionContainer}>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waButton}
            >
              Order via WA
            </a>
          </div>

          {/* Extra Details */}
          <div className={styles.detailsContainer}>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Material</span>
              <span className={styles.detailValue}>100% Premium Cotton</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Fit</span>
              <span className={styles.detailValue}>Oversized / Boxy Fit</span>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Fullscreen Image Modal */}
      {isModalOpen && (
        <div 
          className={styles.modalContainer}
          onClick={() => setIsModalOpen(false)}
        >
          <button 
            className={styles.modalCloseBtn}
            onClick={() => setIsModalOpen(false)}
            aria-label="Close modal"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className={styles.modalImageWrapper} onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className={styles.modalImage}
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
