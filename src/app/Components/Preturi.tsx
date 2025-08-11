"use client";

import React, { useEffect, useState } from "react";
import PriceCard from "./PriceCard";
import { client } from "@/sanity/lib/client";

interface PriceItem {
  label: string;
  price: string;
}

interface PreturiData {
  title: string;
  description?: string;
  prices: PriceItem[];
}

const Preturi = () => {
  const [priceCards, setPriceCards] = useState<PreturiData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "preturi"]{
        title,
        description,
        prices[]{
          label,
          price
        }
      }`);

      setPriceCards(data || []);
    };

    fetchData();
  }, []);

  if (priceCards.length === 0) {
    <div
      id="preturi"
      className="w-full h-auto flex flex-col justify-center items-center bg-[#FFF8FA] text-[#333333] px-6 py-12"
    >
      <div className="w-[70%] md:w-full max-w-6xl justify-center flex-col">
        <h1 className="secondaryFont text-5xl py-6 leading-tight text-[#FF1493]">
          Prețuri
        </h1>
      </div>
      <p className="w-full flex items-center md:max-w-[70%] flex-nowrap space-x-6 overflow-auto overscroll-x-contain px-12 py-6 scrollbar-thin scrollbar-thumb-[#FF1493] scrollbar-track-transparent">
        Se Incarca ...
      </p>
    </div>;
  }

  return (
    <div
      id="preturi"
      className="w-full h-auto flex flex-col justify-center items-center bg-[#FFF8FA] text-[#333333] px-6 py-12"
    >
      <div className="w-[70%] md:w-full max-w-6xl justify-center flex-col">
        <h1 className="secondaryFont text-5xl py-6 leading-tight text-[#FF1493]">
          Prețuri
        </h1>
      </div>
      <div className="w-full flex items-center md:max-w-[70%] flex-nowrap space-x-6 overflow-auto overscroll-x-contain px-12 py-6 scrollbar-thin scrollbar-thumb-[#FF1493] scrollbar-track-transparent">
        {priceCards.map(({ title, description = "", prices = [] }, idx) => (
          <PriceCard
            key={idx}
            title={title}
            description={description}
            prices={prices}
          />
        ))}
      </div>
    </div>
  );
};

export default Preturi;
