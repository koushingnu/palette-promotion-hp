import { newsData } from "@/lib/news";

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            NEWS
          </h2>
          <p className="text-lg text-gray-600">最新情報をお届けします</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {newsData.map((news) => (
              <div
                key={news.id}
                className="border-b border-gray-200 pb-8 last:border-b-0"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                      {news.date}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-black hover:text-gray-600 transition-colors">
                      {news.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 記事投稿機能の案内 */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-black mb-4">
              記事投稿機能
            </h3>
            <p className="text-gray-600 mb-6">
              詳細な記事投稿機能は今後実装予定です。
            </p>
            <div className="text-sm text-gray-500">
              ※ 現在は基本ニュース表示のみ対応
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
