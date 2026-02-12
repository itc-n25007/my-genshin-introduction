import { getCharacters } from "@/app/_libs/character";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

type Props = {
  searchParams: {
    page?: string;
    q?: string;
  };
};

export default async function CharactersPage({ searchParams }: Props) {
  const page = Number(searchParams.page ?? "1");
  const query = searchParams.q ?? "";

  const { characters, totalCount } = await getCharacters(page, query);

  const PER_PAGE = 9;
  const totalPages = Math.ceil(totalCount / PER_PAGE);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>キャラクター一覧</h1>

      {/*　検索フォーム */}
      <form className={styles.searchForm}>
        <input
          type="text"
          name="q"
          placeholder="キャラクター名で検索"
          defaultValue={query}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          検索
        </button>
      </form>

      {/* キャラクター一覧 */}
      <ul className={styles.grid}>
        {characters.map((c) => (
          <li key={c.id} className={styles.card}>
            <h2>
              <Link href={`/characters/${c.id}`}>{c.name}</Link>
            </h2>
            {/* 元素 */}
            <p>元素:{c.element}</p>

            {/* 画像 */}
            {c.image && (
              <Image src={c.image.url} alt={c.name} width={200} height={200} />
            )}

            {/*説明 */}
            <div
              dangerouslySetInnerHTML={{
                __html: c.description,
              }}
            />
          </li>
        ))}
      </ul>

      {/* ページネーション */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i}
            href={`/characters?page=${i + 1}`}
            className={page === i + 1 ? styles.activePage : styles.page}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Link href="/" className={styles.backButton}>
        ←　トップページへ
      </Link>
    </main>
  );
}
