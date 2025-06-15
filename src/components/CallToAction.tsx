const CallToAction = () => (
  <section className="w-full py-14 flex justify-center bg-gradient-to-tr from-gradient2 via-gradient1 to-gradient3 animate-fade-in-up">
    <div className="max-w-2xl bg-card rounded-2xl shadow-card p-10 flex flex-col items-center text-center">
      <h2 className="font-playfair text-3xl md:text-4xl text-primary mb-2" style={{textShadow: "none"}}>
        Ready to Start Your Journey?
      </h2>
      <p className="text-md md:text-lg text-gray-700 mb-6">
        Whether you need support or want to uplift others, MindBloom is here for you. Take the next step toward a brighter mind today.
      </p>
      <a
        href="#resources"
        className="bg-purple-warm hover:bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform duration-150"
        style={{ boxShadow: "none" }}
      >
        Discover Resources
      </a>
    </div>
  </section>
);
export default CallToAction;
