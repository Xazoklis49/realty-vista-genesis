import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Modern Luxury Apartment",
    location: "Downtown Manhattan, NY",
    price: "$2,850,000",
    beds: 3,
    baths: 2,
    sqft: "2,400",
    badge: "New Listing",
    badgeVariant: "default" as const,
  },
  {
    id: 2,
    image: property2,
    title: "Contemporary Family Home",
    location: "Beverly Hills, CA",
    price: "$4,200,000",
    beds: 5,
    baths: 4,
    sqft: "4,800",
    badge: "Featured",
    badgeVariant: "secondary" as const,
  },
  {
    id: 3,
    image: property3,
    title: "Penthouse Suite",
    location: "Miami Beach, FL",
    price: "$6,500,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    badge: "Luxury",
    badgeVariant: "destructive" as const,
  },
];

export const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties, each offering 
            unique luxury and exceptional value in prime locations.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <Card 
              key={property.id} 
              className="group overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge 
                  variant={property.badgeVariant}
                  className="absolute top-4 left-4"
                >
                  {property.badge}
                </Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-bold text-primary">{property.price}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Details
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="luxury" size="lg" className="px-8">
            View All Properties
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};