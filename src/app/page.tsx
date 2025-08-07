"use client";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Preturi from "./Components/Preturi";
import Info from "./Components/Info";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Preturi />
      <Info />
    </div>
  );
}
