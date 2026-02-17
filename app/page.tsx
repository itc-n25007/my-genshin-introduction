import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* ヒーロー */}
      <div className={styles.hero}>
        <Image
          src="/genshin1.jpg"
          alt=""
          fill
          className={styles.heroImage}
          priority
        />
        <h1 className={styles.title}>原神</h1>
        <p className={styles.subtitle}>
          幻想世界「テイワット」を舞台にした オープンワールドRPG
        </p>
      </div>

      {/* コンテンツ案内 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>コンテンツ</h2>

        <div className={styles.cardGrid}>
          <Link href="/characters" className={styles.card}>
            <h3>キャラクター一覧</h3>
            <p>登場キャラクターを紹介</p>
          </Link>

          <Link href="/world" className={styles.card}>
            <h3>世界観・システム</h3>
            <p>テイワットと元素反応について</p>
          </Link>

          <Link href="/contact" className={styles.card}>
            <h3>お問い合わせ</h3>
            <p>気になることございましたら、遠慮なくお問い合わせください。</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
