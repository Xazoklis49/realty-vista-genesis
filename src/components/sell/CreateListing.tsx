import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Video, FileCheck, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

export const CreateListing = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-scale-in");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: t('feature1Title'),
      description: t('feature1Desc'),
    },
    {
      icon: Video,
      title: t('feature2Title'),
      description: t('feature2Desc'),
    },
    {
      icon: FileCheck,
      title: t('feature3Title'),
      description: t('feature3Desc'),
    },
    {
      icon: MapPin,
      title: t('feature4Title'),
      description: t('feature4Desc'),
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('listingFeaturesTitle')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('listingFeaturesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="feature-card opacity-0 border-border bg-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.05]"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-elegant">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
