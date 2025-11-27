import React from "react";

export default function Courses() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Our Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { title: "Graphic Design", desc: "Master Photoshop, Illustrator, Canva" },
          { title: "Video Editing", desc: "Learn Premiere Pro, CapCut, AE" },
          { title: "Web Design", desc: "HTML, CSS, JS, React" },
          { title: "Digital Marketing", desc: "Learn FB Ads, SEO, Google Ads" },
          { title: "Affiliate Marketing", desc: "Learn how to earn using online sales" },
          { title: "Branding & UI/UX", desc: "Create modern brands & website interfaces" },
        ].map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-500">
              {course.title}
            </h3>
            <p className="text-gray-600">{course.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
