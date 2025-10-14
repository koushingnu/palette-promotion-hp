import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "palette promotion | 株式会社palette promotion",
  description:
    "個性豊かに咲く花のように、あなたと架ける虹のように、みんなを笑顔にできますように。NiziIROぱれっとをマネージメントする株式会社palette promotionの公式サイト",
  keywords:
    "palette promotion, NiziIROぱれっと, アイドル, マネージメント, エンターテイメント",
  openGraph: {
    title: "palette promotion | 株式会社palette promotion",
    description:
      "個性豊かに咲く花のように、あなたと架ける虹のように、みんなを笑顔にできますように。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
