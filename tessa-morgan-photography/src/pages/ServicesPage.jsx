import React, { useState } from "react";

import ServiceHeroImage from "../assets/hero2.jpg";
import WeddingImage from "../assets/img7.jpg";
import PortraitImage from "../assets/img8.jpg";
import EngagementImage from "../assets/img9.jpg";
import LeafLogo from "../assets/Vector.png";
import ProcessImg1 from "../assets/img10.jpg";
import ProcessImg2 from "../assets/img11.jpg";
import ProcessImg3 from "../assets/img12.jpg";
import ProcessImg4 from "../assets/img13.jpg";
import ProcessImg5 from "../assets/img14.jpg";
import FAQImg1 from "../assets/img15.jpg";
import FAQImg2 from "../assets/img16.jpg";

function ServicePage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const serifClassic = "font-serif-classic";
  const subheadingFont = "font-ephesis";
  const cormorant = "font-cormorant";
  const taupeGold = "#A08060";

  const packages = [
    {
      title: "Wedding",
      image: WeddingImage,
      features: [
        "500+ High-Quality Photos",
        "6 Hours HD Footage",
        "*Additional Photographer subject to charge",
        "*Videographer subject to charge",
      ],
      price: "$799",
    },
    {
      title: "Portrait",
      image: PortraitImage,
      features: [
        "Atleast 10 High Quality Photos",
        "Professionally Edited",
        "Hourly rates applied",
        "*Videographer subject to charge",
      ],
      price: "$399",
    },
    {
      title: "Engagement",
      image: EngagementImage,
      features: [
        "300 High-Quality Photos",
        "3 Hours HD Footage",
        "*Additional Photographer subject to charge",
        "*Videographer subject to charge",
      ],
      price: "$799",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "BREAKING THE ICE",
      description:
        "Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequar nec potenti. Justo molestie amet vulputate aliquam.",
      image: ProcessImg1,
    },
    {
      number: "2",
      title: "PLANNING & PREPARATION",
      description:
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra.",
      image: ProcessImg3,
    },
    {
      number: "3",
      title: "SESSION COVERAGE",
      description:
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra.",
      image: ProcessImg2,
    },
    {
      number: "4",
      title: "POST-PRODUCTION & DELIVERY",
      description:
        "Lorem ipsum dolor sit amet consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.",
      image: ProcessImg4,
    },
  ];

  const faqs = [
    {
      question: "WHAT IS YOUR PHOTOGRAPHY STYLE?",
      answer:
        "Our photography style blends timeless elegance with candid moments, capturing authentic emotions and creating artistic compositions that tell your unique story.",
    },
    {
      question: "HOW FAR IN ADVANCE CAN SHOULD WE BOOK YOUR SERVICES?",
      answer:
        "We recommend booking 6-12 months in advance for weddings and 2-4 weeks for portrait sessions to ensure availability on your preferred date.",
    },
    {
      question: "DO YOU REQUIRE A DEPOSIT, AND WHAT ARE YOUR PAYMENT TERMS?",
      answer:
        "Yes, we require a 30% deposit to secure your booking. The remaining balance is due one week before your session. We accept various payment methods for your convenience.",
    },
    {
      question: "CAN WE CUSTOMIZE A PHOTOGRAPHY PACKAGE TO FIT YOUR NEEDS?",
      answer:
        "Absolutely! We offer flexible packages and can customize services to match your specific requirements, budget, and vision for your special day.",
    },
    {
      question: "HOW SOON AFTER THE EVENT WILL I RECEIVE MY PHOTOS?",
      answer:
        "Wedding photos are typically delivered within 4-6 weeks, while portrait sessions are ready in 2-3 weeks. You'll receive a beautiful online gallery with high-resolution images.",
    },
  ];

  return (
    <>
      <div className="relative h-[350px] mt-[160px] flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ServiceHeroImage})` }}
        ></div>
      </div>

      {/* Photography Packages Section */}
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-sm tracking-widest mb-4">
              SERVICES
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 tracking-wide">
              PHOTOGRAPHY PACKAGES
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full aspect-[3/4] mb-6 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-3xl font-serif text-gray-700 mb-6 italic">
                  {pkg.title}
                </h2>

                <div className="text-center mb-6 space-y-2 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <p
                      key={idx}
                      className={`text-sm ${
                        feature.startsWith("*")
                          ? "text-gray-500 italic"
                          : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-400 tracking-widest mb-2">
                    PER SESSION
                  </p>
                  <p className="text-4xl font-serif text-gray-700">
                    {pkg.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="border border-gray-300 text-gray-600 px-8 py-3 text-sm tracking-widest hover:bg-gray-50 transition-colors">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

      {/* Award Section */}
      <div className="w-full py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={LeafLogo}
            alt="Delicate Leaf Logo"
            className="w-16 h-auto mx-auto mb-4"
          />

          <p className="text-sm tracking-widest uppercase mb-8 text-gray-500 font-light">
            AWARD WINNING PHOTOGRAPHY
          </p>

          <h3 className="text-3xl sm:text-5xl font-serif font-light leading-snug text-gray-700">
            Celebrate your love with stunning images that will be cherished for
            a lifetime
          </h3>
        </div>
      </div>

      {/* Process Section */}
      <div className="w-full py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-sm tracking-widest mb-4">
              PROCESS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-700 italic">
              What to Expect
            </h2>
          </div>

          {/* Row 1: Image - Content - Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start">
            <div className="w-full">
              <img
                src={ProcessImg1}
                alt="Breaking the Ice"
                className="w-full h-[450px] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center text-center px-4">
              <p className="text-6xl font-serif text-amber-700 mb-4">1</p>
              <h3 className="text-xs tracking-widest uppercase text-gray-600 mb-4">
                BREAKING THE ICE
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet as a consectetur. Rutrum ins
                tincidunt consequar nec potenti. Justo molestie amet vulputate
                aliquam.
              </p>
            </div>

            <div className="w-full">
              <img
                src={ProcessImg2}
                alt="Session Coverage"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Row 2: Content - Image (Center) - Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start">
            <div className="flex flex-col justify-center text-center px-4">
              <p className="text-6xl font-serif text-amber-700 mb-4">2</p>
              <h3 className="text-xs tracking-widest uppercase text-gray-600 mb-4">
                PLANNING & PREPARATION
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                consequat nec potenti. Justo molestie amet vulputate aliquam
                viverra ut viverra.
              </p>
            </div>

            <div className="w-full">
              <img
                src={ProcessImg3}
                alt="Planning & Preparation"
                className="w-full h-[450px] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center text-center px-4">
              <p className="text-6xl font-serif text-amber-700 mb-4">3</p>
              <h3 className="text-xs tracking-widest uppercase text-gray-600 mb-4">
                SESSION COVERAGE
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt
                consequat nec potenti. Justo molestie amet vulputate aliquam
                viverra ut viverra.
              </p>
            </div>
          </div>

          {/* Row 3: Image - Content - Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="w-full">
              <img
                src={ProcessImg4}
                alt="Post-Production"
                className="w-full h-[450px] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center text-center px-4">
              <p className="text-6xl font-serif text-amber-700 mb-4">4</p>
              <h3 className="text-xs tracking-widest uppercase text-gray-600 mb-4">
                POST-PRODUCTION & DELIVERY
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Rutrum ins tincidunt
                consequat nec potenti. Justo molestie amet vulputate.
              </p>
            </div>

            <div className="w-full">
              <img
                src={ProcessImg5}
                alt="Final Delivery"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-sm tracking-widest mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-700 italic">
              Any Queries?
            </h2>
          </div>

          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full py-6 flex justify-between items-center text-left hover:bg-gray-100 transition-colors px-4"
                >
                  <span className="text-sm tracking-wider text-gray-600 uppercase">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-gray-400">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="pb-6 px-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quality Service Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white p-8 md:p-12">
            <div>
              <img
                src={FAQImg1}
                alt="Wedding table setup"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="text-center md:text-left px-4">
              <h3 className="text-4xl font-serif text-gray-700 italic mb-6">
                Quality Service
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                On your big day, you can count on me to turn fleeting moments
                into timeless treasures you will cherish for generations.
              </p>
              <button className="bg-slate-300 text-gray-700 px-8 py-3 text-sm tracking-widest hover:bg-gray-300 transition-colors">
                Enquire Now
              </button>
              <img
                src={FAQImg2}
                alt="Wedding rings"
                className="w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicePage;
