import { FeatureSteps } from "./FeatureSteps";
import { useLanguage } from "@/contexts/LanguageContext";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const features = [
    {
      step: 'Step 1',
      title: t('howItWorksStep1Title'),
      content: t('howItWorksStep1Content'),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop'
    },
    {
      step: 'Step 2',
      title: t('howItWorksStep2Title'),
      content: t('howItWorksStep2Content'),
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop'
    },
    {
      step: 'Step 3',
      title: t('howItWorksStep3Title'),
      content: t('howItWorksStep3Content'),
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Step 4',
      title: t('howItWorksStep4Title'),
      content: t('howItWorksStep4Content'),
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <FeatureSteps
        features={features}
        title={t('howItWorksTitle')}
        autoPlayInterval={4000}
      />
    </section>
  );
};
