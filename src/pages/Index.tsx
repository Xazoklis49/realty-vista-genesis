import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { HowItWorks } from "@/components/HowItWorks";
import { HomeServicesSection } from "@/components/HomeServicesSection";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <HowItWorks />
        <HomeServicesSection />
        <Contact />
      </main>
      <Footer />
    </div>;
};
export default Index;