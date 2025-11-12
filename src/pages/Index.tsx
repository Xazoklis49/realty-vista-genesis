import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { HowItWorks } from "@/components/HowItWorks";
import { HomeServicesSection } from "@/components/HomeServicesSection";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { t, language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    // Analytics tracking for route change
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <html lang={language === 'gr' ? 'el' : 'en'} />
        <title>{t('heroHeadline')} | Proper Land</title>
        <meta name="description" content={t('heroSubheadline')} />
        <meta name="keywords" content="αγορά ακινήτου, πώληση ακινήτου, εκτίμηση ακινήτου, νομικός έλεγχος, τεχνικός έλεγχος, χρηματοδότηση, real estate Greece, property valuation, legal check, technical inspection, financing" />
        <meta property="og:title" content={`${t('heroHeadline')} | Proper Land`} />
        <meta property="og:description" content={t('heroSubheadline')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://properland.gr/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <HomeServicesSection />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
export default Index;