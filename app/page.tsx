import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import ProblemBeforeAfter from "./components/ProblemBeforeAfter";
import HowAIWorks from "./components/HowAIWorks";
import WhatsAppDemo from "./components/WhatsAppDemo";
import CoreSolutions from "./components/CoreSolutions";
import Industries from "./components/Industries";
import SalesTeamDivision from "./components/SalesTeamDivision";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoTicker />
      <ProblemBeforeAfter />
      <HowAIWorks />
      <WhatsAppDemo />
      <CoreSolutions />
      <Industries />
      <SalesTeamDivision />
      <Works />
      <Testimonials />
      <Team />
      <About />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
