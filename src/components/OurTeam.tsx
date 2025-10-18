import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export const OurTeam = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: t('teamMember1Name'),
      role: t('teamMember1Role'),
      bio: t('teamMember1Bio'),
    },
    {
      name: t('teamMember2Name'),
      role: t('teamMember2Role'),
      bio: t('teamMember2Bio'),
    },
    {
      name: t('teamMember3Name'),
      role: t('teamMember3Role'),
      bio: t('teamMember3Bio'),
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            {t('teamTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('teamSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 bg-gradient-to-br from-card to-card/50"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
