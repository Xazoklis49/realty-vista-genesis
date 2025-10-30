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