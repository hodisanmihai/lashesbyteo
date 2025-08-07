"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["About", "Preturi", "Info", "Galerie", "Contact"];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[80px] z-50 flex justify-between items-center px-6 backdrop-blur-sm md:backdrop-blur-none">
        {/* Logo */}
        <div className="relative w-24 h-full">
          <a href="#hero">
            <Image
              src="/assets/logo.PNG"
              alt="lashesbyteo"
              fill
              className="object-contain"
            />
          </a>
        </div>

        {/* Desktop nav */}
        <div className="group hidden md:flex bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-md py-4 px-12 gap-6 text-[#333333]">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-all duration-300 hover:blur-none group-hover:blur-[2px] "
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social icons desktop */}
        <div className="hidden md:flex gap-6 text-black">
          <a
            href="https://www.instagram.com/lashes.by.teo/"
            target="_blank"
            className="hover:text-[#E1306C] transition-transform duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram className="w-[1.7rem] h-[1.75rem]" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61578594477142"
            target="_blank"
            className="hover:text-[#1877F2] transition-transform duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebook className="w-[1.7rem] h-[1.75rem]" />
          </a>
          <a
            href="https://www.tiktok.com/@teotirpe"
            className="hover:text-[#00f2ea] transition-transform duration-300 hover:scale-110"
            aria-label="TikTok"
            target="_blank"
          >
            <FaTiktok className="w-[1.7rem] h-[1.75rem]" />
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden  focus:outline-none z-60 relative w-8 h-8 flex flex-col justify-center items-center gap-[6px]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {/* Linie burger transformata in X */}
          <span
            className={`block h-1 w-full bg-[#333333] rounded-sm transition-transform duration-300 ease-in-out origin-center ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block h-1 w-full bg-[#333333] rounded-sm transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1 w-full bg-[#333333] rounded-sm transition-transform duration-300 ease-in-out origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[14px]" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed  left-0 w-full h-full bg-white/40 backdrop-blur-md z-40 flex flex-col justify-center items-center p-8 text-[#333333]
          transition-all duration-500 ease-in-out
          ${menuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-10"}
        `}
      >
        {/* Navigation */}
        <nav className="flex flex-col gap-8 text-3xl font-semibold text-center">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#FF1493] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex gap-12 mt-16 text-4xl">
          <a
            href="https://www.instagram.com/lashes.by.teo/"
            target="_blank"
            className="hover:text-[#E1306C] transition-transform duration-300 hover:scale-125"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61578594477142"
            target="_blank"
            className="hover:text-[#1877F2] transition-transform duration-300 hover:scale-125"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.tiktok.com/@teotirpe"
            target="_blank"
            className="hover:text-[#00f2ea] transition-transform duration-300 hover:scale-125"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
