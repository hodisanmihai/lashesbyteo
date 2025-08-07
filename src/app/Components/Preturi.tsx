"use client";

import React from "react";
import PriceCard from "./PriceCard";

const Preturi = () => {
  const priceCards = [
    {
      title: "Gene 1D",
      prices: [
        { label: "Aplicare completă", price: "60 lei" },
        { label: "Întreținere (2-3 săptămâni)", price: "40 lei" },
        { label: "Demontare gene separat", price: "20 lei" },
        { label: "Demontare cu aplicare nouă", price: "Gratuit" },
      ],
      description: "Gene fir cu fir, pentru un look natural și elegant.",
    },
    {
      title: "Gene 2D",
      prices: [
        { label: "Aplicare completă", price: "70 lei" },
        { label: "Întreținere (2-3 săptămâni)", price: "50 lei" },
        { label: "Demontare gene separat", price: "20 lei" },
        { label: "Demontare cu aplicare nouă", price: "Gratuit" },
      ],
      description: "Gene volum dublu pentru un efect mai intens.",
    },
    {
      title: "Gene 2D",
      prices: [
        { label: "Aplicare completă", price: "70 lei" },
        { label: "Întreținere (2-3 săptămâni)", price: "50 lei" },
        { label: "Demontare gene separat", price: "20 lei" },
        { label: "Demontare cu aplicare nouă", price: "Gratuit" },
      ],
      description: "Gene volum dublu pentru un efect mai intens.",
    },
    {
      title: "Gene 2D",
      prices: [
        { label: "Aplicare completă", price: "70 lei" },
        { label: "Întreținere (2-3 săptămâni)", price: "50 lei" },
        { label: "Demontare gene separat", price: "20 lei" },
        { label: "Demontare cu aplicare nouă", price: "Gratuit" },
      ],
      description: "Gene volum dublu pentru un efect mai intens.",
    },
    {
      title: "Gene 3D",
      prices: [
        { label: "Aplicare completă", price: "80 lei" },
        { label: "Întreținere (2-3 săptămâni)", price: "60 lei" },
        { label: "Demontare gene separat", price: "20 lei" },
        { label: "Demontare cu aplicare nouă", price: "Gratuit" },
      ],
      description: "Volum triple pentru un efect dramatic și plin.",
    },
  ];

  return (
    <div
      id="preturi"
      className="w-full h-auto flex flex-col justify-center items-center bg-[#FFF8FA] text-[#333333] px-6 py-12"
    >
      <div className="w-[70%] md:w-full max-w-6xl justify-center flex-col  ">
        <h1 className="secondaryFont text-5xl py-6 leading-tight text-[#FF1493]">
          Prețuri
        </h1>
      </div>
      <div className="w-full flex items-center  md:max-w-[70%] flex-nowrap space-x-6 overflow-auto overscroll-x-contain px-12 py-6 scrollbar-thin scrollbar-thumb-[#FF1493] scrollbar-track-transparent">
        {priceCards.map(({ title, description, prices }, index) => (
          <PriceCard
            key={index}
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
