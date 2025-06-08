import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/symbol.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm h-20 px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-4 h-full">
        <img
          src={logo}
          alt="EM Solutions Logo"
          className="h-20 w-auto object-contain p-1 rounded"
        />
                <div className="leading-tight">
          <h1 className="text-2xl font-bold text-gray-800">EM Solutions</h1>
          <p className="text-sm text-gray-600 -mt-1">Embedded and Mechanical Solutions</p>
        </div>
      </div>

      

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/catalog">Product Catalog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link
          to="/quote"
          className="ml-2 bg-[#144166] text-white px-4 py-2 rounded hover:bg-[#0f3554] transition"
        >
          Request Quote
        </Link>
      </nav>
    </header>
  );
};

export default Header;
