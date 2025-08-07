"use client";

import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen flex flex-col justify-center items-center bg-[#FFF8FA] text-[#333333] px-4"
    >
      <div className="w-[70%] md:w-full max-w-6xl flex flex-col justify-evenly items-start gap-[4rem] py-6 text-lg  ">
        <h1 className="secondaryFont text-5xl py-6 leading-tight">
          Despre <span className="text-[#FF1493]">Mine</span>
        </h1>
        <p>
          Bună! Sunt Teo, stilist de gene certificat, cu o pasiune reală pentru
          frumusețe și eleganță naturală. Lucrez din Oradea, unde ofer servicii
          profesionale de extensii de gene, adaptate fiecărei cliente în parte –
          pentru un look rafinat, personalizat și de durată. Fie că îți dorești
          un aspect discret și natural sau un efect wow, te ajut să obții
          privirea perfectă cu ajutorul celor mai noi tehnici și produse premium
          din domeniu. Pun accent pe igienă, confort și rezultate impecabile,
          pentru ca tu să te simți în siguranță și răsfățată la fiecare ședință.
        </p>
        <div className="flex flex-col gap-4">
          <h2 className="secondaryFont text-3xl font-extrabold">
            Ce mă recomandă:
          </h2>
          <ul className="pl-4 list-disc list-inside">
            <li>
              Experiență și formări în cele mai moderne tehnici de aplicare gene
              fir cu fir, 2D, 3D.
            </li>
            <li>
              Atenție deosebită la detalii și proporții – pentru un rezultat
              armonios și natural
            </li>
            <li>Lucru cu produse profesionale, testate dermatologic</li>
            <li>O atmosferă relaxantă, perfectă pentru o pauză de frumusețe</li>
          </ul>
        </div>
        <h3 className="secondaryFont font-bold">
          Dacă ești din Oradea și cauți un specialist în extensii de gene care
          pune accent pe calitate și siguranță, te invit să descoperi serviciile
          mele. Programează o ședință și hai să creăm împreună un look care îți
          evidențiază frumusețea naturală
        </h3>
      </div>
    </div>
  );
};

export default About;
