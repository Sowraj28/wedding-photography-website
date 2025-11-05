import React from "react";
import { useParams, Link } from "react-router-dom";
import BlogHeroImage from "../assets/hero2.jpg";
import BlogImg1 from "../assets/img27.jpg";
import BlogImg2 from "../assets/img28.jpg";
import BlogImg3 from "../assets/img29.jpg";
import BlogImg4 from "../assets/img30.jpg";
import BlogImg5 from "../assets/img31.jpg";
import BlogImg6 from "../assets/img32.jpg";

function BlogDetail() {
  const { id } = useParams();

  const blogData = {
    "gift-ideas": {
      id: "gift-ideas",
      heroImage: BlogHeroImage,
      title: "GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY",
      date: "28 July 2023",
      category: "Wedding",
      contentImages: [BlogImg2, BlogImg3],
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra. Amet pellentesque nunc elit dui lacus ultricies non nisi. Morbi dui consectetur blandit suspendisse cras. Justo molestie amet vulputate aliquam viverra ut viverra.",
        "Molestie amet vulputate aliquam viverra ut viverra. Amet pellentesque nunc elit dui lacus ultricies non nisi. Morbi dui consectetur blandit suspendisse cras. Justo molestie amet vulputate aliquam viverra ut viverra.",
        "A blog post is bread-and-butter here. Lorem ipsum dolor sit amet consectetur. Velit ultrices massa cursus ultricies dignissim consequat.",
      ],
      quote:
        "A blog post is bread-and-butter here. Lorem ipsum dolor sit amet consectetur. Velit ultrices massa cursus ultricies dignissim consequat.",
      closingText:
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra. Pellentesque nunc elit dui lacus ultricies non nisi.",
    },
    "stylish-decor": {
      id: "stylish-decor",
      heroImage: BlogHeroImage,
      title: "STYLISH DECOR THEMES FOR MODERN WEDDINGS",
      date: "2 August 2023",
      category: "Wedding",
      contentImages: [BlogImg4, BlogImg5],
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra. Amet pellentesque nunc elit dui lacus ultricies non nisi.",
        "Molestie amet vulputate aliquam viverra ut viverra. Amet pellentesque nunc elit dui lacus ultricies non nisi. Morbi dui consectetur blandit suspendisse cras.",
        "A blog post is bread-and-butter here. Lorem ipsum dolor sit amet consectetur. Velit ultrices massa cursus ultricies dignissim consequat.",
      ],
      quote:
        "Transform your venue into a dreamy atmosphere with elegant decor trends.",
      closingText:
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra.",
    },
    "perfect-moment": {
      id: "perfect-moment",
      heroImage: BlogHeroImage,
      title: "HOW TO CAPTURE THE PERFECT WEDDING MOMENT",
      date: "15 August 2023",
      category: "Photography",
      contentImages: [BlogImg1, BlogImg6],
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra.",
        "Molestie amet vulputate aliquam viverra ut viverra. Amet pellentesque nunc elit dui lacus ultricies non nisi.",
        "Tips from professional photographers on capturing timeless moments.",
      ],
      quote:
        "Every moment is precious and deserves to be captured beautifully.",
      closingText:
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti.",
    },
    "bridal-fashion": {
      id: "bridal-fashion",
      heroImage: BlogHeroImage,
      title: "ELEGANT BRIDAL FASHION TRENDS OF THE YEAR",
      date: "5 September 2023",
      category: "Fashion",
      contentImages: [BlogImg2, BlogImg5],
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra.",
        "From minimalistic gowns to floral details, discover the latest fashion inspiration for brides.",
        "A blog post is bread-and-butter here. Lorem ipsum dolor sit amet consectetur.",
      ],
      quote: "Fashion is what you buy, style is what you do with it.",
      closingText:
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti.",
    },
    "destination-weddings": {
      id: "destination-weddings",
      heroImage: BlogHeroImage,
      title: "TOP DESTINATION WEDDINGS IN INDIA",
      date: "20 September 2023",
      category: "Travel",
      contentImages: [BlogImg3, BlogImg6],
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra.",
        "A curated list of the most romantic and breathtaking destinations for a perfect wedding getaway.",
        "Molestie amet vulputate aliquam viverra ut viverra.",
      ],
      quote:
        "Love knows no boundaries, celebrate it at your dream destination.",
      closingText:
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti.",
    },
    "creative-invitations": {
      id: "creative-invitations",
      heroImage: BlogHeroImage,
      title: "CREATIVE INVITATION IDEAS TO WOW YOUR GUESTS",
      date: "10 October 2023",
      category: "Design",
      contentImages: [BlogImg1, BlogImg4],
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra.",
        "Unique and innovative invitation designs that reflect your love story and wedding theme.",
        "A blog post is bread-and-butter here. Lorem ipsum dolor sit amet consectetur.",
      ],
      quote:
        "The first impression matters, make your invitations unforgettable.",
      closingText:
        "Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti.",
    },
  };

  const blog = blogData[id];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-gray-700 mb-4">
            Blog Not Found
          </h1>
          <Link to="/blog" className="text-gray-600 hover:text-gray-800">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[400px]  mt-[160px]">
        <img
          src={blog.heroImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Title Section */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-xs tracking-widest mb-4 uppercase">
            {blog.category}
          </p>
          <h1 className="text-3xl md:text-4xl font-serif text-gray-700 mb-6 leading-tight">
            {blog.title}
          </h1>
          <p className="text-gray-500 text-sm">{blog.date}</p>
        </div>

        {/* Main Content Image */}
        <div className="mb-12">
          <img
            src={blog.contentImages[0]}
            alt="Content"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-gray-600 text-sm leading-relaxed mb-12">
          {blog.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Quote Section */}
        <div className="bg-gray-50 p-8 my-12 text-center">
          <p className="text-2xl font-serif italic text-gray-700 leading-relaxed">
            "{blog.quote}"
          </p>
        </div>

        {/* Second Content Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <img
            src={blog.contentImages[1]}
            alt="Content detail 1"
            className="w-full h-64 object-cover"
          />
          <img
            src={blog.contentImages[0]}
            alt="Content detail 2"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Closing Text */}
        <div className="text-gray-600 text-sm leading-relaxed mb-12">
          <p>{blog.closingText}</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link
            to="/blog"
            className="text-gray-600 text-sm hover:text-gray-800"
          >
            ← Back
          </Link>
          <Link
            to="/blog"
            className="text-gray-600 text-sm hover:text-gray-800"
          >
            View Gallery →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
