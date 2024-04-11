import Image from "next/image";
import HeroSection from './components/HeroSection';
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="flex-grow container mx-auto px-12 mt-32">
        <HeroSection />
        <AchievementsSection/>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer/>
    </main>
  );
}
