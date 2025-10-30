import { Home, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
const footerLinks = {
  company: [{
    label: "About Us",
    href: "#about"
  }, {
    label: "Our Team",
    href: "#team"
  }, {
    label: "Careers",
    href: "#careers"
  }, {
    label: "Press",
    href: "#press"
  }],
  services: [{
    label: "Buy Properties",
    href: "#buy"
  }, {
    label: "Sell Properties",
    href: "#sell"
  }, {
    label: "Rent Properties",
    href: "#rent"
  }, {
    label: "Investment Advisory",
    href: "#invest"
  }],
  resources: [{
    label: "Market Reports",
    href: "#reports"
  }, {
    label: "Property Valuation",
    href: "#valuation"
  }, {
    label: "Mortgage Calculator",
    href: "#calculator"
  }, {
    label: "Neighborhood Guide",
    href: "#guide"
  }],
  legal: [{
    label: "Privacy Policy",
    href: "#privacy"
  }, {
    label: "Terms of Service",
    href: "#terms"
  }, {
    label: "Cookie Policy",
    href: "#cookies"
  }, {
    label: "Disclaimer",
    href: "#disclaimer"
  }]
};
const socialLinks = [{
  icon: Facebook,
  href: "#",
  label: "Facebook"
}, {
  icon: Twitter,
  href: "#",
  label: "Twitter"
}, {
  icon: Instagram,
  href: "#",
  label: "Instagram"
}, {
  icon: Linkedin,
  href: "#",
  label: "LinkedIn"
}];
export const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Home className="h-8 w-8 text-luxury" />
                <span className="text-2xl font-bold">EliteHomes</span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Your trusted partner in real estate excellence. We combine innovative 
                technology with personalized service to deliver exceptional results 
                for every client.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-primary-foreground/80">
                  <MapPin className="h-4 w-4 mr-3 text-luxury" />
                  <span className="text-sm">123 Elite Avenue, New York, NY 10001</span>
                </div>
                <div className="flex items-center text-primary-foreground/80">
                  <Phone className="h-4 w-4 mr-3 text-luxury" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-primary-foreground/80">
                  <Mail className="h-4 w-4 mr-3 text-luxury" />
                  <span className="text-sm">info@elitehomes.com</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            

            

            
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-semibold text-lg mb-2">Stay Updated</h4>
              <p className="text-primary-foreground/80 text-sm">
                Get the latest market insights and property updates delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-4">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-luxury" />
              <button className="px-6 py-2 bg-luxury text-luxury-foreground rounded-md hover:bg-luxury/90 transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-primary-foreground/80 text-sm">
              © 2024 EliteHomes. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-luxury hover:scale-110 transition-all duration-300">
                  <social.icon className="h-4 w-4" />
                </a>)}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {footerLinks.legal.map((link, index) => <a key={index} href={link.href} className="text-primary-foreground/80 hover:text-luxury transition-colors text-sm">
                  {link.label}
                </a>)}
            </div>
          </div>
        </div>
      </div>
    </footer>;
};