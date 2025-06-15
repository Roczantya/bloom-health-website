// MindBloom Landing Page

import Hero from "../components/Hero";
import About from "../components/About";
import ResourceCards from "../components/ResourceCards";
import QuoteSection from "../components/QuoteSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import FeaturesSection from "../components/FeaturesSection";

const Index = () => {
  return (
    <main className="w-full flex flex-col items-center bg-white font-sans">
      <header className="fixed top-0 w-full bg-gradient-to-r from-gradient3/70 via-gradient2/70 to-gradient1/70 backdrop-blur-md z-50 shadow-none">
        <nav className="container mx-auto flex items-center justify-between py-5">
          <span className="font-playfair text-2xl font-bold text-primary tracking-tight cursor-pointer">
            MindBloom
          </span>
          <div className="flex gap-6 text-primary font-medium text-lg">
            <a href="#home" className="hover:text-green-700 transition-colors">Home</a>
            <a href="#about" className="hover:text-green-700 transition-colors">About</a>
            <a href="#resources" className="hover:text-green-700 transition-colors">Resources</a>
          </div>
        </nav>
      </header>
      <div className="pt-24 w-full">
        <Hero />
        <About />
        <FeaturesSection />
        <ResourceCards />
        <QuoteSection />
        <CallToAction />
        <Footer />
      </div>
    </main>
  );
};
export default Index;
