import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileCheck, Home, Calculator, Camera } from "lucide-react";
import { LeadModal } from "@/components/LeadModal";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceBlock {
  id: string;
  icon: typeof FileCheck;
  titleKey: string;
  bodyKey: string;
  bulletKeys: string[];
  ctaPrimaryKey: string;
  ctaSecondaryKey: string;
}

const services: ServiceBlock[] = [
  {
    id: "legal-technical-check",
    icon: FileCheck,
    titleKey: "service1Title",
    bodyKey: "service1Body",
    bulletKeys: ["service1Bullet1", "service1Bullet2", "service1Bullet3"],
    ctaPrimaryKey: "service1CtaPrimary",
    ctaSecondaryKey: "service1CtaSecondary",
  },
  {
    id: "valuation-report",
    icon: Calculator,
    titleKey: "service2Title",
    bodyKey: "service2Body",
    bulletKeys: ["service2Bullet1", "service2Bullet2", "service2Bullet3"],
    ctaPrimaryKey: "service2CtaPrimary",
    ctaSecondaryKey: "service2CtaSecondary",
  },
  {
    id: "property-dossier",
    icon: Home,
    titleKey: "service3Title",
    bodyKey: "service3Body",
    bulletKeys: ["service3Bullet1", "service3Bullet2", "service3Bullet3"],
    ctaPrimaryKey: "service3CtaPrimary",
    ctaSecondaryKey: "service3CtaSecondary",
  },
  {
    id: "pro-photography",
    icon: Camera,
    titleKey: "service4Title",
    bodyKey: "service4Body",
    bulletKeys: ["service4Bullet1", "service4Bullet2", "service4Bullet3"],
    ctaPrimaryKey: "service4CtaPrimary",
    ctaSecondaryKey: "service4CtaSecondary",
  },
];

export const HomeServicesSection = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handlePrimaryCTA = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  const handleSecondaryCTA = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          {/* Hero */}
          <div className="text-center mb-14 md:mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('servicesTitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-2">
              {t('servicesSubtitle')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('servicesSupportingText')}
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-up">
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="group bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] scroll-mt-24"
              >
                <CardContent className="p-6 md:p-8">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                    {t(service.titleKey)}
                  </h3>

                  {/* Body */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t(service.bodyKey)}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6">
                    {service.bulletKeys.map((bulletKey, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{t(bulletKey)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={() => handlePrimaryCTA(t(service.titleKey))}
                      size="lg"
                      className="w-full"
                    >
                      {t(service.ctaPrimaryKey)}
                    </Button>
                    <Button
                      onClick={handleSecondaryCTA}
                      variant="outline"
                      size="lg"
                      className="w-full"
                    >
                      {t(service.ctaSecondaryKey)}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <LeadModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceTitle={selectedService}
      />
    </>
  );
};
