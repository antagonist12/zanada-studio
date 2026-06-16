import Link from "next/link";
import { styles } from "./Footer.styles";
import { siteConfig } from "@/data/config";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.brand}>{siteConfig.name}</p>
        <p className={styles.sub}>{siteConfig.location} · {siteConfig.description}</p>
      </div>

      <div className={styles.socialWrapper}>
        <Link
          href={siteConfig.social.instagram}
          target="_blank"
          className={styles.socialBtn}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
          </svg>
        </Link>

        <Link
          href={siteConfig.social.tiktok}
          target="_blank"
          className={styles.socialBtn}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}