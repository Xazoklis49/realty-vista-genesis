import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SlidersHorizontal, Bookmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
export const PropertyFilters = () => {
  const {
    language
  } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);
  return <div className="space-y-4">
      <div className="flex items-center gap-2 flex-wrap">
        <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          {language === "en" ? "Search filters" : "Φίλτρα αναζήτησης"}
        </Button>

        <Select>
          <SelectTrigger className="w-[180px] h-9">
            <SelectValue placeholder={language === "en" ? "Property Type" : "Τύπος"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apartment">
              {language === "en" ? "Apartment" : "Διαμέρισμα"}
            </SelectItem>
            <SelectItem value="house">
              {language === "en" ? "House" : "Σπίτι"}
            </SelectItem>
            <SelectItem value="villa">
              {language === "en" ? "Villa" : "Βίλα"}
            </SelectItem>
            <SelectItem value="studio">
              {language === "en" ? "Studio" : "Στούντιο"}
            </SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[160px] h-9">
            <SelectValue placeholder={language === "en" ? "Price" : "Τιμή"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-200000">€0 - €200,000</SelectItem>
            <SelectItem value="200000-500000">€200,000 - €500,000</SelectItem>
            <SelectItem value="500000-1000000">€500,000 - €1M</SelectItem>
            <SelectItem value="1000000+">€1M+</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[140px] h-9">
            <SelectValue placeholder={language === "en" ? "Beds" : "Κρεβάτια"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[140px] h-9">
            <SelectValue placeholder={language === "en" ? "Baths" : "Μπάνια"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
          </SelectContent>
        </Select>

        
      </div>

      {showFilters && <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg animate-accordion-down">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={language === "en" ? "Size (m²)" : "Μέγεθος (m²)"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50">0-50 m²</SelectItem>
              <SelectItem value="50-100">50-100 m²</SelectItem>
              <SelectItem value="100-200">100-200 m²</SelectItem>
              <SelectItem value="200+">200+ m²</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder={language === "en" ? "Year" : "Έτος"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2020+">2020+</SelectItem>
              <SelectItem value="2010-2020">2010-2020</SelectItem>
              <SelectItem value="2000-2010">2000-2010</SelectItem>
              <SelectItem value="pre-2000">{language === "en" ? "Before 2000" : "Πριν το 2000"}</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder={language === "en" ? "Floor" : "Όροφος"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">{language === "en" ? "Ground" : "Ισόγειο"}</SelectItem>
              <SelectItem value="1-3">1-3</SelectItem>
              <SelectItem value="4-6">4-6</SelectItem>
              <SelectItem value="7+">7+</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder={language === "en" ? "Features" : "Χαρακτηριστικά"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="parking">{language === "en" ? "Parking" : "Πάρκινγκ"}</SelectItem>
              <SelectItem value="balcony">{language === "en" ? "Balcony" : "Μπαλκόνι"}</SelectItem>
              <SelectItem value="garden">{language === "en" ? "Garden" : "Κήπος"}</SelectItem>
              <SelectItem value="pool">{language === "en" ? "Pool" : "Πισίνα"}</SelectItem>
            </SelectContent>
          </Select>
        </div>}
    </div>;
};