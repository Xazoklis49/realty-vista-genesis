import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const ExpertsBlock = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('expertsTitle')}
            </h2>
            <p className="text-muted-foreground">
              {t('expertsSubtitle')}
            </p>
          </div>

          <Card className="shadow-card border-border bg-gradient-card">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="h-32 w-32">
                  <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                    MP
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">
                    {t('teamMember1Name')}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {t('teamMember1Role')}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {t('teamMember1Bio')}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Button variant="hero" className="gap-2">
                      <Phone className="h-4 w-4" />
                      {t('requestCall')}
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Mail className="h-4 w-4" />
                      {t('sendMessage')}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
