
import { BookText, Sparkles, Megaphone } from "lucide-react";

const FEATURES = [
  {
    icon: <BookText className="w-10 h-10 text-purple-muted mb-4" aria-hidden />,
    title: "Mini Guides",
    description:
      "Simple, bite-sized mental health topics explained, so you can find what you need—no jargon.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-mint-light mb-4" aria-hidden />,
    title: "Wellness Tools",
    description:
      "Journaling prompts and mood tracking to help you check in with yourself and care for your mind.",
  },
  {
    icon: <Megaphone className="w-10 h-10 text-peach-light mb-4" aria-hidden />,
    title: "Share Your Story",
    description:
      "Submit your experience anonymously and help others see they're not alone.",
  },
];

const FeaturesSection = () => (
  <section
    id="features"
    className="container max-w-6xl px-6 py-14 md:py-20 animate-fade-in-up bg-gradient-to-tr from-gradient1/60 via-gradient3/30 to-gradient2/40 rounded-2xl"
  >
    <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-primary text-center" style={{textShadow: "none"}}>
      What We Offer
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {FEATURES.map(({ icon, title, description }) => (
        <div
          key={title}
          className="rounded-lg bg-card shadow-card p-8 flex flex-col items-center text-center transition-transform hover:scale-105"
        >
          {icon}
          <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
