import Image from "next/image";
import Link from "next/link";
import { styles } from "./Navbar.styles";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image
          src="/assets/logo_zanada.png"
          alt="Zanada Studio"
          width={40}
          height={40}
          className={styles.logo}
        />
      </Link>

      <div className={styles.linkWrapper}>
        <Link href="#about" className={styles.link}>
          About
        </Link>
        <Link href="#contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </nav>
  );
}