import React, { useState } from "react";

import AboutHeroImage from "../assets/hero2.jpg";
import ContactImg from "../assets/img35.jpg";
import Img40 from "../assets/img40.jpg";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[350px] mt-[160px] flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutHeroImage})` }}
        ></div>
      </div>

      {/* Contact Section */}
      <div className="w-full py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gray-400 text-sm tracking-widest mb-4">
              CONTACT
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-700 mb-6">
              GET IN TOUCH
            </h1>
          </div>

          {/* Contact Container */}
          <div className="flex flex-col lg:flex-row bg-[#F8F6F4] rounded-2xl overflow-hidden shadow-lg p-6">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 p-10 md:p-14 flex items-center justify-center">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-md space-y-10"
              >
                {/* Name Field */}
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm p-4 text-gray-500 uppercase tracking-widest mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 border-b border-gray-400 focus:outline-none focus:border-gray-700 py-3 bg-transparent text-gray-700 placeholder-transparent"
                  />
                </div>

                {/* Contact Number */}
                <div className="flex flex-col">
                  <label
                    htmlFor="contactNumber"
                    className="text-sm p-4 text-gray-500 uppercase tracking-widest mb-2"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="contactNumber"
                    id="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full p-4 border-b border-gray-400 focus:outline-none focus:border-gray-700 py-3 bg-transparent text-gray-700 placeholder-transparent"
                  />
                </div>

                {/* Event Date */}
                <div className="flex flex-col">
                  <label
                    htmlFor="eventDate"
                    className="text-sm p-4 text-gray-500 uppercase tracking-widest mb-2"
                  >
                    Wedding / Event Date
                  </label>
                  <input
                    type="text"
                    name="eventDate"
                    id="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full p-4 border-b border-gray-400 focus:outline-none focus:border-gray-700 py-3 bg-transparent text-gray-700 placeholder-transparent"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-sm p-4 text-gray-500 uppercase tracking-widest mb-2"
                  >
                    Tell me about yourself / event plan
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full  p-4 border-b border-gray-400 focus:outline-none focus:border-gray-700 py-3 bg-transparent text-gray-700 resize-none placeholder-transparent"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="bg-gray-200 text-gray-700 px-8 py-3 text-sm tracking-widest hover:bg-gray-300 transition-colors">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 h-[550px]">
              <img
                src={ContactImg}
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-widest uppercase mb-8 text-gray-500 font-light">
            “Enquire Now!“
          </p>

          <h3 className="text-3xl sm:text-5xl font-serif font-light leading-snug text-gray-700">
            “YOU WILL NEVER KNOW THE VALUE OF A MOMENT UNTIL IT BECOMES A
            MEMORY.”
          </h3>
        </div>
      </div>
      <div
        className="relative w-full h-[650px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Img40})` }}
      >
        {/* Dark overlay for background contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contact Info Card (floating above background) */}
        <div className="relative z-10 bg-white backdrop-blur-lg rounded-2xl shadow-2xl p-10 md:p-16 text-center border border-white/40">
          {/* Email */}
          <div>
            <p className="text-[#b08a5c] text-4xl mb-3">✉️</p>
            <h4 className="text-gray-800 text-lg font-semibold tracking-[3px]">
              EMAIL
            </h4>
            <p className="text-gray-700 text-sm mt-2">
              contact@TessaMorgan.xyz
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="text-[#b08a5c] text-4xl mb-3">📍</p>
            <h4 className="text-gray-800 text-lg font-semibold tracking-[3px]">
              ADDRESS
            </h4>
            <p className="text-gray-700 text-sm mt-2 leading-relaxed">
              5396 North Reese Avenue, Fresno CA 93722
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#b08a5c] text-4xl mb-3">📞</p>
            <h4 className="text-gray-800 text-lg font-semibold tracking-[3px]">
              CONTACT
            </h4>
            <p className="text-gray-700 text-sm mt-2">+1 901 247 5467</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
