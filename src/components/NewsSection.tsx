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

        <div className="space-y-6">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="group bg-white hover:bg-gray-50 border-b border-gray-200 transition-colors duration-300"
            >
              <div className="py-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-32">
                    <p className="text-base font-medium text-gray-900">
                      {news.date}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-28">
                    <span className="inline-flex items-center justify-center w-24 px-4 py-1.5 text-xs font-medium tracking-wider text-white bg-black rounded-full">
                      {news.category}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 px-6">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                      {news.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
