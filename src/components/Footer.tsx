import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              株式会社palette promotion
            </h3>
            <p className="text-gray-300 text-sm mb-2">設立: 2024年2月</p>
            <p className="text-gray-300 text-sm mb-2">資本金: 100万円</p>
            <p className="text-gray-300 text-sm">
              俳優、タレント、モデル、歌手、スポーツ選手、文化人等のマネージメント・プロデュース
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SITE MAP</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="#news"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  NEWS
                </Link>
              </li>
              <li>
                <Link
                  href="#artist"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  ARTIST
                </Link>
              </li>
              <li>
                <Link
                  href="#talent"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  TALENT
                </Link>
              </li>
              <li>
                <Link
                  href="#company"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  COMPANY
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  href="#audition"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  AUDITION
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
            <p className="text-gray-300 text-sm mb-4">
              お仕事のご依頼・ご相談はこちらまで
            </p>
            <a
              href="mailto:info@nizi-pale.com"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              info@nizi-pale.com
            </a>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 株式会社palette promotion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
