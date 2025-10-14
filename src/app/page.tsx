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
    // 再読み込み時もローディングを表示するため、sessionStorageをクリア
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

  const handleLogoClick = () => {
    setIsLoading(true);
    sessionStorage.removeItem("hasLoaded"); // ローディングを強制表示
  };

  // マウントされていない場合は何も表示しない
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HPを常に表示 */}
      <Header onLogoClick={handleLogoClick} />
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

      {/* ローディング画面をオーバーレイとして表示 */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
    </div>
  );
}
