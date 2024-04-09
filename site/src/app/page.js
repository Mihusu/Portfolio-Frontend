import Image from "next/image";
import HeroSection from './components/HeroSection';
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="flex-grow container mx-auto px-12 mt-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
      <Footer/>
    </main>
  );
}
