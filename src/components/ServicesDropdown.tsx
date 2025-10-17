import { ChevronDown, Scale, FileText, FolderOpen, Camera } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  {
    id: "legal-technical-check",
    icon: Scale,
    title: "Νομικός & Τεχνικός έλεγχος",
    subline: "Έλεγχος τίτλων, βαρών, πολεοδομίας",
  },
  {
    id: "valuation-report",
    icon: FileText,
    title: "Έκθεση εκτίμησης ακινήτου",
    subline: "Συγκριτικά αγοράς & ζήτηση",
  },
  {
    id: "property-dossier",
    icon: FolderOpen,
    title: "Σύσταση φακέλου ακινήτου",
    subline: "Έγγραφα, τακτοποιήσεις, ΠΕΑ",
  },
  {
    id: "pro-photography",
    icon: Camera,
    title: "Υπηρεσία επαγγελματικής φωτογράφισης",
    subline: "HDR, κάτοψη, staging",
  },
];

export const ServicesDropdown = () => {
  const handleServiceClick = (id: string) => {
    const targetUrl = `/#${id}`;
    
    // If already on homepage, smooth scroll
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", targetUrl);
      }
    } else {
      // Navigate to homepage with anchor
      window.location.href = targetUrl;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none">
        Όλες οι υπηρεσίες
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[640px] p-4 rounded-2xl border border-border/20 bg-background/95 backdrop-blur-lg shadow-lg"
        align="start"
        sideOffset={8}
      >
        <div className="grid grid-cols-2 gap-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="group rounded-xl border border-border/20 p-4 text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 hover:bg-accent/50"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {service.subline}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
