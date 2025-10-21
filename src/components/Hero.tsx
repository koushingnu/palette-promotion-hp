import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-16 relative">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="背景"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-10"></div>

      {/* 大きなロゴ - 左上に配置 */}
      <div className="absolute top-2 left-8 z-30">
        <button
          onClick={() => (window.location.href = "/")}
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="/header/logo.png"
            alt="palette promotion"
            className="w-80 h-80 aspect-square object-contain"
          />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
        <div className="text-center">
          {/* ロゴ */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
              palette promotion
            </h1>
            <p className="text-lg text-gray-600">
              個性豊かに咲く花のように、あなたと架ける虹のように
            </p>
          </div>

          {/* ヒーロー画像エリア */}
          <div className="mb-12">
            <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/hero/DSC00103.jpg"
                alt="NiziIROぱれっと メンバー写真"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  console.error(
                    "画像の読み込みに失敗しました:",
                    (e.target as HTMLImageElement).src
                  );
                  (e.target as HTMLImageElement).style.display = "none";
                }}
                onLoad={() => {
                  console.log("画像の読み込みに成功しました");
                }}
              />
            </div>
          </div>

          {/* 公式SNSリンク */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://x.com/Nizi_Pale_info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="X（旧Twitter）"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nizi_pale_info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281H13.12v1.566h2.159v9.281h-2.159v1.566h5.389V8.707zm-3.323 5.389c0 1.297-.49 2.448-1.418 3.323-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323z" />
              </svg>
            </a>
          </div>

          {/* キャッチコピー */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              「個性豊かに咲く花のように、あなたと架ける虹のように、みんなを笑顔にできますように。」
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
