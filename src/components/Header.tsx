import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Phone, Moon, Sun, Upload } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("buy");
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">EliteHomes</span>
          </div>

          {/* Desktop Navigation - Property Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="hidden md:block">
            <TabsList className="bg-background/50 border border-border">
              <TabsTrigger value="buy" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {t('buyProperty')}
              </TabsTrigger>
              <TabsTrigger value="sell" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {t('sellProperty')}
              </TabsTrigger>
              <TabsTrigger value="rent" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {t('rentProperty')}
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'gr' : 'en')}
              className="font-medium"
            >
              {language === 'en' ? 'ΕΛ' : 'EN'}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              {t('callNow')}
            </Button>
            
            <Button variant="luxury" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              {t('submitProperty')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <nav className="flex flex-col space-y-4">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="buy">{t('buyProperty')}</TabsTrigger>
                  <TabsTrigger value="sell">{t('sellProperty')}</TabsTrigger>
                  <TabsTrigger value="rent">{t('rentProperty')}</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex items-center justify-between pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === 'en' ? 'gr' : 'en')}
                  className="font-medium"
                >
                  {language === 'en' ? 'ΕΛ' : 'EN'}
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>

              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  {t('callNow')}
                </Button>
                <Button variant="luxury" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  {t('submitProperty')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};