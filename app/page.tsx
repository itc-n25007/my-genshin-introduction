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
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
