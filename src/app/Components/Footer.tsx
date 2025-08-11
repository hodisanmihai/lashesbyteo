"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2E2E2E] text-[#F9F9F9] px-6 py-12 flex flex-col items-center">
      <p className="mb-6 text-sm text-center   w-full max-w-6xl">
        LashesbyTeo © 2025 | Toate drepturile rezervate.
      </p>

      <div className="h-[1px] w-full bg-white/20"></div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center  flex-1">
          <div className="relative w-28 h-28">
            <Image
              src="/assets/logo.PNG"
              alt="lashesbyteo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="md:w-[1px] md:h-[6rem] hidden md:block bg-white/20"></div>

        <div className="flex flex-col items-center  flex-1">
          <h1 className="mb-3 font-semibold text-lg">Social Media</h1>
          <ul className="space-y-2 text-sm text-center">
            <li>
              <a
                href="https://www.instagram.com/lashes.by.teo/"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61578594477142"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@teotirpe"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>

        <div className=" md:w-[1px] md:h-[6rem] hidden md:block bg-white/20 text-center"></div>

        <div className="flex flex-col items-center flex-1">
          <h1 className="mb-3 font-semibold text-lg">Quick Links</h1>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Despre
              </a>
            </li>
            <li>
              <a
                href="#galerie"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Galerie
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
