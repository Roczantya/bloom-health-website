
const quotes = [
  {
    text: "You are not alone. Asking for help is a sign of strength, not weakness.",
    author: "— MindBloom Team",
  },
  {
    text: "Every day is a chance to grow. Don't be afraid to bloom, even if it's a little at a time.",
    author: "— Anonymous Youth",
  },
  {
    text: "Your feelings are valid. There is always hope.",
    author: "— Trusted Friend",
  },
];
const QuoteSection = () => (
  <section className="w-full py-14 bg-gradient-to-r from-gradient3 via-white to-gradient1">
    <div className="container max-w-4xl mx-auto px-4 flex flex-col gap-6">
      <h2 className="font-playfair text-2xl md:text-3xl text-primary mb-3 text-center">Words of Support</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((q, i) => (
          <blockquote
            key={i}
            className="rounded-xl bg-white shadow-card px-6 py-6 text-md md:text-lg italic border-l-4 border-primary/60"
          >
            <p className="mb-2">"{q.text}"</p>
            <footer className="text-primary/80 not-italic text-right">{q.author}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);
export default QuoteSection;
