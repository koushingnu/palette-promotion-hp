import { newsData } from "@/lib/news";

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            NEWS
          </h2>
          <p className="text-lg text-gray-600">最新情報</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{news.date}</span>
                  <span className="px-2 py-1 text-xs font-semibold text-white bg-purple-500 rounded-full">
                    {news.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{news.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
