import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import serviceLegalCheck from "@/assets/service-legal-check.jpg";
import serviceDocumentFolder from "@/assets/service-document-folder.jpg";
import serviceValuation from "@/assets/service-valuation.jpg";
import servicePhotography from "@/assets/service-photography.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const services = [
  {
    id: "legal-technical-check",
    title: "Νομικός & Τεχνικός έλεγχος",
    description: "Ελέγχουμε τίτλους, τυχόν βάρη/εκκρεμότητες και την τεχνική/πολεοδομική κατάσταση, ώστε να γνωρίζεις ακριβώς τι αποκτάς.",
    features: [
      "Έλεγχος τίτλων & βαρών (κτηματολόγιο/υποθηκοφυλακείο)",
      "Πολεοδομική συμμόρφωση & αυθαιρεσίες",
      "Σαφής αναφορά ευρημάτων & κινδύνων"
    ],
    image: serviceLegalCheck,
    primaryCta: "Ξεκίνα τώρα",
    secondaryCta: "Μίλησε με σύμβουλο"
  },
  {
    id: "property-folder",
    title: "Σύσταση φακέλου ακινήτου",
    description: "Συγκεντρώνουμε και οργανώνουμε όλα τα έγγραφα (τίτλοι, Ε9, τακτοποιήσεις, Ενεργειακά Πιστοποιητικά κ.ά.) για γρήγορη και ασφαλή υπογραφή.",
    features: [
      "Checklist δικαιολογητικών & προθεσμιών",
      "Ψηφιακή αρχειοθέτηση, έτοιμη για συμβολαιογράφο",
      "Παρακολούθηση εκκρεμοτήτων"
    ],
    image: serviceDocumentFolder,
    primaryCta: "Ξεκίνα τώρα",
    secondaryCta: "Μίλησε με σύμβουλο"
  },
  {
    id: "valuation-report",
    title: "Έκθεση εκτίμησης ακινήτου",
    description: "Παρέχουμε τεκμηριωμένη αποτίμηση με συγκριτικά αγοράς και ανάλυση ζήτησης, για δίκαιη και ρεαλιστική τιμή.",
    features: [
      "Συγκριτικά real-time & ιστορικά δεδομένα",
      "Ανάλυση περιοχής, ζήτησης & αποδόσεων",
      "Διαφανής μεθοδολογία αποτίμησης"
    ],
    image: serviceValuation,
    primaryCta: "Ζήτησε εκτίμηση",
    secondaryCta: "Μίλησε με σύμβουλο"
  },
  {
    id: "professional-photography",
    title: "Υπηρεσία επαγγελματικής φωτογράφισης",
    description: "Υψηλής ποιότητας φωτογράφιση (και προαιρετικά κάτοψη/staging) για κορυφαία παρουσίαση σε αγγελίες και social.",
    features: [
      "HDR φωτογραφίες & σύντομο βίντεο/REELS",
      "Κάτοψη & light virtual staging (προαιρετικά)",
      "Βελτιστοποίηση για portals & social media"
    ],
    image: servicePhotography,
    primaryCta: "Κλείσε ραντεβού",
    secondaryCta: "Μίλησε με σύμβουλο"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
            Δίπλα σου σε κάθε βήμα
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Εξασφαλίζουμε ομαλή και διαφανή διαδικασία, από τον έλεγχο μέχρι την ολοκλήρωση της συναλλαγής—χωρίς άγχος.
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Νομικός, τεχνικός και εμπορικός συντονισμός από ένα σημείο.
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
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-luxury flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    {service.primaryCta}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    {service.secondaryCta}
                  </Button>
                </div>
              </div>

              {/* Media Block */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} animate-scale-in`} style={{ animationDelay: "0.2s" }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto rounded-xl shadow-card object-cover aspect-video"
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
            Έτοιμος να ξεκινήσεις; Ζήτησε μια προσαρμοσμένη προσφορά σήμερα.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Ζήτησε προσφορά
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
