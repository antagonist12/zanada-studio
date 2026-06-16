import Image from "next/image";
import Link from "next/link";
import { styles } from "./Navbar.styles";
import { siteConfig } from "@/data/config";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoWrapper}>
        <Image
          src="/assets/logo_zanada.png"
          alt={siteConfig.name}
          width={32}
          height={32}
          className={styles.logo}
        />
        <span className={styles.brandName}>{siteConfig.name}</span>
      </Link>

      <div className={styles.linkWrapper}>
        <Link href="#collection" className={styles.link}>
          Collection
        </Link>
        <Link href={siteConfig.social.instagram} target="_blank" className={styles.link}>
          Instagram
        </Link>
      </div>
    </nav>
  );
}