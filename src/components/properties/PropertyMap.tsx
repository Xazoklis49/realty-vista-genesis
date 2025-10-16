import { Property } from "@/pages/Properties";
import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

interface PropertyMapProps {
  properties: Property[];
  selectedProperty: string | null;
  onSelectProperty: (id: string) => void;
}

export const PropertyMap = ({
  properties,
  selectedProperty,
  onSelectProperty,
}: PropertyMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  // This is a placeholder for map integration
  // In a real implementation, you would use a library like Mapbox, Google Maps, or Leaflet
  
  useEffect(() => {
    // Initialize map here
    console.log("Map initialized with properties:", properties);
  }, [properties]);

  return (
    <div ref={mapRef} className="relative w-full h-full bg-muted">
      {/* Map Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            Map view with {properties.length} properties
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Integrate with Mapbox, Google Maps, or Leaflet
          </p>
        </div>
      </div>

      {/* Overlay markers for visualization */}
      <div className="absolute inset-0 pointer-events-none">
        {properties.map((property, index) => (
          <div
            key={property.id}
            className="absolute"
            style={{
              left: `${20 + (index % 3) * 30}%`,
              top: `${20 + Math.floor(index / 3) * 20}%`,
            }}
          >
            <div
              className={`pointer-events-auto cursor-pointer bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg transition-all hover:scale-110 ${
                selectedProperty === property.id ? "scale-125 ring-2 ring-primary-foreground" : ""
              }`}
              onClick={() => onSelectProperty(property.id)}
            >
              €{property.price.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
