import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Moon, Sun, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { ServicesDropdown } from "@/components/ServicesDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSubmitProperty = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" aria-label={t('homeLink') || 'Home'}>
            <Home className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold text-foreground">Proper Land</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
            <Link 
              to="/properties" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              aria-current={location.pathname === '/properties' ? 'page' : undefined}
            >
              {t('browseProperties')}
            </Link>
            <ServicesDropdown />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none">
                {t('tools')}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[400px] p-4 rounded-2xl border border-border/20 bg-background/95 backdrop-blur-lg shadow-lg"
                align="start"
                sideOffset={8}
              >
                <Link 
                  to="/tools" 
                  className="block rounded-xl border border-border/20 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 hover:bg-accent/50"
                >
                  <div className="text-sm font-medium leading-none mb-2 hover:text-primary transition-colors">
                    {t('buyVsRentCalculator')}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {t('buyVsRentCalculatorDescription')}
                  </p>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link 
              to="/our-team"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              aria-current={location.pathname === '/our-team' ? 'page' : undefined}
            >
              {t('ourTeamNav')}
            </Link>
            
            <Separator orientation="vertical" className="h-6" />
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'gr' : 'en')}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-label={t('switchLanguage') || 'Switch language'}
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
              aria-label={theme === 'dark' ? t('switchToLight') || 'Switch to light mode' : t('switchToDark') || 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Button variant="default" size="sm" className="ml-2" onClick={handleSubmitProperty}>
              {t('submitProperty')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label={isMenuOpen ? t('closeMenu') || 'Close menu' : t('openMenu') || 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
              <Link 
                to="/properties" 
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
                aria-current={location.pathname === '/properties' ? 'page' : undefined}
              >
                {t('browseProperties')}
              </Link>
              <div className="py-2">
                <ServicesDropdown />
              </div>
              <Link 
                to="/tools" 
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
                aria-current={location.pathname === '/tools' ? 'page' : undefined}
              >
                {t('toolsNav')}
              </Link>
              <Link 
                to="/our-team"
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
                aria-current={location.pathname === '/our-team' ? 'page' : undefined}
              >
                {t('ourTeamNav')}
              </Link>

              <Separator className="my-2" />

              <div className="flex items-center justify-between py-2">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'gr' : 'en')}
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground"
                  aria-label={t('switchLanguage') || 'Switch language'}
                >
                  <span className={language === 'gr' ? 'text-foreground font-semibold' : ''}>GR</span>
                  <span>/</span>
                  <span className={language === 'en' ? 'text-foreground font-semibold' : ''}>EN</span>
                </button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label={theme === 'dark' ? t('switchToLight') || 'Switch to light mode' : t('switchToDark') || 'Switch to dark mode'}
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>

              <Button variant="default" size="sm" className="w-full mt-2" onClick={() => { handleSubmitProperty(); toggleMenu(); }}>
                {t('submitProperty')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};