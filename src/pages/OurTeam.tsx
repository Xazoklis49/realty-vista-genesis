import { Header } from "@/components/Header";
import { OurTeam } from "@/components/OurTeam";
import { Footer } from "@/components/Footer";

const OurTeamPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
};

export default OurTeamPage;
