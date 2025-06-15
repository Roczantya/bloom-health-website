
import { Smile } from "lucide-react";
const resources = [
  {
    title: "Get Help Now",
    desc: "Immediate support for anyone struggling. Reach out to a helpline or trusted adult.",
    link: "https://www.crisistextline.org/",
    label: "Crisis Text Line",
  },
  {
    title: "Learn About Mental Health",
    desc: "Explore articles, self-care tips, and educational videos designed for youth.",
    link: "https://www.mhanational.org/mental-health-youth",
    label: "MHA Youth",
  },
  {
    title: "Join Our Community",
    desc: "Connect with peers and mentors who care. Find safe discussion spaces.",
    link: "#",
    label: "Coming Soon",
  },
];
const ResourceCards = () => (
  <section id="resources" className="container px-6 py-10 grid md:grid-cols-3 gap-8">
    {resources.map((res) => (
      <div
        key={res.title}
        className="bg-white rounded-2xl shadow-card transition-transform hover:scale-105 p-6 flex flex-col items-center text-center animate-fade-in-up"
      >
        <Smile className="w-8 h-8 text-primary mb-2" />
        <h3 className="font-playfair text-xl font-bold mb-1">{res.title}</h3>
        <p className="text-base text-gray-600 mb-4">{res.desc}</p>
        <a
          href={res.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto px-5 py-2 rounded-full text-white font-semibold shadow-md ${res.link === "#" ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-green-700"} transition-colors duration-200`}
          tabIndex={res.link === "#" ? -1 : 0}
          aria-disabled={res.link === "#"}
        >
          {res.label}
        </a>
      </div>
    ))}
  </section>
);
export default ResourceCards;
