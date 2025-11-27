import React from "react";
import AboutImage from "../assets/images/hero-bg.jpeg"; // high-quality image

export default function About() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${AboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            About Zentel Insight
          </h1>
          <p className="text-lg md:text-xl drop-shadow">
            Your trusted academy for mastering digital and creative skills.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Mission</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          Zentel Insight exists to empower creatives and tech enthusiasts with
          world-class skills in graphic design, video editing, web development, 
          and more. We believe in hands-on learning and practical knowledge.
        </p>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Vision</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          To be the leading creative academy, recognized for excellence in 
          digital skills education, producing highly skilled professionals 
          ready to thrive in the modern world.
        </p>
      </section>
    </div>
  );
}
