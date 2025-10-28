import React from "react";

import HeroImage from "../assets/hero.jpg";

import LeafLogo from "../assets/Vector.png";
import AboutMeImage from "../assets/img1.jpg";
import Leaf1 from "../assets/leaf1.png";
import Leaf2 from "../assets/leaf2.png";
import Leaf3 from "../assets/leaf3.png";
import CoupleImage from "../assets/img2.jpg";

import CoolnImage from "../assets/1.png";
import FlowerDesign from "../assets/flower_design.png";
import CoolnImages from "../assets/img3.jpg";
import FeaturedImageTwo from "../assets/img4.jpg";
import ClientTestimonialImage from "../assets/img5.jpg";
import ContactImage from "../assets/img6.jpg"

function HomePage() {
  const serifClassic = "font-serif-classic";
  const subheadingFont = "font-ephesis";
  const cormorant = "font-cormorant";


  const services = [
    {
      id: 1,
      icon: Leaf3, 
      title: "Wedding",
      price: "$2999",
      description: "Per Session",
    },
    {
      id: 2,
      icon: Leaf2,
      title: "Portrait",
      price: "$399",
      description: "Per Session",
    },
    {
      id: 3,
      icon: Leaf3,
      title: "Engagement",
      price: "$1999",
      description: "Per Session",
    },
  ];
 


  

  return (
    <>
      <div className="relative h-[650px] flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroImage})` }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-10"></div>

        <div className="relative z-10 text-center text-white p-4 -mt-16">
          <p
            className={`text-4xl ${subheadingFont} italic tracking-wider mb-6 text-brand-taupe`}
          >
            Your Dream Wedding Awaits
          </p>

          <h2
            className={`text-5xl ${cormorant} font-semibold leading-tight tracking-wide`}
          >
            Artistic Wedding Photography
          </h2>
        </div>
      </div>
      <div className="w-full py-24 px-4 bg-brand-taupe/10">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={LeafLogo}
            alt="Delicate Leaf Logo"
            className="w-16 h-auto mx-auto mb-4"
          />

          <p
            className={`text-sm tracking-[0.3em] uppercase mb-8 ${serifClassic} text-brand-taupe font-light`}
          >
            AWARD WINNING PHOTOGRAPHY
          </p>

          <h3
            className={`text-3xl sm:text-5xl font-light leading-snug ${cormorant} text-gray-700`}
          >
            Showcasing your big day in a memorable and unforgettable way.
          </h3>
        </div>
      </div>
      {/* -------------------------------------------------------- */}
      <div className="w-full bg-white py-16 md:py-24 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2 lg:w-2/5 mb-12 md:mb-0 md:pr-8 lg:pr-12">
            <img
              src={AboutMeImage}
              alt="Tessa, the photographer"
              className="w-full h-full object-cover max-h-none md:rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left md:pl-8 lg:pl-12">
            <span
              className={`text-6xl text-center   text-brand-taupe opacity-50 block mb-4 ${cormorant}`}
            >
              &ldquo;
            </span>

            <p
              className={`text-3xl sm:text-4xl mb-8 ${cormorant} text-gray-800 font-medium`}
            >
              Hello, My Name is Tessa
            </p>

            <p className={`mb-4 text-gray-600 leading-relaxed ${serifClassic}`}>
              Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
              tristique purus vehicula felis velit ac. Tempus velit morbi
              accumsan id sit interdum lacus turpis ac. Integer malesuada
              sagittis placerat eget.
            </p>

            <img
              src={FlowerDesign}
              alt="Decorative graphic"
              className="w-40 h-auto mx-auto mx-100 my-5 opacity-70"
            />

            <p
              className={`text-5xl ${subheadingFont} font-extrabold text-c1 text-center  mb-4`}
            >
              Tessa.M
            </p>

            <button className="px-10 py-4 block mx-auto text-black bg-c1 hover:bg-opacity-90 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20 px-4 md:py-28">
        <div className="max-w-6xl mx-auto text-center">
          <p
            className={`text-sm tracking-[0.3em] uppercase mb-4 ${serifClassic} text-brand-taupe font-light`}
          >
            SERVICES
          </p>
          <h3
            className={`text-4xl sm:text-5xl font-light leading-snug mb-16 ${cormorant} text-gray-800`}
          >
            What I Offer
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 shadow-xl">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-50 p-8 rounded-lg shadow-sm flex flex-col items-center justify-between h-full border border-gray-100"
              >
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-16 h-auto mb-6 text-brand-taupe"
                />

                <h4 className={`text-4xl ${subheadingFont} text-gray-800 mb-2`}>
                  {service.title}
                </h4>

                {/* Price */}
                <p
                  className={`text-3xl ${cormorant} font-medium text-gray-800 mb-2`}
                >
                  {service.price}
                </p>

                <p className={`text-sm ${serifClassic} text-gray-600 mb-6`}>
                  {service.description}
                </p>

                <button
                  className="px-8 py-3 bg-white text-gray-800 hover:bg-gray-100 transition-colors text-md border border-gray-300 rounded shadow-md"
                  style={{ backgroundColor: "rgb(240, 235, 230)" }}
                >
                  More Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="relative flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-3/4 max-h-[600px] overflow-hidden">
              <img
                src={CoupleImage}
                alt="Couple on the beach"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>

            <div
              className="relative w-full lg:w-1/3 p-8 md:p-12 bg-slate-50 rounded-lg shadow-2xl z-10 opacity-90
                      -mt-16 lg:mt-0 lg:-ml-32"
              style={{ backgroundColor: "rgb(245, 245, 240)" }}
            >
              <div className="text-center">
                <img
                  src={LeafLogo}
                  alt="Decorative branch"
                  className="w-10 h-auto mx-auto mb-6 opacity-70"
                />

                <p
                  className={`text-3xl ${subheadingFont} text-gray-800 mb-6 font-medium leading-normal`}
                >
                  Creative, Passionate, Artistic
                </p>

                <p
                  className={`text-sm ${serifClassic} text-gray-600 leading-relaxed`}
                >
                  Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
                  tristique purus vehicula felis velit ac. Tempus velit morbi
                  accumsan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-20 px-4 md:py-28">
        <div className="max-w-7xl mx-auto text-center">
          <p
            className={`text-sm tracking-[0.3em] uppercase mb-2 ${serifClassic} text-brand-taupe font-light`}
          >
            PORTFOLIO
          </p>
          <h3
            className={`text-4xl sm:text-5xl font-light leading-snug mb-16 ${cormorant} text-gray-800`}
          >
            Featured Story
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-4 items-end relative">
            <div
              className="bg-brand-light-tan p-8 md:p-12 text-center lg:text-left h-full flex flex-col justify-center"
              style={{ backgroundColor: "rgb(240, 235, 230)" }}
            >
              <p
                className={`text-5xl ${subheadingFont} text-brand-taupe mb-4 opacity-70`}
              >
                01
              </p>
              <h4 className={`text-3xl ${subheadingFont} text-gray-800 mb-4`}>
                Ricardo & Michelle
              </h4>
              <p
                className={`text-base ${serifClassic} text-gray-600 leading-relaxed`}
              >
                Lorem ipsum dolor sit amet consectetur tristique purus vehicula
                felis velit.
              </p>
            </div>

            <div className="w-full h-[450px] overflow-hidden shadow-lg">
              <img
                src={CoolnImages}
                alt="Couple standing by a waterfall"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full h-[450px] overflow-hidden shadow-lg self-end hidden lg:block">
              <img
                src={FeaturedImageTwo}
                alt="Bride holding a bouquet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end mt-8 lg:mt-4 pr-0 lg:pr-4">
            <button
              className="px-10 py-3 text-gray-800 transition-colors text-lg border border-gray-300 rounded"
              style={{ backgroundColor: "rgb(240, 235, 230)" }}
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>
      <h3
        className={`text-5xl ${subheadingFont} italic text-gray-800 mb-16 font-medium text-center`}
      >
        Client Testimonials
      </h3>
      <div className="w-full bg-slate-50 py-20 px-4 md:py-28 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}

          {/* Testimonial Card & Image Container (gap-8 is the right balance) */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Navigation Arrow Left */}
            <button className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-3 text-gray-600 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition-colors z-10 hidden md:block">
              &lt;
            </button>

            {/* Testimonial Text Card (Slightly narrower: 5/12) */}
            <div
              className="w-full md:w-5/12 p-8 md:p-12 h-[450px] flex flex-col justify-center items-center relative text-center shadow-lg rounded-lg border border-gray-300"
              style={{ backgroundColor: "rgb(240, 235, 230)" }}
            >
              <span
                className={`text-6xl ${cormorant} text-brand-taupe opacity-50 block mb-6`}
              >
                &ldquo;
              </span>
              <p
                className={`text-xl ${serifClassic} text-gray-700 mb-8 leading-relaxed italic`}
              >
                Showcasing your Big Day in a Memorable & Unforgettable way.
              </p>
              <p
                className={`text-lg uppercase tracking-wider ${serifClassic} text-brand-taupe font-medium`}
              >
                SHARE & LIKE
              </p>
            </div>

            
            <div className="w-full md:w-7/12">
              <img
                src={ClientTestimonialImage}
                alt="Client testimonial couple"
                className="w-full h-[450px] object-cover rounded-lg shadow-xl"
              />
            </div>

            
            <button className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-3 text-gray-600 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition-colors z-10 hidden md:block">
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-white pt-20 pb-0 px-4 md:px-0">
        {" "}
       
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3
            className={`text-3xl sm:text-4xl font-light leading-snug mb-12 ${cormorant} text-gray-800`}
          >
            HELPING COUPLES BRING TO LIFE THEIR WEDDING DREAMS
          </h3>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <p className={`text-5xl ${subheadingFont} text-brand-taupe mb-2`}>
                12
              </p>
              <p className={`text-sm ${serifClassic} text-gray-600`}>
                Years Experience
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className={`text-5xl ${subheadingFont} text-brand-taupe mb-2`}>
                10K
              </p>
              <p className={`text-sm ${serifClassic} text-gray-600`}>
                Photos Delivered
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className={`text-5xl ${subheadingFont} text-brand-taupe mb-2`}>
                300
              </p>
              <p className={`text-sm ${serifClassic} text-gray-600`}>
                Events Captured
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className={`text-5xl ${subheadingFont} text-brand-taupe mb-2`}>
                6
              </p>
              <p className={`text-sm ${serifClassic} text-gray-600`}>Awards</p>
            </div>
          </div>
        </div>
        
        <div className="h-[600px] flex flex-col lg:flex-row items-stretch max-w-7xl mx-auto shadow-xl rounded-lg overflow-hidden">
          
          <div
            className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center"
            style={{ backgroundColor: "rgb(240, 235, 230)" }} 
          >
            <p
              className={`text-sm tracking-[0.3em] uppercase mb-4 ${serifClassic} text-brand-taupe font-light`}
            >
              CONTACT
            </p>
            <h3
              className={`text-4xl sm:text-5xl font-light leading-snug mb-10 ${cormorant} text-gray-800`}
            >
              Get in Touch
            </h3>

            <form className="space-y-10">
              {" "}
              
              <div className="pt-2">
                {" "}
                
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium text-gray-700 ${serifClassic} mb-1 uppercase tracking-wider`}
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  
                  className="mt-1 block w-full px-0 py-1 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-brand-taupe sm:text-lg bg-transparent"
                />
              </div>
              <div className="pt-2">
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium text-gray-700 ${serifClassic} mb-1 uppercase tracking-wider`}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  
                  className="mt-1 block w-full px-0 py-1 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-brand-taupe sm:text-lg bg-transparent"
                />
              </div>
              <div className="pt-2">
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium text-gray-700 ${serifClassic} mb-1 uppercase tracking-wider`}
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="1" 
                  className="mt-1 block w-full px-0 py-1 border-0 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-brand-taupe sm:text-lg bg-transparent resize-none"
                ></textarea>
              </div>
              <div className="flex justify-start pt-6">
                {" "}
                
                <button
                  type="submit"
                  className="px-10 py-3 text-gray-800 transition-colors text-lg rounded"
                 
                  style={{
                    backgroundColor: "rgb(228, 222, 215)",
                    border: "1px solid rgb(210, 200, 190)",
                  }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          
          <div className="w-full lg:w-1/2">
            <img
              src={ContactImage}
              alt="Couple by the lake"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
