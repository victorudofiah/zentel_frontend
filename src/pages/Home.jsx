// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import GraphicIcon from "../assets/icons/graphic-design.svg";
import VideoIcon from "../assets/icons/video-editing.svg";
import WebIcon from "../assets/icons/web-design.svg";
import HeroImage from "../assets/images/hero-bg.jpeg"; // your hero image file

export default function Home() {
  const courses = [
    {
      title: "Graphic Design",
      description: "Master Photoshop, Illustrator, and all graphic tools.",
      icon: GraphicIcon,
    },
    {
      title: "Video Editing",
      description: "Craft professional videos using editing & motion tools.",
      icon: VideoIcon,
    },
    {
      title: "Web Design",
      description: "Build modern, responsive websites with React & JS.",
      icon: WebIcon,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section
        className="relative h-screen flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fadeIn">
            Unlock Your Creative Future with <span className="text-yellow-400">Zentel Insight</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100 animate-fadeIn delay-200">
            From Graphic Design to Web Development — learn the skills that top studios pay for.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/courses">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold px-8 py-3 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 animate-pulseHover">
                See Courses
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Floating background elements */}
        <div className="absolute top-10 left-5 w-12 h-12 bg-yellow-400 rounded-full opacity-30 animate-bounceSlow"></div>
        <div className="absolute bottom-28 right-8 w-16 h-16 bg-blue-500 rounded-full opacity-25 animate-bounceSlow delay-300"></div>
      </section>

      {/* COURSES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            Our Courses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <Link to="/courses" key={idx}>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition duration-300">
                  <div className="bg-blue-50 p-5 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
                    <img src={course.icon} alt={course.title} className="w-12 h-12"/>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{course.title}</h3>
                  <p className="text-gray-600 text-center">{course.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION / FOOTER PRE‑SECTION */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Learning?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Join hundreds of creatives already building their future with Zentel Insight.
        </p>
        <Link to="/signup">
          <button className="bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-lg shadow-xl hover:scale-105 transition duration-300">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
}
