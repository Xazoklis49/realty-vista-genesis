import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'gr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    browseProperties: 'Browse Properties',
    sellProperty: 'Sell Property',
    allServices: 'All Services',
    submitProperty: 'List Your Property',
    callNow: 'Call Now',
    getStarted: 'Get Started',
    heroTitle: 'Find Your Dream Property',
    heroSubtitle: 'Discover exceptional properties with EliteHomes - where luxury meets innovation',
    exploreProperties: 'Explore Properties',
    featuredTitle: 'Featured Properties',
    featuredSubtitle: 'Discover our handpicked selection of premium properties',
    viewDetails: 'View Details',
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Ready to find your dream property? Contact us today',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    sendMessage: 'Send Message',
    topic: 'Topic',
    selectTopic: 'Select a topic',
    topicBuy: 'Buy',
    topicSell: 'Sell',
    topicRent: 'Rent',
    topicLegal: 'Legal Services',
    topicTechnical: 'Technical Services',
    topicOther: 'Other',
    howItWorksTitle: 'How It Works',
    step1Title: 'Schedule a Visit',
    step1Content: 'Browse our properties and schedule a viewing at your convenience',
    step2Title: 'Property Consultation',
    step2Content: 'Meet with our experts to discuss your needs and preferences',
    step3Title: 'Legal Review',
    step3Content: 'Our legal experts ensure all documentation is accurate and complete',
    step4Title: 'Complete Purchase',
    step4Content: 'Finalize the deal with our seamless closing process',
    teamTitle: 'Our Team',
    teamSubtitle: 'Meet the experts who make your property dreams come true',
    teamMember1Name: 'Maria Papadopoulos',
    teamMember1Role: 'Senior Property Consultant',
    teamMember1Bio: 'With over 15 years of experience in luxury real estate, Maria specializes in connecting clients with their perfect properties.',
    teamMember2Name: 'Dimitris Kostas',
    teamMember2Role: 'Legal Advisor',
    teamMember2Bio: 'Expert in real estate law, ensuring every transaction is secure and compliant with all regulations.',
    teamMember3Name: 'Elena Nikolaou',
    teamMember3Role: 'Marketing Director',
    teamMember3Bio: 'Passionate about showcasing properties in their best light through innovative marketing strategies.',
  },
  gr: {
    browseProperties: 'Αναζήτηση Ακινήτων',
    sellProperty: 'Πώληση Ακινήτου',
    allServices: 'Όλες οι Υπηρεσίες',
    submitProperty: 'Καταχώρηση Ακινήτου',
    callNow: 'Καλέστε Τώρα',
    getStarted: 'Ξεκινήστε',
    heroTitle: 'Βρείτε το Ιδανικό σας Ακίνητο',
    heroSubtitle: 'Ανακαλύψτε εξαιρετικά ακίνητα με την EliteHomes - όπου η πολυτέλεια συναντά την καινοτομία',
    exploreProperties: 'Εξερευνήστε Ακίνητα',
    featuredTitle: 'Επιλεγμένα Ακίνητα',
    featuredSubtitle: 'Ανακαλύψτε τα προσεκτικά επιλεγμένα premium ακίνητά μας',
    viewDetails: 'Λεπτομέρειες',
    contactTitle: 'Επικοινωνήστε',
    contactSubtitle: 'Έτοιμοι να βρείτε το ιδανικό σας ακίνητο; Επικοινωνήστε μαζί μας σήμερα',
    name: 'Όνομα',
    email: 'Email',
    message: 'Μήνυμα',
    sendMessage: 'Αποστολή Μηνύματος',
    topic: 'Θέμα',
    selectTopic: 'Επιλέξτε θέμα',
    topicBuy: 'Αγορά',
    topicSell: 'Πώληση',
    topicRent: 'Ενοικίαση',
    topicLegal: 'Νομικές Υπηρεσίες',
    topicTechnical: 'Τεχνικές Υπηρεσίες',
    topicOther: 'Άλλο',
    howItWorksTitle: 'Πώς Λειτουργεί',
    step1Title: 'Προγραμματίστε Επίσκεψη',
    step1Content: 'Περιηγηθείτε στα ακίνητά μας και προγραμματίστε μια προβολή όποτε σας βολεύει',
    step2Title: 'Συμβουλευτική Ακινήτου',
    step2Content: 'Συναντηθείτε με τους ειδικούς μας για να συζητήσετε τις ανάγκες και τις προτιμήσεις σας',
    step3Title: 'Νομική Επισκόπηση',
    step3Content: 'Οι νομικοί μας ειδικοί διασφαλίζουν ότι όλα τα έγγραφα είναι ακριβή και πλήρη',
    step4Title: 'Ολοκλήρωση Αγοράς',
    step4Content: 'Ολοκληρώστε τη συμφωνία με την απρόσκοπτη διαδικασία κλεισίματός μας',
    teamTitle: 'Η Ομάδα Μας',
    teamSubtitle: 'Γνωρίστε τους ειδικούς που κάνουν τα όνειρά σας για ακίνητα πραγματικότητα',
    teamMember1Name: 'Μαρία Παπαδοπούλου',
    teamMember1Role: 'Ανώτερη Σύμβουλος Ακινήτων',
    teamMember1Bio: 'Με πάνω από 15 χρόνια εμπειρίας στα πολυτελή ακίνητα, η Μαρία ειδικεύεται στη σύνδεση πελατών με τα τέλεια ακίνητά τους.',
    teamMember2Name: 'Δημήτρης Κώστας',
    teamMember2Role: 'Νομικός Σύμβουλος',
    teamMember2Bio: 'Ειδικός στο δίκαιο ακινήτων, διασφαλίζοντας ότι κάθε συναλλαγή είναι ασφαλής και σύμφωνη με όλους τους κανονισμούς.',
    teamMember3Name: 'Έλενα Νικολάου',
    teamMember3Role: 'Διευθύντρια Marketing',
    teamMember3Bio: 'Παθιασμένη με την προβολή ακινήτων στο καλύτερο φως μέσω καινοτόμων στρατηγικών μάρκετινγκ.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
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
