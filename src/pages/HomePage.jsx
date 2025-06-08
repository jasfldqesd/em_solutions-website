import React from "react";

const HomePage = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundColor: "#144166", backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="bg-black bg-opacity-60 absolute inset-0 z-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Bringing Your Concepts to Reality with Precision <br /> Fabrication & Modular Integration
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          CNC machining, plasma cutting, welding, powder coating, and automation-ready
          components—EM Solutions turns your ideas into industrial-grade solutions.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <a
            href="#"
            className="bg-white text-blue-800 border border-blue-800 font-semibold px-8 py-3 rounded-full hover:bg-blue-800 hover:text-white transition"
          >
            Request a Quote
          </a>
          <a
            href="#"
            className="bg-blue-800 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-900 transition"
          >
            View Product Catalog
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
