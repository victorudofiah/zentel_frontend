// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll effect for shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/90 ${
        scrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Zentel Insight
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-semibold border-b-2 border-yellow-500"
                  : "text-gray-700 hover:text-blue-600 hover:scale-105 transform transition-all duration-200"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Login CTA */}
          <NavLink
            to="/login"
            className="ml-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 hover:scale-105 transform transition duration-200"
          >
            Login
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 transition duration-200">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg px-4 py-6 flex flex-col space-y-4 transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 font-semibold border-b-2 border-yellow-500"
                : "text-gray-700 hover:text-blue-600 hover:scale-105 transform transition-all duration-200"
            }
          >
            {item.name}
          </NavLink>
        ))}
        <NavLink
          to="/login"
          onClick={() => setIsOpen(false)}
          className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 hover:scale-105 transform transition duration-200 text-center"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}
