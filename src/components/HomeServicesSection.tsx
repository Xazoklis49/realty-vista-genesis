import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scale, HardHat, Camera, Palette } from "lucide-react";
import { LeadModal } from "@/components/LeadModal";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from "@/components/ui/progressive-carousel";
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
  return (
    <>
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

          {/* Progressive Carousel */}
          <ProgressSlider vertical={false} activeSlider="legal-inspection" duration={7000}>
            <SliderContent>
              {services.map((service) => (
                <SliderWrapper key={service.id} value={service.id}>
                  <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
                    {/* Image Block */}
                    <div className="lg:col-span-7">
                      <img 
                        src={service.image} 
                        alt={t(service.imageAltKey)} 
                        loading="lazy" 
                        className="w-full h-[400px] lg:h-[500px] object-cover rounded-xl" 
                      />
                    </div>

                    {/* Text Block */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                          {t(service.titleKey)}
                        </h3>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {service.bulletKeys.map((bulletKey, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                            <span className="text-base text-foreground leading-relaxed font-medium">
                              {t(bulletKey)}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <p className="text-base text-muted-foreground italic mb-6 leading-relaxed font-medium">
                        {t(service.reassuranceKey)}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        <Button 
                          onClick={() => handlePrimaryCTA(t(service.titleKey))} 
                          size="lg"
                          className="font-bold"
                        >
                          {t(service.ctaKey)}
                        </Button>
                        <Button 
                          onClick={handleSecondaryCTA} 
                          variant="outline" 
                          size="lg"
                          className="font-bold"
                        >
                          {t('talkToAdvisor')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </SliderWrapper>
              ))}
            </SliderContent>

            <SliderBtnGroup className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <SliderBtn
                    key={service.id}
                    value={service.id}
                    className="group text-left cursor-pointer p-6 rounded-2xl transition-all duration-500 ease-out bg-muted/30 hover:bg-muted/50 hover:shadow-lg hover:scale-[1.02] data-[active=true]:bg-foreground data-[active=true]:shadow-xl data-[active=true]:scale-[1.03] data-[active=true]:border-2 data-[active=true]:border-foreground border-2 border-border/40"
                    progressBarClass="bg-gradient-to-r from-yellow-200/80 via-yellow-300/80 to-yellow-400/80 h-full rounded-2xl"
                  >
                    <div className="flex items-center gap-3 mb-3 transition-transform duration-300 group-hover:translate-x-0.5">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 group-data-[active=true]:bg-background/20 flex items-center justify-center transition-all duration-300">
                        <IconComponent className="h-5 w-5 text-primary group-data-[active=true]:text-background group-data-[active=true]:scale-110 transition-all duration-300" />
                      </div>
                      <h4 className="font-bold text-base text-foreground group-data-[active=true]:text-background transition-colors duration-300 leading-tight">
                        {t(service.titleKey)}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground group-data-[active=true]:text-background/90 line-clamp-2 transition-colors duration-300 leading-relaxed">
                      {t(service.reassuranceKey)}
                    </p>
                  </SliderBtn>
                );
              })}
            </SliderBtnGroup>
          </ProgressSlider>
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