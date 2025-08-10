"use client";

import React from "react";
import { FaInstagram, FaFacebookMessenger } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-auto flex relative flex-col justify-center items-center text-[#333333] px-6 py-12"
    >
      <div className="w-full max-w-6xl flex flex-col justify-center  items-center gap-8">
        <h1 className="secondaryFont text-5xl py-6 leading-tight text-[#333333] self-start ">
          Contact
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Pentru detalii sau întrebări, trimite-mi un mesaj direct pe una dintre
          platformele de mai jos:
        </p>

        <div className="flex flex-wrap gap-6 mt-4 justify-center ">
          <a
            href="https://instagram.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-pink-500 text-white text-lg font-semibold shadow-lg hover:scale-105 hover:bg-pink-600 transition-transform duration-300"
          >
            <FaInstagram size={28} />
            Instagram
          </a>

          <a
            href="https://m.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-600 text-white text-lg font-semibold shadow-lg hover:scale-105 hover:bg-blue-700 transition-transform duration-300"
          >
            <FaFacebookMessenger size={28} />
            Messenger
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
