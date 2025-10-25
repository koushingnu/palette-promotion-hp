export default function AuditionSection() {
  return (
    <section
      id="audition"
      className="py-20 bg-gradient-to-br from-cyan-50 via-pink-50 to-purple-50 relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-pink-400/10 to-purple-400/10"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
            AUDITION
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            オーディション情報
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-12 border border-white/50">
            <div className="text-center">
              <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
                palette promotion × ビクターエンタテインメント
                <br className="md:hidden" />
                共同オーディション
              </h3>
              <h4 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">
                【NEXT IDOL PROJECT2025】
              </h4>
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                2025年11月15日応募締め切り!!
                <br />
                一緒に夢を追いかけませんか？
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 md:p-6 rounded-xl border border-cyan-200">
                  <h4 className="text-lg md:text-xl font-bold text-cyan-700 mb-4 flex items-center justify-center md:justify-start">
                    <span className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                      1
                    </span>
                    応募条件
                  </h4>
                  <ul className="text-gray-700 space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>年齢：15歳〜25歳</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>歌・ダンス・パフォーマンス能力</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>チームワークを大切にできる方</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>夢に向かって努力できる方</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 md:p-6 rounded-xl border border-pink-200">
                  <h4 className="text-lg md:text-xl font-bold text-pink-700 mb-4 flex items-center justify-center md:justify-start">
                    <span className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                      2
                    </span>
                    応募方法
                  </h4>
                  <ul className="text-gray-700 space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>応募フォームからエントリー</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>書類選考</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>面接・実技審査</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://palette-promotion.com/audition/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  応募する
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
