
import { Share } from "lucide-react";

const ACCENT_PURPLE = "#b7aaff";

const YourStorySection = () => (
  <section className="w-full py-16 bg-gradient-to-tr from-gradient3 via-gradient1/40 to-gradient2/30 flex justify-center animate-fade-in-up">
    <div className="max-w-2xl bg-white/90 rounded-2xl shadow-card p-10 flex flex-col items-center text-center">
      <Share className="w-14 h-14 mb-4" style={{ color: ACCENT_PURPLE }} aria-hidden />
      <h2
        className="font-playfair text-4xl md:text-5xl font-bold mb-3"
        style={{ color: ACCENT_PURPLE }}
      >
        Your Story Matters
      </h2>
      <p className="text-md md:text-lg text-gray-700 mb-6">
        Your voice can help others. Share your story — anonymously or with your name.
      </p>
      <a
        href="#"
        className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-150"
      >
        Share Your Story
      </a>
    </div>
  </section>
);

export default YourStorySection;
