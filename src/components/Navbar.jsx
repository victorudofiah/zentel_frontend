// src/components/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Zentel Insight
        </Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-semibold border-b-2 border-yellow-500"
                  : "text-gray-700 hover:text-blue-600 transition"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        {/* Mobile menu toggle can be added later */}
      </div>
    </nav>
  );
}
