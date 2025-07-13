import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Phone } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-foreground hover:text-primary transition-colors">
              Properties
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button variant="luxury" size="sm">
              Get Started
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
              <a
                href="#properties"
                onClick={toggleMenu}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Properties
              </a>
              <a
                href="#services"
                onClick={toggleMenu}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={toggleMenu}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="luxury" size="sm">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};