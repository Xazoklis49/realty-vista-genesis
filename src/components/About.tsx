import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, TrendingUp, ArrowRight } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Expert Agents",
    description: "Certified professionals"
  },
  {
    icon: Award,
    number: "15",
    label: "Years Experience",
    description: "Industry leadership"
  },
  {
    icon: TrendingUp,
    number: "$2B+",
    label: "Sales Volume",
    description: "Successful transactions"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <Badge variant="outline" className="mb-6">
              About EliteHomes
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Redefining Real Estate
              <span className="block text-primary">Excellence</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At EliteHomes, we're not just selling properties – we're crafting dreams 
              and building futures. Our innovative approach combines cutting-edge technology 
              with deep market expertise and unwavering commitment to client success.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-luxury rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Technology-First Approach</h4>
                  <p className="text-muted-foreground">Leveraging AI and data analytics for smarter decisions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-luxury rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Personalized Service</h4>
                  <p className="text-muted-foreground">Tailored solutions for every client's unique needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-luxury rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Market Leadership</h4>
                  <p className="text-muted-foreground">Setting industry standards for excellence and innovation</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="px-8">
              Learn More About Us
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-scale-in">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <div className="grid grid-cols-1 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mr-6">
                      <stat.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                      <div className="text-lg font-semibold text-primary">{stat.label}</div>
                      <div className="text-sm text-muted-foreground">{stat.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-luxury/10 rounded-xl border border-luxury/20">
                <h4 className="font-semibold text-foreground mb-2">Award-Winning Excellence</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Recognized as the top real estate agency for innovation and client satisfaction three years running.
                </p>
                <div className="flex items-center text-luxury">
                  <Award className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Industry Leader 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};