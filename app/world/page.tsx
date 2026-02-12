import { client } from "../_libs/microcms";
import { getWorldList } from "@/app/_libs/world";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { ImageResponse } from "next/server";

export default async function WorldPage() {
  const worldList = await getWorldList();
  const data = await client.get({
    endpoint: "world",
  });

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>世界観・システム</h1>

      <ul className={styles.list}>
        {worldList.map((item) => (
          <li key={item.id} className={styles.section}>
            <h2>{item.title}</h2>

            {item.description && (
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              />
            )}

            {item.image && (
              <Image
                src={item.image.url}
                alt={item.title}
                width={800}
                height={450}
                className={styles.image}
              />
            )}
          </li>
        ))}
      </ul>
      <Link href="/" className={styles.backButton}>
        ←　トップページへ
      </Link>
      {/*<div dangerouslySetInnerHTML={{ __html: data.content }} />*/}
    </main>
  );
}
