import React from "react";

import AboutHeroImage from "../assets/hero2.jpg";
import BlogImg1 from "../assets/img27.jpg";
import BlogImg2 from "../assets/img28.jpg";
import BlogImg3 from "../assets/img29.jpg";
import BlogImg4 from "../assets/img30.jpg";
import BlogImg5 from "../assets/img31.jpg";
import BlogImg6 from "../assets/img32.jpg";

function BlogPage() {
  const blogPosts = [
    {
      image: BlogImg1,
      title: "GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY",
      date: "28 July 2023",
      category: "Wedding",
      excerpt:
        "Thoughtful and personalized gift ideas that will make the wedding day even more special for the couple.",
    },
    {
      image: BlogImg2,
      title: "STYLISH DECOR THEMES FOR MODERN WEDDINGS",
      date: "2 August 2023",
      category: "Wedding",
      excerpt:
        "Explore creative and elegant decor trends to transform your wedding venue into a dreamy atmosphere.",
    },
    {
      image: BlogImg3,
      title: "HOW TO CAPTURE THE PERFECT WEDDING MOMENT",
      date: "15 August 2023",
      category: "Photography",
      excerpt:
        "Tips from professional photographers on how to capture timeless and emotional wedding shots.",
    },
    {
      image: BlogImg4,
      title: "ELEGANT BRIDAL FASHION TRENDS OF THE YEAR",
      date: "5 September 2023",
      category: "Fashion",
      excerpt:
        "From minimalistic gowns to floral details, discover the latest fashion inspiration for brides.",
    },
    {
      image: BlogImg5,
      title: "TOP DESTINATION WEDDINGS IN INDIA",
      date: "20 September 2023",
      category: "Travel",
      excerpt:
        "A curated list of the most romantic and breathtaking destinations for a perfect wedding getaway.",
    },
    {
      image: BlogImg6,
      title: "CREATIVE INVITATION IDEAS TO WOW YOUR GUESTS",
      date: "10 October 2023",
      category: "Design",
      excerpt:
        "Unique and innovative invitation designs that reflect your love story and wedding theme.",
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

      {/* Latest Stories Section */}
      <div className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-gray-400 text-sm tracking-widest mb-4">BLOG</p>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-700 mb-6">
              LATEST STORIES
            </h1>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
              Explore our latest wedding stories, photography tips, and bridal
              inspirations beautifully captured and told.
            </p>
          </div>

          {/* Blog Grid - Two per row, with proper spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Blog Image */}
                <div className="h-72 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-15 flex flex-col justify-between ">
                  <h3 className="text-xl p-4 font-serif text-gray-800 mb-4 hover:text-gray-900 transition-colors cursor-pointer">
                    {post.title}
                  </h3>

                  <div className="flex items-center p-4 gap-4 mb-3 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed p-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
