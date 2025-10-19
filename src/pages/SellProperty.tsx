import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SellHero } from "@/components/sell/SellHero";
import { WhySellWithUs } from "@/components/sell/WhySellWithUs";
import { CreateListing } from "@/components/sell/CreateListing";
import { HowItWorksSteps } from "@/components/sell/HowItWorksSteps";
import { ExpertsBlock } from "@/components/sell/ExpertsBlock";
import { ProfessionalPhotoshoot } from "@/components/sell/ProfessionalPhotoshoot";
import { SellFAQ } from "@/components/sell/SellFAQ";
import { PromoBanner } from "@/components/sell/PromoBanner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const SellProperty = () => {
  const { t } = useLanguage();
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('sellPageTitle')} | EliteHomes</title>
        <meta name="description" content={t('sellPageMeta')} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": t('faq1Q'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('faq1A')
                }
              },
              {
                "@type": "Question",
                "name": t('faq2Q'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('faq2A')
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <PromoBanner />
        
        <main className="pt-16">
          <SellHero onScrollToSteps={() => scrollToSection('steps')} />
          
          <section id="why">
            <WhySellWithUs />
          </section>
          
          <section id="features">
            <CreateListing />
          </section>
          
          <section id="steps">
            <HowItWorksSteps />
          </section>
          
          <section id="experts">
            <ExpertsBlock />
          </section>
          
          <section id="photoshoot">
            <ProfessionalPhotoshoot />
          </section>
          
          <section id="faq">
            <SellFAQ />
          </section>
        </main>
        
        <Footer />

        {/* Sticky Mobile CTA Bar */}
        <div
          className={`fixed bottom-0 left-0 right-0 bg-card border-t shadow-elegant z-40 transition-transform duration-300 md:hidden ${
            showStickyBar ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex gap-2 p-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => scrollToSection('experts')}
            >
              {t('talkToExpert')}
            </Button>
            <Button
              id="create-listing"
              variant="hero"
              className="flex-1"
              onClick={() => scrollToSection('steps')}
            >
              {t('createListing')}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellProperty;
