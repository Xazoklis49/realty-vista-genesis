import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PropertyFilters } from "@/components/properties/PropertyFilters";
import { PropertyList } from "@/components/properties/PropertyList";
import { PropertyMap } from "@/components/properties/PropertyMap";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export type ListingType = "buy" | "rent";

export interface Property {
  id: string;
  title: string;
  price: number;
  listingType: ListingType;
  location: string;
  size: number;
  beds: number;
  baths: number;
  floor: number;
  year: number;
  image: string;
  lat: number;
  lng: number;
  features: string[];
}

// Mock data
const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment in Athens Center",
    price: 350000,
    listingType: "buy",
    location: "Athens, Kolonaki",
    size: 120,
    beds: 3,
    baths: 2,
    floor: 4,
    year: 2020,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    lat: 37.9838,
    lng: 23.7275,
    features: ["parking", "balcony", "ac"]
  },
  {
    id: "2",
    title: "Luxury Villa with Sea View",
    price: 1200000,
    listingType: "buy",
    location: "Athens, Glyfada",
    size: 280,
    beds: 5,
    baths: 4,
    floor: 0,
    year: 2022,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    lat: 37.8651,
    lng: 23.7545,
    features: ["pool", "garden", "parking", "ac"]
  },
  {
    id: "3",
    title: "Cozy Studio Apartment",
    price: 800,
    listingType: "rent",
    location: "Athens, Exarchia",
    size: 45,
    beds: 1,
    baths: 1,
    floor: 2,
    year: 2015,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    lat: 37.9886,
    lng: 23.7339,
    features: ["furnished", "ac"]
  },
  {
    id: "4",
    title: "Family Home in Kifisia",
    price: 850000,
    listingType: "buy",
    location: "Athens, Kifisia",
    size: 200,
    beds: 4,
    baths: 3,
    floor: 0,
    year: 2018,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
    lat: 38.0747,
    lng: 23.8111,
    features: ["garden", "parking", "fireplace"]
  },
  {
    id: "5",
    title: "Modern Loft for Rent",
    price: 1500,
    listingType: "rent",
    location: "Athens, Psirri",
    size: 90,
    beds: 2,
    baths: 1,
    floor: 3,
    year: 2021,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    lat: 37.9762,
    lng: 23.7233,
    features: ["furnished", "balcony", "ac"]
  },
];

const Properties = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { language, t } = useLanguage();
  const [listingType, setListingType] = useState<ListingType>(
    (searchParams.get("type") as ListingType) || "buy"
  );
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(mockProperties);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("type", listingType);
    if (searchQuery) {
      params.set("q", searchQuery);
    } else {
      params.delete("q");
    }
    setSearchParams(params);
  }, [listingType, searchQuery]);

  useEffect(() => {
    let filtered = mockProperties.filter((p) => p.listingType === listingType);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.location.toLowerCase().includes(query) ||
          p.title.toLowerCase().includes(query) ||
          p.id.includes(query)
      );
    }
    
    setFilteredProperties(filtered);
  }, [listingType, searchQuery]);

  const handleToggle = (type: ListingType) => {
    setListingType(type);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <html lang={language === 'gr' ? 'el' : 'en'} />
        <title>{t('browseProperties')} | Proper Land</title>
        <meta name="description" content={t('featuredSubtitle')} />
        <link rel="canonical" href={`https://properland.gr/properties${location.search}`} />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Header Section */}
        <div className="border-b border-border bg-background">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  {language === "en" ? "Find your ideal property" : "Βρείτε το ιδανικό σας ακίνητο"}
                </h1>
                
                {/* Buy/Rent Toggle */}
                <div className="flex bg-muted rounded-lg p-1">
                  <button
                    onClick={() => handleToggle("buy")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      listingType === "buy"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {language === "en" ? "Buy" : "Αγορά"}
                  </button>
                  <button
                    onClick={() => handleToggle("rent")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      listingType === "rent"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {language === "en" ? "Rent" : "Ενοικίαση"}
                  </button>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={
                  language === "en"
                    ? "Search area, address or property code"
                    : "Αναζήτηση περιοχής, διεύθυνσης ή κωδικού ακινήτου"
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <PropertyFilters />
          </div>
        </div>

        {/* Results Section */}
        <div className="flex flex-col lg:flex-row h-[calc(100vh-280px)]">
          {/* Property List */}
          <div className="lg:w-[45%] overflow-y-auto">
            <PropertyList
              properties={filteredProperties}
              selectedProperty={selectedProperty}
              onSelectProperty={setSelectedProperty}
            />
          </div>

          {/* Map */}
          <div className="lg:w-[55%] sticky top-16 h-full">
            <PropertyMap
              properties={filteredProperties}
              selectedProperty={selectedProperty}
              onSelectProperty={setSelectedProperty}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
