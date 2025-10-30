import { Header } from "@/components/Header";
import { OurTeam } from "@/components/OurTeam";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OurTeamPage = () => {
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
        <title>{t('teamTitle')} | Proper Land</title>
        <meta name="description" content={t('teamSubtitle')} />
        <meta property="og:title" content={`${t('teamTitle')} | Proper Land`} />
        <meta property="og:description" content={t('teamSubtitle')} />
        <link rel="canonical" href="https://properland.gr/our-team" />
      </Helmet>
      <Header />
      <main className="pt-16">
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
};

export default OurTeamPage;
