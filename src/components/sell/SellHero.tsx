import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Shield, Star, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

interface SellHeroProps {
  onScrollToSteps: () => void;
}

export const SellHero = ({ onScrollToSteps }: SellHeroProps) => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div ref={heroRef} className="container mx-auto px-4 relative z-10 opacity-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('sellHeroTitle')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            {t('sellHeroSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              variant="default"
              className="bg-card text-primary hover:bg-card/90 shadow-luxury"
              onClick={onScrollToSteps}
            >
              {t('createListing')}
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => document.getElementById('experts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('talkToExpert')}
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-primary-foreground/10 p-3 rounded-full">
                <Star className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium">Premium Service</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-primary-foreground/10 p-3 rounded-full">
                <TrendingUp className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium">Best Market Value</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-primary-foreground/10 p-3 rounded-full">
                <Shield className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium">Legal Protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
