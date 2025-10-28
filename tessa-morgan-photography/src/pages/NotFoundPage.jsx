import React from "react";
import AboutHeroImage from "../assets/hero2.jpg";
const serifClassic = "font-serif-classic";
const subheadingFont = "font-ephesis";
const taupeGold = "#A08060";

function NotFoundPage() {
  return (
    <>
      {/* Hero Image Section */}
      <div className="relative h-[350px]  mt-[160px] flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutHeroImage})` }}
        ></div>
      </div>

      {/* 404 Content Section */}
      <div className="pt-20 pb-20 px-4 min-h-[60vh] flex flex-col items-center justify-center text-center bg-white">
        <h1
          className={`text-9xl font-extrabold ${subheadingFont} mb-4`}
          style={{ color: taupeGold }}
        >
          404
        </h1>
        <h2
          className={`text-4xl md:text-5xl ${serifClassic} text-gray-800 mb-6 tracking-wider uppercase`}
        >
          Page Not Found
        </h2>
        <p className={`${serifClassic} text-lg text-gray-600 mb-10 max-w-xl`}>
          It looks like the page you were looking for doesn't exist. Please
          check the URL or return to the homepage.
        </p>

        <a
          href="/"
          className={`py-3 px-8 rounded-lg text-white font-semibold uppercase tracking-widest transition-opacity hover:opacity-90 ${serifClassic}`}
          style={{ backgroundColor: taupeGold }}
        >
          Home
        </a>
      </div>
    </>
  );
}

export default NotFoundPage;