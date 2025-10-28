import React, { useState } from "react";
import AboutHeroImage from "../assets/hero2.jpg";
import PortfolioImg1 from "../assets/img41.jpg";
import PortfolioImg2 from "../assets/img42.jpg";
import PortfolioImg3 from "../assets/img43.jpg";
import PortfolioImg4 from "../assets/img44.jpg";
import PortfolioImg5 from "../assets/img45.jpg";
import PortfolioImg6 from "../assets/img46.jpg";
import PortfolioImg7 from "../assets/img47.jpg";
import PortfolioImg8 from "../assets/img48.jpg";
import PortfolioImg9 from "../assets/img49.jpg";
import PromiseHeroImg from "../assets/img50.jpg";
import BouquetImg from "../assets/img51.jpg";

function PortfolioPage() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const serifClassic = "font-serif-classic";
  const subheadingFont = "font-ephesis";
  const cormorant = "font-cormorant";
  const taupeGold = "#A08060";

  const portfolioItems = [
    {
      image: PortfolioImg1,
      names: "Sarah & Luke",
      category: "WEDDING",
    },
    {
      image: PortfolioImg2,
      names: "Richard & Jane",
      category: "WEDDING",
    },
    {
      image: PortfolioImg3,
      names: "Gareth & Eve",
      category: "WEDDING",
    },
    {
      image: PortfolioImg4,
      names: "Sarah & Luke",
      category: "ENGAGEMENT",
    },
    {
      image: PortfolioImg5,
      names: "Richard & Jane",
      category: "ENGAGEMENT",
    },
    {
      image: PortfolioImg6,
      names: "Gareth & Eve",
      category: "ENGAGEMENT",
    },
    {
      image: PortfolioImg7,
      names: "Sarah",
      category: "PORTRAIT",
    },
    {
      image: PortfolioImg8,
      names: "Jane",
      category: "PORTRAIT",
    },
    {
      image: PortfolioImg9,
      names: "Angelina",
      category: "PORTRAIT",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[350px] mt-[160px] flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutHeroImage})` }}
        ></div>
      </div>

      {/* My Promise Section */}

      {/* Portfolio Section */}
      <div className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gray-400 text-sm tracking-widest mb-4">
              PORTFOLIO
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-700 tracking-wide">
              HIGHLIGHTED WORKS
            </h1>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.names}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-lg font-serif italic text-gray-700 mb-1">
                    {item.names}
                  </h3>
                  <p className="text-xs tracking-widest text-gray-400 uppercase">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          src={PromiseHeroImg}
          alt="Promise background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative bg-white bg-opacity-95 py-12 px-16 max-w-2xl mx-4 text-center">
          <h2 className="text-4xl font-serif italic text-gray-600 mb-6">
            My Promise
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            I guarantee breathtaking wedding photos that perfectly capture the
            magic of your special day, or your money back.
          </p>
        </div>
      </div>

      {/* Stay Beautiful Section */}
      <div className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left px-4">
              <p className="text-gray-400 text-xs tracking-widest mb-4 uppercase">
                YOU'RE PERFECT
              </p>
              <h2 className="text-4xl md:text-5xl font-serif italic text-gray-700 mb-6">
                Stay Beautiful
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur. Ac in bibendum pharetra
                justo vitae est placerat. Eget tortor lacus porta pellentesque
                odio velit habitant nisl dignissim.
              </p>
              <button className="bg-gray-200 text-gray-700 px-8 py-3 text-sm tracking-widest hover:bg-gray-300 transition-colors">
                Enquire Now
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full">
              <img
                src={BouquetImg}
                alt="Wedding bouquet"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioPage;
