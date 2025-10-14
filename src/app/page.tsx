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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // 初回読み込み時のみローディング
    if (typeof window !== "undefined") {
      const hasLoaded = sessionStorage.getItem("hasLoaded");
      if (hasLoaded) {
        setIsLoading(false);
      }
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hasLoaded", "true");
    }
  };

  // クライアントサイドでない場合はローディング表示
  if (!isClient || isLoading) {
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
