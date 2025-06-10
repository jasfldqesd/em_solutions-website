// src/pages/HomePage.jsx
import React from "react";
import symbolFabrication from '../assets/images/symbol.png';
import symbolAI from '../assets/images/AI_symbol.png';
import symbolSystemInt from '../assets/images/sys_int.png';
import symbolMfg from '../assets/images/mfg.png';
import symbolFleet from '../assets/images/fleet.png';
import logoEAI from '../assets/images/AI_Logo_Cropped.png';
import logoAlt from '../assets/images/logo3.png';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-[#f4f7fc]">
      {/* Hero Section */}
      <section id="industries" className="text-center mb-16 bg-blue-900 text-white py-20 px-4 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold mb-4">
          Smart Solutions for Fabrication and Equipment Management
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto mb-6">
          From precision parts to predictive: diagnostics — EM Solutions delivers modular hardware, software, and AI tools for modern industrial workflows.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#form" className="bg-white text-blue-900 px-6 py-3 rounded font-semibold hover:bg-blue-100">Request a Quote</a>
          <a href="#form" className="bg-blue-100 text-blue-900 px-6 py-3 rounded font-semibold hover:bg-white">Book a Demo</a>
        </div>
      </section>

      {/* Product Tiles */}
      <section id="fabrication" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {/* Fabrication Services Tile */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 text-center">
          <img src={symbolFabrication} alt="Fabrication Symbol" className="w-16 h-16 mx-auto mb-2 opacity-70" />
          <div>
            <h3 className="font-semibold text-lg mb-1 text-center">Fabrication Services</h3>
            <p className="text-gray-600 text-sm text-center">
              CNC machining, plasma cutting, welding, and powder coating services for fabricators and OEMs.
            </p>
          </div>
        </div>

        {/* Software & AI Tile */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 text-center">
          <img src={symbolAI} alt="AI Symbol" className="w-16 h-16 mx-auto mb-2 opacity-70" />
          <div>
            <h3 className="font-semibold text-lg mb-1 text-center">Software & AI</h3>
            <p className="text-gray-600 text-sm text-center">
              Fleet maintenance, ERP and AI assistant solutions purpose-built for industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="text-center mb-16">
        <h2 className="text-xl font-semibold mb-6">Solutions for Your Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
            <img src={symbolMfg} alt="Manufacturing Icon" className="w-16 h-16 mx-auto mb-2 opacity-70" />
            <h4 className="font-semibold mb-1">Manufacturing</h4>
            <p className="text-sm text-gray-600">
              Precision and coating services for custom fabrications.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
            <img src={symbolFleet} alt="Fleet Icon" className="w-16 h-16 mx-auto mb-2 opacity-70" />
            <h4 className="font-semibold mb-1">Fleets</h4>
            <p className="text-sm text-gray-600">
              Predictive maintenance and repair tracking for commercial vehicles.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
            <img
              src={symbolSystemInt}
              alt="System Intelligence Icon"
              className="w-16 h-16 mx-auto mb-2 opacity-70"
            />
            <h4 className="font-semibold mb-1">System Intelligence</h4>
            <p className="text-sm text-gray-600">Real-time diagnostics and AI-assisted support for connected equipment.</p>
          </div>
        </div>
      </section>

      {/* Branding Section */}
      <section className="text-center mb-16">
        <div className="flex justify-center items-center gap-8">
          <img src={logoAlt} alt="Alternate Logo" className="w-56 h-auto" />
          <img src={logoEAI} alt="EAI Solutions Logo" className="w-72 h-auto" />
        </div>
      </section>

      {/* About Section */}
      <section className="text-center max-w-2xl mx-auto text-gray-700 mb-16">
        <h2 className="text-xl font-semibold mb-3">About EM Solutions</h2>
        <p>
          EM Solutions was founded with the vision to merge embedded mechanical design into one seamless process. Today, we integrate sensors, components, and AI systems to meet modern industrial needs.
        </p>
      </section>

      {/* Contact Form */}
      <section id="form" className="max-w-2xl mx-auto text-gray-800">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <form
          action="https://formspree.io/f/mgvyapaj"
          method="POST"
          className="grid gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 px-4 py-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 px-4 py-2 rounded"
            required
          />
          <select
            name="interest"
            className="border border-gray-300 px-4 py-2 rounded"
          >
            <option value="">Select Interest</option>
            <option value="Fabrication Services">Fabrication Services</option>
            <option value="Software & AI">Software & AI</option>
            <option value="Fleet Solutions">Fleet Solutions</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            className="border border-gray-300 px-4 py-2 rounded"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export { Home };
