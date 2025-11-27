import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          About Zentel Insight
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed text-center mb-10">
          Zentel Insight is an academy dedicated to helping people learn
          digital skills such as Graphic Design, Video Editing, Web Design,
          Affiliate Marketing, and more. Our goal is to empower young people
          with digital knowledge that can change their lives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-blue-500">
              🎯 Our Mission
            </h3>
            <p className="text-gray-600">
              To teach valuable digital skills that help young people build
              profitable careers and discover new opportunities.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-blue-500">
              ⭐ Our Vision
            </h3>
            <p className="text-gray-600">
              To be Africa’s leading platform for digital education, reaching
              millions with high–quality skill-based learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
