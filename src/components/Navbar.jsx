import React, { useState } from 'react';
import logoImg from '../assets/logo-text.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImg} alt="Dev Stack Logo" className="h-8 object-contain" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="text-[#ec4899] font-semibold">Home</a>
          <a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button className="text-gray-600 hover:text-gray-900">Sign In</button>
          <button className="bg-[#ec4899] hover:bg-[#db2777] text-white px-5 py-2.5 rounded-full font-semibold transition shadow-sm">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg">
          <nav className="flex flex-col gap-3 text-base font-medium text-gray-600">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-[#ec4899] font-semibold">Home</a>
            <a href="#technologies" onClick={() => setIsOpen(false)} className="hover:text-gray-900">Technologies</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-gray-900">Projects</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-gray-900">About</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex flex-col gap-3 pt-3 border-t border-gray-100 font-medium">
            <button className="text-gray-600 hover:text-gray-900 text-left py-1">Sign In</button>
            <button className="bg-[#ec4899] hover:bg-[#db2777] text-white px-5 py-2.5 rounded-full font-semibold transition text-center shadow-sm">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;