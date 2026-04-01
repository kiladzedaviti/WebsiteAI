import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import Portfolio from "@/components/sections/Portfolio";
import AboutStrip from "@/components/sections/AboutStrip";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import HowWeWork from "@/components/sections/HowWeWork";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Portfolio />
        <AboutStrip />
        <Services />
        <Stats />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
