"use client";

import React from "react";
import BackgroundV from "./BackgroundV";
import { MoveUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" relative w-full min-h-screen flex flex-col justify-center items-center text-[#333333] px-4"
    >
      <div className="w-full max-w-6xl flex flex-col justify-evenly items-center gap-8 py-12">
        {/* headers */}
        <div className="w-full text-center px-4">
          <h1 className="secondaryFont text-3xl md:text-5xl py-6 leading-tight">
            Your life isn&rsquo;t perfect, but your lashes can be
          </h1>
          <h2 className="text-xl md:text-2xl py-4 leading-relaxed">
            Gene profesionale în Oradea, stilizate cu grijă pentru un look
            natural, elegant și de durată.
          </h2>
        </div>

        {/* 2 CTA buttons */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-base md:text-lg">
          <a
            href="#about"
            className="bg-[#FF1493] px-12 py-3 text-white rounded-full text-center hover:scale-105 hover:bg-pink-600 transition-transform duration-300 "
          >
            Află mai multe
          </a>
          <a
            href="https://ig.me/m/lashes.by.teo"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#333333] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 hover:bg-pink-600 transition-transform duration-300"
          >
            Programează-te
            <span className="bg-white text-[#333333] w-8 h-8 rounded-full flex items-center justify-center text-sm group-hover:text-pink-600 ">
              <MoveUpRight />
            </span>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center w-full max-w-4xl gap-4 mt-12 px-4 ">
        <div className="h-[1px] flex-1 bg-gradient-to-l from-[#333333] to-[#333333]/0"></div>
        <h3 className="text-center whitespace-nowrap text-sm md:text-base font-medium">
          Micile schimbări aduc cele mai mari stări
        </h3>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#333333] to-[#333333]/0"></div>
      </div>

      <BackgroundV />
    </div>
  );
};

export default Hero;
