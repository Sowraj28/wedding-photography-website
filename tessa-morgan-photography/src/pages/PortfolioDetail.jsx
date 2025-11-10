import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PorHeroImage from "../assets/hero2.jpg";
import PortfolioImg1 from "../assets/img41.jpg";
import PortfolioImg2 from "../assets/img42.jpg";
import PortfolioImg3 from "../assets/img43.jpg";
import PortfolioImg4 from "../assets/img44.jpg";
import PortfolioImg5 from "../assets/img45.jpg";
import PortfolioImg6 from "../assets/img46.jpg";
import PortfolioImg7 from "../assets/img47.jpg";
import PortfolioImg8 from "../assets/img48.jpg";
import PortfolioImg9 from "../assets/img49.jpg";
import LeafDecor from "../assets/leaf3.png";

function PortfolioDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Portfolio data with all details
  const portfolioData = {
    "sarah-luke-wedding": {
      names: "Sarah & Luke",
      category: "Wedding",
      date: "15 July 2023",
      mainImage2: PorHeroImage,
      mainImage: PortfolioImg1,
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae nunc vitae massa mattis quum egestas egestas integer morbi. Lectus magnis accumsan nulls vulputate.",
      galleryImages: [
        { img: PortfolioImg1, size: "large" },
        { img: PortfolioImg2, size: "small" },
        { img: PortfolioImg3, size: "large" },
      ],
      relatedWorks: [
        { img: PortfolioImg4, id: "sarah-luke-engagement" },
        { img: PortfolioImg5, id: "richard-jane-engagement" },
        { img: PortfolioImg7, id: "sarah-portrait" },
        { img: PortfolioImg8, id: "jane-portrait" },
      ],
    },
    "richard-jane-wedding": {
      names: "Richard & Jane",
      category: "Wedding",
      date: "22 August 2023",
      mainImage2: PorHeroImage,
      mainImage: PortfolioImg2,
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae nunc vitae massa mattis quum egestas egestas integer morbi. Lectus magnis accumsan nulls vulputate.",
      galleryImages: [
        { img: PortfolioImg2, size: "large" },
        { img: PortfolioImg4, size: "small" },
        { img: PortfolioImg6, size: "large" },
      ],
      relatedWorks: [
        { img: PortfolioImg5, id: "richard-jane-engagement" },
        { img: PortfolioImg1, id: "sarah-luke-wedding" },
        { img: PortfolioImg8, id: "jane-portrait" },
        { img: PortfolioImg7, id: "sarah-portrait" },
      ],
    },
    "gareth-eve-wedding": {
      names: "Gareth & Eve",
      category: "Wedding",
      date: "10 September 2023",
      mainImage2: PorHeroImage,
      mainImage: PortfolioImg3,
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae nunc vitae massa mattis quum egestas egestas integer morbi. Lectus magnis accumsan nulls vulputate.",
      galleryImages: [
        { img: PortfolioImg3, size: "large" },
        { img: PortfolioImg5, size: "small" },
        { img: PortfolioImg7, size: "large" },
      ],
      relatedWorks: [
        { img: PortfolioImg6, id: "gareth-eve-engagement" },
        { img: PortfolioImg1, id: "sarah-luke-wedding" },
        { img: PortfolioImg9, id: "angelina-portrait" },
        { img: PortfolioImg4, id: "sarah-luke-engagement" },
      ],
    },
    "sarah-luke-engagement": {
      names: "Sarah & Luke",
      category: "Engagement",
      date: "12 March 2023",
      mainImage2: PorHeroImage,
      mainImage: PortfolioImg4,
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae nunc vitae massa mattis quum egestas egestas integer morbi. Lectus magnis accumsan nulls vulputate.",
      galleryImages: [
        { img: PortfolioImg4, size: "large" },
        { img: PortfolioImg1, size: "small" },
        { img: PortfolioImg8, size: "large" },
      ],
      relatedWorks: [
        { img: PortfolioImg1, id: "sarah-luke-wedding" },
        { img: PortfolioImg5, id: "richard-jane-engagement" },
        { img: PortfolioImg7, id: "sarah-portrait" },
        { img: PortfolioImg2, id: "richard-jane-wedding" },
      ],
    },
    "richard-jane-engagement": {
      names: "Richard & Jane",
      category: "Engagement",
      date: "05 May 2023",
      mainImage2: PorHeroImage,
      mainImage: PortfolioImg5,
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae nunc vitae massa mattis quum egestas egestas integer morbi. Lectus magnis accumsan nulls vulputate.",
      galleryImages: [
        { img: PortfolioImg5, size: "large" },
        { img: PortfolioImg2, size: "small" },
        { img: PortfolioImg9, size: "large" },
      ],
      relatedWorks: [
        { img: PortfolioImg2, id: "richard-jane-wedding" },
        { img: PortfolioImg4, id: "sarah-luke-engagement" },
        { img: PortfolioImg8, id: "jane-portrait" },
        { img: PortfolioImg3, id: "gareth-eve-wedding" },
      ],
    },
    "gareth-eve-engagement": {
      names: "Gareth & Eve",
      category: "Engagement",
      date: "18 July 2023",
      mainImage2: PorHeroImage,
      mainImage: PortfolioImg6,
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae nunc vitae massa mattis quum egestas egestas integer morbi. Lectus magnis accumsan nulls vulputate.",
      galleryImages: [
        { img: PortfolioImg6, size: "large" },
        { img: PortfolioImg3, size: "small" },
        { img: PortfolioImg1, size: "large" },
      ],
      relatedWorks: [
        { img: PortfolioImg3, id: "gareth-eve-wedding" },
        { img: PortfolioImg4, id: "sarah-luke-engagement" },
        { img: PortfolioImg9, id: "angelina-portrait" },
        { img: PortfolioImg5, id: "richard-jane-engagement" },
      ],
    },
    "sarah-portrait": {
      names: "Sarah",
      category: "Portrait",
      date: "20 April 2023",
      mainImage2: PorHeroImage,
      mainImage: PortfolioImg7,
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae nunc vitae massa mattis quum egestas egestas integer morbi. Lectus magnis accumsan nulls vulputate.",
      galleryImages: [
        { img: PortfolioImg7, size: "large" },
        { img: PortfolioImg4, size: "small" },
        { img: PortfolioImg2, size: "large" },
      ],
      relatedWorks: [
        { img: PortfolioImg1, id: "sarah-luke-wedding" },
        { img: PortfolioImg8, id: "jane-portrait" },
        { img: PortfolioImg9, id: "angelina-portrait" },
        { img: PortfolioImg4, id: "sarah-luke-engagement" },
      ],
    },
    "jane-portrait": {
      names: "Jane",
      category: "Portrait",
      date: "14 June 2023",
      mainImage2: PorHeroImage,
      mainImage: PortfolioImg8,
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae nunc vitae massa mattis quum egestas egestas integer morbi. Lectus magnis accumsan nulls vulputate.",
      galleryImages: [
        { img: PortfolioImg8, size: "large" },
        { img: PortfolioImg5, size: "small" },
        { img: PortfolioImg3, size: "large" },
      ],
      relatedWorks: [
        { img: PortfolioImg2, id: "richard-jane-wedding" },
        { img: PortfolioImg7, id: "sarah-portrait" },
        { img: PortfolioImg9, id: "angelina-portrait" },
        { img: PortfolioImg5, id: "richard-jane-engagement" },
      ],
    },
    "angelina-portrait": {
      names: "Angelina",
      category: "Portrait",
      date: "08 October 2023",
      mainImage2: PorHeroImage,
      mainImage: PortfolioImg9,
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae nunc vitae massa mattis quum egestas egestas integer morbi. Lectus magnis accumsan nulls vulputate.",
      galleryImages: [
        { img: PortfolioImg9, size: "large" },
        { img: PortfolioImg6, size: "small" },
        { img: PortfolioImg4, size: "large" },
      ],
      relatedWorks: [
        { img: PortfolioImg7, id: "sarah-portrait" },
        { img: PortfolioImg8, id: "jane-portrait" },
        { img: PortfolioImg3, id: "gareth-eve-wedding" },
        { img: PortfolioImg6, id: "gareth-eve-engagement" },
      ],
    },
  };

  const portfolio = portfolioData[id];

  // If portfolio not found, redirect to portfolio page
  if (!portfolio) {
    navigate("/portfolio");
    return null;
  }

  // Decorative divider using imported image
  const DecorativeDivider = () => (
    <div className="flex justify-center my-8">
      <img
        src={LeafDecor}
        alt="Decorative leaf"
        className="w-16 h-16 object-contain"
      />
    </div>
  );

  return (
    <div className="w-full bg-white">
      {/* Hero Image Section */}
      <div className="relative h-[400px] mt-[160px] flex flex-col justify-center items-center">
        <img
          src={portfolio.mainImage2}
          alt={portfolio.names}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm tracking-widest mb-4 uppercase">
              GALLERY
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-700 mb-6">
              {portfolio.names}
            </h1>
            <div className="flex justify-center items-center gap-8 text-sm">
              <div>
                <span className="text-gray-400">Date: </span>
                <span className="text-amber-600 italic font-serif">
                  {portfolio.date}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Category: </span>
                <span className="text-amber-600 italic font-serif">
                  {portfolio.category}
                </span>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="mb-12">
            <img
              src={portfolio.mainImage}
              alt={portfolio.names}
              className="w-full h-[600px] object-cover"
            />
          </div>

          {/* Description */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-gray-600 text-sm leading-relaxed">
              {portfolio.description}
            </p>
          </div>

          {/* Gallery Grid - Asymmetric Layout */}
          <div className="mb-16 space-y-6">
            {/* First Row - Small left, Large right */}
            <div className="grid grid-cols-2 gap-6">
              <div className="overflow-hidden h-[280px]">
                <img
                  src={portfolio.galleryImages[0].img}
                  alt={`${portfolio.names} 1`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden h-[380px]">
                <img
                  src={portfolio.galleryImages[1].img}
                  alt={`${portfolio.names} 2`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Second Row - Large left, Small right */}
            <div className="grid grid-cols-2 gap-6">
              <div className="overflow-hidden h-[380px]">
                <img
                  src={portfolio.galleryImages[2].img}
                  alt={`${portfolio.names} 3`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden h-[280px]">
                <img
                  src={portfolio.galleryImages[0].img}
                  alt={`${portfolio.names} 4`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Row - Full Width Image */}
            <div className="overflow-hidden h-[400px]">
              <img
                src={portfolio.galleryImages[1].img}
                alt={`${portfolio.names} 5`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Decorative Divider */}
          <DecorativeDivider />

          {/* More Works Section */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-600 mb-12">
              More Works
            </h2>

            {/* Related Works Grid - 4 columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {portfolio.relatedWorks.map((work, index) => (
                <div
                  key={index}
                  className="cursor-pointer group overflow-hidden aspect-square"
                  onClick={() => navigate(`/portfolio/${work.id}`)}
                >
                  <img
                    src={work.img}
                    alt={`Related work ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetailPage;
