import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/symbol.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm h-20 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4 h-full">
        <Link to="/">
          <img
            src={logo}
            alt="EM Solutions Logo Symbol"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="leading-tight">
          <h1 className="text-lg font-bold text-gray-900">EM Solutions</h1>
          <p className="text-xs text-gray-600">Embedded and Mechanical Solutions</p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
        <a href="#fabrication">Fabrication Services</a>
        <a href="#software">Software & AI</a>
        <a href="#industries">Industries</a>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
