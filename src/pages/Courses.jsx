// src/pages/Courses.jsx
import React from "react";
import { Link } from "react-router-dom";
import GraphicIcon from "../assets/icons/graphic-design.svg";
import VideoIcon from "../assets/icons/video-editing.svg";
import WebIcon from "../assets/icons/web-design.svg";

export default function Courses() {
  const courses = [
    { title: "Graphic Design", description: "Photoshop, Illustrator, and creative design skills.", icon: GraphicIcon },
    { title: "Video Editing", description: "Premiere Pro, After Effects, cinematic editing.", icon: VideoIcon },
    { title: "Web Design", description: "HTML, CSS, JS, React, responsive websites.", icon: WebIcon },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-12">Our Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition duration-500 flex flex-col items-center"
            >
              <div className="bg-blue-50 p-5 rounded-full w-24 h-24 flex items-center justify-center mb-6">
                <img src={course.icon} alt={course.title} className="w-12 h-12"/>
              </div>
              <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-6">{course.description}</p>

              {/* Button */}
              <Link to="/signup">
                <button className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transform transition duration-300">
                  Enroll Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
