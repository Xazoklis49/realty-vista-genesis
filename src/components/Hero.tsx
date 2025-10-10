import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroProperty from "@/assets/hero-property.jpg";

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroProperty})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-16">
        <div className="max-w-3xl text-white animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-luxury/20 border border-luxury/30 backdrop-blur-sm mb-6">
            <TrendingUp className="h-4 w-4 mr-2 text-luxury" />
            <span className="text-sm font-medium">Premium Real Estate Innovation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Discover Your
            <span className="block text-luxury">Dream Home</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Experience the future of real estate with our cutting-edge technology, 
            personalized service, and exclusive access to premium properties.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-luxury">500+</div>
              <div className="text-sm text-white/80">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-luxury">98%</div>
              <div className="text-sm text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-luxury">$2B+</div>
              <div className="text-sm text-white/80">Total Sales Volume</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" variant="luxury" className="text-lg px-8 py-6">
              {t('exploreProperties')}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
              <Play className="h-5 w-5 mr-2" />
              Watch Our Story
            </Button>
          </div>

          {/* Location Indicator */}
          <div className="flex items-center text-white/80">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">Serving Premium Locations Nationwide</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};