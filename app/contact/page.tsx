import { getContact } from "@/app/_libs/contact";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";
import Link from "next/link";

export default async function ContactPage() {
  const data = await getContact();

  return (
    <main className={styles.main}>
      <Link href="/" className={styles.backButton}>
        ← トップページへ
      </Link>

      <h1 className={styles.title}>{data.title}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: data.description ?? "",
        }}
      />

      <ContactForm thanksMessage={data.thanksMessage} />
    </main>
  );
}
