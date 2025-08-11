"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    document.body.classList.add("no-scroll");

    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        document.body.classList.remove("no-scroll");
        setShouldRender(false);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    if (!visible) {
      setShouldRender(false);

      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <AnimatePresence>
      {visible && shouldRender && (
        <motion.div
          className="w-full h-full fixed bg-black flex justify-center items-center z-[1000]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            src="/assets/logo.PNG"
            alt="lashes by teo"
            className="w-[150px] h-[150px] object-contain"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
