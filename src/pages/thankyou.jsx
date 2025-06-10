// src/pages/ThankYou.jsx
import React from "react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f4f7fc] px-4">
      <div className="bg-white p-10 rounded-2xl shadow-md text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-900">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your message has been received. We’ll get back to you as soon as possible.
        </p>
        <a href="/" className="text-blue-700 font-medium hover:underline">
          Return to Homepage
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
