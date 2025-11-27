import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:zentelinsight@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
      formData.message + "\n\nFrom: " + formData.email
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Contact Us</h1>
        <p className="text-gray-700 mb-12 text-lg md:text-xl">
          Have questions or want to enroll? Reach out to us!
        </p>

        <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
