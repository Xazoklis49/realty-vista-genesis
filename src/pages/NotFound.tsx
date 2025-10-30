import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4 animate-fade-up">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">{t('pageNotFound')}</p>
        <p className="text-base text-muted-foreground/80 mb-8 max-w-md mx-auto">{t('pageNotFoundDesc')}</p>
        <Link to="/">
          <Button size="lg" className="gap-2">
            <Home className="h-4 w-4" />
            {t('returnHome')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
