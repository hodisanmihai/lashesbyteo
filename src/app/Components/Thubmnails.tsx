import React from "react";
import { motion } from "framer-motion";

interface ThumbnailsProps {
  images: string[];
  startIndex: number;
  selectedIndex: number;
  onSelect: (index: number) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Thumbnails: React.FC<ThumbnailsProps> = ({
  images,
  startIndex,
  selectedIndex,
  onSelect,
  onPrevPage,
  onNextPage,
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="flex flex-col gap-4 w-[350px]">
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, idx) => {
          const globalIndex = startIndex + idx;
          return (
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={globalIndex}
              src={img}
              alt={`Lashes By Teo Gene Oradea${globalIndex}`}
              onClick={() => onSelect(globalIndex)}
              className={`w-full h-[80px] object-contain rounded-lg cursor-pointer border-2 ${
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
          onClick={onPrevPage}
          className="px-2 py-1 rounded bg-pink-500 text-white"
        >
          ▶
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
          onClick={onNextPage}
          className="px-2 py-1 rounded bg-pink-500 text-white"
        >
          ▶
        </button>
      </motion.div>
    </div>
  );
};

export default Thumbnails;
