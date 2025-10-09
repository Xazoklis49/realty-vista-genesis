import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'gr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    buyProperty: 'Buy Property',
    sellProperty: 'Sell Property',
    rentProperty: 'Rent Property',
    submitProperty: 'Submit Property',
    heroTitle: 'Find Your Dream Property',
    heroSubtitle: 'Discover exclusive real estate opportunities with cutting-edge technology and personalized service',
    exploreProperties: 'Explore Properties',
    viewDetails: 'View Details',
    featuredTitle: 'Featured Properties',
    featuredSubtitle: 'Explore our handpicked selection of premium properties',
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive real estate solutions tailored to your needs',
    aboutTitle: 'Why Choose EliteHomes',
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to find your perfect property? Contact us today',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
  },
  gr: {
    buyProperty: 'Αγορά Ακινήτου',
    sellProperty: 'Πώληση Ακινήτου',
    rentProperty: 'Ενοικίαση Ακινήτου',
    submitProperty: 'Υποβολή Ακινήτου',
    heroTitle: 'Βρείτε το Ιδανικό σας Ακίνητο',
    heroSubtitle: 'Ανακαλύψτε αποκλειστικές ευκαιρίες ακινήτων με τεχνολογία αιχμής και εξατομικευμένη εξυπηρέτηση',
    exploreProperties: 'Εξερευνήστε Ακίνητα',
    viewDetails: 'Δείτε Λεπτομέρειες',
    featuredTitle: 'Επιλεγμένα Ακίνητα',
    featuredSubtitle: 'Εξερευνήστε την επιλογή μας από premium ακίνητα',
    servicesTitle: 'Οι Υπηρεσίες μας',
    servicesSubtitle: 'Ολοκληρωμένες λύσεις ακινήτων προσαρμοσμένες στις ανάγκες σας',
    aboutTitle: 'Γιατί να Επιλέξετε EliteHomes',
    contactTitle: 'Επικοινωνήστε',
    contactSubtitle: 'Έτοιμοι να βρείτε το τέλειο ακίνητο; Επικοινωνήστε μαζί μας σήμερα',
    name: 'Όνομα',
    email: 'Email',
    message: 'Μήνυμα',
    send: 'Αποστολή Μηνύματος',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
