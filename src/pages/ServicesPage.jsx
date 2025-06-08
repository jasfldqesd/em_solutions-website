import React from "react";

const ServicesPage = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Our Capabilities</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-semibold mb-2">CNC Machining</h3>
          <p className="text-gray-600">Precision milling and turning with support for complex parts and tight tolerances.</p>
        </div>
        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Plasma Cutting</h3>
          <p className="text-gray-600">High-speed cutting of sheet metal for prototypes, brackets, and automation frames.</p>
        </div>
        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Powder Coating</h3>
          <p className="text-gray-600">Durable, professional finishes available in multiple colors and textures.</p>
        </div>
        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Welding</h3>
          <p className="text-gray-600">Fabrication-ready assemblies with MIG/TIG welding options for aluminum and steel.</p>
        </div>
        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Automation Components</h3>
          <p className="text-gray-600">Modular kits and assemblies designed for integrators and OEM applications.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
