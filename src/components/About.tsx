
import { Eye, Heart, Users, Book, MessageSquare, BookOpen } from "lucide-react";

const About = () => (
  <section
    id="about"
    className="container max-w-5xl px-6 py-12 md:py-16 text-center animate-fade-in-up"
  >
    <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-10 text-primary">
      Why MindBloom?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
      {/* Left: The Problem */}
      <div>
        <h3 className="text-2xl font-semibold text-primary mb-4">The Problem</h3>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <Eye className="w-8 h-8 text-gradient2 flex-shrink-0" aria-hidden />
            <div>
              <span className="font-bold">Stigma:</span>
              <span className="text-gray-700 ml-1">Many fear judgement if they open up about their struggles.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Heart className="w-8 h-8 text-gradient1 flex-shrink-0" aria-hidden />
            <div>
              <span className="font-bold">Fear:</span>
              <span className="text-gray-700 ml-1">Worry about not being understood or supported keeps youth silent.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Users className="w-8 h-8 text-gradient3 flex-shrink-0" aria-hidden />
            <div>
              <span className="font-bold">Lack of access:</span>
              <span className="text-gray-700 ml-1">Finding reliable resources and help can feel overwhelming or out of reach.</span>
            </div>
          </li>
        </ul>
      </div>
      {/* Right: Our Solution */}
      <div>
        <h3 className="text-2xl font-semibold text-primary mb-4">Our Solution</h3>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <Book className="w-8 h-8 text-gradient2 flex-shrink-0" aria-hidden />
            <div>
              <span className="font-bold">Education:</span>
              <span className="text-gray-700 ml-1">Practical guides and tips to nurture mental wellness every day.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <MessageSquare className="w-8 h-8 text-gradient1 flex-shrink-0" aria-hidden />
            <div>
              <span className="font-bold">Shared stories:</span>
              <span className="text-gray-700 ml-1">Real experiences to show you’re not alone—and remind you of hope.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <BookOpen className="w-8 h-8 text-gradient3 flex-shrink-0" aria-hidden />
            <div>
              <span className="font-bold">Emotional tools:</span>
              <span className="text-gray-700 ml-1">Mindfulness tips, journaling prompts, and resources you can use anytime.</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
