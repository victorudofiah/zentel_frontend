import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Zentel Insight. All rights reserved.
      </div>
    </footer>
  );
}
