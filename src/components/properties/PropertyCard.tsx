import { Property } from "@/pages/Properties";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Bed, Bath, Maximize2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface PropertyCardProps {
  property: Property;
  isSelected: boolean;
  onClick: () => void;
}

export const PropertyCard = ({ property, isSelected, onClick }: PropertyCardProps) => {
  const { language } = useLanguage();

  const formatPrice = (price: number) => {
    if (property.listingType === "rent") {
      return `€${price.toLocaleString()}/mo`;
    }
    return `€${price.toLocaleString()}`;
  };

  return (
    <Card
      className={`overflow-hidden cursor-pointer transition-all hover:shadow-elegant ${
        isSelected ? "ring-2 ring-primary" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative sm:w-64 h-48 sm:h-auto flex-shrink-0">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={(e) => {
              e.stopPropagation();
              // Handle favorite
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Badge className="absolute bottom-2 left-2 bg-primary text-primary-foreground">
            {property.listingType === "buy"
              ? language === "en"
                ? "For Sale"
                : "Πώληση"
              : language === "en"
              ? "For Rent"
              : "Ενοικίαση"}
          </Badge>
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-1">
                {property.title}
              </h3>
              <p className="text-sm text-muted-foreground">{property.location}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-primary">{formatPrice(property.price)}</p>
            </div>
          </div>

          {/* Property Details */}
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Maximize2 className="h-4 w-4" />
              <span>{property.size} m²</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Bed className="h-4 w-4" />
              <span>{property.beds} {language === "en" ? "beds" : "κρεβάτια"}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Bath className="h-4 w-4" />
              <span>{property.baths} {language === "en" ? "baths" : "μπάνια"}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{property.year}</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mt-3">
            {property.features.slice(0, 3).map((feature) => (
              <Badge key={feature} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
