"use client";

import React from "react";
import Image from "next/image";

const BackgroundV = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-[-3]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-5] block"
      >
        <source src="/assets/bg-video.mp4" type="video/mp4" />
      </video>

      <Image
        src="/assets/bg.webp"
        alt="Background fallback"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70 z-[-4]"
      />
    </div>
  );
};

export default BackgroundV;
