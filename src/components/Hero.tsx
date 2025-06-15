
import { Heart } from "lucide-react";

const Hero = () => (
  <section
    id="home"
    className="w-full py-20 min-h-[60vh] bg-gradient-to-tr from-gradient1 via-gradient2 to-gradient3 flex flex-col items-center justify-center text-center animate-fade-in-up"
  >
    <div className="mb-6 flex items-center justify-center gap-3">
      <Heart className="w-10 h-10 text-primary animate-pulse" strokeWidth={2.5} />
    </div>
    <h1 className="font-playfair text-5xl md:text-6xl font-black text-primary drop-shadow-lg mb-4">
      Grow Through What You Go Through
    </h1>
    <p className="text-xl md:text-2xl text-primary/90 max-w-2xl mx-auto font-medium mb-8">
      Helping youth navigate mental health with kindness and connection.
    </p>
    <a
      href="#resources"
      className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 text-lg"
    >
      Explore Resources
    </a>
  </section>
);

export default Hero;
