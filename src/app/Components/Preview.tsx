import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreviewProps {
  image: string;
  selectedIndex: number;
}

const Preview: React.FC<PreviewProps> = ({ image, selectedIndex }) => {
  return (
    <div className="w-[350px] h-[350px] bg-gray-100 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={selectedIndex}
          src={image}
          alt="Preview"
          className="w-full h-full object-fill "
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Preview;
