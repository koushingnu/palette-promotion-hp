"use client";

import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState("LOADING");
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // 少し遅延させてから開始
    const startDelay = setTimeout(() => {
      setIsStarted(true);
    }, 100);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!isStarted) return;
    // ローディングテキストのアニメーション
    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        switch (prev) {
          case "LOADING":
            return "LOADING.";
          case "LOADING.":
            return "LOADING..";
          case "LOADING..":
            return "LOADING...";
          case "LOADING...":
            return "LOADING";
          default:
            return "LOADING";
        }
      });
    }, 500);

    // プログレスバーのアニメーション
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        // 100%に達したら完了処理
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          // 100%表示を少し維持してから完了
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // フェードアウト後に完了
          }, 800);
          return 100;
        }

        // 段階的な進捗速度で確実に100%まで進む
        if (prev < 20) {
          return Math.min(prev + Math.random() * 4 + 2, 20);
        } else if (prev < 40) {
          return Math.min(prev + Math.random() * 3 + 1.5, 40);
        } else if (prev < 60) {
          return Math.min(prev + Math.random() * 2.5 + 1, 60);
        } else if (prev < 80) {
          return Math.min(prev + Math.random() * 2 + 0.8, 80);
        } else if (prev < 95) {
          return Math.min(prev + Math.random() * 1.5 + 0.5, 95);
        } else {
          return Math.min(prev + Math.random() * 0.8 + 0.3, 100);
        }
      });
    }, 200); // 少し遅めの間隔で確実に進める

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete, isStarted]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-red-800 z-50 flex items-center justify-center overflow-hidden">
      {/* 背景アニメーション */}
      <div className="absolute inset-0">
        {/* パーティクル風の装飾 */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-300 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-300 rounded-full opacity-50 animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-pink-200 rounded-full opacity-30 animate-bounce"></div>

        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative text-center z-10">
        {/* ロゴエリア */}
        <div className="mb-16">
          <div className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider">
            palette
          </div>
          <div className="text-3xl md:text-4xl font-light text-pink-200 tracking-[0.3em]">
            PROMOTION
          </div>
          <div className="mt-6 text-lg text-pink-100 opacity-80">
            個性豊かに咲く花のように、あなたと架ける虹のように
          </div>
        </div>

        {/* プログレスエリア */}
        <div className="mb-12">
          <div className="text-6xl md:text-7xl font-thin text-white mb-4 tracking-wider">
            {Math.round(progress)}%
          </div>
          <div className="text-xl font-light text-pink-200 tracking-[0.2em] mb-8">
            {loadingText}
          </div>

          {/* プログレスバー */}
          <div className="w-80 md:w-96 h-1 bg-white/20 mx-auto rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 装飾的なライン */}
        <div className="flex items-center justify-center space-x-4">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-white/60"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-white/60"></div>
        </div>
      </div>

      {/* フッター装飾 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-sm text-pink-200 opacity-60 tracking-wider">
          NiziIROぱれっと
        </div>
      </div>
    </div>
  );
}
