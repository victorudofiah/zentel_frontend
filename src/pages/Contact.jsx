import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Contact Us
      </h1>

      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-3 border rounded-lg"
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
