import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">palette promotion</h3>
            <p className="text-gray-300 mb-4">
              個性豊かに咲く花のように、あなたと架ける虹のように、みんなを笑顔にできますように。
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>〒150-0000 東京都渋谷区</p>
              <p>TEL: 03-1234-5678</p>
              <p>Email: info@palette-promotion.com</p>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-lg font-semibold mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="#news"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  NEWS
                </Link>
              </li>
              <li>
                <Link
                  href="#artist"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  ARTIST
                </Link>
              </li>
              <li>
                <Link
                  href="#talent"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  TALENT
                </Link>
              </li>
              <li>
                <Link
                  href="#company"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  COMPANY
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  href="#audition"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  AUDITION
                </Link>
              </li>
            </ul>
          </div>

          {/* SNSリンク */}
          <div>
            <h4 className="text-lg font-semibold mb-4">FOLLOW US</h4>
            <div className="space-y-3">
              <a
                href="https://x.com/Nizi_Pale_info"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
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
                href="https://www.instagram.com/nizi_pale_info/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
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
                href="https://www.tiktok.com/@nizi_pale_info"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
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
                href="https://www.youtube.com/@nizi_pale_info"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
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

        {/* コピーライト */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 palette promotion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
