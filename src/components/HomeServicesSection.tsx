import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
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
      id: "legal-technical-check",
      titleKey: "legalTechnicalCheckTitle",
      bodyKey: "legalTechnicalCheckDesc",
      bulletKeys: ["legalTechnicalCheckFeature1", "legalTechnicalCheckFeature2", "legalTechnicalCheckFeature3"],
      image: legalCheckImg,
      imageAltKey: "legalTechnicalCheckTitle",
      ctaPrimaryKey: "startNow",
      ctaSecondaryKey: "talkToAdvisor"
    },
    {
      id: "valuation-report",
      titleKey: "valuationReportTitle",
      bodyKey: "valuationReportDesc",
      bulletKeys: ["valuationReportFeature1", "valuationReportFeature2", "valuationReportFeature3"],
      image: valuationImg,
      imageAltKey: "valuationReportTitle",
      ctaPrimaryKey: "requestValuation",
      ctaSecondaryKey: "talkToAdvisor"
    },
    {
      id: "property-dossier",
      titleKey: "propertyFolderTitle",
      bodyKey: "propertyFolderDesc",
      bulletKeys: ["propertyFolderFeature1", "propertyFolderFeature2", "propertyFolderFeature3"],
      image: dossierImg,
      imageAltKey: "propertyFolderTitle",
      ctaPrimaryKey: "startNow",
      ctaSecondaryKey: "talkToAdvisor"
    },
    {
      id: "pro-photography",
      titleKey: "professionalPhotographyTitle",
      bodyKey: "professionalPhotographyDesc",
      bulletKeys: ["professionalPhotographyFeature1", "professionalPhotographyFeature2", "professionalPhotographyFeature3"],
      image: photographyImg,
      imageAltKey: "professionalPhotographyTitle",
      ctaPrimaryKey: "bookAppointment",
      ctaSecondaryKey: "talkToAdvisor"
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
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-2">
              {t('homeServicesSubtitle')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('homeServicesTagline')}
            </p>
          </div>

          {/* Service Blocks */}
          <div className="space-y-14 md:space-y-16">
            {services.map((service, index) => {
            const isEven = index % 2 === 1;
            return <div key={service.id} id={service.id} className={`rounded-2xl border border-border/20 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden scroll-mt-24 ${isEven ? "bg-accent/20" : "bg-background"}`}>
                  <div className="grid lg:grid-cols-12 gap-6 md:gap-8 p-6 md:p-8 rounded-none">
                    {/* Text Block */}
                    <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {t(service.bodyKey)}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.bulletKeys.map((bulletKey, i) => <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{t(bulletKey)}</span>
                          </li>)}
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        <Button onClick={() => handlePrimaryCTA(t(service.titleKey))} size="lg">
                          {t(service.ctaPrimaryKey)}
                        </Button>
                        <Button onClick={handleSecondaryCTA} variant="outline" size="lg">
                          {t(service.ctaSecondaryKey)}
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