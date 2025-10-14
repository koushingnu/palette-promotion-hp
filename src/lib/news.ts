export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content?: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    date: "2025.8.12",
    title: "豊洲PIT 3rdワンマンLIVEを開催",
  },
  {
    id: "2",
    date: "2025.10.10",
    title: "ビクターエンタテインメントより1st メジャーシングルをリリース",
  },
  {
    id: "3",
    date: "2025.10.15",
    title:
      "palette promotion × ビクターエンタテインメント共同オーディション【NEXT IDOL PROJECT2025】開催",
  },
  {
    id: "4",
    date: "2026.1.9",
    title: "浅草花劇場 バントセット単独LIVEを開催",
  },
];
