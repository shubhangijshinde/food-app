import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/meals">Meals</Link>
        <Link href="/meals/share">Meals share</Link>
        <Link href="/community">Community</Link>
      </main>
    </div>
  );
}
