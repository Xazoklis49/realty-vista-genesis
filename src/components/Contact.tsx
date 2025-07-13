import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle 
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["123 Elite Avenue", "New York, NY 10001"],
    action: "Get Directions"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "24/7 Support Available"],
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@elitehomes.com", "Quick Response Guaranteed"],
    action: "Send Email"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 8AM-8PM", "Sat-Sun: 9AM-6PM"],
    action: "Schedule Meeting"
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to find your dream property or need expert real estate advice? 
            Our team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-up">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground">
                Whether you're buying, selling, or investing, we're here to provide 
                expert guidance and personalized solutions for all your real estate needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="group bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="bg-gradient-card border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-foreground">Send us a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your real estate needs..."
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};