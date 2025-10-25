import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          ページが見つかりませんでした
        </p>
        <Link
          href="/"
          className="text-purple-600 hover:text-purple-800 transition-colors"
        >
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}
