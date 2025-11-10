import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Header() {
  const linkClass =
    "hover:text-slate-400 transition duration-300 cursor-pointer text-black";
  const logoTextClass =
    "text-xs tracking-widest uppercase text-stone-100 mt-0.5";

  return (
    <nav className="absolute top-0 left-0 right-0 p-8 z-30 flex justify-center items-center text-stone-200 bg-white/20 backdrop-blur-sm">
      <div className="w-full max-w-7xl flex justify-between items-center mx-auto">
        <ul className="hidden md:flex space-x-10 text-sm font-normal uppercase">
          <li className={linkClass}>
            <Link to="/">HOME</Link>
          </li>
          <li className={linkClass}>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className={linkClass}>
            <Link to="/services">SERVICES</Link>
          </li>
        </ul>

{/* Logo */}
        <div className="text-center mx-12">
          <Link to="/">
            <img
              src={Logo}
              alt="Tessa Morgan Photography Logo"
              className=" mx-auto"
            />
          </Link>
        </div>

        <ul className="hidden md:flex space-x-10 text-sm font-normal uppercase">
          <li className={linkClass}>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li className={linkClass}>
            <Link to="/blog">BLOG</Link>
          </li>
          <li className={linkClass}>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
