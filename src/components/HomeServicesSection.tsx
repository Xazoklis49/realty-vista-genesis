import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { LeadModal } from "@/components/LeadModal";
import legalCheckImg from "@/assets/service-legal-check.jpg";
import valuationImg from "@/assets/service-valuation.jpg";
import dossierImg from "@/assets/service-document-folder.jpg";
import photographyImg from "@/assets/service-photography.jpg";
interface ServiceBlock {
  id: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  ctaPrimary: string;
  ctaSecondary: string;
}
const services: ServiceBlock[] = [{
  id: "legal-technical-check",
  title: "Νομικός & Τεχνικός έλεγχος",
  body: "Ελέγχουμε τίτλους, τυχόν βάρη/εκκρεμότητες και την τεχνική/πολεοδομική κατάσταση, ώστε να γνωρίζεις ακριβώς τι αποκτάς.",
  bullets: ["Έλεγχος τίτλων & βαρών (κτηματολόγιο/υποθηκοφυλακείο)", "Πολεοδομική συμμόρφωση & αυθαιρεσίες", "Σαφής αναφορά ευρημάτων & κινδύνων"],
  image: legalCheckImg,
  imageAlt: "Νομικός και τεχνικός έλεγχος ακινήτου",
  ctaPrimary: "Ξεκίνα τώρα",
  ctaSecondary: "Μίλησε με σύμβουλο"
}, {
  id: "valuation-report",
  title: "Έκθεση εκτίμησης ακινήτου",
  body: "Παρέχουμε τεκμηριωμένη αποτίμηση με συγκριτικά αγοράς και ανάλυση ζήτησης, για δίκαιη και ρεαλιστική τιμή.",
  bullets: ["Συγκριτικά real-time & ιστορικά δεδομένα", "Ανάλυση περιοχής, ζήτησης & αποδόσεων", "Διαφανής μεθοδολογία αποτίμησης"],
  image: valuationImg,
  imageAlt: "Έκθεση εκτίμησης ακινήτου",
  ctaPrimary: "Ζήτησε εκτίμηση",
  ctaSecondary: "Μίλησε με σύμβουλο"
}, {
  id: "property-dossier",
  title: "Σύσταση φακέλου ακινήτου",
  body: "Συγκεντρώνουμε και οργανώνουμε όλα τα έγγραφα (τίτλοι, Ε9, τακτοποιήσεις, ΠΕΑ κ.ά.) για γρήγορη και ασφαλή υπογραφή.",
  bullets: ["Checklist δικαιολογητικών & προθεσμιών", "Ψηφιακή αρχειοθέτηση, έτοιμη για συμβολαιογράφο", "Παρακολούθηση εκκρεμοτήτων"],
  image: dossierImg,
  imageAlt: "Σύσταση φακέλου ακινήτου",
  ctaPrimary: "Ξεκίνα τώρα",
  ctaSecondary: "Μίλησε με σύμβουλο"
}, {
  id: "pro-photography",
  title: "Υπηρεσία επαγγελματικής φωτογράφισης",
  body: "Υψηλής ποιότητας φωτογράφιση (και προαιρετικά κάτοψη/staging) για κορυφαία παρουσίαση σε αγγελίες και social.",
  bullets: ["HDR φωτογραφίες & σύντομο βίντεο/REELS", "Κάτοψη & light virtual staging (προαιρετικά)", "Βελτιστοποίηση για portals & social media"],
  image: photographyImg,
  imageAlt: "Επαγγελματική φωτογράφιση ακινήτου",
  ctaPrimary: "Κλείσε ραντεβού",
  ctaSecondary: "Μίλησε με σύμβουλο"
}];
export const HomeServicesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();
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
              Δίπλα σου σε κάθε βήμα
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-2">
              Εξασφαλίζουμε ομαλή και διαφανή διαδικασία, από τον έλεγχο μέχρι την ολοκλήρωση της συναλλαγής—χωρίς άγχος.
            </p>
            <p className="text-sm text-muted-foreground">
              Νομικός, τεχνικός και εμπορικός συντονισμός από ένα σημείο.
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
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.body}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.bullets.map((bullet, i) => <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{bullet}</span>
                          </li>)}
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        <Button onClick={() => handlePrimaryCTA(service.title)} size="lg">
                          {service.ctaPrimary}
                        </Button>
                        <Button onClick={handleSecondaryCTA} variant="outline" size="lg">
                          {service.ctaSecondary}
                        </Button>
                      </div>
                    </div>

                    {/* Image Block */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <img src={service.image} alt={service.imageAlt} loading="lazy" className="w-full h-full object-cover rounded-xl aspect-video" />
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