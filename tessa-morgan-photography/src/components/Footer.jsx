import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const FacebookIcon = ({ size = 22, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 22, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6.1-2.1-.8-.3-1.5-.9-2.1-1.7-.1-.2-.2-.5-.3-.7.5.1 1.1.1 1.6 0-1.2-.5-2.2-1.5-2.7-2.8.2.1.3.1.5.1.5 0 1-.1 1.4-.4-.8-.2-1.5-.8-2.1-1.6-.3-.6-.5-1.2-.5-2 0-.4.1-.9.2-1.3-.4.2-1.4.6-2.5 1.4-.6.4-1.2.9-1.8 1.4-.4-.8-.7-1.6-.7-2.5 0-1.4.5-2.7 1.4-3.8C8.8 4.7 12 3 15.6 3c-.1 1-.2 2.1-.2 3.1.2.1.4.1.6.1 2.5 0 4.5-2 4.5-4.5 0-.1 0-.2-.1-.3C20.3 3.6 21.3 4 22 4z" />
  </svg>
);

const InstagramIcon = ({ size = 22, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 22, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17.5h19v-11h-19zM10 8l6 4-6 4V8z" />
  </svg>
);

const serifClassic = "font-serif-classic";
const subheadingFont = "font-ephesis";
const cormorant = "font-cormorant";


function Footer() {
  
  const socialLinks = [
    { name: "Facebook", icon: FacebookIcon, url: "#" },
    { name: "Twitter", icon: TwitterIcon, url: "#" },
    { name: "Instagram", icon: InstagramIcon, url: "#" },
    { name: "Youtube", icon: YoutubeIcon, url: "#" },
  ];

  const footerBgStyle = {
    backgroundColor: "rgb(245, 245, 240)",
  };

  const taupeGold = "#A08060";


  const logoImageUrl = "assets/logo.png"; 

  return (
    <footer 
      className="w-full text-center py-16 md:py-24 border-t mt-32 border-gray-200"
      style={footerBgStyle}
    >
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 lg:space-x-12 mb-12">
          <div className="flex space-x-6 lg:space-x-8 text-gray-700 uppercase tracking-widest text-sm">
            <a
              href="#"
              className={`hover:text-[${taupeGold}] transition-colors ${serifClassic}`}
            >
              Home
            </a>

            <a
              href="#"
              className={`hover:text-[${taupeGold}] transition-colors ${serifClassic}`}
            >
              About
            </a>

            <a
              href="#"
              className={`hover:text-[${taupeGold}] transition-colors ${serifClassic}`}
            >
              Services
            </a>
          </div>

          <div className="text-center mx-12">
            <Link to="/">
              <img
                src={Logo}
                alt="Tessa Morgan Photography Logo"
                className=" mx-auto"
              />
            </Link>
          </div>

          <div className="flex space-x-6 lg:space-x-8 text-gray-700 uppercase tracking-widest text-sm">
            <a
              href="#"
              className={`hover:text-[${taupeGold}] transition-colors ${serifClassic}`}
            >
              Portfolio
            </a>

            <a
              href="#"
              className={`hover:text-[${taupeGold}] transition-colors ${serifClassic}`}
            >
              Blog
            </a>

            <a
              href="#"
              className={`hover:text-[${taupeGold}] transition-colors ${serifClassic}`}
            ></a>
          </div>
        </nav>

        <div className="max-w-xl mx-auto mb-10">
          <p
            className={`text-base ${serifClassic} text-gray-600 leading-relaxed`}
          >
            Lorem ipsum dolor sit amet consectetur. Morbi volut tempus posuere
            viverra massa fames sed. Dignissim urisus et ac egestas dignissim.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-10">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                className="transition-all flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-sm hover:shadow-lg transform hover:scale-105"
                style={{
                  border: `2px solid ${taupeGold}`,
                  color: taupeGold,
                }}
              >
                <IconComponent color={taupeGold} size={22} />
              </a>
            );
          })}
        </div>

        <p className={`text-sm ${serifClassic} text-gray-500`}>
          Copyright 2024 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
