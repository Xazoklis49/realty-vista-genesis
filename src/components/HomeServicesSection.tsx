import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scale, HardHat, Camera, Palette } from "lucide-react";
import { LeadModal } from "@/components/LeadModal";
import { useLanguage } from "@/contexts/LanguageContext";
import legalCheckImg from "@/assets/service-legal-check.jpg";
import valuationImg from "@/assets/service-valuation.jpg";
import dossierImg from "@/assets/service-document-folder.jpg";
import photographyImg from "@/assets/service-photography.jpg";

export const HomeServicesSection = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  
  const services = [
    {
      id: "legal-inspection",
      icon: Scale,
      titleKey: "legalServiceTitle",
      bulletKeys: ["legalServiceBullet1", "legalServiceBullet2", "legalServiceBullet3"],
      reassuranceKey: "legalServiceReassurance",
      image: legalCheckImg,
      imageAltKey: "legalServiceTitle",
      ctaKey: "legalServiceCta"
    },
    {
      id: "technical-inspection",
      icon: HardHat,
      titleKey: "technicalServiceTitle",
      bulletKeys: ["technicalServiceBullet1", "technicalServiceBullet2", "technicalServiceBullet3"],
      reassuranceKey: "technicalServiceReassurance",
      image: valuationImg,
      imageAltKey: "technicalServiceTitle",
      ctaKey: "technicalServiceCta"
    },
    {
      id: "professional-presentation",
      icon: Camera,
      titleKey: "presentationServiceTitle",
      bulletKeys: ["presentationServiceBullet1", "presentationServiceBullet2", "presentationServiceBullet3"],
      reassuranceKey: "presentationServiceReassurance",
      image: photographyImg,
      imageAltKey: "presentationServiceTitle",
      ctaKey: "presentationServiceCta"
    },
    {
      id: "interior-design",
      icon: Palette,
      titleKey: "interiorDesignServiceTitle",
      bulletKeys: ["interiorDesignServiceBullet1", "interiorDesignServiceBullet2", "interiorDesignServiceBullet3"],
      reassuranceKey: "interiorDesignServiceReassurance",
      image: dossierImg,
      imageAltKey: "interiorDesignServiceTitle",
      ctaKey: "interiorDesignServiceCta"
    }
  ];
  const handlePrimaryCTA = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };
  const handleSecondaryCTA = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  return <>
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          {/* Hero */}
          <div className="text-center mb-14 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('homeServicesTitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('homeServicesSubtitle')}
            </p>
          </div>

          {/* Service Blocks */}
          <div className="space-y-14 md:space-y-16">
            {services.map((service, index) => {
            const isEven = index % 2 === 1;
            const IconComponent = service.icon;
            return <div key={service.id} id={service.id} className={`rounded-2xl border border-border/20 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden scroll-mt-24 ${isEven ? "bg-accent/20" : "bg-background"}`}>
                  <div className="grid lg:grid-cols-12 gap-6 md:gap-8 p-6 md:p-8 rounded-none">
                    {/* Text Block */}
                    <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                          {t(service.titleKey)}
                        </h3>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {service.bulletKeys.map((bulletKey, i) => <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                            <span className="text-sm text-foreground leading-relaxed">{t(bulletKey)}</span>
                          </li>)}
                      </ul>
                      
                      <p className="text-sm text-muted-foreground italic mb-6 leading-relaxed">
                        {t(service.reassuranceKey)}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        <Button onClick={() => handlePrimaryCTA(t(service.titleKey))} size="lg">
                          {t(service.ctaKey)}
                        </Button>
                        <Button onClick={handleSecondaryCTA} variant="outline" size="lg">
                          {t('talkToAdvisor')}
                        </Button>
                      </div>
                    </div>

                    {/* Image Block */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <img src={service.image} alt={t(service.imageAltKey)} loading="lazy" className="w-full h-full object-cover rounded-xl aspect-video" />
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </section>

      <LeadModal open={modalOpen} onOpenChange={setModalOpen} serviceTitle={selectedService} />
    </>;
};