# Palette Promotion 株式会社 公式ホームページ

NiziIROぱれっとをマネージメントする株式会社palette promotionの公式ホームページです。

## 概要

- **フレームワーク**: Next.js 15.5.5
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **ビルド設定**: 静的エクスポート（output: "export"）
- **デプロイ先**: https://palette-promotion.com/（ルートディレクトリ）

## プロジェクト構成

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── NewsSection.tsx
│   ├── ArtistSection.tsx
│   ├── TalentGrid.tsx
│   ├── CompanyInfo.tsx
│   ├── ContactSection.tsx
│   └── AuditionSection.tsx
├── data/
│   └── company.json
└── lib/
    └── news.ts
```

## 開発環境のセットアップ

1. 依存関係のインストール

   ```bash
   npm install
   ```

2. 開発サーバーの起動

   ```bash
   npm run dev
   ```

3. ブラウザで http://localhost:3000 を開く

## ビルドとデプロイ

### 静的サイトのビルド

```bash
npm run build
```

ビルドが完了すると、`out/` フォルダに静的ファイルが生成されます。

### デプロイ手順

1. `out/` フォルダの内容をすべてサーバーのルートディレクトリ（https://palette-promotion.com/）にアップロード

2. アップロード後のファイル構造：
   ```
   / (ルートディレクトリ)
   ├── index.html
   ├── 404.html
   ├── favicon.ico
   ├── _next/
   │   └── static/
   └── images/
   ```

## 主要機能

- **レスポンシブデザイン**: モバイルファーストでタブレット・デスクトップ対応
- **SEO最適化**: メタデータとOpen Graph設定
- **アクセシビリティ対応**: 適切なHTMLセマンティクスとARIA属性
- **パフォーマンス最適化**: 静的エクスポートと画像最適化

## コンテンツ

### セクション構成

1. **HOME**: 会社ロゴ、ヒーロー画像、公式SNSリンク
2. **NEWS**: 最新情報（記事投稿機能付き）
3. **アーティスト**: NiziIROぱれっとの紹介
4. **タレント**: メンバー紹介
5. **会社情報**: 会社概要と事業内容
6. **CONTACT**: お問い合わせ情報
7. **オーディション**: NEXT IDOL PROJECT 2025

### 公式SNS

- X: https://x.com/Nizi_Pale_info
- Instagram: https://www.instagram.com/nizi_pale_info/
- TikTok: https://www.tiktok.com/@nizi_pale_official
- YouTube: https://www.youtube.com/@niziiro7203

## 技術仕様

### Next.js設定

- 静的エクスポート（output: "export"）
- 画像最適化無効（unoptimized: true）
- トレーリングスラッシュ有効
- チャンクエラー防止設定

### 依存関係

- Next.js 15.5.5
- React 19.1.0
- TypeScript 5
- Tailwind CSS 4
- React Icons 5.5.0
- Sharp 0.34.4

## 注意事項

- 画像ファイルは `public/images/` フォルダに配置
- 会社情報の更新は `src/data/company.json` を編集
- ニュース情報の更新は `src/lib/news.ts` を編集
- デプロイ時は `.htaccess` ファイルは不要（ルートデプロイのため）

## ライセンス

© 2024 株式会社palette promotion. All rights reserved.
