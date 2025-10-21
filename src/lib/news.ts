export interface NewsItem {
  date: string;
  category: string;
  title: string;
  content: string;
}

export const newsData: NewsItem[] = [
  {
    date: "2024.12.15",
    category: "NEWS",
    title: "NiziIROぱれっと 新曲リリース決定",
    content: "2025年1月に新曲「虹の架け橋」をリリース予定です。",
  },
  {
    date: "2024.12.10",
    category: "LIVE",
    title: "2025年春ツアー開催決定",
    content:
      "全国5都市での春ツアー「Spring Palette Tour 2025」の開催が決定しました。",
  },
  {
    date: "2024.12.05",
    category: "MEDIA",
    title: "音楽雑誌「音楽の友」に掲載",
    content: "12月号にてNiziIROぱれっとの特集記事が掲載されました。",
  },
  {
    date: "2024.11.28",
    category: "EVENT",
    title: "クリスマスイベント開催",
    content: "12月24日に渋谷でクリスマス特別イベントを開催します。",
  },
  {
    date: "2024.11.20",
    category: "COLLABORATION",
    title: "アーティストとのコラボ決定",
    content: "人気アーティストとのコラボレーション楽曲が完成しました。",
  },
  {
    date: "2024.11.15",
    category: "AWARD",
    title: "音楽賞受賞",
    content: "今年度の新人アーティスト賞を受賞いたしました。",
  },
];
