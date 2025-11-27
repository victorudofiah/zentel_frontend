import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-100">
      <section className="py-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Contact Us</h1>
        <p className="text-gray-700 mb-12 text-lg md:text-xl">
          Have questions or want to enroll? Reach out to us!
        </p>

        <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
            />
            <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
