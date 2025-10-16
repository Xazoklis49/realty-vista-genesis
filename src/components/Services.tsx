import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  DollarSign, 
  Users, 
  Smartphone, 
  PieChart, 
  Shield,
  CheckCircle 
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "AI-Powered Property Search",
    description: "Our advanced AI algorithms match you with properties that perfectly fit your lifestyle and investment goals.",
    features: ["Smart recommendations", "Predictive analytics", "Market insights"]
  },
  {
    icon: DollarSign,
    title: "Investment Advisory",
    description: "Expert guidance on real estate investments with comprehensive market analysis and ROI projections.",
    features: ["Portfolio optimization", "Risk assessment", "Market forecasting"]
  },
  {
    icon: Users,
    title: "Concierge Service",
    description: "White-glove service from initial consultation to closing, with dedicated support every step of the way.",
    features: ["Personal agent", "24/7 support", "Closing assistance"]
  },
  {
    icon: Smartphone,
    title: "Virtual Tours & AR",
    description: "Experience properties remotely with our cutting-edge virtual reality and augmented reality technology.",
    features: ["3D walkthroughs", "AR staging", "Remote viewing"]
  },
  {
    icon: PieChart,
    title: "Market Analytics",
    description: "Data-driven insights and comprehensive market reports to inform your real estate decisions.",
    features: ["Trend analysis", "Price predictions", "Neighborhood data"]
  },
  {
    icon: Shield,
    title: "Legal Support",
    description: "Complete legal assistance including contract review and due diligence support.",
    features: ["Legal review", "Contract assistance", "Due diligence"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Innovative Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge technology with personalized service to deliver 
            an unparalleled real estate experience that exceeds expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-luxury mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};