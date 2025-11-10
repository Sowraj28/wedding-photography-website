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
              <div className="w-full max-w-md space-y-10">
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
                  <button
                    onClick={handleSubmit}
                    className="bg-gray-200 text-gray-700 px-8 py-3 text-sm tracking-widest hover:bg-gray-300 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
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
            "Enquire Now!"
          </p>

          <h3 className="text-3xl sm:text-5xl font-serif font-light leading-snug text-gray-700">
            "YOU WILL NEVER KNOW THE VALUE OF A MOMENT UNTIL IT BECOMES A
            MEMORY."
          </h3>
        </div>
      </div>

      {/* Updated Contact Info Section - Full Background with Overlay Card */}
      <div className="relative w-full h-[600px] flex items-center justify-end px-8 md:px-16">
        {/* Full Background Image */}
        <img
          src={Img40}
          alt="Floral arrangement"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Contact Info Card - Floating on right side */}
        <div className="relative z-40 bg-white/95 backdrop-blur-sm shadow-xl p-8 md:p-12 max-w-sm h-[600px] ">
          <div className="space-y-12">
            {/* Email */}
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-3 border border-[#c9a87c] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#c9a87c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-gray-700 text-xs font-semibold tracking-[3px] mb-2">
                EMAIL
              </h4>
              <p className="text-gray-600 text-xs">contact@TessaMorgan.xyz</p>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-3 border border-[#c9a87c] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#c9a87c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="text-gray-700 text-xs font-semibold tracking-[3px] mb-2">
                ADDRESS
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                5396 North Reese Avenue,
                <br />
                Fresno CA 93722
              </p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-3 border border-[#c9a87c] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#c9a87c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h4 className="text-gray-700 text-xs font-semibold tracking-[3px] mb-2">
                CONTACT
              </h4>
              <p className="text-gray-600 text-xs">+1 901 247 5467</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
