export interface NewsItem {
  date: string;
  category: string;
  title: string;
  content: string;
}

export const newsData: NewsItem[] = [
  {
    date: "2026.1.9",
    category: "LIVE",
    title: "浅草花劇場 バントセット単独LIVE開催",
    content: "浅草花劇場にてバントセット単独LIVEを開催します。",
  },
  {
    date: "2025.10.20",
    category: "MEDIA",
    title: "テレビ東京「プレミアMelodiX!」歌唱出演",
    content: "26:50～27:20 テレビ東京「プレミアMelodiX!」に出演します。",
  },
  {
    date: "2025.10.15",
    category: "AUDITION",
    title:
      "palette promotion × ビクターエンタテインメント共同オーディション開催",
    content: "【NEXT IDOL PROJECT2025】の開催が決定しました。",
  },
  {
    date: "2025.10.10",
    category: "RELEASE",
    title: "1st メジャーシングルリリース",
    content:
      "ビクターエンタテインメントより1st メジャーシングルをリリースします。",
  },
  {
    date: "2025.8.12",
    category: "LIVE",
    title: "豊洲PIT 3rdワンマンLIVE開催",
    content: "都内最大級の豊洲PITでのワンマンライブを開催します。",
  },
];
