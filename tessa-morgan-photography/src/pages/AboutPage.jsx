import React, { useState } from "react";

import AboutHeroImage from "../assets/hero2.jpg";
import StoryImg from "../assets/img17.jpg";
import GalleryImg1 from "../assets/img18.jpg";
import GalleryImg2 from "../assets/img19.jpg";
import GalleryImg3 from "../assets/img20.jpg";
import GalleryImg4 from "../assets/img21.jpg";
import FactsImg1 from "../assets/img22.jpg";
import FactsImg2 from "../assets/img23.jpg";
import FactsImg3 from "../assets/img24.jpg";
import MemoriesImg1 from "../assets/img25.jpg";
import MemoriesImg2 from "../assets/img26.jpg";

function AboutPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const serifClassic = "font-serif-classic";
  const subheadingFont = "font-ephesis";
  const cormorant = "font-cormorant";
  const taupeGold = "#A08060";

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[350px] mt-[160px] flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutHeroImage})` }}
        ></div>
      </div>

      {/* My Story Section */}
      <div className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Image */}
            <div className="order-2 md:order-1">
              <img
                src={StoryImg}
                alt="Photographer"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <p className="text-gray-400 text-sm tracking-widest mb-4">
                ABOUT
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-700 italic mb-8">
                My Story
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                  consequat nec potenti. Justo molestie amet vulputate aliquam
                  viverra ut viverra lorem. Velit tellus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                  consequat nec potenti. Justo molestie amet vulputate aliquam
                  viverra ut viverra lorem. Velit tellus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                  consequat nec potenti. Justo molestie amet vulputate aliquam
                  viverra ut viverra lorem. Velit tellus eget urna massa sed
                  egestas tortor posuere.
                </p>
              </div>

              {/* Signature */}
              <div className="mb-8">
                <svg
                  width="120"
                  height="40"
                  viewBox="0 0 120 40"
                  className="mx-auto md:mx-0"
                >
                  <path
                    d="M10 30 Q 20 10, 40 25 T 70 20 Q 85 15, 100 25"
                    stroke="#A08060"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <button className="bg-gray-200 text-gray-700 px-8 py-3 text-sm tracking-widest hover:bg-gray-300 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <img
                src={GalleryImg1}
                alt="Wedding photo 1"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="col-span-1">
              <img
                src={GalleryImg2}
                alt="Wedding photo 2"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="col-span-1">
              <img
                src={GalleryImg3}
                alt="Wedding photo 3"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="col-span-1">
              <img
                src={GalleryImg4}
                alt="Wedding photo 4"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Get to Know Me Section */}
      <div className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gray-400 text-sm tracking-widest mb-4">
              GET TO KNOW ME
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-700 italic">
              A Few Facts About Myself
            </h2>
          </div>

          {/* Row 1: Image - Content - Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start">
            <div className="w-full">
              <img
                src={FactsImg1}
                alt="Fact 1"
                className="w-full h-[300px] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center text-center px-4">
              <p className="text-6xl font-serif text-amber-700 mb-4">1</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet as a consectetur. Rutrum ins
                tincidunt consequar nec potenti. Justo molestie amet vulputate
                aliquam viverra ut viverra lorem. Velit tellus vitae urna
                egestas tortor posuere.
              </p>
            </div>

            <div className="w-full">
              <img
                src={FactsImg2}
                alt="Fact 2"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>

          {/* Row 2: Content - Image - Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col justify-center text-center px-4">
              <p className="text-6xl font-serif text-amber-700 mb-4">2</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                consequat nec potenti. Justo molestie amet vulputate aliquam
                viverra ut viverra. Velit tellus vitae urna massa sed egestas
                tortor posuere.
              </p>
            </div>

            <div className="w-full">
              <img
                src={FactsImg3}
                alt="Fact 3"
                className="w-full h-[300px] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center text-center px-4">
              <p className="text-6xl font-serif text-amber-700 mb-4">3</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                consequat nec potenti. Justo molestie amet vulputate aliquam
                viverra. Velit tellus vitae urna massa sed egestas tortor
                posuere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Crafting Memories Section */}
      <div className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xl font-bold tracking-widest mb-4">
                CRAFTING MEMORIES
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-700 italic mb-8">
                Your Story, My Lens
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Your wedding day is a once-in-a-lifetime event, and choosing the
                right photographer is essential. I would be blessed to be a part
                of your special day.
              </p>
              <button className="bg-gray-200 text-gray-700 px-8 py-3 text-sm tracking-widest hover:bg-gray-300 transition-colors">
                Book Now
              </button>
            </div>

            {/* Right: Overlapping Images */}
            <div className="relative h-[500px]">
              {/* Background Image */}
              <div className="absolute top-0 left-0 w-3/4 h-[350px]">
                <img
                  src={MemoriesImg1}
                  alt="Wedding couple"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Image */}
              <div className="absolute bottom-0 right-0 w-3/4 h-[350px] border-4 border-white shadow-lg">
                <img
                  src={MemoriesImg2}
                  alt="Wedding arch"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
