import Image from "next/image";
import companyData from "@/data/company.json";

export default function ArtistSection() {
  const { artist } = companyData;

  return (
    <section id="artist" className="py-20 relative">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/backgrounds/bg2.jpg"
          alt="背景"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gray-50 z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            ARTIST
          </h2>
          <p className="text-lg text-gray-600">NiziIROぱれっと</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex md:items-stretch">
              {/* アーティスト画像エリア */}
              <div className="md:w-3/5">
                <div className="relative h-80 md:h-full">
                  <img
                    src="/artist/allmember_1920.jpg"
                    alt="NiziIROぱれっと アーティスト写真"
                    className="w-full h-full object-contain object-center"
                  />
                </div>
              </div>

              {/* アーティスト情報 */}
              <div className="md:w-2/5 p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* コンセプト */}
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">
                      コンセプト
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {artist.concept}
                    </p>
                  </div>

                  {/* デビュー情報 */}
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">
                      デビュー
                    </h4>
                    <p className="text-gray-700">{artist.debut}</p>
                  </div>

                  {/* 主な実績 */}
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">
                      主な実績
                    </h4>
                    <ul className="space-y-2">
                      {artist.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="text-gray-700 flex items-start"
                        >
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 公式SNS */}
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">
                      公式SNS
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={artist.sns.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        X
                      </a>
                      <a
                        href={artist.sns.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-pink-500 hover:text-pink-600 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281H13.12v1.566h2.159v9.281h-2.159v1.566h5.389V8.707zm-3.323 5.389c0 1.297-.49 2.448-1.418 3.323-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323z" />
                        </svg>
                        Instagram
                      </a>
                      <a
                        href={artist.sns.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                        TikTok
                      </a>
                      <a
                        href={artist.sns.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-red-500 hover:text-red-600 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
