import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="font-bold text-xl">Zentel Insight</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-200 transition">About</Link>
          <Link to="/courses" className="hover:text-gray-200 transition">Courses</Link>
          <Link to="/contact" className="hover:text-gray-200 transition">Contact</Link>
          <Link to="/login" className="hover:text-gray-200 transition">Login</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-6 py-4 space-y-2">
          <Link to="/" className="block hover:text-gray-200 transition">Home</Link>
          <Link to="/about" className="block hover:text-gray-200 transition">About</Link>
          <Link to="/courses" className="block hover:text-gray-200 transition">Courses</Link>
          <Link to="/contact" className="block hover:text-gray-200 transition">Contact</Link>
          <Link to="/login" className="block hover:text-gray-200 transition">Login</Link>
        </div>
      )}
    </nav>
  );
}
