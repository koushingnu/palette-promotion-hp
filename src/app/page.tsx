"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import ArtistSection from "@/components/ArtistSection";
import TalentGrid from "@/components/TalentGrid";
import CompanyInfo from "@/components/CompanyInfo";
import ContactSection from "@/components/ContactSection";
import AuditionSection from "@/components/AuditionSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // デバッグ用：sessionStorageをクリアしてテストする場合は以下の行のコメントアウトを外す
    sessionStorage.removeItem("hasLoaded");

    // 初回読み込み時のみローディング
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasLoaded", "true");
  };

  // マウントされていない場合やローディング中はローディング画面を表示
  if (!mounted || isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <ArtistSection />
        <TalentGrid />
        <CompanyInfo />
        <ContactSection />
        <AuditionSection />
      </main>
      <Footer />
    </div>
  );
}
