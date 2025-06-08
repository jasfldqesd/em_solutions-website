import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-12">
      <p className="text-sm">&copy; {new Date().getFullYear()} EM Solutions. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
