import React from "react";
import { Link } from "react-router-dom";

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
      id: "gift-ideas",
      image: BlogImg1,
      title: "GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY",
      date: "28 July 2023",
      category: "Wedding",
      excerpt:
        "Thoughtful and personalized gift ideas that will make the wedding day even more special for the couple.",
    },
    {
      id: "stylish-decor",
      image: BlogImg2,
      title: "STYLISH DECOR THEMES FOR MODERN WEDDINGS",
      date: "2 August 2023",
      category: "Wedding",
      excerpt:
        "Explore creative and elegant decor trends to transform your wedding venue into a dreamy atmosphere.",
    },
    {
      id: "perfect-moment",
      image: BlogImg3,
      title: "HOW TO CAPTURE THE PERFECT WEDDING MOMENT",
      date: "15 August 2023",
      category: "Photography",
      excerpt:
        "Tips from professional photographers on how to capture timeless and emotional wedding shots.",
    },
    {
      id: "bridal-fashion",
      image: BlogImg4,
      title: "ELEGANT BRIDAL FASHION TRENDS OF THE YEAR",
      date: "5 September 2023",
      category: "Fashion",
      excerpt:
        "From minimalistic gowns to floral details, discover the latest fashion inspiration for brides.",
    },
    {
      id: "destination-weddings",
      image: BlogImg5,
      title: "TOP DESTINATION WEDDINGS IN INDIA",
      date: "20 September 2023",
      category: "Travel",
      excerpt:
        "A curated list of the most romantic and breathtaking destinations for a perfect wedding getaway.",
    },
    {
      id: "creative-invitations",
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

          {/* Blog Grid - Two per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.id}`}
                className="bg-white overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Blog Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Blog Content */}
                <div className="pt-6 pb-8 px-0">
                  <h3 className="text-xl font-serif text-gray-800 mb-4 leading-snug tracking-wide">
                    {post.title}
                  </h3>

                  <div className="flex flex-col gap-1 mb-4 text-sm">
                    <p className="text-gray-600">
                      <span className="italic text-gray-800">Date:</span>{" "}
                      <span className="italic text-rose-400">{post.date}</span>
                    </p>
                    <p className="text-gray-600">
                      <span className="italic text-gray-800">Category:</span>{" "}
                      <span className="italic">{post.category}</span>
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
