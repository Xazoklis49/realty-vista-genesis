import { Property } from "@/pages/Properties";
import { PropertyCard } from "./PropertyCard";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PropertyListProps {
  properties: Property[];
  selectedProperty: string | null;
  onSelectProperty: (id: string) => void;
}

export const PropertyList = ({
  properties,
  selectedProperty,
  onSelectProperty,
}: PropertyListProps) => {
  const { language } = useLanguage();

  return (
    <div className="p-4 space-y-4">
      {/* Header with count and sort */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{properties.length}</span>{" "}
          {language === "en" ? "Available Properties" : "Διαθέσιμα Ακίνητα"}
        </p>
        
        <Select defaultValue="recent">
          <SelectTrigger className="w-[180px] h-9">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">
              {language === "en" ? "Most recent" : "Πιο πρόσφατα"}
            </SelectItem>
            <SelectItem value="price-low">
              {language === "en" ? "Lowest price" : "Χαμηλότερη τιμή"}
            </SelectItem>
            <SelectItem value="price-high">
              {language === "en" ? "Highest price" : "Υψηλότερη τιμή"}
            </SelectItem>
            <SelectItem value="size">
              {language === "en" ? "Largest size" : "Μεγαλύτερο μέγεθος"}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Property Cards */}
      {properties.length > 0 ? (
        <div className="space-y-4">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isSelected={selectedProperty === property.id}
              onClick={() => onSelectProperty(property.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {language === "en"
              ? "No properties found. Try adjusting your filters."
              : "Δεν βρέθηκαν ακίνητα. Δοκιμάστε να προσαρμόσετε τα φίλτρα σας."}
          </p>
        </div>
      )}
    </div>
  );
};
