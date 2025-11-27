import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div>&copy; {new Date().getFullYear()} Zentel Insight. All rights reserved.</div>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
