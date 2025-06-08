import React from "react";

const ContactPage = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        Have a project in mind? Need custom parts? Get in touch and let us solve your problems.
      </p>
      <a
        href="mailto:info@emsolutions.com"
        className="inline-block bg-blue-800 text-white px-8 py-3 rounded hover:bg-blue-700 transition"
      >
        Email Us
      </a>
    </section>
  );
};

export default ContactPage;
