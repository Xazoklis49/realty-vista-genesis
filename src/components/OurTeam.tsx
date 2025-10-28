import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { User, Linkedin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  department: string;
  linkedin?: string;
  avatar?: string;
}

export const OurTeam = () => {
  const { t } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: t('teamMember1Name'),
      role: t('teamMember1Role'),
      tagline: t('teamMember1Tagline'),
      bio: t('teamMember1Bio'),
      department: t('teamMember1Department'),
      linkedin: t('teamMember1LinkedIn'),
    },
    {
      name: t('teamMember2Name'),
      role: t('teamMember2Role'),
      tagline: t('teamMember2Tagline'),
      bio: t('teamMember2Bio'),
      department: t('teamMember2Department'),
      linkedin: t('teamMember2LinkedIn'),
    },
    {
      name: t('teamMember3Name'),
      role: t('teamMember3Role'),
      tagline: t('teamMember3Tagline'),
      bio: t('teamMember3Bio'),
      department: t('teamMember3Department'),
      linkedin: t('teamMember3LinkedIn'),
    },
    {
      name: t('teamMember4Name'),
      role: t('teamMember4Role'),
      tagline: t('teamMember4Tagline'),
      bio: t('teamMember4Bio'),
      department: t('teamMember4Department'),
      linkedin: t('teamMember4LinkedIn'),
    },
    {
      name: t('teamMember5Name'),
      role: t('teamMember5Role'),
      tagline: t('teamMember5Tagline'),
      bio: t('teamMember5Bio'),
      department: t('teamMember5Department'),
      linkedin: t('teamMember5LinkedIn'),
    },
    {
      name: t('teamMember6Name'),
      role: t('teamMember6Role'),
      tagline: t('teamMember6Tagline'),
      bio: t('teamMember6Bio'),
      department: t('teamMember6Department'),
      linkedin: t('teamMember6LinkedIn'),
    },
  ];


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      }
    }
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('teamTitle')}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('teamSubtitle')}
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
        >
          {teamMembers.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                variants={item}
                layout
                className="group relative"
              >
                <motion.div
                  onClick={() => setSelectedMember(member)}
                  className="
                    relative h-full p-8 rounded-2xl cursor-pointer
                    bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl
                    border border-border/50 hover:border-primary/30
                    transition-all duration-500
                    hover:shadow-2xl hover:shadow-primary/10
                  "
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  whileInView={{ 
                    rotateX: 0,
                    rotateY: 0,
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="mb-6 flex justify-center">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Avatar className="w-24 h-24 border-2 border-primary/20 shadow-xl">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/5 text-2xl">
                            <User className="w-12 h-12 text-primary" />
                          </AvatarFallback>
                        </Avatar>
                        {/* Online indicator */}
                        <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card shadow-lg" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                      
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 text-xs font-medium"
                      >
                        {member.role}
                      </Badge>

                      <p className="text-sm text-muted-foreground italic leading-relaxed min-h-[2.5rem]">
                        "{member.tagline}"
                      </p>

                      {/* Social Links */}
                      {member.linkedin && (
                        <div className="flex justify-center pt-4">
                          <motion.a
                            href={member.linkedin}
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Linkedin className="w-4 h-4" />
                          </motion.a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                </motion.div>
              </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bio Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-primary/20">
          <DialogHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 border-2 border-primary/20">
                  <AvatarImage src={selectedMember?.avatar} alt={selectedMember?.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/5">
                    <User className="w-8 h-8 text-primary" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <DialogTitle className="text-2xl mb-1">{selectedMember?.name}</DialogTitle>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {selectedMember?.role}
                  </Badge>
                </div>
              </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-4 pt-4">
            <p className="text-muted-foreground italic">"{selectedMember?.tagline}"</p>
            <p className="text-foreground leading-relaxed">{selectedMember?.bio}</p>
            
            {selectedMember?.linkedin && (
              <div className="pt-4 border-t border-border/50">
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
