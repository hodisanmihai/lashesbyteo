"use client";

import React from "react";

import {
  Ban,
  Clock,
  CalendarHeart,
  BellMinus,
  EyeOff,
  UserMinus,
} from "lucide-react";

interface InfoCardItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const cardItems: InfoCardItem[] = [
  {
    title: "Fără machiaj",
    description:
      "Te rog să vii fără machiaj pe față sau ochi: fără rimel, tuș, fond de ten sau cremă în jurul ochilor. Asta asigură o aplicare perfectă a extensiilor.",
    icon: <Ban size={48} />,
  },
  {
    title: "Respectă ora programării",
    description:
      "Te rog să ajungi la timp. Întârzierile mai mari de 15 minute duc automat la anularea programării.",
    icon: <Clock size={48} />,
  },
  {
    title: "Anulări cu minim 24h înainte",
    description:
      "Dacă nu mai poți ajunge, te rog să anulezi cu cel puțin 24h înainte. În caz contrar, se poate percepe un avans la următoarea programare.",
    icon: <CalendarHeart size={48} />,
  },
  {
    title: "Telefonul pe silentios",
    description:
      "Te rog să îți pui telefonul pe silențios. Ai nevoie să fii complet relaxată și cu ochii închiși pe durata procedurii.",
    icon: <BellMinus size={48} />,
  },
  {
    title: "Nu deschide ochii",
    description:
      "Nu deschide ochii în timpul lucrului. Vaporii de la adeziv pot provoca iritații sau usturimi.",
    icon: <EyeOff size={48} />,
  },
  {
    title: "Fără însoțitori",
    description:
      "Pentru confortul tău și al meu, nu este permis accesul însoțitorilor în timpul procedurii. Vreau să îți ofer toată atenția și o atmosferă liniștită.",
    icon: <UserMinus size={48} />,
  },
];

const Info = () => {
  return (
    <div
      id="info"
      className="w-full min-h-screen flex flex-col relative bg-white text-[#333333] px-4 justify-center items-center overflow-hidden"
    >
      {/* svg */}
      <svg
        className="absolute top-0 m-0 w-screen h-[80px] md:h-[100px] lg:h-[120px]"
        viewBox="0 0 1280 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M1280 0H-1L514 28C514 28 774.5 43 918 55C1061.5 67 1280 97 1280 97V0Z"
          fill="#FFF8FA"
        />
      </svg>

      {/* Content */}
      <div className="w-[90%] max-w-6xl flex flex-col justify-evenly items-start gap-12 py-8 text-lg">
        <h1 className="secondaryFont text-5xl py-6 leading-tight text-[#FF1493]">
          Informații
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {cardItems.map((item, index) => (
            <div
              key={index}
              className="min-h-[350px] rounded-tr-[50px] rounded-bl-[50px] costumeShadow px-12  bg-[#FFF8FA] flex flex-col items-center pt-0 justify-evenly hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="text-[#FF1493] text-4xl">{item.icon}</div>
              <h2 className="font-semibold text-xl">{item.title}</h2>
              <p className="text-md ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
