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
  const [mounted, setMounted] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    setMounted(true);
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
          // 100%表示を少し維持してから開くアニメーション
          setTimeout(() => {
            setIsOpening(true);
            // アニメーション開始後に完了処理を呼び出し
            setTimeout(onComplete, 1450); // アニメーション中にHPを表示
          }, 400);
          return 100;
        }

        // より早い進捗速度で確実に100%まで進む
        if (prev < 30) {
          return Math.min(prev + Math.random() * 8 + 4, 30);
        } else if (prev < 60) {
          return Math.min(prev + Math.random() * 6 + 3, 60);
        } else if (prev < 85) {
          return Math.min(prev + Math.random() * 4 + 2, 85);
        } else if (prev < 95) {
          return Math.min(prev + Math.random() * 2 + 1, 95);
        } else {
          return Math.min(prev + Math.random() * 1 + 0.5, 100);
        }
      });
    }, 100); // より早い間隔で確実に進める

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete, isStarted]);

  // マウントされていない場合は何も表示しない
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
      {/* 開くアニメーション用のマスク - 中央から上下に分割 */}
      {/* 上部マスク */}
      <div
        className={`absolute top-0 left-0 right-0 h-1/2 bg-black transition-all duration-1500 ease-in-out ${
          isOpening ? "-translate-y-full" : "translate-y-0"
        }`}
      />
      {/* 下部マスク */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-black transition-all duration-1500 ease-in-out ${
          isOpening ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* 背景アニメーション */}
      <div className="absolute inset-0">
        {/* パーティクル風の装飾 */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-300 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gray-400 rounded-full opacity-50 animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-gray-200 rounded-full opacity-30 animate-bounce"></div>
      </div>

      {/* メインコンテンツ - 上部配置 */}
      <div
        className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 ${
          isOpening ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* ロゴエリア */}
        <div className="mb-8">
          <div className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider">
            palette
          </div>
          <div className="text-3xl md:text-4xl font-light text-gray-300 tracking-[0.3em]">
            PROMOTION
          </div>
          <div className="mt-6 text-lg text-gray-300 opacity-80"></div>
        </div>
      </div>

      {/* プログレスエリア - 下部配置 */}
      <div
        className={`absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 ${
          isOpening ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-6xl md:text-7xl font-thin text-white mb-4 tracking-wider">
            {Math.round(progress)}%
          </div>
          <div className="text-xl font-light text-gray-300 tracking-[0.2em]">
            {loadingText}
          </div>
        </div>
      </div>

      {/* フッター装飾 */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-500 ${
          isOpening ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-sm text-gray-300 opacity-60 tracking-wider">
          NiziIROぱれっと
        </div>
      </div>

      {/* プログレスバー - 画面幅全部、中央配置 */}
      <div
        className={`absolute top-1/2 left-0 right-0 h-1 bg-white/20 transform -translate-y-1/2 transition-opacity duration-500 ${
          isOpening ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className="h-full bg-gradient-to-r from-white via-gray-200 to-white transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
