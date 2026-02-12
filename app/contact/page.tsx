"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    {
      /*const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (res.ok) {
      alert("お問い合わせを送信しました");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("送信に失敗しました");
    }
  };*/
    }

    // 今回は送信処理なし（ダミー）
    setSent(true);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className={styles.main}>
      <Link href="/" className={styles.backButton}>
        ←　トップページへ
      </Link>
      <h1 className={styles.title}>お問い合わせ</h1>

      {sent && <p className={styles.success}>送信が完了しました。</p>}

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          お名前
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          メールアドレス
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          お問い合わせ内容
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            required
          />
        </label>

        <button type="submit">送信</button>
      </form>
    </main>
  );
}
