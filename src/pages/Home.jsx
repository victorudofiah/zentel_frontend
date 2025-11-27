import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Zentel Insight</h1>
          <p className="text-lg mb-8">
            Master Graphic Design, Video Editing, Web Design, and Digital Skills
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded shadow hover:bg-gray-100 transition">
            Enroll Now
          </button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
              <p>Create stunning visuals using Photoshop, Illustrator, and Figma.</p>
            </div>
            <div className="bg-white shadow rounded p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Video Editing</h3>
              <p>Learn professional video editing with Premiere Pro and After Effects.</p>
            </div>
            <div className="bg-white shadow rounded p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Web Design</h3>
              <p>Build modern websites using HTML, CSS, JavaScript, and React.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h2>
          <p className="mb-6">Join hundreds of students learning digital skills online.</p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded shadow hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
