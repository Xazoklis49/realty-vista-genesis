import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Moon, Sun, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">EliteHomes</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#buy" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('buyProperty')}
            </a>
            <a href="#sell" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('sellProperty')}
            </a>
            <a href="#rent" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('rentProperty')}
            </a>
            <Button variant="outline" size="sm" className="ml-4">
              {t('submitProperty')}
            </Button>
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  {language === 'en' ? 'EN' : 'ΕΛ'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover">
                <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('gr')} className="cursor-pointer">
                  Ελληνικά
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
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
          <div className="lg:hidden py-4 border-t border-border animate-fade-up">
            <nav className="flex flex-col space-y-4">
              <a
                href="#buy"
                onClick={toggleMenu}
                className="text-foreground hover:text-primary transition-colors py-2 font-medium"
              >
                {t('buyProperty')}
              </a>
              <a
                href="#sell"
                onClick={toggleMenu}
                className="text-foreground hover:text-primary transition-colors py-2 font-medium"
              >
                {t('sellProperty')}
              </a>
              <a
                href="#rent"
                onClick={toggleMenu}
                className="text-foreground hover:text-primary transition-colors py-2 font-medium"
              >
                {t('rentProperty')}
              </a>
              <Button variant="outline" size="sm" onClick={toggleMenu}>
                {t('submitProperty')}
              </Button>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Globe className="h-4 w-4" />
                      {language === 'en' ? 'EN' : 'ΕΛ'}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-popover">
                    <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer">
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage('gr')} className="cursor-pointer">
                      Ελληνικά
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};