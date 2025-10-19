import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Video, Layout, ArrowRight } from "lucide-react";

export const ProfessionalPhotoshoot = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Camera,
      text: t('photoshoot1'),
    },
    {
      icon: Video,
      text: t('photoshoot2'),
    },
    {
      icon: Layout,
      text: t('photoshoot3'),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-elegant border-border overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-primary p-8 md:p-12 text-primary-foreground flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('photoshootTitle')}
                </h2>
                <p className="text-primary-foreground/90 mb-8">
                  {t('photoshootSubtitle')}
                </p>
                
                <Button
                  size="lg"
                  variant="default"
                  className="bg-card text-primary hover:bg-card/90 shadow-luxury w-fit"
                >
                  {t('bookPhotoshoot')}
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
              
              <CardContent className="p-8 md:p-12 flex flex-col justify-center bg-card">
                <div className="space-y-6">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-foreground font-medium">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
