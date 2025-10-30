import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import serviceLegalCheck from "@/assets/service-legal-check.jpg";
import serviceDocumentFolder from "@/assets/service-document-folder.jpg";
import serviceValuation from "@/assets/service-valuation.jpg";
import servicePhotography from "@/assets/service-photography.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const getServices = (t: any) => [
  {
    id: "legal-technical-check",
    titleKey: "legalTechnicalCheckTitle",
    descKey: "legalTechnicalCheckDesc",
    featureKeys: ["legalTechnicalCheckFeature1", "legalTechnicalCheckFeature2", "legalTechnicalCheckFeature3"],
    image: serviceLegalCheck,
    primaryCtaKey: "startNow",
    secondaryCtaKey: "talkToAdvisor"
  },
  {
    id: "property-folder",
    titleKey: "propertyFolderTitle",
    descKey: "propertyFolderDesc",
    featureKeys: ["propertyFolderFeature1", "propertyFolderFeature2", "propertyFolderFeature3"],
    image: serviceDocumentFolder,
    primaryCtaKey: "startNow",
    secondaryCtaKey: "talkToAdvisor"
  },
  {
    id: "valuation-report",
    titleKey: "valuationReportTitle",
    descKey: "valuationReportDesc",
    featureKeys: ["valuationReportFeature1", "valuationReportFeature2", "valuationReportFeature3"],
    image: serviceValuation,
    primaryCtaKey: "requestValuation",
    secondaryCtaKey: "talkToAdvisor"
  },
  {
    id: "professional-photography",
    titleKey: "professionalPhotographyTitle",
    descKey: "professionalPhotographyDesc",
    featureKeys: ["professionalPhotographyFeature1", "professionalPhotographyFeature2", "professionalPhotographyFeature3"],
    image: servicePhotography,
    primaryCtaKey: "bookAppointment",
    secondaryCtaKey: "talkToAdvisor"
  }
];

export default function Services() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const services = getServices(t);

  const handleContactClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <html lang={language === 'gr' ? 'el' : 'en'} />
        <title>{t('servicesPageTitle')} | Proper Land</title>
        <meta name="description" content={t('servicesPageSubtitle')} />
        <meta name="keywords" content="υπηρεσίες ακινήτων, νομικός έλεγχος, τεχνικός έλεγχος, εκτίμηση ακινήτου, φωτογράφιση ακινήτου, real estate services, property valuation" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
            {t('servicesPageTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t('servicesPageSubtitle')}
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {t('servicesPageTagline')}
          </p>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 md:py-24 px-4 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
          <div className="container mx-auto max-w-7xl">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Text Block */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} space-y-6 animate-fade-up`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {t(service.titleKey)}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(service.descKey)}
                </p>
                <ul className="space-y-3">
                  {service.featureKeys.map((featureKey, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-luxury flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="w-full sm:w-auto" onClick={handleContactClick}>
                    {t(service.primaryCtaKey)}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={handleContactClick}>
                    {t(service.secondaryCtaKey)}
                  </Button>
                </div>
              </div>

              {/* Media Block */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} animate-scale-in`} style={{ animationDelay: "0.2s" }}>
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-full h-auto rounded-xl shadow-card object-cover aspect-video"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer CTA Band */}
      <section className="py-16 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl md:text-2xl mb-6">
            {t('readyToStart')}
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" onClick={handleContactClick}>
            {t('requestQuote')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
