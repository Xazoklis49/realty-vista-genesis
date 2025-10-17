import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'gr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    browseProperties: "Browse Properties",
    sellProperty: "Sell Property",
    allServices: "All Services",
    login: "Log in",
    
    // Hero
    heroTitle: "Find Your Dream Property",
    heroSubtitle: "Discover exclusive listings in prime locations with expert guidance",
    heroButton: "Explore Properties",
    exploreProperties: "Explore Properties",
    
    // How it Works
    howItWorksTitle: "How It Works",
    step1Title: "Search Properties",
    step1Content: "Browse our extensive database of premium properties",
    step2Title: "Schedule Visit",
    step2Content: "Book viewings with our expert agents",
    step3Title: "Legal Review",
    step3Content: "Complete due diligence with our legal team",
    step4Title: "Close Deal",
    step4Content: "Secure your dream property with confidence",
    
    // Featured Properties
    featuredTitle: "Featured Properties",
    featuredSubtitle: "Handpicked selection of premium properties",
    viewAll: "View All Properties",
    viewDetails: "View Details",
    
    // Services
    servicesTitle: "With You Every Step",
    servicesSubtitle: "We ensure a smooth and transparent process, from inspection to completion—stress-free.",
    servicesSupportingText: "Legal, technical and commercial coordination from one point.",
    
    // Service 1: Legal & Technical Check
    service1Title: "Legal & Technical Check",
    service1Body: "We check titles, any encumbrances/pending issues and the technical/urban planning status, so you know exactly what you are acquiring.",
    service1Bullet1: "Title & encumbrance check (land registry/mortgage registry)",
    service1Bullet2: "Urban planning compliance & irregularities",
    service1Bullet3: "Clear report of findings & risks",
    service1CtaPrimary: "Get Started",
    service1CtaSecondary: "Talk to an Advisor",
    
    // Service 2: Valuation Report
    service2Title: "Property Valuation Report",
    service2Body: "We provide documented valuation with market comparables and demand analysis, for a fair and realistic price.",
    service2Bullet1: "Real-time & historical comparative data",
    service2Bullet2: "Area, demand & yield analysis",
    service2Bullet3: "Transparent valuation methodology",
    service2CtaPrimary: "Request Valuation",
    service2CtaSecondary: "Talk to an Advisor",
    
    // Service 3: Property Dossier
    service3Title: "Property Dossier Setup",
    service3Body: "We gather and organize all documents (titles, E9, regularizations, EPC, etc.) for quick and secure signing.",
    service3Bullet1: "Checklist of documents & deadlines",
    service3Bullet2: "Digital archiving, ready for notary",
    service3Bullet3: "Tracking of pending items",
    service3CtaPrimary: "Get Started",
    service3CtaSecondary: "Talk to an Advisor",
    
    // Service 4: Professional Photography
    service4Title: "Professional Photography Service",
    service4Body: "High-quality photography (and optionally floor plan/staging) for top presentation in listings and social media.",
    service4Bullet1: "HDR photos & short video/REELS",
    service4Bullet2: "Floor plan & light virtual staging (optional)",
    service4Bullet3: "Optimization for portals & social media",
    service4CtaPrimary: "Book Appointment",
    service4CtaSecondary: "Talk to an Advisor",
    
    // Contact
    contactTitle: "Get in Touch",
    contactSubtitle: "Ready to find your dream property? Contact us today",
    name: "Full Name",
    email: "Email Address",
    message: "Your Message",
    sendMessage: "Send Message",
    
    // Footer
    footerTagline: "Your trusted partner in real estate excellence",
    quickLinks: "Quick Links",
    about: "About Us",
    blog: "Blog",
    careers: "Careers",
    contact: "Contact",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    copyright: "© 2024 EliteHomes. All rights reserved.",
  },
  gr: {
    // Navigation  
    home: "Αρχική",
    browseProperties: "Αναζήτηση Ακινήτων",
    sellProperty: "Πώληση Ακινήτου",
    allServices: "Όλες οι Υπηρεσίες",
    login: "Σύνδεση",
    
    // Hero
    heroTitle: "Βρείτε το Ιδανικό σας Ακίνητο",
    heroSubtitle: "Ανακαλύψτε αποκλειστικές καταχωρίσεις σε προνομιακές τοποθεσίες",
    heroButton: "Εξερεύνηση Ακινήτων",
    exploreProperties: "Εξερεύνηση Ακινήτων",
    
    // How it Works
    howItWorksTitle: "Πώς Λειτουργεί",
    step1Title: "Αναζήτηση Ακινήτων",
    step1Content: "Περιηγηθείτε στη βάση δεδομένων μας",
    step2Title: "Προγραμματισμός Επίσκεψης",
    step2Content: "Κλείστε ραντεβού με τους ειδικούς μας",
    step3Title: "Νομική Επισκόπηση",
    step3Content: "Ολοκληρώστε τον έλεγχο με τη νομική ομάδα μας",
    step4Title: "Ολοκλήρωση Συναλλαγής",
    step4Content: "Εξασφαλίστε το ακίνητό σας με σιγουριά",
    
    // Featured Properties
    featuredTitle: "Προτεινόμενα Ακίνητα",
    featuredSubtitle: "Επιλεγμένα premium ακίνητα",
    viewAll: "Προβολή Όλων",
    viewDetails: "Λεπτομέρειες",
    
    // Services
    servicesTitle: "Δίπλα σου σε κάθε βήμα",
    servicesSubtitle: "Εξασφαλίζουμε ομαλή και διαφανή διαδικασία, από τον έλεγχο μέχρι την ολοκλήρωση της συναλλαγής—χωρίς άγχος.",
    servicesSupportingText: "Νομικός, τεχνικός και εμπορικός συντονισμός από ένα σημείο.",
    
    // Service 1: Legal & Technical Check
    service1Title: "Νομικός & Τεχνικός έλεγχος",
    service1Body: "Ελέγχουμε τίτλους, τυχόν βάρη/εκκρεμότητες και την τεχνική/πολεοδομική κατάσταση, ώστε να γνωρίζεις ακριβώς τι αποκτάς.",
    service1Bullet1: "Έλεγχος τίτλων & βαρών (κτηματολόγιο/υποθηκοφυλακείο)",
    service1Bullet2: "Πολεοδομική συμμόρφωση & αυθαιρεσίες",
    service1Bullet3: "Σαφής αναφορά ευρημάτων & κινδύνων",
    service1CtaPrimary: "Ξεκίνα τώρα",
    service1CtaSecondary: "Μίλησε με σύμβουλο",
    
    // Service 2: Valuation Report
    service2Title: "Έκθεση εκτίμησης ακινήτου",
    service2Body: "Παρέχουμε τεκμηριωμένη αποτίμηση με συγκριτικά αγοράς και ανάλυση ζήτησης, για δίκαιη και ρεαλιστική τιμή.",
    service2Bullet1: "Συγκριτικά real-time & ιστορικά δεδομένα",
    service2Bullet2: "Ανάλυση περιοχής, ζήτησης & αποδόσεων",
    service2Bullet3: "Διαφανής μεθοδολογία αποτίμησης",
    service2CtaPrimary: "Ζήτησε εκτίμηση",
    service2CtaSecondary: "Μίλησε με σύμβουλο",
    
    // Service 3: Property Dossier
    service3Title: "Σύσταση φακέλου ακινήτου",
    service3Body: "Συγκεντρώνουμε και οργανώνουμε όλα τα έγγραφα (τίτλοι, Ε9, τακτοποιήσεις, ΠΕΑ κ.ά.) για γρήγορη και ασφαλή υπογραφή.",
    service3Bullet1: "Checklist δικαιολογητικών & προθεσμιών",
    service3Bullet2: "Ψηφιακή αρχειοθέτηση, έτοιμη για συμβολαιογράφο",
    service3Bullet3: "Παρακολούθηση εκκρεμοτήτων",
    service3CtaPrimary: "Ξεκίνα τώρα",
    service3CtaSecondary: "Μίλησε με σύμβουλο",
    
    // Service 4: Professional Photography
    service4Title: "Υπηρεσία επαγγελματικής φωτογράφισης",
    service4Body: "Υψηλής ποιότητας φωτογράφιση (και προαιρετικά κάτοψη/staging) για κορυφαία παρουσίαση σε αγγελίες και social.",
    service4Bullet1: "HDR φωτογραφίες & σύντομο βίντεο/REELS",
    service4Bullet2: "Κάτοψη & light virtual staging (προαιρετικά)",
    service4Bullet3: "Βελτιστοποίηση για portals & social media",
    service4CtaPrimary: "Κλείσε ραντεβού",
    service4CtaSecondary: "Μίλησε με σύμβουλο",
    
    // Contact
    contactTitle: "Επικοινωνήστε",
    contactSubtitle: "Έτοιμοι να βρείτε το ιδανικό ακίνητο; Επικοινωνήστε μαζί μας",
    name: "Ονοματεπώνυμο",
    email: "Email",
    message: "Μήνυμα",
    sendMessage: "Αποστολή",
    
    // Footer
    footerTagline: "Ο αξιόπιστος συνεργάτης σας στην αγορά ακινήτων",
    quickLinks: "Γρήγοροι Σύνδεσμοι",
    about: "Σχετικά",
    blog: "Ιστολόγιο",
    careers: "Καριέρα",
    contact: "Επικοινωνία",
    legal: "Νομικά",
    privacy: "Πολιτική Απορρήτου",
    terms: "Όροι Χρήσης",
    copyright: "© 2024 EliteHomes. Με επιφύλαξη παντός δικαιώματος.",
  }
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
