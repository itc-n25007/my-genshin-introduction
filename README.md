## 原神紹介サイト

## 使用技術

- Next.js
- TypeScript
- ESLint
- CSS Moducles
- MicroCMS
- GitHub
- Vercel

## サイト全体の機能一覧

①トップページ

- メインビジュアル表示
- 各ページへのリンク設置
  　・キャラクター一覧
  　・世界観・システム
  　・お問い合わせ

②キャラクター一覧ページ

- microCMSからデータ取得
- ３列グリッド表示（PC）
- キャラクター画像表示
- 元素表示
- 説明表示
- トップページへ戻るボタン
- ページネーション（９件ずつ表示）

③世界観・システムページ

- microCMSからデータ取得
- レイアウト整備
- トップページへ戻るボタン

④お問い合わせページ

- Client Component化
- 入力状態管理（状態管理機能）
- 送信完了状態管理
- 送信処理
- バリデーション機能（HTML標準の必須チェック、未入力で送信不可）

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
