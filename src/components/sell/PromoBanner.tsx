import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { X, Sparkles } from "lucide-react";
import { useState } from "react";

export const PromoBanner = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-luxury text-luxury-foreground py-3 px-4 relative z-50">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1">
          <Sparkles className="h-5 w-5 flex-shrink-0" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <p className="font-semibold text-sm">
              {t('promoBannerText')}
            </p>
            <span className="text-xs opacity-90">
              {t('promoBannerRegion')}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-luxury-foreground text-luxury-foreground hover:bg-luxury-foreground/10 hidden sm:inline-flex"
          >
            {t('promoBannerCta')}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-luxury-foreground/10"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
