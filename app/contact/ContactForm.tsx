"use client";

import { useState } from "react";
import styles from "./page.module.css";

type Props = {
  thanksMessage: string;
};

export default function CountactForm({ thanksMessage }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      {sent && <p>{JSON.stringify(thanksMessage)}</p>}

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
    </>
  );
}
