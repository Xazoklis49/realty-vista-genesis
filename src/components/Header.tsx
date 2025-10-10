import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Moon, Sun, Upload, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Home className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground">EliteHomes</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {t('buyProperty')}
            </button>
            <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {t('sellProperty')}
            </button>
            <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {t('rentProperty')}
            </button>
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
              {t('allServices')}
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <Separator orientation="vertical" className="h-6" />
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'gr' : 'en')}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className={language === 'gr' ? 'text-foreground font-semibold' : ''}>GR</span>
              <span className="text-muted-foreground">/</span>
              <span className={language === 'en' ? 'text-foreground font-semibold' : ''}>EN</span>
            </button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-9 w-9"
            >
              <Moon className="h-4 w-4" />
            </Button>

            <Button variant="default" size="sm" className="ml-2">
              {t('submitProperty')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <button className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                {t('buyProperty')}
              </button>
              <button className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                {t('sellProperty')}
              </button>
              <button className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                {t('rentProperty')}
              </button>
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                {t('allServices')}
                <ChevronDown className="h-4 w-4" />
              </button>

              <Separator className="my-2" />

              <div className="flex items-center justify-between py-2">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'gr' : 'en')}
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground"
                >
                  <span className={language === 'gr' ? 'text-foreground font-semibold' : ''}>GR</span>
                  <span>/</span>
                  <span className={language === 'en' ? 'text-foreground font-semibold' : ''}>EN</span>
                </button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  <Moon className="h-4 w-4" />
                </Button>
              </div>

              <Button variant="default" size="sm" className="w-full mt-2">
                {t('submitProperty')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};