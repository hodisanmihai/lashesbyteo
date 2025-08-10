"use client";

import React, { useState } from "react";
import BackgroundV from "./BackgroundV";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./Contact";

// Array cu toate imaginile din galerie
const images = Array.from({ length: 24 }, (_, i) => `/galerie/${i + 1}.jpg`);

const IMAGES_PER_PAGE = 8;

const Galerie = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  const start = currentPage * IMAGES_PER_PAGE;
  const currentThumbnails = images.slice(start, start + IMAGES_PER_PAGE);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <div
      id="galerie"
      className="w-full h-auto flex relative flex-col justify-center items-center text-[#333333] px-6 py-12"
    >
      <svg
        className="absolute top-0 m-0 w-screen h-[80px] md:h-[100px] lg:h-[120px]"
        viewBox="0 0 1280 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M1280 0H-1L514 28C514 28 774.5 43 918 55C1061.5 67 1280 97 1280 97V0Z"
          fill="#ffffff"
        />
      </svg>

      <div className="w-full max-w-6xl flex flex-col gap-12">
        <h1 className="secondaryFont text-5xl py-6 leading-tight text-[#333333]">
          Galerie
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 ">
          <div className="w-[350px] h-[350px] bg-gray-100 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex]}
                alt={`Preview`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-4 w-[350px]">
            <div className="grid grid-cols-4 gap-2">
              {currentThumbnails.map((img, idx) => {
                const globalIndex = start + idx;
                return (
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={globalIndex}
                    src={img}
                    alt={`Thumbnail ${globalIndex}`}
                    onClick={() => handleSelect(globalIndex)}
                    className={`w-full h-[80px] object-cover rounded-lg cursor-pointer border-2 ${
                      selectedIndex === globalIndex
                        ? "border-pink-500"
                        : "border-transparent"
                    }`}
                  />
                );
              })}
            </div>

            <motion.div
              className="flex justify-center items-center gap-3 mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handlePrevPage}
                className="px-2 py-1 rounded bg-pink-500 text-white"
              >
                ◀
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-8 h-8 rounded-full ${
                    currentPage === i
                      ? "bg-pink-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                className="px-2 py-1 rounded bg-pink-500 text-white"
              >
                ▶
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <Contact />
      <BackgroundV />
    </div>
  );
};

export default Galerie;
