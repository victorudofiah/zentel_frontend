import React from "react";
import GraphicIcon from "../assets/icons/graphic-design.svg";
import VideoIcon from "../assets/icons/video-editing.svg";
import WebIcon from "../assets/icons/web-design.svg";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Learn Digital Skills with Zentel Insight
        </h1>

        <p className="text-xl md:text-2xl mb-8">
          Graphic Design, Video Editing, Web Design, and more
        </p>

        <button className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition">
          Enroll Now
        </button>
      </section>

      {/* ================= COURSES SECTION ================= */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* === Course Card 1 === */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 cursor-pointer">
            <img
              src={GraphicIcon}
              alt="Graphic Design"
              className="w-16 h-16 mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold mb-2 text-center">Graphic Design</h3>
            <p className="text-gray-600 text-center">
              Learn Photoshop, Illustrator, and creative design skills.
            </p>
          </div>

          {/* === Course Card 2 === */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 cursor-pointer">
            <img
              src={VideoIcon}
              alt="Video Editing"
              className="w-16 h-16 mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold mb-2 text-center">Video Editing</h3>
            <p className="text-gray-600 text-center">
              Master Premiere Pro, After Effects, and cinematic editing.
            </p>
          </div>

          {/* === Course Card 3 === */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 cursor-pointer">
            <img
              src={WebIcon}
              alt="Web Design"
              className="w-16 h-16 mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold mb-2 text-center">Web Design</h3>
            <p className="text-gray-600 text-center">
              Build responsive websites using HTML, CSS, JS, and React.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
