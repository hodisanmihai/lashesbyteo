"use client";

import React from "react";

interface PriceItem {
  label: string;
  price: string;
}

interface PriceCardProps {
  title: string;
  description: string;
  prices: PriceItem[];
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  description,
  prices,
}) => {
  return (
    <div
      className={`group min-w-[300px] min-h-[350px] rounded-tr-[50px] rounded-bl-[50px] costumeShadow p-6 relative overflow-hidden text-[#333333] bg-white transition-transform hover:scale-[1.02] duration-300`}
    >
      <div className=" absolute text-[110px] font-bold text-black opacity-10 right-[-10px] bottom-[-20px] pointer-events-none select-none">
        {title.toUpperCase()}
      </div>

      <h1 className="secondaryFont text-2xl mb-1 z-10 relative">{title}</h1>
      <p className="text-sm text-black/80 mb-4 z-10 relative">{description}</p>

      <ul className="z-10 relative text-sm flex flex-col gap-3 mb-6">
        {prices.map(({ label, price }, idx) => (
          <li
            key={idx}
            className="flex justify-between border-b border-black/20 pb-2"
          >
            <span>{label}</span>
            <span className="font-semibold">{price}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://ig.me/m/lashes.by.teo"
        className=" absolute right-[-30%] bottom-[-10%] bg-[#FF1493] text-white rounded-[30%] w-[200px] h-[100px] flex items-center justify-start pl-6 transition-all duration-500 group-hover:right-0 group-hover:w-full group-hover:rounded-none group-hover:justify-center group-hover:mb-4 bounce-x "
      >
        <div className="font-bold text-sm hover:underline transition-all ">
          Programează-te
        </div>
      </a>
    </div>
  );
};

export default PriceCard;
