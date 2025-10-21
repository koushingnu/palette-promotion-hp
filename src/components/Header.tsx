"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface HeaderProps {
  onLogoClick?: () => void;
}

export default function Header({ onLogoClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    }
    router.push("/");
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴエリアを削除 */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-black">
              palette promotion
            </div>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                HOME
              </Link>
              <Link
                href="#news"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                NEWS
              </Link>
              <Link
                href="#artist"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                ARTIST
              </Link>
              <Link
                href="#talent"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                TALENT
              </Link>
              <Link
                href="#company"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                COMPANY
              </Link>
              <Link
                href="#contact"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                CONTACT
              </Link>
              <Link
                href="#audition"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                AUDITION
              </Link>
            </div>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="メニューを開く"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              href="/"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="#news"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              NEWS
            </Link>
            <Link
              href="#artist"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ARTIST
            </Link>
            <Link
              href="#talent"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              TALENT
            </Link>
            <Link
              href="#company"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              COMPANY
            </Link>
            <Link
              href="#contact"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="#audition"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              AUDITION
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
